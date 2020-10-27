
const getAPIURL = () => {
    if(location.hostname === 'localhost'){
        return `http://localhost:8000`
    }
    return `https://mytunes-backend.herokuapp.com`
}


export default getAPIURL()

//Go to all my http requests and replace the url with my heroku url 