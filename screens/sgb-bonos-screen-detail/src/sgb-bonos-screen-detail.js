'use strict';

angular.module('sgb-bonos-screen-detail', ['megazord'])
    .controller('sgb-bonos-screen-detail-controller', ['$scope', '_router', '_screen', '_screenParams', '_data', 
        function ($scope, _router, _screen, _screenParams, _data) {
        _screen.initialize($scope, _screenParams);

        $scope.params = _screenParams;
        $scope.data = _data.data;
    }]);