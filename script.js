const ADMIN_PHONE = "6285135666976";
 
function getData() {
    const warnaBunga = [...document.querySelectorAll('.warnaBunga:checked')]
        .map(el => el.value)
        .join(', ');
 
    return {
        nama:       document.getElementById('nama').value,
        instagram:  document.getElementById('instagram').value,
        ucapan:     document.getElementById('ucapan').value,
        jenis:      document.querySelector('input[name="jenis"]:checked')?.value || '',
        warna:      document.getElementById('warna').value,
        selendang:  document.querySelector('input[name="selendang"]:checked')?.value || '',
        warnaBunga,
        tanggal:    document.getElementById('tanggal').value,
        waktu:      document.getElementById('waktu').value,
        alamat:     document.getElementById('alamat').value,
        whatsapp:   document.getElementById('whatsapp').value,
        emoji:      document.getElementById('emoji').value
    };
}
 
function resetError() {
    document.querySelectorAll('input, textarea').forEach(el => {
        el.classList.remove('error');
    });
}
 
function validateForm() {
    resetError();
 
    const data = getData();
    let valid = true;
 
    if (!data.nama) {
        document.getElementById('nama').classList.add('error');
        valid = false;
    }
 
    if (!data.ucapan) {
        document.getElementById('ucapan').classList.add('error');
        valid = false;
    }
 
    if (!data.jenis) {
        valid = false;
    }
 
    if (!data.warna) {
        document.getElementById('warna').classList.add('error');
        valid = false;
    }
 
    if (!data.alamat) {
        document.getElementById('alamat').classList.add('error');
        valid = false;
    }
 
    if (!data.whatsapp) {
        document.getElementById('whatsapp').classList.add('error');
        valid = false;
    }
 
    if (!valid) {
        alert("Lengkapi data yang masih kosong!");
        return false;
    }
 
    return true;
}
 
function previewPesanan() {
    if (!validateForm()) return;
 
    const data = getData();
 
    const html = `
        <div class="preview-item"><b>Nama:</b> ${data.nama}</div>
        <div class="preview-item"><b>Instagram:</b> ${data.instagram}</div>
        <div class="preview-item"><b>Ucapan:</b> ${data.ucapan}</div>
        <div class="preview-item"><b>Jenis:</b> ${data.jenis}</div>
        <div class="preview-item"><b>Warna Tulisan:</b> ${data.warna}</div>
        <div class="preview-item"><b>Selendang:</b> ${data.selendang}</div>
        <div class="preview-item"><b>Warna Bunga:</b> ${data.warnaBunga}</div>
        <div class="preview-item"><b>Tanggal:</b> ${data.tanggal}</div>
        <div class="preview-item"><b>Waktu:</b> ${data.waktu}</div>
        <div class="preview-item"><b>Alamat:</b> ${data.alamat}</div>
        <div class="preview-item"><b>WhatsApp:</b> ${data.whatsapp}</div>
        <div class="preview-item"><b>Emoji:</b> ${data.emoji}</div>
    `;
 
    document.getElementById('previewContent').innerHTML = html;
    document.getElementById('modal').classList.add('active');
}
 
function closeModal() {
    document.getElementById('modal').classList.remove('active');
}
 
function sendWhatsApp() {
    previewPesanan();
}
 
function sendNow() {
    const data = getData();
 
    let message = `Halo Admin SnDflowerboxponorogo,%0A%0A`;
    message += `Nama : ${data.nama}%0A`;
    message += `Instagram : ${data.instagram}%0A`;
    message += `Ucapan : ${data.ucapan}%0A`;
    message += `Jenis : ${data.jenis}%0A`;
    message += `Warna Tulisan : ${data.warna}%0A`;
    message += `Selendang : ${data.selendang}%0A`;
    message += `Warna Bunga : ${data.warnaBunga}%0A`;
    message += `Tanggal : ${data.tanggal}%0A`;
    message += `Waktu : ${data.waktu}%0A`;
    message += `Alamat : ${data.alamat}%0A`;
    message += `No WhatsApp : ${data.whatsapp}%0A`;
    message += `Emoji : ${data.emoji}`;
 
    const url = `https://wa.me/${ADMIN_PHONE}?text=${message}`;
 
    document.getElementById('successAlert').classList.add('show');
 
    setTimeout(() => {
        window.open(url, '_blank');
        document.getElementById('successAlert').classList.remove('show');
        closeModal();
    }, 1000);
}
 
