// Створюємо об'єкт formData з початковими значеннями
let formData = {
    email: '',
    message: ''
  };
  
  // Отримуємо посилання на елементи форми
  const form = document.querySelector('.feedback-form');
  const emailInput = form.elements.email;
  const messageInput = form.elements.message;
  
  // Ключ для зберігання у локальному сховищі
  const storage_key = 'feedback-form-state';
  
  // Перевірка локального сховища і заповнення форми при завантаженні сторінки
  document.addEventListener('DOMContentLoaded', populateForm);
  
  // Відстежуємо подію input і записуємо дані в об'єкт formData та локальне сховище
  form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(storage_key, JSON.stringify(formData));
  });
  
  // Відправлення форми
  form.addEventListener('submit', event => {
    event.preventDefault();
  
    // Перевіряємо, чи заповнені всі поля
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
      return;
    }
  
    // Виведення в консоль об'єкта formData
    console.log(formData);
  
    // Очищення локального сховища та форми
    localStorage.removeItem(storage_key);
    event.target.reset();
    formData = { email: '', message: '' };
  });
  
  // Функція для заповнення форми при завантаженні сторінки
  function populateForm() {
    const savedData = localStorage.getItem(storage_key);
    
    if (savedData) {
      formData = JSON.parse(savedData);
      emailInput.value = formData.email || '';
      messageInput.value = formData.message || '';
    }
  }
  