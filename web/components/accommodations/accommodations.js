/* global angular */
angular.module('ua5App')
    .directive('accommodations', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/accommodations/accommodations.html',
            link: function($scope, element, attrs) {}
        };
    }])
;
