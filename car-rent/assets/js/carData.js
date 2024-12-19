const carData = [
    {
        carName: "VW T-Roc Cabriolet",
        carImg:
            "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/vw-t-roc-convertible-white-open-2023.png",
        carImages: ["https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/vw-t-roc-convertible-white-open-2023.png", "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/bmw-i4-4d-blue-US-2024.png", "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/bmw-i4-4d-blue-US-2024.png"],
        carType: "Economy Saloon Automatic",
        features: {
            carModel: 2000,
            passengers: 5,
            bags: 2,
            suitcase: 2,
            door: 5,
            shift: "automatic",
            wheelPower: 4
        },
        price: {
            amount: 1200,
            currency: "ksh",
        },
        vehicleType: "electric",
        electric: {
            range: 485,
            evType: "sedan",
        },
        vehicleCategory: "electric vehicle",
        isType: "cars",
        note: "Unlimited kilometers available",
        driversAge: "21"
    },
    {
        carName: "VW T-Roc Cabriolet",
        carImg:
            "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/bmw-i4-4d-blue-US-2024.png",
        carType: "Economy Saloon Automatic",
        features: {
            carModel: 2000,
            passengers: 5,
            bags: 2,
            suitcase: 2,
            door: 5,
            shift: "automatic",
            wheelPower: 2
        },
        price: {
            amount: 1200,
            currency: "ksh",
        },
        vehicleType: "petrol",
        electric: {},
        vehicleCategory: "sedan",
        isType: "cars",
        note: "Unlimited kilometers available",
        driversAge: "21",
    },
    {
        carName: "VW T-Roc Cabriolet",
        carImg:
            "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/bmw-i4-4d-blue-US-2024.png",
        carType: "Economy Saloon Automatic",
        features: {
            carModel: 2000,
            passengers: 5,
            bags: 2,
            suitcase: 2,
            door: 5,
            shift: "automatic",
            wheelPower: 4
        },
        price: {
            amount: 1200,
            currency: "ksh",
        },
        vehicleType: "petrol",
        electric: {},
        vehicleCategory: "sedan",
        isType: "cars",
        note: "Unlimited kilometers available",
        driversAge: "21"
    },
    {
        carName: "VW T-Roc Cabriolet",
        carImg:
            "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/chrysler-pacifica-van-schwarz-2018.png",
        carType: "Economy Saloon Automatic",
        features: {
            carModel: 2000,
            passengers: 5,
            bags: 2,
            suitcase: 2,
            door: 5,
            shift: "automatic",
            wheelPower: 2
        },
        price: {
            amount: 1200,
            currency: "ksh",
        },
        vehicleType: "petrol",
        electric: {},
        vehicleType: "petrol",
        vehicleCategory: "suv",
        isType: "vans",
        note: "Unlimited kilometers available",
        driversAge: "21"
    },
    {
        carName: "VW T-Roc Cabriolet",
        carImg:
            "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/ford-mustang-cabrio-2d-rot-geschl-2016.png",
        carType: "Economy Saloon Automatic",
        features: {
            carModel: 2000,
            passengers: 2,
            bags: 2,
            suitcase: 2,
            door: 2,
            shift: "automatic",
            wheelPower: 2
        },
        price: {
            amount: 1200,
            currency: "ksh",
        },
        vehicleType: "electric vehicle",
        electric: {
            range: 485,
            evType: "sedan",
        },
        vehicleCategory: "electric vehicle",
        isType: "cars",
        note: "Unlimited kilometers available",
        driversAge: "18+"
    },
    {
        carName: "VW T-Roc Cabriolet",
        carImg:
            "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/toyota-rav4-5d-schwarz-2019.png",
        carType: "Economy Saloon Automatic",
        features: {
            carModel: 2000,
            passengers: 5,
            bags: 2,
            suitcase: 2,
            door: 5,
            shift: "automatic",
            wheelPower: 2
        },
        price: {
            amount: 1200,
            currency: "ksh",
        },
        vehicleType: "petrol",
        electric: {},
        vehicleCategory: "suv",
        isType: "cars",
        note: "Unlimited kilometers available",
        driversAge: "18+"
    },
    {
        carName: "VW T-Roc Cabriolet",
        carImg:
            "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/toyota-camry-4d-red-2023.png",
        carType: "Economy Saloon Automatic",
        features: {
            carModel: 2000,
            passengers: 5,
            bags: 2,
            suitcase: 2,
            door: 5,
            shift: "automatic",
            wheelPower: 4
        },
        price: {
            amount: 120,
            currency: "ksh",
        },
        vehicleCategory: "sedan",
        isType: "cars",
        note: "Unlimited kilometers available",
        driversAge: "23+"
    },
    {
        carName: "VW T-Roc Cabriolet",
        carImg:
            "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/mini-cooper-cabrio-2d-weiss-offen-2018.png",
        carType: "Economy Saloon Automatic",
        features: {
            carModel: 2000,
            passengers: 5,
            bags: 2,
            suitcase: 2,
            door: 5,
            shift: "automatic",
            wheelPower: 4
        },
        price: {
            amount: 120,
            currency: "ksh",
        },
        vehicleCategory: "luxury vehicle",
        isType: "cars",
        note: "Unlimited kilometers available",
        driversAge: "23+"
    },
    {
        carName: "VW T-Roc Cabriolet",
        carImg:
            "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/vw-jetta-4d-silber-2019.png",
        carType: "Economy Saloon Automatic",
        features: {
            carModel: 2000,
            passengers: 5,
            bags: 2,
            suitcase: 2,
            door: 5,
            shift: "automatic",
            wheelPower: 4
        },
        price: {
            amount: 120,
            currency: "ksh",
        },
        vehicleCategory: "sedan",
        isType: "cars",
        note: "Unlimited kilometers available",
        driversAge: "23+"
    },
    {
        carName: "VW T-Roc Cabriolet",
        carImg:
            "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/nissan-versa-4d-grey-2023.png",
        carType: "Economy Saloon Automatic",
        features: {
            carModel: 2000,
            passengers: 5,
            bags: 2,
            suitcase: 2,
            door: 5,
            shift: "automatic",
            wheelPower: 4
        },
        price: {
            amount: 120,
            currency: "ksh",
        },
        vehicleCategory: "sedan",
        isType: "cars",
        note: "Unlimited kilometers available",
        driversAge: "18+"
    },
    {
        carName: "VW T-Roc Cabriolet",
        carImg:
            "https://www.sixt.com/fileadmin2/files/global/sideview/user_upload/fleet/png/752x500/nissan-sentra-4d-orange-2020.png",
        carType: "Economy Saloon Automatic",
        features: {
            carModel: 2000,
            passengers: 5,
            bags: 2,
            suitcase: 2,
            door: 5,
            shift: "manual",
            wheelPower: 4
        },
        price: {
            amount: 120,
            currency: "ksh",
        },
        vehicleCategory: "sedan",
        isType: "cars",
        note: "Unlimited kilometers available",
        driversAge: "25+"
    },
];


document.getElementById("modal-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formObject = {};

    // Collect standard input data
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Get active tab value
    const activeTab =
        document.querySelector(".tab-select .active_tab .name")?.textContent || "";
    formObject["vehicleType"] = activeTab;

    // Collect custom time inputs
    formObject["pickupTime"] =
        document.getElementById("pickup-time-inputs")?.value || "";
    formObject["returnTime"] =
        document.getElementById("return-time-inputs")?.value || "";
    formObject["name"] =
        document.getElementById("name")?.value || "";
    formObject["email"] =
        document.getElementById("email")?.value || "";
    formObject["phone"] =
        document.getElementById("phone")?.value || "";

    // Collect pickup and return locations
    formObject["pickupLocation"] = document.getElementById("pickup")?.value || "";
    formObject["returnLocation"] = document.getElementById("return")?.value || "";

    // Collect dates
    formObject["pickupDate"] = document.getElementById("start-dates")?.value || "";
    formObject["returnDate"] = document.getElementById("end-dates")?.value || "";

    console.log("Form Data:", formObject);

    // Reset the form and clear custom inputs
    this.reset();

    // Manually clear custom inputs if necessary
    document.getElementById("pickup-time-inputs").value = "";
    document.getElementById("return-time-inputs").value = "";
    document.getElementById("start-dates").value = "";
    document.getElementById("end-dates").value = "";

    // Reset active tab
    document
        .querySelectorAll(".tab-select .active_tab")
        .forEach((tab) => tab.classList.remove("active_tab"));

    showToast("Form submitted successfully!");
    const modalElement = document.getElementById('modal-container');
    if (modalElement) {
        modalElement.classList.add("out")
    }
});

// Function to show a simple Bootstrap toaster message
function showToast(message) {
    // Create the toast container if it doesn't exist
    let toastContainer = document.getElementById('toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.setAttribute('aria-live', 'polite');
        toastContainer.setAttribute('aria-atomic', 'true');
        toastContainer.style.position = 'fixed';
        toastContainer.style.top = '20px';
        toastContainer.style.right = '20px';
        toastContainer.style.zIndex = '1050'; // Ensure it is on top
        document.body.appendChild(toastContainer);
    }

    // Create the toast element
    const toast = document.createElement("div");
    toast.className = "toast align-items-center text-white bg-success border-0 show";
    toast.role = "alert";
    toast.ariaLive = "assertive";
    toast.ariaAtomic = "true";
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;

    // Append the toast to the container
    toastContainer.appendChild(toast);

    // Automatically remove the toast after 3 seconds
    setTimeout(() => {
        // Remove the toast
        toast.classList.remove('show');

        // Wait for the transition to finish before removing it from the DOM
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000); // Duration before the toast closes
}




const dropdownMenus = document.querySelectorAll(".select-menu");
const itemContainer = document.getElementById('itemContainer');

dropdownMenus.forEach((optionMenu, index) => {
    const selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        sBtn_text = optionMenu.querySelector(".sBtn-text");
    let selectedCount = 0;
    selectBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        dropdownMenus.forEach((menu) => {
            if (menu !== optionMenu) {
                menu.classList.remove("active-drop");
            }
        });
        optionMenu.classList.toggle("active-drop");
    });

    options.forEach((option) => {
        option.addEventListener("click", () => {
            const isSelected = option.classList.toggle("selected");

            if (index === 0 || index === 3 || index === 4) {
                options.forEach((opt) => {
                    opt.classList.remove("selected");
                });
                if (isSelected) {
                    option.classList.add("selected");
                    selectedCount = 1;
                    sBtn_text.innerText =
                        index === 0
                            ? `Sort by: ${option.querySelector(".option-text").innerText}`
                            : index === 3
                                ? `Passengers: ${option.querySelector(".option-text").innerText}`
                                : `Driver's age: ${option.querySelector(".option-text").innerText
                                }`;
                } else {
                    selectedCount = 0;
                    sBtn_text.innerText =
                        index === 0
                            ? "Sort by"
                            : index === 3
                                ? "Passengers"
                                : `Driver's age`;
                }
            } else {
                selectedCount += isSelected ? 1 : -1;

                if (index === 1) {
                    sBtn_text.innerText = `Vehicle type ${selectedCount > 0 ? `(${selectedCount})` : ""
                        }`;
                }
                if (index === 2) {
                    sBtn_text.innerText = `Gearshift ${selectedCount > 0 ? `(${selectedCount})` : ""
                        }`;
                }
            }

            updateFilters();
            selectBtn.classList.add("highlighted");
            optionMenu.classList.remove("active-drop");
        });
    });
});

document.addEventListener("click", () => {
    dropdownMenus.forEach((menu) => {
        menu.classList.remove("active-drop");
    });
});

const filters = {
    sortBy: "",
    vehicleCategory: [],
    gearshift: [],
    passengers: "",
    driversAge: "",
};

function updateFilters() {
    filters.sortBy = "";
    filters.vehicleCategory = [];
    filters.gearshift = [];
    filters.passengers = "";
    filters.driversAge = "";

    dropdownMenus.forEach((optionMenu, index) => {
        const options = optionMenu.querySelectorAll(".option");
        options.forEach((option) => {
            if (option.classList.contains("selected")) {
                const optionText = option.querySelector(".option-text").innerText;
                if (index === 0) {
                    filters.sortBy = optionText;
                } else if (index === 1) {
                    filters.vehicleCategory.push(optionText);
                } else if (index === 2) {
                    filters.gearshift.push(optionText);
                } else if (index === 3) {
                    filters.passengers = optionText;
                } else if (index === 4) {
                    filters.driversAge = optionText;
                }
            }
        });
    });

    displayCars();
}

function getVehicleTypeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('vehicleType');
}

function displayCars() {
    itemContainer.innerHTML = "";

    const urlVehicleType = getVehicleTypeFromURL();

    let filteredCars = carData;

    if (urlVehicleType) {
        filteredCars = filteredCars.filter(car => car.isType.toLowerCase() === urlVehicleType.toLowerCase());
    }

    filteredCars = filteredCars.filter((car) => {
        let matches = true;

        if (filters.vehicleCategory.length > 0) {
            matches =
                matches &&
                filters.vehicleCategory.some(
                    (type) => type.toLowerCase() === car.vehicleCategory.toLowerCase()
                );
        }

        if (filters.gearshift.length > 0) {
            matches =
                matches &&
                filters.gearshift.some(
                    (shift) => shift.toLowerCase() === car.features.shift.toLowerCase()
                );
        }

        if (filters.passengers) {
            matches =
                matches && car.features.passengers === parseInt(filters.passengers);
        }

        if (filters.driversAge) {
            matches =
                matches && car.driversAge === filters.driversAge;
        }

        return matches;
    });

    if (filters.sortBy) {
        if (filters.sortBy.toLowerCase() === "price low to high") {
            filteredCars.sort((a, b) => a.price.amount - b.price.amount);
        } else if (filters.sortBy.toLowerCase() === "price high to low") {
            filteredCars.sort((a, b) => b.price.amount - a.price.amount);
        } else if (filters.sortBy.toLowerCase() === "electric vehicles first") {
            filteredCars.sort((a, b) => {
                const aIsEV =
                    (a.vehicleType && a.vehicleType.toLowerCase().includes("electric")) ||
                    false;
                const bIsEV =
                    (b.vehicleType && b.vehicleType.toLowerCase().includes("electric")) ||
                    false;

                if (aIsEV === bIsEV) {
                    return a.carName.localeCompare(b.carName);
                }
                return aIsEV ? -1 : 1;
            });
        }
    }

    document.getElementById("filterCarItem").innerHTML = `Show ${filteredCars.length} cars`;

    if (filteredCars.length === 0) {
        const carItem = document.createElement("div");
        carItem.className = "col-lg-12";
        carItem.innerHTML = `<h4 class="no-data">No data found...</h4>`;
        itemContainer.appendChild(carItem);
    } else {
        filteredCars.forEach((car, index) => {
            var evImg, evRange, vehicleCategory;
            if (car.vehicleCategory.toLowerCase() === "electric vehicle") {
                evImg = `<img src="assets/images/car_icon/battery.png" alt="">`;
                evRange = car.electric.range ? car.electric.range : "Range not available";
                vehicleCategory = car.electric.evType;
            } else {
                evImg = `<img src="assets/images/car_icon/${car.features.shift.toLowerCase()}.png" alt="">`;
                evRange = car.features.shift;
                vehicleCategory = car.vehicleCategory;
            }

            const carItem = document.createElement("div");
            carItem.className = "col-lg-4";
            carItem.innerHTML = `
                <div class='item data'>
                    <div class="more-banner">
                        <img src="${car.carImg}" alt="${car.carName}">
                        <a class="awp-box">
                            <div class="discount box">
                                <div class="upper">
                                    <h2 class="large-text-bt car_name">${car.carName}</h2>
                                    <div class="d-flex mt-1">
                                        <div class="car_sub_heading">or similar</div>
                                        <div class="car_sub_heading text-capitalize">|</div>
                                        <div class="car_sub_heading text-capitalize">${vehicleCategory}</div>
                                    </div>
                                    <div class="img_gallery">
                                          <img src="assets/images/icons/gallery.svg" alt="gallery">         
                                    </div>
                                    <div class="d-flex mt-3">
                                        <div class="feature">
                                            <div class="image-container">
                                                <img src="assets/images/car_icon/user.png" alt="">
                                            </div>
                                            <span>${car.features.passengers}</span>
                                        </div>
                                        <div class="feature">
                                            <div class="image-container">
                                                <img src="assets/images/car_icon/bag.png" alt="">
                                            </div>
                                            <span>${car.features.bags}</span>
                                        </div>
                                        <div class="feature">
                                            <div class="image-container">
                                                ${evImg}
                                            </div>
                                            <span class="text-capitalize">${evRange}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="lower">
                                    <div class="d-flex align-items-center mb-2">
                                        <div class="right-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                                            </svg>
                                        </div>
                                        <span class="notes">${car.note}</span>
                                    </div>
                                    <div class="price_per_day">
                                        <div class="d-flex fl">
                                            <span>${car.price.currency}</span>
                                            <span>
                                                <h4>${car.price.amount}</h4>
                                            </span>
                                        </div>
                                        <span>/ day</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            `;
            itemContainer.appendChild(carItem);

            const imgGallery = carItem.querySelector('.img_gallery');
            const modalElement = document.getElementById('carGalleryModal');
            imgGallery.addEventListener('click', () => {
                const modal = new bootstrap.Modal(document.getElementById('carGalleryModal'));
                modal.show();

                const owlCarousel = $('#owl-carousel-carGallery');
                owlCarousel.empty();

                if (car.carImages && Array.isArray(car.carImages)) {
                    if (car.carImages.length === 0) {
                        owlCarousel.html('<div class="item">No images available for this car.</div>');
                    } else {
                        let carouselHTML = '';
                        car.carImages.forEach(imageUrl => {
                            carouselHTML += `<div class="item"><img src="${imageUrl}" alt="Image of ${car.carName}"></div>`;
                        });
                        owlCarousel.html(carouselHTML);
                    }
                    modalElement.addEventListener('shown.bs.modal', function () {
                        const owlCarousel = $('#owl-carousel-carGallery');
                        owlCarousel.owlCarousel({
                            loop: false,
                            nav: true,
                            items: 1
                        });
                    });
                } else {
                    console.error("Car images array not found or not an array for:", car);
                    owlCarousel.html('<div class="item error-msg">Error no images found</div>'); //Handle errors
                }
            });

        });
    }

    const items = document.querySelectorAll(".item.data");
    items.forEach((item, index) => {
        item.addEventListener("click", function () {
            const existingBox = document.getElementById(`appended-box-${index}`);
            const isActive = item.classList.contains("card_active");
            items.forEach((i) => i.classList.remove("card_active"));
            if (!isActive) {
                item.classList.add("card_active");
            }
            if (existingBox) {
                existingBox.classList.toggle("show");
            } else {
                const car = filteredCars[index];
                var evImg, evRange;
                if (car.vehicleCategory.toLowerCase() === "electric vehicle") {
                    evImg = `<img src="assets/images/car_icon/battery.png" alt="">`;
                    evRange = car.electric.range ? car.electric.range : "Range not available";
                } else {
                    evImg = `<img src="assets/images/car_icon/${car.features.shift.toLowerCase()}.png" alt="">`;
                    evRange = car.features.shift;
                }
                const appendedBox = document.createElement("div");
                appendedBox.className = "row appended-box show car_container my-3";
                appendedBox.id = `appended-box-${index}`;
                appendedBox.innerHTML = `
                    <div class="col-lg-6">
                        <div class='item'>
                            <div class="more-banner">
                                <img src="${car.carImg}" alt="${car.carName}">
                                <a class="awp-box">
                                    <div class="discount box">
                                        <div class="upper">
                                            <h2 class="large-text-bt car_name">${car.carName}</h2>
                                            <div class="d-flex mt-1">
                                                <div class="car_sub_heading">or similar</div>
                                                <div class="car_sub_heading text-capitalize">|</div>
                                                <div class="car_sub_heading text-capitalize">${car.vehicleCategory}</div>
                                            </div>
                                        </div>
                                        <div class="lower">
                                            <div class="d-flex justify-content-center m-2">
                                                <div class="feature">
                                                    <div class="image-container">
                                                        <img src="assets/images/car_icon/user.png" alt="">
                                                    </div>
                                                    <span>${car.features.passengers} passengers</span>
                                                </div>
                                                <div class="feature">
                                                    <div class="image-container">
                                                        <img src="assets/images/car_icon/suitcase.png" alt="">
                                                    </div>
                                                    <span>${car.features.bags} Bags</span>
                                                </div>
                                                <div class="feature">
                                                    <div class="image-container">${evImg}</div>
                                                    <span class="text-capitalize">${evRange}</span>
                                                </div>
                                                <div class="feature">
                                                    <div class="image-container">
                                                        <img src="assets/images/car_icon/door.png" alt="">
                                                    </div>
                                                    <span>${car.features.door} Doors</span>
                                                </div>
                                            </div>
                                            <div class="feature">
                                                <div class="image-container">
                                                    <img src="assets/images/car_icon/licancde.png" alt="">
                                                </div>
                                                <span>Minimum age of the youngest driver: 18</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                           
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="pad position-relative">
                            <div class="d-flex mt-2 align-items-center justify-content-between ">
                                <h5 class="mb-3">Booking options</h5>
                                <div class="close mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="option-box">
                                <label class="d-flex align-items-center mobile-block">
                                    <div class="d-flex align-items-center">
                                        <div class="input">
                                            <input type="radio" name="booking-option" checked>
                                        </div>
                                        <div>
                                            <h6>Stay flexible</h6>
                                            <p>Pay at pick-up, free cancellation and rebooking anytime before pick-up time</p>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center gap-1">
                                        <span class="tag">Popular</span>
                                        <span class="small"><span>${car.price.currency}</span>${car.price.amount}</span>
                                        <span class="small">/</span>
                                        <span class="small">day</span>
                                    </div>
                                </label>
                            </div>

                            <h5 class="my-3">More info</h5>
                            <div class="row pb-3">
                            <div class="col-lg-12">
                            <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center gap-1"><div class="model"><img src="/assets/images/car_icon/svgviewer-png-output (2).png" alt=""></div>
                            <div class="tex">${car.features.carModel} Model</div></div>
                           <div class="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center gap-1"> <div class="model"><img src="assets/images/car_icon/manual.png" alt=""></div>
                            <div class="tex">${car.features.shift}</div></div>
                            <div class="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center gap-1"><div class="model"><img src="assets/images/car_icon/door.png" alt=""></div>
                            <div class="tex">${car.features.door} Doors</div></div>
                            </div>
                            <div class="col-lg-12 mt-4">
                            <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center gap-1"> <div class="model"><img src="/assets/images/car_icon/wheel.svg" style="width:32px" alt=""></div>
                            <div class="tex">${car.features.wheelPower} Wheel</div></div>
                            <div class="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center gap-1"><div class="model"><img src="/assets/images/car_icon/suitcase.png" alt=""></div>
                            <div class="tex">${car.features.suitcase} Suitcase</div></div>
                            <div class="col-lg-4 col-md-6 col-sm-6 d-flex align-items-center gap-1"><div class="model"><img src="/assets/images/car_icon/user.png" alt=""></div>
                            <div class="tex">${car.features.passengers} Passengers</div></div>
                            </div>
                            </div>
                            </div>

                            <div class="d-flex align-items-center justify-content-between top">
                                <div class="total d-flex align-items-center justify-content-between">
                                    <sub>${car.price.currency}</sub>
                                    <span class="d-flex align-items-center gap0">
                                        <span class="d-flex align-items-center">
                                            <h4>${car.price.amount}</h4>
                                        </span>
                                        <span>/day</span>
                                    </span>
                                </div>
                                <div class="book_btn booking">
                                    <a class="btn">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                const insertAfter = item.closest(".col-lg-4");
                let rowIndex;

                const columns = itemContainer.querySelectorAll(".col-lg-4").length;

                if (window.innerWidth <= 768) {
                    rowIndex = index;
                } else {
                    if (columns > 3) {
                        rowIndex = Math.floor(index / 3) * 3 + 2;
                    } else if (columns < 3) {
                        rowIndex = Math.floor(index / 2) * 2 + 1;
                    } else {
                        rowIndex = index;
                    }
                }
                const targetElement = itemContainer.children[rowIndex] || insertAfter;
                targetElement.insertAdjacentElement("afterend", appendedBox);
                adjustBoxPosition(appendedBox);


                const closeBtn = appendedBox.querySelector(".close");
                closeBtn.addEventListener("click", function (e) {
                    e.stopPropagation();
                    appendedBox.classList.remove("show");
                    items.forEach(function (actItem) {
                        actItem.classList.remove("card_active");
                    });
                    setTimeout(() => {
                        appendedBox.remove();
                    }, 300);
                });
            }

            document.querySelectorAll(".appended-box.show").forEach((box) => {
                if (box.id !== `appended-box-${index}`) {
                    box.classList.remove("show");
                    setTimeout(() => {
                        if (!box.classList.contains("show")) {
                            box.remove();
                        }
                    }, 300);
                }
            });
        });
    });

    const closeBtn = document.getElementById("closeBtn");
    const modalContainer = document.getElementById("modal-container");

    itemContainer.addEventListener("click", function (e) {
        if (e.target.closest(".booking")) {
            modalContainer.classList.add("one");
            modalContainer.classList.remove("out");
        }
    });

    const closeBtns = document.querySelectorAll('.btb')
    closeBtns.forEach(function (closeBtn) {
        console.log(closeBtn)
        closeBtn.addEventListener('click', function () {
            const modalContainer = document.getElementById('modal-container');
            modalContainer.classList.add('out');
            modalContainer.classList.add('one');
            $('body').removeClass('modal-active').css('overflow', 'auto');
        })
    })



}

function adjustBoxPosition(box) {
    const rect = box.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const margin = 0 * viewportHeight;
    const boxHeight = rect.height;
    const boxTop = rect.top;
    const boxBottom = rect.bottom;
    const availableHeight = viewportHeight - 2 * margin;
    const offset = (availableHeight - boxHeight) / 0;

    if (boxTop > offset) {
        box.style.top = `${margin}px`;
    } else if (boxBottom < viewportHeight - margin) {

    } else {
        box.style.top = `${offset + margin}px`;
    }

    if (boxTop < 0 || boxBottom > viewportHeight) {
        box.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

displayCars();



document.addEventListener("DOMContentLoaded", function () {
    const openFilters = document.getElementById("openFilter");
    const callFilter = document.getElementById("callFilter");
    const back = document.getElementById("back");
    const close = document.getElementById("close");
    const body = document.documentElement;

    openFilters.addEventListener("click", function () {
        callFilter.classList.add("active");
        body.style.overflow = "hidden";
    });

    back.addEventListener("click", () => {
        callFilter.classList.remove("active");
        body.style.overflow = "auto"; // Enable scrolling again
    });

    close.addEventListener("click", () => {
        callFilter.classList.remove("active");
        body.style.overflow = "auto"; // Enable scrolling again
    });
})







// $('#owl-carousel-carGallery').owlCarousel({
//     loop: false,
//     margin: 30,
//     dots: true,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1,
//         },
//         600: {
//             items: 1,
//         },
//         1800: {
//             items: 1,
//         }
//     }
// })



