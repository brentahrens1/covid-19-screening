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
    console.log(JSON.parse(req.body))
    const { name, department, selectedOption, selectedOption2 } = JSON.parse(req.body)
    const msg = {
        to: 'brentholmesahrens@gmail.com',
        from: 'cidida@gmail.com',
        subject: `COVID-19 Screen Results for ${name}: ${
            selectedOption === 'yes' || selectedOption2 === 'yes' ? "Warning" : "All Clear"
        }`,
        html: 
        `<div>
            <p>Department: ${department}</p>
            <p>1. Have you had a fever of 100.4 degrees or higher or a new or worsening cough/ shortness of breath/ sore throat or body aches? ${selectedOption}</p>
            <p>2. Have you had close contact (6 fett or less and for 15 minutes or more) with a known Covid-19 patient? ${selectedOption2}</p>
        </div>`
    }
    if (selectedOption === 'yes' || selectedOption2 === 'yes') {
        msg.cc = 'cidida@gmail.com'
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
