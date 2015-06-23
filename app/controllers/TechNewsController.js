(function() {
    'use strict';

    /* Controllers */

    angular
        .module('techNewsController')
        .controller('TechNewsController', ['$rootScope', '$scope', '$http', newsController]);

    function newsController($rootScope, $scope, $http) {

        // de view heeft ook toegang tot het $scope object
        // $scope is het centrale object tussen je view (HTML) en je controller
        $scope.selectedNews = "";

        // we geven het scope object een array met namen
        $http.get("http://rickgroen.com/grandfinale/get_items.php").then(function(result){
            $scope.news = result.data;
        });
        $scope.stations = ["Mike", "Lien", "Steven", "Isabelle", "Rick"];

        // de HTML mag bij deze functie omdat onze HTML ook bij $scope mag
        $scope.selectNews = function(news){
            $scope.selectedNews = news;
        }

    }

})();