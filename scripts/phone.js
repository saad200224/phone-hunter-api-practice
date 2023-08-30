const loadPhone = async () =>{
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await response.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
};
loadPhone();

const displayPhones = (phones) =>{
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        // console.log(phone);
    const phoneCard = document.createElement('div');
    phoneCard.classList = `p-4 card bg-gray-100 shadow-xl`;
    phoneCard.innerHTML = `
    <figure><img src="${phone.image}" alt="" /></figure>
    <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-center">
        <button class="btn btn-primary">Show Details</button>
        </div>
    </div>
    `;
    phoneContainer.appendChild(phoneCard);
    });
};