---
title: "Mengelola Email Group dan Email Group dengan Alias"
date: 2022-08-18
category: "artikel"
author: "Admin User"
image: "null"
tags: ["EmailGroup"]
---

## Apa itu Email Grup
Email grup merupakan email yang dapat digunakan sebagai identitas dari kelompok email. Misal dalam kasus kementrian disini maka nantinya akan disiapkan email kementrian, sebagai contoh medkom@bemuns.org. Setelah dilakukan beberapa konfigurasi dan email-email anggota Medkom telah ditambahkan pada grup maka apabila ada yang mengirim email ke alamat medkom@bemuns.org maka pesan email tersebut akan dikirim ke semua alamat email yang telah ditambahkan ke dalam grup.

## Menambahkan Email anggota ke Email grup
1. Masuk ke dashboard Google group, https://groups.google.com/
2. Pilih grup yang akan dikelola.
	![](https://cms.bemuns.org/assets/0034f1bf-9274-467b-b0d6-fb171f63d819)
3. Pilih menu `People` > `Members` pada menu navigasi kiri, Klik `Add members`.
	![](https://cms.bemuns.org/assets/f0462fd5-ff67-4dd4-a9d9-01adb8fca544)
4. Masukkan email yang akan dimasukkan ke dalam grup, jangan lupa untuk menekan enter setiap memasukkan email, pastikan untuk setiap email memiliki tampilan seperti berikut.
	![](https://cms.bemuns.org/assets/e375e6b4-17da-454e-914a-4462d1935177)
	Untuk memasukkan anggota diperlukan konfirmasi melalui email, untuk dapat langsung memasukkan bisa dilakukan dengan mencentang `Directly add members`.
    ![](https://cms.bemuns.org/assets/dee553a6-6051-4f94-9b4c-2c49bcbef38d)
    Perlu diperhatikan bahwa pada saat `Directly add members` aktif maka akan ada input tambahan yang lain, dapat diperhatikan bahwa setiap email dapat langsung diberikan perannya yang sesuai.


## Menerima pesan yang dikirim ke Email grup
Dengan email grup kalian dapat mengatur siapa saja yang dapat menerima email ketika email dikirim ke alamat email grup. Kalian dapat menemukannya pada `Group settings` di navigasi kiri, scroll kebawah ke section berikut.
![](https://cms.bemuns.org/assets/7d1ed9dd-41aa-4da9-8708-e8e492bfde8b)
Dengan memilih `All group members` maka secara default, pesan email ke email grup akan diteruskan ke semua email-email didalamnya.

## Mengirim email ke semua anggota grup
Setelah masuk ke grup yang akan dikelola pada [Google Groups](https://groups.google.com) klik `New conversation`.

## Menggunakan Email alias grup untuk mengirim email dengan Email pribadi (Gmail)

### Prasyarat
- Telah mengaktifkan [autentikasi 2 faktor](https://support.google.com/accounts/answer/185839).
- Email alias telah didaftarkan (Hubungi admin).
- Email grup yang valid.

### Langkah-langkah
1. Setelah masuk ke halaman dasbor Gmail klik icon `settings` di pojok kanan atas kemudian buka `See all settings`.
2. Pada tab `Accounts and Import` klik `Add another email address` pada section `Send mail as`.
	![](https://cms.bemuns.org/assets/88175aca-a364-47f0-a7bf-75397365445a)
3. Setelah muncul windows baru masukkan alamat email yang akan digunakan sebagai alamat pengirim, pada kolom `Name` masukkan nama se-deskriptif mungkin.
	![](https://cms.bemuns.org/assets/2258b72f-e4ae-47f8-bbdb-0ed9b91fa30d)
4. Pada form selanjutnya masukkan isian seperti berikut:
	SMTP Server: `smtp.gmail.com`
    Username: `<alamat-email-kamu>`
    Password: `<password-app-email-kamu`
    Untuk membuat app password dapat lihat langkah [berikut](#membuat-app-password).
	![](https://cms.bemuns.org/assets/d7fb4014-e9af-4b4e-a7f1-70f48a6ea9ae)
5. Masukkan kode verifikasi yang dikirim melalui email.
	![](https://cms.bemuns.org/assets/e0bab2a0-ea38-4608-ad35-0b1439ad2652)
6. Done! Sekarang coba kirim email menggunakan email alias tersebut dengan cara mengubah isian `From` pada saat akan mengirim email.
	![](https://cms.bemuns.org/assets/17fda343-a6c9-483b-90db-937f64a2d7a7)

    
## Membuat App pasword
1. Masuk ke https://account.google.com, pada bagian `security` scroll ke section `Signing in to Google` pilih `App passwords`
	![](https://cms.bemuns.org/assets/325d2614-3aec-4c9c-9579-f4f17f34a04f)
 2. Pada `select app` bagian bawah setelah tabel pilih `Mail` kemudian `select device` dengan `Custom`, gunakan nama se-deskriptif mungkin.
 	![](https://cms.bemuns.org/assets/d7aa2f6d-0ec2-4033-982f-0b9b52495d8a)
 3. Password app berhasil digenerate! Silakan copy karena setelah itu tidak dapat dilihat lagi.
    ![](https://cms.bemuns.org/assets/ae557a91-a383-4fe5-9d38-7c07313ea1ca)
    
## Penutup
Sekian tulisan kali ini, semoga bermanfaat!
