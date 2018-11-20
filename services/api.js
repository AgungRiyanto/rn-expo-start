import axios from 'axios';
const _api = async (url , options = {
    method: 'GET',
    body: {}
}) => {
    const request = {
        baseURL: "http://localhost:8000",
        method: options.method,
        timeout: 500000,
        url,
        headers: options.head
    }
    if (request.method == 'POST') request.data = options.body
    const res = await axios(request)
    if (res.status == 200) {
        return res.data;
    } else {
        throw res;
    }
}

const api_v1 = 'api/v1/';

export default {
    // auth
    LoginProcess: (credentials) => {
        return _api(api_v1 + 'auth/loket/login', {
                method: 'POST',
                head: {
                    'Content-Type' : 'application/json',
                },
                body: credentials
        });
    },
}