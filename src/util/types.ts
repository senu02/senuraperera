import { Block, SectionIntro, SEO } from "@/api/services/pageService";
import { ReactNode } from "react";

export type EditorJSNestedListItem = {
  items: any[];
  content: string;
};

export type EditorJSNestedListBlock = {
  id: string;
  type: "nestedlist";
  data: {
    items: EditorJSNestedListItem[];
    style: "unordered" | "ordered";
  };
};

export type EditorJSData = {
  time: number;
  blocks: EditorJSNestedListBlock[];
  version: string;
};

export type EditorJSHeaderBlock = {
  id: string;
  type: "header";
  data: {
    text: string;
    level: number;
  };
};

export type EditorJSParagraphBlock = {
  id: string;
  type: "paragraph";
  data: {
    text: string;
  };
};

export type EditorJSListBlock = {
  id: string;
  type: "list";
  data: {
    style: "ordered" | "unordered";
    items: string[];
  };
};

export type EditorJSImageBlock = {
  id: string;
  type: "image";
  data: {
    file?: {
      url: string;
      extension: String;
      fileId: string;
      width: number;
      height: number;
    };
    url?: string;
    caption?: string;
  };
};

export type EditorJSQuoteBlock = {
  id: string;
  type: "quote";
  data: {
    text: string;
    caption?: string;
  };
};

export type EditorTableBlock = {
  id: string;
  type: "table";
  data: {
    content: [string[]];
    stretched: boolean;
    withHeadings: boolean;
  };
};

export type EditorJSRichTextBlock =
  | EditorJSHeaderBlock
  | EditorJSParagraphBlock
  | EditorJSListBlock
  | EditorJSNestedListBlock
  | EditorJSImageBlock
  | EditorJSQuoteBlock
  | EditorTableBlock;

export type EditorJSRichTextData = {
  time: number;
  blocks: EditorJSRichTextBlock[];
  version: string;
};

export type JournalContentItemImage = {
  directus_files_id: DirectusFile;
};

export type JournalContentItem = {
  id: number;
  sort: number | null;
  images?: JournalContentItemImage[];
  column_type?: "single" | "double";
  content?: EditorJSRichTextData;
  content_column_one?: EditorJSRichTextData;
  content_column_two?: EditorJSRichTextData;
};

export type DirectusButton = {
  id: number;
  label: string;
  URL?: string;
  isExternal?: boolean;
};

export type TemplateCaseStudiesData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    paragraph: {
      text: string;
    }[];
    buttons: DirectusButton[];
  };
  section_quicklinks: {
    id: number;
    heading: string;
    buttons: DirectusButton[];
  };
};

export type TemplateAboutUsData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    paragraph: {
      text: string;
    }[];
    left_content: string;
    buttons: DirectusButton[];
  };
  section_quicklinks: {
    id: number;
    heading: string;
    buttons: DirectusButton[];
  };
  section_highlight: {
    id: number;
    heading: string;
    banner: DirectusFile;
    features: {
      text: string;
    }[];
    stats_title: string;
    stats: {
      label: string;
      value: string;
      suffix: string;
    }[];
  };
  section_certifications: {
    heading: string;
    cetifications: {
      id: number;
      image: DirectusFile;
    }[];
  };
};

export type TemplateOurStoryData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    paragraph: {
      text: string;
    }[];
    left_content: string;
    buttons: DirectusButton[];
  };
  section_history: {
    heading: string;
    stories: {
      id: number;
      year: string;
      title: string;
      description: string;
      image: DirectusFile;
    }[];
  };
};

export type TemplateWebinarData = {
  id: number;
  status: string;
  section_intro: {
    id: number;
    sort: number | null;
    tagline: string;
    heading: string;
    paragraph: {
      text: string;
    }[];
    buttons: DirectusButton[];
  };

  section_upcoming: {
    id: number;
    sort: number | null;
    tagline: string | null;
    heading: string;
    events: {
      id: number;
      sort: number | null;
      events_id: {
        id: number;
        title: string;
        date?: string;
        category?: string;
        description?: string;
        href?: string;
        image?: DirectusFile;
      };
    }[];
  };

  section_past: {
    id: number;
    sort: number | null;
    tagline: string | null;
    heading: string;
    events: {
      id: number;
      sort: number | null;
      events_id: {
        id: number;
        title: string;
        date?: string;
        category?: string;
        description?: string;
        href?: string;
        image?: DirectusFile;
      };
    }[];
  };

  section_quicklinks: {
    id: number;
    sort: number | null;
    tagline: string | null;
    heading: string;
    buttons: DirectusButton[];
  };
};

export type TemplateAcademyData = {
  id: number;
  status: string;
  section_intro: {
    tagline: string | undefined;
    heading: React.ReactNode;
    description: string[];
    subtitle: string;
    title: string;
    paragraph: string[];
    cards: {
      id: number;
      title: string;
      description: string;
    }[];
  };

  section_upcoming: {
    id: number;
    sort: number | null;
    tagline?: string | null;
    heading?: string;
    events?: {
      id: number;
      sort?: number | null;
      block_exp_webinar_id?: number | null;
      events_id?: {
        id: number;
        title?: string;
        slug?: string;
        type?: string;
        date?: string;
        category?: string;
        description?: string;
        href?: string;
        status?: string;
        sort?: number | null;
        image?: DirectusFile | null;
        details?: {
          label: string;
          value: string;
        }[];
      };
    }[];
  };

  section_stories: {
    id: number;
    sort: number | null;
    tagline: string | null;
    heading: string;
    description?: { text: string }[];
    reviews: {
      id: number;
      author: string;
      designation: string;
      text: string;
      avatar?: DirectusFile | null;
      block_exp_stories_id?: number;
      rev_id?: number | null;
      sort?: number | null;
      status?: string;
    }[];
    stories: {
      id: number;
      author: string;
      designation: string;
      title: string;
      video?: {
        id: number;
        isExternal?: boolean;
        link?: string | null;
        thumbnail?: DirectusFile | null;
        video?: DirectusFile | null;
        author?: string | null;
        block_testi_hear_id?: number | null;
        sort?: number | null;
      } | null;
      image?: DirectusFile | null;
      block_exp_stories_id?: number;
      sort?: number | null;
      status?: string;
    }[];
  };

  section_past: {
    id: number;
    sort: number | null;
    tagline: string | null;
    heading: string;
    description?: { text: string }[];
    counter?: {
      label: string;
      value: string;
      suffix?: string | null;
    }[];
    top_image?: string | DirectusFile | null;
    images?: DirectusFile[] | string[] | null;
    events: {
      id: number;
      status?: string;
      sort: number | null;
      title: string;
      slug?: string;
      href?: string;
      date?: string;
      category?: string;
      description?: string;
      image?: DirectusFile;
      details?: {
        label: string;
        value: string;
      }[];
    }[];
  };

  section_past_webinars: {
    id: number;
    sort: number | null;
    tagline: string | null;
    heading: string;
    events: {
      id: number;
      sort: number | null;
      events_id: {
        id: number;
        title: string;
        slug?: string;
        date?: string;
        category?: string;
        description?: string;
        href?: string;
        image?: DirectusFile;
        details?: {
          label: string;
          value: string;
        }[];
      };
    }[];
  };

  section_case_studies: {
    heading: string;
    case_studies: {
      id: number;
      case_studies_id: {
        title: string;
        description: string;
        slug: string;
        tags: string[];
      };
    }[];
  };
  gallery: {
    id: number;
    sort?: number | null;
    template_academy_id?: number;
    isExternal?: boolean;
    title?: string | null;
    type: "image" | "video";
    url?: string | null;
    thumbnail?: string | null;
    image?: DirectusFile | null;
    video?: DirectusFile | null;
  }[];
  section_quicklinks: {
    id: number;
    heading: string;
    buttons: DirectusButton[];
  };
};
export type TemplatePortfolioData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    paragraph: {
      text: string;
    }[];
    left_content: string;
    buttons: DirectusButton[];
    counter_title: string;
    counter: number | string;
  };
  section_quicklinks: {
    id: number;
    heading: string;
    buttons: DirectusButton[];
  };
  section_clients: {
    heading: string;
    paragraph: string;
    clients: {
      id: number;
      our_clients_id: {
        id: number;
        image: DirectusFile;
        title: string;
        url: string;
      };
      block_home_clients_id?: number;
    }[];
  };
  section_stories: {
    heading: string;
    testimonials: {
      id: number;
      testimonials_id: {
        id: number;
        avatar: DirectusFile;
        text: string;
        author: string;
        adesignation: string;
      };
    }[];
  };
};

export type TemplateMembershipData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    paragraph: {
      text: string;
    }[];
    left_content: string;
    buttons: DirectusButton[];
    counter_title: string;
    counter: number | string;
  };
  section_quicklinks: {
    id: number;
    heading: string;
    buttons: DirectusButton[];
  };
};

export type TemplateTeamData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    paragraph: {
      text: string;
    }[];
    left_content: string;
    buttons: DirectusButton[];
    counter_title: string;
    counter: number | string;
  };
  team: {
    id: number;
    designation: string;
    image: DirectusFile;
    title: string;
  }[];
};

export type TemplateTestimonialsData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    paragraph: {
      text: string;
    }[];
    left_content: string;
    buttons: DirectusButton[];
    counter_title: string;
    counter: number | string;
  };
  section_quicklinks: {
    id: number;
    heading: string;
    buttons: DirectusButton[];
  };
  section_case_studies: {
    heading: string;
    case_studies: {
      id: number;
      case_studies_id: {
        title: string;
        description: string;
        slug: string;
        tags: string[];
      };
    }[];
  };
  section_success: {
    heading: string;
    stories: {
      id: number;
      success_stories_id: {
        id: number;
        author: string;
        designation: string;
        title: string;
        video: DirectusFile;
      };
    }[];
  };
};

export type TemplateNewsData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    paragraph: {
      text: string;
    }[];
    left_content: string;
    buttons: DirectusButton[];
    counter_title: string;
    counter: number | string;
  };
  section_quicklinks: {
    id: number;
    heading: string;
    buttons: DirectusButton[];
  };
};

export type TestimonialType = {
  id: number;
  author: string;
  designation: string;
};

export type TemplateAwardsData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    paragraph: {
      text: string;
    }[];
    buttons: DirectusButton[];
    stats: {
      label: string;
      value: number;
    }[];
  };
  section_quicklinks: {
    id: number;
    heading: string;
    buttons: DirectusButton[];
  };
  section_highlight: {
    count: number;
    label: string;
    cover_caption: string;
    description: string;
    cover: DirectusFile;
    awards: {
      id: number;
      tagline: string;
      title: number;
      image: DirectusFile;
    }[];
  };
};

export type StatTextItem = {
  value?: string | number;
  label: string;
};

export type TextItem = {
  id: number;
  content?: string;
};

export type StatItem = {
  id: number;
  stats: StatTextItem[];
};

export type ContentBlock =
  | { id: number; collection: "block_wysywig"; item: TextItem }
  | { id: number; collection: "block_stats"; item: StatItem };

export type TemplateCaseStudiesInnerData = {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  content: ContentBlock[];
  button: DirectusButton;
};

export type TemplateCareersInnerData = {
  id: number;
  slug: string;
  title: string;
};

export type CaseStudiesItem = {
  id: number;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  categories: {
    id: number;
    image: string;
  };
};

export type DirectusFile = {
  directus_files_id: any;
  id: string;
  filename_disk: string;
  filename_download: string;
  title: string;
  type: string;
  width: number | null;
  height: number | null;
  filesize: number;
  image_params: string;
  modified_on?: string;
  created_on?: string;
};

export type BannerImage = {
  id: number;
  sort: number;
  directus_files_id: DirectusFile;
};

export type TemplateCareersData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    paragraph: {
      text: string;
    }[];
    buttons: DirectusButton[];
    count: string;
    count_label: string;
    perk_title: string;
    perks: {
      text: string;
    }[];
  };
  section_quicklinks: {
    id: number;
    heading: string;
    buttons: DirectusButton[];
  };
  section_careers: {
    heading: string;
    categories: {
      id: number;
      title: string;
    }[];
    careers: {
      id: number;
      title: string;
      job_code?: string;
      category: {
        id: number;
        title: string;
      };
    }[];
  };
  section_media: {
    heading: string;
    media: {
      id: number;
      block_image_video_id: {
        image: DirectusFile;
        video: DirectusFile;
        type: string;
        title: string;
        url: string;
      };
    }[];
  };
};

export type TemplateOurExpertiseData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      description: string[];
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    description: string[];
    paragraph: {
      text: string;
    }[];
    left_content: string;
    buttons: DirectusButton[];
  };
  section_quicklinks: {
    id: number;
    heading: string;
    buttons: DirectusButton[];
  };
  section_features: {
    heading: string;
    features: {
      id: number;
      title: string;
      description: string;
    }[];
  };
  section_services: {
    heading: string;
    description: string;
    services: {
      id: number;
      title: string;
      description: string;
      image: DirectusFile;
    }[];
  };
  section_case_studies: {
    heading: string;
    case_studies: {
      id: number;
      case_studies_id: {
        title: string;
        description: string;
        slug: string;
        tags: string[];
      };
    }[];
  };
};

export type TemplateContactUsData = {
  id: number;
  status: string;
  section_intro: {
    intro_card: {
      title: string;
      description: string[];
      options: {
        label: string;
        value: string;
      }[];
    };
    tagline: string;
    heading: string;
    description: string[];
    paragraph: {
      text: string;
    }[];
    left_content: string;
    buttons: DirectusButton[];
  };
};
