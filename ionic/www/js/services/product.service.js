angular.module('deliveryApp.services')
    .factory('Product', ['$resource','appConfig',function($resource, appConfig){

        return $resource(appConfig.baseUrl + '/api/client/products',{}, {
            query:{
                isArray: false
            }
        });

    }]);