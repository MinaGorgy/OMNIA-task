
'use strict';

angular
    /**
     * root controller
     */
    .module('(oapp).layout')

    .controller('layoutController', function ( $scope, toastr, user ) {

        var root = $scope.root = {
            user: user,
            sayNo: function ( state ) {
                toastr.error('Sorry but this not implemented.');
            }
        };

    });
