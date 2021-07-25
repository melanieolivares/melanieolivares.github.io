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



const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const modalOverlay = document.getElementById('modal-overlay');

openModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)
        document.body.style.overflow = 'hidden';
        document.querySelector('#gif-pricingpanel').src = 'imgs/PricingTable.gif'
    })
})

modalOverlay.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal)
        document.body.style.overflow = '';
        document.querySelector('#gif-pricingpanel').src = ''
    })
    
})

closeModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal')
        closeModal(modal)
        document.body.style.overflow = '';
        document.querySelector('#gif-pricingpanel').src = ''

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
        document.body.style.overflow = 'hidden';
        document.querySelector('#gif-MoC').src = 'imgs/MoC.gif'


    })
})

modalOverlay2.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal2(modal)
        document.body.style.overflow = '';
        document.querySelector('#gif-MoC').src = ''

    })
})

closeModal2Button.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal')
        closeModal2(modal)
        document.body.style.overflow = '';
        document.querySelector('#gif-MoC').src = ''

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

const openModal3Button = document.querySelectorAll('[data-modal3-target]');
const closeModal3Button = document.querySelectorAll('[data-close3-button]');
const modalOverlay3 = document.getElementById('modal-overlay3');


openModal3Button.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal3 = document.querySelector(button.dataset.modal3Target);
        openModal3(modal3)
        document.body.style.overflow = 'hidden';
        document.querySelector('#gif-pingpong').src = 'imgs/PingPongScoreKeeper.gif'

    })
})

modalOverlay3.addEventListener('click', ()=>{
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal3(modal)
        document.body.style.overflow = '';
        document.querySelector('#gif-pingpong').src = ''

    })
})

closeModal3Button.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal')
        closeModal3(modal)
        document.body.style.overflow = '';
        document.querySelector('#gif-pingpong').src = ''

    })
})

function openModal3(modal){
    if (modal == null) return;
    modal3.classList.add('active');
    modalOverlay3.classList.add('active');
}

function closeModal3(modal){
    if (modal == null) return;
    modal3.classList.remove('active');
    modalOverlay3.classList.remove('active');
}

let date = new Date();
let myDay = date.getDay();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const dateText = document.querySelector('#date');
const diaLine1 = document.querySelector('#line1')
const diaLine2 = document.querySelector('#line2')
const bark1 = document.querySelector('#bark1')
const bark2 = document.querySelector('#bark2')
const bark3 = document.querySelector('#bark3')

function delayText(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const dialogue = `Have a great rest of your ${days[myDay]}!`
            const speed2 = 75;
            let j = 0
            
            function typeWriter2 (){
                const date = document.querySelector('#date');
                
                if (j < dialogue.length){
                    date.innerHTML += dialogue.charAt(j);
                    j++;
                    setTimeout(typeWriter2, speed2)
                }
            }
            
            typeWriter2();
        resolve();
    
    }, 2000)
})
}


function delayLine(num, delay){
    return new Promise((resolve, reject) => {
        if(num === 1){
            setTimeout(() =>{
            diaLine1.style.opacity = '1'

            resolve();
        
        }, delay)
    }else {
        setTimeout(() =>{
            diaLine2.style.opacity = '1'

            resolve();
        
        }, delay)
    }
    })
}

function delayBark (num, delay){
    return new Promise((resolve, reject) => {
        if(num === 1){
            setTimeout(() =>{
            bark1.style.opacity = '1'

            resolve();
        
        }, delay)
    }else if (num === 2){
        setTimeout(() =>{
            bark2.style.opacity = '1'

            resolve();
        
        }, delay)
    } else if (num === 3){
        setTimeout(() =>{
            bark3.style.opacity = '1'

            resolve();
    }, delay)
    }
    })
}

function deleteBark(num, delay){
    return new Promise((resolve, reject) => {
        if(num === 1){
            setTimeout(() =>{
            bark1.style.opacity = '0'

            resolve();
        
        }, delay)
    }else if (num === 2){
        setTimeout(() =>{
            bark2.style.opacity = '0'

            resolve();
        
        }, delay)
    } else if (num === 3){
        setTimeout(() =>{
            bark3.style.opacity = '0'

            resolve();
    }, delay)
    }
    })
}

async function dialogue(){
    await delayLine(1, 1000)
    await delayLine(2, 1500)
    await delayText()
    await delayBark(1, 4000)
    await delayBark(2, 250)
    await delayBark(3, 250)
    await deleteBark(1, 400)
    await deleteBark(2, 230)
    await deleteBark(3, 230)
}


$('#intro-about').one('inview', function (event, isInView) {
    if (isInView === true) {
        setTimeout(()=>{
            dialogue()
        }, 7000)

    } 
})

const hamburger = document.querySelector('.hamburger-container');
const overlaynav = document.querySelector('#overlay-nav');
const hamburgermenu = document.querySelector('#hamburger-menu')
const link1 = document.querySelector('#hamburger-link')
const link2 = document.querySelector('#hamburger-link2')
const menucontact = document.querySelector('#menucontact')


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('change')
    if (hamburger.classList.contains('change')){
        overlaynav.classList.add('overlay-nav')
        overlaynav.classList.add('fadein-overlay')
        overlaynav.classList.remove('fadeout-overlay')
        hamburgermenu.classList.add('hamburger-menu')
        hamburgermenu.classList.add('fadein-overlay')
        link1.classList.add('hamburger-links')
        link1.classList.add('fadein-overlay')
        link2.classList.add('hamburger-links')
        link2.classList.add('fadein-overlay')
        link1.classList.remove('fadeout-overlay')
        link2.classList.remove('fadeout-overlay')
        menucontact.classList.add('menucontact')
        menucontact.classList.add('fadein-overlay')
        menucontact.classList.remove('fadeout-overlay')
        link1.classList.remove('menudisplay')
        link2.classList.remove('menudisplay')
        menucontact.classList.remove('menudisplay')
        document.body.style.overflow = 'hidden';
        

    } else{
        overlaynav.classList.add('fadeout-overlay')
        overlaynav.classList.remove('overlay-nav')
        overlaynav.classList.remove('fadein-overlay')
        hamburgermenu.classList.remove('hamburger-menu')
        hamburgermenu.classList.remove('fadein-overlay')
        hamburgermenu.classList.add('fadeout-overlay')
        link1.classList.remove('hamburger-links')
        link1.classList.remove('fadein-overlay')
        link2.classList.remove('hamburger-links')
        link2.classList.remove('fadein-overlay')
        link1.classList.add('fadeout-overlay')
        link2.classList.add('fadeout-overlay')
        menucontact.classList.remove('menucontact')
        menucontact.classList.remove('fadein-overlay')
        menucontact.classList.add('fadeout-overlay')
        link1.classList.add('menudisplay')
        link2.classList.add('menudisplay')
        menucontact.classList.add('menudisplay')
        document.body.style.overflow = '';

    }
})

link1.addEventListener('click', function(){
    hamburger.classList.toggle('change')
    overlaynav.classList.add('fadeout-overlay')
    overlaynav.classList.remove('overlay-nav')
    overlaynav.classList.remove('fadein-overlay')
    hamburgermenu.classList.remove('hamburger-menu')
    hamburgermenu.classList.remove('fadein-overlay')
    hamburgermenu.classList.add('fadeout-overlay')
    link1.classList.remove('hamburger-links')
    link1.classList.remove('fadein-overlay')
    link2.classList.remove('hamburger-links')
    link2.classList.remove('fadein-overlay')
    link1.classList.add('fadeout-overlay')
    link2.classList.add('fadeout-overlay')
    menucontact.classList.remove('menucontact')
    menucontact.classList.remove('fadein-overlay')
    menucontact.classList.add('fadeout-overlay')
    document.body.style.overflow = '';

})

link2.addEventListener('click', function(){
    hamburger.classList.toggle('change')
    overlaynav.classList.add('fadeout-overlay')
    overlaynav.classList.remove('overlay-nav')
    overlaynav.classList.remove('fadein-overlay')
    hamburgermenu.classList.remove('hamburger-menu')
    hamburgermenu.classList.remove('fadein-overlay')
    hamburgermenu.classList.add('fadeout-overlay')
    link1.classList.remove('hamburger-links')
    link1.classList.remove('fadein-overlay')
    link2.classList.remove('hamburger-links')
    link2.classList.remove('fadein-overlay')
    link1.classList.add('fadeout-overlay')
    link2.classList.add('fadeout-overlay')
    menucontact.classList.remove('menucontact')
    menucontact.classList.remove('fadein-overlay')
    menucontact.classList.add('fadeout-overlay')
    document.body.style.overflow = '';

})

