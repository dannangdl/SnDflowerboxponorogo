<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>SnDflowerboxponorogo - Pesan Papan Bunga</title>

<style>
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
    background:#f3f3f3;
    min-height:100vh;
    padding:20px;
    display:flex;
    justify-content:center;
    align-items:flex-start;
}

.container{
    background:white;
    border-radius:20px;
    padding:32px;
    max-width:550px;
    width:100%;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
}

.header{
    text-align:center;
    margin-bottom:30px;
}

.logo{
    width:100px;
    height:100px;
    object-fit:cover;
    border-radius:50%;
    margin-bottom:15px;
    box-shadow:0 4px 12px rgba(0,0,0,0.15);
}

.header h1{
    font-size:32px;
    color:#222;
    margin-bottom:5px;
}

.header p{
    color:#666;
    font-size:15px;
}

.form-group{
    margin-bottom:20px;
}

label{
    display:block;
    margin-bottom:8px;
    font-size:14px;
    color:#333;
    font-weight:600;
}

.required::after{
    content:" *";
    color:red;
}

input,
textarea{
    width:100%;
    padding:12px;
    border:1px solid #ddd;
    border-radius:10px;
    font-size:14px;
    transition:0.3s;
}

input:focus,
textarea:focus{
    outline:none;
    border-color:#25D366;
}

textarea{
    min-height:100px;
    resize:vertical;
}

.example-box{
    background:#f9f9f9;
    padding:15px;
    border-radius:10px;
    margin-bottom:10px;
    font-size:13px;
    line-height:1.6;
    border-left:4px solid #25D366;
}

.radio-group{
    display:flex;
    flex-direction:column;
    gap:10px;
}

.radio-item{
    display:flex;
    align-items:center;
    gap:10px;
}

.radio-item input{
    width:auto;
}

.checkbox-group{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
}

.checkbox-item{
    display:flex;
    align-items:center;
    gap:5px;
}

.checkbox-item input{
    width:auto;
}

.button-group{
    display:flex;
    gap:15px;
    margin-top:30px;
}

button{
    flex:1;
    padding:14px;
    border:none;
    border-radius:12px;
    font-size:15px;
    font-weight:bold;
    cursor:pointer;
    transition:0.3s;
}

.btn-preview{
    background:#f1f1f1;
    color:#333;
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
    align-items:center;
    padding:20px;
    z-index:999;
}

.modal.active{
    display:flex;
}

.modal-content{
    background:white;
    width:100%;
    max-width:500px;
    border-radius:20px;
    padding:25px;
}

.modal-content h2{
    margin-bottom:20px;
}

.preview-item{
    margin-bottom:12px;
    padding:10px;
    background:#f8f8f8;
    border-radius:10px;
}

.success-alert{
    position:fixed;
    top:20px;
    right:20px;
    background:#25D366;
    color:white;
    padding:14px 18px;
    border-radius:10px;
    display:none;
    z-index:9999;
}

.success-alert.show{
    display:block;
}

@media(max-width:600px){

    .container{
        padding:20px;
    }

    .header h1{
        font-size:25px;
    }

    .button-group{
        flex-direction:column;
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
            <label>Instagram (Opsional)</label>
            <input type="text" id="instagram">
        </div>

        <div class="form-group">
            <label class="required">Request Ucapan</label>

            <div class="example-box">
                🎉 CONGRATULATIONS<br>
                Genaro Atiallune, S.H<br>
                Wish U Luck<br>
                From : Me
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

        <div class="form-group">
            <label>Warna Bunga</label>

            <div class="checkbox-group">

                <div class="checkbox-item">
                    <input type="checkbox" value="Merah" class="warnaBunga">
                    <span>Merah</span>
                </div>

                <div class="checkbox-item">
                    <input type="checkbox" value="Pink" class="warnaBunga">
                    <span>Pink</span>
                </div>

                <div class="checkbox-item">
                    <input type="checkbox" value="Putih" class="warnaBunga">
                    <span>Putih</span>
                </div>

                <div class="checkbox-item">
                    <input type="checkbox" value="Biru" class="warnaBunga">
                    <span>Biru</span>
                </div>

            </div>
        </div>

        <div class="form-group">
            <label class="required">Alamat Pengantaran</label>
            <input type="text" id="alamat">
        </div>

        <div class="form-group">
            <label class="required">Nomor WhatsApp</label>
            <input type="tel" id="whatsapp">
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

        <h2>Preview Pesanan</h2>

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
        warnaBunga,
        alamat: document.getElementById('alamat').value,
        whatsapp: document.getElementById('whatsapp').value
    };
}

function previewPesanan(){

    const data = getData();

    if(!data.nama || !data.ucapan || !data.jenis || !data.warna || !data.alamat || !data.whatsapp){
        alert("Lengkapi data terlebih dahulu!");
        return;
    }

    const html = `
        <div class="preview-item"><b>Nama:</b> ${data.nama}</div>
        <div class="preview-item"><b>Instagram:</b> ${data.instagram}</div>
        <div class="preview-item"><b>Ucapan:</b> ${data.ucapan}</div>
        <div class="preview-item"><b>Jenis:</b> ${data.jenis}</div>
        <div class="preview-item"><b>Warna Tulisan:</b> ${data.warna}</div>
        <div class="preview-item"><b>Warna Bunga:</b> ${data.warnaBunga}</div>
        <div class="preview-item"><b>Alamat:</b> ${data.alamat}</div>
        <div class="preview-item"><b>WhatsApp:</b> ${data.whatsapp}</div>
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
    message += `Warna Bunga : ${data.warnaBunga}%0A`;
    message += `Alamat : ${data.alamat}%0A`;
    message += `No WhatsApp : ${data.whatsapp}`;

    const url = `https://wa.me/${ADMIN_PHONE}?text=${message}`;

    document.getElementById('successAlert').classList.add('show');

    setTimeout(() => {

        window.open(url, '_blank');

        document.getElementById('successAlert').classList.remove('show');

        closeModal();

    }, 1000);

}

</script>

</body>
</html>
