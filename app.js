
    app = angular.module('clndrApp', ['tien.clndr','firebase']);
    app.controller('DemoCtrl', function ($scope,$firebaseObject) {

      var ref = new Firebase("https://talkmedirty.firebaseio.com/days/");
        var ref1= new Firebase("https://talkmedirty.firebaseio.com/calendar/");
        $scope.data=  $firebaseObject(ref.child('April'));
      $scope.data2 = $firebaseObject(ref1.child('May'));
        console.log($scope.data2)

        $scope.data2.calendar = [{
            date: new Date('2016-05-01').getTime(),
            bookings: [{
                time: "17:00",
                booked: true,
                bookingInfo: {
                    dateTime: null,
                    id: 1,
                    name: "",
                    surname:"",
                    email: "",
                    phone: ""
                },
            },
                {
                    time: "21:00",
                    booked: false,
                    bookingInfo: {
                        id: 2,
                        name: "sdsds",
                        surname:"korompos",
                        email: "stad.@grfgr.gr",
                        phone: "453543543",
                        dateBooked: Firebase.ServerValue.TIMESTAMP
                    }
                },

                {
                    time: "01:00",
                    booked: false,
                    bookingInfo: {
                        dateTime:  new Date(2016, 04, 01, 17, 00).getTime(),
                        id: 3,
                        name: "sdsds",
                        surname:"korompos",
                        email: "stad.@grfgr.gr",
                        phone: "453543543"
                    }
                }]
            },
            {
                date:  new Date('2016-05-03').getTime(),
                bookings: [{
                    dateTime:  new Date(2016, 04, 03, 17, 00).getTime(),
                    time: "17:00",
                    booked: true,
                    bookingInfo: {
                        id: 4,
                        name: "sdsds",
                        surname:"korompos",
                        email: "stad.@grfgr.gr",
                        phone: "453543543"
                    },
                },
                    {
                    dateTime:  new Date(2016, 04, 03, 17, 00).getTime(),
                    time: "21:00",
                    booked: true,
                    bookingInfo: {
                        id: 5,
                        name: "sdsds",
                        surname:"korompos",
                        email: "stad.@grfgr.gr",
                        phone: "453543543"
                    }
                },

                    {
                    time: "01:00",
                    booked: true,
                    bookingInfo: {
                        id: 6,
                        name: "sdsds",
                        surname:"korompos",
                        email: "stad.@grfgr.gr",
                        phone: "453543543"
                    }
                }]
            },
            {
                date:  new Date('2016-05-02').getTime(),
                bookings: [{
                    dateTime:  new Date(2016, 04, 02, 17, 00).getTime(),
                    time: "17:00",
                    booked: true,
                    bookingInfo: {
                        id: 7,
                        name: "sdsds",
                        surname:"korompos",
                        email: "stad.@grfgr.gr",
                        phone: "453543543"
                    },
                },
                    {
                        dateTime:  new Date(2016, 04, 02, 21, 00).getTime(),
                        time: "21:00",
                        booked: false,
                        bookingInfo: {
                            id: 8,
                            name: "sdsds",
                            surname:"korompos",
                            email: "stad.@grfgr.gr",
                            phone: "453543543"
                        }
                    },

                    {
                        dateTime:  new Date(2016, 04, 02, 01, 00).getTime(),
                        time: "01:00",
                        booked: true,
                        bookingInfo: {
                            id: 9,
                            name: "sdsds",
                            surname:"korompos",
                            email: "stad.@grfgr.gr",
                            phone: "453543543"
                        }
                    }]
            }

        ];
        $scope.availableEvents = function(day){
            //console.log("day",day)
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
                var vc = {date : new Date(elem.date), time : el.time, available : el.booked,dateTime:el.dateTime,bookingInfo:el.bookingInfo};

                s.push(vc );
            })
        })
        //s = $scope.data2.calendar;
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
          $scope.event.showDetails = false;
          $scope.event.bookingDetails = false;
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
            var bookingInfo  =   {
                id: 8,
                name: "sdsds",
                surname:"korompos34343",
                email: "stad.@grfgr.gr",
                phone: "453543543111"
            };
            _.each($scope.data2.calendar,function(elem){
                console.log($scope.event.bookingInfo.id)
                _.each(elem.bookings,function(el){
                    console.log($scope.event.bookingInfo.id)
                    if(el.bookingInfo.id == $scope.event.bookingInfo.id){
                        el.bookingInfo = bookingInfo;
                        console.log(el.bookingInfo.id ,":FOUD")
                    }
                })
            })
            //console.log("find",_.findWhere($scope.data2.calendar,{id:$scope.event.bookingInfo.id}))
            console.log("Calkendaer",$scope.data2.calendar);
            $scope.data2.$save();

            console.log("event seleceted on scope " , $scope.event)

           //$scope.e {
           //     dateTime:  new Date(2016, 04, 02, 21, 00).getTime(),
           //         time: "21:00",
           //     booked: false,
           //     bookingInfo: {
           //     id: 22,
           //         name: "sdsds",
           //         surname:"korompos",
           //         email: "stad.@grfgr.gr",
           //         phone: "453543543"
           // }
           // },

        };
        $scope.event = {};
        $scope.isSelectedEvent = function (event) {
            if(event.available == false) {


                return;}
                return $scope.event === event ? 'active' : ""
        }
        $scope.dayAvailable = function (day) {
            $scope.availableDay = false;
            //console.log(day)
              _.each(day.events,function(elem){
                  //console.log(elem)
                  if(elem.available === true){
                    $scope.availableDay = true;
                  }

              });
                return $scope.availableDay;
        };

        $scope.eventSelected = false;
        $scope.selectEvent = function (event) {
            console.log($scope.showBookingDetails)
            if(event.available == false){
               event.bookingVisible = !event.bookingVisible;
                $scope.event = event;
                $scope.showDetails = false;
                event.showDetails =false;


            } else {
                event.bookingVisible = false;
                $scope.showDetails = true;
                event.showDetails = !event.showDetails;
                //$scope.eventSelected = event;

                // event.available= false;
                $scope.event = event;
            }

        };
        $scope.showEvents = function(events) {
          $scope.localData = {showEvents : true};
          $scope.ti = events;

        };
    });
