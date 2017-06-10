/* global angular */
angular.module('ua5App')
    .directive('accommodations', [function() {
        return {
            restrict: 'A',
            templateUrl: 'components/accommodations/accommodations.html',
            link: function($scope, element, attrs) {
                $scope.open = function() {
                    this.openBool = !this.openBool;
                };

                $scope.cities = [
                    {
                        title: 'Oakland',
                        hotels: [
                            {
                                name: 'Clarion Hotel Downtown Oakland City Center',
                                location: 'Downtown Oakland',
                                price: '$200',
                                url: ''
                            },
                            {
                                name: 'Courtyard Downtown Oakland',
                                location: 'Downtown Oakland',
                                price: '$250',
                                url: ''
                            },
                            {
                                name: 'Z Hotel Jack London Square',
                                location: 'Jack London Square, Oakland',
                                price: '$250',
                                url: ''
                            },
                            {
                                name: 'Jack London Inn',
                                location: 'Jack London Square, Oakland',
                                price: '$180',
                                url: ''
                            },
                            {
                                name: 'Waterfont Hotel',
                                location: 'Jack London Square, Oakland',
                                price: '$275',
                                url: ''
                            },
                            {
                                name: 'Americas Best Value Inn - Oakland / Lake Merritt',
                                location: 'Lake Merritt, Oakland',
                                price: '$170',
                                url: ''
                            }
                        ]
                    },
                    {
                        title: 'Oakland',
                        info: 'ewugiuewegfuw'
                    }
                ];
            }
        };
    }])
;
