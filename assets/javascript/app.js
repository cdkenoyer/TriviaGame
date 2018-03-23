$("#start").on("click", function () {
    console.log("you clicked me")
    game.start();

})

$(document).on("click","#end",function(){
    game.done();
})

var questions = [{

    question: "What do you type into Bash/Terminal to get to the Home directory",
    answers: ["cd", "pwd", "ls", "cd ..", "cd ~"],
    correctAnswer: "cd ~"
}, {
    question: "What keyword do you type into Bash/Terminal to download a newly created repository on gitHub?",
    answers: ["cd", "pwd", "pull", "cd ..", "cd ~"],
    correctAnswer: "pull"
}, {
    question: "What keyword do you type into Bash/Terminal to download a newly created repository on gitHub?",
    answers: ["cd", "pwd", "pull", "cd ..", "cd ~"],
    correctAnswer: "pull"


}];


var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function () {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").prepend('<h2>Time remaining: <span id="counter">120</span> seconds</h2>');
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {

            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {

                $("#subwrapper").append("<input type='radio' name='question-" + i + "' value=' " + questions[i].answers[j] + "'>" + questions[i].answers[j]);

            }
        }
        $("#subwrapper").append('<br><button id="end">Done</button>');


    },
    done: function () {
        $.each($('input[name"question-0]":checked'), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name"question-1]":checked'), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name"question-2]":checked'), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function(){
        clearInterval(timer);
        $("#subwrapper h2").remove(); 
        //don't think subwrapper should be removed 

        $("#subwrapper").html("<h2>All Done!</h2>");
        $("#subwrapper").append("<h3>Correct Answers: " + this.correct +"</h3>");
        $("#subwrapper").append("<h3>Incorrect Answers: " + this.incorrect +"</h3>");
        $("#subwrapper").append("<h3>Unanswered: " + (questions.length-(this.incorrect+this.correct))+"</h3>");


    }

    }
//} // got this with adding closing bracket with "this.result();"
