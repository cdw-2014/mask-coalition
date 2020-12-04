const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' })); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/mail/', (req, res) => {
	const { subject, text, image = null } = req.body;
	var transporter = nodemailer.createTransport({
		host       : 'smtp.gmail.com',
		port       : 587,
		secure     : false,
		requireTLS : true,
		auth       : {
			user : process.env.GMAIL,
			pass : process.env.PASSWORD
		}
	});

	transporter.sendMail(
		{
			from        : 'cdw2014@gmail.com',
			to          : 'cdw2014@gmail.com',
			subject     : subject,
			text        : text,
			attachments :
				image != null
					? [
							{ filename: 'attachedImage.png', content: image.split('base64')[1], encoding: 'base64' }
						]
					: []
		},
		function(error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		}
	);
});

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../src/build')));
	app.get('/*', (req, res) => {
		let url = path.join(__dirname, '../src/build', 'index.html');
		if (!url.startsWith('/app/')) url = url.substring(1);
		res.sendFile(url);
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
