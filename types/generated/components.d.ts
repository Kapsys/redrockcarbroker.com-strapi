import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementAdvantagesSection extends Schema.Component {
  collectionName: 'components_element_advantages_sections';
  info: {
    displayName: 'Advantages Section';
    icon: 'command';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface ElementCarSpecificationsHomepage extends Schema.Component {
  collectionName: 'components_element_car_specifications_homepages';
  info: {
    displayName: 'Car Specifications Homepage';
    icon: 'server';
  };
  attributes: {
    carSpecification: Attribute.String;
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
    featuredImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    carParameters: Attribute.Component<'element.car-parameters', true>;
    price: Attribute.String;
    button: Attribute.Component<'element.button', true>;
  };
}

export interface ElementCars extends Schema.Component {
  collectionName: 'components_element_cars';
  info: {
    displayName: 'Cars';
    icon: 'archive';
  };
  attributes: {
    carType: Attribute.String;
    numberOfCarsInStock: Attribute.Integer;
  };
}

export interface ElementColorFilter extends Schema.Component {
  collectionName: 'components_element_color_filters';
  info: {
    displayName: 'Color Filter';
    icon: 'write';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    colors: Attribute.Component<'element.colors', true>;
    button: Attribute.Component<'element.button'>;
  };
}

export interface ElementColors extends Schema.Component {
  collectionName: 'components_element_colors';
  info: {
    displayName: 'Colors';
    icon: 'write';
    description: '';
  };
  attributes: {
    colorName: Attribute.String & Attribute.CustomField<'plugin::color-picker.color'>;
    colorTitle: Attribute.String;
  };
}

export interface ElementContactItems extends Schema.Component {
  collectionName: 'components_element_contact_items';
  info: {
    displayName: 'Contact Items';
    icon: 'gate';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ItemTitle: Attribute.String;
    itemContent: Attribute.Text;
  };
}

export interface ElementEmptyState extends Schema.Component {
  collectionName: 'components_element_empty_states';
  info: {
    displayName: 'Empty State';
    icon: 'stack';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'element.button'>;
  };
}

export interface ElementExternalLinks extends Schema.Component {
  collectionName: 'components_element_external_links';
  info: {
    displayName: 'External Links';
    icon: 'manyToOne';
    description: '';
  };
  attributes: {
    logo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Component<'element.button'>;
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

export interface ElementFilters extends Schema.Component {
  collectionName: 'components_element_filters';
  info: {
    displayName: 'Filters';
    icon: 'cast';
  };
  attributes: {
    title: Attribute.String;
    searchPlaceholder: Attribute.String;
    cars: Attribute.Component<'element.cars', true>;
    button: Attribute.Component<'element.button'>;
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
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    addressInfos: Attribute.String;
    link: Attribute.Text;
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
    postimage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface ElementRequests extends Schema.Component {
  collectionName: 'components_element_requests';
  info: {
    displayName: 'Requests';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ElementSocials extends Schema.Component {
  collectionName: 'components_element_socials';
  info: {
    displayName: 'Socials';
    icon: 'thumbUp';
  };
  attributes: {
    socialIcon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    photo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface ElementTransmissionFilters extends Schema.Component {
  collectionName: 'components_element_transmission_filters';
  info: {
    displayName: 'Transmission Filters';
    icon: 'oneToOne';
  };
  attributes: {
    title: Attribute.String;
    transmissionTypes: Attribute.Component<'element.transmission-types', true>;
  };
}

export interface ElementTransmissionTypes extends Schema.Component {
  collectionName: 'components_element_transmission_types';
  info: {
    displayName: 'Transmission Types';
    icon: 'oneWay';
  };
  attributes: {
    type: Attribute.String;
  };
}

export interface ElementValues extends Schema.Component {
  collectionName: 'components_element_values';
  info: {
    displayName: 'Values';
    icon: 'database';
    description: '';
  };
  attributes: {
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SectionAboutUsSection extends Schema.Component {
  collectionName: 'components_section_about_us_sections';
  info: {
    displayName: 'About Us Section';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    socials: Attribute.Component<'element.socials', true>;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    content: Attribute.Text;
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
    oembedMap: Attribute.Text;
    requests: Attribute.Component<'element.requests', true>;
  };
}

export interface SectionExternalLinksSection extends Schema.Component {
  collectionName: 'components_section_external_links_sections';
  info: {
    displayName: 'External Links Section';
    icon: 'stack';
  };
  attributes: {
    title: Attribute.String;
    externalLinks: Attribute.Component<'element.external-links', true>;
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

export interface SectionFiltersSection extends Schema.Component {
  collectionName: 'components_section_filters_sections';
  info: {
    displayName: 'Filters Section';
    icon: 'collapse';
  };
  attributes: {
    filters: Attribute.Component<'element.filters', true>;
    transmissionFilters: Attribute.Component<'element.transmission-filters'>;
    colorFilter: Attribute.Component<'element.color-filter'>;
    emptyState: Attribute.Component<'element.empty-state'>;
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
    footerLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    socials: Attribute.Component<'element.socials', true>;
    menuItems: Attribute.Component<'element.menu-items', true>;
    footerMenuItems: Attribute.Component<'element.footer-menu-items', true>;
    logoText: Attribute.String;
    kapsysLogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    headerlogo: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    menuItems: Attribute.Component<'element.menu-items', true>;
    button: Attribute.Component<'element.button'>;
  };
}

export interface SectionHeroInnerPageSection extends Schema.Component {
  collectionName: 'components_section_hero_inner_page_sections';
  info: {
    displayName: 'Hero Inner Page Section';
    icon: 'rotate';
  };
  attributes: {
    description: Attribute.Text;
    socials: Attribute.Component<'element.socials', true>;
  };
}

export interface SectionHeroSection extends Schema.Component {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'Hero section';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Attribute.Component<'element.button', true>;
  };
}

export interface SectionOurMissionSection extends Schema.Component {
  collectionName: 'components_section_our_mission_sections';
  info: {
    displayName: 'Our Mission Section';
    icon: 'key';
    description: '';
  };
  attributes: {
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Text;
    values: Attribute.Component<'element.values', true>;
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
    isSold: Attribute.Boolean;
  };
}

export interface SectionPromoSection extends Schema.Component {
  collectionName: 'components_section_promo_sections';
  info: {
    displayName: 'Promo Section';
    icon: 'monitor';
    description: '';
  };
  attributes: {
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String;
    description: Attribute.Text;
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
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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
    image: Attribute.Media<'images' | 'files' | 'videos'>;
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
    metaImage: Attribute.Media<'images' | 'files' | 'videos'> & Attribute.Required;
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
      'element.car-specifications-homepage': ElementCarSpecificationsHomepage;
      'element.car-specifications': ElementCarSpecifications;
      'element.cards': ElementCards;
      'element.cars': ElementCars;
      'element.color-filter': ElementColorFilter;
      'element.colors': ElementColors;
      'element.contact-items': ElementContactItems;
      'element.empty-state': ElementEmptyState;
      'element.external-links': ElementExternalLinks;
      'element.faq': ElementFaq;
      'element.filters': ElementFilters;
      'element.footer-menu-items': ElementFooterMenuItems;
      'element.header-infos': ElementHeaderInfos;
      'element.infos': ElementInfos;
      'element.menu-items': ElementMenuItems;
      'element.post-gallery': ElementPostGallery;
      'element.product-description': ElementProductDescription;
      'element.product-infos': ElementProductInfos;
      'element.requests': ElementRequests;
      'element.socials': ElementSocials;
      'element.specifications': ElementSpecifications;
      'element.testimonials': ElementTestimonials;
      'element.text-block': ElementTextBlock;
      'element.transmission-filters': ElementTransmissionFilters;
      'element.transmission-types': ElementTransmissionTypes;
      'element.values': ElementValues;
      'section.about-us-section': SectionAboutUsSection;
      'section.contact-section': SectionContactSection;
      'section.external-links-section': SectionExternalLinksSection;
      'section.faq-section': SectionFaqSection;
      'section.filters-section': SectionFiltersSection;
      'section.footer': SectionFooter;
      'section.header': SectionHeader;
      'section.hero-inner-page-section': SectionHeroInnerPageSection;
      'section.hero-section': SectionHeroSection;
      'section.our-mission-section': SectionOurMissionSection;
      'section.product-section': SectionProductSection;
      'section.promo-section': SectionPromoSection;
      'section.statistics-section': SectionStatisticsSection;
      'section.testimonials-section': SectionTestimonialsSection;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
