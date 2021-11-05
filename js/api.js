var saveValue;
$('#save').click(function () {
    saveValue = document.getElementById("saveServer").value;
    localStorage.setItem("saveValue", saveValue);
})

$('#load').click(function () {
    saveValue = localStorage.getItem("saveValue");
    if (saveValue == '') {
        document.getElementById("saveServer").value = 0
    } else {
        document.getElementById("saveServer").value = saveValue;
    }
})
