// Memory 

const memoryBtn1 = document.getElementById('m1-btn').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '0';
    const memoryCostNumber = parseInt(memoryCost.innerText);
    console.log(memoryCostNumber);

})
const memoryBtn2 = document.getElementById('m2-btn').addEventListener('click', function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = '180';
    const memoryCostNumber = parseInt(memoryCost.innerText);
    console.log(memoryCostNumber);

})

// Storage 

const storageBtn1 = document.getElementById('storage1-btn').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '180';
    const storageCostNumber = parseInt(storageCost.innerText);
    console.log(storageCostNumber);

})
const storageBtn2 = document.getElementById('storage2-btn').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '2';
    const storageCostNumber = parseInt(storageCost.innerText);
    console.log(storageCostNumber);

})
const storageBtn3 = document.getElementById('storage3-btn').addEventListener('click', function(){
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = '3';
    const storageCostNumber = parseInt(storageCost.innerText);
    console.log(storageCostNumber);

})

// delivery charge 

const freeDelivery = document.getElementById('free').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '20';
    const deliveryCostNumber = parseInt(deliveryCost.innerText);
    console.log(deliveryCostNumber);
})
const primeDelivery = document.getElementById('prime').addEventListener('click', function(){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = '100';
    const deliveryCostNumber = parseInt(deliveryCost.innerText);
    console.log(deliveryCostNumber);
})
