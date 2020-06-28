

  fetch('https://randomuser.me/api/?gender=female')
    .then((x) => x.json())
    .then((response) => console.log(response))