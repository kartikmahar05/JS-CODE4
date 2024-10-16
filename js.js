function wish(time){
    if(time>0 && time<=5){
        console.log("Good night");
    }
    else if(time>5 && time<=12){
        console.log("Good morning");
    }
    else if(time>12 && time<=16){
        console.log("Good evening");
    }
    else if(time>16 && time<=24){
        console.log("Good night");
    }
}
wish(8)