import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles({
	card  : {
		display  : 'flex',
		width    : '25ch',
		height   : '30ch',
		flexWrap : 1
	},
	media : {
		width : '100%'
	}
});

export default function FlipCard(props) {
	const classes = useStyles();
	const { image, title, description } = props;
	const [
		isFlipped,
		setFlipped
	] = React.useState(false);

	const renderBack = (title, description) => (
		<React.Fragment>
			<CardContent>
				<Typography variant="h6" component="h2">
					{title}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{description}
				</Typography>
			</CardContent>
		</React.Fragment>
	);

	const renderFront = (image, title) => (
		<React.Fragment>
			<CardMedia className={classes.media} component="img" image={image} />
		</React.Fragment>
	);

	return (
		<Card className={classes.card} onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
			{isFlipped ? renderBack(title, description) : renderFront(image, title)}
		</Card>
	);
}
