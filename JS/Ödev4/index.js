const toggleFormBtn = document.getElementById("toggle-form-button");
const addForm = document.getElementById("add-form");
const searchBar = document.getElementById("search-bar");

const formGroups = document.querySelectorAll(".form-group");
const submitButton = document.querySelector("form button");
const studentTable = document.getElementById("student-table");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const familyPhone = document.getElementById("familyPhone");
const studentNumber = document.getElementById("studentNumber");
const classNumber = document.getElementById("classNumber");
const classTeacher = document.getElementById("classTeacher");
const studentNumberWarning = document.querySelector("form p");

const toggleForm = () => {
  addForm.classList.toggle("active");
  toggleFormBtn.classList.toggle("active");
  document.querySelector(".form-container").classList.toggle("active");
  if (toggleFormBtn.classList.contains("active")) {
    toggleFormBtn.innerText = "X";
  } else {
    toggleFormBtn.innerText = "Öğrenci Ekle";
  }

  formGroups.forEach((formGroup) => {
    if (formGroup.classList.contains("fadeIn")) {
      formGroup.classList.remove("fadeIn");
      formGroup.classList.add("fadeOut");
    } else {
      formGroup.classList.remove("fadeOut");
      formGroup.classList.add("fadeIn");
    }
  });

  if (submitButton.classList.contains("fadeIn")) {
    submitButton.classList.remove("fadeIn");
    submitButton.classList.add("fadeOut");
  } else {
    submitButton.classList.add("fadeIn");
    submitButton.classList.remove("fadeOut");
  }

  const studentId = document.getElementById("student-id").value;

  if (studentId !== "") {
    console.log(document.getElementById("student-id"));
    submitButton.innerText = "Güncelle";
  } else {
    submitButton.innerText = "Ekle";
  }
};

const onSubmit = (e) => {
  e.preventDefault();

  let students = getDataFromStorage();
  const studentId = document.getElementById("student-id").value;

  if (studentId === "") {
    if (isStudentNumberExists(students, studentNumber.value)) {
      studentNumberWarning.classList.remove("hidden");
      return;
    }

    const newStudent = {
      id: students.length !== 0 ? getBiggestId(students) + 1 : 1,
      name: name.value,
      surname: surname.value,
      familyPhone: familyPhone.value,
      studentNumber: studentNumber.value,
      classNumber: classNumber.value,
      classTeacher: classTeacher.value,
    };

    setDataToStorage(newStudent);
  } else {
    students.forEach((student) => {
      if (student.id == studentId) {
        student.name = name.value;
        student.surname = surname.value;
        student.familyPhone = familyPhone.value;
        student.studentNumber = studentNumber.value;
        student.classNumber = classNumber.value;
        student.classTeacher = classTeacher.value;
      }
    });

    localStorage.setItem("students", JSON.stringify(students));
  }

  students = getDataFromStorage();

  resetForm();

  populateTable(students);

  toggleForm();
};

const editStudent = (id) => {
  document.getElementById("student-id").value = id;

  if (!addForm.classList.contains("active")) {
    toggleForm();
  }

  const students = getDataFromStorage();
  const editedStudent = students.find((student) => student.id === id);
  name.value = editedStudent.name;
  surname.value = editedStudent.surname;
  familyPhone.value = editedStudent.familyPhone;
  studentNumber.value = editedStudent.studentNumber;
  classNumber.value = editedStudent.classNumber;
  classTeacher.value = editedStudent.classTeacher;
};

const deleteStudent = (id) => {
  const students = getDataFromStorage();
  const updatedStudents = students.filter((student) => student.id !== id);
  localStorage.setItem("students", JSON.stringify(updatedStudents));
  populateTable(updatedStudents);
};

const isStudentNumberExists = (students, studentNumber) => {
  const isExist = students.some(
    (student) => student.studentNumber == studentNumber
  );

  return isExist;
};

const resetForm = () => {
  document.getElementById("student-id").value = "";
  name.value = "";
  surname.value = "";
  familyPhone.value = "";
  studentNumber.value = "";
  classNumber.value = "";
  classTeacher.value = "";
};

const getDataFromStorage = () => {
  if (!localStorage.getItem("students")) {
    localStorage.setItem("students", JSON.stringify([]));
  }

  return JSON.parse(localStorage.getItem("students"));
};

const setDataToStorage = (student) => {
  const students = getDataFromStorage();
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
};

const searchStudents = (e) => {
  const searchText = e.target.value.toLowerCase();
  const students = getDataFromStorage();

  console.log(students);
  const searchResults = students.filter(
    (student) =>
      `${student.name} ${student.surname}`.toLowerCase().includes(searchText) ||
      String(student.studentNumber).includes(searchText)
  );
  console.log(searchResults);
  populateTable(searchResults);
};

const getBiggestId = (students) => {
  const max = students.reduce((max, student) =>
    max > student.id ? max : student.id
  );
  return max;
};

const createRow = (student) => {
  const row = document.createElement("tr");

  const studentNumberCell = document.createElement("td");
  studentNumberCell.textContent = student.studentNumber;
  row.appendChild(studentNumberCell);

  const nameCell = document.createElement("td");
  nameCell.textContent = `${student.name} ${student.surname}`;
  row.appendChild(nameCell);

  const classCell = document.createElement("td");
  classCell.textContent = student.classNumber;
  row.appendChild(classCell);

  const classTeacherCell = document.createElement("td");
  classTeacherCell.textContent = student.classTeacher;
  row.appendChild(classTeacherCell);

  const familyPhoneCell = document.createElement("td");
  familyPhoneCell.textContent = student.familyPhone;
  row.appendChild(familyPhoneCell);

  const buttonCell = document.createElement("td");

  //edit button
  const editButton = document.createElement("button");
  editButton.className = "table-btn";
  const editIcon = document.createElement("i");
  editIcon.className = "fa-regular fa-pen-to-square fa-xl";
  editButton.appendChild(editIcon);
  editButton.addEventListener("click", () => editStudent(student.id));
  buttonCell.appendChild(editButton);

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.className = "table-btn";
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-trash fa-xl";
  deleteButton.appendChild(deleteIcon);
  deleteButton.addEventListener("click", () => deleteStudent(student.id));

  buttonCell.appendChild(deleteButton);

  row.appendChild(buttonCell);

  studentTable.querySelector("tbody").appendChild(row);
};

const populateTable = (students) => {
  studentTable.querySelector("tbody").innerHTML = "";
  students.forEach((student) => {
    createRow(student);
  });
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

const validatePhoneNum = () => {
  let phoneNumber = familyPhone.value.replace(/\D/g, "");

  if (phoneNumber.length === 0) {
    phoneNumber = "0";
  }

  familyPhone.value = formatPhoneNumber(phoneNumber);
};

const students = getDataFromStorage();
populateTable(students);

familyPhone.addEventListener("input", validatePhoneNum);
familyPhone.addEventListener("keydown", (e) => {
  let cursorPosition = familyPhone.selectionStart;

  if ((e.key === "Backspace" || e.key === "Delete") && cursorPosition === 6) {
    console.log(e.key);

    familyPhone.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
  }
});
toggleFormBtn.addEventListener("click", toggleForm);
addForm.addEventListener("submit", onSubmit);
searchBar.addEventListener("input", searchStudents);
