const hexnumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const hexbtn = document.querySelector('.hexbtn');
const bodybcd = document.querySelector('body');

const hex = document.querySelector('.hex');

hexbtn.addEventListener('click',gethex);

function gethex(){

    let hexcol = '#';

    for(let i = 0; i<6; i++ ){
     let random = Math.floor(Math.random()*hexnumbers.length);
       hexcol += hexnumbers[random];
    }

    bodybcd.style.backgroundColor = hexcol;
    hex.innerHTML = hexcol;
    console.log(hex);
}