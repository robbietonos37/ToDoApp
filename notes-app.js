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

//DOM - Document Object model

//query and remove
//const p = document.querySelector('p')
//p.remove()

// Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    p.textContent = '*********'
    //console.log(p.textContent)
    //p.remove()
})

//Add new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScipt'
document.querySelector('body').appendChild(newParagraph)