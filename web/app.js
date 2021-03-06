/* global angular, $ */
// Create templates module for ngTemplates to attach to
angular.module('ua5Templates', []);
// start module declaration
angular.module('ua5App.home', []);
// end module declaration
// Create parent module for application
angular.module('ua5App', [
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngAnimate',
    'ua5Templates',
    'ui.router',
    'angulartics',
    'angulartics.google.analytics',
    'angular-loading-bar',
    'angularModalService',
    'ngMeta',
    // start add states as app dependency
    'ua5App.home'
    // end add states as app dependency
])
    .constant('BREAKPOINTS', {
        MOBILE: 375,
        PHABLET: 767,
        TABLET: 991,
        LAPTOP: 1199,
        DESKTOP: 1430
    })
    .config(['$analyticsProvider', '$locationProvider', 'ngMetaProvider', function($analyticsProvider, $locationProvider, ngMetaProvider) {
        $locationProvider.html5Mode(true);
        // Prevents bounce rate of 0.01
        $analyticsProvider.firstPageview(false);
        ngMetaProvider.useTitleSuffix(true);
        ngMetaProvider.setDefaultTitleSuffix(' | Site Name');
        ngMetaProvider.setDefaultTitle('Page');
        ngMetaProvider.setDefaultTag('url', 'URL');
        ngMetaProvider.setDefaultTag('description', 'Site description');
        ngMetaProvider.setDefaultTag('image', 'URL');
    }])
    .run(['ngMeta', function(ngMeta) {
        ngMeta.init();
    }])
    .directive('app', ['$rootScope', function($rootScope) {
        return {
            link: function($scope, $element, $attrs) {
                var $$window;
                $$window = $(window);
                $$window.on('resize', function() {
                    $rootScope.$broadcast('app:resized');
                });
                $$window.on('click', function(e) {
                    $rootScope.$broadcast('app:clicked', e.target);
                });
                $$window.on('scroll', function(e) {
                    $rootScope.$broadcast('app:scrolled');
                });
                $$window.on('keydown', function(e) {
                    var ESCAPE = 27;
                    var keyCode;
                    keyCode = e.keyCode;
                    // Escape key
                    if (keyCode === ESCAPE) {
                        $rootScope.$broadcast('app:escape:pressed');
                    }
                });
                $rootScope.$on('$stateChangeSuccess', function(e, toState, toStateParams, fromState) {
                    var regex = /^([^.]*).*/;
                    var toStateName = toState.name;
                    var fromStateName = fromState.name;
                    var toStateParent = toStateName.match(regex)[1];
                    var fromStateParent = fromStateName.match(regex)[1];
                    $rootScope.pageClass = 'page-' + toState.name.replace('.', '-');
                    // If going directly to child from non-parent, just show
                    // child.
                    if (fromState !== toStateParent) {
                        $('[ui-view] [ui-view]').css({
                            opacity: 1,
                            position: 'static'
                        });
                    }
                });
            }
        };
    }])
;
