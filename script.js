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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3aWxsaWFtLnJvZHJpZ3VlcyIsImlhdCI6MTc1MTYzNzY2MSwiZXhwIjoxNzUxNzA5NjYxfQ.2EK6e__1jexf-_O_G9Z-N-3jhXT9tB8b2qEEQQkJd2VwMqAiTUXR1fjyjU5ZRw2pnne13ZxwXa4ZBE1NtMDVhg'
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
