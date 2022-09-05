let userList=[
        //user array
   {
        name:"Abhay Singh",
        designation:"Dev",
        address: "Madhapur, Hyderabad",
        contactnum:"5789435",
        mail:"abhays121@abc.in",
        link:"www.yono.ca",
        language:"english",
        username:"abhay11",
        password:"rock32"
     }
    ,
    {
        name:"Vineet Kumar Singh",
        designation:"Programmer",
        address: "Madhapur, Hyderabad",
        contactnum:"5789435",
        mail:"vks@abc.in",
        link:"www.vks.com",
        language:"english",
        username:"vineetks",
        password:"vineetks"
    },
    {
        name:"admin",
        designation:"Administrator",
        address: "Madhapur, Hyderabad",
        contactnum:"5789435",
        mail:"admin@abc.in",
        link:"www.yono.ca",
        language:"english",
        username:"admin",
        password:"admin"
    },
    {
        name:"Raju Sharma",
        designation:"dev",
        address: "Madhapur, Hyderabad",
        contactnum:"5789435",
        mail:"raju676@abc.in",
        link:"www.yono.ca",
        language:"english",
        username:"rajuok5",
        password:"lolnopass420"

    }

]
// let username="abhay11";
// let password="rockwithme32";
let userEl = document.getElementById('userid');
let passwordEl = document.getElementById('password');

let formEl = document.querySelector('#form1');
let btn = document.getElementById('login');
// let userval = userEl.value;
// let passval = passwordEl.value;

// function setDetails(args){
//    const nameEl= document.getElementById('nameofuser');
//    const designatonEl= document.getElementById('designationofuser');
//    const addressEl= document.getElementById('addressofuser');
//    const langEl= document.getElementById('langofuser');
//    const mailEl= document.getElementById('mailofuser');
//    const linkEl= document.getElementById('linkofuser');
//    const contactEl= document.getElementById('contactofuser');
//    const nameEl= document.getElementById('nameofuser');
//     nameEl.innerHTML=userobj.name;
//     designatonEl.innerHTML=userobj.designation;
//     addressEl.innerHTML=userobj.address;
//     langEl.innerHTML=userobj.language;
//     mailEl.innerHTML=userobj.mail;
//     linkEl.innerHTML=userobj.link;
//     contactEl.innerHTML=userobj.contactnum;



   
// }


// const index1 = userList.map(object => object.id).indexOf('dev');
// console.log(index1);
// console.log(userList);

//     console.log(nameEl);
function setDetails(){
    const nameEl= document.getElementById('nameofuser');
    nameEl.innerText=userList[2].name;
    const designatonEl= document.getElementById('designationofuser');
    designatonEl.innerText=userList[2].designation;
}
setTimeout(setDetails,1);
let arrindex;
btn.addEventListener("click" , ()=>{
    let userval = userEl.value;//entered by the user
    let passval = passwordEl.value;//entered by the user
    let index = 0;
    for(var userobj of userList){
        //  console.log("user"+index);
   
    if(userval === userobj.username && passval === userobj.password){
        
        location.assign('webpageBS.html');
        alert('success');
        
        setDetails();
        // arrindex=userList.findIndex(userobj);
        // console.log(arrindex);
        // index++;
       break;

    }
    else
    index++;
// console.log(userval === username);
    }
    if (index == userList.length){
        alert('wrong credentials');
    
    }
    // setDetails();
    // const nameEl= document.getElementById('nameofuser');
    // nameEl.innerText="abhay";
    // console.log(nameEl);

    
});

