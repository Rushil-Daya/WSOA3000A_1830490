
const button =document.getElementById('applicationButton');

button.addEventListener ('click', function(e)   
{
    window.location.href = "Application.html";
    
} 
);

const menuButton= document.getElementById('menuButton');
var menuItems=  document.getElementById("menuDropdown").style.display= "none";
menuButton.addEventListener('click', function(e){
     menuItems=  document.getElementById("menuDropdown");
    if(menuItems.style.display === "none")
    {
        menuItems.style.display = "block"
    } else{
        menuItems.style.display = "none";
    }

    
});




