/*eslint-disable*/
var postcss = require('postcss');

// list of all plugins
var processors = [
	{
		plugin: require('postcss-strip-inline-comments'),
		namespace: 'strip',
		defaults: {}
	},
	{
		plugin:    require('postcss-partial-import'),
		namespace: 'import',
		defaults:  {}
	},
	{
		plugin:    require('./mixins'),
		namespace: 'mixins',
		defaults:  {}
	}, {
        plugin:    require('postcss-url'),
        namespace: 'url',
        defaults:  {}
    }, {
		plugin:    require('./vars'),
		namespace: 'variables',
		defaults:  {}
	},
	{
		plugin:    require('postcss-nesting'),
		namespace: 'nesting',
		defaults:  {}
	},
	{
		plugin:    require('postcss-nested'),
		namespace: 'nested',
		defaults:  {}
	},
	{
		plugin:    require('postcss-custom-selectors'),
		namespace: 'selectors',
		defaults:  {}
	},
	{
		plugin:    require('postcss-atroot'),
		namespace: 'atroot',
		defaults:  {}
	},
	{
		plugin:    require('postcss-property-lookup'),
		namespace: 'lookup',
		defaults:  {
			logLevel: 'warn'
		}
	},
	{
		plugin:    require('postcss-extend'),
		namespace: 'extend',
		defaults:  {}
	},
	{
		plugin:    require('postcss-selector-matches'),
		namespace: 'matches',
		defaults:  {}
	},
	{
		plugin:    require('postcss-selector-not'),
		namespace: 'not',
		defaults:  {}
	}, {
		plugin: require('postcss-cssnext'),
		namespace: 'cssnext',
		defaults: {}
	}, {
		plugin: require('postcss-hexrgba'),
		namespace: 'hexrgba',
		defaults: {}
	}
];

// load all plugins
module.exports = postcss.plugin('precss', function (options) {
	options = options || {};

	var instance = postcss();

	// for each plugin
	processors.forEach(function (processor) {
		var namespaceOptions = processor.namespace in options ? options[processor.namespace] : options;
		var processorOptions = {};

		Object.keys(processor.defaults).forEach(function (key) {
			processorOptions[key] = processor.defaults[key];
		});

		Object.keys(namespaceOptions).forEach(function (key) {
			processorOptions[key] = namespaceOptions[key];
		});

		if (namespaceOptions && !processorOptions.disable) {
			instance.use(processor.plugin(processorOptions));
		}
	});

	return instance;
});
/*eslint-enable*/
