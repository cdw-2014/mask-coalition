import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, fade, Typography, CardContent } from '@material-ui/core';
import ImageGallery from 'react-image-gallery';
import * as Parser from 'rss-parser';

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

export default function News() {
	const classes = useStyles();

	return (
		<div className="News">
			<Grid className={classes.mainGrid} container direction="colummn" justify="center" alignItems="flex-start">
				<Grid container item xs={8} direction="colummn" justify="center" alignItems="center">
					<Card className={classes.card}>
						<Grid>
							<h3>Where to Donate</h3>
							<p>
								If you would like to contribute to helping families and communities hit hardest by
								COVID-19, please consider the following non-profit organiztions:
							</p>
							<ol>
								<li>
									<a href="https://secure.americares.org/site/Donation2?df_id=25767&mfc_pref=T&25767.donation=form1">
										Americares
									</a>{' '}
									- Provides medicine and aid to those in need in over 90 countries across the world.
								</li>
								<li>
									<a href="https://www.redcrossblood.org/donate-blood/dlp/coronavirus--covid-19--and-blood-donation.html">
										American Red Cross
									</a>{' '}
									- Schedule an appointment to doante blood for COVID patients in need of platelet and
									plasma.
								</li>
								<li>
									<a href="https://www.centerforhealthsecurity.org/giving/">
										Johns Hopkins Center for Health Security
									</a>{' '}
									- Help the experts at Johns Hopkins Center for Health Security continue to protect
									people's health during this pandemic.
								</li>
								<li>
									<a href="https://www.feedingamerica.org/">Feeding America</a> - Donate to make sure
									that food banks across the country are able to provide food to families in need. The
									COVID-19 pandemic has brought financial on many families, so your donation will put
									food on plates.
								</li>
							</ol>
						</Grid>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
