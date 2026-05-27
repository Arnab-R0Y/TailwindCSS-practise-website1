const menuBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-sidebar');
const registerBtn = document.getElementById('register-button');
const authBtn = document.getElementById('auth-buttons');


menuBtn.addEventListener('click', () => {
    sidebar.classList.remove("-translate-x-full");
    authBtn.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
});

registerBtn.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
    authBtn.classList.remove("hidden");
});