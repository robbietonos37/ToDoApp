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

document.querySelector('button').addEventListener('click', function (event) {
    event.target.textContent = 'The Button was clicked'
})