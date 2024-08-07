const contactList = document.getElementById("contact-list");
const contactGrid = document.getElementById("contact-grid");
const addPersonBtn = document.getElementById("add-person");
const addForm = document.getElementById("add-form");
const contactId = document.getElementById("contactId");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const avatar = document.getElementById("avatar");
const formAvatar = document.getElementById("form-avatar");
const orderType = document.getElementById("order-type");
const orderDirection = document.getElementById("sort-direction");
const searchBox = document.getElementById("search-box");
const cancelBtn = document.getElementById("cancel-btn");
const radios = document.querySelectorAll('input[name="view-options"]');

const serverURI = `http://localhost:3000`;

const createProfileImage = (person) => {
  const profileImage = document.createElement("img");
  profileImage.className = "profile-image";
  profileImage.src = person.avatar
    ? `${person.avatar}`
    : "profile-placeholder.jpg";

  return profileImage;
};

const createProfileName = (person, hType) => {
  const profileName = document.createElement(hType);
  const nameText = `${person.name} ${person.surname}`;

  profileName.innerText =
    nameText.length > 20 ? nameText.substring(0, 20) + "..." : nameText;
  return profileName;
};

const createProfilePhone = (person) => {
  const phoneNum = document.createElement("p");
  phoneNum.innerText = person.phone;
  return phoneNum;
};

const createProfileAddress = (person) => {
  const address = document.createElement("p");
  address.innerText =
    person.address.length > 20
      ? person.address.substring(0, 20) + "..."
      : person.address;

  return address;
};

const createProfileEditButton = (person) => {
  const editBtn = document.createElement("button");
  const editIcon = document.createElement("i");
  editIcon.className = "fa-regular fa-pen-to-square fa-xl";
  editBtn.className = "btn btn-small";
  editBtn.appendChild(editIcon);
  editBtn.addEventListener("click", () => editContact(person.id));
  return editBtn;
};

const createProfileDeleteButton = (person) => {
  const deleteBtn = document.createElement("button");
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash fa-xl";
  deleteBtn.className = "btn btn-small";
  deleteBtn.appendChild(deleteIcon);
  deleteBtn.addEventListener("click", () => deleteContact(person.id));
  return deleteBtn;
};

const createContactTable = (person) => {
  const contactRow = document.createElement("tr");
  contactRow.className = "contact";
  // Create image
  const profileImageTd = document.createElement("td");
  const profileImage = createProfileImage(person);
  profileImageTd.appendChild(profileImage);

  // Add Name
  const profileNameTd = document.createElement("td");
  const profileName = createProfileName(person, "h3");
  profileNameTd.appendChild(profileName);

  // Create Phone
  const phoneNumTd = document.createElement("td");
  const phoneNum = createProfilePhone(person);
  phoneNumTd.appendChild(phoneNum);

  // Create Address
  const addressTd = document.createElement("td");
  const address = createProfileAddress(person);
  addressTd.appendChild(address);

  // Create edit button
  const buttonsTd = document.createElement("td");
  const editBtn = createProfileEditButton(person);
  buttonsTd.appendChild(editBtn);

  // Create delete button
  const deleteBtn = createProfileDeleteButton(person);
  buttonsTd.appendChild(deleteBtn);

  // Add elements to row
  contactRow.appendChild(profileImageTd);
  contactRow.appendChild(profileNameTd);
  contactRow.appendChild(phoneNumTd);
  contactRow.appendChild(addressTd);
  contactRow.appendChild(buttonsTd);

  contactList.appendChild(contactRow);
};

const creatContactGrid = (person) => {
  const gridElement = document.createElement("div");
  const buttonContainer = document.createElement("div");

  gridElement.className = "grid-element";

  const profileImage = createProfileImage(person);
  const name = createProfileName(person, "h4");
  const phone = createProfilePhone(person);
  const editBtn = createProfileEditButton(person);
  const deleteBtn = createProfileDeleteButton(person);

  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);

  gridElement.appendChild(profileImage);
  gridElement.appendChild(name);
  gridElement.appendChild(phone);
  gridElement.appendChild(buttonContainer);

  contactGrid.appendChild(gridElement);
};

const getContactsFromServer = async () => {
  try {
    const response = await fetch(`${serverURI}/contacts`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.log("Error:");
  }
};

const onSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(addForm);
  console.log(addForm.phone.value.length);
  if (addForm.phone.value.length !== 16) {
    document.getElementById("phone-message").innerText =
      "Lütfen geçerli bir telefon numarası girin";
    return;
  }

  try {
    let response;
    if (contactId.value) {
      response = await fetch(`${serverURI}/update-contact/${contactId.value}`, {
        method: "PUT",
        body: formData,
      });
    } else {
      response = await fetch(`${serverURI}/add-contact`, {
        method: "POST",
        body: formData,
      });
    }

    if (response.ok) {
      await populateList();
      addForm.reset();
      formAvatar.src = "profile-placeholder.jpg";
      contactId.value = "";
    } else {
      console.log("Error: ", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const editContact = async (id) => {
  try {
    const response = await fetch(`${serverURI}/contacts/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const contact = await response.json();

    nameInput.value = contact.name;
    surnameInput.value = contact.surname;
    phoneInput.value = contact.phone;
    addressInput.value = contact.address;
    formAvatar.src = contact.avatar
      ? `/${contact.avatar}`
      : "profile-placeholder.jpg";
    contactId.value = contact.id;

    if (addForm.classList.contains("hidden")) {
      toggleForm();
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteContact = async (id) => {
  try {
    const response = await fetch(`${serverURI}/delete-contact/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.log(error);
  }
};

const populateList = async (e) => {
  changeViewOption();

  let contacts = await getContactsFromServer();
  contacts = filterList(contacts);
  contactList.innerHTML = "";
  contactGrid.innerHTML = "";
  contacts = sortList(contacts);

  if (contacts) {
    if (radios[0].checked) {
      contacts.forEach((contact) => createContactTable(contact));
    } else {
      contacts.forEach((contact) => creatContactGrid(contact));
    }
  } else {
    contactList.innerHTML =
      '<img class="empty-contact-icon" src="empty-contacts.svg"/>';
  }
};

const updateImageDisplay = () => {
  formAvatar.src = URL.createObjectURL(avatar.files[0]);
};

const sortList = (contacts) => {
  if (orderType.value === "name") {
    contacts.sort((a, b) => {
      if (
        (a.name < b.name && orderDirection.value === "descending") ||
        (a.name > b.name && orderDirection.value === "ascending")
      )
        return -1;

      return 0;
    });
  } else {
    contacts.sort((a, b) => {
      if (
        (a.surname < b.surname && orderDirection.value === "descending") ||
        (a.surname > b.surname && orderDirection.value === "ascending")
      )
        return -1;
      return 0;
    });
  }

  const contactsConfig = getConfigsFromLocalStorage();
  contactsConfig.savedOrderType = orderType.value;
  contactsConfig.savedOrderDirection = orderDirection.value;
  localStorage.setItem("contacts_config", JSON.stringify(contactsConfig));

  return contacts;
};

const filterList = (contacts) => {
  const searchText = searchBox.value;
  
  const newContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchText) ||
      contact.surname.toLowerCase().includes(searchText)
  );

  return newContacts;
};

const toggleForm = () => {
  addForm.classList.toggle("hidden");
};

const getConfigsFromLocalStorage = () => {
  if (!localStorage.getItem("contacts_config")) {
    localStorage.setItem(
      "contacts_config",
      JSON.stringify({
        savedViewOption: "list",
        savedOrderType: "name",
        savedOrderDirection: "descending",
      })
    );
  }

  return JSON.parse(localStorage.getItem("contacts_config"));
};

const changeViewOption = () => {
  radios.forEach((r) => {
    if (r.checked) {
      const contactsConfig = getConfigsFromLocalStorage();
      contactsConfig.savedViewOption = r.value;
      localStorage.setItem("contacts_config", JSON.stringify(contactsConfig));
    }
  });
};

const addEntry = () => {
  contactId.value = "";
  nameInput.value = "";
  surnameInput.value = "";
  phoneInput.value = "(0)";
  addressInput.value = "";
  formAvatar.src = "profile-placeholder.jpg";

  if (addForm.classList.contains("hidden")) {
    toggleForm();
  }
};

const cancelEntry = () => {
  contactId.value = "";
  nameInput.value = "";
  surnameInput.value = "";
  phoneInput.value = "";
  addressInput.value = "";
  formAvatar.src = "profile-placeholder.jpg";

  toggleForm();
};

const validatePhoneNum = () => {
  const cursorPosition = phoneInput.selectionStart;
  let phoneNumber = phoneInput.value.replace(/\D/g, "");

  if (phoneNumber.length === 0) {
    phoneNumber = "0";
  }

  phoneInput.value = formatPhoneNumber(phoneNumber);
};

const formatPhoneNumber = (phoneNumber) => {
  if (phoneNumber.length <= 4) {
    return `(${phoneNumber})`;
  } else if (phoneNumber.length <= 7) {
    return `(${phoneNumber.substring(0, 4)}) ${phoneNumber.substring(4)}`;
  } else if (phoneNumber.length <= 9) {
    return `(${phoneNumber.substring(0, 4)}) ${phoneNumber.substring(
      4,
      7
    )} ${phoneNumber.substring(7)}`;
  } else {
    return `(${phoneNumber.substring(0, 4)}) ${phoneNumber.substring(
      4,
      7
    )} ${phoneNumber.substring(7, 9)} ${phoneNumber.substring(9)}`;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const { savedViewOption, savedOrderType, savedOrderDirection } =
    getConfigsFromLocalStorage();

  orderType.value = savedOrderType;
  orderDirection.value = savedOrderDirection;
  radios.forEach((r) => {
    if (savedViewOption === r.value) {
      r.checked = true;
    }
  });

  populateList();
});

addPersonBtn.addEventListener("click", addEntry);
addForm.addEventListener("submit", onSubmit);
avatar.addEventListener("change", updateImageDisplay);
orderType.addEventListener("change", populateList);
orderDirection.addEventListener("change", populateList);
cancelBtn.addEventListener("click", cancelEntry);
radios.forEach((r) => r.addEventListener("change", populateList));

phoneInput.addEventListener("input", validatePhoneNum);
phoneInput.addEventListener("keydown", (e) => {
  let cursorPosition = phoneInput.selectionStart;
  console.log(cursorPosition);
  if ((e.key === "Backspace" || e.key === "Delete") && cursorPosition === 6) {
    console.log(e.key);

    phoneInput.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
  }
});

searchBox.addEventListener("input", populateList);
