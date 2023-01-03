function Zero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

var date= new Date();

console.log(date.getDate() +"/"+ date.getMonth()+"/" +date.getFullYear(), date.getHours()+ ":"+ date.getMinutes()+":"+date.getSeconds());

var strDateTime = [[Zero(date.getDate()), 
    Zero(date.getMonth() + 1), 
    date.getFullYear()].join("/"), 
    [Zero(date.getHours()), 
    Zero(date.getMinutes())].join(":");
    
