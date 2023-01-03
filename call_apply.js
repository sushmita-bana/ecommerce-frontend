var user = {
    username: "Sush",
    password: "123",
    getDetails: function () {
        //return this.username +"\t"+ this.password + "\t" +a+ "\t" +b+ "\t" +c;
        return this.username +"\t"+ this.password ;
    }   
}
var user1={
    username:"saatvik",
    password:"456",
}
var arr=[1,2,3]
//console.log(user.getDetails.call(user1,arr));
////console.log(user.getDetails.apply(user1,arr))
//console.log(user.getDetails.bind(user1,arr));
console.log(user.getDetails.bind(user1))

