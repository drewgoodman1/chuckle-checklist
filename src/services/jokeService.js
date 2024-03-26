export const getAllJokes = () => {
    return fetch("http://localhost:8088/jokes").then(res => res.json())

}
export const addJoke = async (newJoke) => {
    /*construct newJoke
    const thisJoke = {
        "text": newJoke,
        "told": false
    }*/
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
    debugger
    const response = await fetch("http://localhost:8088/jokes", postOptions)
    
}