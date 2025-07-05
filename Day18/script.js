const user = {
    name: "Teejay",
    age: 25,
    isDeveloper: true
};

function saveData() {
    const jsonData = JSON.stringify(user);

    localStorage.setItem("userData", jsonData);

    alert("Data saved to local storage!");
}

function loadData() {
    const jsonData = localStorage.getItem("userData");

    const parsedData = JSON.parse(jsonData);

    document.getElementById("output").textContent = JSON.stringify(parsedData, null, 2)
}