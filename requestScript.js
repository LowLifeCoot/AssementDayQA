function jsonRequest () {
    const req = new XMLHttpRequest();
    req.onload = function () {
        const data = JSON.parse(req.responseText)
        console.log('It Worked', data);
        createPage(data);
    };

    req.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
    req.send();
}