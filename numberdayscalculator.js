function calculat(){
    var firstIputValue = (document.getElementById("input1").value)
     sceondIputValue = (document.getElementById("input2").value)
     
     if(firstIputValue,sceondIputValue == ''){
        alert("Please Filled Input Value")
        
    }else{
     var sceondIputValue = new Date(sceondIputValue)

    
     const sceondIput_Value = sceondIputValue.getTime()
     console.log(sceondIputValue)

    var oneDay = 24 * 60 * 60 * 1000;
    // console.log(oneDay)

    var inuvalue = oneDay*Number(firstIputValue)
    // console.log(inuvalue)

    var total_days =sceondIput_Value + inuvalue
    console.log(total_days)

    var total_day =sceondIput_Value - inuvalue
    console.log(total_day)

    var adddates = new Date(total_days)
    // console.log(adddate)

    var adddate = new Date(total_day)
    // console.log(adddate)

    var printdate = document.getElementById("days")
     printdate.innerHTML = "DIFFEENCE BETWEEN NUMBER ADD FROM DATE  = " + adddates + " DATE "

     var printdate = document.getElementById("month")
     printdate.innerHTML = "DIFFEENCE BETWEEN  NUMBER SUBTRACTION FROM DATE  = " + adddate + " DATE "

      
} 
}