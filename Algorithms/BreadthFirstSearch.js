var BreadthFirstSearch = function () {
    var graph = {
        me: ["arif", "emran", "saiful"],
        arif: ["joy", "sami"],
        emran: ["nobin", "shafin"],
        saiful: ["anish", "niaj"],
    };
    //   let index = "me";
    //   let newGraph=[]
    //   if (graph[index].length == 0) {
    //     return -1;
    //   }
    //   if (graph[index].shift() == "anish") {
    //     return { index: graph[index].indexOf("anish") };
    //   }
    //-find anish
    var shift = graph["me"].shift();
    console.log(graph["me"]);
};
BreadthFirstSearch();
