angular.module('mwl.calendar.docs', ['mwl.calendar', 'ngAnimate', 'ui.bootstrap','firebase','ngRoute']);


angular.
  module('mwl.calendar.docs').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/settings', {
          templateUrl: '<div>sdfdsfdsfsdfsfsd</div>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        })
          //  . when('/home', {
          // templateUrl:"index.html"
        // }).
        
        .otherwise('/home');
    }
  ]);
angular
  .module('mwl.calendar.docs')
  
  .controller('EditableDeletableEventsCtrl', function(moment, alert,$firebaseArray) {



 var ref1 = new Firebase("https://talkmedirty.firebaseio.com/calendar1/");
   
   
   
   
    var vm = this;

    var x = this.data = $firebaseArray(ref1);
     
     x.$loaded().then(function(){
      for(var i=0;i<x.length;i++){
      console.log(x[i])
      vm.events.push({
        title:x[i].bookingInfo.name,
        type:"info",
        startsAt:new Date(x[i].startsAt),
        endsAt:new Date(x[i].endsAt)
      })
      // console.log(vm)
    } 
     })
   
    // vm.events = [
    //   {
    //     title: 'Editable event',
    //     type: 'warning',
    //     startsAt: moment().startOf('day').add(7, 'hours').toDate(),
    //     endsAt: moment().startOf('day').add(19, 'hours').toDate(),
    //     editable: true,
    //     deletable: false
    //   }, {
    //     title: 'Deletable event',
    //     type: 'info',
    //     startsAt: moment().startOf('month').toDate(),
    //     deletable: true,
    //     editable: false
    //   }, {
    //     title: 'Non editable and deletable event',
    //     type: 'important',
    //     startsAt: moment().startOf('month').toDate(),
    //     editable: false,
    //     deletable: false
    //   },
    //   {
    //     title: 'Non editable and deletable event',
    //     type: 'important',
    //     startsAt: new Date(),
    //     editable: true,
    //     deletable: true
    //   }
    // ];

    vm.calendarView = 'month';
    vm.viewDate = moment().startOf('month').toDate();
    vm.isCellOpen = true;

    vm.eventEdited = function(event) {
      alert.show('Edited', event);
    };

    vm.eventDeleted = function(event) {
      alert.show('Deleted', event);
    };

  });
