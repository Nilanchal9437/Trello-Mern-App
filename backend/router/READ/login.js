const express = require('express');
const login = express.Router();
const jwt = require('jsonwebtoken');

require('../../database/connection');

const User = require('../../model/userschema');

login.post( '/signin', async (req, res) => {
    
    const {user_email, user_pass } = req.body;

    if( !user_email || !user_pass){
        return res.json({ empty : "plz fill all the field properly" });
    }
    else{
        try {
        
            const response = await User.findOne( { user_email: user_email, user_pass: user_pass } );

            if(response){
                const token = await response.genrateAuthToken();                
                res.json({ token : token, data : response, success: 'Successfully Login' });
            }
            else{
                res.json({ error : "Invalid email or Password" });
            }

        } catch (err) {
            console.log(err); 
        }
    }
});


module.exports = login;