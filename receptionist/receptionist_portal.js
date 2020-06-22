
 


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



 var jsData =[{
  "PATIENT_FIRST_NAME": "Cayla",
  "patient_appointment_details__appointment_date": "3/24/2020",
  "patient_appointment_details__appointment_time": "11:54",
  "patient_appointment_details__preferred_location": "Huayuan",
  "patient_appointment_details__problem": "Browsebug",
  "patient_appointment_details__speciality": "Twitterworks",
  "id": "111",
  "PATIENT_LAST_NAME": "Suett"
}, {
  "PATIENT_FIRST_NAME": "Lissa",
  "patient_appointment_details__appointment_date": "1/23/2020",
  "patient_appointment_details__appointment_time": "22:47",
  "patient_appointment_details__preferred_location": "Dve Mogili",
  "patient_appointment_details__problem": "Realblab",
  "patient_appointment_details__speciality": "Realbuzz",
  "id": "180",
  "PATIENT_LAST_NAME": "McShirrie"
}, {
  "PATIENT_FIRST_NAME": "Kippar",
  "patient_appointment_details__appointment_date": "3/21/2020",
  "patient_appointment_details__appointment_time": "9:52",
  "patient_appointment_details__preferred_location": "Mosetse",
  "patient_appointment_details__problem": "Edgepulse",
  "patient_appointment_details__speciality": "Flashset",
  "id": "180",
  "PATIENT_LAST_NAME": "Mayell"
}, {
  "PATIENT_FIRST_NAME": "Amberly",
  "patient_appointment_details__appointment_date": "3/18/2020",
  "patient_appointment_details__appointment_time": "3:04",
  "patient_appointment_details__preferred_location": "Khursā",
  "patient_appointment_details__problem": "Twinder",
  "patient_appointment_details__speciality": "Kimia",
  "id": "12",
  "PATIENT_LAST_NAME": "Hegley"
}]



var myContacts = [
    { "name": "Parvez Ansari", "email": "ansariparvez@gmai.com", "mobile":"9998979695" },
    { "name": "Tayyeb Shaikh", "email": "tshaikh1981@gmai.com", "mobile":"9091929394" },
    { "name": "Ashfaque Shaikh", "email": "ashly786@gmai.com", "mobile":"8081828384" }
  ];
 
function generateDynamicTable(){
  
    var noOfContacts = myContacts.length;
    
    if(noOfContacts>0){
      
 
      // CREATE DYNAMIC TABLE.
      var table = document.createElement("table");
      table.style.width = '100%';
     
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
      for (var i = 0; i < col.length; i++) {
          var th = document.createElement("th");
          th.innerHTML = col[i];
          hRow.appendChild(th);
      }
      tHead.appendChild(hRow);
      table.appendChild(tHead);
      
      // CREATE TABLE BODY .
      var tBody = document.createElement("tbody");  
      
      // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
      for (var i = 0; i < noOfContacts; i++) {
      
          var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .
          
          
          for (var j = 0; j < col.length; j++) {
            var td = document.createElement("td");
            td.innerHTML = myContacts[i][col[j]]+''+"1";
            bRow.appendChild(td);
          }
          for (var j = 0; j < 3; j++) {
            var td = document.createElement("td");
            if(j==0){
            td.innerHTML = "<button class='btn btn-primary' onclick='accept("+i+")'>Accept<button>";
            bRow.appendChild(td);
          }
          if(j==1){
            td.innerHTML = "<button class='btn btn-warning'>Update<button>";
            bRow.appendChild(td);
          }
          if(j==2){
            td.innerHTML = "<button class='btn btn-danger'>Reject<button>";
            bRow.appendChild(td);
          }
          }
          tBody.appendChild(bRow)
 
      }
      table.appendChild(tBody); 
      
      
      // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
      var divContainer = document.getElementById("myContacts");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
      
    } 
  }
 function accept(x){
  alert(x);
 }
