const button = document.getElementById('button');

button.addEventListener('click', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log(code)

    if (code) {
        fetch('http://localhost:4803/api/cora/gerar-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaWNlcm8ubW90YSIsImlhdCI6MTcwNDM3MTE0NywiZXhwIjoxNzA0NDQzMTQ3fQ.fyuu0dF9fv_ZQCfUplRO1oxDoNykNusk2G9zOi1qaxXrv_I1dFlqeXstwikuD3MfF_D3z588Sb6FYiHFduSc_w'
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
