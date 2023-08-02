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
                'Authorization': 'Bearer Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaWNlcm8ubW90YSIsImlhdCI6MTY5MTAwMjAyMiwiZXhwIjoxNjkxMDc0MDIyfQ.LbTEf7Vx_Oih-DLZNq0AvpctmOl8QgyyWXeYtSnzmdWOur7twkPX5bKEQWRHjRc-fFzOT3XTAMkt3qp8O4vsBg'
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
