//Implementaion for the function call stack
//Dry run is must to understand the concept
var functionCallStack = function () {
    Hello();
    Mello();
    console.log("Parent Function");
};
var Hello = function () {
    console.log("hello");
};
var Mello = function () {
    console.log("mello");
};
//!outputs
//hello->mello->Parent Function
functionCallStack();
