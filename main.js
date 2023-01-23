import './style.css';

window.addEventListener('load', () => {
  const contactForm = document.querySelector('#contactform');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const company = e.target.company.value;
    const message = e.target.message.value;

    const output = `Name: ${name}, Phone: ${phone}, Email: ${email}, Company: ${company}, Message: ${message}`;

    alert(output);
  });
});
