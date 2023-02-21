

// console.log(document.querySelector('.side-form'))

let btn = document.querySelector('.btn');
const firstname = document.querySelector('#firstName')
const lastname = document.querySelector('#lastName');
const errorhandler = document.querySelector('.error');
const Email = document.querySelector('#exampleInputEmail1');
const password = document.querySelector('#exampleInputPassword1');
const confirmpassword = document.querySelector('#exampleInputPassword2');
// console.log(Email);
// console.log(lastname)
console.log(password)

console.log(error);
// console.log(sideform);s
//
// console.log(btn);


btn.addEventListener('click', (e) => {
    e.preventDefault();


    if (firstname.value === "" || lastname.value === "") {
        errorhandler.classList.add('error');
        errorhandler.innerHTML = "Please enter the necessary fields !!!!!!!!!!!!!!."
        // alert("Please enter the your first name and last name ")
        setTimeout(() => {
            error.remove();

        }, 3000);
    }


})

const Data = {
    firstname: firstname.value,
    lastname: lastname.value,
    Email: Email.value,
    password: password.value,
    confirmPassword: confirmpassword.value,

}

const url = "http://localhost/welcomepagE"

fetch(url, {

    method: "POST",
    headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:?",




    }

}).then(response => {
    response.status(200).json({ message: "success" })
})