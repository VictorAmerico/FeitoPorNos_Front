const url = 'https://2bf9-2804-14c-5980-4053-5560-dad3-3b3e-5d92.ngrok-free.app';

async function cadastrarProdutos() {
    let emptyField;

    const body = {
        //link: (document.querySelector('#produto-imagem-preview').src,
        nomeProduto: document.querySelector("#produto-nome").value.trim()
            ? document.querySelector("#produto-nome").value
            : null,
        categoria: document.querySelector("#produto-categoria").value.trim()
            ? document.querySelector("#produto-categoria").value
            : null,
        precoProduto: document.querySelector("#produto-preco").value.trim()
            ? document.querySelector("#produto-preco").value
            : null,
        descricao: document.querySelector("#produto-desc").value.trim()
            ? document.querySelector("#produto-desc").value
            : null
    };

    for (let info in body) {
        if (!(body[info])) {
            emptyField = true;
            break;
        }
    }

    if (emptyField) {
        alert('Preencha todos os campos');
    } else {
        const response = await fetch(url + '/set/id/product', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        setTimeout(() => {
            window.location.reload(true);
        }, 600);
    }
}

async function cadastrarVendedor() {

    let emptyField;

    const infoVendedor = {
        nome: document.querySelector("#nome-completo").value.trim()
            ? document.querySelector("#nome-completo").value
            : null,
        email: document.querySelector("#email").value.trim()
            ? document.querySelector("#email").value
            : null,
        nickname: document.querySelector("#produto-artesanato").value.trim()
            ? document.querySelector("#produto-artesanato").value
            : null,
        telefone: document.querySelector("#telefone").value.trim()
            ? document.querySelector("#telefone").value
            : null,
        senha: document.querySelector("#password").value.trim()
            ? document.querySelector("#password").value
            : null
    };

    for (let info in infoVendedor) {
        if (!(infoVendedor[info])) {
            emptyField = true;
            break;
        }
    }

    if (emptyField) {
        alert('Preencha todos os campos')
    } else {
        let email = document.getElementsByClassName('email')[0].value;
        let confirmEmail = document.getElementsByClassName('email')[1].value;
        let senha = document.getElementsByClassName('senha')[0].value;
        let confirmSenha = document.getElementsByClassName('senha')[1].value;

        if (email != confirmEmail) {
            alert("Os email's devem ser iguais!")
        } else if (senha != confirmSenha) {
            alert("As senhas devem ser iguais!")
        } else {
            const response = await fetch(url + '/set/seller', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(infoVendedor),
            });


            setTimeout(() => {
                window.location.href = '/pages/login/login.html';
            }, 600);
        }
    }
}

async function cadastrarUser() {

    let emptyField;
    
    const infoUser = {
        nome: document.querySelector("#nome-completo").value.trim()
            ? document.querySelector("#nome-completo").value
            : null,
        email: document.querySelector("#email").value.trim()
            ? document.querySelector("#email").value
            : null,
        telefone: document.querySelector("#telefone").value.trim()
            ? document.querySelector("#telefone").value
            : null,
        senha: document.querySelector("#password").value.trim()
            ? document.querySelector("#password").value
            : null
    };

    for (let info in infoUser) {
        if (!(infoUser[info])) {
            emptyField = true;
            break;
        }
    }

    if (emptyField) {
        alert('Preencha todos os campos')
    } else {
        let email = document.getElementsByClassName('email')[0].value;
        let confirmEmail = document.getElementsByClassName('email')[1].value;
        let senha = document.getElementsByClassName('senha')[0].value;
        let confirmSenha = document.getElementsByClassName('senha')[1].value;

        if (email != confirmEmail) {
            alert("Os email's devem ser iguais!")
        } else if (senha != confirmSenha) {
            alert("As senhas devem ser iguais!")
        } else {
            const response = await fetch(url + '/set/user', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(infoUser),
            });

            setTimeout(() => {
                window.location.href = '/pages/login/login.html';
            }, 600);
        }
    }
}
