// alert("HELLO CLASS...")





        ////FOR LOOP////


//         document.write(1 + "<br>")
//         document.write(2 + "<br>")
//         document.write(3 + "<br>")
//         document.write(4 + "<br>")
//         document.write(5 + "<br>")
//         document.write(6 + "<br>")
//         document.write(7 + "<br>")
//         document.write(8 + "<br>")
//         document.write(9 + "<br>")
//         document.write(10 + "<br>")
 
// var stdArr = ["Jaffar" , 20 , "male"]

// document.write("NAME:  " + stdArr[0])
// document.write("<br> AGE: " + stdArr[1])
// document.write("<br> GENDER: " + stdArr[2])


// for( initialization , condition , incre / decre   )
// {
//         ///statement///
// }


// for(var i = 1; i <=10 ; i = i + 1 ){

//     console.log(i)
// }


// for(var i = 10 ; i >= 1 ; i--  ){
//     console.log(i)
// }



// document.write("2 x 1 = " + 2*1 + "<br>")
// document.write("2 x 2 = " + 2*2 + "<br>")
// document.write("2 x 3 = " + 2*3 + "<br>")
// document.write("2 x 4 = " + 2*4 + "<br>")



    ///table print ///
// var tableNumber = +prompt("Table Number...")
// var tabLength = +prompt("Table Length...")

// document.write("Table Num : " + tableNumber + " " + "table Len: "
//                 +tabLength + "<br>" )
 
// for(var i = 1 ; i <= tabLength ; i++){
//     document.write(tableNumber + " x" + " " + i +" " + "=" + 
//     " " + tableNumber*i + "<br>" )
// }





// var cities = ["islamabad" , "karachi" , "lahore" , "multan"];
//                 //0             1           2           3
// // console.log(cities.length)

// for(var i = 0 ; i < cities.length ; i++){
//         document.write( cities[i] + "<br>") 
// }



// var cities = ["islamabad" , "karachi" , "lahore" , "multan"];

// var UserCity = prompt("Enter Your city Name");




// var flag = true

// for(var i = 0 ; i < cities.length ; i++ ){

//             if(UserCity === cities[i]){
//                     alert("PAKISTAN")
//                     flag = false
//             }
// }

// if(flag === true){
//         alert("YOUR CITY is UNDEFINED")
// }


// var items = ["cake" , "biryani" , "cold drink" , "sandwich"]

// var userInput = prompt("Enter Items")

// var matchFound = "no"
// for(var i = 0 ; i < items.length ;i++){

//         if(userInput === items[i] ){
//                 alert("YES...")
//                 matchFound = "yes"
//         } 
// }

// if(matchFound === "no"){
//     alert("NO Item...")
// }




// var cities = ["islamabad" , "karachi" , "lahore" , "multan"];

// var userInput = prompt("Enter Your CIty")

// var isMatch = "no"

// for(var i = 0 ; i < cities.length ; i++){

//         if(userInput === "karachi" ){
//             alert("CITY OF LIGHT")
//             isMatch = "yes"
//             break;
//         }
//         else if(userInput === "lahore"){

//         }


// }

// if(isMatch == "no"){
//     alert("WELCOME...")
// }


// for(var i = 1 ; i < 10 ; i++){
//     console.log(i)
//     if(i == 5){
//         break
//     }

// }



// for(var i = 0 ; i < 5 ; i++ ){

//         document.write("i" + i + '<br>')
      
//         for(var j = 0  ; j < 5 ; j++){
//             document.write("j" + j + "<br>")    
//         }


// }


// for(var i = 0 ; i < 5 ; i++){

//     for(var j = 0 ; j <=i ; j++){
//     document.write("*" )
//     }

//     document.write("<br>")


// }



///q3
// a
// var num;

// // b
// document.write("Value after variable declaration is: " + num)

// //c
// num = 5;
// // d
// document.write("<br> Initialvalue: " + num)

// document.write("<br> Increment value:" + ++num)
// num =  num + 7
// document.write("<br> add " + num)
// document.write("<br> decrement " + --num)

// num = num % 3

// document.write("<br> modulas" + num )


document.write("<table border='1'>")

document.write("<tr>"+ 
        "<td>" + "JAFFAR"   +"</td>" +
        "<td>" + "20"   +"</td>"+
        "<td>" + "MALE"   +"</td>"

+"</tr>")

document.write("</table>")