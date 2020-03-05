let section_A= document.getElementById('sectionA')
let section_B= document.getElementById('sectionB')
let section_C= document.getElementById('sectionC')
let section_D= document.getElementById('sectionD')
console.log(section_A)
console.log(section_B)
console.log(section_C)
console.log(section_D)


let firstButton=document.querySelector('.firstButton')
let secondButton=document.querySelector('.scondButton')
let thirdButton=document.querySelector('.thirdButton')



firstButton.addEventListener('click', onClick)
function onClick(event){
    section_C.innerHTML=`${section_C.innerHTML}`
    Headers.classlist.add('red') 

}

function addingText(event){
    let boxD=prompt("Enter text for box D")
}
 