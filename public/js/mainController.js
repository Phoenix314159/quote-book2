angular.module('quoteBook').controller('mainController', function ($scope, mainService) {

    mainService.getQuotes().then(result => {

        $scope.quotes = result.data;

    });

    $scope.addQuote = function() {

        mainService.addQuote($scope.a, $scope.b);

    }
});