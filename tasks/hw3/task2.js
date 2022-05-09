module.exports = { multTableFor7 };

function multTableFor7(){
    
    let res = [];

    for(let i=1; i<=9; i++){
        let str = `7 x ${i} = ${7*i}`;
        res.push(str);
        console.log(str);
    }
    
    return res; 
}

function main(){
    multTableFor7();
}

