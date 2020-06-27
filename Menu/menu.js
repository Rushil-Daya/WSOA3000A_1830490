const blogsItems =[
    {title: 'Personal' , link: '/WSOA3000A_1830490/Resources/Blogs/Personal' },
    {title: 'Academic' , link: '/WSOA3000A_1830490/Resources/Blogs/Academic'},

]
const menuItems = [
   
    {title: 'Home', link: '/WSOA3000A_1830490'},
    {title: 'Blogs' , link: '/WSOA3000A_1830490/Resources/Blogs' , children: blogsItems},
    {title: 'Poetry', link: '/WSOA3000A_1830490/Resources/Poetry'},
    {title: 'Gallery', link: '/WSOA3000A_1830490/Resources/Gallery'},
    {title: 'Contact', link: '/WSOA3000A_1830490/Resources/Contact'},
]

const socialItems = [
    {title: 'Email', link: 'mailto: sharukhdaya@gmail.com', src: '/WSOA3000A_1830490/Resources/Pictures/email.png'},
    {title: 'Twitter', link: 'https://twitter.com/DayaSharukh', src: '/WSOA3000A_1830490/Resources/Pictures/twitter.png' },
    {title: 'Instagram', link: 'https://www.instagram.com/sharukhdaya/' ,  src: '/WSOA3000A_1830490/Resources/Pictures/inst.png'},
    {title: 'Copyright 2020, Rushil Daya', src: '/WSOA3000A_1830490/Resources/Pictures/copyright.png'}
   

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
    
    // const logo = document.createElement('a');
    // logo.innerText = 'Sharukh Daya';
    // logo.href ='/WSOA3000A_1830490';
    // const h1Logo= document.createElement('h1');
    // h1Logo.className= 'title';
    // h1Logo.appendChild(logo);

    // const nav= document.querySelector('nav');
    // nav.appendChild(h1Logo);

    const nav= document.querySelector('nav');
    const ul = document.createElement('ul');
   
    for(let item of menuItems  )   {
      const li= createMenuItem(item);
      
      ul.appendChild(li);
      
    }

    nav.appendChild(ul);
};


const createFooterItem = (itemS)=>{ 

    // const div = document.createElement('div')
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    const image=document.createElement('img');
    image.className= 'socialLink'
    image.src= itemS.src;

    a.innerText=itemS.title;
    a.href = itemS.link;
    // image.appendChild(a)
    li.appendChild(image);
    li.appendChild(a);
    
    // li.appendChild(div);
    return li;



}

const initialiseFooter= ()=> {
    const footer = document.querySelector('footer');
    const ul = document.createElement('ul');

    for (let itemS of socialItems) {
        const li= createFooterItem(itemS);
        ul.appendChild(li);
    }

    footer.appendChild(ul);

    //  const div = document.createElement('div');
    //  div.innerText= "© 2020, Rushil Daya" 

    //  footer.appendChild(div);
}







document.addEventListener("DOMContentLoaded",() => initialiseMenu());
document.addEventListener("DOMContentLoaded",() => initialiseFooter());
