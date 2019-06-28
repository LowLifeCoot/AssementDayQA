function createPage(data) {
    const ownerDetails = document.getElementById("ownerDetails");
    
    for (let owners of data) {
        let { firstName, lastName, telephone } = owners;
        console.log(firstName);

        const ownerDetailsP = document.createElement("div");
        ownerDetailsP.innerText = "Owner: " + firstName + " " + lastName + ": " + telephone;
        ownerDetails.append(ownerDetailsP);

        const infoButton = document.createElement("button");
        infoButton.classList.add("btn");
        infoButton.classList.add("btn-info");
        infoButton.setAttribute("type", "button");
        infoButton.addEventListener("click", () => {
            moreInfo(owners)
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