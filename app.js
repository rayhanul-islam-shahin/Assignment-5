const buttons = document.querySelectorAll('.heart-btn');
const countHeart = document.querySelector('.heart-count');

for (const button of buttons) {

    button.addEventListener("click", function () {
        const countHeartNum = parseInt(countHeart.innerText)
        countHeart.innerText = countHeartNum + 1;
    })

}


// heart count and calling section

const coinCount = document.getElementById('coin-count'); 
const callButtons = document.querySelectorAll('.calling-btn'); 

for (const button of callButtons) {
    button.addEventListener('click', function () {
        let coinCountNum = parseInt(coinCount.innerText);

        if (coinCountNum < 20 || coinCountNum === 0) {
            alert("You don't have enough coins");
            return;
        }

        const card = button.closest('.cards-sc'); 
        const title = card.querySelector('.card-title').innerText;
        const number = card.querySelector('.card-number').innerText;

        alert('Calling: ' + title + ' Number: ' + number);

        coinCountNum = coinCountNum - 20;
        coinCount.innerText = coinCountNum;
    });
}




const callBtns = document.querySelectorAll('.calling-btn');

const historySection = document.querySelector('.history-section');
const clearButton = historySection.querySelector('button');


const historyList = document.createElement('div');
historySection.appendChild(historyList);


for (const btn of callBtns) {
    btn.addEventListener('click', function () {
        const card = btn.closest('.cards-sc');
        const title = card.querySelector('.card-title').textContent;
        const number = card.querySelector('.card-number').textContent;

        const item = document.createElement('p');
        item.textContent = title + ' - ' + number;
        historyList.prepend(item);
    });
}


clearButton.addEventListener('click', function () {
    historyList.innerHTML = '';
});



const copyButtons = document.querySelectorAll('.copy-btn');


const copyCountSpan = document.getElementById('copy-count');

let copyCount = 0;

for (const btn of copyButtons) {
  btn.addEventListener('click', function() {
    const card = btn.closest('.cards-sc');
    const textToCopy = card.querySelector('.card-number').textContent.trim();

    navigator.clipboard.writeText(textToCopy).then(() => {
     
      copyCount++;
      copyCountSpan.textContent = copyCount;
      alert('Copied: ' + textToCopy);
    })
  });
}



