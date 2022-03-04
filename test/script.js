document.querySelectorAll('.accordion__item__question').forEach(item =>{
    item.addEventListener('click', event => {
        item.classList.toggle('active');
        item.nextElementSibling.classList.toggle('hidden');
    })
})
