import * as fs from 'fs';
import * as path from 'path';

export default class GUI {
	private console = document.createElement('details')
    private scopedStyle = document.createElement("style");
	private container = document.createElement("div");
    private commandButton = document.createElement("button");

    constructor(id: string) {
        this.console.id = id
        
        this.commandButton.type = "button";
        this.commandButton.onclick = function() {
		const command = prompt("Enter Command: ")
            return new Function(command)();
        };
        this.commandButton.innerText = "Enter Command";
    }

    private setStyle() {
        fs.readFile(path.join(__dirname, "gui.css"), 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }
            this.scopedStyle.innerHTML = data
          });
    }
}