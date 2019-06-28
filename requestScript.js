var CMD = 'GET';
var URL = 'http://localhost:9966/petclinic/api/owners';

function jsonRequest () {
    const req = new XMLHttpRequest();
    req.onload = function () {
        const data = JSON.parse(req.responseText)
        console.log('It Worked', data);
        createPage(data);
    };

    req.open(CMD, URL);
    req.send();
}