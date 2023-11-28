function addUser(){

    p1_name = document.getElementById("p1_name").value;
    p2_name = document.getElementById("p2_name").value;

    localStorage.setItem("p1_name", p1_name);
    localStorage.setItem("p2_name", p2_name);

    window.location = "game_page.html";

}

function send(){

    number1 = document.getElementById("Numero1").value;
    number2 = document.getElementById("Numero2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Responsta : <input  type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Verificar</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

    question_turn = "player1";
    answer_turn = "player2";

}

function check(){

    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){

        if(answer_turn == "player1"){

            p1_score = p1_Score + 1;

            document.getElementById("p1_Score").innerHTML = p1_name + " :" + p1_score;
        }
        else{

            p2_score = p2_Score + 1;

            document.getElementById("p2_Score").innerHTML = p2_name + " :" + p2_score;

        }

        if(question_turn == "player1"){

            question_turn = "player2"
            document.getElementById("QuestionTurn").innerHTML = "Turno de Pergunta - " + p2_name;
        }
        else{

            question_turn = "player1"
            document.getElementById("QuestionTurn").innerHTML = "Turno de Pergunta - " + p1_name;

        }

        if(answer_turn == "player1"){

            answer_turn = "player2"
            document.getElementById("AnswerTurn").innerHTML = "Turno de Resposta - " + p2_name;
        }
        else{

            answer_turn = "player1"
            document.getElementById("AnswerTurn").innerHTML = "Turno de Resposta - " + p1_name;

        }

    }

}

