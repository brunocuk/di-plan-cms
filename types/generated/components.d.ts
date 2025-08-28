import type { Schema, Struct } from '@strapi/strapi';

export interface SharedDifferences extends Struct.ComponentSchema {
  collectionName: 'components_shared_differences';
  info: {
    displayName: 'differences';
    icon: 'check';
  };
  attributes: {
    subText: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'faq';
    icon: 'message';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SharedHomepageService extends Struct.ComponentSchema {
  collectionName: 'components_shared_homepage_services';
  info: {
    displayName: 'homepageService';
  };
  attributes: {
    serviceTwoCta: Schema.Attribute.String;
    serviceTwoText: Schema.Attribute.Text;
    serviceTwoTitle: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedOurProcess extends Struct.ComponentSchema {
  collectionName: 'components_shared_our_processes';
  info: {
    displayName: 'ourProcess';
    icon: 'connector';
  };
  attributes: {
    step: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedReview extends Struct.ComponentSchema {
  collectionName: 'components_shared_reviews';
  info: {
    displayName: 'review';
    icon: 'star';
  };
  attributes: {
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
    reviewText: Schema.Attribute.Text;
    revImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedService extends Struct.ComponentSchema {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'service';
    icon: 'apps';
  };
  attributes: {
    benefitFour: Schema.Attribute.String;
    benefitOne: Schema.Attribute.String;
    benefits: Schema.Attribute.String;
    benefitThree: Schema.Attribute.String;
    benefitTwo: Schema.Attribute.String;
    service_single_page: Schema.Attribute.Relation<
      'oneToOne',
      'api::architecture-page.architecture-page'
    >;
    serviceImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    slugOfService: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedServiceBenefits extends Struct.ComponentSchema {
  collectionName: 'components_shared_service_benefits';
  info: {
    displayName: 'serviceBenefits';
    icon: 'bulletList';
  };
  attributes: {
    benefitImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    benefitText: Schema.Attribute.Text;
    benefitTitle: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedTeamMember extends Struct.ComponentSchema {
  collectionName: 'components_shared_team_members';
  info: {
    displayName: 'teamMember';
    icon: 'alien';
  };
  attributes: {
    linkedIn: Schema.Attribute.String;
    memberImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.differences': SharedDifferences;
      'shared.faq': SharedFaq;
      'shared.homepage-service': SharedHomepageService;
      'shared.media': SharedMedia;
      'shared.our-process': SharedOurProcess;
      'shared.quote': SharedQuote;
      'shared.review': SharedReview;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.service': SharedService;
      'shared.service-benefits': SharedServiceBenefits;
      'shared.slider': SharedSlider;
      'shared.team-member': SharedTeamMember;
    }
  }
}
