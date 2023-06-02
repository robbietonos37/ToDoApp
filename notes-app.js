'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (event) => {
    const id = uuidv4()
    const timeStamp = moment().valueOf()
    notes.push({ id: id, title: '', body: '', createdAt: timeStamp, updatedAt: timeStamp })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// // November 3rd, 2023
// console.log(now.fromNow())
// const nowTimeStamp = now.valueOf()
// console.log(nowTimeStamp)

// console.log(moment(nowTimeStamp).toString())

const birthday = moment()
birthday.set('year', 1997)
birthday.set('month', 6)
birthday.set('date', 2)
//birthday.year(1997).month(7).date(2)
console.log(birthday.format('MMM D, YYYY'))

