//
// switch(expression){
//     case value1:
//         //code
          // break;
        
//     case value2:
//         //code
//         break;
//     default:
//         //fallback code
// }

// Write a program to check which day is today if user is going to give the (day of the week)

function checkDay(day){
    switch (day){
        case 1:
            console.log("Monday");
            break;
            
        case 2:
            console.log("tuesday");
            break;
            
        case 3:
            console.log("wednesday");
            break;
        case 4:
            console.log("thursday");
            break;
        case 5:
            console.log("friday");
            break;
        case 6:
            console.log("saturday");
            break;
        case 7:
            console.log("sunday");
            break;
        default:
            console.log("wrong input");
    }
}
checkDay(21);