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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBTENJTEVOTy5NSUdSQSIsImlhdCI6MTc2NTc5OTMwMCwiZXhwIjoxNzY1ODcxMzAwfQ.yvnOvlnZ2fb-FUjFtdvg8dVtn44G9w3MZqkKFYncbt4KD5O9jL4xrkiqk5l5h5SXCQiF7YVlB2fkBhP67aZUKg'
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
