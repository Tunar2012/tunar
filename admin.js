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
    let id = Date.now();
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
        id: id,
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
    let array = JSON.parse(localStorage.getItem('array')) || [];

    // Check if the post with the same ID already exists and update it
    let indexToUpdate = array.findIndex(item => item.id === id);
    if (indexToUpdate !== -1) {
        // Replace the old post with the new one
        array[indexToUpdate] = newCard;
    } else {
        // If no existing post with this ID, add the new one to the array
        array.push(newCard);
    }

    // Save the updated array back to localStorage
    localStorage.setItem('array', JSON.stringify(array));

    window.location.href = 'admin.html'
})
function renderTable(data) {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = ''; // Clear the existing rows before appending new ones

    data.forEach((element, index) => {
        let row = `
            <tr id=${index + 1}>
                <td class='idOfComp'>${element.id}</td>
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
let viewImageButtons = document.querySelectorAll('.viewImageButton')
viewImageButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        console.log(btn.parentElement);
        document.getElementById('aura').src = btn.querySelector('.la').src
    })
})
let editButtons = document.querySelectorAll('.edit');
editButtons.forEach(edit => {
    edit.addEventListener('click', function () {
        let ter = this.parentElement.parentElement;
        let idOfCompEdit = ter.querySelector('.idOfComp').textContent;
        $("#idi").attr('data-id', idOfCompEdit);

        $("#pricei").val(ter.querySelector('.priceOfComp').textContent);
        $("#namei").val(ter.querySelector('.nameOfComp').textContent);
        $("#emaili").val(ter.querySelector('.emailOfComp').textContent);
        $("#zipcodei").val(ter.querySelector('.zipcodeOfComp').textContent);
        $("#imgi").val(ter.querySelector('.la').src);
        $("#sizei").val(ter.querySelector('.sizeOfComp').textContent);
        $("#phonei").val(ter.querySelector('.phoneOfComp').textContent);
        $("#cityi").val(ter.querySelector('.cityOfComp').textContent);
        $("#descriptioni").val(ter.querySelector('.descriptionOfComp').textContent);
        $("#statei").val(ter.querySelector('.stateOfComp').textContent);

        document.getElementById("btnSave").setAttribute("liniyaninIndexi", ter.rowIndex);
    });
});
// Handling delete button
let deleteButtons = document.querySelectorAll('.deleteBtn');
deleteButtons.forEach(fe => {
    fe.addEventListener('click', function () {
        let idOfComp = this.parentElement.parentElement.querySelector('.idOfComp').textContent;
        let local = JSON.parse(localStorage.getItem('array')) || [];
        let updatedArray = local.filter(item => item.id !== parseInt(idOfComp));
        localStorage.setItem('array', JSON.stringify(updatedArray));
        this.parentElement.parentElement.remove();
    });
});


// Save changes after editing
let saveChangesBtn = document.getElementById('btnSave');
saveChangesBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get updated data from the form fields
    let idOfCompEdit = $("#idi").attr("data-id");
    let nameOfCompEdit = $("#namei").val();
    let priceOfCompEdit = $("#pricei").val();
    let imageOfCompEdit = $("#imgi").val();
    let zipcodeOfCompEdit = $("#zipcodei").val();
    let stateOfCompEdit = $("#statei").val();
    let cityOfCompEdit = $("#cityi").val();
    let sizeOfCompEdit = $("#sizei").val();
    let emailOfCompEdit = $("#emaili").val();
    let phoneOfCompEdit = $("#phonei").val();
    let descriptionOfCompEdit = $("#descriptioni").val();

    // Find and update the specific object in the array by matching the ID
    let array = JSON.parse(localStorage.getItem('array')) || [];
    let indexToUpdate = array.findIndex(item => item.id === parseInt(idOfCompEdit));

    if (indexToUpdate !== -1) {
        array[indexToUpdate] = {
            id: parseInt(idOfCompEdit),
            nam: nameOfCompEdit,
            price: priceOfCompEdit,
            email: emailOfCompEdit,
            zipcode: zipcodeOfCompEdit,
            state: stateOfCompEdit,
            size: sizeOfCompEdit,
            description: descriptionOfCompEdit,
            city: cityOfCompEdit,
            img: imageOfCompEdit,
            phone: phoneOfCompEdit
        };

        // Save the updated array back to localStorage
        localStorage.setItem('array', JSON.stringify(array));

        // Refresh table
        renderTable(array);
        $('#exampleModal3').modal('hide');
    }
});

// image preview
document.getElementById('img').addEventListener('change', function () {
    document.getElementById('displayImage').src = this.value
})

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