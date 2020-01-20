import api from '../config/api';

const handleError = res => {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res.json();
}

export const auth_token = fetch(`${api.root}/customers/auth`, {
        method: 'POST',
        headers: {
            'x-dw-client-id': 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            'Content-Type': 'application/json',
        },
        body: {
            'type': 'guest',
        }
    }
).then(res => res.json());
