const express = require('express');
const registration = express.Router();

require('../../database/connection');

const User = require('../../model/userschema');

registration.post('/signup', async (req, res) => {
    const { user_name, user_email, user_dob, user_pass, user_gender, user_phone, trello_db, tokens } = req.body;

    if (!user_name || !user_email || !user_dob || !user_pass || !user_gender || !user_phone || !trello_db || !tokens) {
        return res.json({ empty : "plz fill all the field properly" });
    }
    else{
        try {
        
            const response = await User.findOne( { user_email: user_email } );

            if(response){
                return res.json({ info : "This user already exisist " });
            }

            const user = new User({ 
                user_name: user_name, 
                user_email: user_email, 
                user_dob: user_dob, 
                user_pass: user_pass, 
                user_gender: user_gender, 
                user_phone: user_phone, 
                trello_db: trello_db, 
                tokens: tokens 
            });
        
            await user.save();

            res.json({ success : "Register successfully" });

        } catch (err) {
            console.log(err); 
        }
    }


});

module.exports = registration;