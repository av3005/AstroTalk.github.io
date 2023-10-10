function hideiconBar(){
    var iconBar=document.getElementById("iconBar");
    var navigation=document.getElementById("navigation");
    iconBar.setAttribute("style","display:none;")
    navigation.classList.remove("hide");
}