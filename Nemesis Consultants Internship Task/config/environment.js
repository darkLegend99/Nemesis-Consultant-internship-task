const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');

const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
    interval: '1d',
    path: logDirectory
});

const development = {
    name: 'development',
    asset_path: './assets',
    session_cookie_key: 'something',
    db:'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            // user: process.env.MAIL,
            // pass: process.env.PASS
            user: "fourcorners726@gmail.com",
            pass: "fourcorners7261*6"
        }
    },
    
    google_client_id: "194691961459-18dll5prfpos2gta8mhsrn9edfu4f1gc.apps.googleusercontent.com",
    google_client_secret: "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",
    google_callback_url: "http://localhost:8000/users/auth/google/callback",

    jwt_secret: 'codeial',
    morgan: {
        mode: 'dev',
        options: {stream: accessLogStream}
    }
}

// const production = {
//     name: 'production',
//     asset_path: process.env.CODEIAL_ASSET_PATH,
//     session_cookie_key: process.env.CODEIAL_SESSION_COOKIE_KEY,
//     db:process.env.CODEIAL_DB,
//     smtp: {
//         service: 'gmail',
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false,
//         auth: {
//             // user: process.env.MAIL,
//             // pass: process.env.PASS
//             user: process.env.CODEIAL_AUTH_USER,
//             pass: process.env.CODEIAL_AUTH_PASS
//         }
//     },
    
//     google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
//     google_client_secret: process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
//     google_callback_url: process.env.CODEIAL_GOOGLE_CALLBACK_URL,

//     jwt_secret: process.env.CODEIAL_JWT_SECRET,
//     morgan: {
//         mode: 'combine',
//         options: {stream: accessLogStream}
//     }
// }

// module.exports = eval(process.env.CODEIAL_ENVIRONMENT) == undefined ? development: eval(process.env.CODEIAL_ENVIRONMENT);
module.exports = development;