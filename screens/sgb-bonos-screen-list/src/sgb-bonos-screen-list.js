'use strict';

angular.module('sgb-bonos-screen-list', ['megazord'])
    .controller('sgb-bonos-screen-list-controller', ['$scope', '_router', '_screen', '_screenParams', '_data', '$http', 
        function ($scope, _router, _screen, _screenParams, _data, $http) {
        _screen.initialize($scope, _screenParams);

        $scope.params = _screenParams;
        $scope.data = _data;
        $scope.results = $scope.data.results;

        $scope.update = function(){
            $http
                .get($scope.params.url)
                .success(function(data){
                    $scope.data = data;
                    $scope.$broadcast('scroll.refreshComplete');
                })
                .error(function(err){
                    $scope.$broadcast('scroll.refreshComplete');
                    alert("Something wrong!");
                })
        };

        $scope.goTo = function(event, item){
            //Nothing to do but fire the event
            _router.fireEvent({
                 name: event,
                 params: {
                   data: item
                 }
            })
        };
    }]);