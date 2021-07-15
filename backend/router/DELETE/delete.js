const express = require('express');
const deletetrello = express.Router();

require('../../database/connection');

const User = require('../../model/userschema');




deletetrello.delete( '/delete', async (req, res) => {

    const { user_email } = req.body;

    if (!user_email) {
        return res.json({ error : "plz fill all the field properly" });
    }
    else {
        try{

            const userValid = await User.findOne({user_email : user_email});
            
            if (userValid) {
                await User.deleteOne({user_email : user_email});
                res.json({ success : "delete successfully" });
            }
            else {
                res.json({ error : "user not found" });
            }

        }catch(err){
            console.log(err);
        }
    }
});


module.exports = deletetrello;