import dotenv from 'dotenv';
import path from 'path';

const env = process.env.ENV || 'rsa';

// load correct file
dotenv.config({
    path: path.resolve(process.cwd(), `src/resources/env/${env}.env`)
});

export const envLoader = {
    URL: process.env.URL!,
    EMAIL: process.env.EMAIL!,
    PASSWORD: process.env.PASSWORD!,
    REGISTRATIONSUCCESSMESSAGE: process.env.REGISTRATIONSUCCESSMESSAGE!,
    FIRSTNAME_ERROR_MESSAGE: process.env.FIRSTNAME_ERROR_MESSAGE!,
    EMAIL_ERROR_MESSAGE: process.env.EMAIL_ERROR_MESSAGE!,
    PHONE_NUMBER_ERROR_MESSAGE: process.env.PHONE_NUMBER_ERROR_MESSAGE!,
    PASSWORD_ERROR_MESSAGE: process.env.PASSWORD_ERROR_MESSAGE!,
    CONFIRM_PASSWORD_ERPASSWORD_ERROR_MESSAGEROR_MESSAGE: process.env.CONFIRM_PASSWORD_ERPASSWORD_ERROR_MESSAGEROR_MESSAGE!
};