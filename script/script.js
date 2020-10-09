const modal = document.querySelector('.modal');
      
document.addEventListener('click', (event) => {
    let target = event.target;
    if(target.classList.contains('cart-button')) {
        modal.classList.add('is-open') 
    }
    if(target.classList.contains('modal-btn-close') || target.classList.contains('modal') ||
    target.classList.contains('button-cancel')) {
        modal.classList.remove('is-open') 
    }

})

new WOW().init();