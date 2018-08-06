    
    
    var socket = io();
    var name = prompt('Please Enter Your Name:') 

    if(name != "undefined" && name != "null"){
        console.log("name"+ name);
        console.log(typeof name);
        
        
        // socket.emit('new_user',{name:name})
    }
    else{
        var name = prompt('Please Enter Your Name:') 
    }
