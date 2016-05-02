
    app = angular.module('clndrApp', ['tien.clndr','firebase']);
    app.controller('DemoCtrl', function ($scope,$firebaseObject) {

      var ref = new Firebase("https://talkmedirty.firebaseio.com/days/");
        var ref1= new Firebase("https://talkmedirty.firebaseio.com/calendar/");
        $scope.data=  $firebaseObject(ref.child('April'));
      $scope.data2 = $firebaseObject(ref1.child('May'));
        $scope.data2.calendar = [{
            date: new Date('2016-05-01').getTime(),
            bookings: [{
                time: "17:00",
                booked: false,
                bookingInfo: {
                    id: 3432324,
                    name: "sdsds",
                    email: "stad.@grfgr.gr",
                    phone: "453543543"
                },
            },
                {
                    time: "21:00",
                    booked: false,
                    bookingInfo: {
                        id: 22,
                        name: "sdsds",
                        email: "stad.@grfgr.gr",
                        phone: "453543543"
                    }
                },

                {
                    time: "01:00",
                    booked: false,
                    bookingInfo: {
                        id: 11,
                        name: "sdsds",
                        email: "stad.@grfgr.gr",
                        phone: "453543543"
                    }
                }]
            },
            {
                date:  new Date('2016-05-03').getTime(),
                bookings: [{
                    time: "17:00",
                    booked: true,
                    bookingInfo: {
                        id: 3432324,
                        name: "sdsds",
                        email: "stad.@grfgr.gr",
                        phone: "453543543"
                    },
                },
                    {
                    time: "21:00",
                    booked: true,
                    bookingInfo: {
                        id: 22,
                        name: "sdsds",
                        email: "stad.@grfgr.gr",
                        phone: "453543543"
                    }
                },

                    {
                    time: "01:00",
                    booked: true,
                    bookingInfo: {
                        id: 11,
                        name: "sdsds",
                        email: "stad.@grfgr.gr",
                        phone: "453543543"
                    }
                }]
            },
            {
                date:  new Date('2016-05-02').getTime(),
                bookings: [{
                    time: "17:00",
                    booked: true,
                    bookingInfo: {
                        id: 3432324,
                        name: "sdsds",
                        email: "stad.@grfgr.gr",
                        phone: "453543543"
                    },
                },
                    {
                        time: "21:00",
                        booked: false,
                        bookingInfo: {
                            id: 22,
                            name: "sdsds",
                            email: "stad.@grfgr.gr",
                            phone: "453543543"
                        }
                    },

                    {
                        time: "01:00",
                        booked: true,
                        bookingInfo: {
                            id: 11,
                            name: "sdsds",
                            email: "stad.@grfgr.gr",
                            phone: "453543543"
                        }
                    }]
            }

        ];
        $scope.availableEvents = function(day){
            console.log("day",day)
            var count = day.events.length;
            _.each(day.events,function(elem){
                if(elem.available == false) {
                    count = count -1 ;
                }
            })
            return count;
            //if(day.events.length > 0){
            //    _.each(day.events,function(event){
            //        if(event.available === false){
            //            count = count - 1;
            //        }
            //    })


        }
        var s = [];
        _.each( $scope.data2.calendar, function(elem){
            //console.log("fisr:",elem)
            _.each(elem.bookings,function(el){
                var vc = {date : new Date(elem.date), time : el.time, available : el.booked};

                s.push(vc );
            })
        })
$scope.data2.$save();

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

      //$scope.data.April = {
      //    events:{
      //      Monday:[{date:new Date('2016-05-21'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-05-21'),time: "12:00", booked:true,timestamp:""}],
      //      TuesDay:[{date:new Date('2016-05-22'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-05-22'),time: "12:00", booked:true,timestamp:""}],
      //      WednesDay:[{date:new Date('2016-05-23'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-05-23'),time: "12:00", booked:true,timestamp:""}],
      //      Thursday:[{date:new Date('2016-05-24'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-05-24'),time: "12:00", booked:true,timestamp:""},]
      //
      //  }
      //};
      //
      //$scope.data.April.events.Monday[0]
      //$scope.data.$save().then(function(re){
      //  console.log("ere",re.key())
      //});


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
            //console.log(x);
            $scope.data.$save();
          //   console.log($scope.event);
            console.log($scope.event)
          

        };
        $scope.event = {};
        $scope.isSelectedEvent = function (event) {
                return $scope.event === event ? 'active' : ""
        }
        $scope.dayAvailable = function (day) {
            $scope.availableDay = false;
            //console.log(day)
              _.each(day.events,function(elem){
                  console.log(elem)
                  if(elem.available === true){
                    $scope.availableDay = true;
                  }

              });
                return $scope.availableDay;
        };
        $scope.eventSelected = false;
        $scope.selectEvent = function (event) {
            $scope.eventSelected = event;
          $scope.showDetails = true;
          // event.available= false;
          $scope.event = event;
            console.log('event',$scope.event)
        };
        $scope.showEvents = function(events) {
          $scope.localData = {showEvents : true};
          $scope.ti = events;

        };
    });
