const selections = ['rock','paper','scissor'];
const winOptions = {
  '0' : 'Draw',
  '-1': 'CPU',
  '-2': 'Player',
  '1' : 'Player',
  '2' : 'CPU',
}

const imgRock = document.querySelector('#img-rock'),
      imgPaper = document.querySelector('#img-paper'),
      imgScissor = document.querySelector('#img-scissor'),
      imgUser = document.querySelector('#img-user'),
      imgCPU = document.querySelector('#img-cpu'),
      titleWinner = document.querySelector('#title-winner'),
      btnRestart = document.querySelector('#btn-restart'),
      contentResult = document.querySelector('.content-result'),
      contentPlay = document.querySelector('.content-play');

const Winner = (userSelection, cpuSelection) => {
 
  const numWinner = userSelection - cpuSelection;
  let TheWinner = winOptions [ numWinner ];
  imgUser.classList.add('paused');
  imgCPU.classList.add('paused');

  if(numWinner != 0){ TheWinner = TheWinner + ' won'}

  contentPlay.classList.add('hide');
  contentResult.classList.remove('hide');
  titleWinner.innerHTML = TheWinner;
}

const ComputerSelection = () => {
  let random = Math.floor(Math.random() * selections.length);
  random = random + 1; 
  switch(random){
    case 1:
      imgCPU.src = './public/assets/images/rock-right.png';
    break;
    case 2:
      imgCPU.src = './public/assets/images/paper-right.png';
    break;
    case 3:
      imgCPU.src = './public/assets/images/scissor-right.png';
    break;
  }
  
  return random;
}

const Restart = () => {
  imgCPU.src = './public/assets/images/rock-right.png';
  imgUser.src = './public/assets/images/rock.png';
  imgUser.classList.remove('paused');
  imgCPU.classList.remove('paused');
  contentResult.classList.add('hide');
  contentPlay.classList.remove('hide');
}

imgRock.addEventListener('click', () => {
  imgUser.src = './public/assets/images/rock.png';
  Winner(1, ComputerSelection());
});

imgPaper.addEventListener('click', () => {
  imgUser.src = './public/assets/images/paper.png';
  Winner(2, ComputerSelection());
});

imgScissor.addEventListener('click', () => {
  imgUser.src = './public/assets/images/scissor.png';
  Winner(3, ComputerSelection());
});

btnRestart.addEventListener('click', () => {
  Restart();
});
