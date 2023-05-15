const url = 'https://2bf9-2804-14c-5980-4053-5560-dad3-3b3e-5d92.ngrok-free.app';

async function verifyConnection() {

    // const response = await fetch(url + '/set/connection/logged')
    // const connection = await response.json()
    
    //if(connection.log){
        document.querySelector('#logintransform').innerText = 'Login';
    //}

}

async function connectionOn() {

    const data = {email: document.querySelector('#email-login').value, senha: document.querySelector('#password-login').value};


    const response = await fetch(url + '/set/connection', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            data
        ),
    })

    if(response.status == 200)
    window.location.href = '/pages/main.html'
}

async function connectionOff() {
    await fetch(url + '/set/connection', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
           data
        ),
    })
}