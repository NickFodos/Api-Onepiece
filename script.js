

const mostre = () => {
    const ID_personagem = document.querySelector("#ID_personagem").value
    const url = `https://api.api-onepiece.com/v2/characters/en/${ID_personagem}`

    const mostreThen = () => {
        const fetchUrl = fetch(url)
        fetchUrl.then((response) => {
            return response.json().then((data) => {
                const span = document.querySelector("span")
                span.innerHTML = data.name
                console.log(data)
            })
        })

    }
    mostreThen()


    const mostreAsync = async () => {
        const fetchUrl = fetch(url)
        const response = await fetchUrl
        if (response.ok) {
            const data = await response.json()
            console.log(data)
        }
    }
    mostreAsync()



}