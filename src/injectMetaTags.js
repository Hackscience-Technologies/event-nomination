// src/injectMetaTags.js
import { META_DESCRIPTION, TITLE, ICON_URL } from './config';

const injectMetaTags = () => {
  const head = document.head;

  // Set the document title
  document.title = TITLE;

  // Create and append the meta description tag
  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = META_DESCRIPTION;
  head.appendChild(metaDescription);

  // Find the existing link rel icon tag and update it
  let linkIcon = document.querySelector('link[rel="icon"]');
  if (!linkIcon) {
    // If no icon link exists, create a new one
    linkIcon = document.createElement('link');
    linkIcon.rel = 'icon';
    head.appendChild(linkIcon);
  }
  linkIcon.type = 'image/svg+xml';
  linkIcon.href = ICON_URL;
};

injectMetaTags();
