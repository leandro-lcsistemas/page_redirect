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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaWNlcm8ubW90YSIsImlhdCI6MTczODU4MDk5NiwiZXhwIjoxNzM4NjUyOTk2fQ.K84d9w3dYBLSdDKp89g839fXcvc0RtZIjButjoH3ZWiUypdXq0D7hlFDBOnQP27AJxsDSBsgTrDfD7QB4GgI8A'
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
