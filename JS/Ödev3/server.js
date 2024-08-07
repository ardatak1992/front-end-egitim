import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import bodyParser from "body-parser";
import { __dirname } from "./utils.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set up storage with Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/avatars");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const readDataFromFile = () => {
  const dataPath = path.join(__dirname, "data", "contacts.json");
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify([]));
  }
  const data = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(data);
};

const writeDataToFile = (data) => {
  const dataPath = path.join(__dirname, "data", "contacts.json");
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET  get all contacts
app.get("/contacts", (req, res) => {
  const contacts = readDataFromFile();
  res.json(contacts);
});

// GET  get single contact
app.get("/contacts/:id", (req, res) => {
  const { id } = req.params;
  const contacts = readDataFromFile();
  const contact = contacts.find((c) => c.id === id);
  res.json(contact);
});

// POST add a contact
app.post("/add-contact", upload.single("avatar"), (req, res) => {
  const { name, surname, phone, address } = req.body;

  const avatar = req.file ? req.file.path : null;
  const contacts = readDataFromFile();
  const newContact = {
    id: uuidv4(),
    name,
    surname,
    phone,
    address,
    avatar,
  };

  contacts.push(newContact);
  writeDataToFile(contacts);

  res.send(address);
});

// PUT update a contact
app.put("/update-contact/:id", upload.single("avatar"), (req, res) => {
  const { id } = req.params;
  const { name, surname, phone, address } = req.body;
  const avatar = req.file ? req.file.path : null;

  const contacts = readDataFromFile();
  const contactIndex = contacts.findIndex((c) => c.id === id);

  if (contactIndex !== -1) {
    contacts[contactIndex] = {
      id,
      name,
      surname,
      phone,
      address,
      avatar: avatar || contacts[contactIndex].avatar,
    };
    writeDataToFile(contacts);
    res.send("Contact updated successfully");
  } else {
    res.status(404).send("Contact not found");
  }
});

// DELETE delete contact
app.delete("/delete-contact/:id", (req, res) => {
  const { id } = req.params;
  const contacts = readDataFromFile();
  const updatedContacts = contacts.filter((c) => c.id !== id);

  if (contacts.length !== updatedContacts.length) {
    writeDataToFile(updatedContacts);
    res.send("Contact deleted successfully");
  } else {
    res.status(404).send("Contact not found");
  }
});

const uploadsDir = "uploads/avatars";

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});
