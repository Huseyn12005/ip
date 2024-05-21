document.getElementById('password').addEventListener('input', function() {
    var password = this.value;
    var uppercase = /[A-Z]/.test(password);
    var specialChar = /[!@#$%^&*]/.test(password);
    var number = /[0-9]/.test(password);

    document.getElementById('uppercase').checked = uppercase;
    document.getElementById('special-char').checked = specialChar;
    document.getElementById('number').checked = number;
});