import lodashThrottle from 'lodash.throttle';
import storage from './storage';

const feedbackForm = document.querySelector('.feedback-form');
const formData = {
    email: '',
    message: '',
};

if (localStorage.length > 0 && storage.load('feedback-form-state') !== null) {
    formData.email = storage.load('feedback-form-state').email;
    formData.message = storage.load('feedback-form-state').message;
    feedbackForm.email.value = storage.load('feedback-form-state').email;
    feedbackForm.message.value = storage.load('feedback-form-state').message;
}

const onInput = e => {
    e.target.value === ''
        ? (formData[e.target.name] = null)
        : (formData[e.target.name] = e.target.value);

    storage.save('feedback-form-state', formData);
};

feedbackForm.addEventListener('input', lodashThrottle(onInput, 500));

const onFormSubmit = e => {
    e.preventDefault();

    formData[e.target.name] = e.target.value;

    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
};

feedbackForm.addEventListener('submit', onFormSubmit);
