// switchers
$('#authorization').click(() => {
    $('.regForm').slideUp();
    $('.forgotForm').slideUp();
    $('.logForm').slideDown();
});
$('#create').click(() => {
    $('.logForm').slideUp();
    $('.forgotForm').slideUp();
    $('.regForm').slideDown();
});
$('#forgot').click(() => {
    $('.logForm').slideUp();
    $('.regForm').slideUp();
    $('.forgotForm').slideDown();
});
$('#authFromForgot').click(() => {
    $('.forgotForm').slideUp();
    $('.regForm').slideUp();
    $('.logForm').slideDown();
});
$('#createFromForgot').click(() => {
    $('.forgotForm').slideUp();
    $('.logForm').slideUp();
    $('.regForm').slideDown();
});

// validation
$('#regBtn').click((e) => {
    e.preventDefault();
    if($('#regEmail').val().match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) { // email checker
        
    }
    else {
        $('#errIco').html('<i class="fas fa-exclamation-triangle"></i>');
        $('.wrapper .formWrap span:first-child').css({'color': 'red'});
        return $('#err').text('Введите корректную почту');
    }
    if($('#regPsw').val().match(/[а-яА-Я]/)) { // password cyrillic checker
        $('#errIco').html('<i class="fas fa-times"></i>');
        $('.wrapper .formWrap span:first-child').css({'color': 'yellow'});
        return $('#err').text('Пароль не должен содержать кириллицу');
    }
    if($('#regPsw').val().length < 8) { // password length checker
        $('#errIco').html('<i class="fas fa-exclamation-triangle"></i>');
        $('.wrapper .formWrap span:first-child').css({'color': 'red'});
        return $('#err').text('Пароль должен быть не меньше 8-ми символов');
    }
    else if($('#regPsw').val().length > 15) { // password length checker
        $('#errIco').html('<i class="fas fa-exclamation-triangle"></i>');
        $('.wrapper .formWrap span:first-child').css({'color': 'red'});
        return $('#err').text('Пароль должен быть не больше 15-ти символов');
    }
    else if($('#regPsw').val() != $('#regRePsw').val()) { // password match checker
        $('#errIco').html('<i class="fas fa-exclamation-triangle"></i>');
        $('.wrapper .formWrap span:first-child').css({'color': 'red'});
        return $('#err').text('Пароли не совпадают');
    }
    else { // true
        $('#errIco').html('<i class="fas fa-check-square"></i>');
        $('.wrapper .formWrap span:first-child').css({'color': 'green'});
        $('#err').text('Регистрация прошла успешно');
    }
});