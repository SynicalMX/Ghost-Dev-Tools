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
}