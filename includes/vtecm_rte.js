/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Scayt,Maximize,Source,Image,HorizontalRule,SpecialChar,Styles,About,Blockquote';

	config.format_tags = 'p;Title1;Title2;Title3;Title4;Title5;Title6';
	config.format_Title1 = { element : 'h1', name : 'Title1' };
	config.format_Title2 = { element : 'h2', name : 'Title2' };
	config.format_Title3 = { element : 'h3', name : 'Title3' };
	config.format_Title4 = { element : 'h4', name : 'Title4' };
	config.format_Title5 = { element : 'h5', name : 'Title5' };
	config.format_Title6 = { element : 'h6', name : 'Disclaimer' };

	config.contentsCss = '/includes/qtrade_rte.css';

	config.extraPlugins = 'stylesheetparser';
};

