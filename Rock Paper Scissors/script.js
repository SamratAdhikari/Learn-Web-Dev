const game = ()=>{

    let pScore = 0;
    let cScore = 0;

    // Colors
    RED = '#fa8072';
    GREEN = 'mediumseagreen';
    YELLOW = '#FFFF99';
    
    // Start the Game
    const startGame = ()=>{
        const playBtn = document.querySelector('.intro button');
        const intoScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            intoScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    // Play Match
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        const initialHands = ()=>{
            const initialWinner = document.querySelector('.winner');

            initialWinner.textContent = '...';
            initialWinner.style.color = 'rgb(224, 224, 224)';
            playerHand.src = `assets/rock.png`;
            computerHand.src = `assets/rock.png`;

        }

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        })

        // Computer Options
        const computerOptions = ['Rock', 'Paper', 'Scissors'];

        options.forEach(option =>{
            option.addEventListener('click', function(){

                // Start with rock
                initialHands()
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(()=>{
                // Call Check function
                compareHand(this.textContent, computerChoice);

                // Update Images
                playerHand.src = `assets/${this.textContent}.png`;
                computerHand.src = `assets/${computerChoice}.png`;
                }, 2000)

                // Animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            })
        });
    };

    // Check
    const compareHand = (playerChoice, computerChoice) => {

        // Update Text
        const winner = document.querySelector('.winner');

        // Tie
        if (playerChoice === computerChoice){
            winner.textContent = `It's a Draw`;
            winner.style.color = YELLOW;
            return;
        }
        
        // Rock
        if (playerChoice === 'Rock'){
            if (computerChoice == 'Scissors'){
                winner.textContent = 'Player Wins';
                winner.style.color = GREEN;
                
                pScore += 1;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                winner.style.color = RED;
                cScore += 1;
                updateScore();
                return;
            }
        };
        
        // Paper
        if (playerChoice === 'Paper'){
            if (computerChoice == 'Rock'){
                winner.textContent = 'Player Wins';
                winner.style.color = GREEN;
                pScore += 1;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                winner.style.color = RED;
                cScore += 1;
                updateScore();
                return;
            }
            
        };
        
        // Scissors
        if (playerChoice === 'Scissors'){
            if (computerChoice == 'Paper'){
                winner.textContent = 'Player Wins';
                winner.style.color = GREEN;
                pScore += 1;
                updateScore();
                return;
            }
            else{
                winner.textContent = 'Computer Wins';
                winner.style.color = RED;
                cScore += 1;
                updateScore();
                return;
            }
        };
    }
    
    // Update Score
    const updateScore = ()=>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


    // Call inner functions
    startGame();
    playMatch();
}

// Start the Game Function
game();

