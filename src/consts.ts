// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// N.B. THIS FILE IS IMPORTED IN BOTH SERVER- AND CLIENT-SIDE CODE.
// THINK TWICE BEFORE ADDING STUFF AS IT WILL GET SHIPPED TO THE CLIENT.

import { slugify } from './utils/slugify';

export const SITE_TITLE = 'Pioneer Construction';
export const SITE_DESCRIPTION = 'This is the default description of this website. Nice!';
export const SITE_URL = 'https://example.com/';
export const SITE_EMAIL = 'nclingan.pioneer@gmail.com';
export const SITE_PHONE = '(719) 822-9222'
export const SITE_PHONE_HREF = 'tel:7198229222'
export const SITE_DEFAULT_IMAGE = '/preview.jpg'
export const SITE_UTM_SOURCE = slugify(SITE_TITLE);

export const UI_THEME = 'light'; // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

export const DISABLE_INDEXING = false;

export const ANALYTICS_GA4 = 'G-P9F8WMP4ZH';
