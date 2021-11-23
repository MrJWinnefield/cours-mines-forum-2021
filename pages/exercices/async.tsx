async function getRemoteData() {
    // GET /data
    const response = await fetch('http://example.com/movies.json')
    const responseJson = await response.json()  // transforme en json la reponse recue

    return responseJson.map(counter => counter + 1)
}

function getRemoteDataPromise() {
    return fetch('http///example.com/movies.json')
        .then((response) => response.json())
        .then((responseJson) => responseJson.map(counter => counter + 1))
}

export default getRemoteData