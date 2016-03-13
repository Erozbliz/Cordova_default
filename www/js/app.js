/* Angular */
document.addEventListener('deviceready', function(){
	//Au lancement de l'application
}, false);



(function(){                                                                     

    var app = angular.module('app', ['ngRoute']);


app.config(function($routeProvider){
	$routerProvider
		.when('/home', {templateUrl: 'partials/home.html'})
		.when('/about', {templateUrl: 'partials/about.html'})
		.otherwise({redirectTo: '/home'})
})
                                 


})();  


/*
app.config(['$routeProvider', function ($routeProvider) { 
	$routerProvider
		.when('/home', {templateUrl: 'partials/home.html'})
		.when('/about', {templateUrl: 'partials/about.html'})
		.otherwise({redirectTo: '/home'})
})*/