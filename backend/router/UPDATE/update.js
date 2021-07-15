const express = require('express');
const update = express.Router();

require('../../database/connection');

const User = require('../../model/userschema');




update.put( '/update', async (req, res) => {

    const {user_id, user_token, user_name, user_email, user_dob, user_gender, user_phone } = req.body;

    if (!user_id || !user_token || !user_name || !user_email || !user_dob || !user_gender || !user_phone) {
        return res.json({ empty : "plz fill all the field properly" });
    }
    else {
        try{

            const response = await User.findOne({_id : user_id, tokens : user_token});
            
            if (response) {
                await User.updateOne({_id : user_id, tokens : user_token} , {$set : {
                    user_email : user_email, 
                    user_name: user_name, 
                    user_dob: user_dob, 
                    user_gender: user_gender, 
                    user_phone: user_phone 
                }});
                res.json({ success : "Update successfully" });
            }
            else {
                res.json({ error : "User not found" });
            }
            
        }catch(err){
            console.log(err);
        }
    }
});


module.exports = update;