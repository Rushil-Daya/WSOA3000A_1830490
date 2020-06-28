// fetch('https://randomuser.me/api/?results=3&gender=female')
//     .then((x) => x.json())
//     .then((response) => {
        
//         console.log(response);
//         resultAnalyser(response);
    
//     });

// const resultAnalyser = (result) => {
//     document.querySelector('span').innerText= result.results[0].name.first;
//     document.querySelector('img').src = result.results[0].picture.large;
// }





var outputNumber= document.getElementById("outputNumber");


var sliderNumber= document.getElementById("numberMatches");

sliderNumber.addEventListener('input', function(){
    var numberMatches= document.querySelector("input[id=numberMatches]").value;
    outputNumber.innerHTML= numberMatches;
},false);


var findMatchesButton = document.querySelector('#findMatches');
findMatchesButton.addEventListener('click', function(e) 
{
    
    var numberMatches= document.querySelector("input[id=numberMatches]").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    
    var searchString='https://randomuser.me/api/?'
    searchString= searchString+ 'results=' + numberMatches +"&gender=" + gender;
    searchString= searchString + '&inc=name,email,picture';
    
    
    fetch(searchString)
    .then((x) => x.json())
    .then((response) => {
        
       
        search(response);
    
    });
}
);

const search = (result) => {

    const matchesGrid= document.querySelector('.matchesGrid');

    

    for( let matchItem of result.results){

        const section = document.createElement('section');
        section.className= "match";

        const div= document.createElement('div');
        div.innerText=matchItem.name.first +' '+ matchItem.name.last;
        section.appendChild(div);

        const img= document.createElement('img');
        img.src= matchItem.picture.large;
        section.appendChild(img);

        
        const spanEmail= document.createElement('a');
        spanEmail.className= 'apply'
        var email= matchItem.email;
        var correctEmail= email.replace("example", "gmail");
        spanEmail.href= 'mailto: '+ correctEmail;
        spanEmail.innerText= correctEmail;
        section.appendChild(spanEmail);


        matchesGrid.appendChild(section);

    }

}