export const URL = 'https://mighty-sierra-05836.herokuapp.com/';

export const Get = async (controller: string) => {
    return await fetch(URL + controller, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .catch(err => console.error(err))
}