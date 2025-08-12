
const translations = {
    en: {
        title: "Jay Goga Dairy",
        tagline: "Promise of Purity – Fresh Dairy Products",
        intro: "Our milk, ghee, curd and more – straight to your home.",
        products_title: "Our Products",
        milk: "Milk",
        ghee: "Ghee",
        curd: "Curd",
        butter: "Butter",
        buttermilk: "Buttermilk",
        contact_title: "Contact",
        address: "30-k, Rabari was, Dholakda, Dist-Patan, Gujarat – 385360",
        whatsapp: "Order on WhatsApp"
    },
    hi: {
        title: "जय गोगा डेयरी",
        tagline: "शुद्धता का वादा – ताजे डेयरी उत्पाद",
        intro: "हमारा दूध, घी, दही और अधिक – सीधा आपके घर तक।",
        products_title: "हमारे उत्पाद",
        milk: "दूध",
        ghee: "घी",
        curd: "दही",
        butter: "मक्खन",
        buttermilk: "छाछ",
        contact_title: "संपर्क करें",
        address: "30-k, Rabari was, Dholakda, Dist-Patan, Gujarat – 385360",
        whatsapp: "WhatsApp पर ऑर्डर करें"
    },
    gu: {
        title: "જય ગોગા ડેરી",
        tagline: "શુદ્ધતાનું વચન – તાજા ડેરી પ્રોડક્ટ્સ",
        intro: "અમારું દુધ, ઘી, દહીં અને વધુ – સીધું તમારા ઘર સુધી.",
        products_title: "અમારા પ્રોડક્ટ્સ",
        milk: "દૂધ",
        ghee: "ઘી",
        curd: "દહીં",
        butter: "મખણ",
        buttermilk: "છાસ",
        contact_title: "સંપર્ક",
        address: "30-k, Rabari was, Dholakda, Dist-Patan, Gujarat – 385360",
        whatsapp: "WhatsApp ઓર્ડર કરો"
    }
};

function setLanguage(lang) {
    const t = translations[lang];
    for (let key in t) {
        document.getElementById(key).innerText = t[key];
    }
}
