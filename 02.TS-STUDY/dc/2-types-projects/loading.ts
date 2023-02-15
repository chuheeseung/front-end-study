{
	type LoadingState = {
		state: 'loading';
	};

	type SuccessState = {
		state: 'success';
		response: {
			body: string;
		};
	};

	type FailState = {
		state: 'fail';
		reason: string;
	};

	type ResourceLoadState = LoadingState | SuccessState | FailState;

	function printLoginState(loadState: ResourceLoadState) {
		switch (loadState.state) {
			case 'loading':
				console.log('loading...');
			case 'success':
				console.log(`${loadState.response.body}`);
			case 'fail':
				console.log(`${loadState.reason}`);
			default:
				throw new Error(`unknown state ${loadState}`);
		}
	}

	printLoginState({ state: 'loading' }); // 👀 loading...
	printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
	printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
