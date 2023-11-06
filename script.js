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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpdmFuLmFsdmVzIiwiaWF0IjoxNjk5MzAzOTAzLCJleHAiOjE2OTkzNzU5MDN9.1LFfN97zMMsEs5D9mnhROzsdA9Ex0d9hMhoy2mAKzFp4M52Ohx2Rf2RGpBA3Nlz5OH36uXmvTXhm-NdPaWs9ZQ'
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
