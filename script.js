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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlZGl2YW4uZ29uw6dhbHZlcyIsImlhdCI6MTc3NDYxNDgzMSwiZXhwIjoxNzc0Njg2ODMxfQ.JvtKEyr-LVel_PLaM3qckte-8Z_SO56saVAzdVMCGlmG0S0at8WdTeHjPOWNoA0GU59ZXqwH6wVjaaSq-IoFrQ'
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
