const blogsItems =[
    {title: 'Personal' , link: '/Resources/Blogs/Personal' },
    {title: 'Academic' , link: '/Resources/Blogs/Academic'},

]



const menuItems = [
    {title: 'Home', link: '/'},
    {title: 'Blogs' , link: '/Resources/Blogs' , children: blogsItems},
    {title: 'Poetry', link: '/Resources/Poetry'},
    {title: 'Gallery', link: '/Resources/Gallery'},
    {title: 'Contact', link: '/WSOA300A_1830490/Resources/Contact'},

    

]

const createMenuItem = (item)=>{

    const div = document.createElement('div')
    div.className= "menuLine"

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
   
    li.appendChild(div);
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
