//var myApp = angular.module('myApp', []);
//myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
function AppCtrl($scope){  
console.log("Hello World from controller");
task1 ={name:"washing"};
task2 = {name: "cooking"};
task3 ={name: "feeding the turtle"};
var todoList =[ task1 ,task2 ,task3 ];
$scope.todoList=todoList;
}
//}]);

/*
var refresh = function() {
  $http.get('/contactlist').success(function(response) {
    console.log("I got the data I requested");
    $scope.todolist = response;
    $scope.todo = "";
  });
};

refresh();

$scope.addContact = function() {
  console.log($scope.contact);
  $http.post('/contactlist', $scope.contact).success(function(response) {
    console.log(response);
    refresh();
  });
};

$scope.remove = function(id) {
  console.log(id);
  $http.delete('/contactlist/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/contactlist/' + id).success(function(response) {
    $scope.contact = response;
  });
};  

$scope.update = function() {
  console.log($scope.contact._id);
  $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh();
  })
};

$scope.deselect = function() {
  $scope.contact = "";
}
*/
