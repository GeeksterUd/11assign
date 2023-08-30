const key= document.getElementById("key");
window.addEventListener("keydown",(e)=>{
    key.innerHTML=`You pressed <span style="color:green">${e.key}</span> <h3>${e.keyCode}</h3>`
})
