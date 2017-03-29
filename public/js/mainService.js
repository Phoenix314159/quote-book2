angular.module('quoteBook').service('mainService', function ($http) {

    this.getQuotes = () =>{
        return $http({
            method: 'GET',
            url: 'http://localhost:3050/quotes'
        })
    }
    this.addQuote = (text, author) => {
      return $http({
          method: 'POST',
          data:({text: text, author: author}),
          url: 'http://localhost:3050/quotes/post'
      })
    }

});