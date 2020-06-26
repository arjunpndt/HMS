 var ID;
 var Appointment_status;
 var app = angular.module('Doctor_login', [ "ui.router","ngStorage" ]); 
  app.config(function($stateProvider,$urlRouterProvider, )
 { 
      $stateProvider 
    .state('profile', {     
      url : '/profile', 
      templateUrl : "doctor_profile.html", 
      // controller : "HomeCtrl"
    }) 
    .state('story',{
      url : '/story',
      views:{
        'test':{
                    template : "<h1>sample01</h1>", 
        }
      }
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
        .state('prescription', { 
            url : '/prescription', 
            templateUrl : "prescription.html", 
            // controller : "SignupCtrl"
        }) 
        .state('logout',{
          url : '/logout',
          template : "login.html"

        });
         $urlRouterProvider.otherwise("/"); 
    
}); 



  app.controller('doctorCTRL', function ($scope, $http,$localStorage) {
          $scope.doctor_first_name=  localStorage.getItem("doctor_first_name");
          $scope.doctor_last_name=  localStorage.getItem("doctor_last_name");
          $scope.doctor_father_name =  localStorage.getItem("doctor_father_name");
          $scope.doctor_mother_name  = localStorage.getItem("doctor_mother_name");
          $scope.doctor_gender = localStorage.getItem("doctor_gender");
          $scope.doctor_blood_group = localStorage.getItem("doctor_blood_group");
          $scope.doctor_dob = localStorage.getItem("doctor_dob");
          $scope.doctor__height = localStorage.getItem("doctor__height");
          $scope.doctor_weight = localStorage.getItem("doctor_weight");
          $scope.doctor_martial_status = localStorage.getItem("doctor_martial_status");
          $scope.doctor_martial_status=  localStorage.getItem("doctor_anemia");
          $scope.doctor_asthma =  localStorage.getItem("doctor_asthma");
          $scope.doctor_bronchitis=  localStorage.getItem("doctor_bronchitis");
          $scope.doctor_chickenpox=  localStorage.getItem("doctor_chickenpox");
          $scope.doctor_diabeties=  localStorage.getItem("doctor_diabeties");
          $scope.doctor_pneumoni=  localStorage.getItem("doctor_pneumonia");
          $scope.doctor_thyroid=  localStorage.getItem("doctor_thyroid");
          $scope.doctor_ulcer=  localStorage.getItem("doctor_ulcer");
          $scope.doctor_other = localStorage.getItem("doctor_other",);
          $scope.doctor_street_address = localStorage.getItem("doctor_street_address");
          $scope.doctor_city = localStorage.getItem("doctor_city");
          $scope.doctor_state = localStorage.getItem("doctor_state",);
          $scope.doctor_postal_code = localStorage.getItem("doctor_postal_code");
          $scope.doctor_country = localStorage.getItem("doctor_country");
          $scope.doctor_mobile = localStorage.getItem("doctor_mobile");
          $scope.doctor_adhaar = localStorage.getItem("doctor_adhaar");
          $scope.doctor_mail = localStorage.getItem("doctor_mail");

            localStorage.getItem("doctor_password");
           ID =localStorage.getItem("doctor_id");
            $scope.msg=ID;
             // $scope.doctor_mail = localStorage.getItem("");


});


// appointment



// function appointment(){
//     console.log("appointment_fun_");
//      let Appointment_date = document.querySelector('#appointment_date');
//         let Appointment_time = document.querySelector('#appointment_time');
//         let Speciality = document.querySelector('#SPECIALZATION');
//         let Preferred_location = document.querySelector('#Preferred_city');
//         let Problem = document.querySelector('#problem');
//         let Id=ID;
//         console.log(Id);
//         console.log(Id);
//         console.log(Id);

       


//      let xhr = new XMLHttpRequest();
//         xhr.open("POST", "http://21982d2acef3.ngrok.io/Appointment_interface/doctor_appointment/", true);
//         xhr.setRequestHeader("Content-Type", "application/json");

//         xhr.onreadystatechange = function() { console.log("checked_first");

//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 console.log("checked");
//                 Response_data =   JSON.parse(this.responseText);
//                  console.log(Response_data);
              
//                                console.log("checked done");

                

//             }
//         };
//          var data = JSON.stringify({
//             "id": Id,
//             "appointment_date": Appointment_date.value,
//             "appointment_time": Appointment_time.value,
//             "speciality": Speciality.value,
//             "preferred_location": Preferred_location.value,
//             "problem": Problem.value,
//             // "id": Id.value,
             
//         });

//         xhr.send(data);
//         console.log(data);
//         // localStorage.setItem("doctor_data",data);
//         var json_data=localStorage.getItem("data");
//         console.log("end");
       
//     }


var myContacts ;
 
function generateDynamicTable(){

console.log("arjun");
          
         var Id= localStorage.getItem("doctor_id");
          let xhr = new XMLHttpRequest();
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Doctor_interface/pending_appointments_doctor/");
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
            var a_id_date= [myContacts[i].appointment_date,myContacts[i].patient_appointment_id,myContacts[i].problem];
            

            td.innerHTML ="<button class='btn btn-primary' onclick='accept(value)' value="+a_id_date+" >Accept</button>";
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
 function accept(A_id_date){ 
 console.log("$"); 
  console.log(A_id_date);
  var date = A_id_date.substring(10,0);
  var id = A_id_date.substring(12,11);
  var problem = A_id_date.substring(13);
  console.log(date)
    console.log(problem);
   console.log(id);
  console.log("$");

  
    var  ID=A_id_date[1];
    var  d_ate = A_id_date[0];
console.log(d_ate);
           console.log(A_id_date[0]);  
        
          let xhr = new XMLHttpRequest();      
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Doctor_interface/appointment_approve/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) {
                 Response_data =   JSON.parse(this.responseText);
                 console.log("Response_data");                  
                  } 
          };  
          var data = JSON.stringify({ "patient_appointment_id" : id,"appointment_date" : date, "problem" :problem });            
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




var generate_approved_patient_list_response;
function approved_patient(){
   console.log("approved_doctor()");
          ID =localStorage.getItem("doctor_id");;
           

           console.log(ID);         
          let xhr = new XMLHttpRequest();      
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Doctor_interface/view_approved_appointments/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) {
                 generate_approved_patient_list_response =   JSON.parse(this.responseText);
                 console.log("generate_approved_patient_list_response"); 
                    generate_approved_patient_list();               
                  } 
          };  
         var data = JSON.stringify({"id" : ID});      
          xhr.send(data); 
          console.log(data);
          // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
          console.log("approved_doctor(/)");

}


function generate_approved_patient_list(){

  
    var noOfContacts = generate_approved_patient_list_response.length;
    
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
        for (var key in generate_approved_patient_list_response[i]) {
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
          th.innerHTML = "Patient Name";
          hRow.appendChild(th);
          }
          if (i==1) { 
          var th = document.createElement("th");
          th.innerHTML = "ID";
          hRow.appendChild(th);
          }
          if (i==2) { 
          var th = document.createElement("th");
          th.innerHTML = "Problem";
          hRow.appendChild(th);
          }
          if (i==3) { 
          var th = document.createElement("th");
          th.innerHTML = "Prescription";
          hRow.appendChild(th);
          }
      }
      tHead.appendChild(hRow);
      table.appendChild(tHead);

       


      
      // CREATE TABLE BODY .
      var tBody = document.createElement("tbody");  
      
     
      for (var i = 0; i < noOfContacts; i++) {
      
          var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
          
                    for (var j = 0; j<4; j++) {
                      var td = document.createElement("td");
            if(j==0){
            td.innerHTML = generate_approved_patient_list_response[i].patient_appointment_id__PATIENT_FIRST_NAME+' '+generate_approved_patient_list_response[i].patient_appointment_id__PATIENT_LAST_NAME;
            bRow.appendChild(td);
                      }
                      if(j==1){
            td.innerHTML = generate_approved_patient_list_response[i].patient_appointment_id;
            bRow.appendChild(td);
                      }
                      if(j==2){
            td.innerHTML = generate_approved_patient_list_response[i].problem;
            bRow.appendChild(td);
                      }

                    
                    
            if(j==3){
            var a_id_date= [generate_approved_patient_list_response[i].appointment_date,generate_approved_patient_list_response[i].patient_appointment_id,generate_approved_patient_list_response[i].problem];
            td.innerHTML ="<button class='btn btn-primary' onclick='Write_Prescription_1(value)' value="+a_id_date+" data-toggle='modal' data-target='#prescription_modal'>Write Prescription</button>";
            bRow.appendChild(td);
            // console.log(myContacts[i].appointment_date);
          }
          
         }


          // }
          tBody.appendChild(bRow);
 
      }
      table.appendChild(tBody); 
      
      
      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("generate_approved_patient_list");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
      
    } 
  }


function Write_Prescription_1(A_id_date){
  console.log("Write_Prescription_1");
  

   console.log(A_id_date);
  var date = A_id_date.substring(10,0);
   console.log("date");
    console.log(date);
  var id = A_id_date.substring(12,11);
   console.log("id");
   console.log(id);   
  var problem = A_id_date.substring(13);
  localStorage.setItem("approved_patient_date",date);
  localStorage.setItem("approved_patient_id",id);
  localStorage.setItem("approved_patient_problem",problem);
 
  console.log(date);
  console.log("Write_Prescription_1");
    

}



  function submit_prescription(){
    console.log("submit_prescription");
   var Prescr_ = document.querySelector("#Write_Prescription");
   var date_=localStorage.getItem("approved_patient_date");
   var id_ =localStorage.getItem("approved_patient_id");
   var problem_= localStorage.getItem("approved_patient_problem");


    console.log("submt");         
          let xhr = new XMLHttpRequest();      
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Doctor_interface/prescription/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) {
                 generate_approved_patient_list_response =   JSON.parse(this.responseText);
                 console.log("generate_approved_patient_list_response"); 
                    // generate_approved_patient_list();               
                  } 
          };  
         var data = JSON.stringify({"id" : id_,"prescription":Prescr_.value, "problem":problem_.value,"appointment_date":date_});      
          xhr.send(data); 
          console.log(data);
          // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
          console.log("approved_doctor(/)");




  }

