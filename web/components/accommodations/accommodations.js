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
                        title: 'San Francisco',
                        airbnbsm: 'https://www.airbnb.com/s/San-Francisco/homes?adults=2&allow_override%5B%5D=&guests=2&s_tag=hnvnzkQ3',
                        airbnblg: 'https://www.airbnb.com/s/San-Francisco/homes?adults=4&allow_override%5B%5D=&guests=4&s_tag=fYYtwU98',
                        hotels: [
                            {
                                name: 'Sleep Over Sauce',
                                location: 'Hayes Valley, SF',
                                price: '$350',
                                url: 'http://www.sleepsf.com/'
                            },
                            {
                                name: 'Days Inn Civic Center',
                                location: 'Hayes Valley, SF',
                                price: '$300',
                                url: 'https://www.wyndhamhotels.com/days-inn/san-francisco-california/days-inn-san-francisco-downtown-civic-center-area/overview?CID=LC:DI::GGL:RIO:National:04535'
                            },
                            {
                                name: 'Hotel Kabuki',
                                location: 'Japantown, SF',
                                price: '$400',
                                url: 'http://www.jdvhotels.com/hotels/california/san-francisco-hotels/hotel-kabuki/?utm_source=local&utm_campaign=gmb&utm_medium=organic'
                            },
                            {
                                name: 'Phoenix Hotel',
                                location: 'Tenderloin, SF',
                                price: '$325',
                                url: 'http://www.phoenixsf.com/'
                            },
                            {
                                name: 'Beck\'s Motor Lodge',
                                location: 'The Castro, SF',
                                price: '$300',
                                url: 'http://becksmotorlodge.com/'
                            },
                            {
                                name: 'Twin Peaks Hotel',
                                location: 'The Castro, SF',
                                price: '$250',
                                url: 'https://www.booking.com/hotel/us/twin-peaks.html'
                            },
                            {
                                name: 'Willows Inn B&B',
                                location: 'The Castro, SF',
                                price: '$225',
                                url: 'https://www.willowssf.com/'
                            },
                            {
                                name: 'Hotel Del Sol',
                                location: 'The Marina, SF',
                                price: '$400',
                                url: 'http://www.jdvhotels.com/hotels/california/san-francisco-hotels/hotel-del-sol/?utm_source=local&utm_campaign=gmb&utm_medium=organic'
                            },
                            {
                                name: 'Travelodge SF Central',
                                location: 'The Mission, SF',
                                price: '$250',
                                url: 'https://www.wyndhamhotels.com/travelodge/san-francisco-california/san-francisco-central-travelodge/overview?CID=LC:TL::GGL:RIO:National:07015'
                            },
                            {
                                name: 'Stanyan Park Hotel',
                                location: 'Uper Haight, SF',
                                price: '$415',
                                url: 'http://www.stanyanpark.com/'
                            }
                        ]
                    },
                    {
                        title: 'Oakland',
                        airbnbsm: 'https://www.airbnb.com/s/Oakland--CA--United-States/homes?adults=2&allow_override%5B%5D=&guests=2&s_tag=X1CfLnR5',
                        airbnblg: 'https://www.airbnb.com/s/Oakland--CA--United-States/homes?adults=4&allow_override%5B%5D=&guests=4&s_tag=OY-k4ugO',
                        hotels: [
                            {
                                name: 'Clarion Hotel Downtown Oakland City Center',
                                location: 'Downtown Oakland',
                                price: '$200',
                                url: 'https://www.choicehotels.com/california/oakland/clarion-hotels/cab03?source=gyxt'
                            },
                            {
                                name: 'Courtyard Downtown Oakland',
                                location: 'Downtown Oakland',
                                price: '$250',
                                url: 'http://www.marriott.com/hotels/travel/oakcd-courtyard-oakland-downtown/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2'
                            },
                            {
                                name: 'Z Hotel Jack London Square',
                                location: 'Jack London Square, Oakland',
                                price: '$250',
                                url: 'http://www.zhoteljacklondonsquare.com/'
                            },
                            {
                                name: 'Jack London Inn',
                                location: 'Jack London Square, Oakland',
                                price: '$180',
                                url: 'http://www.jacklondoninnoakland.com/'
                            },
                            {
                                name: 'Waterfont Hotel',
                                location: 'Jack London Square, Oakland',
                                price: '$275',
                                url: 'http://www.jdvhotels.com/hotels/california/san-francisco-hotels/waterfront-hotel/?utm_source=local&utm_campaign=gmb&utm_medium=organic'
                            },
                            {
                                name: 'Americas Best Value Inn - Oakland / Lake Merritt',
                                location: 'Lake Merritt, Oakland',
                                price: '$170',
                                url: 'https://www.redlion.com/oakland-lake-merritt'
                            }
                        ]
                    }
                ];
            }
        };
    }])
;
