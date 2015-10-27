'use strict';

/**
 * @ngdoc function
 * @name matchUpApp.controller:SportsCtrl
 * @description
 * # SportsCtrl
 * Controller of the matchUpApp
 */
angular.module('matchUpApp')
  .controller('HistoryCtrl', ["$scope", function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.myHistoricGames = [{
        name: "Marvin",
        skill: "1",
        image: "https://lh3.googleusercontent.com/RK3I9epznvqjaAcHHob6ODH03_FkDxhy9xTq6IUh632K-FyUyJaiXROvkfTpGMe-BKhxmoR2WQj8K1XGk39AXIOe8jKa16pSEjql3i86amO3a24iHIhGqowf_0HxwfeNQEOibSY9Y3IXXdJPgParavKDrKE90Op161AHzMXUGT8OjAT7tKCDTXROninCvOeXRVqeGpCh-u6JY_e0buf5BR2vAYj3Db4Vt43Hlsn7bLVJt29RVLK3NuyJlCSi96gEXRP2Nh6EUhu_Q7ogZb3Aszp6j-wRFdjXK7lMGfzRbYl4WHD_mY4qD_9ID_CUFTgqQpZh8_151RpNUKhI2v7Kd2H_BkLJeYrG32fXL2rQGjQaQzbpXy0GFI6qy5Ziii8V35RRX_0h9wWO11qpBUxXe0iyQALxrl2CMr0-MhcHjW6niKDozI1PzKSFDSQqCFVVIT98BU7bMU1RA5jPWqLhMBBgag2GB1r607tcFgEloCQZATefoDMDYY8hLPSPWdZ5INTAzfQ6ZDAn_E8paSJva5FKxnHZOAcojV3oWRO8CWQ=w2302-h1728-no"
    }, {
        name: "Thomas",
        skill: "3",
        image: "https://lh3.googleusercontent.com/sMvlQLoIjDhT6jJeDsgGSZz06JRMT6LWGkr49ffK_FT4XDlGvTaqGoe9zBzVb8xG3QpKlmQ7tcFMAnDi1KZdCsIMKFTQUiMUpMI4kMiXKUe7-xsLzwvigJV9NPSXuiZC2FrGlrMfcYe7EqoSqb9agtjsVzoQv87p4z5lJEnuccofBBZe9PivbTLEtHsbs9YdkmBJilX4kl2JI6yppjKGxpJq3M3LOLh3drpHKBIxcD8dQ1lHCFqA1LZKTD5wZzt2ILjtljIwmr7_oADptAM7u-zQCoqbSA0Ps71h9NI1PSaBEttaD9HJMNLQiLTvUXP8PVAXfT_pqyF0eIksYtQmMKyTVDricSlSrUH-edLRf8Din7txr291Bgvdr7OaNePZkrmYtsVB-sH-IVVwgDuSCqxCq_paqtReoyKdmsmRLnKPPWPfUr3rPQ13xec5-085TVqAZfhyrsuOCbf14gY4vp0rch964YzG1FN3QhWUTm_J9sEgi4Pnd7VW7p4TSPWz6DwqG0z1hhoZ4d6yNmwcmQYuCfpB6W2DHtpbaGHAjio=w2302-h1728-no"
    }, {
        name: "Stephan",
        skill: "5",
        image: "https://lh3.googleusercontent.com/DOZwAxSj8nBCU24ncAuW-Yxs6FW5WmvPgv6xW4vpx5cEAweMSobksOSeRaO-vlf1SCdxF_p3o6pe4bupNf3iDYaL-XQoXh1h1DUdxDoRiKG2sZgiKPgGOJz3-8RBN-_KN25qjBcGU44U4sifvmMUBbj3LaHrOwUESf8Ij4Dx5ELwssyqdNF-1rXc6B63jDO8hlBdrwgWyYWwrJNv77wAXYiPdVIPxT0ZRFLPV6V4vZA7w7-E3oNtEkkinZpO4HgLuBTyLBe-hY7Iq8UvleTLPMNYDQ2mKJYnPgal3WJhSu7B2FrooJzBasNcCDiypC3F64ksOxq9-xvLPdeFU1Ob8bZwH8X81_7MjTz7uF_6t_8MsQl70LEcpOrAgHviCQZ9ht3pinj1wfoczmFyaPUEcXk9DS3-VkxIw-yhk5G6TkPXMIO-tsHnuG4OmVI7Zc9PeB3WHxSHd8EvKVI5Gzu4fuYz4zkQ4oNBPsFxrYeVspksaogVEu1U_d5Rc9XUgvwwqI1BIaU9TSCphfBF5tGFgtdqQr8X6DS_hIESvJvZ1aU=w2302-h1728-no"
    }];
    
    $scope.addSport = function(){
        $scope.mySports.push({})
    }
    
  }]);