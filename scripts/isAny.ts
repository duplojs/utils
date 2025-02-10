export type IsAny<T extends any> =
	(any extends T ? true : false) extends true
		? true
		: false;
