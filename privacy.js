      const privacyData = {

        en: {
          back: "Back to Home",
          title: "Privacy Policy",
          content: `
            <p>Your privacy is of utmost importance to us.</p>
            <p><b>1. Data Collection:</b> We collect only necessary details (email and trading records) required for system functionality.</p>
            <p><b>2. Third-Party Sharing:</b> We never share or sell your data to any third-party entities.</p>
            <p><b>3. Encryption:</b> All data transfers are strictly secured under top-tier SSL standards.</p>
          `,
        },
        ru: {
          back: "Назад на главную",
          title: "Политика конфиденциальности",
          content: `
            <p>Мы ценим безопасность ваших личных данных.</p>
            <p><b>1. Сбор данных:</b> Мы собираем только необходимую информацию (email и торговые записи) для работы журнала.</p>
            <p><b>2. Передача третьим лицам:</b> Ваши данные строго конфиденциальны и не передаются посторонним сторонам.</p>
            <p><b>3. Шифрование:</b> Все соединения защищены современными стандартами шифрования.</p>
          `,
        },
      };

      // Load language preference
      const lang = localStorage.getItem("lctrading_lang") || "en";
      const data = privacyData[lang] || privacyData.en;

      document.getElementById("backBtn").querySelector("span").textContent =
        data.back;
      document.getElementById("pageTitle").textContent = data.title;
      document.getElementById("pageContent").innerHTML = data.content;

      // Load theme preference
      const theme = localStorage.getItem("lctrading_theme") || "dark";
      if (theme === "light") {
        document.body.classList.add("light-theme");
      }
    
