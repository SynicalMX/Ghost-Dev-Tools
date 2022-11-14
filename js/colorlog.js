const color = {};

// Assigning the key: value pair to an object
color.black = "\x1b[30m";
color.red = "\x1b[31m";
color.green = "\x1b[32m";
color.yellow = "\x1b[33m";
color.blue = "\x1b[34m";
color.magenta = "\x1b[35m";
color.cyan = "\x1b[36m";
color.white = "\x1b[37m";



console.colorlog = (str) => {
	var log = ""
	
	var prev = false
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "%"){
			prev = true
			continue
		}
		else if (prev) {
			switch(str[i]){
				case '0':
					log += color.black
					break
				case 'r':
					log += color.red
					break
				case 'g':
					log += color.green
					break
				case 'y':
					log += color.yellow
					break
				case 'b':
					log += color.blue
					break
				case 'm':
					log += color.magenta
					break
				case 'c':
					log += color.cyan
					break
				case 'w':
					log += color.white
				default:
					console.error("GDT: invalid color")
			}
			prev = false
		}
		else {
			log += str[i]
		}
	}
	console.log(log)
};

