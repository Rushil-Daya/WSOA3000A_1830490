const menuData = [
    {title: 'Home', link: '/'},
    {title: 'Blogs' , link: '/Resources/Blogs'},
    {title: 'Poetry', link: '/Resources/Poems'},
    {title: 'Photography', link: '/Resources/Photography'},
    

]



const initialiseMenu= () => {
    const nav= document.querySelector('nav');

    const ul = document.createElement('ul');

    for(let item of menuData  )   {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.innerText=item.title;
        a.href = item.link;
        li.appendChild(a);
        ul.appendChild(li);
    }

    nav.appendChild(ul);
};

document.addEventListener("DOMContentLoaded",() => initialiseMenu());
