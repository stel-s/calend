
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
    //             surname: "korompos",
    //             email: "",
    //             phone: ""
    //         }
    //     },{
    //         time: "21:00",
    //         booked: false,
    //         bookingInfo: {
    //             dateTime: null,
    //             id: 2,
    //             name: "",
    //             surname: "23",
    //             email: "",
    //             phone: ""
    //         }
    //     },
    //     ]

    // });
    // $scope.data2.$add({
    //     date: new Date('2016-07-01').getTime(),
    //     bookings: [{
    //         time: "21:00",
    //         booked: false,
    //         bookingInfo: {
    //             dateTime: null,
    //             id: 2,
    //             name: "",
    //             surname: "23",
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