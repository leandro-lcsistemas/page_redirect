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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWl6LmNhcmxvcyIsImlhdCI6MTY4NDMyNTkzMCwiZXhwIjoxNjg0Mzk3OTMwfQ.wtGr6aJGGdrN1ZwfTz7G92tJQXA1a2ngDX-SXyWINSMuRH3zFZmLxRLP1SVMSvkZZQsrkBSxwHCiuK9mD--BZA'
            },
            body: JSON.stringify({ code: code })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.href = "http://localhost:3000/app/info-revenda"
            })
            .catch(error => console.error(error));
    } else {
        console.log('Não há código de autorização');
    }

});
