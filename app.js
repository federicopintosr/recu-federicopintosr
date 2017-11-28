const app = angular.module('contactosApp', ['ui.router'])

app.controller('contactoController',ContactoController)
app.config(routes)
