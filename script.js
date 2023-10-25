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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpdmFuLmFsdmVzIiwiaWF0IjoxNjk4MjU4ODY5LCJleHAiOjE2OTgzMzA4Njl9.iBSJNBSfsvL13geMPOKYAkctw9908jwqTSXL3orWq9fryd1t8OYDaWQHBzUdz-SZ4dcOSX-TZPRdYUQyDN2Qtw'
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
