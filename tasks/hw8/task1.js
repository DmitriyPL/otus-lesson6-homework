module.exports = { getParseDate, getDayOfTheWeek };

function getParseDate(dateInUserFormat){
    return dateInUserFormat.split(".");
}

function getDayOfTheWeek(parseDate){
    
    const date = new Date(parseDate[2], parseDate[1]-1, parseDate[0]);

    let options = { weekday: 'long'};

    res = new Intl.DateTimeFormat('en-US', options).format(date);

    console.log(res);

    return res;
}

function main(){
    
    const date = prompt("Enter date in format 'dd.mm.yyyy'");

    parseDate = getParseDate(date);
    getDayOfTheWeek(parseDate); 

}

