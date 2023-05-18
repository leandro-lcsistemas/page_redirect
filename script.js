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
                'Authorization': 'Bearer Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWl6LmNhcmxvcyIsImlhdCI6MTY4NDQ0Mjg0MywiZXhwIjoxNjg0NTE0ODQzfQ.ZhzHN5inJZuuSbslRy4BfcwA6M-Z8JsufJjn7RqQn_faIlWd9oNvFtFJQSxUalZCt9PJ3v1JbUgx2WGGYPFRwA'
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
