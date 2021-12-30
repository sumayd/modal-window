'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const openModelBtn = document.querySelector('.show-modal')
const closeModalBtn = document.querySelector('.close-modal')


const openModel = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

openModelBtn.addEventListener('click', openModel)
closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
            closeModal()
    }
})