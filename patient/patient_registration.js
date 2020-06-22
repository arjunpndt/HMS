// registration
   function sendJSON() {
        console.log("arjun");

        let PATIENT_FIRST_NAME = document.querySelector('#first_name');
        let PATIENT_LAST_NAME = document.querySelector('#last_name');
        let FATHER_NAME = document.querySelector('#patient_father');
        let MOTHER_NAME = document.querySelector('#patient_mother');
        let GENDER = document.querySelector('input[name="Gender"]');
        let BLOOD_GROUP = document.querySelector('#patient_blood');
        let DOB = document.querySelector('#patient_dob');
        let HEIGHT = document.querySelector('#patient_height');
        let WEIGHT = document.querySelector('#patient_weight');
        let MARITAL_STATUS = document.querySelectorAll('input[name="marital_status"]');
        // const Anemia = document.getElementById('Anemia'); 

        let Asthma = document.querySelector('#Asthma');
        
        let Bronchitis = document.querySelector('#Bronchitis');
        let Chickenpox = document.querySelector('#Chickenpox');
        let Diabetes = document.querySelector('#Diabetes');
        let Pneumonia = document.querySelector('#Pneumonia');
        let Thyroid = document.querySelector('#Thyroid_Disease');
        let Ulcer = document.querySelector('#Ulcer');
        let other = document.querySelector('#other_disease');
        let STREET_ADDRESS = document.querySelector('#street_address');
        let CITY = document.querySelector('#city');
        let STATE = document.querySelector('#state');
        let POSTAL_CODE = document.querySelector('#postal_code');
        let Country = document.querySelector('#country');
        let MOBILE_NO = document.querySelector('#patient_mobile');
        let AADHAR_NO = document.querySelector('#patient_adhaar');
        let MAIL = document.querySelector('#patient_mail');
        let PASSWORD = document.querySelector('#patient_password');





        // let user_prev = document.querySelector('#user_prev');
        // console.log(user_mail) 
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "http://f3fd065efda6.ngrok.io/Patient_interface/patient_registration/", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {

                result.innerHTML = JSON.parse(Request.response);

            }
        };
        var data = JSON.stringify({
            "PATIENT_FIRST_NAME": PATIENT_FIRST_NAME.value,
            "PATIENT_LAST_NAME": PATIENT_LAST_NAME.value,
            "FATHER_NAME": FATHER_NAME.value,
            "MOTHER_NAME": MOTHER_NAME.value,
            " GENDER": GENDER.value,
            " BLOOD_GROUP": BLOOD_GROUP.value,
            "DOB": DOB.value,
            "HEIGHT": HEIGHT.value,
            "WEIGHT": WEIGHT.value,
            "MARITAL_STATUS": MARITAL_STATUS.value,
            "Anemia": Anemia.value,
            "Asthma": Asthma.value,
            "Bronchitis": Bronchitis.value,
            "Chickenpox": Chickenpox.value,
            "Diabetes": Diabetes.value,
            "Pneumonia": Pneumonia.value,
            "Thyroid": Thyroid.value,
            "Ulcer": Ulcer.value,
            "other": other.value,
            "STREET_ADDRESS": STREET_ADDRESS.value,
            "CITY": CITY.value,
            "STATE": STATE.value,
            "POSTAL_CODE": POSTAL_CODE.value,
            "Country": Country.value,
            "MOBILE_NO": MOBILE_NO.value,
            "AADHAR_NO": AADHAR_NO.value,
            "MAIL": MAIL.value,
            "PASSWORD": PASSWORD.value,
        });

        xhr.send(data);
        console.log(data)
    }

// ui_routing

var app = angular.module('patient', [ "ui.router" ]); 
app.config(function($stateProvider,$urlRouterProvider, )
 { 
        $stateProvider 
        .state('patient_profile', {  
            url : '/patient_profile', 
            templateUrl: "patient_profile.login", 
            // controller : "HomeCtrl"
        }); 
         $urlRouterProvider.otherwise("/"); 
        
}); 

