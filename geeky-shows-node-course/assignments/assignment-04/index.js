import EventEmitter from "events";

const myEmitter = new EventEmitter();

// dance event
myEmitter.once("dance", () => {
  console.log("Dancing");
});

// singing event
myEmitter.once("singing", () => {
  console.log("Singing");
});

// coding event
myEmitter.once("coding", () => {
  console.log("Coding");
});

// running event
myEmitter.once("running", () => {
  console.log("Running");
});

// allWork event
myEmitter.on("allWork", () => {
  myEmitter.emit("dance");
  myEmitter.emit("singing");
  myEmitter.emit("coding");
  myEmitter.emit("running");
});

myEmitter.emit("allWork");
