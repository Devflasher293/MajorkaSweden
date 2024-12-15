import { TranslationStrings, Translations } from './types';

export const translations: Translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      gallery: 'Gallery',
      about: 'About',
      contact: 'Contact'
    },
    hero: {
      title: 'Premium Automotive',
      subtitle: 'Styling & Protection',
      description: 'Experience the ultimate in vehicle protection and aesthetic enhancement with our professional PPF, Chrome Delete, and Window Tinting services.',
      cta: 'Discover Our Services',
      services: {
        ppf: {
          title: 'Paint Protection',
          description: 'Shield your vehicle'
        },
        tinting: {
          title: 'Window Tinting',
          description: 'Premium comfort'
        },
        chrome: {
          title: 'Chrome Delete',
          description: 'Modern aesthetics'
        },
        lights: {
          title: 'Light Tinting',
          description: 'Enhanced style'
        }
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional automotive styling and protection services',
      ppf: {
        title: 'Paint Protection Film',
        description: 'Ultimate protection for your vehicle\'s paint',
        features: [
          'Self-healing technology',
          'UV protection',
          'Stain resistant',
          'Long-lasting durability'
        ]
      },
      chrome: {
        title: 'Chrome Delete',
        description: 'Transform chrome trim to sleek black finish',
        features: [
          'Premium vinyl wrapping',
          'Custom design options',
          'Weather resistant',
          'Professional installation'
        ]
      },
      tinting: {
        title: 'Window Tinting',
        description: 'High-quality window films for comfort and style',
        features: [
          'Heat rejection',
          'UV protection',
          'Privacy enhancement',
          'Glare reduction'
        ]
      }
    },
    gallery: {
      title: 'Our Work',
      subtitle: 'Browse through our latest projects and transformations'
    },
    about: {
      title: 'About Us',
      subtitle: 'Excellence in automotive styling since 2023',
      stats: [
        { value: '100+', label: 'Projects Completed' },
        { value: '98%', label: 'Customer Satisfaction' },
        { value: '2+', label: 'Years Experience' },
        { value: '20+', label: 'Regular Clients' }
      ],
      timeline: [
        {
          year: '2023',
          title: 'Company Founded',
          description: 'Started with a vision to provide premium automotive styling services'
        },
        {
          year: '2024',
          title: 'Service Expansion',
          description: 'Added chrome delete and window tinting to our service offerings'
        },
        {
          year: '2025',
          title: 'Future Growth',
          description: 'Planning expansion with new facility and advanced services'
        }
      ],
      team: {
        title: 'Meet Our Expert Team',
        subtitle: 'Dedicated professionals committed to excellence',
        roles: {
          ppfSpecialist: 'Owner',
          cofounder: 'Co-Owner'
        },
        expertise: {
          ppfExpert: 'PPF Installation Expert',
          advancedInstallation: 'Advanced Installation Techniques',
          qualityControl: 'Quality Control Specialist',
          customerConsultation: 'Customer Consultation',
          chromeDelete: 'Chrome Delete Specialist',
          windowTinting: 'Window Tinting Expert',
          technicalOperations: 'Technical Operations',
          projectManagement: 'Project Management'
        }
      }
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Read about experiences from our satisfied customers'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Book your appointment or get in touch with us',
      phone: 'Phone',
      address: 'Location',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone Number',
        service: 'Service',
        selectService: 'Select a service',
        carModel: 'Car Model',
        preferredDate: 'Preferred Date',
        message: 'Additional Message',
        submit: 'Book Appointment',
        submitting: 'Submitting...'
      },
      successMessage: 'Booking submitted successfully!',
      errorMessage: 'Error submitting booking. Please try again.'
    }
  },
  sv: {
    nav: {
      home: 'Hem',
      services: 'Tjänster',
      gallery: 'Galleri',
      about: 'Om Oss',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Premium Fordons',
      subtitle: 'Styling & Skydd',
      description: 'Upplev det ultimata inom fordonsskydd och estetisk förbättring med våra professionella PPF-, Chrome Delete- och fönstertoning-tjänster.',
      cta: 'Upptäck Våra Tjänster',
      services: {
        ppf: {
          title: 'Lackskydd',
          description: 'Skydda ditt fordon'
        },
        tinting: {
          title: 'Fönstertoning',
          description: 'Premium komfort'
        },
        chrome: {
          title: 'Chrome Delete',
          description: 'Modern estetik'
        },
        lights: {
          title: 'Ljustoning',
          description: 'Förbättrad stil'
        }
      }
    },
    services: {
      title: 'Våra Tjänster',
      subtitle: 'Professionella fordonstyling- och skyddstjänster',
      ppf: {
        title: 'Lackskyddsfilm',
        description: 'Ultimat skydd för ditt fordons lack',
        features: [
          'Självläkande teknologi',
          'UV-skydd',
          'Fläckresistent',
          'Långvarig hållbarhet'
        ]
      },
      chrome: {
        title: 'Chrome Delete',
        description: 'Förvandla kromdetaljer till elegant svart finish',
        features: [
          'Premium vinylwrapping',
          'Anpassade designalternativ',
          'Väderbeständig',
          'Professionell installation'
        ]
      },
      tinting: {
        title: 'Fönstertoning',
        description: 'Högkvalitativa fönsterfilmer för komfort och stil',
        features: [
          'Värmereduktion',
          'UV-skydd',
          'Ökad integritet',
          'Bländningsreducering'
        ]
      }
    },
    gallery: {
      title: 'Vårt Arbete',
      subtitle: 'Bläddra genom våra senaste projekt och förvandlingar'
    },
    about: {
      title: 'Om Oss',
      subtitle: 'Excellens inom fordonsstyling sedan 2023',
      stats: [
        { value: '100+', label: 'Genomförda Projekt' },
        { value: '98%', label: 'Kundnöjdhet' },
        { value: '2+', label: 'Års Erfarenhet' },
        { value: '20+', label: 'Återkommande Kunder' }
      ],
      timeline: [
        {
          year: '2023',
          title: 'Företaget Grundades',
          description: 'Startade med en vision att erbjuda premium fordonsstyling-tjänster'
        },
        {
          year: '2024',
          title: 'Tjänsteutökning',
          description: 'Lade till chrome delete och fönstertoning i vårt tjänsteutbud'
        },
        {
          year: '2025',
          title: 'Framtida Tillväxt',
          description: 'Planerar expansion med nya lokaler och avancerade tjänster'
        }
      ],
      team: {
        title: 'Möt Vårt Expertteam',
        subtitle: 'Dedikerade proffs som strävar efter excellens',
        roles: {
          ppfSpecialist: 'Ägare',
          cofounder: 'Delägare'
        },
        expertise: {
          ppfExpert: 'PPF-installationsexpert',
          advancedInstallation: 'Avancerade installationstekniker',
          qualityControl: 'Kvalitetskontrollspecialist',
          customerConsultation: 'Kundkonsultation',
          chromeDelete: 'Chrome Delete-specialist',
          windowTinting: 'Fönstertoningsexpert',
          technicalOperations: 'Tekniska operationer',
          projectManagement: 'Projektledning'
        }
      }
    },
    testimonials: {
      title: 'Vad Våra Kunder Säger',
      subtitle: 'Läs om erfarenheter från våra nöjda kunder'
    },
    contact: {
      title: 'Kontakta Oss',
      subtitle: 'Boka din tid eller kontakta oss',
      phone: 'Telefon',
      address: 'Plats',
      form: {
        name: 'Fullständigt Namn',
        email: 'E-post',
        phone: 'Telefonnummer',
        service: 'Tjänst',
        selectService: 'Välj en tjänst',
        carModel: 'Bilmodell',
        preferredDate: 'Önskat Datum',
        message: 'Ytterligare Meddelande',
        submit: 'Boka Tid',
        submitting: 'Skickar...'
      },
      successMessage: 'Bokning skickad framgångsrikt!',
      errorMessage: 'Fel vid bokning. Försök igen.'
    }
  }
};