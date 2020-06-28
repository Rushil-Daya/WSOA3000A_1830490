fetch('https://randomuser.me/api/?results=3&gender=female&inc=name,gender,email,picture')
    .then((x) => x.json())
    .then((response) => {
        
        console.log(response);
        resultAnalyser(response);
    
    });

const resultAnalyser = (result) => {
    document.querySelector('span').innerText= result.results[0].name.first;
    document.querySelector('img').src = result.results[0].picture.large;
}