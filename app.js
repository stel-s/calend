
    app = angular.module('clndrApp', ['tien.clndr','firebase']);
    app.controller('DemoCtrl', function ($scope,$firebaseObject) {

      var ref = new Firebase("https://talkmedirty.firebaseio.com/days/");

      $scope.data = $firebaseObject(ref.child('April'));
      $scope.profile = $firebaseObject(ref.child('April'));
      // $scope.data.$loaded()
      //   .then(function(data) {
      //       console.log(data.April);
      //   })
      //   .catch(function(error) {
      //     console.error("Error:", error);
      // });
      $(document).ready(function(){
          $('[data-toggle="tooltip"]').tooltip();
      });
      $scope.select= function(item) {
              $scope.selected = item;

       };
       $scope.isActive = function(item) {

              return $scope.selected === item;
       };
      $scope.data.April = {
          events:{
            Monday:[{date:new Date('2016-04-21'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-04-21'),time: "12:00", booked:true,timestamp:""}],
            TuesDay:[{date:new Date('2016-04-22'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-04-22'),time: "12:00", booked:true,timestamp:""}],
            WednesDay:[{date:new Date('2016-04-23'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-04-23'),time: "12:00", booked:true,timestamp:""}],
            Thursday:[{date:new Date('2016-04-24'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-04-24'),time: "12:00", booked:true,timestamp:""},]

        }
      };
      $scope.data.April.events.Monday[0]
      $scope.data.$save().then(function(re){
        console.log("ere",re.key())
      });
      var s = [];
      _.each($scope.data.April.events, function(elem){
        console.log(elem)
        _.each(elem,function(el){

          s.push({date:el.date,time:el.time,available:true});
        })
      })

      $scope.events = s;

      $scope.options = {
          weekOffset: 1,
          daysOfTheWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          constraints: {
                startDate: moment().subtract(1, 'months').format('YYYY-MM-16'),
                endDate: moment().add(2, 'months').format('YYYY-MM-16')
            }
        };
        

        $scope.showDetails=false;
        $scope.submit = function (){
            var x = $scope.event ;
            console.log(x);
            $scope.data.$save();
          //   console.log($scope.event);
            console.log($scope.event)
          

        };
        $scope.dayAvailable = function (day) {
        $scope.availableDay = false;
          _.each(day.events,function(elem){
              if(elem.available === true){
                $scope.availableDay = true;
              }

          });
            return $scope.availableDay;
        };
        $scope.selectEvent = function (event) {
          $scope.showDetails = true;
          // event.available= false;
          $scope.event = event;
        };
        $scope.showEvents = function(events) {
          $scope.localData = {showEvents : true};
          $scope.ti = events;
        };
    });
