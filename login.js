var P1 = document.getElementById("P1Input");
var P2 = document.getElementById("P2Input");

function Navigate() {
    window.location = "game.html";
    
    localStorage.setItem("Player1" , P1);
    localStorage.setItem("Player2" , P2);
    alert("Hello! Don't worry, no alert!")
}