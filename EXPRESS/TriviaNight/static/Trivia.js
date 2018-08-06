





    

    $(".Wrapper").data("Clone",$(".Wrapper").html())


    socket.on('load_page',function(data){
        console.log("Made it back");
        
        $(".Wrapper").show()
    })

    $("#reset").click(function(){
        console.log("clicked");
        // $(".Wrapper").empty()  
        $(".Wrapper").html($(".Wrapper").data("Clone"))

        
    })

    var trivia = [
        {"Books":"https://opentdb.com/api.php?amount=50&category=10"},
        {"Music":"https://opentdb.com/api.php?amount=50&category=12"},
        {"Science":"https://opentdb.com/api.php?amount=50&category=17"},
        {"Math":"https://opentdb.com/api.php?amount=40&category=19"},
        {"Mythology":"https://opentdb.com/api.php?amount=40&category=20"},
        {"Sports":"https://opentdb.com/api.php?amount=50&category=21"},
        {"Geography":"https://opentdb.com/api.php?amount=50&category=22"},
        {"Comics":"https://opentdb.com/api.php?amount=40&category=29"},
        {"Cars":"https://opentdb.com/api.php?amount=50&category=28"},
        {"Celebrities":"https://opentdb.com/api.php?amount=40&category=26"},
        {"Animals":"https://opentdb.com/api.php?amount=50&category=27"}
    ]

    
        idx = []
        for(i = 0; i<5; i++){
            temp = Math.floor(Math.random()*trivia.length)
            idx.push(trivia[temp])
            var swap = trivia[temp]
            trivia[temp] = trivia[trivia.length-1]
            trivia[trivia.length-1] = swap
            trivia.pop()
        }

        $(".cat1 .title").append("<h4>"+Object.keys(idx[0])+"</h4>")
        $(".cat2 .title").append("<h4>"+Object.keys(idx[1])+"</h4>")
        $(".cat3 .title").append("<h4>"+Object.keys(idx[2])+"</h4>")
        $(".cat4 .title").append("<h4>"+Object.keys(idx[3])+"</h4>")
        $(".cat5 .title").append("<h4>"+Object.keys(idx[4])+"</h4>")

   

    $(".cat1 .questions .question").dblclick(function(){

        var self = this
        var randID = Math.floor(Math.random()*100)
        
        $(this).replaceWith("<div id='cat1-"+randID+"' class='question' style ='background-color: yellow'></div>")

        for(let key in idx[0]){
            var apiLink = idx[0][key]
        }

        $.get(apiLink, info)
        
        function info(data) {
            if($(self).hasClass("hard")){
                console.log("This is a hard question");
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40);
                    if(data.results[Q].difficulty == "hard"){
                        points = 300;
                        break;
                    }
                }
            }
            if($(self).hasClass("medium")){
                console.log("This is a medium question")
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40)
                    if(data.results[Q].difficulty == "medium"){
                        points = 200;
                        break;
                    }
                }
            }
            if($(self).hasClass("easy")){
                console.log("This is an easy question")
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40)
                    if(data.results[Q].difficulty == "easy"){
                        points = 100;
                        break;
                    }
                }
            }

            $("#cat1-"+randID).append("<p>"+data.results[Q].question+"</p>")

                var questions = []
                
                for(let x in data.results[Q].incorrect_answers){
                    var newListItem = $("<h6>"+data.results[Q].incorrect_answers[x]+"</h6>").on('click', function () {
                        $("#cat1-"+randID).replaceWith("<div id='danger' class='question'></div>", console.log(-points));
                    })
                    questions.push(newListItem)
                }
                var newListItem3 = $("<h6>"+data.results[Q].correct_answer+"</h6>").on('click', function () {
                    $("#cat1-"+randID).replaceWith("<div id='success' class='question'></div>", console.log(points));
                })
                questions.push(newListItem3)

                for( i=0; i < questions.length; i++){
                    rand = Math.floor(Math.random()*questions.length)
                    temp = questions[i]
                    questions[i] = questions[rand]
                    questions[rand] = temp
                }
                for( b=0; b < questions.length; b++){
                    console.log("There are questions here")
                    console.log(questions[b])
                    $("#cat1-"+randID).append(questions[b])
                }
            }
    })

    $(".cat2 .questions .question").dblclick(function(){

        var self = this
        var randID = Math.floor(Math.random()*100)
        
        $(this).replaceWith("<div id='cat2-"+randID+"' class='question' style ='background-color: yellow'></div>")

        for(let key in idx[1]){
            var apiLink = idx[1][key]
        }

        $.get(apiLink, info)
        
        function info(data) {
            if($(self).hasClass("hard")){
                console.log("This is a hard question");
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40);
                    if(data.results[Q].difficulty == "hard"){
                        points = 300;
                        break;
                    }
                }
            }
            if($(self).hasClass("medium")){
                console.log("This is a medium question")
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40)
                    if(data.results[Q].difficulty == "medium"){
                        points = 200;
                        break;
                    }
                }
            }
            if($(self).hasClass("easy")){
                console.log("This is an easy question")
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40)
                    if(data.results[Q].difficulty == "easy"){
                        points = 100;
                        break;
                    }
                }
            }

            $("#cat2-"+randID).append("<p>"+data.results[Q].question+"</p>")

                var questions = []
                
                for(let x in data.results[Q].incorrect_answers){
                    var newListItem = $("<h6>"+data.results[Q].incorrect_answers[x]+"</h6>").on('click', function () {
                        $("#cat2-"+randID).replaceWith("<div id='danger' class='question'></div>", console.log(-points));
                    })
                    questions.push(newListItem)
                }
                var newListItem3 = $("<h6>"+data.results[Q].correct_answer+"</h6>").on('click', function () {
                    $("#cat2-"+randID).replaceWith("<div id='success' class='question'></div>", console.log(points));
                })
                questions.push(newListItem3)

                for( i=0; i < questions.length; i++){
                    rand = Math.floor(Math.random()*questions.length)
                    temp = questions[i]
                    questions[i] = questions[rand]
                    questions[rand] = temp
                }
                for( b=0; b < questions.length; b++){
                    console.log("There are questions here")
                    console.log(questions[b])
                    $("#cat2-"+randID).append(questions[b])
                }
            }
    })

    $(".cat3 .questions .question").dblclick(function(){

        var self = this
        var randID = Math.floor(Math.random()*100)
        
        $(this).replaceWith("<div id='cat3-"+randID+"' class='question' style ='background-color: yellow'></div>")

        for(let key in idx[2]){
            var apiLink = idx[2][key]
        }

        $.get(apiLink, info)
        
        function info(data) {
            if($(self).hasClass("hard")){
                console.log("This is a hard question");
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40);
                    if(data.results[Q].difficulty == "hard"){
                        points = 300;
                        break;
                    }
                }
            }
            if($(self).hasClass("medium")){
                console.log("This is a medium question")
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40)
                    if(data.results[Q].difficulty == "medium"){
                        points = 200;
                        break;
                    }
                }
            }
            if($(self).hasClass("easy")){
                console.log("This is an easy question")
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40)
                    if(data.results[Q].difficulty == "easy"){
                        points = 100;
                        break;
                    }
                }
            }

            $("#cat3-"+randID).append("<p>"+data.results[Q].question+"</p>")

                var questions = []
                
                for(let x in data.results[Q].incorrect_answers){
                    var newListItem = $("<h6>"+data.results[Q].incorrect_answers[x]+"</h6>").on('click', function () {
                        $("#cat3-"+randID).replaceWith("<div id='danger' class='question'></div>", console.log(-points));
                    })
                    questions.push(newListItem)
                }
                var newListItem3 = $("<h6>"+data.results[Q].correct_answer+"</h6>").on('click', function () {
                    $("#cat3-"+randID).replaceWith("<div id='success' class='question'></div>", console.log(points));
                })
                questions.push(newListItem3)

                for( i=0; i < questions.length; i++){
                    rand = Math.floor(Math.random()*questions.length)
                    temp = questions[i]
                    questions[i] = questions[rand]
                    questions[rand] = temp
                }
                for( b=0; b < questions.length; b++){
                    console.log("There are questions here")
                    console.log(questions[b])
                    $("#cat3-"+randID).append(questions[b])
                }
            }
    })

    $(".cat4 .questions .question").dblclick(function(){

        var self = this
        var randID = Math.floor(Math.random()*100)
        
        $(this).replaceWith("<div id='cat4-"+randID+"' class='question' style ='background-color: yellow'></div>")

        for(let key in idx[3]){
            var apiLink = idx[3][key]
        }

        $.get(apiLink, info)
        
        function info(data) {
            if($(self).hasClass("hard")){
                console.log("This is a hard question");
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40);
                    if(data.results[Q].difficulty == "hard"){
                        points = 300;
                        break;
                    }
                }
            }
            if($(self).hasClass("medium")){
                console.log("This is a medium question")
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40)
                    if(data.results[Q].difficulty == "medium"){
                        points = 200;
                        break;
                    }
                }
            }
            if($(self).hasClass("easy")){
                console.log("This is an easy question")
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40)
                    if(data.results[Q].difficulty == "easy"){
                        points = 100;
                        break;
                    }
                }
            }

            $("#cat4-"+randID).append("<p>"+data.results[Q].question+"</p>")

                var questions = []
                
                for(let x in data.results[Q].incorrect_answers){
                    var newListItem = $("<h6>"+data.results[Q].incorrect_answers[x]+"</h6>").on('click', function () {
                        $("#cat4-"+randID).replaceWith("<div id='danger' class='question'></div>", console.log(-points));
                    })
                    questions.push(newListItem)
                }
                var newListItem3 = $("<h6>"+data.results[Q].correct_answer+"</h6>").on('click', function () {
                    $("#cat4-"+randID).replaceWith("<div id='success' class='question'></div>", console.log(points));
                })
                questions.push(newListItem3)

                for( i=0; i < questions.length; i++){
                    rand = Math.floor(Math.random()*questions.length)
                    temp = questions[i]
                    questions[i] = questions[rand]
                    questions[rand] = temp
                }
                for( b=0; b < questions.length; b++){
                    console.log("There are questions here")
                    console.log(questions[b])
                    $("#cat4-"+randID).append(questions[b])
                }
            }
    })

    $(".cat5 .questions .question").dblclick(function(){

        var self = this
        var randID = Math.floor(Math.random()*100)
        
        $(this).replaceWith("<div id='cat5-"+randID+"' class='question' style ='background-color: yellow'></div>")

        for(let key in idx[4]){
            var apiLink = idx[4][key]
        }

        $.get(apiLink, info)
        
        function info(data) {
            if($(self).hasClass("hard")){
                console.log("This is a hard question");
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40);
                    if(data.results[Q].difficulty == "hard"){
                        points = 300;
                        break;
                    }
                }
            }
            if($(self).hasClass("medium")){
                console.log("This is a medium question")
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40)
                    if(data.results[Q].difficulty == "medium"){
                        points = 200;
                        break;
                    }
                }
            }
            if($(self).hasClass("easy")){
                console.log("This is an easy question")
                for(i = 0; i<data.results.length; i++){
                    Q = Math.floor(Math.random()*40)
                    if(data.results[Q].difficulty == "easy"){
                        points = 100;
                        break;
                    }
                }
            }

            $("#cat5-"+randID).append("<p>"+data.results[Q].question+"</p>")

                var questions = []
                
                for(let x in data.results[Q].incorrect_answers){
                    var newListItem = $("<h6>"+data.results[Q].incorrect_answers[x]+"</h6>").on('click', function () {
                        $("#cat5-"+randID).replaceWith("<div id='danger' class='question'></div>", console.log(-points));
                    })
                    questions.push(newListItem)
                }
                var newListItem3 = $("<h6>"+data.results[Q].correct_answer+"</h6>").on('click', function () {
                    $("#cat5-"+randID).replaceWith("<div id='success' class='question'></div>", console.log(points));
                })
                questions.push(newListItem3)

                for( i=0; i < questions.length; i++){
                    rand = Math.floor(Math.random()*questions.length)
                    temp = questions[i]
                    questions[i] = questions[rand]
                    questions[rand] = temp
                }
                for( b=0; b < questions.length; b++){
                    console.log("There are questions here")
                    console.log(questions[b])
                    $("#cat5-"+randID).append(questions[b])
                }
            }
    })
