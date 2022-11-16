const GDT = {
	log: GDTLog,
	warn: GDTWarn,
	error: GDTError,
	sleep: GDTSleep
}

export function GDTSleep(milliseconds: number) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

export function GDTError(...args) {
	console.error("GDT: ", args)
}

export function GDTLog(...args) {
	console.log("GDT: ", args)
}

export function GDTWarn(...args) {
	console.warn("GDT: ", args)
}

export default GDT;