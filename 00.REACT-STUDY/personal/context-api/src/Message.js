import React, { Component } from 'react';
import LangContext from './LangContext';

class Message extends Component {
	static contextType = LangContext;

	render() {
		const lang = this.context;

		if (lang === 'en') {
			return <p>Context - English</p>;
		} else {
			return <p>컨텍스트 - 한국어</p>;
		}
	}
}

export default Message;
