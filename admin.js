let array = JSON.parse(localStorage.getItem('array')) || []
document.getElementById('bt').addEventListener('click', function () {
    window.location.href = 'home.html'
})
let nam = $("#name");
let price = $("#price");
let email = $("#email");
let phone = $("#phone");
let size = $("#sizeOfComputer");
let city = $("#city");
let state = $("#state");
let zipcode = $("#zipcode");
let img = $("#img");
let description = $("#description");
nam.change(function () {
    if (nam.val().length > 0) {
        nam.addClass("is-valid").removeClass("is-invalid");
    } else {
        nam.addClass("is-invalid").removeClass("is-valid");
    }
})
price.change(function () {
    if (price.val().length > 0) {
        price.addClass("is-valid").removeClass("is-invalid");
    } else {
        price.addClass("is-invalid").removeClass("is-valid");
    }
})
email.change(function () {
    if (email.val().length > 0) {
        email.addClass("is-valid").removeClass("is-invalid");
    } else {
        email.addClass("is-invalid").removeClass("is-valid");
    }
})
img.change(function () {
    if (img.val().length > 0) {
        img.addClass("is-valid").removeClass("is-invalid");
    } else {
        img.addClass("is-invalid").removeClass("is-valid");
    }
})
phone.change(function () {
    if (phone.val().length > 0) {
        phone.addClass("is-valid").removeClass("is-invalid");
    } else {
        phone.addClass("is-invalid").removeClass("is-valid");
    }
})
state.change(function () {
    if (state.val().length > 0) {
        state.addClass("is-valid").removeClass("is-invalid");
    } else {
        state.addClass("is-invalid").removeClass("is-valid");
    }
})
description.change(function () {
    if (description.val().length > 0) {
        description.addClass("is-valid").removeClass("is-invalid");
    } else {
        description.addClass("is-invalid").removeClass("is-valid");
    }
})
zipcode.change(function () {
    if (zipcode.val().length > 0) {
        zipcode.addClass("is-valid").removeClass("is-invalid");
    } else {
        zipcode.addClass("is-invalid").removeClass("is-valid");
    }
})
city.change(function () {
    if (city.val().length > 0) {
        city.addClass("is-valid").removeClass("is-invalid");
    } else {
        city.addClass("is-invalid").removeClass("is-valid");
    }
})
size.change(function () {
    if (size.val().length > 0) {
        size.addClass("is-valid").removeClass("is-invalid");
    } else {
        size.addClass("is-invalid").removeClass("is-valid");
    }
})
$("#btnn").click(function () {
    let nam = $("#name");
    let price = $("#price");
    let email = $("#email");
    let phone = $("#phone");
    let size = $("#sizeOfComputer");
    let city = $("#city");
    let state = $("#state");
    let zipcode = $("#zipcode");
    let img = $("#img");
    let description = $("#description");
    let newCard = {
        nam: nam.val(),
        price: price.val(),
        email: email.val(),
        phone: phone.val(),
        size: size.val(),
        city: city.val(),
        state: state.val(),
        zipcode: zipcode.val(),
        img: img.val(),
        description: description.val()
    }
    array.push(newCard)
    localStorage.setItem('array', JSON.stringify(array))
    window.location.href = 'admin.html'
})
function renderTable(data) {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Clear the existing rows before appending new ones

    data.forEach((element, index) => {
        let row = `
            <tr>
                <td>${index + 1}</td>
                <td class='nameOfComp'>${element.nam}</td>
                <td>     
                    <button type="button" id="btnw" class="btn btn-danger viewImageButton" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        <img src="${element.img}" alt="" class="la" style="width: 100px;">
                    </button>                       
                </td>
                <td class='priceOfComp'>${element.price}</td>
                <td class='zipcodeOfComp d-none'>${element.zipcode}</td>   
                <td class='emailOfComp d-none'>${element.email}</td>
                <td class='descriptionOfComp d-none'>${element.description}</td>
                <td class='phoneOfComp d-none'>${element.phone}</td>   
                <td class='cityOfComp d-none'>${element.city}</td>
                <td class='stateOfComp d-none'>${element.state}</td>
                <td class='sizeOfComp d-none'>${element.size}</td>   
                <td>
                    <button class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#exampleModal3">edit</button>
                    <button class="btn btn-danger deleteBtn">delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });

}
renderTable(array)
// array.forEach((element, index) => {
//     let ii = `
//           <tr>
//                 <td>${index + 1}</td>
//                 <td class='nameOfComp'>${element.nam}</td>
//                 <td>     
//                     <button type="button" id="btnw" class="btn  btn-danger viewImageButton" data-bs-toggle="modal" data-bs-target="#exampleModal2">
//                         <img src="${element.img}" alt="" class="la" style="width: 100px;">
//                     </button>                       
//                 </td>
//                 <td class='priceOfComp'>${element.price}</td>
//                    <td class='zipcodeOfComp d-none'>${element.zipcode}</td>   
//                    <td class='emailOfComp d-none'>${element.email}</td>
//                    <td class='descriptionOfComp d-none'>${element.description}</td>
//                    <td class='phoneOfComp d-none'>${element.phone}</td>   
//                    <td class='cityOfComp d-none'>${element.city}</td>
//                    <td class='stateOfComp d-none'>${element.state}</td>
//                    <td class='sizeOfComp d-none'>${element.size}</td>   

//                 <td>
//                     <button class="btn btn-warning edit" data-bs-toggle="modal" data-bs-target="#exampleModal3">edit</button>
//                     <button class="btn btn-danger deleteBtn" >delete</button>
//                 </td>
//           </tr>
// `
//     document.querySelector('tbody').innerHTML += ii
// });
let viewImageButtons = document.querySelectorAll('.viewImageButton')
viewImageButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        console.log(btn.parentElement);
        document.getElementById('aura').src = btn.querySelector('.la').src
    })
})
let editButtons = document.querySelectorAll('.edit')
editButtons.forEach(edit => {
    edit.addEventListener('click', function () {
        let ter = this.parentElement.parentElement
        $("#pricei").val(ter.querySelector('.priceOfComp').textContent)
        $("#namei").val(ter.querySelector('.nameOfComp').textContent)
        $("#emaili").val(ter.querySelector('.emailOfComp').textContent)
        $("#zipcodei").val(ter.querySelector('.zipcodeOfComp').textContent)
        $("#imgi").val(ter.querySelector('.la').src)
        $("#sizei").val(ter.querySelector('.sizeOfComp').textContent)
        $("#phonei").val(ter.querySelector('.phoneOfComp').textContent)
        $("#cityi").val(ter.querySelector('.cityOfComp').textContent)
        $("#descriptioni").val(ter.querySelector('.descriptionOfComp').textContent)
        $("#statei").val(ter.querySelector('.stateOfComp').textContent)
        document.getElementById("btnSave").setAttribute("liniyaninIndexi", ter.rowIndex);
    })
})
let deleteq = document.querySelectorAll('.deleteBtn')
console.log(deleteq);
deleteq.forEach(fe => {
    fe.addEventListener('click', function () {
        let nameOfComp = this.parentElement.parentElement.querySelector('.nameOfComp').textContent
        console.log(nameOfComp);
        let local = JSON.parse(localStorage.getItem('array')) || []
        let uptatedArray = local.filter(item => item.nam !== nameOfComp)
        localStorage.setItem('array', JSON.stringify(uptatedArray))
        this.parentElement.parentElement.remove()
    })
})
document.getElementById('img').addEventListener('change', function () {
    document.getElementById('displayImage').src = this.value
})
let saveChangesBtn = document.getElementById('btnSave')
saveChangesBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevents default behavior (useful if inside a form)

    // Get updated data from the input fields
    let nameOfCompEdit = document.getElementById("namei").value;
    let priceOfCompEdit = document.getElementById("pricei").value;
    let imageOfCompEdit = document.getElementById("imgi").value;
    let zipcodeOfCompEdit = document.getElementById("zipcodei").value;
    let stateOfCompEdit = document.getElementById("statei").value;
    let cityOfCompEdit = document.getElementById("cityi").value;
    let sizeOfCompEdit = document.getElementById("sizei").value;
    let emailOfCompEdit = document.getElementById("emaili").value;
    let phoneOfCompEdit = document.getElementById("phonei").value;
    let descriptionOfCompEdit = document.getElementById("descriptioni").value;

    // Get the index of the row being edited
    let rowIndex = document.getElementById("btnSave").getAttribute("liniyaninIndexi");

    // Ensure the rowIndex is valid before proceeding
    if (rowIndex === null || rowIndex === undefined) {
        console.error("Row index is not valid.");
        return;
    }

    // Parse the array from localStorage
    let localnoe = JSON.parse(localStorage.getItem('array'));



    // Update the table row with the new values
    let row = document.getElementById('myTable').rows[rowIndex];
    if (row) {
        // Update each column of the row with the new values
        row.querySelector('.nameOfComp').textContent = nameOfCompEdit;
        row.querySelector('.priceOfComp').textContent = priceOfCompEdit;
        row.querySelector('.la').src = imageOfCompEdit;
        // row.querySelector('.zipcodeOfComp').textContent = zipcodeOfCompEdit;
        // row.querySelector('.stateOfComp').textContent = stateOfCompEdit;
        // row.querySelector('.cityOfComp').textContent = cityOfCompEdit;
        // row.querySelector('.sizeOfComp').textContent = sizeOfCompEdit;
        // row.querySelector('.emailOfComp').textContent = emailOfCompEdit;
        // row.querySelector('.phoneOfComp').textContent = phoneOfCompEdit;
        // row.querySelector('.descriptionOfComp').textContent = descriptionOfCompEdit;
    } else {
        console.error("Row not found in table.");
        return;
    }

    // Update the localStorage array with the new values
    localnoe[rowIndex] = {
        nam: nameOfCompEdit,
        price: priceOfCompEdit,
        email: emailOfCompEdit,
        zipcode: zipcodeOfCompEdit,
        state: stateOfCompEdit,
        size: sizeOfCompEdit,
        description: descriptionOfCompEdit,
        city: cityOfCompEdit,
        img: imageOfCompEdit,
        phone: phoneOfCompEdit,
    };

    // Save the updated array back to localStorage
    localStorage.setItem('array', JSON.stringify(localnoe));

    // Optionally, you can hide or close the modal after saving the changes
    // Example: Close the modal
    $('#exampleModal3').modal('hide');
});


let filterSelect = document.getElementById('filterSelect')
filterSelect.addEventListener('change', function () {
    let sortedArray = array.slice(); 
    // let tbody = document.querySelector('tbody');
    // tbody.innerHTML = ''; // Clear the existing rows before appending new ones


    if (filterSelect.value === 'From Highest to Lowest') {

        sortedArray.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));

        //sortedArray.sort((a, b) => b.price - a.price); 
    } else if (filterSelect.value === 'From Lowest to Highest') {
        sortedArray.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));

       // sortedArray.sort((a, b) => a.price - b.price); //  lowest to highest
    }
    console.log(sortedArray)
    renderTable(sortedArray);
});