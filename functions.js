function getUserDetails(userId) {

    var users = [{
        userId: 101,
        name: "kiran"
    },

    {
        userId: 102,
        name: "kumar"
    },
    {
        userId: 103,
        name: "Anil"
    }]

    for(i=0;i<users.length;i++){
        if(userId==users[i].userId)
        {
           return users[i].name;
        }
    }



}

console.log(getUserDetails(101)); 