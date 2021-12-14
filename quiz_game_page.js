player_question = "player1";
player_answer = "player2";
player_1_name = localStorage.getItem("player1name");
player_2_name = localStorage.getItem("player2name");
player_1_score = 0;
player_2_score = 0;

document.getElementById("player_1_name").innerHTML = player_1_name;
document.getElementById("player_2_name").innerHTML = player_2_name;
document.getElementById("player_1_score").innerHTML = player_1_score;
document.getElementById("player_2_score").innerHTML = player_2_score;
document.getElementById("player_answer").innerHTML = "Answer turn =   "+player_2_name;
document.getElementById("player_question").innerHTML = "Question turn =   "+player_1_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer) 
    {
        if(player_answer == "player1")
        {
            player_1_score = player_1_score +1;
            document.getElementById("player_1_score").innerHTML = player_1_score;

        }
        else
        {
            player_2_score = player_2_score +1;
            document.getElementById("player_2_score").innerHTML = player_2_score;
        }
    }

    if(player_question == "player1") 
    {
        player_question = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_2_name;
    }
    else
    {
        player_question = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + player_1_name;
    }

    if(player_answer == "player1") 
    {
        player_answer = "player2"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;
    }
    else
    {
        player_answer = "player1"
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1_name;
    }
    document.getElementById("output").innerHTML = "";
}