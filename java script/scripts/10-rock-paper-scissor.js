const score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    updateScoreElement();

    function playGame(playMove) {
      const computerMove = pickComputerMove();
      let result = '';

      if (playMove === 'scissors') {
        if (computerMove === 'rock') result = 'lose';
        else if (computerMove === 'paper') result = 'win';
        else result = 'tie';
      } else if (playMove === 'paper') {
        if (computerMove === 'rock') result = 'win';
        else if (computerMove === 'paper') result = 'tie';
        else result = 'lose';
      } else if (playMove === 'rock') {
        if (computerMove === 'rock') result = 'tie';
        else if (computerMove === 'paper') result = 'lose';
        else result = 'win';
      }

      if (result === 'win') score.wins++;
      else if (result === 'lose') score.losses++;
      else score.ties++;

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-result').innerText = result;
    document.querySelector('.js-moves').innerHTML =
  `You <img src="images/${playMove}-emoji.png" class="move-icon">
   <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;

    }

    function updateScoreElement() {
      document.querySelector('.js-score').innerText =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function pickComputerMove() {
      const randomNumber = Math.random();
      if (randomNumber < 1/3) return 'rock';
      else if (randomNumber < 2/3) return 'paper';
      else return 'scissors';
    }