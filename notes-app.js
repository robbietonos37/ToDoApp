const notes = [{
    title: 'my next Trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

document.querySelector('#create-note').addEventListener('click', function (event) {
    event.target.textContent = 'The Button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function (note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('change', function (e) {
    console.log(e.target.value)
})