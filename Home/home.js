const modallogin=document.querySelector("#login");
const modalsignup=document.querySelector("#signup");
const overlay =document.querySelector(".overlay");
const loginbtn=document.querySelector(".login");
const signupbtn=document.querySelector(".signup");
const loginbackbtn=document.querySelector("#loginbackbtn");
const signupbackbtn=document.querySelector("#signupbackbtn");


const openModallog=()=>{
    modallogin.classList.remove("hidden");
    modallogin.classList.add("modal");
    overlay.classList.remove("hidden");

}
const closemodal=()=>{
    modallogin.classList.add("hidden");
    // modallogin.classList.remove("modal");
    overlay.classList.add("hidden");
    modalsignup.classList.add("hidden");
    // modalsignup.classList.remove("modal");
}
const openModalsign=()=>{
    modalsignup.classList.remove("hidden");
    modalsignup.classList.add("modal");
    overlay.classList.remove("hidden");

}

loginbtn.addEventListener("click",openModallog);
signupbtn.addEventListener("click",openModalsign);
loginbackbtn.addEventListener("click",closemodal);
signupbackbtn.addEventListener("click",closemodal);
overlay.addEventListener("click",closemodal);
document.addEventListener("keydown",function(e){
    if(e.key==="Escape"){
        closemodal();
    }
})