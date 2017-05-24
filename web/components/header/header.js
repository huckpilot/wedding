/* global angular */
angular.module('ua5App')
    .directive('header', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/header/header.html',
            link: function($scope, element, attrs) {
                $scope.headerLinks = [
                {
                    name: 'The Weekend',
                    url: 'the-weeekend'
                }, {
                    name: 'Where to Stay',
                    url: 'where-to-stay'
                }, {
                    name: 'Transporation',
                    url: 'transporation'
                }, {
                    name: 'gifts',
                    url: 'gifts'
                }];
            }
        };
    }])
;
