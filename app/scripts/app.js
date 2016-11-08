'use strict';

angular.module('portfolioApp', ['ui.router','ngResource','jtt_instagram'])
.config(function($stateProvider, $urlRouterProvider) {
    
    
    $stateProvider
        .state('app', {
        url: '/',
        views: {
            'header': {
                templateUrl: 'views/header.html', 

            },
            'content': { 
                templateUrl: 'views/home.html' ,
                controller:'IndexCtrl'
            },
            'footer': { 
                templateUrl: 'views/footer.html',
            }
        }
        
    })
        .state('app.about', {
        url: 'about',
        views: {
            'content@': { 
                templateUrl: 'views/about.html',
                controller:'AboutCtrl'
                                
            }
        }
        
    })
        .state('app.portfolio', {
        url: 'portfolio',
        views: {
            'content@': { 
                templateUrl: 'views/portfolio.html',
                controller:'PortfolioCtrl'
            }
        }
        
    })
    .state('app.resume', {
        url: 'resume',
        views: {
            'content@': { 
                templateUrl: 'views/resume.html',
                controller:'ResumeCtrl'
            }
        }
        
    })
    .state('app.login', {
        url: 'project',
        views: {
            'content@': { 
                templateUrl: 'views/project.html' 
            }
        }
        
    })
        .state('app.contact', {
        url: 'contact',
        views: {
            'content@': { 
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl'
            }        
        }
        
    });
    
    
    
    $urlRouterProvider.otherwise('/');
        
})
;






