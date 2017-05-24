/* global angular */
angular.module('ua5App')
    .directive('closing', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/closing/closing.html',
            link: function($scope, element, attrs) {}
        };
    }])
;
