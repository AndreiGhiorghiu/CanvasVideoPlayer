export default function secondsMs(seconds) {
	return new Date(seconds * 1000).toISOString().substr(14, 5);
}
