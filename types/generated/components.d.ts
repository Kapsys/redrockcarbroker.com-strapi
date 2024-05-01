import type { Schema, Attribute } from '@strapi/strapi';

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
      'element.button': ElementButton;
      'element.header-infos': ElementHeaderInfos;
      'element.menu-items': ElementMenuItems;
      'element.socials': ElementSocials;
      'section.footer': SectionFooter;
      'section.header': SectionHeader;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
