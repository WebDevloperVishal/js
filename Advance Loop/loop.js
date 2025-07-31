// for-in-Loop
const phone = {
    brand: 'Apple',
    model: 'iphone-16',
    price: '180000',
    camera: '20 MP',
    ram: '12GGB',
    rom: '256GB'
}

for (let key in phone) {
    console.log(key);
    console.log(phone[key]);
}

// <----------------------------------->
// for-of-Loop
const numbs = [10, 20, 30, 40, 50];

for (let value of numbs) {
    console.log(value);
}

// for-each-Loop
let nums = [10, 20, 30, 40]

nums.forEach((value, index, nums) => {
    console.log(value, '=>', index, '=>', nums)
})