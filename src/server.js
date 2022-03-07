// Load required dependencies
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Use express to setup the server that runs on port 5000
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(10000);
// app.listen(10000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  host: 'smtp.gmail.com',
	port: 465,
	secure: true,
    auth: {
      user: "aquascapetherapy@gmail.com",
      pass: "Hysdas67912BeD",
    },
  });
  
contactEmail.verify((error) => {
if (error) {
    console.log(error);
}
});

router.post("/", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "douming.mok@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
});