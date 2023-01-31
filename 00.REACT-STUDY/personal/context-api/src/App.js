import React, { Component } from 'react';
import Button from './Button';
import LangContext from './LangContext';
import Message from './Message';
import Title from './Title';

class App extends Component {
	state = { lang: 'en' };

	toggleLang = () => {
		this.setState(({ lang }) => ({
			lang: lang === 'en' ? 'kr' : 'en',
		}));
	};

	render() {
		const { lang } = this.state;

		return (
			<LangContext.Provider value={lang}>
				<Button toggleLang={this.toggleLang} />
				<Title />
				<Message />
			</LangContext.Provider>
		);
	}
}

export default App;
