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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJFTUVSU09OLlNBTlRPUyIsImlhdCI6MTc4MTI3MTM2NSwiZXhwIjoxNzgxMzQzMzY1fQ.HG-NMAw11mLuPXpM3GIiOE3LB8nAXl6yYPKmoV9aCKTbnEktQb6zjV5KhgObTzys1jN2BeysP1hXha4VkN7DXw'
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
