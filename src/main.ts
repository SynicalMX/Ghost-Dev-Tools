import Network from "./network";
import GUI from "./gui";

const network = new Network("192.168.137.1:3000")

const gui = new GUI(network.id)
alert("Hello!")