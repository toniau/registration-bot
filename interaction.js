window.onload = function() {

    var form = document.getElementById('formDiv');
    var submit = document.getElementById('submitBtn');
    var success = document.getElementById('container');

    document.getElementById('submitBtn').addEventListener('click', function(){
        console.log('CLICKED SUBMIT BUTTON');
        form.style.display = 'none';
        success.style.display = 'block';
    });

}