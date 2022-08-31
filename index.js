const submitBtn = document.querySelector('#submit');
const main = document.querySelector('#main');
const access = document.querySelector('#access');
const rateNums = document.querySelector('#rate-numbers');
const btn1 = document.querySelector('#one');
const btn2 = document.querySelector('#two');
const btn3 = document.querySelector('#three');
const btn4 = document.querySelector('#four');
const btn5 = document.querySelector('#five');
const rate = document.querySelector('#rate');

let rating = 0;
let clicked = false;
let submitClick = false;


rateNums.addEventListener('click', () => {
    clicked = true;
})

submitBtn.addEventListener('click', () => {
    submitClick = true;
    console.log(submitClick);
    if ((submitClick === true) && (clicked === false)) {
        alert('Please choose a rating 1 to 5!');
    } else if ((submitClick === true) && (clicked === true)) {
        console.log('open new');
        console.log(rating);
        rate.textContent = rating;
        access.classList.remove('hidden');
        main.classList.add('hidden');
    }
})

btn1.addEventListener('click', () => {
    rating = btn1.value;
    console.log(rating);
})
btn2.addEventListener('click', () => {
    rating = btn2.value;
    console.log(rating);
})
btn3.addEventListener('click', () => {
    rating = btn3.value;
    console.log(rating);
})
btn4.addEventListener('click', () => {
    rating = btn4.value;
    console.log(rating);
})
btn5.addEventListener('click', () => {
    rating = btn5.value;
    console.log(rating);
})






