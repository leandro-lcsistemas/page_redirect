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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWl6LmNhcmxvcyIsImlhdCI6MTY4NDE3MDkxMSwiZXhwIjoxNjg0MjQyOTExfQ.e9Ri7czuNOay63yIcbHEQTw4XcXBuWKQ7XCnUu7QIG8bmvsT_abhWU80k3SHX9kBW6jvnBGvDdrX4N7eSbbYWw'
            },
            body: JSON.stringify({ code: code })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            //    window.location.href = "http://localhost:3000/Login"
                window.alert('autorizado com sucesso')
            })
            .catch(error => console.error(error));
    } else {
        console.log('Não há código de autorização');
    }

});