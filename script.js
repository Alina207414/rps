function main() {
    let winner = "";
    let playerTurn = prompt("(r)ock, (p)aper, or (s)cisors?");
    let computer = Math.floor(Math.random()*3);
    let moves = ["r", "p", "s"];
    let computerTurn =moves[computer];
    if (playerTurn == "r" && computerTurn == "p") winner = "c";
    alert ("you picked " + playerTurn + " i picked " + computerTurn + " and " + winner + " won");
}
main();