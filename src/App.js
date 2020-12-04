import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import About from './pages/About';
import BuyMask from './pages/BuyMask';
import Donate from './pages/Donate';
import News from './pages/News';
import Resources from './pages/Resources';
import SubmitStory from './pages/SubmitStory';
import SubmitQuestion from './pages/SubmitQuestion';

const sections = [
	{ title: 'About Us', url: '/about' },
	{ title: 'Submit Your Story', url: '/submit-story' },
	{ title: 'Ask a Question', url: '/ask-question' },
	{ title: 'News Feed', url: '/news' },
	{ title: 'Buy a Mask', url: '/masks' },
	{ title: 'Donate', url: '/donate' }
];

function App() {
	return (
		<div className="App">
			<Header title="Mask Coalition" sections={sections} />
			<div
				style={{
					backgroundImage    : `url(${process.env.PUBLIC_URL}/background.jpg)`,
					backgroundSize     : 'cover',
					backgroundPosition : 'center center'
				}}
			>
				<Router>
					<Switch>
						<Route exact path="/" component={About} />
						<Route exact path="/about" component={About} />
						<Route exact path="/submit-story" component={SubmitStory} />
						<Route exact path="/ask-question" component={SubmitQuestion} />
						<Route exact path="/news" component={News} />
						<Route exact path="/masks" component={BuyMask} />
						<Route exact path="/donate" component={Donate} />
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
