/* global angular */
angular.module('ua5App')
    .directive('transportation', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/transportation/transportation.html',
            link: function($scope, element, attrs) {}
        };
    }])
;
