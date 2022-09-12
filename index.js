let userList=[
        //user array
   {
        name:"Abhay Singh",
        designation:"Developer",
        address: "Madhapur, Hyderabad",
        contactnum:"5789435",
        employeeid:4565,
        mail:"abhays121@abc.in",
        link:"www.yono.ca",
        language:"english",
        username:"abhay11",
        password:"rock32",
        source:"stocks.jpg"
     }
    ,
    {
        name:"Vineet Kumar Singh",
        designation:"Programmer",
        address: "Rajasthan",
        contactnum:"909435",
        employeeid:4566,
        mail:"vks@abc.in",
        link:"www.vks.com",
        language:"english",
        username:"vineetks",
        password:"vineetks",
        source:"vks.jpg"
    },
    {
        name:"Admin",
        designation:"Administrator",
        address: "Kondapur, Hyderabad",
        contactnum:"11100011",
        employeeid:4567,
        mail:"admin@abc.in",
        link:"www.admin01.ca",
        language:"english",
        username:"admin",
        password:"admin",
        source:"stockm.jpg"
    },
    {
        name:"Raju Sharma",
        designation:"Trainee",
        address: "Hitec City",
        contactnum:"5789435",
        employeeid:4568,
        mail:"raju676@abc.in",
        link:"www.yono.ca",
        language:"english",
        username:"rajuok5",
        password:"lolnopass420",
        source:"stockraju.jpg"

    }

]


// let username="abhay11";
// let password="rockwithme32";
let userEl = document.getElementById('userid');
let passwordEl = document.getElementById('password');
let nameEl= document.getElementById('nameofuser');
let nameMl = document.getElementById('fname');
let designationEl= document.getElementById('designationofuser');
let designationMl= document.getElementById('Designation');
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
let photoEl = document.getElementById('profilepic');
let photoMl = document.getElementById('dpimg');
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
    localStorage.setItem("nameLS",userList[i].name);
    nameEl.innerText=localStorage.getItem("nameLS");
    nameMl.value=localStorage.getItem("nameLS");
    
    localStorage.setItem("designationLS",userList[i].designation);
    designationEl.innerText=localStorage.getItem("designationLS");
    designationMl.value=localStorage.getItem("designationLS");
    //designatonEl.innerText=userList[i].designation;
    //designatonMl.value=userList[i].designation;

    localStorage.setItem("addressLS",userList[i].address);
    addressEl.innerText=localStorage.getItem("addressLS");
    addressMl.value=localStorage.getItem("addressLS");

    // addressEl.innerText=userList[i].address;
    // addressMl.value=userList[i].address;

    localStorage.setItem("contactLS",userList[i].contactnum);
    contactEl.innerText=localStorage.getItem("contactLS");
    contactMl.value=localStorage.getItem("contactLS");
//    contactEl.innerText=userList[i].contactnum;
  //  contactMl.value=userList[i].contactnum;

    localStorage.setItem("mailLS",userList[i].mail);
    emailEl.innerText=localStorage.getItem("mailLS");
    emailMl.value=localStorage.getItem("mailLS");
    // emailEl.innerText=userList[i].mail;
    // emailMl.value=userList[i].mail;


    localStorage.setItem("linkLS",userList[i].link);
    linkEl.innerText=localStorage.getItem("linkLS");
    linkMl.value=localStorage.getItem("linkLS");
    // linkEl.innerText=userList[i].link;
    // linkMl.value=userList[i].link;


    localStorage.setItem("languageLS",userList[i].language);
    languageEl.innerText=localStorage.getItem("languageLS");
    languageMl.value=localStorage.getItem("languageLS");
    // languageEl.innerText=userList[i].language;
    // languageMl.value=userList[i].language;

    localStorage.setItem("photoLS",userList[i].source);
    photoEl.src =localStorage.getItem("photoLS");
    photoMl.src =localStorage.getItem("photoLS");

}
setTimeout(setDetails,1);


btn.addEventListener("click" , ()=>{
    let userval = userEl.value;//entered by the user
    let passval = passwordEl.value;//entered by the user
    let index = 0;

    for(var userobj of userList){
        //  console.log("user"+index);
   
    if(userval === userobj.username && passval === userobj.password){
        // objindex =  userList.indexOf(userobj);
        
        //  console.log(userList.indexOf(userobj));
        localStorage.setItem("arrindex",userList.indexOf(userobj));
        // 
        // alert('success');
        localStorage.setItem("usernameLS",userobj.username);
        localStorage.setItem("passwordLS",userobj.password);
        // arrindex = userList.indexOf(userobj);
        location.assign('webpageBS.html');
        setDetails();
       
       break;

    }
    else
    index++;

    }

    if (index == userList.length){
        alert('wrong credentials');
        }
    
    
});

// if(localStorage.getItem("usernameLS"!="")&&localStorage.getItem("passwordLS"!="")){
//     location.assign('webpageBS.html');
// }

    function modaledit(){
        localStorage.setItem("editname",nameMl.value);
        // editname1 = 
        // localStorage.setItem("editname1",nameEl.innerText);
        nameEl.innerText=localStorage.getItem("editname");

        localStorage.setItem("editaddress",addressMl.value);
        addressEl.innerText=localStorage.getItem("editaddress");

        localStorage.setItem("editdesig",designationMl.value);
        designationEl.innerText=localStorage.getItem("editdesig");

        localStorage.setItem("editcontact",contactMl.value);
        contactEl.innerText=localStorage.getItem("editcontact");

        localStorage.setItem("editlink",linkMl.value);
        linkEl.innerText=localStorage.getItem("editlink");

        localStorage.setItem("editlang",languageMl.value);
        languageEl.innerText=localStorage.getItem("editlang");

        localStorage.setItem("editmail",emailMl.value);
        emailEl.innerText=localStorage.getItem("editmail");
        

    };

    let logoutbtn = document.getElementById('logoutbutton');
    
    function logoutfunc(){
                localStorage.clear();
                location.assign('assignment.html');

            }



        let signupbtn = document.getElementById('btnSU');
        // console.log(nameEl.innerText+"1");
        // setTimeout(f1,3000);
        function signupnewuser()
        

        {

            if(validateForm()!=false){

            let fnameSU = document.getElementById('firstnamesignup');
            let lnameSU = document.getElementById('lastnamesignup');
            let dateSU = document.getElementById('datesignup');
            let eidSU = document.getElementById('eidsignup');
            let designationSU = document.getElementById('Designationsignup');
            let contactSU = document.getElementById('Contactsignup');
            let addressSU = document.getElementById('Addresssignup');
            let linkSU = document.getElementById('Linksignup');
            let langSU = document.getElementById('Languagesignup');
            let mailSU = document.getElementById('exampleInputEmail1');
            let passSU = document.getElementById('exampleInputPassword1');
            // let eidSU = document.getElementById('eidsignup');

            localStorage.setItem("fname0",fnameSU.value);
            localStorage.setItem("lname0",lnameSU.value);
            localStorage.setItem("date0",dateSU.value);
            localStorage.setItem("eid01",eidSU.value);
            localStorage.setItem("designation0",designationSU.value);
            localStorage.setItem("contactSU0",contactSU.value);
            localStorage.setItem("addressSU0",addressSU.value);
            localStorage.setItem("langSU0",langSU.value);
            localStorage.setItem("linkSU0",linkSU.value);
            localStorage.setItem("mailSU0",mailSU.value);
            localStorage.setItem("passSU0",passSU.value);


        let newUser_obj = 
        
        {

            name:localStorage.getItem("fname0")+" "+localStorage.getItem("lname0"),
            designation:localStorage.getItem("designation0"),
            address: localStorage.getItem("addressSU0"),
            employeeid:localStorage.getItem("eid01"),
            contactnum:localStorage.getItem("contactSU0"),
            mail:localStorage.getItem("mailSU0"),
            link:localStorage.getItem("linkSU0"),
            language:localStorage.getItem("langSU0"),
            username:localStorage.getItem("mailSU0"),
            password:localStorage.getItem("passSU0")

            // localStorage.setItem(userList.name,localStorage.getItem("fname0"))

        }

        userList.push(newUser_obj);
        // localStorage.setItem("userarr",userList);
        localStorage.setItem("userList1",JSON.stringify(userList));
         
        //localStorage.setItem(storedNames,JSON.stringify(userList));
        

        alert('Signup successful! OK to continue...');
        // document.getElementById('nameofuser').innerText
        
        location.assign('webpageBS.html');
        // console.log(document.getElementsByClassName('signupform'));
        // console.log(document.getElementById('nameofuser'));

        // console.log(storedDetailsNew[userList.length-1].name); 
        
        // setTimeout(f1,3000);
        // console.log(localStorage.getItem("userList1"));= storedDetailsNew[userList.length-1].name
        
        // console.log()
        // document.getElementById('nameofuser').innerText = storedDetailsNew[userList.length-1].name;
        // console.log(document.getElementById('nameofuser').innerText);
        
        // let nameEl;
        // nameEl.innerText=localStorage.getItem("fname0"); 
        // console.log(userList[userList.length-1].name);
        
      // console.log(nameEl.innerText); 
      // setDetnewuser();
       
       







    }
    // let profphoto = document.getElementById('uploadpic');
    // let dp1 = document.getElementById('dp1');
    //  profphoto.value = dp1.value ;


    }
    
    // console.log(nameEl.innerText); 
    function setDetailsnewuser(){
      // console.log(localStorage.getItem("userList1"));
      let storedDetailsNew = new Array;
      storedDetailsNew = JSON.parse(localStorage.getItem("userList1"));
      // console.log(storedDetailsNew);
      
      // console.log(storedDetailsNew[storedDetailsNew.length-1].name); 
      // console.log(nameEl.innerText);
      nameEl.innerText = storedDetailsNew[storedDetailsNew.length-1].name;
      nameMl.value=storedDetailsNew[storedDetailsNew.length-1].name;
      designationEl.innerText=storedDetailsNew[storedDetailsNew.length-1].designation;
      designationMl.value=storedDetailsNew[storedDetailsNew.length-1].designation;
      addressEl.innerText=storedDetailsNew[storedDetailsNew.length-1].address;
      addressMl.value=storedDetailsNew[storedDetailsNew.length-1].address;
      contactEl.innerText=storedDetailsNew[storedDetailsNew.length-1].contactnum;
      contactMl.value=storedDetailsNew[storedDetailsNew.length-1].contactnum;
      emailEl.innerText=storedDetailsNew[storedDetailsNew.length-1].mail;
      emailMl.value=storedDetailsNew[storedDetailsNew.length-1].mail;
      linkEl.innerText=storedDetailsNew[storedDetailsNew.length-1].link;
      linkMl.value=storedDetailsNew[storedDetailsNew.length-1].link;
      languageEl.innerText=storedDetailsNew[storedDetailsNew.length-1].language;
      languageMl.value=storedDetailsNew[storedDetailsNew.length-1].language;

      
      }
      
   
     


    let formSU = document.getElementsByClassName('signupform');
    
    function validateForm() {
        let f = document.forms["myForm"]["fname"].value;
        if (f == "") {
          alert("First name must be filled out");
          return false;
        }

        let l = document.forms["myForm"]["lname"].value;
        if (l == "") {
          alert("Last name must be filled out");
          return false;
        }
        
        let cont = document.forms["myForm"]["Contact"].value;
        if (cont == "") {
          alert("Contact Number must be filled out");
          return false;
        }
        let num = parseInt(cont);
        // console.log(Math.floor(num/1000000000));
        // parseInt(cont);
        if(Math.floor(num/1000000000) == 0){
            alert("Contact Number should be a 10 digit number.");
          return false;
        }
        
        let eid0 = document.forms["myForm"]["eid"].value;
        if (eid0 == "") {
            alert("Employee Id must be filled out an must be a numeric value.");
            return false;
          }
        //   if(typeof(eid0)!="number"){
        //     alert("Employee Id must be a numeric value.");
        //     return false;
        //   }
        
          for(var userobj of userList){
            if(userobj.employeeid==eid0){
                alert("Employee Id must be unique");
                    return false;
            }
          }

          let d = document.forms["myForm"]["Designation"].value;
        if (d == "") {
          alert("Designation must be filled out");
          return false;
        }

        let lan = document.forms["myForm"]["Language"].value;
        if (lan == "") {
          alert("Language must be filled out");
          return false;
        }

        let Link = document.forms["myForm"]["Link"].value;
        if (Link == "") {
          alert("Link must be filled out");
          return false;
        }

        let Address = document.forms["myForm"]["Address"].value;
        if (Address == "") {
          alert("Address must be filled out");
          return false;
        }

        let email = document.forms["myForm"]["email"].value;
        if (email == "") {
          alert("email id must be filled out");
          return false;
        }

        let password = document.forms["myForm"]["password"].value;
        if (password == "") {
          alert("password must be filled out");
          return false;
        }

        


        let date1 = document.forms["myForm"]["dob"].value;
       

        if (date1 == "") {
            alert("Date of Birth must be filled out");
            return false;
          }
        
            
            var month_diff = Date.now() - new Date(date1).getTime();  
      
            //convert the calculated difference in date format  
            var age_dt = new Date(month_diff);   
              
            //extract year from date      
            var year = age_dt.getUTCFullYear();  
              
            //now calculate the age of the user  
            var age = Math.abs(year - 1970);  
            // console.log(age);
            // console.log(nameEl.innerText); 
        
           
            
        
          if (age<20) {
            alert("Minimum age required is 20 years.");
            return false;
          }
        
      }

      function onclicksignup(){
        localStorage.clear();
        window.open('signuppage.html', '_blank');
      }
    //signupbtn.addEventListener('click',signupnewuser());

       