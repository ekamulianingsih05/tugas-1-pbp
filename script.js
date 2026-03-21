console.log("Welcome to Ni Luh Putu Eka Mulianingsih's Profile!");

document.addEventListener("DOMContentLoaded", () => {
	const biodataForm = document.getElementById("biodataForm");
	const formResult = document.getElementById("formResult");

	if (biodataForm && formResult) {
		biodataForm.addEventListener("submit", (event) => {
			event.preventDefault();

			const nama = document.getElementById("nama").value.trim();
			const email = document.getElementById("email").value.trim();
			const jurusan = document.getElementById("jurusan").value;
			const pesan = document.getElementById("pesan").value.trim();

			formResult.innerHTML = `<strong>Data berhasil dikirim:</strong><br>Nama: ${nama}<br>Email: ${email}<br>Jurusan: ${jurusan}<br>Pesan: ${pesan || "-"}`;
			formResult.classList.add("show");
		});
	}

	const calcDisplay = document.getElementById("calcDisplay");
	const calcButtons = document.querySelectorAll(".calc-btn");

	if (calcDisplay && calcButtons.length > 0) {
		calcButtons.forEach((button) => {
			button.addEventListener("click", () => {
				const value = button.dataset.value;

				if (!value) {
					return;
				}

				if (value === "C") {
					calcDisplay.value = "";
					return;
				}

				if (value === "=") {
					try {
						const expression = calcDisplay.value.replace(/x/g, "*");
						calcDisplay.value = Function(`"use strict"; return (${expression})`)();
					} catch (error) {
						calcDisplay.value = "Error";
					}
					return;
				}

				if (calcDisplay.value === "Error") {
					calcDisplay.value = "";
				}

				calcDisplay.value += value;
			});
		});
	}
});
