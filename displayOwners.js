




function createPage(data) {
    const ownerDetails = document.getElementById("ownerDetails");


    

    for (let element in data) {
        const ownerDetailsP = document.createElement("p");
        ownerDetailsP.innerText = element + ": " + data[element];
        ownerDetails.append(ownerDetailsP);
    }
}


function moreInfo(data) {
    const dataString = JSON.stringify(data);
    sessionStorage.setItem("userData", dataString);
    //window.location = "ownerPageTwo.html";
    console.log(dataString);
    return false;
}