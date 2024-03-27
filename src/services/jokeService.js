export const getAllJokes = () => {
    return fetch("http://localhost:8088/jokes").then(res => res.json())

}

export const editJokes = async (jokeObject) => {
    
    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "text": jokeObject.text,
            "told": !jokeObject.told
        })
    }
    //send the joke
    const response = await fetch(`http://localhost:8088/jokes/${jokeObject.id}`, putOptions)
    //return response.json()
}

export const addJoke = async (newJoke) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "text": newJoke,
            "told": false
        })
    }
    // Send the transient state to your API - send object
    const response = await fetch("http://localhost:8088/jokes", postOptions)
    
    
}