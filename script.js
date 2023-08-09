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
                'Authorization': 'Bearer Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaWNlcm8ubW90YSIsImlhdCI6MTY5MTU4MDEwMywiZXhwIjoxNjkxNjUyMTAzfQ.4rQnTi2Zg1MTBDe4diTCYzpH1Twn-PmMgHSRTOYjQs8Bf86HfWfMhXMZiJXZyBAYGaxsmu_IELDShv3wbZ9BGg'
            },
            body: JSON.stringify({ code: code })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => console.error(error));
    } else {
        console.log('Não há código de autorização');
    }

});
