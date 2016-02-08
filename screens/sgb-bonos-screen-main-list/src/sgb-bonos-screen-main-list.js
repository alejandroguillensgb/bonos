'use strict';

angular.module('sgb-bonos-screen-main-list', ['megazord'])
    .controller('sgb-bonos-screen-main-list-controller', ['$scope', '_router', '_screen', '_screenParams', 
        function ($scope, _router, _screen, _screenParams) {
        _screen.initialize($scope, _screenParams);

        $scope.params = _screenParams;

        $scope.goTo = function(event){
            _router.fireEvent({
                name: event
            });
        };
    }]);