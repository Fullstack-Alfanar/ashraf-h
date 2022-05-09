

function insertdata(e1,e2,e3){

    var prodcut = document.getElementById("prod")
    var cost = document.getElementById("cost")
    var options = document.getElementById("slect_option")

    let element = [];
    let getid = [];

    let tbl = document.getElementById("tb");

    element[0] = document.createElement("label");
    element[1] = document.createElement("label");
    element[2] = document.createElement("label");
    element[3] = document.createElement("td");
    element[4] = document.createElement("td");
    element[5] = document.createElement("td");
    element[6] = document.createElement("tr");


    element[0].textContent = e1;
    element[1].textContent = e2;
    element[2].textContent = e3;

    element[3].appendChild(element[0]);
    element[4].appendChild(element[1]);
    element[5].appendChild(element[2]);

    element[6].appendChild(element[3]);
    element[6].appendChild(element[4]);
    element[6].appendChild(element[5]);

    getid[3].appendChild(element[6]);
}
