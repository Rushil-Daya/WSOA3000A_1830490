const blogsItems =[
    {title: 'SharukhDaya' , link: '/Resources/Blogs/blog5.html'},
    {title: 'LivingAtHome' , link: '/Resources/Blogs/champalBlog.html'}

]


const menuItems = [
    {title: 'Home', link: '/'},
    {title: 'Blogs' , link: '/Resources/Blogs' , children: blogsItems},
    {title: 'Poetry', link: '/Resources/Poems'},
    {title: 'Photography', link: '/Resources/Photography'},
    {title: 'ContactMe', link: '/Resources/Contact'},

    

]

const createMenuItem = (item)=>{

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerText=item.title;
    a.href = item.link;
    li.appendChild(a);
    if(item.children  && item.children.length)
    {
        

        let ul = document.createElement('ul');
        for(let childItem of item.children)
        {
            let childMenuItem = createMenuItem(childItem);
            ul.appendChild(childMenuItem);
        }
        li.appendChild(ul);
    }
   
    
    return li;

}

const initialiseMenu= () => {
    const nav= document.querySelector('nav');

    const ul = document.createElement('ul');

    for(let item of menuItems  )   {
      const li= createMenuItem(item);
      ul.appendChild(li);
    }

    nav.appendChild(ul);
};

document.addEventListener("DOMContentLoaded",() => initialiseMenu());
