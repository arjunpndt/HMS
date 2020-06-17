 function sendJSON() {
        console.log("arjun");

        let DOCTOR_FIRST_NAME = document.querySelector('#first_name');
        let DOCTOR_LAST_NAME = document.querySelector('#last_name');
        let FATHER_NAME = document.querySelector('#doctor_father');
        let MOTHER_NAME = document.querySelector('#doctor_mother');
        let GENDER = document.querySelector('input[name="Gender"]');
        let SPECIALZATION = document.querySelector('#SPECIALZATION');
        let DOB = document.querySelector('#doctor_dob');
        
        let MARITAL_STATUS = document.querySelectorAll('input[name="marital_status"]');
        let QUALIFICATION = document.getElementById('Qualification');
        let STREET_ADDRESS = document.querySelector('#street_address');
        let CITY = document.querySelector('#city');
        let STATE = document.querySelector('#state');
        let POSTAL_CODE = document.querySelector('#postal_code');
        let Country = document.querySelector('#country');
        let MOBILE_NO = document.querySelector('#doctor_mobile');
        let AADHAR_NO = document.querySelector('#doctor_adhaar');
        let MAIL = document.querySelector('#doctor_mail');
        let PASSWORD = document.querySelector('#doctor_password');





        // let user_prev = document.querySelector('#user_prev');
        // console.log(user_mail) 
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "http://f3fd065efda6.ngrok.io/Doctor_interface/Doctor_registration/", true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {

               var  = JSON.parse(Request.response);


            }
        };
        var data = JSON.stringify({
            "DOCTOR_FIRST_NAME": DOCTOR_FIRST_NAME.value,
            "DOCTOR_LAST_NAME": DOCTOR_LAST_NAME.value,
            "FATHER_NAME": FATHER_NAME.value,
            "MOTHER_NAME": MOTHER_NAME.value,
            "GENDER": GENDER.value,
            "SPECIALZATION": SPECIALZATION.value,
            "QUALIFICATION" : QUALIFICATION.value,
            "DOB": DOB.value,
            "MARITAL_STATUS": MARITAL_STATUS.value,
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


