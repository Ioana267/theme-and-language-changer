function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,fr,ro,nl' },
        'google_translate_element'
    );
}

function changeLanguageTo(cuv) {
   
    var select = document.querySelector("#google_translate_element select");
    if (select) {
        select.value = cuv; 
        select.dispatchEvent(new Event('change')); 
    }
}
