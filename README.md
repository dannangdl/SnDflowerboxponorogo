<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>SnDflowerboxponorogo</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial,sans-serif;
    background:#f3f3f3;
    padding:12px;
    display:flex;
    justify-content:center;
}

.container{
    width:100%;
    max-width:550px;
    background:white;
    border-radius:20px;
    padding:24px;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

.header{
    text-align:center;
    margin-bottom:24px;
}

.logo{
    width:90px;
    height:90px;
    object-fit:cover;
    border-radius:50%;
    margin-bottom:15px;
    box-shadow:0 4px 12px rgba(0,0,0,0.15);
}

.header h1{
    font-size:28px;
    margin-bottom:6px;
    color:#222;
}

.header p{
    color:#666;
    font-size:14px;
}

.form-group{
    margin-bottom:20px;
}

.form-section{
    margin-bottom:24px;
}

.form-section-title{
    font-size:14px;
    font-weight:bold;
    margin-bottom:12px;
    color:#333;
}

label{
    display:block;
    margin-bottom:8px;
    font-size:15px;
    font-weight:bold;
    color:#333;
}

.required::after{
    content:" *";
    color:red;
}

input,
textarea{
    width:100%;
    padding:14px;
    border:1px solid #ddd;
    border-radius:14px;
    font-size:16px;
    -webkit-appearance:none;
}

input:focus,
textarea:focus{
    outline:none;
    border-color:#25D366;
}

textarea{
    min-height:120px;
    resize:vertical;
}

.example-box{
    background:#f8f8f8;
    border-left:4px solid #25D366;
    padding:15px;
    border-radius:10px;
    margin-bottom:10px;
    line-height:1.7;
    font-size:13px;
}

.radio-group{
    display:flex;
    flex-direction:column;
    gap:10px;
}

.radio-item,
.checkbox-item,
.color-option{
    display:flex;
    align-items:center;
    gap:12px;
    padding:10px;
    border-radius:12px;
    background:#fafafa;
}

.radio-item input,
.checkbox-item input,
.color-option input{
    width:20px;
    height:20px;
}

.checkbox-group,
.color-options{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
}

.date-time-group{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:12px;
}

.button-group{
    display:flex;
    gap:15px;
    margin-top:30px;
}

button{
    flex:1;
    padding:16px;
    border:none;
    border-radius:14px;
    cursor:pointer;
    font-size:16px;
    font-weight:bold;
    transition:0.3s;
}

.btn-preview{
    background:#eee;
}

.btn-preview:hover{
    background:#ddd;
}

.btn-submit{
    background:#25D366;
    color:white;
}

.btn-submit:hover{
    background:#1ebe5d;
}

.modal{
    display:none;
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.5);
    justify-content:center;
    align-items:flex-end;
    padding:0;
    z-index:999;
}

.modal.active{
    display:flex;
}

.modal-content{
    background:white;
    width:100%;
    max-width:500px;
    border-radius:24px 24px 0 0;
    padding:20px;
    max-height:90vh;
    overflow-y:auto;
}

.preview-item{
    background:#f7f7f7;
    padding:12px;
    border-radius:10px;
    margin-bottom:10px;
    line-height:1.6;
    word-break:break-word;
}

.success-alert{
    position:fixed;
    top:15px;
    left:50%;
    transform:translateX(-50%);
    background:#25D366;
    color:white;
    padding:14px 18px;
    border-radius:12px;
    display:none;
    z-index:9999;
    width:90%;
    max-width:320px;
    text-align:center;
}

.success-alert.show{
    display:block;
}

@media(max-width:600px){

    body{
        padding:0;
        background:white;
    }

    .container{
        max-width:100%;
        min-height:100vh;
        border-radius:0;
        padding:18px;
        box-shadow:none;
    }

    .header h1{
        font-size:22px;
        line-height:1.3;
    }

    .header p{
        font-size:14px;
    }

    .logo{
        width:80px;
        height:80px;
    }

    .button-group{
        flex-direction:column;
        gap:12px;
    }

    .date-time-group{
        grid-template-columns:1fr;
        gap:0;
    }

    .checkbox-group,
    .color-options{
        flex-direction:column;
    }

    button{
        width:100%;
    }

}

</style>
</head>

<body>

<div class="container">

    <div class="header">

        <img src="logo.png" alt="Logo" class="logo">

        <h1>SnDflowerboxponorogo</h1>

        <p>Abadikan momenmu dengan kami</p>

    </div>

    <form id="orderForm">

        <div class="form-group">
            <label class="required">Nama Pemesan</label>
            <input type="text" id="nama">
        </div>

        <div class="form-group">
            <label>Instagram</label>
            <input type="text" id="instagram">
        </div>

        <div class="form-group">

            <label class="required">Request Ucapan</label>

            <div class="example-box">
                🎉 CONGRATULATIONS<br>
                Nama Penerima<br>
                Wish U Luck<br>
                From : Nama Pengirim
            </div>

            <textarea id="ucapan"></textarea>

        </div>

        <div class="form-group">

            <label class="required">Jenis Papan Bunga</label>

            <div class="radio-group">

                <div class="radio-item">
                    <input type="radio" name="jenis" value="Akrilik Bulat Putih">
                    <span>Akrilik Bulat Putih</span>
                </div>

                <div class="radio-item">
                    <input type="radio" name="jenis" value="Akrilik Bulat Hitam">
                    <span>Akrilik Bulat Hitam</span>
                </div>

                <div class="radio-item">
                    <input type="radio" name="jenis" value="Akrilik Kubah Putih">
                    <span>Akrilik Kubah Putih</span>
                </div>

                <div class="radio-item">
                    <input type="radio" name="jenis" value="Akrilik Kubah Hitam">
                    <span>Akrilik Kubah Hitam</span>
                </div>

                <div class="radio-item">
                    <input type="radio" name="jenis" value="Akrilik Ring Besi">
                    <span>Akrilik Ring Besi</span>
                </div>

            </div>

        </div>

        <div class="form-group">
            <label class="required">Request Warna Tulisan</label>
            <input type="text" id="warna">
        </div>

        <div class="form-section">

            <div class="form-section-title">
                Selendang
            </div>

            <div class="checkbox-group">

                <div class="checkbox-item">
                    <input type="radio" name="selendang" value="Pakai">
                    <label>Pakai</label>
                </div>

                <div class="checkbox-item">
                    <input type="radio" name="selendang" value="Tidak">
                    <label>Tidak</label>
                </div>

            </div>

        </div>

        <div class="form-section">

            <div class="form-section-title">
                Pilih beberapa opsi warna bunga
            </div>

            <div class="color-options">

                <div class="color-option">
                    <input type="checkbox" value="Merah" class="warnaBunga">
                    <label>Merah</label>
                </div>

                <div class="color-option">
                    <input type="checkbox" value="Pink" class="warnaBunga">
                    <label>Pink</label>
                </div>

                <div class="color-option">
                    <input type="checkbox" value="Biru" class="warnaBunga">
                    <label>Biru</label>
                </div>

                <div class="color-option">
                    <input type="checkbox" value="Ungu" class="warnaBunga">
                    <label>Ungu</label>
                </div>

                <div class="color-option">
                    <input type="checkbox" value="Putih" class="warnaBunga">
                    <label>Putih</label>
                </div>

                <div class="color-option">
                    <input type="checkbox" value="Peach" class="warnaBunga">
                    <label>Peach</label>
                </div>

                <div class="color-option">
                    <input type="checkbox" value="Kuning" class="warnaBunga">
                    <label>Kuning</label>
                </div>

                <div class="color-option">
                    <input type="checkbox" value="Hijau" class="warnaBunga">
                    <label>Hijau</label>
                </div>

                <div class="color-option">
                    <input type="checkbox" value="Coklat" class="warnaBunga">
                    <label>Coklat</label>
                </div>

                <div class="color-option">
                    <input type="checkbox" value="Mix" class="warnaBunga">
                    <label>Mix</label>
                </div>

            </div>

        </div>

        <div class="form-section">

            <div class="form-section-title">
                Pilih tanggal dan waktu Pengantaran
            </div>

            <div class="date-time-group">

                <div class="form-group">
                    <label>Pilih tanggal</label>
                    <input type="date" id="tanggal">
                </div>

                <div class="form-group">
                    <label>Pilih waktu</label>
                    <input type="time" id="waktu">
                </div>

            </div>

        </div>

        <div class="form-group">
            <label class="required">Alamat Pengantaran / Gedung</label>
            <input type="text" id="alamat">
        </div>

        <div class="form-group">
            <label class="required">WhatsApp Pemesan</label>
            <input type="tel" id="whatsapp">
        </div>

        <div class="form-group">
            <label>Request Emoji</label>
            <input type="text" id="emoji" placeholder="🎉 💐 🌸">
        </div>

        <div class="button-group">

            <button type="button" class="btn-preview" onclick="previewPesanan()">
                Preview
            </button>

            <button type="button" class="btn-submit" onclick="sendWhatsApp()">
                Kirim WhatsApp
            </button>

        </div>

    </form>

</div>

<div class="modal" id="modal">

    <div class="modal-content">

        <h2 style="margin-bottom:20px;">
            Preview Pesanan
        </h2>

        <div id="previewContent"></div>

        <div class="button-group">

            <button class="btn-preview" onclick="closeModal()">
                Tutup
            </button>

            <button class="btn-submit" onclick="sendNow()">
                Kirim
            </button>

        </div>

    </div>

</div>

<div class="success-alert" id="successAlert">
    Membuka WhatsApp...
</div>

<script>

const ADMIN_PHONE = "6285135666976";

function getData(){

    const warnaBunga = [...document.querySelectorAll('.warnaBunga:checked')]
    .map(el => el.value)
    .join(', ');

    return {

        nama: document.getElementById('nama').value,
        instagram: document.getElementById('instagram').value,
        ucapan: document.getElementById('ucapan').value,
        jenis: document.querySelector('input[name="jenis"]:checked')?.value || '',
        warna: document.getElementById('warna').value,
        selendang: document.querySelector('input[name="selendang"]:checked')?.value || '',
        warnaBunga,
        tanggal: document.getElementById('tanggal').value,
        waktu: document.getElementById('waktu').value,
        alamat: document.getElementById('alamat').value,
        whatsapp: document.getElementById('whatsapp').value,
        emoji: document.getElementById('emoji').value

    };

}

function validateForm(){

    const data = getData();

    if(
        !data.nama ||
        !data.ucapan ||
        !data.jenis ||
        !data.warna ||
        !data.alamat ||
        !data.whatsapp
    ){
        alert("Lengkapi data terlebih dahulu!");
        return false;
    }

    return true;

}

function previewPesanan(){

    if(!validateForm()) return;

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

function closeModal(){

    document.getElementById('modal').classList.remove('active');

}

function sendWhatsApp(){

    previewPesanan();

}

function sendNow(){

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

        window.open(url,'_blank');

        document.getElementById('successAlert').classList.remove('show');

        closeModal();

        document.getElementById('orderForm').reset();

    },1000);

}

</script>

</body>
</html>
