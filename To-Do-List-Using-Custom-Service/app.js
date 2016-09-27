(function(){
    'use strict';
    //Registering controllers and service with angular module
    angular.module('app', [])
    .controller('TaskAddController', TaskAddController)
    .controller('TaskShowController', TaskShowController)
    .service('TaskListService', TaskListService);
      
    
    //First function Controller
    TaskAddController.$inject = ['TaskListService'];
    function TaskAddController(TaskListService) {
        var taskAdder = this;
        taskAdder.taskName = "";
        
        taskAdder.addTask = function() {
            TaskListService.addTask(taskAdder.taskName);
        }
       
    }
    //Second Function controller
     TaskAddController.$inject = ['TaskListService'];
    function TaskShowController(TaskListService) {
        var taskShow = this;
        
        taskShow.weeklyTasks = TaskListService.getTasks();
        
        taskShow.removeTask = function(taskIndex) {
            TaskListService.removeTask(taskIndex);
        };
    }
    
    //Custom Service
    function TaskListService() {
        var listService = this;
        
        //Empty Array of weekly tasks
        var weeklyTasks = [];
        
        listService.addTask = function(taskName) {
            var task = {
                name: taskName
            };
            
            weeklyTasks.push(task);
        };
        
        listService.removeTask = function(taskIndex) {
            weeklyTasks.splice(taskIndex, 1);
        };
        
        listService.getTasks = function() {
            return weeklyTasks;
        };
        
    }
 
 })();