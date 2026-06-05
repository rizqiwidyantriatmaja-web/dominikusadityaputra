document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        });

        const data = await res.json();

        if (data.status === "success") {
            // Simpan username ke localStorage
            localStorage.setItem("username", data.username);

            // Arahkan ke halaman sesuai role/username
            if (data.username === "admin") {
                window.location.href = "../admin/src/index.html";
            } else {
                window.location.href = "../index.html";
            }
            
        } else {
            // JIKA LOGIN GAGAL: Menampilkan alertBox kustom yang ada di HTML kamu
            const alertBox = document.getElementById("alertBox");
            alertBox.innerText = "Username atau Password salah, silahkan coba lagi";
            alertBox.style.display = "block";

            // Sembunyikan kembali setelah 3 detik
            setTimeout(() => {
                alertBox.style.display = "none";
            }, 3000);
        }

    } catch (error) {
        console.error("Terjadi kesalahan jaringan/sistem:", error);
        alert("Gagal terhubung ke server.");
    }
});
