const mongoose = require("mongoose");
const Message = mongoose.model("Message");
const Comment = mongoose.model("Comment");

module.exports = {
    index: (req, res) => {
        Message.find({}).populate("_comments").exec(function(err,messagesFromDB){
            if(err) {
                console.log(error);
                
            } else {
                console.log(messagesFromDB);
               
                res.render("index", {messages: messagesFromDB});
            }
        })
      
    }, 
    postMessage: (req, res) => {
        const message = new Message();
        message.name = req.body.name
        message.message = req.body.message

        message.save({}, (err, messageFromDB)=>{
            if(err) {
                console.log(err);

                
                res.redirect("/");
                
            } else {
                console.log("Message Saved!!");
               
                res.redirect("/");
            }
        }) 
    },

    postComment: (req, res) => {
        Message.findOne({_id:req.params.id}, (err, messageFromDB)=>{
            if(err){
                console.log(err);
                res.redirect("/");
                
            }
            else{
                const comment = new Comment();
                comment.name = req.body.name
                comment.comment = req.body.comment
                comment.save({},(err,commentFromDb)=>{
                    if(err){
                        console.log("Comment failed to save");
                        
                    }
                    else{
                        
                        messageFromDB._comments.push(comment)
                        messageFromDB.save()

                        console.log("Comment saved");
                        res.redirect("/");
                    }
                })
                
            }

        })
    }
}













