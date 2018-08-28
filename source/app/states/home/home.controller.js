
'use strict';

angular

    .module('layout.home')

    .controller('homeController', function ( $scope, $log, fromRoot,toastr,getArticles ) {
        // inializing variable from the scope 
        var vm = $scope.vm = {
            //error toastr
            sayNo: function ( state ) {
                toastr.error('Sorry but this not implemented.');
            },
            articles:{},
        };
        getArticles.getNewsArticles(function(response){
            $scope.articles = response.data.articles;   
          });


    })

    //calling the web service
    .service('getArticles', function($http){
        this.getNewsArticles = function(callback){
       $http.get('https://newsapi.org/v2/everything?q=Apple&from=2018-08-27&sortBy=popularity&apiKey=30a8a1f614244af6a3195b094f61a554')
          .then(callback);
          
        };
      })






