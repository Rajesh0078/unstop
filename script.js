const newBtn = document.querySelector("#newButton")
const assessment = document.querySelector("#new-assessment")
const closeX = document.querySelector("#times")
const resBtn = document.querySelector("#res-btn")
const resBtnClose = document.querySelector("#res-btn-close")
const resSide = document.querySelector(".sidebar-res")

newBtn.onclick = () =>{
    assessment.classList.toggle("active")
}
closeX.onclick = () =>{
    assessment.classList.remove("active")
}
resBtn.onclick = () =>{
    resSide.classList.toggle("active")
}
resBtnClose.onclick = () =>{
    resSide.classList.remove("active")
}