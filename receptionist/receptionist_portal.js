
 


 // var ID;
 // var Appointment_status;
 var app = angular.module('receptionist_portal', [ "ui.router","ngStorage" ]); 
  app.config(function($stateProvider,$urlRouterProvider, )
 { 
      $stateProvider 
    .state('profile', {     
      url : '/profile', 
      templateUrl : "patient_profile.html", 
      // controller : "HomeCtrl"
    }) 
     $stateProvider 
    .state('registered_doctor', {     
      url : '/registered_doctor', 
      templateUrl : "registered_doctor.html", 
      // controller : "HomeCtrl"
    })
    $stateProvider 
    .state('registered_patient', {     
      url : '/registered_patient', 
      templateUrl : "registered_patient.html", 
      // controller : "HomeCtrl"
    }) 
    //  $stateProvider 
    // .state('registered_patient', {     
    //   url : '/registered_patient', 
    //   templateUrl : "registered_patient.html", 
    //   // controller : "HomeCtrl"
    // }) 
    .state('story',{
      url : '/story',
      views:{
        'test':{
                    template : "<h1>sample01</h1>", 
        }
      }
    })
    .state('data', {
        url : '/data',
        templateUrl: "data.html",   
        })
    .state('appointment', {
        url : '/appointment',
        templateUrl: "appointment.html",   
        })
    
    .state('Msg-1', { 
            url : '/msg-1', 
            template : "<h1>msg-1 information</h1>", 
            // controller : "LoginCtrl"
        }) 
        
        .state('logout',{
          url : '/logout',
          template : "login.html"

        });
         $urlRouterProvider.otherwise("/"); 
    
}); 



 var myContacts ;
 // var ID=2;
function generateDynamicTable(){

console.log("arjun");
          
         var Id=2;
          let xhr = new XMLHttpRequest();
          xhr.open("GET","http://15d25afd25b4.ngrok.io/Receptionist_interface/pending_appointments/",true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 

          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) { 

                  // result.innerHTML = JSON.parse(Request.response);
                   myContacts =   JSON.parse(this.responseText);
                   console.log(myContacts);
                   generateDynamic();

              } 
          };  
          var data = JSON.stringify({"id" : Id}); 

          xhr.send(data); 
          console.log(data);
           // window.location = "receptionist_portal.html";
      

}
function generateDynamic(){

  
    var noOfContacts = myContacts.length;
    
    if(noOfContacts>0){
      
 
      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");
      table.style.width = '100%';
      // table.setAttribute('border', '1');
      table.setAttribute('cellspacing', '0');
      table.setAttribute('cellpadding', '5');
      
      // retrieve column header ('Name', 'Email', and 'Mobile')
 
      var col = []; // define an empty array
      for (var i = 0; i < noOfContacts; i++) {
        for (var key in myContacts[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }
      
      // CREATE TABLE HEAD .
      var tHead = document.createElement("thead");  
        
      
      // CREATE ROW FOR TABLE HEAD .
      var hRow = document.createElement("tr");
      
      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      for (var i = 0; i < 8; i++) {
        if (i==0) { 
          var th = document.createElement("th");
          th.innerHTML = "Name";
          hRow.appendChild(th);
          }
          if (i==1) { 
          var th = document.createElement("th");
          th.innerHTML = "Date";
          hRow.appendChild(th);
          }
          if (i==2) { 
          var th = document.createElement("th");
          th.innerHTML = "Time";
          hRow.appendChild(th);
          }
          if (i==3) { 
          var th = document.createElement("th");
          th.innerHTML = "Problem";
          hRow.appendChild(th);
          }
          if (i==4) { 
          var th = document.createElement("th");
          th.innerHTML = "Patient Id";
          hRow.appendChild(th);
          }
           if (i==5) {  
          var th = document.createElement("th");
          th.innerHTML = "Acccept";
          hRow.appendChild(th);
          }
           if (i==6) {  
          var th = document.createElement("th");
          th.innerHTML = "Update";
          hRow.appendChild(th);
          }
           if (i==7) {  
          var th = document.createElement("th");
          th.innerHTML = "reject";
          hRow.appendChild(th);
          }
      }
      tHead.appendChild(hRow);
      table.appendChild(tHead);

       


      
      // CREATE TABLE BODY .
      var tBody = document.createElement("tbody");  
      
      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      for (var i = 0; i < noOfContacts; i++) {
      
          var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
          
          
          // for (var j = 0; j < col.length; j++) {
          //  var td = document.createElement("td");
          //  td.innerHTML = myContacts[i][col[j]]+''+"1";
          //  bRow.appendChild(td);
          // }
                    

                    for (var j = 0; j<5; j++) {
                      var td = document.createElement("td");
            if(j==0){
            td.innerHTML = myContacts[i].patient_appointment_id__PATIENT_FIRST_NAME+' '+myContacts[i].patient_appointment_id__PATIENT_LAST_NAME;
            bRow.appendChild(td);
                      }
                      if(j==1){
            td.innerHTML = myContacts[i].appointment_date;
            bRow.appendChild(td);
                      }
                      if(j==2){
            td.innerHTML = myContacts[i].appointment_time;
            bRow.appendChild(td);
                      }
                      if(j==3){
            td.innerHTML = myContacts[i].problem;
            bRow.appendChild(td);
                      }
                      if(j==4){
            td.innerHTML = myContacts[i].patient_appointment_id;
            bRow.appendChild(td);
                      }

                    }
                     for (var j = 0; j < 3; j++) {
            var td = document.createElement("td");
            if(j==0){
            a_DATE= [myContacts[i].appointment_date,myContacts[i].patient_appointment_id];
             

            td.innerHTML ="<button class='btn btn-primary' onclick='show_specialisation_list(value)' value="+a_DATE+"  data-toggle='modal' data-target='#accept_modal'>Accept</button>";
            bRow.appendChild(td);
            // console.log(myContacts[i].appointment_date);
          }
          if(j==1){
            td.innerHTML = "<button  class='btn btn-warning'  onclick='update("+myContacts[i].id+")'  data-toggle='modal' data-target='#Update_modal'>Update</button>";
            bRow.appendChild(td);
          }
          if(j==2){
            td.innerHTML = "<button  class='btn btn-danger'  onclick='reject("+myContacts[i].id+")'  data-toggle='modal' data-target='#rejection_modal'>Reject</button>";
            bRow.appendChild(td);
          }
          }


          // }
          tBody.appendChild(bRow);
 
      }
      table.appendChild(tBody); 
      
      
      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("myContacts");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
      
    } 
  }
 function accept(Date_id){ 
  var date = Date_id.substring(10,0);
  var ID = Date_id.substring(11);
  console.log(date);
  console.log(ID);

  console.log(date);
           console.log("accept()");          
          let xhr = new XMLHttpRequest();      
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Receptionist_interface/approve_appointments/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) {
                 Response_data =   JSON.parse(this.responseText);
                 console.log("Response_data");                  
                  } 
          };  
          var data = JSON.stringify({ "id" : ID,"appointment_date" : date});            
          xhr.send(data); 
          console.log(data)
          // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
          console.log("accept(/)");
           // window.location = "patient_registration.html";
      }

 


function update(ID){
  console.log("update_()")
  console.log(ID);
  // var ID=ID;
  localStorage.setItem("update_with_id",ID);

};


function modification(){
           console.log("reject()");
           var ID = localStorage.getItem("update_with_id");
           var Update_appointment_date = document.getElementById("update_appointment_date");
           var Update_appointment_time = document.getElementById("update_appointment_time");


           console.log(ID);         
          let xhr = new XMLHttpRequest();      
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Patient_interface/Patient_login/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) {
                 modification_response_by_manager =   JSON.parse(this.responseText);
                 console.log("modification_response_by_manager"); 
                 alert("Update Successfully");                 
                  } 
          };  
         var data = JSON.stringify({"appointment_date" : Update_appointment_date.value,"appointment_time" : Update_appointment_time.value});      
          xhr.send(data); 
          console.log(data)
          // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
          console.log("reject(/)");
           // window.location = "patient_registration.html";
      }







function reject(ID){
  console.log("reject_()")
  console.log(ID);
  // var ID=ID;
  localStorage.setItem("reject_with_id",ID);

};




function reject_with_reason(){
           console.log("reject()");
           var ID = localStorage.getItem("reject_with_id");
           var Reason = document.getElementById("reson_of_rejection");
           console.log(ID);         
          let xhr = new XMLHttpRequest();      
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Patient_interface/Patient_login/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) {
                 Response_data =   JSON.parse(this.responseText);
                 console.log("Response_data");
                  alert("Reject Successfully");                      
                  } 
          };  
         var data = JSON.stringify({"reason" : Reason.value,"id" : ID});      
          xhr.send(data); 
          console.log(data)
          // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
          console.log("reject(/)");
           // window.location = "patient_registration.html";
      }




var specialisation_list ;
 
function show_specialisation_list(){
  console.log("arjun");
          
         var Id=2;
          let xhr = new XMLHttpRequest();
          xhr.open("GET","http://15d25afd25b4.ngrok.io/Appointment_interface/department_list/",true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 

          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) { 

                  // result.innerHTML = JSON.parse(Request.response);
                   specialisation_list =   JSON.parse(this.responseText);
                   console.log(specialisation_list);
                   generate_specialisation_list();
              } 
          };  
          var data = JSON.stringify({"id" : Id}); 

          xhr.send(data); 
          console.log(data);
        }


        var ss;
          function  generate_specialisation_list(){  
    var noOfSpecialisation = specialisation_list.length;
    
    if(noOfSpecialisation>0){
      
 
    
      var table = document.createElement("table");
      
      
 
      var col = []; 
      for (var i = 0; i < noOfSpecialisation; i++) {
        for (var key in specialisation_list[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }
      
      
      var tHead = document.createElement("thead");  
        
      
      var hRow = document.createElement("tr");
      
      var tBody = document.createElement("tbody");  
      

      for (var i = 0; i < noOfSpecialisation; i++) {
      
          var bRow = document.createElement("tr"); 
          
          

                   
                      var td = document.createElement("td");
           
            // td.innerHTML = specialisation_list[i].SPECIALISATION;
            // bRow.appendChild(td);
             ss = specialisation_list[i].SPECIALISATION;
             id = specialisation_list[i].id;
            td.innerHTML ="<button class='btn btn-primary' onclick='specialiased_doctor_list(value)' value="+ ss+"  data-toggle='modal' data-target='#specialiased_doctor_list'>"+specialisation_list[i].SPECIALISATION+"</button>";
            bRow.appendChild(td);
                   
                   
    
          tBody.appendChild(bRow)
 
      }
      table.appendChild(tBody); 
      

      var divContainer = document.getElementById("specialisation_list");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
      
    } 
  }





  var specialiased_doctor_list_response;

  function specialiased_doctor_list(Specialisation){ 
 
  console.log(Specialisation); console.log("specialiased_doctor_list()");     
       let xhr = new XMLHttpRequest();      
  xhr.open("POST","http://15d25afd25b4.ngrok.io/Appointment_interface/Doctor_list/",
  true);  xhr.setRequestHeader("Content-Type", "application/json"); 
  xhr.onreadystatechange = function () {  if (xhr.readyState === 4 &&
  xhr.status === 200) {
   specialiased_doctor_list_response =JSON.parse(this.responseText); // console.log();   
  console.log(specialiased_doctor_list_response); 

               generate_doctor_list();   
              } 

          };  
          var data = JSON.stringify({ "SPECIALISATION" : Specialisation});            
          xhr.send(data); 
          console.log(data)
          // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
          console.log("specialiased_doctor_list(/)");
           // window.location = "patient_registration.html";
      }


function  generate_doctor_list(){  
    var noOfContacts = specialiased_doctor_list_response.length;
    
   if(noOfContacts>0){
      
 
      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");
      table.style.width = '100%';
      // table.setAttribute('border', '1');
      table.setAttribute('cellspacing', '0');
      table.setAttribute('cellpadding', '5');
      
      // retrieve column header ('Name', 'Email', and 'Mobile')
 
      var col = []; // define an empty array
      for (var i = 0; i < noOfContacts; i++) {
        for (var key in myContacts[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }
      
      // CREATE TABLE HEAD .
      var tHead = document.createElement("thead");  
        
      
      // CREATE ROW FOR TABLE HEAD .
      var hRow = document.createElement("tr");
      
      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      
          var th = document.createElement("th");
          th.innerHTML = "Doctor Name";
          hRow.appendChild(th);
         
            var th = document.createElement("th");
          th.innerHTML = "Id";
          hRow.appendChild(th);
         
      tHead.appendChild(hRow);
      table.appendChild(tHead);

       


      
      // CREATE TABLE BODY .
      var tBody = document.createElement("tbody");  
      
      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      for (var i = 0; i < noOfContacts; i++) {
      
          var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
          
         
                    for (var j = 0; j<1; j++) {
                      var td = document.createElement("td");
            if(j==0){
            td.innerHTML = specialiased_doctor_list_response[i].DOCTOR_FIRST_NAME+' '+specialiased_doctor_list_response[i].DOCTOR_LAST_NAME;
            bRow.appendChild(td);
                      }
                      if(j==1){
            td.innerHTML = myContacts[i].appointment_date;
            bRow.appendChild(td);
                      }
                        }


                     for (var j = 0; j < 3; j++) {
            var td = document.createElement("td");
            if(j==0){
            a_DATE= myContacts[i].appointment_date;

            td.innerHTML ="<button class='btn btn-primary' onclick='show_specialisation_list()'  data-toggle='modal' data-target='#accept_modal'>Accept</button>";
            bRow.appendChild(td);
            // console.log(myContacts[i].appointment_date);
          }
         
          }


          // }
          tBody.appendChild(bRow);
 
      }
      table.appendChild(tBody); 
      var divContainer = document.getElementById("specialiased_doctor_list");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
      
    } 
  }   




  

var registered_doctor_response;


  function Registered_doctor(){

   console.log("registered_doctor_response()");
          
           

           // console.log(ID);         
          let xhr = new XMLHttpRequest();      
          xhr.open("GET","http://15d25afd25b4.ngrok.io/Receptionist_interface/view_doctors/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) {
                 registered_doctor_response =   JSON.parse(this.responseText);
                 console.log("registered_doctor_response");
                  console.log(registered_doctor_response); 
                   console.log("registered_doctor_response");
                    registered_doctor_list();               
                  } 
          };  
         
          xhr.send(); 
       
          // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
          console.log("registered_doctor_response(/)");

}





function registered_doctor_list(){

  
    var noOfContacts = registered_doctor_response.length;
    
    if(noOfContacts>0){
      
 
      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");
      table.style.width = '100%';
      // table.setAttribute('border', '1');
      table.setAttribute('cellspacing', '0');
      table.setAttribute('cellpadding', '5');
      
      // retrieve column header ('Name', 'Email', and 'Mobile')
 
      var col = []; // define an empty array
      for (var i = 0; i < noOfContacts; i++) {
        for (var key in registered_doctor_response[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }
      
      // CREATE TABLE HEAD .
      var tHead = document.createElement("thead");  
        
      
      // CREATE ROW FOR TABLE HEAD .
      var hRow = document.createElement("tr");
      
      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      for (var i = 0; i < 4; i++) {
        if (i==0) { 
          var th = document.createElement("th");
          th.innerHTML = "Doctor Name";
          hRow.appendChild(th);
          }
          if (i==1) { 
          var th = document.createElement("th");
          th.innerHTML = "SPECIALISATION";
          hRow.appendChild(th);
          }
          if (i==2) { 
          var th = document.createElement("th");
          th.innerHTML = "Id";
          hRow.appendChild(th);
          }
          if (i==3) { 
          var th = document.createElement("th");
          th.innerHTML = "Number Of Patient Under dotor";
          hRow.appendChild(th);
          }
         
           
      }
      tHead.appendChild(hRow);
      table.appendChild(tHead);

       


      
      // CREATE TABLE BODY .
      var tBody = document.createElement("tbody");  
      
      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      for (var i = 0; i < noOfContacts; i++) {
      
          var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
          
          
          // for (var j = 0; j < col.length; j++) {
          //  var td = document.createElement("td");
          //  td.innerHTML = myContacts[i][col[j]]+''+"1";
          //  bRow.appendChild(td);
          // }
                    

                    for (var j = 0; j<5; j++) {
                      var td = document.createElement("td");
            if(j==0){
            td.innerHTML = registered_doctor_response[i].DOCTOR_FIRST_NAME+' '+registered_doctor_response[i].DOCTOR_LAST_NAME;
            bRow.appendChild(td);
                      }
                      if(j==1){
            td.innerHTML = registered_doctor_response[i].SPECIALISATION;
            bRow.appendChild(td);
                      }
                      if(j==2){
            td.innerHTML = registered_doctor_response[i].id;
            bRow.appendChild(td);
                      }
                      if(j==3){
            td.innerHTML = registered_doctor_response[i].patient_count;
            bRow.appendChild(td);
                      }
                      
                   
                     
            if(j==4){
            a_ID= registered_doctor_response[i].id;
             

            td.innerHTML ="<button class='btn btn-primary'  data-toggle='modal' data-target='#patient_under_doctor'  onclick='show_patient_under_doctor(value) 'value="+a_ID+">Patients Under "+registered_doctor_response[i].DOCTOR_FIRST_NAME+"</button>";
            bRow.appendChild(td);
            // console.log(myContacts[i].appointment_date);
         
          }

             }
          // }
          tBody.appendChild(bRow);
 
      }
      table.appendChild(tBody); 
      
      
      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("registered_doctor");
      // divContainer.innerHTML = "vg";
      divContainer.appendChild(table);
      
    } 
  }

var response_to_show_patient_under_doctor;

function show_patient_under_doctor(I_D){
  console.log("show_patient_under_doctor(_)");

     let xhr = new XMLHttpRequest();      
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Receptionist_interface/view_patients/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
            console.log("onreadystatechange");
              if (xhr.readyState === 4 && xhr.status === 200) {
                 response_to_show_patient_under_doctor =   JSON.parse(this.responseText);
                 console.log("response_to_show_patient_under_doctor");
                  console.log(response_to_show_patient_under_doctor); 
                   console.log("response_to_show_patient_under_doctor");
                    generate_patient_under_doctor();               
                  } 
          };  
 
  // console.log(Specialisation);
   // console.log("specialiased_doctor_list()");     
  //      let xhr = new XMLHttpRequest();      
  // xhr.open("POST","http://0014193309a8.ngrok.io/Receptionist_interface/view_patients/",true);  xhr.setRequestHeader("Content-Type", "application/json"); 
  // xhr.onreadystatechange = function () {  if (xhr.readyState === 4 &&xhr.status === 200) {
  //   console.log("onreadystatechange(_)");
  //  response_to_show_patient_under_doctor =JSON.parse(this.responseText); // console.log();   
  // console.log("response_to_show_patient_under_doctor"); 
  // console.log(response_to_show_patient_under_doctor);

  //              // generate_patient_under_doctor();   
               

  //         }  
          var data = JSON.stringify({ "id" : I_D});            
          xhr.send(data); 
          console.log(data);
          // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
          console.log("specialiased_doctor_list(/)");
           // window.location = "patient_registration.html";
      }


function  generate_patient_under_doctor(){  
    var noOfContacts = response_to_show_patient_under_doctor.length;
    console.log("generate_patient_under_doctor()")
   if(noOfContacts>0){
      
 
      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");
      table.style.width = '100%';
      // table.setAttribute('border', '1');
      table.setAttribute('cellspacing', '0');
      table.setAttribute('cellpadding', '5');
      
      // retrieve column header ('Name', 'Email', and 'Mobile')
 
      var col = []; // define an empty array
      for (var i = 0; i < noOfContacts; i++) {
        for (var key in response_to_show_patient_under_doctor[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }
      
      // CREATE TABLE HEAD .
      var tHead = document.createElement("thead");  
        
      
      // CREATE ROW FOR TABLE HEAD .
      var hRow = document.createElement("tr");
      
      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      for (var i = 0; i < 2; i++) {
        if (i==0) { 
          var th = document.createElement("th");
          th.innerHTML = "Patient Name";
          hRow.appendChild(th);
          }
          if (i==1) { 
          var th = document.createElement("th");
          th.innerHTML = "ID";
          hRow.appendChild(th);
          }
         
         
           
      }
      tHead.appendChild(hRow);
      table.appendChild(tHead);

       


      
      // CREATE TABLE BODY .
      var tBody = document.createElement("tbody");  
      
      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      for (var i = 0; i < noOfContacts; i++) {
      
          var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
        
                    

                    for (var j = 0; j<2; j++) {
                      var td = document.createElement("td");
            if(j==0){
            td.innerHTML = response_to_show_patient_under_doctor[i].patient_appointment_id__PATIENT_FIRST_NAME+' '+response_to_show_patient_under_doctor[i].patient_appointment_id__PATIENT_LAST_NAME;
            bRow.appendChild(td);
                      }
                      if(j==1){
            td.innerHTML = response_to_show_patient_under_doctor[i].patient_appointment_id;
            bRow.appendChild(td);
                      }
                     

             }
          // }
          tBody.appendChild(bRow);
 
      }
      table.appendChild(tBody); 
      
      
      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("patient_according_to_doctor");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
      
    } 


}




// var registered_paitient_response;
// function Registered_patient(){

//   console.log("registered_doctor_response()");
          
           

//            // console.log(ID);         
//           let xhr = new XMLHttpRequest();      
//           xhr.open("GET","http://f0292d32c728.ngrok.io/Receptionist_interface/view_doctors/", true); 
//           xhr.setRequestHeader("Content-Type", "application/json"); 
//           xhr.onreadystatechange = function () { 
//               if (xhr.readyState === 4 && xhr.status === 200) {
//                  registered_paitient_response =   JSON.parse(this.responseText);
//                  console.log("registered_paitient_response");
//                   console.log(registered_paitient_response); 
//                    console.log("registered_paitient_response");
//                     registered_patient_list();               
//                   } 
//           };  
         
//           xhr.send(); 
       
//           // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
//           console.log("registered_doctor_response(/)");

// }
  
//  