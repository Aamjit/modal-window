'use strict';

const modalButton = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".overlay");
const modalClose = document.querySelector(".close-modal");

const showModel = function(){
    modal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
}

const closeModel = function(){
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
}

for(let i=0; i < modalButton.length; i++)
{
    modalButton[i].addEventListener('click', showModel);
}

modalClose.addEventListener('click', closeModel);
modalOverlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape' )
    {
        if(!modal.classList.contains('hidden'))
            closeModel();
    }
})