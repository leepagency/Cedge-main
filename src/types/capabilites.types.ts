export interface ICapability {
  id: number;
  name: string;
  slug: string;
  header_image: string;
  banner_description: string;
  section_one: {
    main_title: string;
    image: string;
    title: string;
    sub_title: string;
    description: string;
    status: boolean;
  };
  section_two: {
    title: string;
    services: ICapabilityService[]; // there should be only seven exactly
    status: boolean;
  };
  section_three: {
    title: string;
    insights: ICapabilityInsight[];
    status: boolean;
  };
  section_four: {
    title: string;
    clients: ICapabilityClients[];
    status: boolean;
  };
  section_five: {
    title: string;
    testimonials: ICapabilityTestimonials[];
    status: boolean;
  };
  section_six: {
    title: string;
    video: string;
    status: boolean;
  };
  section_seven: {
    main_title: string;
    image: string;
    title: string;
    sub_title: string;
    description: string;
    status: boolean;
  };
  section_eight: {
    title: string;
    subtitle: string;
    description: string;
    status: boolean;
  };
}

export interface ICapabilityService {
  icon: string;
  title: string;
  description: string;
  is_reversed: boolean;
  is_column: boolean;
}

export interface ICapabilityInsight {
  id: number;
  title: string;
  slug: string;
  image: string;
  description: string;
  type: "article" | "blog" | "blog" | "report";
  //   tags: string[];
}

export interface ICapabilityClients {
  id: number;
  image: string;
}

interface ICapabilityTestimonials {
  id: number;
  image: string;
  name: string;
  position: string;
  description: string;
}

export interface ICapabilities {
  capabilities: ICapability[];
}
