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
                'Authorization': 'Bearer Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWl6LmNhcmxvcyIsImlhdCI6MTY5NTA0Mzk2NywiZXhwIjoxNjk1MTE1OTY3fQ.XWWJY365kF2nAqHR_gLyGNgVsTFkYEqJt4DgeU1N7WnDH__ysUVijAlq5OkbbgE6gKvdekTL1xzWYCvHfEg9Og'
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
