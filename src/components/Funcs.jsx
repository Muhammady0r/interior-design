const texts = {
  en: {
    header: {
      contact_us: "Contact Us",
      contact: {
        title: "Contact with us",
        name: "First name...",
        l_name: "Last name...",
        email: "Email...",
        phone: "Phone number...",
      },
      submit: "Submit",
    },
    showcase: {
      title: "Refresh your Room and Make Awesome Interior Design With Us!",
      desc: "We are Interior Design Team Based in Wakanda, 58th street East Waka. We provide Interior Design services since 1899 and have many client from various country.",
      get_started: "Get Started",
      a1: "Satisfied Clients From Various Country.",
      a2: "Years of Experience in Interior Design",
    },
    how_we_work: {
      title: "How We Work",
      workflow: "OUR WORKFLOW",
      planning: "Planning",
      concept: "Concept",
      design: "Design",
      installation: "Installation",
      card_desc:
        "One key part of the strategic planning is to understand your goals and budget.",
    },
    reviews: {
      title: "Reviews from Our Clients",
      client_says: "OUR CLIENT SAYS",
      client_job: "Remote Programmer",
      client_desc:
        "“Modern desk style featured with tropical stuff with plant and the lighting for a warm, and comforting take on interior design minimalist. I love this design!. Thanks Interiorqu.”",
    },
    projects: {
      title: "The Latest Project",
      gallery: "OUR MINI GALLERY",
      read_more: "Read more",
    },
    work_us: {
      title: "Interested to Work With Us?",
      desc: "Fill the form and send the type of your room and tell us what you need for your future room, then wait until we reply it.",
      form: {
        name: "Name",
        name_placeholder: "Enter your name",
        room: "Type room",
        room_placeholder: "Enter room type",
        tell: "Tell us",
        tell_placeholder: "Tell us what you need",
      },
      email: "Email address",
      submit: "Submit",
    },
    footer: {
      sub: "Newsletter",
      sub_desc:
        "Subscribe to our newsletter for awesome newsletter and daily inspiration.",
      navigation: {
        title: "Navigation",
        home: "Home",
        workflow: "Workflow",
        reviews: "Reviews",
        project: "Project",
      },
      about: {
        title: "About",
        pricing: "Pricing",
        contact: "Contact",
      },
      email: "Email address",
      social: "Social",
      submit: "Submit",
      lic: "Created @ 2021 Interiorqu.com.StudioWebsite",
      lic1: "Privacy Policy",
      lic2: "Terms & Conditions",
    },
  },
  ru: {
    header: {
      contact_us: "Связаться с нами",
      contact: {
        title: "Свяжитесь с нами",
        name: "Имя...",
        l_name: "Фамилия...",
        email: "Электронная почта...",
        phone: "Номер телефона...",
      },
      submit: "Подтвердить",
    },
    showcase: {
      title:
        "Обновите свою комнату и создайте потрясающий дизайн интерьера вместе с нами!",
      desc: "Мы — команда дизайнеров интерьеров, базирующаяся в Ваканде, 58-я улица Ист-Вака. Мы предоставляем услуги по дизайну интерьера с 1899 года и имеем множество клиентов из разных стран.",
      get_started: "Начать",
      a1: "Довольные клиенты из разных стран.",
      a2: "Многолетний опыт в дизайне интерьера",
    },
    how_we_work: {
      title: "Как мы работаем",
      workflow: "НАШ РАБОЧИЙ ПРОЦЕСС",
      planning: "Планировка",
      concept: "Концепция",
      design: "Дизайн",
      installation: "Монтаж",
      card_desc:
        "Одной из ключевых частей стратегического планирования является понимание ваших целей и бюджета.",
    },
    reviews: {
      title: "Отзывы наших клиентов",
      client_says: "НАШ КЛИЕНТ ГОВОРИТ",
      client_job: "Удаленный программист",
      client_desc:
        "“Современный стиль рабочего стола с тропическими элементами, растениями и освещением создает теплый и уютный взгляд на минималистский дизайн интерьера. Мне нравится этот дизайн!. Спасибо, Interiorqu.”",
    },
    projects: {
      title: "Последний проект",
      gallery: "НАША МИНИ ГАЛЕРЕЯ",
      read_more: "Читать далее",
    },
    work_us: {
      title: "Хотите работать с нами?",
      desc: "Заполните форму, отправьте тип вашей комнаты и сообщите нам, что вам нужно для вашей будущей комнаты, а затем подождите, пока мы ответим.",
      form: {
        name: "Имя",
        name_placeholder: "Введите ваше имя",
        room: "Тип номера",
        room_placeholder: "Укажите тип номера",
        tell: "Расскажи нам",
        tell_placeholder: "Расскажите нам, что вам нужно",
      },
      email: "Адрес электронной почты",
      submit: "Подтвердить",
    },
    footer: {
      sub: "Новостная рассылка",
      sub_desc:
        "Подпишитесь на нашу рассылку, чтобы получать потрясающие новости и ежедневное вдохновение.",
      navigation: {
        title: "Навигация",
        home: "Дом",
        workflow: "Рабочий процесс",
        reviews: "Отзывы",
        project: "Проект",
      },
      about: {
        title: "О нас",
        pricing: "Цены",
        contact: "Контакт",
      },
      email: "Адрес электронной почты",
      social: "Социальное",
      submit: "Подтвердить",
      lic: "Создано в 2021 г. Interiorqu.com.StudioWebsite",
      lic1: "политика конфиденциальности",
      lic2: "Условия использования",
    },
  },
};

export function getText(code) {
  return localStorage.getItem("lang") == "ru" ? texts.ru[code] : texts.en[code];
}
