var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', function($scope,$http) {
        $http.get("/todoList").success(function(response){
           console.log("I received the data from the server");
           $scope.todoList=response;
        });
//console.log("Hello World from controller");





var refresh = function() {
  $http.get('/todoList').success(function(response) {
    console.log("I got the data I requested");
    $scope.todoList = response;
    $scope.todo = "";
  });
}

$scope.addTask = function() {
  console.log($scope.todo);
  
$http.post('/todoList', $scope.todo).success(function(response) {
    console.log(response);
  refresh();
  });
}

$scope.remove = function(id) {
  console.log(id);
    $http.delete('/todoList/' + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  console.log(id);
  $http.get('/todoList/' + id).success(function(response) {
    $scope.todo = response;
  });
};  

$scope.update = function() {
  console.log($scope.todo._id);
  $http.put('/todoList/' + $scope.todo._id, $scope.todo).success(function(response) {
    refresh();
  })
};

$scope.clear = function() {
  $scope.todo = "";
}

});