import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, fade } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import ImageUploader from 'react-images-upload';
import axios from 'axios';

const useStyles = makeStyles({
	mainGrid : {
		width   : '100vw',
		height  : '88vh',
		spacing : 0,
		justify : 'space-around'
	},
	card     : {
		marginTop       : '20px',
		paddingLeft     : '20px',
		paddingRight    : '20px',
		backgroundColor : fade('#ffffff', 0.85)
	}
});

export default function SubmitStory(props) {
	const classes = useStyles();
	const [
		image,
		setImage
	] = React.useState([]);
	const [
		subject,
		setSubject
	] = React.useState('');
	const [
		text,
		setText
	] = React.useState('');
	const [
		name,
		setName
	] = React.useState('');
	const [
		email,
		setEmail
	] = React.useState('');

	const toBase64 = (file) =>
		new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
		});

	const handleSubmit = async (event) => {
		event.preventDefault();
		let imageStr = '';
		if (image.length) {
			imageStr = await toBase64(image[0]);
		}
		axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
		if (imageStr.length) {
			axios.post(`https://themaskcoalition.herokuapp.com/api/mail`, {
				subject : `[Story] The Mask Coalition`,
				text    : `${subject}\n\nFrom:${name}\nEmail:${email}\n\n${text}`,
				image   : imageStr
			});
		} else {
			axios.post(`https://themaskcoalition.herokuapp.com/api/mail`, {
				subject : `[Story] The Mask Coalition`,
				text    : `${subject}\n\nFrom:${name}\nEmail:${email}\n\n${text}`
			});
		}
		setEmail('');
		setName('');
		setText('');
		setImage([]);
		setSubject('');
	};
	const onDrop = (picture) => {
		setImage(picture);
	};

	return (
		<div className="Submit">
			<Grid className={classes.mainGrid} container direction="colummn" justify="center" alignItems="flex-start">
				<Grid container item xs={8} direction="colummn" justify="center" alignItems="center">
					<Card className={classes.card}>
						<Grid>
							<h3>Share Your Story With Us</h3>
							<p>
								We would love to hear your thoughts on masks during the COVID-19 pandemic. Please fill
								out the form below with details on how the pandemic has affected you or your loved ones,
								why you think masks are important, or just some images of your cool masks! Our goal is
								to share your experiences with the world to encourage others to mask up. By submitting
								this form, you are giving the Mask Coalition permission to share your story on all
								social media platforms.
							</p>
							<form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>
								<Grid container alignItems="center" justify="center" direction="column" spacing={3}>
									<Grid item>
										<TextField
											id="subject"
											label="Subject"
											value={subject}
											onChange={(e) => setSubject(e.target.value)}
										/>
									</Grid>
									<TextField
										multiline
										maxRows={10}
										placeholder="Tell Us Your Story Here"
										value={text}
										onChange={(e) => setText(e.target.value)}
									/>
									<Grid item>
										<TextField
											id="name"
											label="Your Name"
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</Grid>
									<Grid item>
										<TextField
											id="email"
											label="Email Address"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</Grid>
									<ImageUploader
										{...props}
										withIcon={true}
										onChange={onDrop}
										imgExtension={[
											'.jpg',
											'.gif',
											'.png'
										]}
										singleImage
										withPreview
										maxFileSize={5242880}
									/>
									<Grid item>
										<Button variant="contained" type="submit" color="primary" id="submit">
											Submit
										</Button>
									</Grid>
								</Grid>
							</form>
						</Grid>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
