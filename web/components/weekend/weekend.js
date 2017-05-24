/* global angular */
angular.module('ua5App')
    .directive('weekend', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/weekend/weekend.html',
            link: function($scope, element, attrs) {}
        };
    }])
;
