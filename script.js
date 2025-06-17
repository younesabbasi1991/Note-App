'use strict';
const addNotBtn = document.querySelector("#add-note");
const newNoteContainer = document.querySelector(".new-note");
const overlay = document.querySelector(".overlay");
const formSumbimBtn = document.querySelector(".new-note__btn");
const noteHeader = document.querySelector(".new-note__header");
const noteText = document.querySelector(".new-note__text");
const newNoteForm = document.querySelector(".new-note__form");
const notesContainer = document.querySelector(".notes-container");

const closeNewFormContainer = function () {
  overlay.classList.remove("active");
  newNoteContainer.classList.remove("active");
  noteHeader.value = "";
  noteText.value = "";
};

const openNewFormContainer = function () {
  overlay.classList.add("active");
  newNoteContainer.classList.add("active");
};

let notes = JSON.parse(localStorage.getItem("myNotes")) || [];

const printNotes = function (array) {
  let html = "";
  for (let [index, el] of array.entries()) {
    console.log(el.noteHeader);
    html += `
        <div class="note">
            <h3>${el.noteHeader}</h3>
            <p>${el.noteText}</p>
        </div>
    `;
  }
  notesContainer.innerHTML = html;
};

printNotes(notes);
addNotBtn.addEventListener("click", function () {
  openNewFormContainer();
});

overlay.addEventListener("click", function () {
  closeNewFormContainer();
});

formSumbimBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (noteHeader.value === "" || noteText.value === "") {
    alert("لطفاً عنوان و متن را پر کنید");
  } else {
    let note = {
      id: Date.now(),
      noteHeader: noteHeader.value,
      noteText: noteText.value,
    };
    notes.push(note);
    closeNewFormContainer();
    console.log(notes);
    localStorage.setItem("myNotes", JSON.stringify(notes));
  }
  printNotes(notes);
});

