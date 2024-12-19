document.addEventListener("DOMContentLoaded", () => {
	// reuse header
	const nav = document.querySelector(".header_part");
	fetch("./components/header.html")
		.then((res) => {
			if (!res.ok) throw new Error(`Error fetching header: ${res.statusText}`);
			return res.text();
		})
		.then((data) => {
			nav.innerHTML = data;
		})
		.catch((err) => console.error(err));

	const footer = document.querySelector(".footer_part");
	fetch("../components/footer.html")
		.then((res) => {
			if (!res.ok) throw new Error(`Error fetching footer: ${res.statusText}`);
			return res.text();
		})
		.then((data) => {
			const footer = document.querySelector(".footer_part");
			if (!footer) throw new Error(".footer_part not found");
			footer.innerHTML = data;
		})
		.catch((err) => console.error("Error:", err.message));


	document.querySelectorAll(".btn-menu").forEach((btn) => {
		btn.addEventListener("click", (e) => {
			btn.classList.toggle("active");
		});

		const toggleMenu = document.getElementById("toggleNav");
		console.log(toggleMenu)
		const menu = document.getElementById("nav");

		toggleMenu.addEventListener("click", () => {
			console.log("Toggle")
			menu.classList.toggle("show");
		});



	});

});

document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener("scroll", function () {
		var scroll = window.scrollY;
		var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
		if (scroll > 0) {
			var car = document.querySelector(".car");
			var maxMove = window.innerWidth - car.offsetWidth;
			var moveDistance = (scroll / pageHeight) * maxMove;
			car.style.transition = "transform 0.5s ease";
			car.style.transform = `translateX(${moveDistance}px)`;

			// Tyre rotation based on scroll
			var tyres = document.querySelectorAll(".tyre");
			var rotationDegree = (scroll / pageHeight) * 1960;
			tyres.forEach(tyre => {
				tyre.style.transform = `rotate(${rotationDegree}deg)`;
			});
		}
	});
});



// date picker
document.addEventListener("DOMContentLoaded", () => {
	const startDateInput = document.getElementById("start-date");
	const endDateInput = document.getElementById("end-date");
	const datePickerPopup = document.querySelector(".date-picker-popup");
	const calendarGrid = document.querySelector(".calendar-grid");
	const prevMonthBtn = document.getElementById("prev-month");
	const nextMonthBtn = document.getElementById("next-month");
	const monthTitles = document.querySelectorAll(".month-title");
	const pickupTimeInput = document.getElementById("pickup-time-input");
	const pickupTimePicker = document.getElementById("pickup-time-picker");
	const returnTimeInput = document.getElementById("return-time-input");
	const close = document.querySelector(".date-picker-popup");

	let currentYear = new Date().getFullYear();
	let currentMonth = new Date().getMonth();
	let selectedStartDate = null;
	let selectedEndDate = null;

	// Generate the calendar for 3 months
	function generateCalendars() {
		calendarGrid.innerHTML = "";
		for (let i = 0; i < 2; i++) {
			const date = new Date(currentYear, currentMonth + i, 1);
			const calendarElement = createCalendar(date);
			calendarGrid.appendChild(calendarElement);

			// Update month titles
			const title = date.toLocaleString("default", {
				month: "long",
				year: "numeric",
			});
			monthTitles[i].textContent = title;
		}
	}

	function createCalendar(date) {
		const calendar = document.createElement("div");
		calendar.classList.add("calendar");

		const table = document.createElement("table");

		// Generate days of the week
		const daysOfWeek = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
		const thead = document.createElement("thead");
		const daysRow = document.createElement("tr");
		daysOfWeek.forEach((day) => {
			const th = document.createElement("th");
			th.textContent = day;
			daysRow.appendChild(th);
		});
		thead.appendChild(daysRow);

		// Generate calendar dates
		const tbody = document.createElement("tbody");
		const firstDay =
			new Date(date.getFullYear(), date.getMonth(), 1).getDay() || 7;
		const daysInMonth = new Date(
			date.getFullYear(),
			date.getMonth() + 1,
			0
		).getDate();

		let row = document.createElement("tr");
		for (let i = 1; i < firstDay; i++) {
			row.appendChild(document.createElement("td"));
		}

		for (let day = 1; day <= daysInMonth; day++) {
			if (row.children.length === 7) {
				tbody.appendChild(row);
				row = document.createElement("tr");
			}

			const cell = document.createElement("td");
			cell.textContent = day;
			const cellDate = new Date(date.getFullYear(), date.getMonth(), day);

			cell.addEventListener("click", () => selectDate(cellDate));
			if (
				selectedStartDate &&
				cellDate.getTime() === selectedStartDate.getTime()
			) {
				cell.classList.add("selected");
			}
			if (
				selectedStartDate &&
				selectedEndDate &&
				cellDate > selectedStartDate &&
				cellDate < selectedEndDate
			) {
				cell.classList.add("range");
			}
			if (selectedEndDate && cellDate.getTime() === selectedEndDate.getTime()) {
				cell.classList.add("selected");
			}

			row.appendChild(cell);
		}

		tbody.appendChild(row);
		table.appendChild(thead);
		table.appendChild(tbody);
		calendar.appendChild(table);
		return calendar;
	}

	function selectDate(date) {
		if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
			selectedStartDate = date;
			selectedEndDate = null;
			startDateInput.value = formatDate(date);
			endDateInput.value = "";
		} else if (date > selectedStartDate) {
			selectedEndDate = date;
			endDateInput.value = formatDate(date);
			// Close the popup after return date is selected
			closeDatePicker();
		}
		generateCalendars();
	}

	function formatDate(date) {
		return date.toLocaleString("default", { day: "2-digit", month: "short" });
	}

	function closeDatePicker() {
		datePickerPopup.classList.remove("active");
	}

	startDateInput.addEventListener("click", () => {
		datePickerPopup.classList.toggle("active");
		generateCalendars();
	});

	endDateInput.addEventListener("click", () => {
		datePickerPopup.classList.toggle("active");
		generateCalendars();
	});

	prevMonthBtn.addEventListener("click", () => {
		currentMonth--;
		generateCalendars();
	});

	nextMonthBtn.addEventListener("click", () => {
		currentMonth++;
		generateCalendars();
	});

	pickupTimeInput.addEventListener("click", () => {
		pickupTimePicker.style.display = "block";
		closeDatePicker();
	});
	returnTimeInput.addEventListener("click", () => {
		pickupTimePicker.style.display = "block";
		closeDatePicker();
	});

	// Close pickers when clicking outside
	document.addEventListener("click", (e) => {
		// Check if the click is outside of the date picker popup
		if (!close.contains(e.target) && !startDateInput.contains(e.target)) {
			//   closeDatePicker();
		}
	});
});
// time picker
document.addEventListener("DOMContentLoaded", () => {
	const pickupTimeInput = document.getElementById("pickup-time-input");
	const pickupTimePicker = document.getElementById("pickup-time-picker");
	const pickupTimeSlots = pickupTimePicker.querySelectorAll(".time-slot");

	const returnTimeInput = document.getElementById("return-time-input");
	const returnTimePicker = document.getElementById("return-time-picker");
	const returnTimeSlots = returnTimePicker.querySelectorAll(".time-slot");

	// Prevent form submission on time selection
	pickupTimeInput.addEventListener("click", (e) => {
		e.stopPropagation();
		e.preventDefault();
		closeAllPickers();
		pickupTimePicker.style.display = "block";
	});

	returnTimeInput.addEventListener("click", (e) => {
		e.stopPropagation();
		e.preventDefault();
		closeAllPickers();
		returnTimePicker.style.display = "block";
	});

	// Close pickers when clicking outside
	document.addEventListener("click", (e) => {
		if (
			!pickupTimePicker.contains(e.target) &&
			!returnTimePicker.contains(e.target)
		) {
			closeAllPickers();
		}
	});

	// Handle pick-up time slot selection
	pickupTimeSlots.forEach((slot) => {
		slot.addEventListener("click", (e) => {
			e.preventDefault();
			pickupTimeInput.value = slot.textContent;
			closeAllPickers();
		});
	});

	// Handle return time slot selection
	returnTimeSlots.forEach((slot) => {
		slot.addEventListener("click", (e) => {
			e.preventDefault();
			returnTimeInput.value = slot.textContent;
			closeAllPickers();
		});
	});

	// Prevent form submission when time input is selected if inside a form
	const form = document.querySelector("form");
	if (form) {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			console.log("Form submission prevented.");
		});
	}

	function closeAllPickers() {
		pickupTimePicker.style.display = "none";
		returnTimePicker.style.display = "none";
	}
});

document.addEventListener("DOMContentLoaded", () => {
	// Date Picker Elements
	const startDateInput = document.getElementById("start-dates");
	const endDateInput = document.getElementById("end-dates");
	const datePickerPopup = document.querySelector(".modal-date");
	const calendarGrid = document.querySelector(".modal-calendar");
	const prevMonthBtn = document.getElementById("prev-months");
	const nextMonthBtn = document.getElementById("next-months");
	const monthTitles = document.querySelectorAll(".month-title");
	const closeDatePickerBtn = document.querySelector(".modal-date");

	// Time Picker Elements
	const pickupTimeInput = document.getElementById("pickup-time-inputs");
	const pickupTimePicker = document.getElementById("pickup-time-pickers");
	const returnTimeInput = document.getElementById("return-time-inputs");
	const returnTimePicker = document.getElementById("return-time-pickers");
	const pickupTimeSlots = pickupTimePicker.querySelectorAll(".time-slot");
	const returnTimeSlots = returnTimePicker.querySelectorAll(".time-slot");

	// Initialize date variables
	let currentYear = new Date().getFullYear();
	let currentMonth = new Date().getMonth();
	let selectedStartDate = null;
	let selectedEndDate = null;

	// Generate the calendar for 3 months
	function generateCalendars() {
		calendarGrid.innerHTML = "";
		for (let i = 0; i < 2; i++) {
			const date = new Date(currentYear, currentMonth + i, 1);
			const calendarElement = createCalendar(date);
			calendarGrid.appendChild(calendarElement);

			// Update month titles
			const title = date.toLocaleString("default", {
				month: "long",
				year: "numeric",
			});
			monthTitles[i].textContent = title;
		}
	}

	// Create individual calendar
	function createCalendar(date) {
		const calendar = document.createElement("div");
		calendar.classList.add("calendar");

		const table = document.createElement("table");

		// Generate days of the week
		const daysOfWeek = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
		const thead = document.createElement("thead");
		const daysRow = document.createElement("tr");
		daysOfWeek.forEach((day) => {
			const th = document.createElement("th");
			th.textContent = day;
			daysRow.appendChild(th);
		});
		thead.appendChild(daysRow);

		// Generate calendar dates
		const tbody = document.createElement("tbody");
		const firstDay =
			new Date(date.getFullYear(), date.getMonth(), 1).getDay() || 7;
		const daysInMonth = new Date(
			date.getFullYear(),
			date.getMonth() + 1,
			0
		).getDate();

		let row = document.createElement("tr");
		for (let i = 1; i < firstDay; i++) {
			row.appendChild(document.createElement("td"));
		}

		for (let day = 1; day <= daysInMonth; day++) {
			if (row.children.length === 7) {
				tbody.appendChild(row);
				row = document.createElement("tr");
			}

			const cell = document.createElement("td");
			cell.textContent = day;
			const cellDate = new Date(date.getFullYear(), date.getMonth(), day);

			cell.addEventListener("click", () => selectDate(cellDate));
			if (
				selectedStartDate &&
				cellDate.getTime() === selectedStartDate.getTime()
			) {
				cell.classList.add("selected");
			}
			if (
				selectedStartDate &&
				selectedEndDate &&
				cellDate > selectedStartDate &&
				cellDate < selectedEndDate
			) {
				cell.classList.add("range");
			}
			if (selectedEndDate && cellDate.getTime() === selectedEndDate.getTime()) {
				cell.classList.add("selected");
			}

			row.appendChild(cell);
		}

		tbody.appendChild(row);
		table.appendChild(thead);
		table.appendChild(tbody);
		calendar.appendChild(table);
		return calendar;
	}

	// Handle selecting a date
	function selectDate(date) {
		if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
			selectedStartDate = date;
			selectedEndDate = null;
			startDateInput.value = formatDate(date);
			endDateInput.value = "";
		} else if (date > selectedStartDate) {
			selectedEndDate = date;
			endDateInput.value = formatDate(date);
			// Close the popup after return date is selected
			closeDatePicker();
		}
		generateCalendars();
	}

	// Format date to "DD MMM" format
	function formatDate(date) {
		return date.toLocaleString("default", { day: "2-digit", month: "short" });
	}

	// Close date picker modal
	function closeDatePicker() {
		datePickerPopup.classList.remove("active");
	}

	// Open date picker when start date or end date input is clicked
	startDateInput.addEventListener("click", (e) => {
		e.stopPropagation();
		closeOtherModals(); // Close other modals
		datePickerPopup.classList.toggle("active");
		generateCalendars();
	});

	endDateInput.addEventListener("click", (e) => {
		e.stopPropagation();
		closeOtherModals(); // Close other modals
		datePickerPopup.classList.toggle("active");
		generateCalendars();
	});

	// Double-click event to close the date picker
	startDateInput.addEventListener("dblclick", () => {
		closeDatePicker();
	});

	endDateInput.addEventListener("dblclick", () => {
		closeDatePicker();
	});

	prevMonthBtn.addEventListener("click", () => {
		currentMonth--;
		generateCalendars();
	});

	nextMonthBtn.addEventListener("click", () => {
		currentMonth++;
		generateCalendars();
	});

	// Close all open modals (date picker and time picker)
	function closeOtherModals() {
		if (datePickerPopup.classList.contains("active")) {
			closeDatePicker();
		}
		if (pickupTimePicker.style.display === "block") {
			pickupTimePicker.style.display = "none";
		}
		if (returnTimePicker.style.display === "block") {
			returnTimePicker.style.display = "none";
		}
	}

	// Time picker logic
	pickupTimeInput.addEventListener("click", (e) => {
		e.stopPropagation(); // Prevent form submission
		closeOtherModals(); // Close other modals
		pickupTimePicker.style.display = "block";
		closeDatePicker();
	});

	returnTimeInput.addEventListener("click", (e) => {
		e.stopPropagation(); // Prevent form submission
		closeOtherModals(); // Close other modals
		returnTimePicker.style.display = "block";
		closeDatePicker();
	});

	// Handle pick-up time slot selection
	pickupTimeSlots.forEach((slot) => {
		slot.addEventListener("click", (e) => {
			e.preventDefault(); // Prevent form submission
			pickupTimeInput.value = slot.textContent;
			closeAllPickers();
		});
	});

	// Handle return time slot selection
	returnTimeSlots.forEach((slot) => {
		slot.addEventListener("click", (e) => {
			e.preventDefault(); // Prevent form submission
			returnTimeInput.value = slot.textContent;
			closeAllPickers();
		});
	});

	// Close all time pickers
	function closeAllPickers() {
		pickupTimePicker.style.display = "none";
		returnTimePicker.style.display = "none";
	}

	// Prevent form submission when selecting time slots (if inside a form)
	const form = document.querySelector("form");
	if (form) {
		form.addEventListener("submit", (e) => {
			e.preventDefault(); // Prevent form submission
			console.log("Form submission prevented.");
		});
	}

	// Close pickers when clicking outside
	document.addEventListener("click", (e) => {
		if (
			!closeDatePickerBtn.contains(e.target) &&
			!startDateInput.contains(e.target)
		) {
			closeDatePicker();
		}
		if (
			!pickupTimePicker.contains(e.target) &&
			!pickupTimeInput.contains(e.target)
		) {
			pickupTimePicker.style.display = "none";
		}
		if (
			!returnTimePicker.contains(e.target) &&
			!returnTimeInput.contains(e.target)
		) {
			returnTimePicker.style.display = "none";
		}
	});
});

// tab data
document.addEventListener("DOMContentLoaded", () => {
	const tabs = document.querySelectorAll(
		".tab-select .car-tab, .tab-select .van-tab"
	);

	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			// Remove active_tab class from all tabs
			tabs.forEach((t) => t.classList.remove("active_tab"));

			// Add active_tab class to clicked tab
			tab.classList.add("active_tab");
		});
	});
});

// Select the input and icon elements
const input = document.getElementById("return");
const pickup = document.getElementById("pickup");
const icons = document.querySelectorAll(".icon");

// Function to add 'focused' class to the corresponding icon
function toggleFocusedClass(element, action) {
	icons.forEach((icon) => {
		if (icon.contains(element)) {
			if (action === "add") {
				icon.classList.add("focused");
			} else {
				icon.classList.remove("focused");
			}
		}
	});
}

// Add event listeners for focus and blur on both input and pickup
input.addEventListener("focus", () => toggleFocusedClass(input, "add"));
input.addEventListener("blur", () => toggleFocusedClass(input, "remove"));

pickup.addEventListener("focus", () => toggleFocusedClass(pickup, "add"));
pickup.addEventListener("blur", () => toggleFocusedClass(pickup, "remove"));


// form data
document.getElementById("form-data").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent form submission

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
		document.getElementById("pickup-time-input")?.value || "";
	formObject["returnTime"] =
		document.getElementById("return-time-input")?.value || "";

	// Collect pickup and return locations
	formObject["pickupLocation"] = document.getElementById("pickup")?.value || "";
	formObject["returnLocation"] = document.getElementById("return")?.value || "";

	// Collect dates
	formObject["pickupDate"] = document.getElementById("start-date")?.value || "";
	formObject["returnDate"] = document.getElementById("end-date")?.value || "";

	// console.log("Form data:", formObject.vehicleType);
	const queryString = new URLSearchParams(formObject).toString();
	window.location.href = `/car-list.html?${queryString}`;


	// Reset the form and clear custom inputs
	this.reset();

	// Manually clear custom inputs if necessary
	document.getElementById("pickup-time-input").value = "";
	document.getElementById("return-time-input").value = "";
	document.getElementById("start-date").value = "";
	document.getElementById("end-date").value = "";

	// Reset active tab
	document
		.querySelectorAll(".tab-select .active_tab")
		.forEach((tab) => tab.classList.remove("active_tab"));
});






document.getElementById("modal-form").addEventListener("submit", function (event) {
	event.preventDefault(); // Prevent form submission

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
		toastContainer.style.zIndex = '1050';
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

	toastContainer.appendChild(toast);

	setTimeout(() => {
		// Remove the toast
		toast.classList.remove('show');
		setTimeout(() => {
			toast.remove();
		}, 300);
	}, 3000);
}



$('#owl-carousel').owlCarousel({
	loop: false,
	margin: 30,
	dots: true,
	nav: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1600: {
			items: 3,
		}
	}
})


$('#owl-carousel-2').owlCarousel({
	loop: false,
	margin: 30,
	dots: true,
	nav: true,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 4,
		},
		1800: {
			items: 5,
		}
	}
})


document.querySelectorAll('.buttonBook').forEach(function (btn) {
	btn.addEventListener('click', function () {
		const modalContainer = document.getElementById('modal-container');
		modalContainer.classList.add("one");
		modalContainer.classList.remove("out");
		$('body').addClass('modal-active').css('overflow', 'hidden');
	})
})
const closeBtn = document.querySelectorAll('.closeBtn')
closeBtn.forEach(function (closeBtn) {
	closeBtn.addEventListener('click', function () {
		const modalContainer = document.getElementById('modal-container');
		modalContainer.classList.add('out');
		modalContainer.classList.add('one');
		$('body').removeClass('modal-active').css('overflow', 'auto');
	})
})




