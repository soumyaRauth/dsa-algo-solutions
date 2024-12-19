{
  function abd() {
    console.log("abc");
    {
      function abd2() {
        console.log("abc 2");
      }
    }

    abd2();
  }
}

abd();
