emailjs.init({
    publicKey: 'lkNDofnnkzUtEcRWy',
});


document.querySelector('.button').onclick = function () {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;


    if (name == "" || email == "" || message == "")
        alert('Please fill all fields')


    else {
        emailjs.send('service_430klmj', 'template_v15w1ds', {
            from_name: name,
            from_email: email,
            message: message,
        });

        setTimeout(() => {
            document.querySelector('.popup').style.display = 'block';
        }, 1000);


        document.getElementById('button').onclick = function () {
            document.querySelector('.popup').style.display = 'none';
            document.getElementById('myForm').reset();
        }

    }

}

