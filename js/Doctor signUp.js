const Password = document.querySelector('#password');
const Email = document.querySelector('#unique_identifier')
const btn = document.querySelector('#Doctorsignup');
const errorhandler = document.querySelector('.error');


let errorMessage;

errorMessage = {
    error: "Plesae fill in the required fields"
}

btn.addEventListener('click', (e) => {

    e.preventDefault();
    errorhandler.classList.add("error")
    if (Password < 0 && Password === "" && Email === "") {
        setTimeout(() => {
            errorhandler.innerHTML = errorMessage.error || this.failedMessage
        }, 3000)
    }
    let data = ({
        Email: Email.value,
        Password: Password.value
    });

    fetch('http://localhost:8000/signup', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)

    }).then((res) => 
        res.json()
    ).then((data) => {
        console.log("Success", data);
    }).catch((err) => { console.log("Error", err) })
});




// let data = {
//     password: password.value,
//     unique_identifiers: unique_identifier.value
// }
// console.log(data)

// let apiUrl = {
//     url: "http://localhost/signup",
//     statusbar: [200, " successful"]
// }

// async function postData(url, data) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'no-cors',//'cors', *cors, same-origin
//         // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached 
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }

// postData(url, { answer: 42 })
//     .then((data) => {
//         console.log(data); // JSON data parsed by `data.json()` call
//     });



// errorhandler.classList.add("error");
    // if (password.length < 0 && password.value === "" && unique_identifier === "") {

    //     setTimeout(() => {
    //         errorhandler.innerHTML = errorMessage.error || this.failedMessage

    //     }, 3000)

    // }
    // let url = 'http://localhost:8000/api/'
    // /* fetch data from front end */

    // class messageValidation{
//     constructor(_message) {
//         this.message = _message
//     }
// }
// FormError = new errorMessage(" plesae fill in the required fields")