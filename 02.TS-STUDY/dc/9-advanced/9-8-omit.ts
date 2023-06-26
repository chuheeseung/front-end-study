{
	type Video = {
		id: string;
		title: string;
		url: string;
		data: string;
	};

	type VideoMetadata = Omit<Video, 'url' | 'data'>;

	function getMetadata(id: string): VideoMetadata {
		return {
			id: id,
			title: 'title',
		};
	}
}
