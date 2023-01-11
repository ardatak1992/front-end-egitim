# Ödev 8
Bu ödevde sizden Fetch kullanarak api ile haberleşip ekranda göstermeniz beklenmektedir.

## Ödev Detayları
- Kullanılacak Api Adresi [JSON PLACEHOLDER](https://jsonplaceholder.typicode.com/)
- Fetch ile yukarıdaki api adresindeki postları çekip ekranda listelemeniz gerekmektedir.
- Fetch ile alınan veriler localStorage'a kaydedilmelidir.
- Listelediğiniz postun üstüne tıklandığında ayrı bir sayfada o postu açmanız gerekmektedir( sayfa url'i: post/detail?=id{id} şeklinde olmalıdır).
- Post özel sayfası:
    - Postun yorumları API'dan getirilmelidir.
    - Postun yorumları ekranda gösterilmelidir.
    - Edit ve Delete butonlarına sahip olmalıdır.
        - Edit butonuna tıklandığında;
            - Edit sayfasına postun id'si ile birlikte gönderilmelidir.

        - Delete butonuna tıklandığında;
            - Ekrana onay alerti çıkartılmalıdır(confirm).
            - Eğer silme işlemi onaylandıysa;
                - Silme işlemi API'a gönderilmelidir.
                - API'dan dönen sonuç olumluysa;
                    - Kullanıcı anasayfaya gönderilmelidir.

                - API'dan dönen sonuç olumsuzsa;
                    - Hata ekranda gösterilmelidir.

- Post Edit Sayfası şu şekilde olmalıdır.
    - Sayfa url'i: post/edit?=id{id} olmalıdır
    - Analiz ettiğiniz post verileri post düzenleme alanında görünmelidir.
    - Update butonu olmalıdır.
    - Veriler HTML Form kullanılarak onaydan geçmelidir.
    - Update butonuna basıldığında;
        - Girilen bilgiler eksiksizse API'a gönderilmelidir.
            - API'dan dönen sonuç olumluysa;
                - Gelen veri LocalStorage'a eklenecek.
                - Kullanıcı anasayfaya yönlendirilecek.

            - Apı'dan dönen sonuç olumsuzsa;
                - Hata ekranda gösterilecek
                - Sayfa değişimi sağlanmayacak


- Bir postun gerekliliklerini analiz etmeniz ve bu belgenin sonundaki alana yazmanız gerekmektedir.
- Sayfa url'i: post/create olmalıdır
- Post eklemek için bir sayfa olması gerekmektedir.
- Post ekleme sayfası şu şekilde olmalıdır.
    - Analiz ettiğiniz post verileri post düzenleme alanında görünmelidir.
    - Save butonu olmalıdır.
    - Veriler HTML Form kullanılarak onaydan geçmelidir.
    - Save butonuna basıldığında;
        - Girilen veriler eksiksizse API'a veriler gönderilmelidir.
            - API'dan dönen sonuç olumluysa;
                - Gelen veri LocalStorage'a eklenmelidir.

            - API'dan dönen sonuç olumsuzsa;
                - Hata ekranda gösterilmelidir.

- Tasarımda tamamen özgürsünüz, istediğiniz hoşunuza giden "uçuk" tasarımların hepsini hayata geçirebilirsiniz.

## Postun gereklilikleri

- İçeriğini sizler dolduracaksınız

