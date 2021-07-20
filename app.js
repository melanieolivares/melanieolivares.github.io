const contactMeBtns = document.querySelectorAll('.contact');

for(let btn of contactMeBtns){
    btn.addEventListener('mouseover', () => {
        
        btn.innerText = 'Copy Email';
    
    })
    btn.addEventListener('mouseout', () => {
        btn.innerText = 'Contact Me';
    
    })
    btn.addEventListener('click', clipboardCopy);
   
    async function clipboardCopy(){
        await navigator.clipboard.writeText('olivares.j.melanie@gmail.com');
        btn.innerText = 'Email Copied!';

}
}


const textName = 'melanie olivares'
const speed = 90;
let i = 0

function typeWriter (){
    const name = document.querySelector('#name');
    
    if (i < textName.length){
        name.innerHTML += textName.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}

typeWriter();










// function typeWriter(text){
//     const speed = 75;
//     let i = 0;
//     let el = document.querySelector('.typing')

//     if(text === undefined) return;
//     ()=>{
        
//     }
//         if (i < text.length){

//             el.innerHTML += text.charAt(i);
//             i++;
//             setTimeout(typeWriter, speed);

//         }
//     }

// typeWriter('melanie olivares')











// window.addEventListener('scroll', () =>{
//     if(window.scrollY ===  1000){
        
//     }
// })

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const modalOverlay = document.getElementById('modal-overlay');

openModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
    })
})

modalOverlay.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal){
    if (modal == null) return;
    modal.classList.add('active');
    modalOverlay.classList.add('active');
}

function closeModal(modal){
    if (modal == null) return;
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
}


const openModal2Button = document.querySelectorAll('[data-modal2-target]');
const closeModal2Button = document.querySelectorAll('[data-close2-button]');
const modalOverlay2 = document.getElementById('modal-overlay2');


openModal2Button.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal2 = document.querySelector(button.dataset.modal2Target);
        openModal2(modal2)
    })
})

modalOverlay2.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal2(modal)
    })
})

closeModal2Button.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal')
        closeModal2(modal)
    })
})

function openModal2(modal){
    if (modal == null) return;
    modal2.classList.add('active');
    modalOverlay2.classList.add('active');
}

function closeModal2(modal){
    if (modal == null) return;
    modal2.classList.remove('active');
    modalOverlay2.classList.remove('active');
}