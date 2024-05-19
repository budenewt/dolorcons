class LanguagePreference {
  // The 'readonly' modifier makes example the value of 'lang' cannot be changed after initialization
  readonly lang: string;

  constructor(lang: string = "TypeScript") {
    this.lang = lang;
  }

  // This method returns the current language preference
  get currentLanguage(): string {
    return this.lang;
  }
}

// Example usage:
const userLangPreference = new LanguagePreference();
console.log(userLangPreference.currentLanguage); // Outputs: TypeScript
