const express = require('express');

const profile = express.Router();

require('../../database/connection');

const User = require('../../model/userschema');

profile.post('/userprofile', async (req, res) => {

    const { user_id, user_token } = req.body;

    if (!user_id || !user_token) {
        return res.json({ empty : "Please give all the data" });
    }else {
        try{
            const response = await User.findOne({_id : user_id, tokens: user_token});

            if (response) {
                res.json({ data : response });
            }else {
                res.json({ error : 'user not found' })
            }
        }catch (err) {
            console.log(err);
        }
    }
});

module.exports = profile;