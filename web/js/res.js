var res = document.getElementById("res");
var pic = document.getElementById('pic');
var mus=document.getElementById('sound');

if(res.value=="Попал!"){
    pic.innerHTML="<video poster='im/smalte.gif'>";
    mus.innerHTML= "<audio src='im/Alex.wav' autoplay='autoplay'>";
}
else {
    pic.innerHTML = "<video poster='im/lav.gif'>";
    mus.innerHTML= "<audio src='im/laugh.wav' autoplay='autoplay'>";
}
window.onload = setTimeout(removeImg, 3800);
 function removeImg() {
     pic.innerHTML = "";
}