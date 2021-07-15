const express = require('express');
const Local = express.Router();

require('../../database/connection');

const User = require('../../model/userschema');

Local.post( '/LocalAccess', async (req, res) => {
    
    const { user_token } = req.body;

    if( !user_token ){
        return res.json({ empty : "plz fill all the field properly" });
    }
    else{
        try {
        
            const response = await User.findOne( { tokens: user_token } );

            if(response){
                res.json({ data : response, success: 'Verified token' });
            }
            else{
                res.json({ error : "Invalid token" });
            }

        } catch (err) {
            console.log(err); 
        }
    }
});


module.exports = Local;