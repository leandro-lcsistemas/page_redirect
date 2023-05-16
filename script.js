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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWl6LmNhcmxvcyIsImlhdCI6MTY4NDI0NzczOCwiZXhwIjoxNjg0MzE5NzM4fQ.UEbQrN2NEUrJ7Z6E3HemQ1P6lSgtABzx5PULAwVPggndQyC07Dsr19gzRDyH47NGd1fqDIzJUcRyTT9X6CSqCw'
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
