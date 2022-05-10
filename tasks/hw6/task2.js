module.exports = { isWord };

function isWord(str){
    
    const trimStr = str.trim(); 

    const arrWords = trimStr.split(" ");

    res = (arrWords.length > 1) ? false : true;

    console.log(res);

    return res;
}

function main(){
    
    const str = prompt("Enter string");

    isWord(str); 

}

