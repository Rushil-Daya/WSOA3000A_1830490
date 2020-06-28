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





var findMatchesButton = document.querySelector('#findMatches');
findMatchesButton.addEventListener('click', function(e) 
{
    
        var numberMatches= document.querySelector("input[id=numberMatches]").value;
       

        var male = document.querySelector("input[id=male]").value;
        console.log(male);
    
    fetch('https://randomuser.me/api/?results=3&gender=female&inc=name,email,picture')
    .then((x) => x.json())
    .then((response) => {
        
        console.log(response);
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

        
        const spanEmail= document.createElement('span');
        var email= matchItem.email;
        var correctEmail= email.replace("example", "gmail");
        spanEmail.innerText=correctEmail;
        section.appendChild(spanEmail);


        

        

        matchesGrid.appendChild(section);

    }

}