let userList=[
        //user array
   {
        name:"Abhay Singh",
        designation:"Developer",
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
        address: "Rajasthan",
        contactnum:"909435",
        mail:"vks@abc.in",
        link:"www.vks.com",
        language:"english",
        username:"vineetks",
        password:"vineetks"
    },
    {
        name:"Admin",
        designation:"Administrator",
        address: "Kondapur, Hyderabad",
        contactnum:"11100011",
        mail:"admin@abc.in",
        link:"www.admin01.ca",
        language:"english",
        username:"admin",
        password:"admin"
    },
    {
        name:"Raju Sharma",
        designation:"Trainee",
        address: "Hitec City",
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
let nameEl= document.getElementById('nameofuser');
let nameMl = document.getElementById('fname');
let designatonEl= document.getElementById('designationofuser');
let designatonMl= document.getElementById('Designation');
let addressEl= document.getElementById('addressofuser');
let addressMl= document.getElementById('Address');
let contactEl= document.getElementById('contactofuser');
let contactMl= document.getElementById('Contact Number');
let emailEl= document.getElementById('mailofuser');
let emailMl= document.getElementById('Email Address');
let linkEl= document.getElementById('linkofuser');
let linkMl= document.getElementById('Link');
let languageEl= document.getElementById('langofuser');
let languageMl= document.getElementById('Language');
// let formEl = document.querySelector('#form1');
let btn = document.getElementById('login');
let sbtn = document.getElementById('savebtn');
let ebtn = document.getElementById('editbtn');
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
    let i = localStorage.getItem("arrindex");
    // let nameEl= document.getElementById('nameofuser');
    // let nameMl = document.getElementById('fname');
    nameEl.innerText=userList[i].name;
    nameMl.value=userList[i].name;
    
    designatonEl.innerText=userList[i].designation;
    designatonMl.value=userList[i].designation;

    addressEl.innerText=userList[i].address;
    addressMl.value=userList[i].address;

    contactEl.innerText=userList[i].contactnum;
    contactMl.value=userList[i].contactnum;

    emailEl.innerText=userList[i].mail;
    emailMl.value=userList[i].mail;

    linkEl.innerText=userList[i].link;
    linkMl.value=userList[i].link;

    languageEl.innerText=userList[i].language;
    languageMl.value=userList[i].language;

}
setTimeout(setDetails,1);

// let objindex;
// btn.addEventListener("click" , ()=>{
//     let userval = userEl.value;//entered by the user
//     let passval = passwordEl.value;//entered by the user
//     if(userval === userobj.username && passval === userobj.password){
//         console.log(userList.indexOf(userobj)); 
//     }
    
// });
// let arrindex = objindex();
// console.log(arrindex);
btn.addEventListener("click" , ()=>{
    let userval = userEl.value;//entered by the user
    let passval = passwordEl.value;//entered by the user
    let index = 0;

    for(var userobj of userList){
        //  console.log("user"+index);
   
    if(userval === userobj.username && passval === userobj.password){
        // objindex =  userList.indexOf(userobj);
        
        //  console.log(userList.indexOf(userobj));
        
        // 
        // alert('success');
        localStorage.setItem("arrindex",userList.indexOf(userobj));
        // arrindex = userList.indexOf(userobj);
        location.assign('webpageBS.html');
        setDetails();
       
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
// const textest = document.getElementById('idname');
// function modaledit(){
//     textest.innerText="ram";
// }
// sbtn.onclick="textest.innerText ='ram'"; 
// const ebtn = document.getElementById('editbtn');
//  ebtn.addEventListener("click",()=>{
    function my(){
        localStorage.setItem("editname",nameMl.value);
        nameEl.innerText=localStorage.getItem("editname");

    };
// sbtn.addEventListener('click',()=>{
       
//         console.log("hi");
        
//         setTimeout(() => {
//             localStorage.setItem("editname",nameMl.value);
//             console.log(nameMl.value);
//         }, 2000);
        
//         // nameMl.value='ram';
//         // nameEl.value='ram';
    
        
//     }).then(() => {
//         nameEl.value=localStorage.getItem("editname");
//         console.log("Local value",localStorage.getItem("editname"));
//     });
// });
// ebtn.addEventListener("click",()=>{
//     nameEl.value='ram';
// });
// setTimeout(saveButn,1);
