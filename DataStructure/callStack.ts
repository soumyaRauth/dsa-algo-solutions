//Implementaion for the function call stack
//Dry run is must to understand the concept

const functionCallStack = () => {
  Hello();

  Mello();

  console.log("Parent Function");
};

const Hello = () => {
  console.log("hello");
};

const Mello = () => {
  console.log("mello");
};

//!outputs

//hello->mello->Parent Function

functionCallStack();
