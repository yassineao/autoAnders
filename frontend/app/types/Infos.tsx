type Infos = {
  title: string;
  description: string;
  fields: {
    companyName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
  };
  placeholders: {
    companyName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
  };
  consent: {
    prefix: string;
    terms: string;
    and: string;
    privacyPolicy: string;
    suffix: string;
  };
  submitLabel: string;
  popup: {
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
    closeLabel: string;
  };
  testimonial: {
    quote: string;
    author: string;
    imageAlt: string;
    imageUrl: string;
  };
};

export type { Infos };
