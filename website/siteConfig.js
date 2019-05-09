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
    			keywords: KEYWORDS,
    			contains: [
    				hljs.COMMENT(
    				'/\\*\\*',
    				'\\*/',
    				{
    					relevance : 0,
    					contains : [
    						{
    							// eat up @'s in emails to prevent them to be recognized as doctags
    							begin: /\w+@/, relevance: 0
    						},
    						{
    							className : 'doctag',
    							begin : '@[A-Za-z]+'
    						}
    					]
    				}
    				),
    				hljs.C_LINE_COMMENT_MODE,
    				hljs.C_BLOCK_COMMENT_MODE,
    				hljs.APOS_STRING_MODE,
    				hljs.QUOTE_STRING_MODE
    			]
    			// ...
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
  		src: 'https://buttons.github.io/buttons.js',
  		async: true
  	},
  	{
  		src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  		async: true
  	},
    {
      src: BASE_URL + 'js/code-block-buttons.js',
      async: true
    },
    {
      src: '../node_modules/fuse.js/dist/fuse.js',
      //src: 'https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.4.4/fuse.min.js',
      async: true
    }
  ],

	/*	
	  CSS
	*/
  stylesheets: [
  	BASE_URL + '/css/code-block-buttons.css',
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
    {page: 'help',	label: 'Download'},	
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

const KEYWORDS = {
	statement: 'species, global, grid, model, import, output, action, add, agents, annealing, ask, aspect, assert, break, camera, capture, chart, conscious_contagion, create, data, datalist, default, diffuse, display, display_grid, display_population, do, draw, else, emotional_contagion, enter, equation, error, event, exhaustive, exit, experiment, export, focus, focus_on, genetic, graphics, highlight, hill_climbing, if, image, inspect, layout_forceatlas2, layout_yifanhu, let, light, loop, match, migrate, monitor, output, output_file, overlay, parameter, pause_sound, perceive, permanent, plan, put, reactive_tabu, reflex, release, remove, resume_sound, return, rule, run, save, save_batch, set, setup, simulate, solve, species, start_sound, state, status, stop_sound, switch, tabu, task, test, trace, transition, unconscious_contagion, user_command, user_init, user_input, user_panel, using, Variable_container, Variable_number, Variable_regular, warn, write',
	literal: 'true, false, unknown, nil',
	type: 'agent, BDIPlan, bool, container, conversation, date, emotion, file, float, font, geometry, graph, int, list, map, material, matrix, message, pair, path, point, predicate, regression, rgb, skill, species, string, topology, unknown',
	operator: 'abs, accumulate, acos, add_days, add_edge, add_hours, add_minutes, add_months, add_node, add_point, add_seconds, add_weeks, add_years, adjacency, agent, agent_closest_to, agent_farthest_to, agent_from_geometry, agents_at_distance, agents_inside, agents_overlapping, all_pairs_shortest_path, alpha_index, among, and, and, angle_between, any, any_location_in, any_point_in, append_horizontally, append_vertically, arc, around, as, as_4_grid, as_date, as_distance_graph, as_driving_graph, as_edge_graph, as_grid, as_hexagonal_grid, as_int, as_intersection_graph, as_map, as_matrix, as_path, as_system_date, as_system_time, as_time, asin, at, at_distance, at_location, atan, atan2, auto_correlation, BDIPlan, beta, beta_index, between, betweenness_centrality, biggest_cliques_of, binomial, binomial_coeff, binomial_complemented, binomial_sum, blend, bool, box, brewer_colors, brewer_palettes, buffer, build, ceil, change_clockwise, char, chi_square, chi_square_complemented, circle, clean, closest_points_with, closest_to, clustering_cobweb, clustering_DBScan, clustering_em, clustering_farthestFirst, clustering_simple_kmeans, clustering_xmeans, collect, column_at, columns_list, command, cone, cone3D, connected_components_of, connectivity_index, container, contains, contains_all, contains_any, contains_edge, contains_vertex, conversation, convex_hull, copy, copy_between, corR, correlation, cos, cos_rad, count, covariance, covers, cross, crosses, crs, CRS_transform, csv_file, cube, curve, cylinder, date, dbscan, dead, degree_of, dem, det, determinant, diff, diff2, directed, direction_between, direction_to, disjoint_from, distance_between, distance_to, distribution_of, distribution2d_of, div, dnorm, durbin_watson, dxf_file, edge, edge_between, edges, eigenvalues, electre_DM, ellipse, emotion, empty, enlarged_by, envelope, eval_gaml, eval_when, even, every, evidence_theory_DM, exp, fact, farthest_point_to, farthest_to, file, file_exists, first, first_with, flip, float, floor, folder, font, frequency_of, fuzzy_kappa, fuzzy_kappa_sim, gaml_file, gamma, gamma_distribution, gamma_distribution_complemented, gamma_index, gauss, generate_barabasi_albert, generate_complete_graph, generate_watts_strogatz, geometric_mean, geometry, geometry_collection, get, get_about, get_decay, get_intensity, get_lifetime, get_priority, get_super_intention, graph, grayscale, grid_at, grid_cells_to_graph, grid_file, group_by, harmonic_mean, hexagon, hierarchical_clustering, hsb, hypot, IDW, image_file, in, in_degree_of, in_edges_of, incomplete_beta, incomplete_gamma, incomplete_gamma_complement, indented_by, index_by, index_of, inside, int, inter, interleave, internal_at, internal_integrated_value, internal_zero_order_equation, intersection, intersects, inverse, inverse_distance_weighting, is, is_clockwise, is_csv, is_dxf, is_finite, is_gaml, is_grid, is_image, is_number, is_osm, is_pgm, is_property, is_R, is_shape, is_skill, is_svg, is_text, is_URL, is_xml, kappa, kappa_sim, kmeans, kurtosis, kurtosis, last, last_index_of, last_with, layout, length, lgamma, line, link, list, list_with, ln, load_graph_from_file, load_shortest_paths, log, log_gamma, lower_case, map, masked_by, material, matrix, matrix_with, max, max_of, maximal_cliques_of, mean, mean_deviation, mean_of, meanR, median, message, min, min_of, mod, moment, mul, nb_cycles, neighbors_at, neighbors_of, new_emotion, new_folder, new_predicate, node, nodes, norm, normal_area, normal_density, normal_inverse, not, of, of_generic_species, of_species, one_of, or, or, osm_file, out_degree_of, out_edges_of, overlapping, overlaps, pair, partially_overlaps, path, path_between, path_to, paths_between, pbinom, pchisq, percent_absolute_deviation, percentile, pgamma, pgm_file, plan, pnorm, point, points_at, points_on, poisson, polygon, polyhedron, polyline, polyplan, predecessors_of, predicate, predict, product, product_of, promethee_DM, property_file, pValue_for_fStat, pValue_for_tStat, pyramid, quantile, quantile_inverse, R_correlation, R_file, R_mean, range, rank_interpolated, read, rectangle, reduced_by, regression, remove_duplicates, remove_node_from, replace, replace_regex, reverse, rewire_n, rgb, rgb_to_xyz, rms, rnd, rnd_choice, rnd_color, rotated_by, round, row_at, rows_list, sample, scaled_by, scaled_to, select, set_about, set_decay, set_intensity, set_truth, set_z, shape_file, shuffle, signum, simple_clustering_by_distance, simple_clustering_by_envelope_distance, simplification, sin, sin_rad, skeletonize, skew, skewness, skill, smooth, solid, sort, sort_by, source_of, spatial_graph, species, species_of, sphere, split_at, split_geometry, split_lines, split_with, sqrt, square, squircle, standard_deviation, string, student_area, student_t_inverse, subtract_days, subtract_hours, subtract_minutes, subtract_months, subtract_seconds, subtract_weeks, subtract_years, successors_of, sum, sum_of, svg_file, tan, tan_rad, tanh, target_of, teapot, text_file, TGauss, to, to_GAMA_CRS, to_gaml, to_rectangles, to_squares, to_triangles, tokenize, topology, touches, towards, trace, transformed_by, translated_by, translated_to, transpose, triangle, triangulate, truncated_gauss, undirected, union, unknown, upper_case, URL_file, use_cache, user_input, using, variance, variance, variance_of, voronoi, weight_of, weighted_means_DM, where, with_lifetime, with_max_of, with_min_of, with_optimizer_type, with_precision, with_priority, with_values, with_weights, without_holes, writable, xml_file',
	facet: 'left, right, name, type, of, index, virtual, to, item, edge, vertex, node, at, all, weight, value, trace, selectable, fading, position, size, transparency, name, focus, aspect, refresh, name, temp_end, temp_decrease, temp_init, nb_iter_cst_temp, maximize, minimize, aggregation, target, as, name, value, equals, is_not, raises, name, location, look_at, up_vector, target, as, returns, x_range, y_range, position, size, reverse_axes, background, x_serie, x_serie_labels, y_serie_labels, axes, type, style, gap, y_tick_unit, x_tick_unit, name, x_label, y_label, color, series_label_position, tick_font, tick_font_size, tick_font_style, label_font, label_font_size, label_font_style, legend_font, legend_font_size, legend_font_style, title_font, title_font_size, title_font_style, name, emotion_detected, emotion_created, charisma, when, threshold, receptivity, species, returns, from, number, as, with, header, value, legend, y_err_values, x_err_values, y_minmax_values, marker_size, color, accumulate_values, line_visible, marker, marker_shape, fill, style, value, y_err_values, x_err_values, y_minmax_values, marker_size, legend, marker, marker_shape, accumulate_values, line_visible, fill, color, style, value, var, on, mat_diffu, matrix, method, min_value, mask, proportion, propagation, radius, variation, cycle_length, avoid_mask, background, name, focus, type, refresh_every, refresh, fullscreen, tesselation, z_fighting, trace, scale, show_fps, draw_env, orthographic_projection, ambient_light, diffuse_light, diffuse_light_pos, light, draw_diffuse_light, camera_pos, camera_look_pos, camera_up_vector, camera_lens, camera_interaction, use_shader, polygonmode, autosave, output3D, position, selectable, size, transparency, species, lines, elevation, texture, grayscale, triangulation, text, draw_as_dem, dem, refresh, position, selectable, size, transparency, trace, fading, species, aspect, refresh, action, with, internal_function, returns, geometry, texture, empty, border, rounded, at, size, color, rotate, font, depth, begin_arrow, end_arrow, perspective, material, bitmap, name, emotion_detected, emotion_created, charisma, when, threshold, receptivity, name, type, vars, params, simultaneously, message, unused, name, action, name, maximize, minimize, aggregation, name, title, parent, skills, control, frequency, schedules, keep_seed, keep_simulations, repeat, until, multicore, type, name, var, framerate, name, var, expression, when, priority, value, name, pop_dim, crossover_prob, mutation_prob, nb_prelim_gen, max_gen, maximize, minimize, aggregation, position, trace, fading, size, transparency, name, refresh, color, value, name, iter_max, maximize, minimize, aggregation, condition, file, position, size, transparency, name, gis, color, refresh, name, refresh_every, refresh, value, attributes, type, graph, nb_steps, thread_number, dissuade_hubs, linlog_mode, prevent_overlap, edge_weight_influence, scaling, stronger_gravity, gravity, tolerance, approximate_repulsion, approximation, bounded_point1, bounded_point2, graph, optimal_distance, quadtree_max_level, theta, relative_strength, step_size, nb_steps, bounded_point1, bounded_point2, name, value, of, index, type, id, position, type, direction, spot_angle, linear_attenuation, quadratic_attenuation, active, color, draw_light, update, from, to, step, name, over, while, times, value, source, target, returns, name, refresh_every, color, refresh, value, name, data, refresh_every, refresh, header, footer, rewrite, type, rounded, border, position, size, transparency, left, right, center, background, color, name, type, init, min, max, category, var, unit, step, among, name, as, when, in, emotion, threshold, target, layout, when, finished_when, priority, name, intention, emotion, threshold, instantaneous, at, key, all, item, edge, weight, in, name, iter_max, tabu_list_size_init, tabu_list_size_max, tabu_list_size_min, nb_tests_wthout_col_max, cycle_size_max, cycle_size_min, maximize, minimize, aggregation, when, name, target, as, in, returns, item, from, index, edge, vertex, node, key, all, value, belief, desire, emotion, uncertainty, new_desire, new_belief, new_emotion, new_uncertainty, remove_belief, remove_desire, remove_intention, remove_emotion, remove_uncertainty, when, threshold, priority, name, of, name, end_cycle, core, seed, with_output, with_param, type, data, rewrite, header, to, crs, with, to, rewrite, data, name, value, comodel, with_experiment, share, with_input, with_output, reset, until, repeat, equation, method, integrated_times, integrated_values, discretizing_step, time_initial, time_final, cycle_length, step, min_step, max_step, scalAbsoluteTolerance, scalRelativeTolerance, width, height, cell_width, cell_height, neighbours, neighbors, use_individual_shapes, use_regular_agents, use_neighbors_cache, file, torus, name, parent, edge_species, skills, mirrors, control, compile, frequency, schedules, topology, source, mode, repeat, initial, final, name, color, message, value, name, iter_max, tabu_list_size, maximize, minimize, aggregation, weight, name, name, when, to, name, emotion, charisma, when, threshold, receptivity, continue, color, action, name, when, with, initial, name, name, type, init, min, max, returns, among, initial, name, topology, name, type, init, value, update, function, const, category, parameter, size, of, index, fill_with, name, type, init, value, update, function, const, category, parameter, min, max, step, among, name, type, of, index, init, value, update, function, const, category, parameter, among, message, color, message'};

module.exports = siteConfig;
