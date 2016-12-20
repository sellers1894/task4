(function() {

  angular
  .module('app.service')
  .factory('dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q']

  function Dataservice($http, $q) {
    var isLoad = false;
    var idCurrentBoard = 0;
    var boards;
    var tasks = {data: ""};
    var carrentBoardId = -1;

    var bla = {data: "bla"};

    var service = {
      onLoad: onLoad,
      checkBoard: checkBoard,
      getCarrentBoardId: getCarrentBoardId,
      getBoards: getBoards,
      addBoard: addBoard,
      getTasks: getTasks,
      update: update,
      addTask: addTask,

      getBla: getBla,
      setBla: setBla
    };
    return service;

    function getBla(){return bla;}
    function setBla(bla2){
      bla.data = bla2;
      console.log(bla);
    }

    function onLoad(){
      // if (!isLoad){
        // isLoad = true;
        boards = localStorage.getItem("boards");
        if (!boards){
          boards = {
            board: []
          };
          localStorage.setItem("boards", JSON.stringify(boards));
        }
        else
          boards = JSON.parse(boards);

        // tasks = localStorage.getItem("tasks");
        // if (!tasks){
        //   tasks = {
        //     tasks: []
        //   };
        //   localStorage.setItem("tasks", JSON.stringify(tasks));
        // }
        // else
        //   tasks = JSON.parse(tasks);
    // }
  }

  function checkBoard(index){
    carrentBoardId = index;
    tasks.data = boards.board[carrentBoardId].tasks;
  }
  function getCarrentBoardId(){
    return carrentBoardId;
  }

  function getBoards(){
    return boards;
  }

  function addBoard(){
    boards.board.push({
      name: "board " + (boards.board.length+1),
      tasks: []
    });
    update();
  }

  function getTasks(){
    return tasks;
  }

  function update(){
    localStorage.setItem("boards", JSON.stringify(boards));
    // localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask(){
    boards.board[carrentBoardId].tasks.push({
      name: "task " + (boards.board[carrentBoardId].tasks.length+1),
      items: []
    });
    update();
  }
}
})();