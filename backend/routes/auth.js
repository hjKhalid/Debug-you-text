const express = require('express');
const Comment = require('../models/Comment');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var fetchuser = require('../middleware/fetchuser');
router.post('/comment',[body('comment', 'Enter a valid comment').isLength({ min: 3 })],

async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }try{

        let comment = await Comment.findOne({ comment: req.body.comment });
        if (comment) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
          }
    
   
    comment=await Comment.create({
        comment:req.body.comment
    })
}catch(error){
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})