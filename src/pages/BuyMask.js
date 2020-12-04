import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, fade, CardContent, CardMedia, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import XIcon from '@material-ui/icons/NotInterested';
import FlipCard from '../components/FlipCard';

const useStyles = makeStyles({
	mainGrid : {
		width   : '100vw',
		height  : '88vh',
		spacing : 1,
		justify : 'space-around'
	},
	card     : {
		marginTop       : '20px',
		marginBottom    : '20px',
		marginLeft      : '40px',
		marginRight     : '40px',
		paddingLeft     : '20px',
		paddingRight    : '20px',
		paddingBottom   : '20px',
		backgroundColor : fade('#ffffff', 0.85)
	},
	icon     : {
		verticalAlign : 'middle',
		display       : 'inline-flex'
	}
});

export default function BuyMask() {
	const classes = useStyles();

	return (
		<div className="BuyMask">
			<Grid className={classes.mainGrid} container direction="row" justify="center" alignItems="flex-start">
				<Grid container>
					<Grid item xs={7}>
						<Card className={classes.card}>
							<h3 className={classes.icon}>
								Masks to Buy <CheckIcon color="primary" />
							</h3>
							<Grid container direction="row">
								<Grid item xs>
									<FlipCard
										title={'Cloth Masks'}
										description={
											'Cloth masks are a good option because they can be reused and easily sanitized. They come in many designs and thicknesses which can be stylish while protecting yourself and others around you.'
										}
										image={`${process.env.PUBLIC_URL}/cloth.png`}
									/>
								</Grid>
								<Grid item xs>
									<FlipCard
										title={'Surgical Masks'}
										description={
											'Surgical masks are meant for a single use, and they are great to protect others around you. They can be purchased in bulk and are usually breathable, and provide nose clamps to avoid germs from escaping.'
										}
										image={`${process.env.PUBLIC_URL}/surgical.jpg`}
									/>
								</Grid>
								<Grid item xs>
									<FlipCard
										title={'Dust Masks'}
										description={
											'Dust masks usually only have a single strap, therefore they do not form a tight seal. They will prevent droplets from leaving the mask and larger particles from entering, but not liquid droplets from entering.'
										}
										image={`${process.env.PUBLIC_URL}/dustmask.jpg`}
									/>
								</Grid>
								<Grid item xs>
									<FlipCard
										title={'N95 Masks (Without Vents)'}
										description={
											'N95 masks are one of the most effective types of masks, but they are more expensive than surgical masks.'
										}
										image={`${process.env.PUBLIC_URL}/n95.jpg`}
									/>
								</Grid>
							</Grid>
						</Card>
						<Card className={classes.card}>
							<h3 className={classes.icon}>
								Masks to Avoid <XIcon color="secondary" />
							</h3>
							<Grid container direction="row">
								<Grid item xs>
									<FlipCard
										title={'Masks With Vents'}
										description={
											'Some N95s and other masks have vents which filter the air from inside the mask. While vents make it easier for the wearer to breathe, they are exhausting germs.'
										}
										image={`${process.env.PUBLIC_URL}/vent.jpg`}
									/>
								</Grid>
								<Grid item xs>
									<FlipCard
										title={'Neck Fleeces'}
										description={
											'Neck fleeces may seem like a good option, but studies show that they may actual increase the chance of infection by breaking larger particles into many smaller particles when the wearer speaks.'
										}
										image={`${process.env.PUBLIC_URL}/neckfleece.jpg`}
									/>
								</Grid>
								<Grid item xs>
									<FlipCard
										title={'Used Masks'}
										description={
											'Single use masks such as N95 masks or surgical masks should not be used multiple times. Cloth masks should be sanitized by soaking in a 4 teaspoon bleach/1 quart water solution for 5 minutes.'
										}
										image={`${process.env.PUBLIC_URL}/dirty.png`}
									/>
								</Grid>
							</Grid>
						</Card>
						<p className={classes.card}>
							Sources:{' '}
							<a href="https://www.mayoclinic.org/patient-visitor-guide/preparing-for-your-visit/covid-19-acceptable-face-masks">
								Mayo Clinic
							</a>{' '}
							and Emma P. Fischer et al. via{' '}
							<a href="https://advances.sciencemag.org/content/6/36/eabd3083">ScienceAdvances</a>
						</p>
					</Grid>
					<Grid item xs={5}>
						<Card className={classes.card}>
							<h3>About Masks</h3>
							<p>
								Different types of masks have their pros and cons, but in general, any mask is going to
								be better than no mask. Masks that should be avoided if you have the option are those
								with vents, neck fleeces/bandanas, and dirty masks. Hover over the images to the left
								for more details on each type of mask.
							</p>
							<p>
								When worn correctly, your mask should cover your mouth and nose, and there should be a
								tight seal around the bridge of your nose if the mask has a nose wire. Any of the
								suggested masks on this page, when worn correctly, <i>will</i> protect others from
								liquid droplets coming from your mouth and nose. However if only you are wearing a mask,
								your mask will not protect you from others who may be infected with COVID-19. This is
								why it is crucial for <i>everyone</i> to wear their mask!
							</p>
							<h3>Where to Buy</h3>
							<ol>
								<li>
									<a href="https://weardiop.com/products/facemask?variant=32237177077863">
										Diop ($15)
									</a>{' '}
									- Diop is a Detriot-based clothing company, and they make stylish cloth masks with
									nose strips and elastic straps. They also donate a portion of their proceeds to
									non-profits such as Feed the Frontlines.
								</li>
								<li>
									<a href="https://www.buckmason.com/products/black-m1-face-mask">
										Buck Mason (5 for $30)
									</a>{' '}
									- The t-shirt material that Buck Mason masks are made from make them confortable and
									breathable. They are designed to be worn all day with unique features such as
									adjustable straps that tie in the back. Buck Mason also donates masks to essential
									workers and health-care workers.
								</li>
								<li>
									<a href="https://www.amazon.com/Breathable-Comfortable-Filter-Safety-Outdoor/dp/B08DY8KR3H/ref=sr_1_6?crid=QI78G8WSCHRZ&dchild=1&keywords=surgical+mask&qid=1607051009&sprefix=surgica%2Caps%2C190&sr=8-6">
										Bulk Surgical Masks (50 for $10)
									</a>{' '}
									- It is always a good idea to have some backup masks readily available in your
									glovebox or home just in case. While these surgical masks are not reusable, they are
									effective and can be worn under a cloth mask for extra protection.
								</li>
							</ol>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
