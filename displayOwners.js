


function createPage(data) {
    const ownerDetails = document.getElementById("ownerDetails");


    for (let element of data) {
        // const [...rest] = data;

        // const {firstName, lastName, telephone } = rest;
        // console.log("Haaaa" , firstName, lastName, telephone);

        const ownerDetailsP = document.createElement("p");
        ownerDetailsP.innerText = element + ": " + data.element;
        ownerDetails.append(ownerDetailsP);

        const infoButton = document.createElement("button");
        infoButton.classList.add("btn");
        infoButton.classList.add("btn-info");
        infoButton.setAttribute("type","button");
        infoButton.addEventListener("click", () => {
            moreInfo(element)
        });
        infoButton.innerText = "Info";
        ownerDetails.append(infoButton);


    }
}


function moreInfo(data) {
    const dataString = JSON.stringify(data);
    sessionStorage.setItem("userData", dataString);
    window.location = "info.html";
    return false;
}