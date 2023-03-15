window.addEventListener('click', (e) => {
    let htmlCountValue;
    if(e.target.hasAttribute('data-action')){
    const countWrapper = e.target.closest('.counter-wrapper');
    htmlCountValue = countWrapper.querySelector('[data-counter]');
    }

    if(e.target.dataset.action === 'plus'){
        htmlCountValue.innerHTML = ++htmlCountValue.innerHTML;
    }

    if(e.target.dataset.action === 'minus' && htmlCountValue.innerHTML > 1){
        htmlCountValue.innerHTML = --htmlCountValue.innerHTML;
    } else if (e.target.closest('.cart-wrapper') && parseInt(htmlCountValue.innerHTML) === 1){
        e.target.closest('.cart-item').remove();
        toggleCardStatus();
        calcPriceAndDelivery();
    }

    if(e.target.hasAttribute('data-action') && e.target.closest('.cart-wrapper')){
        calcPriceAndDelivery();
    }
})