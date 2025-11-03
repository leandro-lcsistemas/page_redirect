const button = document.getElementById('button');

button.addEventListener('click', () => {
    button.disable = true;
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log(code)

    if (code) {
        fetch('http://localhost:4803/api/cora/gerar-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBTENJTEVOTy5NSUdSQSIsImlhdCI6MTc2MjE3NTMxNSwiZXhwIjoxNzYyMjQ3MzE1fQ.7wp2y90XYN7aB0L76OK9CBha42H_kl4JImE7GL_QVCnFLeJcKwaBKW6lr1JW6V1p2ITHapDSkJFIfOfJkZee0A'
            },
            body: JSON.stringify({ code: code })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.alert("Autorização realizada com sucesso.");
            })
            .catch(error => console.error(error));
    } else {
        window.alert("Não há código de autorização");
        console.log('Não há código de autorização');
    }

});
