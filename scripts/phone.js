const loadPhone = async (searchText) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
};

const displayPhones = (phones) =>{

    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    const showAllContainer = document.getElementById('show-all-container');

    // console.log(phones.length)

    if (phones.length > 12){
        showAllContainer.classList.remove('hidden');
    }
    else{
        showAllContainer.classList.add('hidden')
    }


    phones = phones.slice(0, 12);


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
    `
    ;

    phoneContainer.appendChild(phoneCard);
    });

};

const handleSearch = () =>{
    toggleLoadingSpinner(true);
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    // console.log(searchText);
    loadPhone(searchText);

};

const toggleLoadingSpinner = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');
    if (isLoading){
        loadingSpinner.classList.remove('hidden');
    }

};