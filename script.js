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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpdmFuLmFsdmVzIiwiaWF0IjoxNjk4ODYyOTQ4LCJleHAiOjE2OTg5MzQ5NDh9.4fgVub2-k2De2N7_UcTbiUgK5foZmR7nYVMqqDsz9WD8IG73Bxy0Z4JIn0fPsrvfXcVKTSQAQNuXp0fSoajueQ'
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
