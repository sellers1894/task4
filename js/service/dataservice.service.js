(function() {

  angular
  .module('app.service')
  .factory('dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q']

  function Dataservice($http, $q) {
    var isLoad = false;
    var idCurrentBoard = 0;
    var boards;
    var tasks;

    var service = {
      onLoad: onLoad,
      getBoards: getBoards,
      addBoard: addBoard,
      getTasks: getTasks,
      update: update,
      addTask: addTask
    };
    return service;

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

        tasks = localStorage.getItem("tasks");
        if (!tasks){
          tasks = {
            tasks: []
          };
          localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        else
          tasks = JSON.parse(tasks);
    // }
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
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask(){
    tasks.tasks.push({
      name: "task " + (tasks.tasks.length+1),
      items: []
    });
    // localStorage.clear();
    update();
  }
}
})();