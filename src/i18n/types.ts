export interface TranslationStrings {
  nav: {
    home: string;
    services: string;
    gallery: string;
    about: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    services: {
      ppf: {
        title: string;
        description: string;
      };
      tinting: {
        title: string;
        description: string;
      };
      chrome: {
        title: string;
        description: string;
      };
      lights: {
        title: string;
        description: string;
      };
    };
  };
  services: {
    title: string;
    subtitle: string;
    ppf: {
      title: string;
      description: string;
      features: string[];
    };
    chrome: {
      title: string;
      description: string;
      features: string[];
    };
    tinting: {
      title: string;
      description: string;
      features: string[];
    };
  };
  gallery: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
    timeline: Array<{
      year: string;
      title: string;
      description: string;
    }>;
    team: {
      title: string;
      subtitle: string;
      roles: {
        ppfSpecialist: string;
        cofounder: string;
      };
      expertise: {
        ppfExpert: string;
        advancedInstallation: string;
        qualityControl: string;
        customerConsultation: string;
        chromeDelete: string;
        windowTinting: string;
        technicalOperations: string;
        projectManagement: string;
      };
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    address: string;
    form: {
      name: string;
      email: string;
      phone: string;
      service: string;
      selectService: string;
      carModel: string;
      preferredDate: string;
      message: string;
      submit: string;
      submitting: string;
    };
    successMessage: string;
    errorMessage: string;
  };
}

export interface Translations {
  en: TranslationStrings;
  sv: TranslationStrings;
}