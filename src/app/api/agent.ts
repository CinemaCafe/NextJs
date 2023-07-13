import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

// arrow functions, they make it easier to keep our code concise.
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, header : {}) => axios.get(url, header).then(responseBody),
    post: (url: string, body: {}) => axios.post(url).then(responseBody),
    put: (url: string, body: {}) => axios.put(url).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
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

const agent = {
    ImageAPI
}

export default agent;