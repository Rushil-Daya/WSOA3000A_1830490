const menuButton= document.getElementById('menuButton');
var menuItems=  document.getElementById("menuDropdown").style.display= "none";
menuButton.addEventListener('click', function(e){
    var menuItems=  document.getElementById("menuDropdown");
    if(menuItems.style.display === "none")
    {
        menuItems.style.display = "block"
    } else{
        menuItems.style.display = "none";
    }

    
});
