$("#start").on("click",function(){
    console.log("you clicked me")
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
        
        $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
            
            $("#subwrapper").append("<input type='radio' name='question-"+i+"' value=' "+questions[i].answers[j]+"'>"+questions[i].answers[j]);

        }
    }

}) 

var questions = [{

    question: "What do you type into Bash/Terminal to get to the Home directory",
    answers: ["cd", "pwd", "ls", "cd ..", "cd ~"],
    correctAnswer: "cd ~"
}, {

    question: "What keyword do you type into Bash/Terminal to download a newly created repository on gitHub?",
    answers: ["cd", "pwd", "pull", "cd ..", "cd ~"],
    correctAnswer: "pull"
}];


var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        
    }
}
