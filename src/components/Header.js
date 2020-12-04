import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
	toolbar          : {
		borderBottom : `1px solid ${theme.palette.divider}`
	},
	toolbarTitle     : {
		flex : 1
	},
	toolbarSecondary : {
		justifyContent : 'space-between',
		overflowX      : 'auto',
		borderBottom   : `1px solid ${theme.palette.divider}`
	},
	toolbarLink      : {
		padding    : theme.spacing(1),
		flexShrink : 0
	}
}));

export default function Header(props) {
	const classes = useStyles();
	const { sections, title } = props;
	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				<Typography component="h2" variant="h5" color="inherit" noWrap className={classes.toolbarTitle}>
					<img src={`${process.env.PUBLIC_URL}/logo.jpg`} height="40px" />
					<Link href="/" color="inherit">
						{'\t' + title}
					</Link>
				</Typography>
				<IconButton onClick={() => window.open('https://twitter.com/MaskPurdue')}>
					<TwitterIcon />
				</IconButton>
				<IconButton onClick={() => window.open('https://www.instagram.com/maskcoalition/')}>
					<InstagramIcon />
				</IconButton>
				<IconButton onClick={() => window.open('https://maskcoalition.tumblr.com/')}>
					<span class="iconify" data-icon="mdi-tumblr" data-inline="false" />
				</IconButton>
			</Toolbar>
			<Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
				{sections.map((section) => (
					<Link
						color="inherit"
						noWrap
						key={section.title}
						variant="body2"
						href={section.url}
						className={classes.toolbarLink}
					>
						{section.title}
					</Link>
				))}
			</Toolbar>
		</React.Fragment>
	);
}

Header.propTypes = {
	sections : PropTypes.array,
	title    : PropTypes.string
};
