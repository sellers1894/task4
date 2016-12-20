(function() {

  angular
  .module('app.service')
  .factory('dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q']

  function Dataservice($http, $q) {
    var boards;
    var tasks = {data: ""};
    var carrentBoardId = -1;

    var service = {
      onLoad: onLoad,
      checkBoard: checkBoard,
      getCarrentBoardId: getCarrentBoardId,
      getBoards: getBoards,
      addBoard: addBoard,
      getTasks: getTasks,
      update: update,
      addTask: addTask,
    };
    return service;

    function onLoad(){
      boards = localStorage.getItem("boards");
      if (!boards){
        boards = {
          board: []
        };
        localStorage.setItem("boards", JSON.stringify(boards));
      }
      else
        boards = JSON.parse(boards);
    }

    function checkBoard(index){
      carrentBoardId = index;
      if (index === -1){
        tasks.data = "";
      }else{
        tasks.data = boards.board[carrentBoardId].tasks;
      }
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