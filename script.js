const q1 = document.querySelector('.q1')
const a1 = document.querySelector('#a1')
const i1 = document.querySelector('.i1')

const q2 = document.querySelector('.q2')
const a2 = document.querySelector('#a2')
const i2 = document.querySelector('.i2')

const q3 = document.querySelector('.q3')
const a3 = document.querySelector('#a3')
const i3 = document.querySelector('.i3')

const q4 = document.querySelector('.q4')
const a4 = document.querySelector('#a4')
const i4 = document.querySelector('.i4')

const q5 = document.querySelector('.q5')
const a5 = document.querySelector('#a5')
const i5 = document.querySelector('.i5')

const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')
const body = document.querySelector('body')

q1.addEventListener('click', function(){
    console.log('open q1')
    if (a1.classList.contains('open')){
        a1.classList.remove('open')
        q1.classList.remove('openq')
        i1.classList.remove('openi')
    }
    else{
        a1.classList.add('open')
        q1.classList.add('openq')
        i1.classList.add('openi')
    }
    
})

q2.addEventListener('click', function(){
    console.log('open q2')
    if (a2.classList.contains('open')){
        a2.classList.remove('open')
        q2.classList.remove('openq')
        i2.classList.remove('openi')
    }
    else{
        a2.classList.add('open')
        q2.classList.add('openq')
        i2.classList.add('openi')
    }
    
})
q3.addEventListener('click', function(){
    console.log('open q3')
    if (a3.classList.contains('open')){
        a3.classList.remove('open')
        q3.classList.remove('openq')
        i3.classList.remove('openi')
    }
    else{
        a3.classList.add('open')
        q3.classList.add('openq')
        i3.classList.add('openi')
    }
    
})
q4.addEventListener('click', function(){
    console.log('open q4')
    if (a4.classList.contains('open')){
        a4.classList.remove('open')
        q4.classList.remove('openq')
        i4.classList.remove('openi')
    }
    else{
        a4.classList.add('open')
        q4.classList.add('openq')
        i4.classList.add('openi')
    }
    
})
q5.addEventListener('click', function(){
    console.log('open q5')
    if (a5.classList.contains('open')){
        a5.classList.remove('open')
        q5.classList.remove('openq')
        i5.classList.remove('openi')
    }
    else{
        a5.classList.add('open')
        q5.classList.add('openq')
        i5.classList.add('openi')
    }
    
})