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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaWNlcm8ubW90YSIsImlhdCI6MTcwMTI2MTI0NiwiZXhwIjoxNzAxMzMzMjQ2fQ.Goh-uaTwOEmuMOoH1x9ueg2GG3Ds3ZKV0CXg1g3wbNRZiKkXwqjLEkUjwxcddx4lM_q2Cetpw4zBx4uA9jMRFQ'
            },
            body: JSON.stringify({ code: code })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error(error));
    } else {
        window.alert("Não há código de autorização");
        console.log('Não há código de autorização');
    }

});
