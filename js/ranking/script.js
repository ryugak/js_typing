'use strict';
const ranking = () => {
  const easyFirst = document.getElementById('easyFirst');
  const easySecond = document.getElementById('easySecond');
  const easyThird = document.getElementById('easyThird');
  const normalFirst = document.getElementById('normalFirst');
  const normalSecond = document.getElementById('normalSecond');
  const normalThird = document.getElementById('normalThird');
  const hardFirst = document.getElementById('hardFirst');
  const hardSecond = document.getElementById('hardSecond');
  const hardThird = document.getElementById('hardThird');
  let get__easy = localStorage.getItem('easy');
  let easy__ranking = '';
  try {
    easy__ranking = get__easy.split(',');
  } catch {
    easy__ranking = [0, 0, 0];
  }
  let get__normal = localStorage.getItem('normal');
  let normal__ranking = '';
  try {
    normal__ranking = get__normal.split(',');
  } catch {
    normal__ranking = [0, 0, 0];
  }
  let get__hard = localStorage.getItem('hard');
  let hard__ranking = '';
  try {
    hard__ranking = get__hard.split(',');
  } catch {
    hard__ranking = [0, 0, 0];
  }
  easyFirst.innerHTML = '1st. ' + easy__ranking[0];
  easySecond.innerHTML = '2nd. ' + easy__ranking[1];
  easyThird.innerHTML = '3rd. ' + easy__ranking[2];
  normalFirst.innerHTML = '1st. ' + normal__ranking[0];
  normalSecond.innerHTML = '2nd. ' + normal__ranking[1];
  normalThird.innerHTML = '3rd. ' + normal__ranking[2];
  hardFirst.innerHTML = '1st. ' + hard__ranking[0];
  hardSecond.innerHTML = '2nd. ' + hard__ranking[1];
  hardThird.innerHTML = '3rd. ' + hard__ranking[2];
};
ranking();