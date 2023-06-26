{
	type Video = {
		title: string;
		author: string;
		description: string;
	};

	// 💩
	/*
type VideoOptional = {
	title?: string;
	author?: string;
  description?: string;
};

type VideoReadOnly = {
  readonly title: string;
  readonly author: string;
}
*/

	// [1, 2].map(item => item * item); // [1, 4]

	type Optional<T> = {
		[P in keyof T]?: T[P]; // for ... in
	};

	type VideoOptional = Optional<Video>;
	const videoOp: VideoOptional = {
		title: 'hi',
	};

	type _Animal = {
		name: string;
		age: number;
	};

	const animal: Optional<_Animal> = {
		name: 'dog',
	};

	type ReadOnly<T> = {
		readonly [P in keyof T]: T[P];
	};

	type Nullable<T> = { [P in keyof T]: T[P] | null };
	const obj3: Nullable<Video> = {
		title: null,
		author: null,
		description: null,
	};

	type Proxy<T> = {
		get(): T;
		set(value: T): void;
	};

	type Proxify<T> = {
		[P in keyof T]: Proxy<T[P]>;
	};
}
