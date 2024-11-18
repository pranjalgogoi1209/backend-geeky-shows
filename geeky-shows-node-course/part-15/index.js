import EventEmitter from "events";

// const myEmitter = new EventEmitter();

// creating class
// class MyEmitter extends EventEmitter {}

// creating object
// const myEmitter = new MyEmitter();

const myEmitter = new EventEmitter();

// example 1
// register event listener
myEmitter.on("eventName", () => {
  console.log("An event occured !");
});

myEmitter.on("pranjalEvent", () => {
  console.log("Pranjal event occured !");
});

// trigger event
myEmitter.emit("eventName");
myEmitter.emit("eventName");
myEmitter.emit("pranjalEvent");
myEmitter.emit("pranjalEvent");
myEmitter.emit("pranjalEvent");

// example2
let m = 0;
myEmitter.on("eventName2", () => {
  console.log(++m);
});
myEmitter.emit("eventName2");
myEmitter.emit("eventName2");
myEmitter.emit("eventName2");

// once
let n = 0;
myEmitter.once("eventName3", () => {
  console.log(++n);
});
myEmitter.emit("eventName3"); // work
myEmitter.emit("eventName3"); // not work
myEmitter.emit("eventName3"); // not work
