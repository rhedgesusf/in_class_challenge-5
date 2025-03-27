import {getData} from './api.js'

export function displayData() {
    const container = document.getElementById('PostContainer');

    getData()
    .then(datas => {
        datas.slice(0, 5).forEach(data => {
            const div = document.createElement('div');
            div.innterHTML = `<h3>${data.name}</h3><p>${data.email}</p>`
            container.appendChild(div);
        });
    })
    .catch(err => {
        container.innerHTML = `<p style="color:red;">Failed to load; ${err.message}</p>`;
    });
}

