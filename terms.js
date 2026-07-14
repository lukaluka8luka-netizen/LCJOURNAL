      const termsData = {

        en: {
          back: "Back to Home",
          title: "Terms & Conditions",
          content: `
            <p>Welcome to LCTrading.</p>
            <p><b>1. Acceptance:</b> By accessing this site, you accept these terms and conditions in full.</p>
            <p><b>2. Service:</b> LCTrading provides online journal hosting for tracking trading activities.</p>
            <p><b>3. Disclaimer:</b> The site does not provide financial advice. All trades are at your own risk.</p>
            <p><b>4. Data Ownership:</b> Your trading data belongs to you and is stored securely via cloud services.</p>
          `,
        },
        ru: {
          back: "Назад на главную",
          title: "Правила и условия",
          content: `
            <p>Добро пожаловать в LCTrading.</p>
            <p><b>1. Согласие:</b> Используя данный ресурс, вы полностью соглашаетесь с настоящими условиями.</p>
            <p><b>2. Описание услуг:</b> LCTrading предоставляет платформу для ведения торгового журнала онлайн.</p>
            <p><b>3. Ответственность:</b> Ресурс не предоставляет финансовых рекомендаций. Трейдинг на свой страх и риск.</p>
            <p><b>4. Хранение данных:</b> Ваши данные безопасно хранятся в защищенном облаке.</p>
          `,
        },
      };

      // Load language preference
      const lang = localStorage.getItem("lctrading_lang") || "en";
      const data = termsData[lang] || termsData.en;

      document.getElementById("backBtn").querySelector("span").textContent =
        data.back;
      document.getElementById("pageTitle").textContent = data.title;
      document.getElementById("pageContent").innerHTML = data.content;

      // Load theme preference
      const theme = localStorage.getItem("lctrading_theme") || "dark";
      if (theme === "light") {
        document.body.classList.add("light-theme");
      }
    
