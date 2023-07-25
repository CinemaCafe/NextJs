import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

// arrow functions, they make it easier to keep our code concise.
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, header : {}) => axios.get(url, header).then(responseBody),
    post: (url: string, body: {}, config: {}) => axios.post(url, body, config).then(responseBody),
    put: (url: string, body: {},  config: {}) => axios.put(url, body, config).then(responseBody),
    delete: (url: string, config: {}) => axios.delete(url, config).then(responseBody)
}


const ImageAPI =  {
    srch: (term: string) => requests.get("search/photos", {
        headers : {
            Authorization: "Client-ID 1r-j7OIud3o0tX8kcYgyUjHTHPP_m9dOYfedb5KFvvM"
        },
        params : {
            query : term
        }
    })
}

// in order to overwrite the baseURL, you have to use config params.
const config = {
    baseURL : "http://localhost:3001/"
}

const BookAPI = {
    getlist : () => requests.get("books", config),
    create : (title:string) => requests.post("books", {title: title}, config),
    update : (id: number, newTitle: string) => requests.put(`books/${id}`, {title: newTitle}, config),
    delete : (id: number) => requests.delete(`books/${id}`, config)
}


const agent = {
    ImageAPI,
    BookAPI
}

export default agent;