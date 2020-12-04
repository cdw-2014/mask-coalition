import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, fade } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
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

export default function SubmitQuestion(props) {
	const classes = useStyles();
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

	const handleSubmit = async (event) => {
		event.preventDefault();
		axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

		axios.post(`https://themaskcoalition.herokuapp.com/api/mail`, {
			subject : `[Question] The Mask Coalition`,
			text    : `${subject}\n\nFrom:${name}\nEmail:${email}\n\n${text}`
		});
		setEmail('');
		setName('');
		setText('');
		setSubject('');
	};

	return (
		<div className="Ask">
			<Grid className={classes.mainGrid} container direction="colummn" justify="center" alignItems="flex-start">
				<Grid container item xs={8} direction="colummn" justify="center" alignItems="center">
					<Card className={classes.card}>
						<Grid>
							<h3>Ask a COVID-19 Question</h3>
							<p>
								Do you have a question about types of masks, the proper way to wear a mask, the
								importance of masks, or COVID-19 in general? You can use these form to submit your
								question, and we will do our best to email you a response. If you would like to remain
								anonymous, feel free to leave your name/email blank and we may answer the question on
								our social media pages!
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
