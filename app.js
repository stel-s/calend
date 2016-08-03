
/*
---
Preview Application: https://calemd-ssp13-1.c9users.io/
----
we setup an angular app with tien.clndr and firebase injected as dependencies to external libraries these are referenced in index.html 
*/
app = angular.module('clndrApp', ['tien.clndr', 'firebase']);

/*setup controller with dependencies as arguments */

app.controller('DemoCtrl', function($scope, $firebaseObject, $firebaseArray) {
    //options gia to clndr calendar directive
     $scope.options = {
        weekOffset: 1,
        daysOfTheWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        constraints: {
            startDate: moment().subtract(1, 'months').format('YYYY-MM-16'),
            endDate: moment().add(2, 'months').format('YYYY-MM-16')
        }
    };

    //reference to FIREFASE 
    var ref = new Firebase("https://talkmedirty.firebaseio.com/days/");
    var ref1 = new Firebase("https://talkmedirty.firebaseio.com/calendar1/");
    
    /*
    we go one lvl deeper in object with child see object at console output 
    see firebase documentation regarding firebase arrays and objects
    */
    $scope.data = $firebaseObject(ref.child('July'));
    $scope.data2 = $firebaseArray(ref1.child('July'))
    // var x = $scope.data2.$indexFor('-KKKYNlYm27R7TGd_jC6'); // returns location in the array
    function findById (fireArray, id ) {
        for(var i = 0; i < fireArray.length ; i++) { //ti trellla mou re  pano 
              if(fireArray[i].$id === id){
                  console.log("found",i)
                  return i;
              }
          }
    }

  /*Temp array to hold events */
  var events = [];
  /**we resolve the data*/
    $scope.data2.$loaded().then(function(x) {
        console.log("54",x)
        $scope.finished = true;
       /*
       we map data from firebase array to our events array to be fed in clndr calendar library
       _.each see underscore js used for iteration
       **/
      _.each($scope.data2, function(elem) {
            _.each(elem.bookings, function(el) {
                var mapObject = {
                        date: new Date(elem.date),
                        time: el.time,
                        available: !el.available,
                        dateTime: el.date,
                        bookingInfo: el.bookingInfo,
                        id : elem.$id
                    
                };
                events.push(mapObject);
                $scope.events = events;
            });
        });
      })
      .catch(function(error) {
        console.log("Error:", error);
      });

   /**this function in run from the html template i.e index.html */
    $scope.availableEvents = function(day) {
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
      $scope.event = {};
    /*function use on ng-click in template ie. index.html*/
    $scope.select = function(item) {
        $scope.event.showDetails = false
        $scope.event.bookingDetails = false
        $scope.selected = item
        
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

   
    
     
    $scope.submit = function(event) {
        //kalimera des edw 
        /*///PANOS 
            TO DO USE 
            findById () to find the index σε ποια θεση βρισκεται array το event poy paei na kanei book o typos  to event exei ena $id 
        */
        var index = findById( $scope.data2,event.id);
        event.available = false
        $scope.bookingInfo = angular.copy(event);
        console.log("event",event)
        
        var x = $scope.event;
        var bookingInfo = {
            booked:true,
            
            name: $scope.event.bookingInfo.name,
            surname:  $scope.event.bookingInfo.surname,
            email:  $scope.event.bookingInfo.email,
            phone:  $scope.event.bookingInfo.phone
        };
        
        $scope.data2[index].bookings[0].bookingInfo = bookingInfo;
         $scope.data2[index].bookings[0].bookingInfo.booked = true;
        // _.each($scope.data2.calendar, function(elem) {
        //         console.log($scope.event.bookingInfo.id)
        //         _.each(elem.bookings, function(el) {
        //             console.log($scope.event.bookingInfo.id)
        //             if (el.bookingInfo.id == $scope.event.bookingInfo.id) {
        //                 el.bookingInfo = bookingInfo;
        //                 console.log(el.bookingInfo.id, ":FOUD")
        //             }
        //         })
        //     })
            //console.log("find",_.findWhere($scope.data2.calendar,{id:$scope.event.bookingInfo.id}))
    
        // $scope.data2[0].bookings[0].bookingInfo = bookingInfo;
        
        /// EDW KANOUME SAVE STI BASI   to     .then einai kane save kai otan telioseis trexe ayti ti function() see promises andular
        $scope.data2.$save(index).then(function(ref) {
            console.log(ref.key());
        })
    }
    
    $scope.isSelectedEvent = function(event) {
        if (event.available == false) {
            return;
        }
        return $scope.event === event ? 'active' : ""
    }
    
    $scope.dayAvailable = function( day ) {
        _.each(day.events, function(elem) {
            if (elem.available === true) {
                $scope.availableDay = true;
            }
        });
        return $scope.availableDay;
    }

    $scope.eventSelected = false;
    $scope.showDetails = false;
    
    $scope.selectEvent = function( event ) {

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