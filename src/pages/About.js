import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, fade } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import './About.css';

const useStyles = makeStyles({
	mainGrid : {
		width     : '100vw',
		minHeight : '88vh',
		spacing   : 0,
		justify   : 'space-around'
	},
	card     : {
		marginTop       : '20px',
		paddingLeft     : '20px',
		paddingRight    : '20px',
		backgroundColor : fade('#ffffff', 0.85)
	}
});

export default function About() {
	const classes = useStyles();

	const images = [
		{
			original : `${process.env.PUBLIC_URL}/flyer1.png`
		},
		{
			original : `${process.env.PUBLIC_URL}/flyer2.png`
		},
		{
			original : `${process.env.PUBLIC_URL}/infographic.png`
		}
	];

	return (
		<div className="About">
			<Grid className={classes.mainGrid} container direction="colummn" justify="center" alignItems="flex-start">
				<Grid container item xs={8} direction="colummn" justify="center" alignItems="center">
					<Card className={classes.card}>
						<Grid>
							<h3>About Us</h3>
							<p>
								The Mask Coalition is a campaign ran by three students at Purdue University, and our
								goal is to spread awareness about masks. We want to encourage everyone to mask up by
								sharing statistics and helpful guides, debunking misinformation, and giving people a
								space to post their own stories and questions. Simply wearing a mask can and will save
								lives during this pandemic, and we want everyone to understand the importance of masks.
							</p>
							<p>
								To support our cause, follow our social media accounts, and share our resources below
								with the hastag #maskcoalition on any platform. You can do your part by always wearing a
								mask when you leave your house and by making sure your friends and family do as well! If
								you or your loved ones have any questions about mask best practices, please reach out to
								us via our social media accounts or ask an anonymous question{' '}
								<a href="/ask-question">here.</a>
							</p>
							<h3>Resources to Share</h3>
							<ImageGallery autoPlay="true" items={images} />
						</Grid>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
