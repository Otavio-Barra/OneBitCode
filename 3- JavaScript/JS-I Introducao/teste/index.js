let URLJson = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

async function getData() {
    try {
        const response = await fetch(URLJson)
        const data = await response.json()



        console.log(data.members)
    } catch {

    }
}

getData()
