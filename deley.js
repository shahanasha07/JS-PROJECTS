function deley(){
    for(let i=1; i<=10; i++){
        setTimeout(function xd(){
            console.log(i);
        },i*1000)
    }
}
deley()