import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementAdvantagesSection extends Schema.Component {
  collectionName: 'components_element_advantages_sections';
  info: {
    displayName: 'Advantages Section';
    icon: 'command';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    description: Attribute.Text;
  };
}

export interface ElementButton extends Schema.Component {
  collectionName: 'components_element_buttons';
  info: {
    displayName: 'Button';
    icon: 'database';
  };
  attributes: {
    buttonName: Attribute.String;
    buttonUrl: Attribute.String;
  };
}

export interface ElementCallToAction extends Schema.Component {
  collectionName: 'components_element_call_to_actions';
  info: {
    displayName: 'Call To Action';
    icon: 'pinMap';
  };
  attributes: {
    icon: Attribute.Media;
    name: Attribute.String;
    nameLink: Attribute.String;
  };
}

export interface ElementCarParameters extends Schema.Component {
  collectionName: 'components_element_car_parameters';
  info: {
    displayName: 'Car Parameters';
    icon: 'bulletList';
  };
  attributes: {
    parameter: Attribute.String;
  };
}

export interface ElementCarSpecifications extends Schema.Component {
  collectionName: 'components_element_car_specifications';
  info: {
    displayName: 'Car Specifications';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    specifications: Attribute.Component<'element.specifications', true>;
  };
}

export interface ElementCards extends Schema.Component {
  collectionName: 'components_element_cards';
  info: {
    displayName: 'Cards';
    icon: 'database';
    description: '';
  };
  attributes: {
    featuredImage: Attribute.Media;
    title: Attribute.String;
    carParameters: Attribute.Component<'element.car-parameters', true>;
    price: Attribute.String;
    button: Attribute.Component<'element.button', true>;
  };
}

export interface ElementContactItems extends Schema.Component {
  collectionName: 'components_element_contact_items';
  info: {
    displayName: 'Contact Items';
    icon: 'gate';
  };
  attributes: {
    icon: Attribute.Media;
    ItemTitle: Attribute.String;
    itemContent: Attribute.Text;
  };
}

export interface ElementFaq extends Schema.Component {
  collectionName: 'components_element_faqs';
  info: {
    displayName: 'Faq';
    icon: 'manyToOne';
  };
  attributes: {
    faqQuestion: Attribute.Text;
    faqAnswer: Attribute.Text;
  };
}

export interface ElementFooterMenuItems extends Schema.Component {
  collectionName: 'components_element_footer_menu_items';
  info: {
    displayName: 'Footer Menu Items';
    icon: 'twitter';
  };
  attributes: {
    nameItem: Attribute.String;
    linkItem: Attribute.String;
  };
}

export interface ElementHeaderInfos extends Schema.Component {
  collectionName: 'components_element_header_infos';
  info: {
    displayName: 'Header Infos';
    icon: 'eye';
  };
  attributes: {
    icon: Attribute.Media;
    addressInfos: Attribute.String;
  };
}

export interface ElementInfos extends Schema.Component {
  collectionName: 'components_element_infos';
  info: {
    displayName: 'Infos';
    icon: 'oneToOne';
    description: '';
  };
  attributes: {
    info: Attribute.String;
  };
}

export interface ElementMenuItems extends Schema.Component {
  collectionName: 'components_element_menu_items';
  info: {
    displayName: 'Menu Items';
    icon: 'stack';
    description: '';
  };
  attributes: {
    itemName: Attribute.String;
    itemLink: Attribute.String;
  };
}

export interface ElementPostGallery extends Schema.Component {
  collectionName: 'components_element_post_galleries';
  info: {
    displayName: 'Car Gallery';
    icon: 'stack';
    description: '';
  };
  attributes: {
    postimage: Attribute.Media;
  };
}

export interface ElementProductDescription extends Schema.Component {
  collectionName: 'components_element_product_descriptions';
  info: {
    displayName: 'Car Description';
    icon: 'expand';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface ElementProductInfos extends Schema.Component {
  collectionName: 'components_element_product_infos';
  info: {
    displayName: 'Car Infos';
    icon: 'manyToMany';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    infos: Attribute.Component<'element.infos', true>;
    button: Attribute.Component<'element.button'>;
  };
}

export interface ElementSocials extends Schema.Component {
  collectionName: 'components_element_socials';
  info: {
    displayName: 'Socials';
    icon: 'thumbUp';
  };
  attributes: {
    socialIcon: Attribute.Media;
    socialUrl: Attribute.String;
  };
}

export interface ElementSpecifications extends Schema.Component {
  collectionName: 'components_element_specifications';
  info: {
    displayName: 'Specifications';
    icon: 'stack';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    parameter: Attribute.String;
    value: Attribute.String;
  };
}

export interface ElementTestimonials extends Schema.Component {
  collectionName: 'components_element_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    photo: Attribute.Media;
    description: Attribute.Text;
    fullName: Attribute.String;
  };
}

export interface ElementTextBlock extends Schema.Component {
  collectionName: 'components_element_text_blocks';
  info: {
    displayName: 'Text Block';
    icon: 'search';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SectionContactSection extends Schema.Component {
  collectionName: 'components_section_contact_sections';
  info: {
    displayName: ' Contact Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    textBlock: Attribute.Component<'element.text-block'>;
    contactItems: Attribute.Component<'element.contact-items', true>;
    oembedMap: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbarBalloon';
        }
      >;
  };
}

export interface SectionFaqSection extends Schema.Component {
  collectionName: 'components_section_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'layer';
  };
  attributes: {
    textBlock: Attribute.Component<'element.text-block'>;
    faq: Attribute.Component<'element.faq', true>;
  };
}

export interface SectionFooter extends Schema.Component {
  collectionName: 'components_section_footers';
  info: {
    displayName: 'Footer';
    icon: 'server';
    description: '';
  };
  attributes: {
    footerLogo: Attribute.Media;
    socials: Attribute.Component<'element.socials', true>;
    menuItems: Attribute.Component<'element.menu-items', true>;
    footerMenuItems: Attribute.Component<'element.footer-menu-items', true>;
    logoText: Attribute.String;
    kapsysLogo: Attribute.Media;
    kapsysLogoLink: Attribute.String;
    button: Attribute.Component<'element.button'>;
  };
}

export interface SectionHeader extends Schema.Component {
  collectionName: 'components_section_headers';
  info: {
    displayName: 'Header';
    icon: 'eye';
    description: '';
  };
  attributes: {
    headerInfos: Attribute.Component<'element.header-infos', true>;
    headerlogo: Attribute.Media;
    menuItems: Attribute.Component<'element.menu-items', true>;
    button: Attribute.Component<'element.button'>;
  };
}

export interface SectionHeroSection extends Schema.Component {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'Hero section';
    icon: 'dashboard';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    backgroundImage: Attribute.Media;
    callToAction: Attribute.Component<'element.call-to-action'>;
  };
}

export interface SectionProductSection extends Schema.Component {
  collectionName: 'components_section_product_sections';
  info: {
    displayName: 'Product Section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    textBlock: Attribute.Component<'element.text-block'>;
    button: Attribute.Component<'element.button', true>;
  };
}

export interface SectionStatisticsSection extends Schema.Component {
  collectionName: 'components_section_statistics_sections';
  info: {
    displayName: 'Statistics Section';
    icon: 'feather';
    description: '';
  };
  attributes: {
    textBlock: Attribute.Component<'element.text-block'>;
    advantagesSection: Attribute.Component<'element.advantages-section', true>;
  };
}

export interface SectionTestimonialsSection extends Schema.Component {
  collectionName: 'components_section_testimonials_sections';
  info: {
    displayName: 'Testimonial Section';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    backgroundImage: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
    testimonials: Attribute.Component<'element.testimonials', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> & Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 250;
      }>;
    metaImage: Attribute.Media & Attribute.Required;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'element.advantages-section': ElementAdvantagesSection;
      'element.button': ElementButton;
      'element.call-to-action': ElementCallToAction;
      'element.car-parameters': ElementCarParameters;
      'element.car-specifications': ElementCarSpecifications;
      'element.cards': ElementCards;
      'element.contact-items': ElementContactItems;
      'element.faq': ElementFaq;
      'element.footer-menu-items': ElementFooterMenuItems;
      'element.header-infos': ElementHeaderInfos;
      'element.infos': ElementInfos;
      'element.menu-items': ElementMenuItems;
      'element.post-gallery': ElementPostGallery;
      'element.product-description': ElementProductDescription;
      'element.product-infos': ElementProductInfos;
      'element.socials': ElementSocials;
      'element.specifications': ElementSpecifications;
      'element.testimonials': ElementTestimonials;
      'element.text-block': ElementTextBlock;
      'section.contact-section': SectionContactSection;
      'section.faq-section': SectionFaqSection;
      'section.footer': SectionFooter;
      'section.header': SectionHeader;
      'section.hero-section': SectionHeroSection;
      'section.product-section': SectionProductSection;
      'section.statistics-section': SectionStatisticsSection;
      'section.testimonials-section': SectionTestimonialsSection;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
