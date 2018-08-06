
        $("#errorMessage").hide()
        var socket = io(); //1
        

        $('#submitUsername').submit(function(event){
            event.preventDefault();
            var username = $('#username').val()  
            $('#message').val('')
            socket.emit('new_user',{username:username})
            
        })

        socket.on('show_error',function (data){ 
            console.log(data.errormessage);
            
        $(".errorMessage span").text(data.errormessage)              
        })

        socket.on('register_success',function(){
            console.log("success");
            
            $(".bodyArea").load("trivia.ejs");
        })
  
