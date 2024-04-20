const Like = require("../models/likeModel");
const Post = require("../models/postModel");

exports.likePost = async(req,res)=>{
    try{
        const {post,user} = req.body;
        const likes = new Like({
            post,user
        });
        const savedLike = await likes.save();

        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes : savedLike._id}},{new:true})
                    .populate("likes").populate("comments")  //populate the comments array with comment document
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

exports.unlikePost = async(req,res)=>{
    try{
        const {post,like} = req.body;
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like});
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});
        res.json({
            post:updatedPost 
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            error:"Error while Creating comment."
        })
    }
}
