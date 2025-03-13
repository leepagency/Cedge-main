import { ICapability, ICapabilityClients } from "./capabilites.types";

export type headerItemType = {
  title: string;
  href: "/" | "/about" | "/industries" | "/services" | "/blog";
  subItems?: { title: string; href: string }[];
};
export interface SearchParams {
  search_text: string;
  sort_key: string;
  type?: string;
  tag?: string;
}
export interface IBook {
  id: string;
  slug: string;
  title: string;
  image: string;
  description: string;
  file: string;
  banner: string;
  is_featured: boolean;
  date_of_publish: string;
  banner_description: string;
  banner_title: string;
}
export interface IArticle {
  id: string;
  slug: string;
  title: string;
  image: string;
  description: string;
  banner: string;
  is_featured: boolean;
  date_of_publish: string;
  banner_description: string;
  banner_title: string;
  image1: string;
  description1: string;
  image2: string;
  description2: string;
  image3: string;
  description3: string;
  header_description:string;
  header_title:string;
}
export interface IReport {
  id: string;
  slug: string;
  title: string;
  image: string;
  description: string;
  file: string;
  banner: string;
  is_featured: boolean;
  date_of_publish: string;
  banner_description: string;
  banner_title: string;
}
export interface IMeta {
  current_page: number;
  last_page: number;
}
export interface IBookResponse {
  ebooks: IBook[];
  meta: IMeta;
  ebooks_header: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
}

export interface IArticleResponse {
  articles: IArticle[];
  meta: IMeta;
  articles_header: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
}

export interface IReportResponse {
  reports: IReport[];
  meta: IMeta;
  reports_header: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
}

export interface IBlog {
  id: string;
  title: string;
  image: string;
  description: string;
  banner: string;
  is_featured: boolean;
  date_of_publish: string;
  banner_description: string;
  banner_title: string;
  short_description: string;
}

export interface IBlogPageResponse {
  blogs_header: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
  blogs: IBlog[];
  articles: IArticle[];
  reports: IReport[];
  ebooks: IBook[];
}
export interface IArticlePageResponse {
  blogs: IBlog[];
  articles: IArticle[];
}
export interface IBookPageResponse {
  ebooks: IBook[];
}
export interface IReportPageResponse {
  reports: IReport[];
}
export interface IContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  body: string;
}
export interface MailSubscriptionForm {
  email: string;
}

export interface ICapabilitiesResponse {
  capabilities: ICapability[];
  capabilities_header: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
}

export interface IServiceIndustry {
  id: number;
  title: string;
  description: string;
  order: number;
  industry_id: number;
  industry: string;
}
export interface IIndustry {
  id: number;
  name: string;
  slug: string;
  header_image: string;
  banner_description: string;
  section_one: {
    navigation_title: string;
    image: string;
    title: string;
    description: string;
    status: boolean;
  };
  section_two: {
    navigation_title: string;

    title: string;
    services: IServiceIndustry[];
    status: boolean;
  };
  section_three: {
    navigation_title: string;

    title: string;
    description: string;
    status: boolean;
  };
  section_four: {
    navigation_title: string;

    insights: {
      id: number;
      title: string;
      slug: string;
      description: string;
      image: string;
      main_title: string;
      type: string;
    }[];
  };
  section_five: {
    navigation_title: string;

    our_people: {
      main_title: string;
      image: string;
      title: string;
      id: number;
      description: string;
    }[];
  };
  section_six: {
    navigation_title: string;

    title: string;
    description: string;
    image: string;
    button_text: string;
    status: boolean;
  };
  section_seven: {
    navigation_title: string;

    title: string;
    sub_title: string;
    description: string;
    status: boolean;
  };
}
export interface IIndustriesResponse {
  industries: IIndustry[];
  industries_header: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
}
export interface IHomeSuccess {
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  image: string;
  status: boolean;
  card_description: string;
}
export interface IHomeCard {
  [key: string]: string;

  short_title1: string;
  title1: string;
  description1: string;
  short_title2: string;
  title2: string;
  description2: string;
  short_title3: string;
  title3: string;
  description3: string;
  short_title4: string;
  title4: string;
  description4: string;
  title5: string;
  description5: string;
  short_title6: string;
  title6: string;
  description6: string;
  short_title7: string;
  title7: string;
  description7: string;
}
export interface IHomeExecution {
  title: string;
  description1: string;
  description2: string;
  card_title1: string;
  card_description1: string;
  card_title2: string;
  card_description2: string;
  card_title3: string;
  card_description3: string;
  card_title4: string;
  card_description4: string;
  status: boolean;
}
export interface IHomeSocial {
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

export interface IHomePioneer {
  title1: string;
  description1: string;
  link1: string | null;
  title2: string;
  description2: string;
  link2: string | null;
  description3: string;
  link3: string | null;
  description4: string;
  link4: string | null;
  description5: string;
  link5: string | null;
  description6: string;
  link6: string | null;
  description7: string;
  link7: string | null;
  description8: string;
  link8: string | null;
  description9: string;
  link9: string | null;
  description10: string;
  link10: string | null;
}

export interface IHomeExplore {
  title: string;
  description: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  status: boolean;
}
export interface IHomeTestimonials {
  id: string;
  name: string;
  image: string;
  position: string;
  description: string;
}
export interface IHome {
  hero: {
    title: string;
    description: string;
    image: string;
  }[];
  pioneer: IHomePioneer[];
  explore: IHomeExplore[];

  success: IHomeSuccess[];
  card: IHomeCard[];
  execution: IHomeExecution[];
  trusted: {
    data: ICapabilityClients[];
    status: boolean;
  };
  testimonials: {
    data: IHomeTestimonials[];
    status: boolean;
  };
  social: IHomeSocial[];
  // ready_to_grow: [
  //   { title: null, description: null, button_text: null, status: true }
  // ],
  ready_to_grow: {
    title: string;
    description: string;
    button_text: string;
    status: boolean;
  }[];
}
export interface IAbout {
  about: {
    banner: string;
    header_image: string;
    title: string;
    description: string;
    section_one: {
      who_we_are_title: string;
      who_we_are_description: string;
    };
    section_two: {
      slider_image: string;
      slider_button_text: string;
      slides: {
        title: string;
        description: string;
      }[];
    };
    // mission_title: string;
    // vision_title: string;
    // mission_description: string;
    // vision_description: string;
    section_three: {
      mission_title: string;
      vision_title: string;
      mission_description: string;
      vision_description: string;
      mission_image: string;
      vision_image: string;
    };
    section_four: {
      our_principles_title: string;
      principles: {
        title: string;
        description: string;
        icon: string;
      }[];
    };
    section_five: {
      market_leaders_title: string;
      leaders: ILeader[];
    };
    section_six: {
      partners_title: string;
      partners: {
        id: number;
        icon: string;
        order: number;
      }[];
    };
    section_seven: {
      get_in_touch_title: string;
    };
  };
}
export interface IFooter {
  image: string;
  button_text: string;
  address: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
}

export interface ILeader {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedin_url: string;
  web_url: string;
}
