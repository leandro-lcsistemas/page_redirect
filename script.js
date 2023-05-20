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
                'Authorization': 'Bearer Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWl6LmNhcmxvcyIsImlhdCI6MTY4NDU0OTcyMCwiZXhwIjoxNjg0NjIxNzIwfQ.srUFx7rogrSxTN4MJjIU1qauS93xvhM2-2jYWqQEsWFUl2tK1zHmpuBNGDrnxiuwV35w2YV7egzMhg9pjJ_fpQ'
            },
            body: JSON.stringify({ code: code })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.href = "http://localhost:3000/app/Info-revenda"
            })
            .catch(error => console.error(error));
    } else {
        console.log('Não há código de autorização');
    }

});
