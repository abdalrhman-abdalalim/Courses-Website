let mode=document.getElementById("ClickMode");
let logo=document.getElementById("ImgSrc");
let back=document.body;
mode.onclick=function(){
    back.classList.toggle("darkMode");
    if(back.classList.contains("darkMode")){
        logo.src="moonImg.jpg";
    }
    else {
        logo.src="Sun-Logo.jpg";
    }
};