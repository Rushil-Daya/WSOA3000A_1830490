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

const button = document.body.children[1];
console.log(button);


button.addEventListener ("click", function(e)   
{
    const element= document.createElement('em');
    element.innerText = 'new texttttttt';
    document.body.appendChild(element);

    console.log('pressed');


} 
);
