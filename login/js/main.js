
(function ($) {
    "use strict";

    var baseUrl = "//www.mgkslt.com";
    if(getCookie("authorization")) {
       window.location = baseUrl
    } else {
        /*==================================================================
        [ Focus input ]*/
        $('.input100').each(function(){
            $(this).on('blur', function(){
                if($(this).val().trim() != "") {
                    $(this).addClass('has-val');
                }
                else {
                    $(this).removeClass('has-val');
                }
            })    
        })
      
      
        /*==================================================================
        [ Validate ]*/
        var input = $('.validate-input .input100');
        var countryCode = "+91-"

        $('.validate-form').on('submit',function(event){
            event.preventDefault()
            var check = true;

            for(var i=0; i<input.length; i++) {
                if(validate(input[i]) == false){
                    showValidate(input[i]);
                    check=false;
                }
            }

            if(check){
                signin()
                check = false
            }

            return check;
        });


        $('.validate-form .input100').each(function(){
            $(this).focus(function(){
               hideValidate(this);
            });
        });

        function validate (input) {
            if($(input).attr('type') == 'phone' || $(input).attr('name') == 'phone') {
                if($(input).val().trim().match(/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/) == null) {
                    return false;
                }
            }
            else {
                if($(input).val().trim() == ''){
                    return false;
                }
            }
        }

        function showValidate(input) {
            var thisAlert = $(input).parent();

            $(thisAlert).addClass('alert-validate');
        }

        function hideValidate(input) {
            var thisAlert = $(input).parent();

            $(thisAlert).removeClass('alert-validate');
        }

        function signin() {
            $.ajax({
                url: baseUrl + "/user/login",
                type: "POST",
                data: JSON.stringify({ phone: countryCode + $(input[0]).val(), password: $(input[1]).val() }),
                contentType: "application/json; charset=utf-8",
                beforeSend: function(){
                    $(".error").html("")
                    $(".login100-form-btn").html("<img src='images/icons/loading.gif' width=30 height=30>")
                },
                success: function (response, status, req) {
                    if(response != "ACTIVE") {
                        $(".error").html("Your user is not yet active. Please request OTP on the app")
                    } else {
                        var authorizationHeader = req.getResponseHeader("authorization")
                        setCookie("authorization", authorizationHeader, 180)
                        window.location = baseUrl
                    }
                    
                    $(".login100-form-btn").html("SIGN IN")
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    if(xhr.status == 401){
                        $(".error").html("Invalid credentials")
                    } else {
                        $(".error").html("Oops! we encountered some issue. We're working on it")
                    }
                    $(".login100-form-btn").html("SIGN IN")
                    console.log(thrownError);
                }
            })
        }
        
        /*==================================================================
        [ Show pass ]*/
        var showPass = 0;
        $('.btn-show-pass').on('click', function(){
            if(showPass == 0) {
                $(this).next('input').attr('type','text');
                $(this).find('i').removeClass('zmdi-eye');
                $(this).find('i').addClass('zmdi-eye-off');
                showPass = 1;
            }
            else {
                $(this).next('input').attr('type','password');
                $(this).find('i').addClass('zmdi-eye');
                $(this).find('i').removeClass('zmdi-eye-off');
                showPass = 0;
            }
            
        });
    }

    var deleteCookie = function(name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

})(jQuery);