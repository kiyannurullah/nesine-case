# nesine-case

### Kurulum ve çalıştırma:

- **npm install** ya da **yarn install**
- **npm run dev** ya da **yarn dev**

### Açıklamalar:
Mevcut iş yoğunluğumdan dolayı bazı kısımlarda datayı manipüle ederek devam ettim. 
Ayrıca projeyi react.js yerine next.js ile oluşturdum. 
Next kullandığım için çok fazla webpack kullanamadım. 
next.config.js içinde inceleyebilirsiniz.

- Projeyi create app kullanmadan, paketleri kurarak oluşturdum.
- Datayı server-side olarak render ettim.
- State management olarak context api kullandım.
- Css tarafında SASS kullandım.
- Eslint kullandım. Olabildiğince ve zamanım yettiğince hataları gidermeye çalıştım.
- Performans amaçlı infinite scroll ve usememo kullandım.
- Test örneğini Odd komponentinde bulabilirsiniz.

### Kullanımlar:
- Slip komponentini açılır kapanır şekilde sağ alta konumlandırdım.
- Eventleri, mobilde sağa doğru scroll yaparak ilerleyebilirsiniz.
