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
                'Authorization': 'Bearer Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaWNlcm8ubW90YSIsImlhdCI6MTY5MTE3NjE2NCwiZXhwIjoxNjkxMjQ4MTY0fQ.4skZ-bVLVCzfeDnjaKXflPps3nQ_XIYygOSm8GMtXS2PtYH1itQbuBWdyGdYj8fEXMdUBtap7m7cDH6rXAhdGA'
            },
            body: JSON.stringify({ code: code })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error(error));
    } else {
        console.log('Não há código de autorização');
    }

});
