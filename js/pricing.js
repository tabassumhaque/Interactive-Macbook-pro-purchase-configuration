// function to change the input value according to the updated specs
function getInputValue(extracost, perUpgradeCost){
    const specsInputId = document.getElementById(extracost);
    const specsUpgrade = specsInputId.innerText;
    const specsUpgradeCost = perUpgradeCost;
    specsInputId.innerText = specsUpgradeCost;
    // call the calculateCost() function
    calculateCost();
}

// function to calculate the total updated prices according to the updated specs
function calculateCost(){
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseInt(document.getElementById('extra-memory-cost').innerText);
    const extraStorageCost = parseInt(document.getElementById('extra-storage-cost').innerText);
    const deliveryChargeCost = parseInt(document.getElementById('delivery-charge-cost').innerText);
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryChargeCost;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('discounted-total-price').innerText = totalPrice;
    return totalPrice;
}

// function to calculate the discount price after promo code
function getDiscountedPrice(){
    const promoCodeId = document.getElementById('promo-code');
    let promoCodeValue = promoCodeId.value;
    const totalPriceValue = parseInt(document.getElementById('total-price').innerText);
    // applying the promocode
    if(promoCodeValue == 'stevekaku'){
        const discountedPrice = totalPriceValue - (totalPriceValue * 0.20);
        const discountedPriceId = document.getElementById('discounted-total-price');
        discountedPriceId.innerText = discountedPrice;
        // clear the input field
        promoCodeId.value = '';
        return discountedPrice;
    }
    else{
        document.getElementById('discounted-total-price').innerText = totalPriceValue;
    }
}

// Event Handler of memory buttons
document.getElementById('memory-btn1').addEventListener('click', function(){
    // call the getInputValue() function to change the prices
    getInputValue('extra-memory-cost', 0);
})
document.getElementById('memory-btn2').addEventListener('click', function(){
    getInputValue('extra-memory-cost', 180);
})

// Event Handler of SSD Storage buttons
document.getElementById('storage-btn1').addEventListener('click', function(){
    getInputValue('extra-storage-cost', 0);
})
document.getElementById('storage-btn2').addEventListener('click', function(){
    getInputValue('extra-storage-cost', 100);
})
document.getElementById('storage-btn3').addEventListener('click', function(){
    getInputValue('extra-storage-cost', 180);
})

// Event Handler of Delivery Charge buttons
document.getElementById('delivery-btn1').addEventListener('click', function(){
    getInputValue('delivery-charge-cost', 0);
})
document.getElementById('delivery-btn2').addEventListener('click', function(){
    getInputValue('delivery-charge-cost', 20);
})

// Click the apply button to get the discount price
document.getElementById('apply-btn').addEventListener('click', function(){  
    getDiscountedPrice()
})
