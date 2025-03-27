import {getData} from './api.js'

export function displayData() {
    const container = document.getElementById('postContainer');

    getData()
    .then(datas => {
        datas.slice(0, 5).forEach(data => {
            console.log(data.title)
            const div = document.createElement('div');
            div.innerHTML = `<h3>${data.title}</h3><p>${data.body}</p>`
            container.appendChild(div);
        });
    })
    .catch(err => {
        container.innerHTML = `<p style="color:red;">Failed to load; ${err.message}</p>`;
    });
}

