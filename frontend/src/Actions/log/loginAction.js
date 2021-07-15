import { LOGIN_DATA , LOGIN_PASS} from '../../Constants/log/loginConstant';

export const LoginStore = (user_name, user_email, user_dob, user_phone, user_gender) => {
    return {
        type: LOGIN_DATA,
        user_name: user_name,
        user_email: user_email,
        user_dob: user_dob,
        user_phone: user_phone,
        user_gender: user_gender
    }
}

export const loginPassword = (user_pass) => {
    return {
        type: LOGIN_PASS,
        user_pass: user_pass
    }
}