 var ID;
 var Appointment_status;
 var app = angular.module('Patient_login', [ "ui.router","ngStorage" ]); 
  app.config(function($stateProvider,$urlRouterProvider, )
 { 
      $stateProvider 
    .state('profile', {     
      url : '/profile', 
      templateUrl : "patient_profile.html", 
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
    .state('prescription_view', {
        url : '/prescription_view',
        templateUrl: "prescription_view.html",   
        })

    .state('appointment_history', {
        url : '/appointment_history',
        templateUrl: "appointment_history.html",   
        })
    
    .state('medical_history', {
        url : '/medical_history',
        templateUrl: "medical_history.html",   
        })
        .state('Msg-2', { 
            url : '/msg-2', 
            template : "<h1>information about second </h1>", 
            // controller : "SignupCtrl"
        }) 
        .state('logout',{
          url : '/logout',
          template : "login.html"

        });
         $urlRouterProvider.otherwise("/"); 
    
}); 



  app.controller('patientCTRL', function ($scope, $http,$localStorage) {
          $scope.patient_first_name=  localStorage.getItem("patient_first_name");
          $scope.patient_last_name=  localStorage.getItem("patient_last_name");
          $scope.patient_father_name =  localStorage.getItem("patient_father_name");
          $scope.patient_mother_name  = localStorage.getItem("patient_mother_name");
          $scope.patient_gender = localStorage.getItem("patient_gender");
          $scope.patient_blood_group = localStorage.getItem("patient_blood_group");
          $scope.patient_dob = localStorage.getItem("patient_dob");
          $scope.patient__height = localStorage.getItem("patient__height");
          $scope.patient_weight = localStorage.getItem("patient_weight");
          $scope.patient_martial_status = localStorage.getItem("patient_martial_status");
          // $scope.patient_martial_status=  localStorage.getItem("patient_anemia");
          $scope.patient_asthma =  localStorage.getItem("patient_asthma");
          $scope.patient_bronchitis=  localStorage.getItem("patient_bronchitis");
          $scope.patient_chickenpox=  localStorage.getItem("patient_chickenpox");
          $scope.patient_diabeties=  localStorage.getItem("patient_diabeties");
          $scope.patient_pneumoni=  localStorage.getItem("patient_pneumonia");
          $scope.patient_thyroid=  localStorage.getItem("patient_thyroid");
          $scope.patient_ulcer=  localStorage.getItem("patient_ulcer");
          $scope.patient_other = localStorage.getItem("patient_other",);
          $scope.patient_street_address = localStorage.getItem("patient_street_address");
          $scope.patient_city = localStorage.getItem("patient_city");
          $scope.patient_state = localStorage.getItem("patient_state",);
          $scope.patient_postal_code = localStorage.getItem("patient_postal_code");
          $scope.patient_country = localStorage.getItem("patient_country");
          $scope.patient_mobile = localStorage.getItem("patient_mobile");
          $scope.patient_adhaar = localStorage.getItem("patient_adhaar");
          $scope.patient_mail = localStorage.getItem("patient_mail");
          $scope.response_of_appointment = localStorage.getItem("response_of_appointment");

            localStorage.getItem("patient_password");
           ID =localStorage.getItem("patient_id");
            $scope.msg=ID;


           // $scope.prescription_view_details_date   =     localStorage.setItem("prescription_view_details_date";
           // $scope.prescription_view_details_dad   =     localStorage.setItem("prescription_view_details_date");
           // $scope.prescription_view_details_datdfse   =     localStorage.setItem("prescription_view_details_date");
           // $scope.prescription_view_details_dasdfte   =     localStorage.setItem("prescription_view_details_date");
           // $scope.prescription_view_details_dadfste  =      localStorage.setItem("prescription_view_details_date");
                   

});


// appointment



function appointment(){
    console.log("appointment_fun_");
     let Appointment_date = document.querySelector('#appointment_date');
        let Appointment_time = document.querySelector('#appointment_time');
        let Speciality = document.querySelector('#SPECIALZATION');
        let Preferred_location = document.querySelector('#Preferred_city');
        let Problem = document.querySelector('#problem');
        let Id=ID;
        console.log(Id);
        console.log(Id);
        console.log(Id);

       


     let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://15d25afd25b4.ngrok.io/Appointment_interface/Patient_appointment/", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() { console.log("checked_first");

            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("checked");
               var Response_data =   JSON.parse(this.responseText);
                 console.log(Response_data);

                 localStorage.setItem("response_of_appointment",Response_data);             
                 console.log("checked done");


                

            }
        };
         var data = JSON.stringify({
            "id": Id,
            "appointment_date": Appointment_date.value,
            "appointment_time": Appointment_time.value,
            "speciality": Speciality.value,
            "preferred_location": Preferred_location.value,
            "problem": Problem.value,
            // "id": Id.value,
             
        });

        xhr.send(data);
        console.log(data);
        // localStorage.setItem("patient_data",data);
        var json_data=localStorage.getItem("data");
        console.log("end");
       
    }



var generate_prescription_view_list_response;

function prescription_view(){
   console.log("prescription_view()");
          
           

           console.log(ID);         
          let xhr = new XMLHttpRequest();      
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Patient_interface/view_appointment_dates/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) {
                 generate_prescription_view_list_response =   JSON.parse(this.responseText);
                 console.log("generate_prescription_view_list_response");
                  console.log(generate_prescription_view_list_response); 
                   console.log("generate_prescription_view_list_response");
                    show_specialisation_list();               
                  } 
          };  
         var data = JSON.stringify({"id" : ID});      
          xhr.send(data); 
          console.log(data);
          // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
          console.log("approved_doctor(/)");

}


function generate_prescription_view_list(){
    var noOfContacts = generate_prescription_view_list_response.length;  
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
        for (var key in generate_prescription_view_list_response[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }      
      // CREATE TABLE HEAD .
      var tHead = document.createElement("thead");  
        
      
      // CREATE ROW FOR TABLE HEAD .
      var hRow = document.createElement("tr");
      var td = document.createElement("td");
      
      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      
          var th = document.createElement("th");
          th.innerHTML = "Appointment Date";
          hRow.appendChild(th);
         
      tHead.appendChild(hRow);
      table.appendChild(tHead);

       


      
      // CREATE TABLE BODY .
      var tBody = document.createElement("tbody");  
      
     
      for (var i = 0; i < noOfContacts; i++) {
      
          var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .

                      
            td.innerHTML = generate_prescription_view_list_response[i].appointment_date;
            bRow.appendChild(td);
                     

                    
                    
          
            var a_id_date= generate_prescription_view_list_response[i].appointment_date;
            td.innerHTML ="<button class='btn btn-primary' onclick='showprescription_1(value)' value="+a_id_date+">View Prescription</button>";
            bRow.appendChild(td);
            // console.log(myContacts[i].appointment_date);
          
          
         }


          // }
          tBody.appendChild(bRow);
 
      }
      table.appendChild(tBody); 
      
      
      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("generate_prescription_view_list_response");
      divContainer.innerHTML = "generate_prescription_view_list_response";
      divContainer.appendChild(table);
      
    } 
    function showprescription_1(_date){
      console.log(_date);
    }
  



var specialisation_list = generate_prescription_view_list_response;
 
function show_specialisation_list(){
  console.log("arjun");
          
         
          let xhr = new XMLHttpRequest();
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Patient_interface/view_appointment_dates/",true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 

          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) { 

                  // result.innerHTML = JSON.parse(Request.response);
                   specialisation_list =   JSON.parse(this.responseText);
                   console.log(specialisation_list);
                   generateDynamic();
              } 
          };  
          var data = JSON.stringify({"id" : ID}); 

          xhr.send(data); 
          console.log(data);}
          function  generateDynamic(){  
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
          
          

                    for (var j = 0; j<2; j++) {
                      var td = document.createElement("td");
            if(j==0){
            td.innerHTML = specialisation_list[i].appointment_date;
            bRow.appendChild(td);
                      }
                      if(j==1){
                        var dd=specialisation_list[i].appointment_date;
                        console.log(dd);
                       /* var prescription_view_details_ =[];
                      localStorage.setItem("prescription_view_details_ =["+i+"]",);
*/                    


      td.innerHTML = "<button   onclick='showprescription_1(value)' data-toggle='modal' data-target='#view_prescription' value="+dd+" >View Prescription</button>";
            bRow.appendChild(td);
                      }
                      

                    }
                   
    
          tBody.appendChild(bRow)
 
      }
      table.appendChild(tBody); 
      

      var divContainer = document.getElementById("generate_prescription_view_list_response");
      // divContainer.innerHTML = "";
      divContainer.appendChild(table);
      
    } 
  }
var  prescription_view___;

function showprescription_1(appointment_date){
          console.log("appointment_date");
           console.log(appointment_date);
          let xhr = new XMLHttpRequest();
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Patient_interface/view_prescription/",true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 

          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) { 

                  // result.innerHTML = JSON.parse(Request.response);
                   prescription_view___ =   JSON.parse(this.responseText);
                   console.log("prescription_view___");

                  
                   var name = document.querySelector('#name');
                   var html = name.innerHTML;
                   name.innerHTML=prescription_view___[0].doctor_name;

                    var date = document.querySelector('#date');
                   var html = date.innerHTML;
                   date.innerHTML=prescription_view___[0].appointment_date;

                    var problem = document.querySelector('#problem');
                   var html = problem.innerHTML;
                   problem.innerHTML=prescription_view___[0].problem;

                   var pres = document.querySelector('#pres');
                   var html = pres.innerHTML;
                   pres.innerHTML=prescription_view___[0].prescription;

                   var i_d = document.querySelector('#i_d');
                   var html = i_d.innerHTML;
                   i_d.innerHTML=prescription_view___[0].doctor_id;

                  
                   console.log("$");
                   console.log(prescription_view___);
                   // showprescription_data();
              } 
          };  
          var data = JSON.stringify({"id" : ID,"appointment_date" : appointment_date}); 

          xhr.send(data); 
          console.log(data);


        }



  


var medical_history_response;
function medical_history(){
   


    console.log("medical_history_response()");
          
           

           console.log(ID);         
          let xhr = new XMLHttpRequest();  
          console.log("medical_history_response1()");

          xhr.open("POST","http://15d25afd25b4.ngrok.io/Patient_interface/view_medical_history/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
            console.log("medical_history_response2()");

              if (xhr.readyState === 4 && xhr.status === 200) {
                 medical_history_response =   JSON.parse(this.responseText);
                
                  console.log(medical_history_response); 


                 
                  
                    var Anemia = document.querySelector('#Anemia');
                   var html = Anemia.innerHTML;
                   Anemia.innerHTML="<b>Anemia</b>  :"+" "+medical_history_response[0].Anemia;
                 
                  
                    var Asthma = document.querySelector('#Asthma');
                   var html = Asthma.innerHTML;
                   Asthma.innerHTML="<b>Asthma</b>  :"+" "+medical_history_response[0].Asthma;
                 
                    var Bronchitis = document.querySelector('#Bronchitis');
                   var html = Bronchitis.innerHTML;
                   Bronchitis.innerHTML="<b>Bronchitis</b>  :"+" "+medical_history_response[0].Bronchitis;

                    var Chickenpox = document.querySelector('#Chickenpox');
                   var html = Chickenpox.innerHTML;
                   Chickenpox.innerHTML="<b>Chickenpox</b>  :"+" "+medical_history_response[0].Chickenpox;
                 
                    var Diabetes = document.querySelector('#Diabetes');
                   var html = Anemia.innerHTML;
                   Diabetes.innerHTML="<b>Anemia</b>  :"+" "+medical_history_response[0].Diabetes;
                
                 var Pneumonia = document.querySelector('#Pneumonia');
                   var html = Pneumonia.innerHTML;
                   Pneumonia.innerHTML="<b>Pneumonia</b>  :"+" "+medical_history_response[0].Pneumonia;
                

                 
                    var Thyroid = document.querySelector('#Thyroid');
                   var html = Thyroid.innerHTML;
                   Thyroid.innerHTML="<b>Thyroid</b>  :"+" "+medical_history_response[0].Thyroid;


                    var Ulcer = document.querySelector('#Ulcer');
                   var Ulcer = Pneumonia.innerHTML;
                   Pneumonia.innerHTML="<b>Pneumonia</b>  :"+" "+medical_history_response[0].Ulcer;

                    var Other = document.querySelector('#other');
                   var html = Other.innerHTML;
                   Other.innerHTML="<b>Other</b>  :"+" "+medical_history_response[0].other;
                 

                   


              
                  } 
          };  
         var data = JSON.stringify({"id" : ID});      
          xhr.send(data); 
          console.log(data);
          // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
          console.log("appro(/)");
   

}



var appointment_history_response ;


  function Appointment_history(){

   console.log("appointment_history_response()");
          
           

           // console.log(ID);         
          let xhr = new XMLHttpRequest();      
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Patient_interface/view_appointment_history/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) {
                 appointment_history_response =   JSON.parse(this.responseText);
                 console.log("appointment_history_response");
                  console.log(appointment_history_response); 
                   console.log("appointment_history_response");
                    appointment_list();               
                  } 
          };  
         
         
         var data = JSON.stringify({"id" : ID}); 

          xhr.send(data); 
          console.log(data);


}





function appointment_list(){

  
    var noOfContacts = appointment_history_response.length;
    
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
        for (var key in appointment_history_response[i]) {
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
          th.innerHTML = "Date";
          hRow.appendChild(th);
          }
          if (i==1) { 
          var th = document.createElement("th");
          th.innerHTML = "Time";
          hRow.appendChild(th);
          }
          if (i==2) { 
          var th = document.createElement("th");
          th.innerHTML = "Problem";
          hRow.appendChild(th);
          }
           if (i==3) { 
          var th = document.createElement("th");
          th.innerHTML = "Payment";
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
                    

                    for (var j = 0; j<4; j++) {
                      var td = document.createElement("td");
            if(j==0){
            td.innerHTML =appointment_history_response[i].appointment_date;
            bRow.appendChild(td);
                      }
                      if(j==1){
            td.innerHTML = appointment_history_response[i].appointment_time;
            bRow.appendChild(td);
                      }
                      if(j==2){
            td.innerHTML = appointment_history_response[i].problem;
            bRow.appendChild(td);
                      }
                     
                   
                     
            if(j==3){
            a_ID= [appointment_history_response[i].appointment_date,appointment_history_response[i].id];
             

            td.innerHTML ="<button class='btn btn-primary'   onclick='payment(value)' value="+a_ID+">Payment</button>";
            bRow.appendChild(td);
            // console.log(myContacts[i].appointment_date);
         
          }

             }
          // }
          tBody.appendChild(bRow);
 
      }
      table.appendChild(tBody); 
      
      
      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("appointment_history");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
      
    } 
  }

var APPOINTMENT_STATUS_RECEPTIONIST;

function payment(I_D){
  console.log("show_patient_under_doctor(_)");
     var Date = I_D.substring(10,0);
    var appointment_id = I_D.substring(11);


     let xhr = new XMLHttpRequest();      
          xhr.open("POST","http://15d25afd25b4.ngrok.io/Appointment_interface/appointment_status/", true); 
          xhr.setRequestHeader("Content-Type", "application/json"); 
          xhr.onreadystatechange = function () { 
              if (xhr.readyState === 4 && xhr.status === 200) {
                 var sd =   JSON.parse(this.responseText);
                 console.log("appointment_history_response");
                  console.log(sd); 
                   console.log("appointment_history_response");
                    // appointment_list();               
                  } 
          };  


     // let xhr = new XMLHttpRequest();      
     //      xhr.open("POST","http://15d25afd25b4.ngrok.io/Appointment_interface/appointment_status/", true); 
     //      xhr.setRequestHeader("Content-Type", "application/json"); 
     //      xhr.onreadystatechange = function () { 
     //        console.log("onreadystatechange");
     //          if (xhr.readyState === 4 && xhr.status === 200) {
     //             var sd =   JSON.parse(this.responseText);
     //             console.log("response_to_show_patient_under_doctor");
     //              console.log(sd); 
     //               console.log("response_to_show_patient_under_doctor");
     //                // generate_patient_under_doctor(); 
     //            //  var a = APPOINTMENT_STATUS_RECEPTIONIST[0].APPOINTMENT_STATUS_RECEPTIONIST;
     //            // if ( a== "approved" ) {
     //            //  alert("APPROVED");
     //            // }
     //            // else{
     //            //   alert("")
     //            // }


     //              } 
     //      };  
 
          var data = JSON.stringify({ "id" : ID,"appointment_id":appointment_id,"appointment_date":Date});            
          xhr.send(data); 
          console.log(data);
          // localStorage.setItem("patient_first_name",Response_data[0].PATIENT_FIRST_NAME);         
          console.log("specialiased_doctor_list(/)");
           // window.location = "patient_registration.html";
      }


// function  generate_patient_under_doctor(){  
//     var noOfContacts = response_to_show_patient_under_doctor.length;
//     console.log("generate_patient_under_doctor()")
//    if(noOfContacts>0){
      
 
//       // CREATE DYNAMIC TABLE.
//       var table = document.createElement("table");
//       table.style.width = '100%';
//       // table.setAttribute('border', '1');
//       table.setAttribute('cellspacing', '0');
//       table.setAttribute('cellpadding', '5');
      
//       // retrieve column header ('Name', 'Email', and 'Mobile')
 
//       var col = []; // define an empty array
//       for (var i = 0; i < noOfContacts; i++) {
//         for (var key in response_to_show_patient_under_doctor[i]) {
//           if (col.indexOf(key) === -1) {
//             col.push(key);
//           }
//         }
//       }
      
//       // CREATE TABLE HEAD .
//       var tHead = document.createElement("thead");  
        
      
//       // CREATE ROW FOR TABLE HEAD .
//       var hRow = document.createElement("tr");
      
//       // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
//       for (var i = 0; i < 2; i++) {
//         if (i==0) { 
//           var th = document.createElement("th");
//           th.innerHTML = "Patient Name";
//           hRow.appendChild(th);
//           }
//           if (i==1) { 
//           var th = document.createElement("th");
//           th.innerHTML = "ID";
//           hRow.appendChild(th);
//           }
         
         
           
//       }
//       tHead.appendChild(hRow);
//       table.appendChild(tHead);

       


      
//       // CREATE TABLE BODY .
//       var tBody = document.createElement("tbody");  
      
//       // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
//       for (var i = 0; i < noOfContacts; i++) {
      
//           var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
        
                    

//                     for (var j = 0; j<2; j++) {
//                       var td = document.createElement("td");
//             if(j==0){
//             td.innerHTML = response_to_show_patient_under_doctor[i].patient_appointment_id__PATIENT_FIRST_NAME+' '+response_to_show_patient_under_doctor[i].patient_appointment_id__PATIENT_LAST_NAME;
//             bRow.appendChild(td);
//                       }
//                       if(j==1){
//             td.innerHTML = response_to_show_patient_under_doctor[i].patient_appointment_id;
//             bRow.appendChild(td);
//                       }
                     

//              }
//           // }
//           tBody.appendChild(bRow);
 
//       }
//       table.appendChild(tBody); 
      
      
//       // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
//       var divContainer = document.getElementById("patient_according_to_doctor");
//       divContainer.innerHTML = "";
//       divContainer.appendChild(table);
      
//     } 


// }