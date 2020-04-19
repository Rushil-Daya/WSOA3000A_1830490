var sunflowerPanel= document.getElementById("sunflowerPanel");
var brownboyPanel= document.getElementById("brownboyPanel");
var lifePanel= document.getElementById("lifePanel");
var inspirePanel=document.getElementById("inspirePanel");
var brokenPanel= document.getElementById("brokenPanel");
var lovePanel=document.getElementById("lovePanel");


sunflowerPanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(239,245,66)';
    console.log('hoverSunflower');
});

brownboyPanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(189,143,70)';
});

lifePanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(133,201,101)';
});

inspirePanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(70,211,250)';
});

brokenPanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(136,145,145)';
});
lovePanel.addEventListener('mouseover', function(e){
    document.body.style.backgroundColor= 'rgb(255,38,103)';
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
