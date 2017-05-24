/* global angular */
angular.module('ua5App')
    .directive('gifts', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/gifts/gifts.html',
            link: function($scope, element, attrs) {}
        };
    }])
;
