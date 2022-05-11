module.exports = { getMinuteOfThisDay };

function getMinuteOfThisDay(curTime){

    const hr = curTime.getHours();
    const min = curTime.getMinutes();

    res = hr * 60 + min;

    console.log(res);

    return res;
}

function main(){
    
    const curTime = new Date();
    getMinuteOfThisDay(curTime); 

}

