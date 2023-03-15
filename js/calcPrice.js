function calcPriceAndDelivery(){
    const cardItems = document.querySelectorAll('.cart-item');
    const deliveryCost = document.querySelector('.delivery-cost');
    const deliveryHtml = document.querySelector('[data-cart-delivery]')
    let totalPrice = 0;
    cardItems.forEach(el => {
        const amountEl = el.querySelector('[data-counter]');
        const priceEl = el.querySelector('.price__currency');
        
        const curentPrice = parseInt(amountEl.innerHTML) * parseInt(priceEl.innerHTML);
        totalPrice += curentPrice;
    })
    document.querySelector('.total-price').innerHTML = totalPrice;
    
    if(totalPrice >= 600){
        deliveryCost.classList.add('free');
        deliveryCost.innerHTML = 'бесплатно';
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerHTML = '250 ₽';
    }

    if(totalPrice > 0){
        deliveryHtml.classList.remove('none');
    } else {
        deliveryHtml.classList.add('none');
    }
}