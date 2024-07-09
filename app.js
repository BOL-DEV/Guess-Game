'use strict'

const guessedNum = document.querySelector('.guessed-Num')
const submit = document.querySelector('.submit')
const congrate = document.querySelector('.congrate')
const notice = document.querySelector('.notice')
const noticeTwo = document.querySelector('.notice2')
const attemptss = document.querySelector('.attempt')
const heart = document.querySelectorAll('i')
const restart = document.querySelector('.restart')




// console.log(guessedNum, submit, congrate, notice);

let randomNumber = Math.floor(Math.random() * 40 + 1)
console.log(randomNumber);

guessedNum.focus()


// attemptss.innerHTML = attempt;

let attempt = 5

// attemptss.innerHTML = attempt;



submit.addEventListener('click', () => {

    // let attempt = 5;

    // attemptss.innerHTML = attempt;

    let input = Number(guessedNum.value)

    if (+guessedNum.value === randomNumber) {
        congrate.innerHTML = `Your guess of ${randomNumber} is correct!!`
        notice.innerHTML = ' '
        noticeTwo.textContent = `Congratulation!!!!`
        attempt++
    } else if (+guessedNum.value > randomNumber) {
        notice.innerHTML = `Opps! your guess of ${input} is too high`
        heart.forEach(h => {
            if (+h.getAttribute('id')===attempt) {
                h.style.display='none'
            }
        })
        attempt--
    } else if (+guessedNum.value < randomNumber) {
        noticeTwo.innerHTML = `Opps! your guess of ${input} is too low`
        heart.forEach(h => {
            if (+h.getAttribute('id')===attempt) {
                h.style.display='none'
            }
        })
        attempt--
    }

    attemptss.innerHTML = attempt;
    // console.log(attempt);

    if (attempt === 0) {
        notice.innerHTML = ' '
        noticeTwo.textContent=`Game Over`
    }
})

   


restart.addEventListener('click', () => {
    attemptss.innerHTML = 5
    randomNumber = Math.floor(Math.random() * 40 + 1);
    guessedNum.focus();
    notice.innerHTML = ' ';
    noticeTwo.innerHTML = ' ';
    guessedNum.value = ' '

    
})