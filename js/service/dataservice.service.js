(function() {

  angular
  .module('app.service')
  .factory('dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q']

  function Dataservice($http, $q) {
    var isLoad = false;
    var currentUserId = 1;
    var tasks;

    var service = {
      onLoad: onLoad,
      getTasks: getTasks,
      update: update,
      addTask: addTask
    };
    return service;

    function onLoad(){
      // if (!isLoad){
        // isLoad = true;
        tasks = localStorage.getItem("tasks");
        if (!tasks){
          tasks = {
            tasks: []
          };
          localStorage.setItem("tasks", JSON.stringify(tasks));
          console.log("new0");
        }
        else
          tasks = JSON.parse(tasks);
        console.log("onLoad");
    // }
  }

  function getTasks(){
    return tasks;
  }

  function update(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function addTask(){
    tasks.tasks.push({
      name: "task " + (tasks.tasks.length+1),
      items: []
    });
    // localStorage.clear();
    update();
    console.log("addTask");
  }
}
})();