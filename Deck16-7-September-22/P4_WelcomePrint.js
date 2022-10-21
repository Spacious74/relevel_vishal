function pattern(str) {

    let len = str.length;
    if (len % 2 !== 0) {
        let midindex = parseInt(len / 2);
        let k = midindex; //3
        let prevStr = "";
        for (let a = k; a < len; a++) {
            let ptrnstr = "";
            for (let j = midindex; j <= a; j++) {
                ptrnstr += str[j] + " ";
            }
            console.log(ptrnstr);
            prevStr = ptrnstr;
        }
        for (let i = 0; i < midindex; i++) {
            let newptrnstr = "";
            for (let j = 0; j <= i; j++) {
                
                if (i == 0) {
                    newptrnstr += str[j];
                }else{
                    newptrnstr += str[j] + " ";
                }
                
            }
            console.log(prevStr+newptrnstr);
        }


    } else {
        console.log("Input string has even no. of letters");
    }

}
pattern('WELCOME');