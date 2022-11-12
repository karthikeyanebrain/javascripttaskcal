// function calculat(){
//     var firstIputValue = (document.getElementById("date1").value)
//      sceondIputValue = (document.getElementById("date2").value)

//      var firstIputValue = new Date(firstIputValue)
//      console.log(firstIputValue)
//      sceondIputValue = new Date(sceondIputValue)
//      console.log(sceondIputValue)

//      var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

//      var diffDays = ((sceondIputValue.getTime() - firstIputValue.getTime()) / (oneDay));

//      var printdate = document.getElementById("days")
//      printdate.innerHTML = "DIFFEENCE BETWEEN  = " + diffDays + " DAY "

//      var month = Math.round(diffDays/30) 

//     //  var printdate = document.getElementById("month")
//     //  printdate.innerHTML = "DIFFEENCE BETWEEN  = " + month + " MONTHS "

//     var years = Math.round(diffDays/365)
//      var days = (diffDays%30) 


//      var printdate = document.getElementById("day")
//      printdate.innerHTML = "DIFFEENCE BETWEEN  = " + years + " Years " + month + " MONTHS "+ days + " days "


// } 

function dateCalculate() {
    var firstIputValue = String(document.getElementById('input1').value)
    var sceondIputValue = String(document.getElementById('input2').value)
if(firstIputValue,sceondIputValue == ''){
    alert("Please Filled Input Value")
    
}else{

    var date1 = new Date(firstIputValue)
    var date2 = new Date(sceondIputValue)

    //new date instance
    const dt_date1 = new Date(date1);
    const dt_date2 = new Date(date2);
    console.log(dt_date1)

    //Get the Timestamp
    const date1_time_stamp = dt_date1.getTime();
    const date2_time_stamp = dt_date2.getTime();

    let calc;

    //Check which timestamp is greater
    if (date1_time_stamp > date2_time_stamp) {
        calc = new Date(date1_time_stamp - date2_time_stamp);
        console.log(calc)
    } else {
        calc = new Date(date2_time_stamp - date1_time_stamp);
    }


    //Retrieve the date, month and year
    const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
    console.log(calcFormatTmp)
    //Convert to an array and store
    const calcFormat = calcFormatTmp.split("-");
    console.log(calcFormat)
   
    const days_passed = Number(Math.abs(calcFormat[0]) - 1);
    console.log(days_passed)
    const months_passed = Number(Math.abs(calcFormat[1]) - 1);
    console.log(months_passed)
    const years_passed = Number(Math.abs(calcFormat[2]) - 1970);
    console.log(years_passed)
   
    
    //Convert to days and sum together
    const total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;
    const total_secs = total_days * 24 * 60 * 60;
    const total_mins = total_days * 24 * 60;
    const total_hours = total_days * 24;
    const total_weeks = (total_days >= 7) ? total_days / 7 : 0;

    var noOfdays = document.getElementById('addvalue')
    noOfdays.innerHTML = 'The total number of days in between those two date  ' + Math.round(total_days) 
    var noOfdays = document.getElementById('week')
    noOfdays.innerHTML = 'The total weeks in between those two date  ' + Math.round(total_weeks) 
    var noOfdays = document.getElementById('hour')
    noOfdays.innerHTML = 'The total hours of days in between those two date  ' + Math.round(total_hours) 
    var noOfdays = document.getElementById('mins')
    noOfdays.innerHTML = 'The total mins of days in between those two date ' + Math.round(total_mins) 
    var noOfdays = document.getElementById('secs')
    noOfdays.innerHTML = 'The total secs of days in between those two dates   ' + Math.round(total_secs)
    var noOfdays = document.getElementById('years')
    noOfdays.innerHTML = 'The total year of days in between those two dates   ' + Math.round(years_passed) 
    var noOfdays = document.getElementById('month')
    noOfdays.innerHTML = 'The total month of days in between those two dates   ' + (months_passed) 
}
}