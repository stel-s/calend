

app = angular.module('clndrApp', ['tien.clndr', 'firebase']);

app.controller('DemoCtrl', function($scope, $firebaseObject, $firebaseArray) {
    //reference to FIREFASE 
    
    var ref = new Firebase("https://talkmedirty.firebaseio.com/days/");
    var ref1 = new Firebase("https://talkmedirty.firebaseio.com/calendar1/");
    
    /*
    we go one lvl deeper in object with child see object at console output 
    see firebase documentation regarding firebase arrays and objects
    */
    $scope.data = $firebaseObject(ref.child('April'));
    $scope.data2 = $firebaseArray(ref1.child('July'))
    
    
    
   

    // $scope.data2.calendar = [{
    // date: new Date('2016-07-01').getTime(),
    // bookings: [{
    //     time: "17:00",
    //     booked: true,
    //     bookingInfo: {
    //         dateTime: null,
    //         id: 1,
    //         name: "",
    //         surname:"",
    //         email: "",
    //         phone: ""
    //     },
    //     },
    //         {
    //             time: "21:00",
    //             booked: false,
    //             bookingInfo: {
    //                 id: 2,
    //                 name: "sdsds",
    //                 surname:"korompos",
    //                 email: "stad.@grfgr.gr",
    //                 phone: "453543543",
    //                 dateBooked: Firebase.ServerValue.TIMESTAMP
    //             }
    //         },

    //         {
    //             time: "01:00",
    //             booked: false,
    //             bookingInfo: {
    //                 dateTime:  new Date(2016, 04, 01, 17, 00).getTime(),
    //                 id: 3,
    //                 name: "sdsds",
    //                 surname:"korompos",
    //                 email: "stad.@grfgr.gr",
    //                 phone: "453543543"
    //             }
    //         }]
    //     },
    //     {
    //         date:  new Date('2016-05-03').getTime(),
    //         bookings: [{
    //             dateTime:  new Date(2016, 04, 03, 17, 00).getTime(),
    //             time: "17:00",
    //             booked: true,
    //             bookingInfo: {
    //                 id: 4,
    //                 name: "sdsds",
    //                 surname:"korompos",
    //                 email: "stad.@grfgr.gr",
    //                 phone: "453543543"
    //             },
    //         },
    //             {
    //             dateTime:  new Date(2016, 04, 03, 17, 00).getTime(),
    //             time: "21:00",
    //             booked: true,
    //             bookingInfo: {
    //                 id: 5,
    //                 name: "sdsds",
    //                 surname:"korompos",
    //                 email: "stad.@grfgr.gr",
    //                 phone: "453543543"
    //             }
    //         },

    //             {
    //             time: "01:00",
    //             booked: true,
    //             bookingInfo: {
    //                 id: 6,
    //                 name: "sdsds",
    //                 surname:"korompos",
    //                 email: "stad.@grfgr.gr",
    //                 phone: "453543543"
    //             }
    //         }]
    //     },
    //     {
    //         date:  new Date('2016-05-02').getTime(),
    //         bookings: [{
    //             dateTime:  new Date(2016, 04, 02, 17, 00).getTime(),
    //             time: "17:00",
    //             booked: true,
    //             bookingInfo: {
    //                 id: 7,
    //                 name: "sdsds",
    //                 surname:"korompos",
    //                 email: "stad.@grfgr.gr",
    //                 phone: "453543543"
    //             },
    //         },
    //             {
    //                 dateTime:  new Date(2016, 04, 02, 21, 00).getTime(),
    //                 time: "21:00",
    //                 booked: false,
    //                 bookingInfo: {
    //                     id: 8,
    //                     name: "sdsds",
    //                     surname:"korompos",
    //                     email: "stad.@grfgr.gr",
    //                     phone: "453543543"
    //                 }
    //             },
    //             {
    //                 dateTime:  new Date(2016, 05, 02, 21, 00).getTime(),
    //                 time: "21:00",
    //                 booked: false,
    //                 bookingInfo: {
    //                     id: 8,
    //                     name: "sdsds",
    //                     surname:"korompos",
    //                     email: "stad.@grfgr.gr",
    //                     phone: "453543543"
    //                 }
    //             },
    //             {
    //                 dateTime:  new Date(2016, 04, 02, 01, 00).getTime(),
    //                 time: "01:00",
    //                 booked: true,
    //                 bookingInfo: {
    //                     id: 9,
    //                     name: "sdsds",
    //                     surname:"korompos",
    //                     email: "stad.@grfgr.gr",
    //                     phone: "453543543"
    //                 }
    //             },
    //              {
    //                 dateTime:  new Date(2016, 05, 02, 01, 00).getTime(),
    //                 time: "01:00",
    //                 booked: true,
    //                 bookingInfo: {
    //                     id: 9,
    //                     name: "sdsds",
    //                     surname:"korompos",
    //                     email: "stad.@grfgr.gr",
    //                     phone: "453543543"
    //                 }
    //             }
    //             ]
    //     }

    // ]


    // $scope.data2.$add({
    //     date: new Date('2016-07-01').getTime(),
    //     bookings: [{
    //         time: "17:00",
    //         booked: false,
    //         bookingInfo: {
    //             dateTime: null,
    //             id: 1,
    //             name: "",
    //             surname: "",
    //             email: "",
    //             phone: ""
    //         }
    //     },
    //     ]

    // });
    // var i =0
    // var now = new Date();
    // var daysOfYear = [];
    // for (var d = new Date('2016-07-01'); d <= new Date('2016-08-01'); d.setDate(d.getDate() + 1)) 
    // {
    //     daysOfYear.push(new Date(d));
    //       $scope.data2.$add({
    //         date: new Date(d).getTime(),
    //         bookings: [{
    //             time: "17:00",
    //             booked: false,
    //             bookingInfo: {
    //                 dateTime: null,
    //                 id: 1,
    //                 name: "",
    //                 surname: "",
    //                 email: "",
    //                 phone: ""
    //             }
    //         },
    //         ]
    
    //     });
        
    // }

  //Temp array to hold events 
  var events = [];
  
  /**we resolve the data*/
    $scope.data2.$loaded()
      .then(function(x) {
       console.log("READY")
       /*
       we map data from firebase array to our events array to be fed in clndr calendar library
       _.each see underscore js used for iteration
       **/
      _.each($scope.data2, function(elem) {
            _.each(elem.bookings, function(el) {
                var vc = {
                    date: new Date(elem.date),
                    time: el.time,
                    available: !el.booked,
                    dateTime: el.dateTime,
                    bookingInfo: el.bookingInfo
                };
            
                events.push(vc);
                $scope.events = events;
            })
           
        });
      })
      .catch(function(error) {
        console.log("Error:", error);
      });

    $scope.data2.$save();
    
   
    
     
    /**this function in run from the html template i.e index.html */
    $scope.availableEvents = function(day) {
        //console.log("day",day)
        var count = day.events.length;
        _.each(day.events, function(elem) {
            if (elem.available == false) {
                count = count - 1;
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
    
  
    
    console.log("Events",$scope.events)
    
    /*function use on ng-click in template ie. index.html*/
    $scope.select = function(item) {
        $scope.event.showDetails = false;
        $scope.event.bookingDetails = false;
        $scope.selected = item;
    }
    
    $scope.isActive = function(item) {
        return $scope.selected === item;
    }

    /*MOCK DATA */
    // $scope.data.April = {
    //     events:{
    //      Monday:[{date:new Date('2016-05-21'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-05-21'),time: "12:00", booked:true,timestamp:""}],
    //      TuesDay:[{date:new Date('2016-05-22'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-05-22'),time: "12:00", booked:true,timestamp:""}],
    //      WednesDay:[{date:new Date('2016-05-23'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-05-23'),time: "12:00", booked:true,timestamp:""}],
    //      Thursday:[{date:new Date('2016-05-24'),time: "11:00", booked:false,timestamp:""}, {date:new Date('2016-05-24'),time: "12:00", booked:true,timestamp:""},]
    
    //  }
    // };
    

    
   
    
    $scope.options = {
        weekOffset: 1,
        daysOfTheWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        constraints: {
            startDate: moment().subtract(1, 'months').format('YYYY-MM-16'),
            endDate: moment().add(2, 'months').format('YYYY-MM-16')
        }
    }

    $scope.showDetails = false;
    $scope.submit = function() {
       
    };
    $scope.event = {};
    $scope.isSelectedEvent = function(event) {
        if (event.available == false) {
            return;
        }
        return $scope.event === event ? 'active' : ""
    }
    $scope.dayAvailable = function(day) {
       
        //$scope.availableDay = false;
        //console.log(day)
        _.each(day.events, function(elem) {
            //console.log(elem)
            if (elem.available === true) {
                $scope.availableDay = true;
            }
        });
        return $scope.availableDay;
    }

    $scope.eventSelected = false;
    $scope.selectEvent = function(event) {
        console.log($scope.showBookingDetails)
        if (event.available == false) {
            event.bookingVisible = !event.bookingVisible;
            $scope.event = event;
            $scope.showDetails = false;
            event.showDetails = false;
        }
        else {
            event.bookingVisible = false;
            $scope.showDetails = true;
            event.showDetails = !event.showDetails;
            //$scope.eventSelected = event;
            // event.available= false;
            $scope.event = event;
        }

    }
    
    $scope.showEvents = function(events) {
        $scope.localData = {
            showEvents: true
        }
        $scope.ti = events;
    }
})