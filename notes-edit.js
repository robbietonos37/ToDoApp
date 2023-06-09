'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeButton = document.querySelector('#remove-note')
const updatedTimeDisplay = document.querySelector('#updated-time')

const noteId = location.hash.substring(1)
let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteId)

if (!note) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
updatedTimeDisplay.textContent = generateLastEdited(note.updatedAt)

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    saveNotes(notes)
    note.updatedAt = moment().valueOf()
    updatedTimeDisplay.textContent = generateLastEdited(note.updatedAt)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    saveNotes(notes)
    note.updatedAt = moment().valueOf()
    updatedTimeDisplay.textContent = generateLastEdited(note.updatedAt)
})

removeButton.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)

        if (!note) {
            location.assign('/index.html')
        }


        titleElement.value = note.title
        bodyElement.value = note.body
        updatedTimeDisplay.textContent = generateLastEdited(note.updatedAt)
    }
})

// const updateTimeDisplay = function () {
//     updatedTimeDisplay.textContent = `Last edited ${moment(note.updatedAt).fromNow()}`
// }