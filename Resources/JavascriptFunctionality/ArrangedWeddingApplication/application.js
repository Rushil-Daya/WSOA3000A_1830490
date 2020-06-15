var slider= document.getElementById("ageSlide");
var outputAge= document.getElementById("outputAge");
outputAge.innerHTML =slider.value;



slider.addEventListener('input', function(){
    outputAge.innerHTML= slider.value;
},false);


var age= document.querySelector("input[id=ageSlide]");
var dhal = document.querySelector("input[id=dhal]");
var cultured = document.querySelector("input[id=cultured]");
var alcohol = document.querySelector("input[id=alcohol]");
var output= document.getElementById("outputForm");

var submitButton = document.getElementById("submit");
var refreshButton = document.getElementById("refresh");
refreshButton.disabled=true;
var score=0;

refreshButton.addEventListener('click', function(e){
    refreshButton.disabled=true;
    score=0;
    slider.value=18;
    outputAge.innerHTML= slider.value;
    dhal.checked=false;
    cultured.checked=false;
    alcohol.checked=false;
    var resetName= document.getElementById("name").value="";
    document.body.style.backgroundColor= 'rgb(256,256,256)';
    output.innerText= " ";
    submitButton.disabled=false;
});



submitButton.addEventListener('click', function(e) 
{
    var name = document.getElementById("name").value;
    if(name.length ==0)
    {
        alert("Please enter your name.");
        return;
    }

    output.innerText = name +" we are a " +score + "% match.";
   switch(true)
   {
        case (score >= '70') : document.body.style.backgroundColor= 'rgb(104,217,115)';
                        break;
        case (score >= '50') : document.body.style.backgroundColor= 'rgb(245,171,44)';
                        break;
        default : document.body.style.backgroundColor= 'rgb(189,177,177)'
    
   }

   submitButton.disabled=true;
   refreshButton.disabled=false;
}
);

age.addEventListener('change', function(e){
    if ( this.value >= '60'  )
    {
        output.innerText = "Sorry, you are too old :(" ;
        document.body.style.backgroundColor= 'rgb(252,53,3)' ;
        return;
    } else{
        document.body.style.backgroundColor = 'rgb(256,256,256)';
        output.innerText= " ";
    }

    if (  this.value<25  && slider.value>18 )
    {
        score=score+30;
    } else if (  this.value<60)
    {
        score = score+ 10;
    }
});

dhal.addEventListener('change', function(e){
    if(this.checked)
    {
        score+=20
    } else score-=20;
});

cultured.addEventListener('change', function(e){
    if (this.checked)
    {
        score+=30;
    }else score -=30;
})

alcohol.addEventListener('change', function(e){
    if(this.checked)
    {
        score+=20;
    } else score-=20;
})


