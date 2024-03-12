const navToggle = document.querySelector('.navToggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click',()=>{
    console.log("I am being Clicked!")
    console.log(links.classlist)
    console.log(links.classlist.contains('links'))
    /*if(links.classlist.contains('show-links')){
        links.classlist.remove('show-links')
    }else{
        links.classList.add('show-links')
    } */
    links.classList.toggle('show-links')
})