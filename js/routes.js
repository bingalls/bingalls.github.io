angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })

    .state('menu.resume', {
      url: '/resume',
      views: {
        'side-menu21': {
          templateUrl: 'templates/resume.html',
          controller: 'resumeCtrl'
        }
      }
    })

    .state('menu.portfolio', {
      url: '/portfolio',
      views: {
        'side-menu21': {
          templateUrl: 'templates/portfolio.html',
          controller: 'portfolioCtrl'
        }
      }
    })

    .state('menu.phpCode', {
      url: '/phpCode',
      views: {
        'side-menu21': {
          templateUrl: 'templates/phpCode.html',
          controller: 'phpCodeCtrl'
        }
      }
    })
        
    .state('menu.javaScriptCode', {
      url: '/jsCode',
      views: {
        'side-menu21': {
          templateUrl: 'templates/javaScriptCode.html',
          controller: 'javaScriptCodeCtrl'
        }
      }
    })
        
    .state('menu.sourceCode', {
      url: '/sourceCode',
      views: {
        'side-menu21': {
          templateUrl: 'templates/sourceCode.html',
          controller: 'sourceCodeCtrl'
        }
      }
    })

    .state('menu.bruceIngalls', {
      url: '/bruceIngalls',
      views: {
        'side-menu21': {
          templateUrl: 'templates/bruceIngalls.html',
          controller: 'bruceIngallsCtrl'
        }
      }
    })
        
    .state('menu.text', {
      url: '/text',
      views: {
        'side-menu21': {
          templateUrl: 'templates/text.html',
          controller: 'textCtrl'
        }
      }
    })

    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21/resume');

});