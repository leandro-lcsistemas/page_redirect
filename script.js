const button = document.getElementById('button');

button.addEventListener('click', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
        fetch('http://localhost:4803/api/cora/gerar-token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3aWxsaWFtLnJvZHJpZ3VlcyIsImlhdCI6MTY4MzMxNTM2OSwiZXhwIjoxNjgzMzg3MzY5fQ.88F7UdKnINntkJ8ofWZa86I5MI6myoKvt-1dNhnPtPipFMW0yJPXJ41_gHlZFJ9BUV9WtjGSrfTijLFdTzOXVQ'
            },
            body: JSON.stringify({ code: code })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.close();
            })
            .catch(error => console.error(error));
    } else {
        console.log('Não há código de autorização');
    }

});