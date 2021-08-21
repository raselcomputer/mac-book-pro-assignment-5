// Memory 

const memoryBtn1 = document.getElementById('m1-btn').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '0';
    const memoryCostNumber = parseInt(memoryCost.innerText);
    console.log(memoryCostNumber);

    const total = document.getElementById('total');
    total.innerText = parseInt(total.innerText);
    
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = '1299';
    const bestPriceNumber = parseInt(bestPrice.innerText);

    total.innerText = bestPriceNumber + memoryCostNumber;
    const totalCost = total.innerText;
    return totalCost;
})
const memoryBtn2 = document.getElementById('m2-btn').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '180';
    const memoryCostNumber = parseInt(memoryCost.innerText);
    console.log(memoryCostNumber);

    const total = document.getElementById('total');
    total.innerText = parseInt(total.innerText);
    
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = '1299';
    const bestPriceNumber = parseInt(bestPrice.innerText);

    total.innerText = bestPriceNumber + memoryCostNumber;
    const totalCost = total.innerText;
    return totalCost;
})

// Storage 

const storageBtn1 = document.getElementById('storage1-btn').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '180';
    const storageCostNumber = parseInt(storageCost.innerText);
    console.log(storageCostNumber);

    const total = document.getElementById('total');
    total.innerText = parseInt(total.innerText);
    
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = '1299';
    const bestPriceNumber = parseInt(bestPrice.innerText);

    total.innerText = bestPriceNumber + storageCostNumber;
    const totalCost = total.innerText;
    return totalCost;

})
const storageBtn2 = document.getElementById('storage2-btn').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '2';
    const storageCostNumber = parseInt(storageCost.innerText);
    console.log(storageCostNumber);

    const total = document.getElementById('total');
    total.innerText = parseInt(total.innerText);
    
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = '1299';
    const bestPriceNumber = parseInt(bestPrice.innerText);

    total.innerText = bestPriceNumber + storageCostNumber;
    const totalCost = total.innerText;
    return totalCost;

})
const storageBtn3 = document.getElementById('storage3-btn').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '3';
    const storageCostNumber = parseInt(storageCost.innerText);
    console.log(storageCostNumber);

    const total = document.getElementById('total');
    total.innerText = parseInt(total.innerText);
    
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = '1299';
    const bestPriceNumber = parseInt(bestPrice.innerText);

    total.innerText = bestPriceNumber + storageCostNumber;
    const totalCost = total.innerText;
    return totalCost;

})

// delivery charge 

const freeDelivery = document.getElementById('free').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '20';
    const deliveryCostNumber = parseInt(deliveryCost.innerText);
    console.log(deliveryCostNumber);

    const total = document.getElementById('total');
    total.innerText = '0';
    const totalCostNumber = parseInt(total.innerText);

    const totalCost = totalCostNumber + deliveryCostNumber;
    return totalCost;
})
const primeDelivery = document.getElementById('prime').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '100';
    const deliveryCostNumber = parseInt(deliveryCost.innerText);
    console.log(deliveryCostNumber);

    const total = document.getElementById('total');
    total.innerText = '0';
    const totalCostNumber = parseInt(total.innerText);

    const totalCost = totalCostNumber + deliveryCostNumber;
    return totalCost;
})



