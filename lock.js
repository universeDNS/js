setInterval(function() {
    // 1. Ambil elemen gambar berdasarkan ID
    var ranjau1 = document.getElementById('lockingnow');
    var linkAsli = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSu20OmMlohVSJ9xtdAnuJuEKNTOcYN6J5NE9HEvQYNLqwOpaGR7psDM3m7Kym1cOG8drWYBbRPLNCNJUzB7NKcW_crD6ziEEipPGthCoTSdCmsx2H-u-UsISC5wHj9xR2FKV21mhSExXYKBG-iVngu9s2NVu3JF3NYMFaRh4O27uqMkukD-usawBzEfc/s250/Video%20bless.png'; // UR

    // 2. Cek apakah gambar masih ada atau URL-nya sudah diganti
    if (ranjau1 == null || ranjau1.src !== linkAsli) {
        
        // 3. DUUUARRD! Hapus semua isi blog dan ganti jadi pesan peringatan
        document.body.innerHTML = `
            <div style="background:#000; color:#ff0000; height:100vh; width:100vw; display:flex; flex-direction:column; align-items:center; justify-content:center; position:fixed; top:0; left:0; z-index:9999999;">
                <h1 style="font-size:50px;">⚠️ TRY AGAIN</h1>
                <p style="font-size:20px; color:#fff;"><h2>Error Connections</h2></p>
                <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSu20OmMlohVSJ9xtdAnuJuEKNTOcYN6J5NE9HEvQYNLqwOpaGR7psDM3m7Kym1cOG8drWYBbRPLNCNJUzB7NKcW_crD6ziEEipPGthCoTSdCmsx2H-u-UsISC5wHj9xR2FKV21mhSExXYKBG-iVngu9s2NVu3JF3NYMFaRh4O27uqMkukD-usawBzEfc/s250/Video%20bless.png" style="max-width:300px; border:2px solid red; margin-top:20px;"/>
            </div>
        `;
        document.body.style.overflow = 'hidden'; //
    }
}, 1000); // Cek setiap 1 detik (makin cepet biar maling gak sempet napas)


