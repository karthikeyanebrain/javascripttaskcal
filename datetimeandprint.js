function dateCalculate() {

    var firstIputValue = (document.getElementById('month').value)
    var sceondIputValue = Number(document.getElementById('date').value)
    var thirdInputValue = Number(document.getElementById('hour').value)
    var fourthIputValue = Number(document.getElementById('mins').value)
    var fivethIputValue = Number(document.getElementById('sec').value)
    var sixthIputValue = Number(document.getElementById('millsec').value)
    var err = false;

    if(firstIputValue == ''){
        var monthErr = document.getElementById('monthError');
        monthErr.innerHTML = '*Required';
        var err = true; 
    }
    else{
        document.getElementById('monthError').innerHTML='';
    }
    if(sceondIputValue > 31){
        var dateErr = document.getElementById('dateError');
        dateErr.innerHTML = 'Date in between 1 to 31';
        var err = true;
    }
    
    else if(sceondIputValue == ''){
        var dateErr = document.getElementById('dateError');
        dateErr.innerHTML = '*Required';
        var err = true;
    }
    else{
        document.getElementById('dateError').innerHTML='';
    }
    if(thirdInputValue > 24){
        var hourErr = document.getElementById('hourError');
        hourErr.innerHTML = 'Hour in between 1 to 24 !';
        var err = true;
    }
    else if(thirdInputValue == ''){
        var hourErr = document.getElementById('hourError');
        hourErr.innerHTML = '*Required';
        var err = true;
    }
    else{
        document.getElementById('hourError').innerHTML='';
    }

    if(fourthIputValue > 59){
        var minsErr = document.getElementById('minsError');
        minsErr.innerHTML = 'Minutes in between 1 to 60 !';
        var err = true;
    }

    else if(fourthIputValue == ''){
        var minsErr = document.getElementById('minsError');
        minsErr.innerHTML = '*Required';
        var err = true;
    }
    else{
        document.getElementById('minsError').innerHTML='';
    }

    if(fivethIputValue > 59){
        var secdsErr = document.getElementById('secError');
        secdsErr.innerHTML = 'Seconds in between 1 to 60 !';
        var err = true;
    }
    else if(fivethIputValue == ''){
        var secdsErr = document.getElementById('secError');
        secdsErr.innerHTML = '*Required';
        var err = true;
    }
    else{
        document.getElementById('secError').innerHTML='';
    }
    if(sixthIputValue > 1000){
        var milliSecsErr = document.getElementById('millisecondsError');
        milliSecsErr.innerHTML = 'Milliseconds in between 1 to 1000 !';
        var err = true;
    }
    else if(sixthIputValue == ''){
        var milliSecsErr = document.getElementById('millisecondsError');
        milliSecsErr.innerHTML = '*Required';
        var err = true;
    }
    else{
        document.getElementById('millisecondsError').innerHTML='';
    }
    if(err){
        return;
    }else{
        
    var split = firstIputValue.split('-')
     console.log(split)
    var finalDate = document.getElementById('finalDate');

    finalDate.innerHTML = new Date(split[0],split[1]-1 ,sceondIputValue,thirdInputValue,fourthIputValue,fivethIputValue,sixthIputValue);

}
}

    