const idinput = document.getElementById("id-input")
const connect = document.getElementById("connect")

const socket = new WebSocket("10.201.102.239:3000")

const template = {
    method: "connect",
    params: {
        id: idinput.value,
    }
}

connect.onclick = () => {
    socket.send(template)
    socket.onmessage = (event) => {
        console.log(event)
    }
}