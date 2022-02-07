let userName = prompt("Lütfen Kullanıcı Adınızı Giriniz:")

let name = document.querySelector("#name").innerHTML = `
"${userName.length > 0 ? userName : 
alert("Kullanıcı Adınız Hatalı veya Boş!") ? userName : "İsimsiz"
}"`

function myClock() {
    const saat = new Date();
    document.getElementById("timezone").innerHTML = `Anlık Saat Bilgisi: ${saat.toLocaleTimeString} `;
}
function clockWork() { 

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let days = date.getDay();
    let year = date.getFullYear();
    switch (days) {
        case 01:
        days = "Pazartesi";
        break;
        case 02:
            days = "Salı";
        break;
        case 03:
            days = "Çarşamba";
        break;

        case 04:
            days = "Perşembe";
        break;
                    
        case 05:
            days = "Cuma";
        break;

        case 06:
            days = "Cumartesi";
        break;
                            
        case 07:
            days = "Pazar";
        break;
    }

    hours = hours < 10 ? "0" + hours : hours; 
    //Saat = saat, 10,'dan küçük ise, sol tarafa 0 + saat yazılsın, değilse yani büyükse direkt saat  yazılsın
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // watch değişkenine saatimizi ekliyorum. Daha sonra myClock id'sini çağırıp, o elemente yazdırıyorum. 
    let watch = `"${hours} : ${minutes} : ${seconds} - ${days} - ${year} "`;
    document.querySelector("#myClock").innerHTML = watch;
    
    setInterval(clockWork, 1000); // her 1 saniyede bir değişecek.

} 


clockWork();