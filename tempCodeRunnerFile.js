

let obj = {
    Name : 'Vishal',
    Working_days : 28,
    Company_Name : 'Apple',
    getsalary : function(){
        return 2000 * this.wokingdays;
    }
}
for (const key in obj) {   
    console.log(`My ${key} is ${obj[key]}`);
}