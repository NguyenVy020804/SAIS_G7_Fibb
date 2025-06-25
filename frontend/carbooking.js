// Mobile menu toggle
let menubar = document.querySelector('#menu-bars');
let mynav = document.querySelector('.navbar');

menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
};

document.querySelector('.search-cabs a').addEventListener('click', (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll('.form-fields input');
    const data = {
        name: inputs[0].value,
        phone: inputs[1].value,
        date: inputs[2].value,
        time: inputs[3].value,
        pickup: inputs[4].value,
        drop: inputs[5].value
    };

    fetch('http://localhost:5000/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        alert(result.message + " - Total bookings: " + result.total);
        inputs.forEach(input => input.value = '');
    })
    .catch(err => {
        alert("Booking failed!");
        console.error(err);
    });
});
