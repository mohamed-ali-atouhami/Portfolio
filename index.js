import express from "express"
import nodemailer from "nodemailer"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import path from "path"

dotenv.config()
const app = express()
const port = 9999 || process.env.PORT

app.use(express.static(path.resolve(process.cwd(), "static")));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("*", (_, res) => {
	res.sendFile(
		path.join(process.cwd(), "./static/index.html"),
		(err) => {
			if(err) {
				res.status(500).send(err)
			}
		}
	)
})
app.post('/sendEmail', (req, res) => {
    try {
        
        const { name,email,message } = req.body 
        const mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            }
        });
         
        let mailDetails = {
            to: process.env.EMAIL,
            subject: 'Hi Mohammed Ali',
            text: `name:${name} \nemail:${email} \nmessage:${message}`
        };
         
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log(err)
                res.status(404).json('Error Occurs');
            } else {
                res.status(200).json('Email sent successfully');
            }
        });
    } catch (error) {
        res.status(500).json("Something went wrong")
    }
})
app.listen(port)