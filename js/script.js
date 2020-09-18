'use strict';
const typing = () => {
  let get__easy = localStorage.getItem('easy');
  let easy__ranking = '';
  try {
    easy__ranking = get__easy.split(',');
  } catch {
    easy__ranking = [0, 0, 0];
  }
  easy__ranking.sort((a, b) => {
    return b- a;
  });
  let get__normal = localStorage.getItem('normal');
  let normal__ranking = '';
  try {
    normal__ranking = get__normal.split(',');
  } catch {
    normal__ranking = [0, 0, 0];
  }
  normal__ranking.sort((a, b) => {
    return b - a;
  });
  let get__hard = localStorage.getItem('hard');
  let hard__ranking = '';
  try {
    hard__ranking = get__hard.split(',');
  } catch {
    hard__ranking = [0, 0, 0];
  }
  hard__ranking.sort((a, b) => {
    return b- a;
  });
  console.log(easy__ranking);
  console.log(normal__ranking);
  console.log(hard__ranking);
  const easy = document.getElementById('easy');
  const normal = document.getElementById('normal');
  const hard = document.getElementById('hard');
  const typegame = document.getElementsByClassName('type')[0];
  const result = document.getElementsByClassName('result')[0];
  const result__score = document.getElementById('score');
  const result__true= document.getElementById('true');
  const result__wrong = document.getElementById('wrong');
  const result__sec = document.getElementById('second');
  const ranking__html = document.getElementsByClassName('ranking')[0];
  const miss = $('.miss');
  let sec = 0;
  let current = 0;
  const easyLists = [
    'avenged sevenfold',
    'metallica',
    'sticky fingers',
    'slipknot',
    'the oral cigarettes',
    'one ok rock',
    'silent siren',
    'mrs. green apple',
    'non stop rabbit',
    'crazy diamond',
    'killer queen',
    'red hot chili pepper',
    'white album',
    'king crimson',
    'talking heads',
    'purple haze',
  ];
  const normalLists = [
    'so many men so many minds',
    'failure teaches success',
    'bullet for my valentine',
    'maximum the hormone',
    'the early bird catches the worm',
    'out of the mouth comes evil',
    'he that will lie will steal',
    'seeing is believing',
    'a word is enough to the wise',
    'when in rome do as the romans do',
    'woman is as fickle as april weather',
    'practice makes perfect',
  ];
  const hardLists = [
    'when poverty comes in at the door, love flies out of the window',
    'never put off till tomorrow what can be done today',
    'tis better to have loved and lost than never to have loved at all',
    'way to a mans heart is through his stomach',
    'every man is the architect of his own fortune',
    'so many countries, so many customs',
    'a good beginning makes a good ending',
    'a friend to everybody is a friend to nobody',
  ];
  let textLists = [];
  easy.addEventListener('click', () => {
    easy__start();
    start();
  });
  normal.addEventListener('click', () => {
    normal__start();
    start();
  });
  hard.addEventListener('click', () => {
    hard__start();
    start();
  });
  const start = () => {
    let score = 0;
    let typec = 0;
    let missType = 0;
    const text = document.getElementById('text');
    let checkTexts = [];
    const createText = () => {
      const rnd = Math.floor(Math.random() * textLists.length);
      text.textContent = '';
      checkTexts = textLists[rnd].split('').map(function(value) {
        let span = document.createElement('span');
        span.textContent = value;
        text.appendChild(span);
        return span;
      });
    };
    createText();
    document.addEventListener('keydown', keyDown);
    function keyDown(e) {
      if(e.key === checkTexts[0].textContent && count > 0) {
        checkTexts[0].className = 'blue';
        score++;
        typec++;
        console.log(typec);
        checkTexts.shift();
        if(!checkTexts.length) {
          createText();
          score = score + 200;
          console.log(score);
        }
      } else if(count > 0) {
        missType++;
        miss.stop(true,true).fadeIn(200);
        miss.fadeOut(200);
      } else {
        return false;
      }
    };
    const countDown = document.getElementById('count');
    countDown.innerHTML = '🕛 ' +  sec;
    let dt = new Date();
    const endDt = new Date(dt.getTime() + sec * 1000);
    let count = sec;
    const id = setInterval(function() {
      count--;
      countDown.innerHTML = '🕛 ' + count;
      dt = new Date();
      if(dt.getTime() >= endDt.getTime()) {
        clearInterval(id);
        window.alert('time up!');
        typegame.classList.add('hide');
        result.classList.remove('hide');
        ranking__html.classList.remove('hide');
        result__score.innerHTML = 'スコア ' + score;
        result__true.innerHTML = '正タイプ ' + typec;
        result__wrong.innerHTML = '誤タイプ ' + missType;
        result__sec.innerHTML = '平均 ' + (typec / sec).toFixed(1) +' 打鍵 / 秒';
        if(current === 1) {
          easy__ranking.push(score);
          easy__ranking.sort((a, b) => {
            return b - a;
          });
          localStorage.setItem('easy', easy__ranking);
          get__easy = localStorage.getItem('easy');
          easy__ranking = get__easy.split(',');
        } else if(current === 2) {
          normal__ranking.push(score);
          normal__ranking.sort((a, b) => {
            return b - a;
          });
          localStorage.setItem('normal', normal__ranking);
          get__normal = localStorage.getItem('normal');
          normal__ranking = get__normal.split(',');
        } else if(current === 3) {
          hard__ranking.push(score);
          hard__ranking.sort((a, b) => {
            return b - a;
          });
          localStorage.setItem('hard', hard__ranking);
          get__hard = localStorage.getItem('hard');
          hard__ranking = get__hard.split(',');
        }
        console.log(easy__ranking);
        console.log(normal__ranking);
        console.log(hard__ranking);
      }
    }, 1000);
  };
  const easy__start = () => {
    easy.classList.add('hide');
    normal.classList.add('hide');
    hard.classList.add('hide');
    ranking__html.classList.add('hide');
    textLists = easyLists;
    sec = 60;
    current = 1;
  };
  const normal__start = () => {
    easy.classList.add('hide');
    normal.classList.add('hide');
    hard.classList.add('hide');
    ranking__html.classList.add('hide');
    textLists = normalLists;
    sec = 120;
    current = 2;
  };
  const hard__start = () => {
    easy.classList.add('hide');
    normal.classList.add('hide');
    hard.classList.add('hide');
    ranking__html.classList.add('hide');
    textLists = hardLists;
    sec = 180;
    current = 3;
  };
};
typing();


