var app = angular.module( 'customers',[ ] );

app.controller( "CustomerSearchController", 
                    [ '$scope', '$http', 
                          function( $scope,   $http ) {

    $scope.customers = [ ];
    var page = 0;

    $scope.search = function( searchTerm ) {
      
      if (searchTerm.length < 3) {
        return;
      }

      $http ({
                  method: 'GET',
                  url: './customers.json',
                  params: { "keywords": searchTerm, "page": page }
                }).
                then(function successCallback(response) {
                    $scope.customers = response.data;
                    $scope.status = response.status;
                }, 
                function errorCallback(response) {
                  $scope.status = response.status;
                  $scope.customers = response.data;
                });
    }

    $scope.previousPage = function() {
      if (page > 0) {
        page = page -1;
        $scope.search($scope.keywords);
      }
    }

    $scope.nextPage = function() {
        page = page +1;
        $scope.search($scope.keywords);
    }
  }
]);