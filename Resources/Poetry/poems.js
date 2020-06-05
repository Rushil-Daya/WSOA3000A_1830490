var sunflowerPanel= document.getElementById("sunflowerPanel");
var brownboyPanel= document.getElementById("brownboyPanel");
var lifePanel= document.getElementById("lifePanel");
var inspirePanel=document.getElementById("inspirePanel");
var brokenPanel= document.getElementById("brokenPanel");
var lovePanel=document.getElementById("lovePanel");


sunflowerPanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(217, 210, 115)';
    
});

brownboyPanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(222, 199, 138)';
});

lifePanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(159, 227, 161)';
});

inspirePanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(188, 234, 235)';
});

brokenPanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(136,145,145)';
});
lovePanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(240, 122, 165)';
});



inspirePanel.addEventListener('mouseout', function(e){
    whiteBack();
});

brokenPanel.addEventListener('mouseout',function(e){
    whiteBack();
});
lovePanel.addEventListener('mouseout', function(e){
    whiteBack();
});
lifePanel.addEventListener('mouseout', function(e){
    whiteBack();
});
brownboyPanel.addEventListener('mouseout', function(e){
    whiteBack();
});
sunflowerPanel.addEventListener('mouseout', function(e){
    whiteBack();
});

function whiteBack()
{
    document.body.style.backgroundColor= 'rgb(256,256,256)';
    return;
}


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
    console.log('press')
    
});
