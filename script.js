document.querySelectorAll('.accordion__item__question').forEach(item =>{
    item.addEventListener('click', event => {
        console.log('click');
        if (item.classList.contains('active')){
            item.classList.remove('active')
            item.nextElementSibling.classList.add('hidden')
        }
        else{
            item.classList.add('active')
            item.nextElementSibling.classList.remove('hidden')
        }
        
    })
})