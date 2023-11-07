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
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpdmFuLmFsdmVzIiwiaWF0IjoxNjk5Mzg2MTM0LCJleHAiOjE2OTk0NTgxMzR9.SgIIVWWkDAT6Na-UlOvCoyoiXPEzP8Aru_ykNfY3XEt0Y0m-N_lCrLevNFxhNLJgbdcpWzD53FDCIjSu11vvSA'
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
