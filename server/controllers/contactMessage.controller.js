const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing


exports.sendMessage = function (req, res, next) {
    const email = req.body.email;
    const fullName = req.body.fullName;
    const phoneNumber = req.body.phoneNumber;
    const subject = req.body.subject;
    const message = req.body.message;

    console.log("CONTACT MESSAGE CONTROLLER SENT");
    console.log(email);
    console.log(fullName);
    console.log(phoneNumber);
    console.log(subject);
    console.log(message);



    const AuthCode = '4/pypCAwBhpxsZIrfKn-VK7lvxOTk-2oA6V5sNX_pxGdw';
    
    const refreshToken = '1/44LrNUiYNCh0lxt2HyNoyuwYpR6eYdUsaE8I9aGAfC0';
    const accessToken =  'ya29.GlsFBWZTbpFUEvUXkBx88iUVsUyd4vkPjJTE7lOR5w-zaFruahELWNVtXUdKE6FOQZ5fYcHKjouzDghODnXQ6SWVpVxGR56LXRBKhCyk13kIxq1V7QccdGSmDzEg';
    
    const clientId= '"793585711542-et99kvou7ufok1or8qv9c9lo4lecqqkr.apps.googleusercontent.com","project_id":"nodemailer-and-react-186121","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://accounts.google.com/o/oauth2/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs';
    const clientSecret = 'Dfx327dJ4sQBRXAkzoZd-guq';

    const account = {
        user: 'ccplaneguys@gmail.com',
        pass: '!*Password1!*'
    };

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            type: 'OAuth2',
            user: account,
            clientId: clientId,
            clientSecret: clientSecret,
            refreshToken,
            accessToken
        }
    })


    const sendMail = (message) => {
        return new Promise((resolve, reject) => {
            transporter.sendMail(message, (error, info) =>{
                if(error){
                    reject(error)
                    return
                }
                resolve(info)
            });
        })
    
    };

    const message1 = {
        from: `${fullName} ${phoneNumber} <${email}>`,
        text: message
    }
    sendMail(message1);

    
    
  };
  

  /*


  nodemailer.createTestAccount((err, account) => {
        
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                    user: account.user, // generated ethereal user
                    pass: account.pass  // generated ethereal password
                }
            });
        
            // setup email data with unicode symbols
            let mailOptions = {
                from:  email, // sender address
                to: 'dj0759@gmail.com, djackson0759@gmail.com', // list of receivers
                subject: subject, // Subject line
                text: message, // plain text body
                html: '<b>This is a test message from Foster The Future</b>' // html body
            };
        
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });

        */