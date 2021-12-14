function addUser() {
    player_1_name = document.getElementById("player_1_name").value;
    player_2_name = document.getElementById("player_2_name").value;
    localStorage.setItem("player1name", player_1_name);
    localStorage.setItem("player2name", player_2_name);
    window.location = "quiz_game_page.html";

}