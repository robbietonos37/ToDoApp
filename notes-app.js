let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (event) {
    const id = uuidv4()
    notes.push({ id: id, title: '', body: '' })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
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

/*
// Unix Epoch - January 1st 1970 00:00:00
// Positive for after this date
// Negative for after this date


const now = new Date()
const timestamp = now.getTime()


const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const timeInPast = new Date('April 23 2011 13:32:43')
const timeInPast2 = new Date('October 11 2017 5:21:07')

if (timeInPast.getTime() > timeInPast2.getTime()) {
    console.log(timeInPast.toString())
}
else {
    console.log(timeInPast2.toString())
}

*/