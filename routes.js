var routes = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('holaMundo', {
      url: "/",
      templateUrl: "partials/hola_mundo.html",
      controller: "contactoController as ContactoController"
      
    })

  $urlRouterProvider.otherwise("/")

}