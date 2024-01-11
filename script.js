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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJMRUFORFJPLk5BU0NJTUVOVE8iLCJpYXQiOjE3MDUwMDYwNzQsImV4cCI6MTcwNTE1MDA3NH0.GDCEUQFwwkgaiVT_szGihqJMWxErvQl5X7C7jZV19_gdYM85y0nm5J4BWJhBfswlIL52kfFHzeAqT0L5EPkMKw'
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
