require('dotenv').config()
const functions = require('firebase-functions');
const cors = require('cors')
const express = require('express');
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(
    process.env.SG_API
)

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/api/screening', async (req,res) => {
    console.log('hit')
    console.log(JSON.parse(req.body))
    const { name, department, selectedOption, selectedOption2 } = JSON.parse(req.body)
    const msg = {
        to: 'brentholmesahrens@gmail.com',
        from: 'cidida@gmail.com',
        subject: 'New Screening Form',
        text: `Name: ${name}
               Department: ${department}
               Question 1: ${selectedOption}
               Question 2: ${selectedOption2}`
    }
    try {
        const mailRes = await sgMail.send(msg)
        console.log(mailRes)
        res.json({ sent: true })
    } catch(error) {
        console.log(error)
        console.error(error.response.body)
    }
})
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.app = functions.https.onRequest(app)
