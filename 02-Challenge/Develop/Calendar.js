//moment().format('MMMM Do YYYY, h:mm:ss a'); // June 29th 2022, 3:47:57 pm
//moment().format('dddd');                    // Wednesday
//moment().format("MMM Do YY");               // Jun 29th 22
//moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
//moment().format();                         

//moment("20111031", "YYYYMMDD").fromNow(); // 11 years ago
//moment("20120620", "YYYYMMDD").fromNow(); // 10 years ago
//moment().startOf('day').fromNow();        // 16 hours ago
//moment().endOf('day').fromNow();          // in 8 hours
//moment().startOf('hour').fromNow();       // an hour ago


//moment().subtract(10, 'days').calendar(); // 06/19/2022
//moment().subtract(6, 'days').calendar();  // Last Thursday at 3:48 PM
//moment().subtract(3, 'days').calendar();  // Last Sunday at 3:48 PM
//moment().subtract(1, 'days').calendar();  // Yesterday at 3:48 PM
//moment().calendar();                      // Today at 3:48 PM
//moment().add(1, 'days').calendar();       // Tomorrow at 3:48 PM
//moment().add(3, 'days').calendar();       // Saturday at 3:48 PM
//moment().add(10, 'days').calendar();     


//moment.locale();         // en
//moment().format('LT');   // 3:48 PM
//moment().format('LTS');  // 3:48:59 PM
//moment().format('L');    // 06/29/2022
//moment().format('l');    // 6/29/2022
//moment().format('LL');   // June 29, 2022
//moment().format('ll');   // Jun 29, 2022
//moment().format('LLL');  // June 29, 2022 3:48 PM
//moment().format('lll');  // Jun 29, 2022 3:48 PM
//moment().format('LLLL'); // Wednesday, June 29, 2022 3:48 PM
//moment().format('llll');

//setting up format of date and time
var currentDate = moment().format ("MMM Do YYYY"); 
$("#currentDay").text(currentDate);
var Time = moment().format("H");

a.second(function (time, index){
    var start = [];
    start.push(moment().hour(time).format("h A"));
})

