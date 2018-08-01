

$("#target").click(function(){
    $.get("https://api.github.com/users/crestwood", displayName)
        function displayName(data) {
            $("#addinfo").append("<p>"+data.login+"</p>")
        console.log(data);
        }
})
