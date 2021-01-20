// the function return true/false if the year is a leap year or not.
function leap(year) {
    if(year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            return false;
        } else {
            return true;
        }
    }        
}

// the function Find the leap years in a given range of years.
function leapYears(start, end) {
    for (let i = start ; i <= end ; i++) {
       if (leap(i)) {
          console.log(i);
       }
    }    
}
leapYears(1790, 1810);
leapYears(2000, 2050);