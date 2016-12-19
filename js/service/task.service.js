(function() {

  angular
  .module('app.service')
  .factory('taskservice', Taskservice);

  function Taskservice() {
    var carrentTask={data:''};
    var carrentItemTask={data:''};

    var service = {
      getCarrentTask: getCarrentTask,
      setCarrentTask: setCarrentTask,
      getCarrentItemTask: getCarrentItemTask,
      setCarrentItemTask: setCarrentItemTask
    };
    return service;

    function getCarrentTask(){
      return carrentTask;
    }

    function setCarrentTask(task){
      carrentTask.data = task;
    }

    function getCarrentItemTask(){
      return carrentItemTask;
    }

    function setCarrentItemTask(item){
      carrentItemTask.data = item;
    }

  }
})();