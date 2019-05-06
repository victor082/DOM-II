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
    button3.innerHTML = 'Green Version'
  })
  button3.addEventListener('mouseleave', (event) => {
    button3.style.background = '#17A2B8'
    button3.innerHTML = 'Sign Me Up!'
  })


let firstName = document.querySelectorAll('.form-contact input')[0]
firstName.addEventListener('keyup', (event) => {
    console.log('First name keyup: ', event.target.value)
})
firstName.addEventListener('keydown', (event) => {
    console.log('First name keydown: ', event.target.value)
})
firstName.addEventListener('input', (event) => {
    console.log('First name input: ', event.target.value)
})


let lastName = document.querySelectorAll('.form-contact input')[1]
lastName.addEventListener('keyup', (event) => {
    console.log('Last name keyup: ', event.target.value)
})
lastName.addEventListener('keydown', (event) => {
    console.log('Last name keydown: ', event.target.value)
})
lastName.addEventListener('input', (event) => {
    console.log('Last name input: ', event.target.value)
})

let email = document.querySelectorAll('.form-contact input')[2]
email.addEventListener('keyup', (event) => {
    console.log('Email keyup: ', event.target.value)
})
email.addEventListener('keydown', (event) => {
    console.log('Email keydown: ', event.target.value)
})
email.addEventListener('input', (event) => {
    console.log('Email input: ', event.target.value)
})

let phone = document.querySelectorAll('.form-contact input')[3]
phone.addEventListener('keyup', (event) => {
    console.log('phone keyup: ', event.target.value)
})
phone.addEventListener('keydown', (event) => {
    console.log('phone keydown: ', event.target.value)
})
phone.addEventListener('input', (event) => {
    console.log('phone input: ', event.target.value)
})

let commentBox = document.querySelector('.form-contact textarea')
commentBox.addEventListener('keyup', (event) => {
    console.log('Comment box keyup: ', event.target.value)
})
commentBox.addEventListener('keydown', (event) => {
    console.log('Comment box keydown: ', event.target.value)
})
commentBox.addEventListener('input', (event) => {
    console.log('Comment box input: ', event.target.value)
})
const signForm = document.querySelector('.form-contact')
signForm.addEventListener('submit', event => {
  event.preventDefault()
})


// Skyler
const linksin = document.querySelectorAll('a');
for (var i=0; i < linksin.length; i++) {
   linksin[i].addEventListener('mouseover', (event) => {
       event.target.style.color = 'blue'
       // console.log("target:", event.target);
       });
}
const linksout = document.querySelectorAll('a');
for (var i=0; i < linksout.length; i++) {
   linksout[i].addEventListener('mouseout', (event) => {
       event.target.style.color = 'black'
       // console.log("target:", event.target);
   });}

window.addEventListener('load', (event) => {
       alert("The Page Loaded");
});


// Chris
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
    event.target.style.cursor = 'pointer';
})
logoHeading.addEventListener('mouseout', (event)=> {
    event.target.style.color = 'black';
})
logoHeading.addEventListener('click', (event) => {
    alert('Thank for Visiting Fun Bus! Subscribe for Updates!');
})

const links = document.querySelectorAll('a');
for (var i=0; i < links.length; i++) {
   linksin[i].addEventListener('click', (event) => {
       event.preventDefault();
       // prevent default refresh on anchors
       });
}
const textContent = document.querySelector('.text-content');
textContent.addEventListener('click', (event) => {
    alert('Text Content Alert');
})
const textContentParagraph = document.querySelector('.text-content p');
textContentParagraph.addEventListener('click', (event) => {
    event.stopPropagation();
    alert('Paragraph Alert');
});

