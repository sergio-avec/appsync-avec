const fetch = require('node-fetch');

exports.handler = async (event) => {
    const { cep } = event.arguments
    const url = `https://viacep.com.br/ws/${cep}/json/`

    await fetchCep(url)

    return url;
};


async function fetchCep() {
    await fetch(url).then(res => {
        console.log("response =>", res);
    }).catch(err => {
        console.log("error =>", err);
    })
}
