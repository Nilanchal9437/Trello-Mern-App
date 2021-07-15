const express = require('express');
const trelloupdate = express.Router();

require('../../database/connection');

const User = require('../../model/userschema');


trelloupdate.put( '/trelloupdate', async (req, res) => {

    const { user_email, trello_db, user_id, user_token } = req.body;

    if (!user_email || !trello_db || !user_id || !user_token ) {
        return res.json({ empty : "Some Data is missing" });
    }
    else {
        try{

            const userValid = await User.findOne({user_email : user_email, _id : user_id, tokens : user_token });
            
            if (userValid) {
                await User.updateOne({user_email : user_email, _id : user_id, tokens : user_token } , {$set : { trello_db : trello_db }});
                res.json({ success : "Update successfully" });
            }
            else {
                res.json({ error : "trello data was not found" });
            }

        }catch(err){
            console.log(err);
        }
    }
});


module.exports = trelloupdate;