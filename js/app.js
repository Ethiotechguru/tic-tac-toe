
//declare variables

var btn = document.getElementById('startbutton');
var resetButton = document.getElementById("resetbutton");
resetButton.classList.add("hidden");
function playGame() {
    var show = document.getElementById('show');
    show.classList.remove('hidden');
   
    var winCases = [
        ["1", "2", "3"], ["1", "4", "7"],
        ["1", "5", "9"], ["2", "5", "8"],
        ["3", "6", "9"], ["3", "5", "7"],
        ["4", "5", "6"], ["7", "8", "9"]
    ];
    var message = document.getElementById('winertell');
    var player1 = [];
    var player2 = [];
    var player = 1;
    var win = 0;
    var player1Score = 0;
    var player2Score = 0;
    //HTML DOM 
    btn.textContent='Good Luck';
    var board = document.getElementById("board");
    var box = document.getElementsByClassName("box");
    
    for (var i = 0; i < box.length; i++) {
        //Function 
        box[i].addEventListener('click', function display(e) {
               this.style.color= 'black';
               this.style.textShadow = '10px 10px rgb(102, 91, 91)';
            if (player === 1) {
            
                player1.push(e.target.textContent);
                checkWin();
            }
            else if (player === 0) {
                player2.push(e.target.textContent);
                checkWin();
            }

            if (player === 1) {
                e.target.textContent = "X";
                // e.target.style.color ='black';
                player = 0;
            }
            else {
                e.target.textContent = "O";
                // e.target.style.color ='black';
                player = 1;
            }

            e.target.removeEventListener('click', display);
        });
    }
  
    function checkWin() {
       
        for (let i = 0; i < winCases.length; i++) {
            win = 0;
            if (player === 1) {
                for (let j = 0; j < player1.length; j++) {

                    var check1 = winCases[i].includes(player1[j]);
                    if (check1 === true) {
                        win++
                        if (win === 3) {
                            player1Score++;
                            show.classList.add('hidden');
                            message.textContent = 'Player 1, You Are A Winner';
                            btn.classList.add('hidden');
                            resetButton.classList.remove("hidden");
                            // message.style.color = 'black';
                            console.log("player 1 win");


                        }
                    }
                    
                }
            }

            else{
                for (let j = 0; j < player2.length; j++) {

                    var check1 = winCases[i].includes(player2[j]);
                    if (check1 === true) {
                        win++
                        if (win === 3) {
                            player2Score++;
                            message.textContent = 'Player 2,You Are A Winner';
                            btn.classList.add('hidden');
                            // message.style.color = 'black';
                            show.classList.add('hidden');
                            console.log("player 2 win")
                            resetButton.classList.remove("hidden");
                        }
                       
                    } 

                }

            }
            if((win!==3)&&(player1.length+player2.length === 9)){
                message.textContent = 'It Is A Draw!';
                btn.classList.add('hidden');
                // message.style.color = 'black';
                show.classList.add('hidden');
                resetButton.classList.remove("hidden");
            }

        } 
        
    }
  
   
}
function reset() {
    player1 = [];
    player2 = [];
    win = 0;
    playGame();
}