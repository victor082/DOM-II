// Your code goes here
let button1 = document.querySelectorAll('.destination .btn')[0]
button1.addEventListener('click', (event) => {
    button1.style.background = 'purple'
    button1.innerHTML = 'Pop!'
})

let button2 = document.querySelectorAll('.destination .btn')[1]
button2.addEventListener('dblclick', (event) => {
    button2.style.background = 'blue'
    button2.innerHTML = 'Double Click!'
})

let button3 = document.querySelectorAll('.destination .btn')[2]
button3.addEventListener('mouseenter', (event) => {
    button3.style.background = 'green'
  })
  button3.addEventListener('mouseleave', (event) => {
    button3.style.background = '#17A2B8'
  })