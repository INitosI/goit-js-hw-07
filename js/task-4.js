const form = document.querySelector('.login-form');
const data = {
	email: '',
	password: '',
};

form.addEventListener('submit', event => {
	event.preventDefault();
	const email = form.elements.email.value.trim();
	const password = form.elements.password.value.trim();
	if (email && password) {
		data.email = email;
		data.password = password;
		console.log(email);
		console.log(password);
	} else {
		alert('All form fields must be filled in');
	}
	form.reset();
});
