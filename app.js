const contactMeBtn = document.querySelector('.contact');

contactMeBtn.addEventListener('mouseover', () => {
        
    contactMeBtn.innerText = 'Copy Email';

})

contactMeBtn.addEventListener('mouseout', () => {
    contactMeBtn.innerText = 'Contact Me';
    contactMeBtn.style.fontSize = '18px';


})

contactMeBtn.addEventListener('click', clipboardCopy);
   
async function clipboardCopy(){
    await navigator.clipboard.writeText('olivares.j.melanie@gmail.com');
    contactMeBtn.innerText = 'Email Copied!';

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