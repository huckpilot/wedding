/* global angular */
angular.module('ua5App')
    .directive('place', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/place/place.html',
            $scope: {
                placeData: '='
            },
            link: function($scope, element, attrs) {
                console.log($scope.city);
            }
        };
    }])
;
