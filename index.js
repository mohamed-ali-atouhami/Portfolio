import express from "express"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import path from "path"

dotenv.config()
const app = express()
const port = process.env.PORT || 9999

app.use(express.static(path.resolve(process.cwd(), "static")));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API route must come BEFORE the catch-all route
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
            from: `Portfolio <${process.env.EMAIL}>`,
            to: process.env.EMAIL,
            subject: 'Hi Mohammed Ali',
            text: `name:${name} \nemail:${email} \nmessage:${message}`
        };
         
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.error('Email sending error:', err);
                res.status(500).json({ error: 'Failed to send email', details: err.message });
            } else {
                console.log('Email sent successfully');
                res.status(200).json({ message: 'Email sent successfully' });
            }
        });
    } catch (error) {
        console.error("Email error:", error);
        res.status(500).json("Something went wrong")
    }
})

// Catch-all route must come AFTER API routes
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

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})