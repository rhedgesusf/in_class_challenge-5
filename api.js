const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export function getData() {
    return fetch(BASE_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error (`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error('Failed to load:', error.message);
        throw error;
    })
}