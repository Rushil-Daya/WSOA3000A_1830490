/* 
const number= 0;

function buttonPressed(e) {
    //number = number +1;
    const colour = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = colour;
    console.log(e);
    
}

buttonPressed.addEventListener('click' , buttonPressed);
*/

const button = document.body.children[0];
console.log(button);
console.log('kl');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}





button.addEventListener ('click', function(e)   
{
    

    const colour = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor= colour;
    


    console.log('pressed');


} 
);
