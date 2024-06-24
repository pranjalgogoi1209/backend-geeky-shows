import EventEmitter from "events";

// creating class

class MyEmitter extends EventEmitter {}

// creating object
const myEmitter = new MyEmitter();

// example 1
// register event listener
myEmitter.on("eventName", () => {
  console.log("An event occured !");
});
// trigger event
myEmitter.emit("eventName");
myEmitter.emit("eventName");

/* // example2
let m = 0;
myEmitter.on("eventName2", () => {
  console.log(++m);
});
myEmitter.emit("eventName2");
myEmitter.emit("eventName2");
myEmitter.emit("eventName2"); */

// once
let m = 0;
myEmitter.once("eventName2", () => {
  console.log(++m);
});
myEmitter.emit("eventName2");
myEmitter.emit("eventName2");
myEmitter.emit("eventName2");
