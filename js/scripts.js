'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores = [0, 0];
let currentscore = 0;
let activeplayer = 0;

const switchPlayer = function(){
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

btnRoll.addEventListener('click', function(){
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.remove('hidden')
    diceEl.src = `./img/dice${dice}.png`
    if(dice !== 1){
        currentscore += dice
        document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    } else{
        switchPlayer
    }
})

btnHold.addEventListener('click', function(){
    scores[activeplayer] += currentscore;
    document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer]
    if( scores[activeplayer >= 20]){
        diceEl.classList.add('hidden');
        document.querySelector(`.player--${activeplayer}`).classList.add('player--active')
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
        document.querySelector('body').styles.backgroundColor = '#64b347'
    } else{
        switchPlayer()
    }
})