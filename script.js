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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJVU0VSQVRVQUwiLCJpYXQiOjE3MDY1MzEzMjEsImV4cCI6MTcwNjYwMzMyMX0.sKa5GikJRCApVK0fwe27eHqVdtfKk4ASyEuYse6cqpGzZpXpTIt6idiS4wvpq5zXp_Fyp9HGzBgoERL1aL6-dQ'
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
