const form = document.getElementById("contact-form");
const outputParagraph = document.getElementById("output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    outputParagraph.textContent = "Please fill in all fields.";
    outputParagraph.classList.toggle("bg-green-500", false);
    outputParagraph.classList.toggle("bg-red-500", true);
    return;
  }

  const template = `<ul>
                        <li>Name: ${name}</li>
                        <li>Email: ${email}</li>
                        <li>Message: ${message}</li>
                      </ul>`;

  outputParagraph.innerHTML = template;
  outputParagraph.classList.toggle("bg-red-500", false);
  outputParagraph.classList.toggle("bg-green-500", true);

  form.reset();
});

// -----------------------
// ------Alternative------
// -----------------------

// const contactForm = document.getElementById("contact-form");
// const nameInput = document.getElementById("name");
// const messageInput = document.getElementById("message");
// const emailInput = document.getElementById("email");

// const output = document.getElementById("output");

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (!nameInput.value || !messageInput.value || !emailInput.value) {
//     output.classList.toggle("bg-green-500", false);
//     output.classList.toggle("bg-red-500", true);
//     output.textContent = "Please fill in all fields!";
//   } else {
//     output.innerHTML = `<ul>
//         <li>${nameInput.value.trim()}</li>
//         <li>${emailInput.value.trim()}</li>
//         <li>${messageInput.value.trim()}</li>
//         </ul>`;
//     output.classList.toggle("bg-red-500", false);
//     output.classList.toggle("bg-green-500", true);
//   }
//   contactForm.reset();
// });
