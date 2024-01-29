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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJVU0VSQVRVQUwiLCJpYXQiOjE3MDY1Mjk0NDcsImV4cCI6MTcwNjYwMTQ0N30.9ZU1i7qVk0lGy4PulOlyqQ0CM9T3WIWGkrQhK2BkVULM1vr6FUnCyaaTAn_hbZFF9URMCxnjuATCqlMnjFC0Kg'
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
