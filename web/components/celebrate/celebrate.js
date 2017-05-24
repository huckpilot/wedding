/* global angular */
angular.module('ua5App')
    .directive('celebrate', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/celebrate/celebrate.html',
            link: function($scope, element, attrs) {}
        };
    }])
;
