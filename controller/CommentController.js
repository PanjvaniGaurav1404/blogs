//import the model
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

exports.createComment = async(req,res)=>{
    try{
        const {post,user,body} = req.body;
        const comment = new Comment({
            post,user,body
        });
        const savedComment = await comment.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comments : savedComment._id}},{new:true})
                    .populate("comments")  //populate the comments array with comment document
                    .exec();
                    
        res.json({post:updatedPost})
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            error:"Error while Creating comment."
        })
    }
}