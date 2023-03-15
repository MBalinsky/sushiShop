function toggleCardStatus(){
    const lengthSelectCard = document.querySelector('.cart-wrapper').children.length;
    const cartSelectValue = document.querySelector('[data-cart-empty]');
    const makeOrderForm = document.querySelector('#order-form');

    if(lengthSelectCard > 0){
        cartSelectValue.style.display = 'none';
        makeOrderForm.style.display = 'block';
    } else {
        cartSelectValue.style.display = 'block';
        makeOrderForm.style.display = 'none';
    }
}