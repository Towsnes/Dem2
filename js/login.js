const loginSection = document.getElementById("loginSection");
const signupSection = document.getElementById("signupSection");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");


showSignup.addEventListener("click", () => {
    loginSection.style.display = "none";
    signupSection.style.display = "block";
});

showLogin.addEventListener("click", () => {
    signupSection.style.display = "none";
    loginSection.style.display = "block";
});


document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const userpassword = document.getElementById("password").value.trim();

    if (!username || !userpassword) {
        alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
        return;
    }

    if (userpassword.length < 6 || userpassword.length > 30) {
        alert("Mật khẩu phải từ 6 đến 30 ký tự!");
        return;
    }

    alert(`Chào mừng ${username}! Bạn đã đăng nhập thành công.`);
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("newUsername").value.trim();
    const email = document.getElementById("newEmail").value.trim();
    const pass = document.getElementById("newPassword").value.trim();

    if (!name || !email || !pass) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    if (!email.endsWith("@gmail.com")) {
        alert("Email phải có đuôi @gmail.com!");
        return;
    }

    if (pass.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự!");
        return;
    }

    alert(`Đăng ký thành công!\nTên: ${name}\nEmail: ${email}`);
    signupSection.style.display = "none";
    loginSection.style.display = "block";
});
