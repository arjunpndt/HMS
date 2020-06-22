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
          $scope.patient_martial_status=  localStorage.getItem("patient_anemia");
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

            localStorage.getItem("patient_password");
           ID =localStorage.getItem("patient_id");
            $scope.msg=ID;

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
        xhr.open("POST", "http://21982d2acef3.ngrok.io/Appointment_interface/Patient_appointment/", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() { console.log("checked_first");

            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log("checked");
                Response_data =   JSON.parse(this.responseText);
                 console.log(Response_data);
              
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



