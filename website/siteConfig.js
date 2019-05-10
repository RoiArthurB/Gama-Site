/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/en/1.9.0/site-config for all the possible
// site configuration options.

/*
// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];
*/

const BASE_URL = '/BC2019-Gama-Site/';

const KEYWORDS = {
    keyword: 'species else for if while',
    literal: 'false true null'
  };

const siteConfig = {

	/*
	 *		SETUP
	 *	Modify at your own risk
	 */
  url: 'https://roiarthurb.github.io', // Your website URL
  baseUrl: BASE_URL, // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'BC2019-Gama-Site',
  organizationName: 'RoiArthurB',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // Keyword between baseUrl and file
  // (default = 'docs', or can be removed)
  // ex: https://gama-platform.github.io/wiki/Home
  //                                     ^^^^
  docsUrl: 'wiki',

  algolia: {
    apiKey: '0f9f28b9ab9efae89810921a351753b5',
    indexName: 'github',
  },

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
    hljs: function(hljs) {
    	hljs.registerLanguage('gaml', function(hljs) {
    		return {
    			aliases: ['gaml', 'gama', 'gama-language'],
          //lexemes: '/[a-zA-Z]\\w*:/',
          //keywords: 'var:',
    			keywords: {
            keyword: 'for if while',
            builtin: 'agent model experiment driving fipa GAMASQL MDXSKILL messaging moving moving3D network old_driving physics skill_road skill_road_node SQLSKILL fsm parallel_bdi probabilistic_tasks reflex simple_bdi sorted_tasks user_first user_last user_only weighted_tasks',
            literal: 'bool float int string agent container file geometry graph list map matrix pair path point rgb species topology'
          },
          contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
//            hljs.APOS_STRING_MODE,
            hljs.QUOTE_STRING_MODE,
            {
              className: 'keyword',
              begin: '/[a-zA-Z]/', end: ':'//,
              //contains: [hljs.QUOTE_STRING_MODE, 'self']
            }
          ]
    		}
    	});
    },
    defaultLang: 'gaml'//'java'
  },

  // If you have users set above, you add it here:
//  users,

  // No .html extensions for paths.
  cleanUrl: true,

	/*	
	  JS
	*/
  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    {
      // SHOULD be loaded BEFORE searchEngine.js
      src: 'https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.4.4/fuse.min.js',
      async: false
    },
  	{
  		src: 'https://buttons.github.io/buttons.js',
  		async: false
  	},
  	{
  		src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  		async: false
  	},
    {
      src: BASE_URL + 'js/code-block-buttons.js',
      async: false
    },
    {
      src: BASE_URL + 'js/searchEngine.js',
      async: false
    }
  ],

	/*	
	  CSS
	*/
  stylesheets: [
  	BASE_URL + 'css/code-block-buttons.css',
  	'https://use.fontawesome.com/releases/v5.8.2/css/all.css'
  ],


  /*
   *    DOWNLOAD
   *  Version and Name version of the zip file
   */
  zipName: 'GAMA1.8_RC2',
  downloadVersion: '1.8-rc2',


  /*
   *    METADATA
   *  Website title, etc
   */
  title: 'GAMA-Platform', // Title for your website.
  tagline: 'GAMA',
  frontPagePresentation: 'GAMA is a modeling and simulation development environment for building spatially explicit agent-based simulations.',


	/*
	 *		ENHANCE FRAMEWORK
	 *	Structure apply to the website (url format, etc)
	 */

	/*	HEADER	*/
  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'Home',	label: 'Documentation'},
    {doc: 'Tutorials',	label: 'Tutorials'},
    {page: 'download',	label: 'Download'},	
    {doc: 'Contribute',	label: 'Contribute'},
    // Enable blog
//    {blog: true, label: 'Blog'},
    // Determines language drop down position among links
    { languages: false },
    // Determines search bar position among links
    { search: true }
  ],


	/*
	 *		ENHANCE UI
	 *	Look'n'Feel
	 */

	/* path to images for header/footer */
  headerIcon: '/img/gama-logo_white.png',
  footerIcon: '/img/gama-logo.png',
  favicon: '/img/gama-logo.png',

	/* Sidebar Menu Collapsible titles */
  docsSideNavCollapsible: true,

  /* On page navigation for the current documentation page. */
  onPageNav: 'separate',

  /* Add a little "scroll to top" button */
  scrollToTop: true,

	/* Colors for website */
  colors: {
    primaryColor: '#3670A0',//'#2e8555',
    secondaryColor: '#EEB64F',
  },

	/* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

	/* This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.	*/
  copyright: `Copyright © ${new Date().getFullYear()} GAMA-Platform`,

  	/*	Open Graph and Twitter card images.	*/
  ogImage: '/resources/images/general/GamaPlatform.png',
  twitterImage: '/resources/images/general/GamaPlatform.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
