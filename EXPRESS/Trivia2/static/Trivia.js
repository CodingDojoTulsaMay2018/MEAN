var socket = io();
// $(".newQuestion").dblclick(function(){
//     socket.emit('get_new_question')

// })


socket.on('trivia_info',function (data){ 
    // console.log(data.results[0]);
    console.log(data.results[0].category);
    console.log(data.results[0].question);
    console.log(data.results[0].correct_answer);
    console.log(data.results[0].incorrect_answers[0]);
    console.log(data.results[0].incorrect_answers[1]);
    console.log(data.results[0].incorrect_answers[2]);
    $('.question').append('<span" id="q">'+ data.results[0].question+'</span><br>')

    var answer = '<li>New List Item</li>'
    $('ul').append(answer);


    
    // $('.question').append('<span id="1">'+data.results[0].correct_answer+'</span><br>').on('click', ".question span",function(){
    //     console.log('answer was clicked');
        
    // })
    
    


    // $('.question').append('<span id="2">'+data.results[0].incorrect_answers[0]+'</span><br>').on('click', ".question span",function(){
    //     console.log('answer was clicked');
        
    // })
    // $('.question').append('<span id="3">'+data.results[0].incorrect_answers[1]+'</span><br>').on('click', ".question span",function(){
    //     console.log('answer was clicked');
        
    // })
    // $('.question').append('<span id="4">'+data.results[0].incorrect_answers[2]+'</span><br>').on('click', ".question span",function(){
    //     console.log('answer was clicked');
        
    // })

    
    
    var counter = 10
    $('#counter').text(counter)
    
    let timer = function(){
        counter--

        if(counter > -1){
            $('#counter').text(counter)
        }
        
    }
    setInterval(timer,1000)

    
    
    
                             
})