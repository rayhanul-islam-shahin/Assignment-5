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



