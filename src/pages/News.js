import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, fade, Typography, CardContent } from '@material-ui/core';
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
	const [
		feed,
		setFeed
	] = React.useState({ items: [] });

	let parser = new Parser();
	const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

	React.useEffect(async () => {
		setFeed(await parser.parseURL(CORS_PROXY + 'https://www.cidrap.umn.edu/news/178636/rss'));
	}, []);

	return (
		<div className="News">
			<Grid className={classes.mainGrid} container direction="colummn" justify="center" alignItems="flex-start">
				<Grid container item xs={10} direction="colummn" justify="center" alignItems="center">
					<Card className={classes.card}>
						<Grid>
							<h3>COVID-19 News</h3>
							{feed.items.map((item) => (
								<Card>
									<CardContent>
										<Typography variant="body" component="p">
											<a href={item.link}>{item.title}</a>
										</Typography>
									</CardContent>
								</Card>
							))}
						</Grid>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
