const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const cors = require('cors')({ origin: true});

const SENDGRID_API_KEY = functions.config().sendgrid.key;

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.httpEmail = functions.https.onRequest((req, res) => {

  cors( req, res, () => {
    const toName = req.body.toName;
    const toEmail = req.body.toEmail;
    const leadEmailAddress = req.body.leadEmailAddress;
    const leadPracticeName = req.body.leadPracticeName;

    const msg = {
      to: toEmail,
      from: 'thanks@kohancreative.com',
      subject: 'New Lead Signup on Kohan Creative',
      html: `<p>Someone wants to work with Kohan Creative! Here's the information they provided:<ul><li>Email Address: ${leadEmailAddress}</li><li>Name of their Practice: ${leadPracticeName}</li></ul></p><p>Thanks!</p>`,
      // text: `This is a test email`,
      // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,
    };

    return sgMail.send(msg)

      // .then(() => res.status(200).send('email sent!'))
      .then(() => res.status(200).json({message: 'email sent!'}))
      .catch(() => res.status(400).send(err))
  });
});

exports.contactUsEmail = functions.https.onRequest((req, res) => {

  cors( req, res, () => {
    const toName = req.body.toName;
    const toEmail = req.body.toEmail;
    const leadEmailAddress = req.body.leadEmailAddress;
    const leadPracticeName = req.body.leadPracticeName;
    const leadFirstName = req.body.firstName;
    const leadLastName = req.body.lastName;
    const contactUsMessage = req.body.contactUsMessage;

    const msg = {
      to: toEmail,
      from: 'thanks@kohancreative.com',
      subject: 'Contact Us Form Submitted - Kohan Creative',
      html: `<p>Someone wants to work with Kohan Creative! Here's the information they provided:<ul><li>First Name: ${leadFirstName}</li><li>Last Name: ${leadLastName}</li><li>Email Address: ${leadEmailAddress}</li><li>Name of their Practice: ${leadPracticeName}</li><li>Message: ${contactUsMessage}</li></ul></p><p>Thanks!</p>`,
      // text: `This is a test email`,
      // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,
    };

    return sgMail.send(msg)

      // .then(() => res.status(200).send('email sent!'))
      .then(() => res.status(200).json({message: 'email sent!'}))
      .catch(() => res.status(400).send(err))
  });
});