


$(document).ready(function(){

    $("#1").dblclick(function(){
        $.get("https://opentdb.com/api.php?amount=1&category=22&difficulty=easy&type=multiple", displayQustions) 
            function displayQustions(data) {
        
                $("#1").append("<p>"+data.results[0].question+"</p>")

                var correct = $("<li 'id=correct1'>"+data.results[0].correct_answer+"</li>")

                $("#1").append(correct).on("click",function(){
                    $(correct).css("background-color","green");
                });                              

                var incorrect = undefined

                for(let i =0;i<data.results[0].incorrect_answers.length;i++)
                {
                    console.log(data.results[0].incorrect_answers[i]);

                    incorrect = $("<li 'id=wrong1'>"+data.results[0].incorrect_answers[i]+"</li>")
                    $("#1").append(incorrect).on("click",function(){
                        $(incorrect).css("background-color","red");
                    });                              
                }                  
            }
            
    });

 
})






