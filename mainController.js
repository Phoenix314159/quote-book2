angular.module('quoteBook').controller('mainController', function ($scope, mainService) {

    $scope.quotes = mainService.getQuotes();

    $scope.deleteMe = function (item) {

        mainService.deleteQuote(item);

    }
    $scope.addQuote = function() {

        mainService.addQuote($scope.a, $scope.b);

    }
});