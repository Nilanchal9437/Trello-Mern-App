const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    user_email: {
        type: String,
        required: true
    },
    user_pass: {
        type: String,
        required: true
    },
    user_dob: {
        type: String,
        required: true
    },
    user_gender: {
        type: String,
        required: true
    },
    user_phone: {
        type: String,
        required: true
    },
    trello_db: {
        type: Array,
        required: true
    },
    tokens: {
        type : String,
        required : true
    }
});

userSchema.methods.genrateAuthToken = async function(){
    try {
        let token = jwt.sign( { _id : this._id }, process.env.SECREATE_KEY );
        this.tokens = token;
        await this.save();
        return token;
    }catch (err){
        console.log(err);
    }
}

const User = mongoose.model('trellolists', userSchema);

module.exports = User;