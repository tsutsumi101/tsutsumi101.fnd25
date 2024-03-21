document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("addButton").addEventListener("click", addPart);
});

function addPart() {
    var partName = document.getElementById("partInput").value;
    var quantity = document.getElementById("quantityInput").value;
    var contactName = document.getElementById("contactNameInput").value;
    var phoneNumber = document.getElementById("phoneNumberInput").value;

    if (partName === '' || quantity === '' || contactName === '' || phoneNumber === '') {
        alert("部品名と数量と担当者名と電話番号を入力してください");
        return;
    }

    var listItem = document.createElement("li");
    listItem.textContent = "部品名: " + partName + ", 数量: " + quantity + ", 担当者名: " + contactName + ", 電話番号: " + phoneNumber;

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            listItem.classList.add("checked-text");
        } else {
            listItem.classList.remove("checked-text");
        }
    });
    listItem.insertBefore(checkbox, listItem.firstChild);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";
    deleteButton.className = "deleteButton";
    deleteButton.onclick = function() {
        listItem.remove();
    };
    listItem.appendChild(deleteButton);

    document.getElementById("partList").appendChild(listItem);

    document.getElementById("partInput").value = '';
    document.getElementById("quantityInput").value = '';
    document.getElementById("contactNameInput").value = '';
    document.getElementById("phoneNumberInput").value = '';
}
