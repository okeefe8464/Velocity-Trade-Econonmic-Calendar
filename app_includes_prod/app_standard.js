//from http://laurens.vd.oever.nl/weblog/items2005/closures/ ... required by the newer addEvent code below it.
	//frankly I need to go to javascript school to really understand it. I get messed up with function references, this, me, etc. I am confused and dont know where to look for info.
Function.prototype.closure = function(obj)
{
  // Init object storage.
  if (!window.__objs)
  {
    window.__objs = [];
    window.__funs = [];
  }

  // For symmetry and clarity.
  var fun = this;

  // Make sure the object has an id and is stored in the object store.
  var objId = obj.__objId;
  if (!objId)
    __objs[objId = obj.__objId = __objs.length] = obj;

  // Make sure the function has an id and is stored in the function store.
  var funId = fun.__funId;
  if (!funId)
    __funs[funId = fun.__funId = __funs.length] = fun;

  // Init closure storage.
  if (!obj.__closures)
    obj.__closures = [];

  // See if we previously created a closure for this object/function pair.
  var closure = obj.__closures[funId];
  if (closure)
    return closure;

  // Clear references to keep them out of the closure scope.
  obj = null;
  fun = null;

  // Create the closure, store in cache and return result.
  return __objs[objId].__closures[funId] = function ()
  {
    return __funs[funId].apply(__objs[objId], arguments);
  };
};

///////////////////////
//Onload related funcs -- borrowed from ONEF*
///////////////////////
var onloadArray = new Array();
var bodyOnload = false;
function add_onload(functionName){
if (bodyOnload!=true){
	if (document.getElementsByTagName("body")[0]!= null){
		var doc_body = document.getElementsByTagName("body")[0];
		if (typeof(doc_body.onload)=="function"&&doc_body.onload.toString().indexOf('executeFunctions')==-1) onloadArray[onloadArray.length]=doc_body.onload;
		bodyOnload=true;
	}
}
onloadArray[onloadArray.length] = functionName;
window.onload=executeFunctions;
}
function executeFunctions() {
for (i in onloadArray) {
	if (typeof(onloadArray[i])=="function") onloadArray[i].apply();
	else eval(onloadArray[i]);
}
}

//pass a JSON as a 2nd arg to customize any properties except for 'menu' cuz popup windows _NEVER_ have a menu (ArbitraryRule#10750)
function appPopupWin(page) {
	var options = arguments[1];
	if (!options) { options = {}; }
	//DumperAlert(options);
	var w_width       = options['width']       ? options['width']       : 700;
	var w_height      = options['height']      ? options['height']      : 550;
	var w_scrollbars  = options['scrollbars']  ? options['scrollbars']  : 'yes';
	var w_toolbar     = options['toolbar']     ? options['toolbar']     : 'no'
	var w_location    = options['location']    ? options['location']    : 'no';
	var w_directories = options['directories'] ? options['directories'] : 'no';
	var w_resizable   = options['resizable']   ? options['resizable']   : 'no';
	var w_status      = options['status']      ? options['status']      : 'no'
	var w_title       = options['title']       ? options['title']       : 'info';

	window.open(page,w_title,'scrollbars='+w_scrollbars+',toolbar='+w_toolbar+',location='+w_location+',directories='+w_directories+',status='+w_status+',menubar=no,resizable='+w_resizable+',width='+w_width+',height='+w_height+'');
}

function corda_popup(runmode, record_id_param) {
	//this is a bit of cheese to get a button in JC fpm admin to pop up a corda pdf in a new window.
	//its really simple in that we are gonna get a runmode and we're gonna send the record_id along and thats it and just open that url in a new window with corda render wrappings. simple. cheese. worky?
	var record_id = $('input[name=' + record_id_param + ']:checked').val();
	var script_url_prefix = $('#main_form').attr('action'); 
	var rand_num = randomer();
	var rm_url = script_url_prefix + '?rm=' + runmode + '&record_id=' + record_id + '&randomer=' + rand_num;
	var corda_render_url = 'http://corda.spiserver.com:2001/?@_DOC_LOAD' + rm_url + '@_PDF';
	//alert('just being here is good for runmode: ' + runmode + ' for record id: ' + record_id + ' should hit something with: ' + script_url_prefix);
	appPopupWin(corda_render_url, {'location':'yes','toolbar':'yes', 'resizable':'yes'});
}

function html_popup(runmode, record_id_param) {
	var record_id = $('input[name=' + record_id_param + ']:checked').val();
	var script_url_prefix = $('#main_form').attr('action'); 
	var rm_url = script_url_prefix + '?rm=' + runmode + '&record_id=' + record_id;
	//var corda_render_url = 'http://corda.spiserver.com:2001/?@_DOC_LOAD' + rm_url + '@_PDF';
	//alert('runmode: ' + runmode + ' for record id: ' + record_id + ' rm_url: ' + rm_url);
	appPopupWin(rm_url, {'location':'yes','toolbar':'yes', 'resizable':'yes', 'resizable':'yes'});
}

function corda_view_popup(record_id,runmode, record_id_param) {
	var script_url_prefix = $('#main_form').attr('action'); 
	var rm_url = script_url_prefix + '?rm=' + runmode + '&record_id=' + record_id;
	var corda_render_url = 'http://corda.spiserver.com:2001/?@_DOC_LOAD' + rm_url + '@_PDF';

	//alert('just being here is good for runmode: ' + runmode + ' for record id: ' + record_id + ' should hit something with: ' + script_url_prefix);
	appPopupWin(corda_render_url, {'location':'yes','toolbar':'yes', 'resizable':'yes'});
}

function html_view_popup(record_id, runmode, record_id_param) {
	var script_url_prefix = $('#main_form').attr('action'); 
	var rm_url = script_url_prefix + '?rm=' + runmode + '&record_id=' + record_id;
 	appPopupWin(rm_url, {'location':'yes','toolbar':'yes', 'resizable':'yes'});
}

function generic_popup(runmode) {
	var script_url_prefix = $('#main_form').attr('action'); 
	var rm_url = script_url_prefix + '?rm=' + runmode + '&' + $( '#main_form' ).serialize();
 	appPopupWin(rm_url, {'location':'yes','toolbar':'yes', 'resizable':'yes'});
}


////add events to objects in a cross browser (read, make it work right in TaintExplorer!) way.
////from http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
//function addEvent( obj, type, fn ) {
//	if (obj.addEventListener)
//		obj.addEventListener( type, fn, false );
//	else if (obj.attachEvent)
//	{
//		obj["e"+type+fn] = fn;
//		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
//		obj.attachEvent( "on"+type, obj[type+fn] );
//	}
//}	


// copyright Q42 (www.q42.nl)
function addEvent(obj, type, fn) {
	if (obj.addEventListener)
		obj.addEventListener(type, fn, false);
	else if (obj.attachEvent) {
		removeEvent(obj, type, fn);
		obj.attachEvent("on" + type, fn.closure(obj));
	}
}

function removeEvent(obj, type, fn) {
	if (obj.removeEventListener)
		obj.removeEventListener(type, fn, false);
	else if (obj.detachEvent)
		obj.detachEvent("on" + type, fn.closure(obj));
}

/*
Functions for working with result tables.
*/

function rowHiLite(obj, odd, on) {
	//change the background color style (and what else?) of the object .. do it different if odd param passed.
	var apply = 'row_bg_';
	apply += (odd ? 'odd_' : 'even_');
	apply += (on ? 'on' : 'off');
	obj.className = apply;
	//alert('did it: ' + apply);
}

function rowClick(obj) {
	//turn on the radio button for the row.
	var radio = obj.getElementsByTagName('input')[0]; //if its NOT the first element, then we'll have a problem!
	if (radio) {
		if (radio.type != 'radio' && radio.type != 'checkbox') { alert("hrmm .. for rowClick, the input I found wasnt a radio button or a checkbox, it was a " + radio.type + " ... so I'm lost"); return; }
		if (radio.type == 'radio') {
			radio.checked = 1;
		}
		if (radio.type == 'checkbox') {
			radio.checked = !radio.checked; //just reverse state for cbox.
			updateSelected(null, radio);
		}
	}
}
function cellClick(obj) {
	//make the wild assumption that we want to do a rowClick on the parentNode. so simple.
	rowClick(obj.parentNode);
}

////////////////////// valuesearch, multi-cbox selection /////////////////////////
function beginValueSearch(record_id, record_id_param, runmode) {
  // functionally, this is the same as saveRecord, but we should be posting to a mode that will do valuesearch controllery stuff and save the form fields in the session and go off somewhere else.
	// but giving a unique name and button type, so that we can change this behavior for valuesearch if we need to.
	if (record_id) {
		var record_id_field = document.getElementById(record_id_param);
		if (record_id_field) {
			record_id_field.value = record_id;
		} else {
			alert('beginValueSearch: error finding record_id param to set its value');
			return null;
			//theForm.record_id.value = record_id;
		}
	}
	var hiddenField = findElement('begin_valuesearch');
	hiddenField.value = 1; //so controllers know what we are doing.

  //document.main_form.record_id.value = record_id;
  submit_form(runmode);
}

function updateSelected(event, cbox) {
	//the EVENT is passed as first argument when its an event handler. and then we will get the cbox from 'this'. and we can call it directly with a null event and a particular cbox too.
		//using jquery in here.
	if (!cbox) { 
		//alert('yeah here without the cbox arg');
		cbox = this; 
	}

	//get current JSON out of the hidden field, establish if neccessary, update with currently "selected" item, remove from list if the item is now selected.
	var selectedFld = $('#selected_values');
	var selectedVals = fromJsonString(selectedFld.val());
	if (!selectedVals) {
		selectedVals = {};
	}
	
	if (cbox.checked) {
		selectedVals[cbox.value] = '1'; //this one is selected.
	} else {
		selectedVals[cbox.value] = '0'; //this one is not selected.
	}

	//DumperAlert({ "cbox type": typeof(cbox), "cbox id:" : cbox.id, "cbox checked" : cbox.checked });
	//DumperAlert({ "the selected list is looking like:": selected });
	selectedFld.val(toJsonString(selectedVals));
	//DumperAlert({ "the selected list in JSON is looking like:": selectedFld.val() });
}

function updateAllSelected( name ) {
	var selectVals = {};

	$( "input[name=" + name + "][type='checkbox']").each(
		function( index, item ) {
			if( $( this ).is(':checked') ) {
				selectVals[$( this ).val()] = 1;
			} else {
				selectVals[$( this).val()] = 0;
			}
		}
	);

	$( '#selected_values' ).val(toJsonString(selectVals));

	return;
}

function initSelectedCboxes() {
	var selectedFld = $('#selected_values');
	var selectedVals = fromJsonString(selectedFld.val());
	//gotta go set all the selected ones.
	if (selectedVals) {
		for (var key in selectedVals) {
			//DumperAlert({ "the key":key, "the secret":selectedVals[key]});
			if (selectedVals[key] == 1) {
				//its checked, we should set it.
				$('#search_results :checkbox[value=' + key + ']').attr({ "checked" : 1 });
				//alert('turned it on');
			}
		}
	}
}

function valueSearchCancel(runmode) {
	$('#valuesearch_cancelled').val(1);
	submit_form(runmode);
}

function valueSearchUse(runmode) {
	$('#searchedvalues_submission').val(1);
	submit_form(runmode);
}

function removeValuesearchedRecord(record_id, record_id_param, valuesearch_mode) {
	$('#related_record_operation_type').val('remove_unsaved');
	setRecordIDParamAndValue(record_id, record_id_param);
	submit_form(valuesearch_mode);
}
function removeSavedRelatedRecord(record_id, record_id_param, valuesearch_mode) {
	$('#related_record_operation_type').val('remove_saved');
	setRecordIDParamAndValue(record_id, record_id_param);
	submit_form(valuesearch_mode);
}

function setRecordIDParamAndValue(record_id, record_id_param) {
  //note edit_record_id used b/c search results have record_id and so we can't have two fields with the same name
	if (record_id) {
		$('#' + record_id_param).val(record_id);
	}
}

////////////////// Delete-ey stuff //////////////////////////////
var delete_rm;
function confirmDelete(rm, record_id_param) {
	if (!checkSelected(record_id_param)) { return false; }		
	delete_rm = rm;
	showLayer('confirm_delete', '_confirm');
}

function pageDelete(record_id, rm, record_id_param) {
        document.main_form.record_id.value = record_id;
        delete_rm = rm;
        showLayer('confirm_delete', '_confirm');
}

function cancelDelete() { //this needs to be coded for ... for the cancel delete button. but then .. like what happens if they just leave the delete confirmation on the screen!?!? that would be stupid. or maybe not .. just 1 interaction anyways. ... but no .. really the delete confirmation should take over the entire area of action.
	delete_rm = null;
	var cbox = document.getElementById('cd_cbox');
	if (cbox) {cbox.checked = 0;}
	hideLayer('confirm_delete');				
}

function doDelete() {
	var cbox = document.getElementById('cd_cbox');
	if (!delete_rm) { alert ("Uhh ... you shouldnt be here if there is no delete_rm"); return false; }
	if (cbox && !cbox.checked) { alert ("You must tick the checkbox before you commit this act."); return false; }
	
	//do it.
	document.main_form.rm.value = delete_rm;
	document.main_form.submit();
}

//2009 02 09 for some bmg imglib thing i decided i want one that swaps out the buttons for the form and replaces with a deleteconfirm cbox/buttons
function confirmDeleteBtnSwap(args) {
	if (!args) { args = {}; }

	var hide_div_id = args['hide_div_id'];
	var show_div_id = args['show_div_id'];
	var cbox_id     = args['cbox_id'];

	if (!hide_div_id) { hide_div_id = 'form_buttons_container'; }
	if (!show_div_id) { show_div_id = 'cdbs_buttons_container'; }
	if (!cbox_id)     { cbox_id = 'cdbs_cbox'; }

	delete_rm   = args['delete_rm'];
	var check_selected = args['check_selected']; //if present this should be the record_id_param.
	if (check_selected) {
		if (!checkSelected(check_selected)) { return false; }
	}
	$('#' + cbox_id).attr({'checked':false});
	divSwap({'hide_div_id':hide_div_id,'show_div_id':show_div_id});
}

function cancelDeleteBtnSwap(args) {
	if (!args) { args = {}; }

	var hide_div_id = args['hide_div_id'];
	var show_div_id = args['show_div_id'];
	var cbox_id     = args['cbox_id'];

	if (!hide_div_id) { hide_div_id = 'cdbs_buttons_container'; }
	if (!show_div_id) { show_div_id = 'form_buttons_container'; }
	if (!cbox_id)     { cbox_id = 'cdbs_cbox'; }

	delete_rm = null;
	$('#' + cbox_id + '_label').removeClass('error');
	$('#' + cbox_id).attr({'checked':false});
	divSwap({'hide_div_id':hide_div_id,'show_div_id':show_div_id});
}
function doDeleteBtnSwap(args) {
	if (!args) { args = {}; }

	var hide_div_id = args['hide_div_id'];
	var show_div_id = args['show_div_id'];
	var cbox_id     = args['cbox_id'];

	if (!hide_div_id) { hide_div_id = 'cdbs_buttons_container'; }
	if (!show_div_id) { show_div_id = 'form_buttons_container'; }
	if (!cbox_id)     { cbox_id = 'cdbs_cbox'; }

	if (!$('#' + cbox_id).is(':checked')) {  //  replaces old attr('checked','checked')) {
		$('#' + cbox_id + '_label').addClass('error');
		return false;	
	}
	//dont swap back prior to submission, looks visually weird.
	//divSwap({'hide_div_id':hide_div_id,'show_div_id':show_div_id});
	submit_form(delete_rm);
}
function divSwap(args) {
	var hide_div_id = args['hide_div_id'];
	var show_div_id = args['show_div_id'];
//	alert( 'hiding ' + hide_div_id + ' showing ' + show_div_id );
	$('#' + hide_div_id).hide();
	$('#' + show_div_id).show();
}
//////////////////////////////////////////////////////
function showLayer(id, mode){
	obj=findElement(id);
	if (obj&&obj.css) obj.className = 'visible'+mode;
}
function hideLayer(id){
	obj=findElement(id);
	if (obj&&obj.css) obj.className = 'hidden';
}
function findElement(id){
	element=(document.getElementById)?document.getElementById(id):(document.all)?document.all[id]:(document.layers)?document.layers[id]:null;
	if (element) element.css=(element.style)?element.style:element;
	return element;
}


function clearSelection(field) {
	//will eventually have to make this work for cboxes too ... although hrmm ... syntactically the code might jfw.
	if (!field) { field = 'record_id'; }
	var radios = document.getElementsByName(field);
	for (var i = 0; i < radios.length; i++) {
		radios[i].checked = 0;
	}
	return 1;
}

function checkSelected(field) {
	//will eventually have to make this work for cboxes too ... although hrmm ... syntactically the code might jfw.
	if (!field) { field = 'record_id'; }
	var radios = document.getElementsByName(field);
	var record_id = null;
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			record_id = radios[i].value;
		}
	}
	if (record_id) {
		//alert ("Yup, you've got " + record_id + " chosen.");
		return 1;
	} else {
		alert ("Please select a record first.");
		//alert ("Please select a record -- and replace this error with some div showing dhtml whizbang");
		return 0;
	}
}

function checkSingleSelected(field) {
	//will eventually have to make this work for cboxes too ... although hrmm ... syntactically the code might jfw.
	if (!field) { field = 'record_id'; }
	var radios = document.getElementsByName(field);
	var record_id = null;
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			if( record_id ) {
				alert( "Please select only a single record." );
				return 0;
			}
			record_id = radios[i].value;
		}
	}
	if (record_id) {
		//alert ("Yup, you've got " + record_id + " chosen.");
		return 1;
	} else {
		alert ("Please select a record first.");
		//alert ("Please select a record -- and replace this error with some div showing dhtml whizbang");
		return 0;
	}
}

function selectAll(field, state) {
	if (!field) { field = 'record_id'; }
	var cboxes = document.getElementsByName(field);
	for (var i = 0; i < cboxes.length; i++) {
		if (cboxes[i].type != 'checkbox') { continue; } //cant select a non-checkbox here.
		cboxes[i].checked = state;
	}
}

//function setSearchRunmode(runmode) {
//	document.main_form.search_rm.value = runmode;
//	//alert('search_rm value set to: ' + document.main_form.search_rm.value);
//}
	
function newSearch(runmode, ajax_params) {
	if (!ajax_params) {
		//alert('not doing ajax newsearch');
		document.main_form.new_search.value = 1;
		submit_form(runmode);
	} else {
		//alert('doing ajax newsearch');
		ajax_params['runmode'] = runmode;
		ajax_params['search_params'] = { 'new_search' : 1 };
		ajaxSearch(ajax_params);
	}
}

function firstLetterSearch(runmode, letter) {
	$('#new_search').val(1);
	$('#firstletter_search').val(letter);
	submit_form(runmode);
}

function sortResults(param, dir, runmode, ajax_params) {
	if (!ajax_params) {
		document.main_form.sort.value = param;
		document.main_form.sort_dir.value = dir;
		//alert('sort and sort_dir: ' + document.main_form.sort.value + ' ' + document.main_form.sort_dir.value);
		submit_form(runmode);
	} else {
		ajax_params['runmode'] = runmode;
		ajax_params['search_params'] = { 'sort' : param, 'sort_dir' : dir };
		ajaxSearch(ajax_params);
	}
}

function showPage(pagenum, runmode, ajax_params) {
	if (!ajax_params) {
		document.main_form.show_page.value = pagenum;
		submit_form(runmode);
	} else {
		ajax_params['runmode'] = runmode;
		ajax_params['search_params'] = { 'show_page' : pagenum };
		ajaxSearch(ajax_params);
	}
}

function searchCheckenter(event, runmode, ajax_params) {
	var NS4 = (document.layers) ? true : false;
	var code = 0;
	if (NS4) { code = event.which; } else { code = event.keyCode;	}
	if (code==13) {
		//DumperAlert(['would be calling newsearch with args like:', runmode, ajax_params ]);
		newSearch(runmode, ajax_params)
		return false;
	} else {
		return true;
	}
}

/* 
Functions for working with viewform representations of fields 
*/

function editRecord(record_id, record_id_param, runmode) {
	if (record_id) {
		var record_id_field = document.getElementById(record_id_param);
		if (record_id_field) {
			record_id_field.value = record_id;
		} else {
			alert('editRecord: error finding record_id param to set its value');
			return null;
		}
	}
  submit_form(runmode);
}

function viewformCancel(record_id, record_id_param, runmode) {
	var jq_dom_els = $('#viewform_cancelled').val(1);
	if (!jq_dom_els.length) { 
		alert('viewformCancel: error setting viewform_cancelled var.');
	} else {
		submitRecordId(record_id, record_id_param, runmode, 'editformCancel');
	}
}


/* 
Functions for working with editform representations of fields 
*/

function saveRecord(record_id, record_id_param, runmode) {
  //note edit_record_id used b/c search results have record_id and so we can't have two fields with the same name
	if (record_id) {
		var record_id_field = document.getElementById(record_id_param);
		if (record_id_field) {
			record_id_field.value = record_id;
		} else {
			alert('saveRecord: error finding record_id param to set its value');
			return null;
			//theForm.record_id.value = record_id;
		}
	}
  //document.main_form.record_id.value = record_id;
  submit_form(runmode);
}

function submitWithParams(record_id, record_id_param, runmode, json_obj, dont_set_record_id) {
	//i want this to submit the form to a runmode but first adding parameters to the form using js. how to control it? I am thinking to use JSON or something. not sure yet.
		//also, we're adding inputs to the form here. what happens if user presses back button and clicks same form button? do we add ANOTHER one? well I'm just gonna code some checks and balances in there in case.
 var theForm = findElement('main_form');

	for (var key in json_obj) {
		//does the thing already exist? assuming that if it does its a hidden field that exists b/c we created it... that could be assuming too much. should really throw an error if it exists and isnt a hidden form field.
		var field_id = key + '_hiddeninput';
		var hiddenInput = null;
		hiddenInput = document.getElementById(field_id);
		if (hiddenInput) {
			hiddenInput.setAttribute("value", json_obj[key]);
			if (hiddenInput.nodeName != 'INPUT') {
				throw new Error('ERROR it already exists, but it not an INPUT node.');
			}
		} else {
			hiddenInput = document.createElement("input");
			hiddenInput.setAttribute("type", "hidden");
			hiddenInput.setAttribute("id", key + '_hiddeninput');
			hiddenInput.setAttribute("name", key);
			hiddenInput.setAttribute("value", json_obj[key]);
			theForm.appendChild(hiddenInput);
		}
	}

	if (record_id && !dont_set_record_id) {
		var record_id_field = document.getElementById(record_id_param);
		if (!record_id_field) {
			//make it. no excuses.
			record_id_field = document.createElement("input");
			record_id_field.setAttribute("type", "hidden");
			record_id_field.setAttribute("id", record_id_param);
			record_id_field.setAttribute("name", record_id_param);
			theForm.appendChild(record_id_field);
		}

		record_id_field.value = record_id;
  }

  submit_form(runmode);
}

function redirectRunmode(runmode) {
	//borrowed from ancient code, going to use for a cancel button on forms to go somewhere else without actually submitting.
		//except that wont work because we are a js file, not a template that is being processed by HTC.
	//window.parent.location.href = '<TMPL_VAR name="SCRIPT_NAME">?rm=' + runmode;
	alert ('redirectRunmode is NYI, please do something about that');
}
function HACKISHredirectRunmode(script_url, runmode) {
	//borrowed from ancient code, going to use for a cancel button on forms to go somewhere else without actually submitting.
		//except that wont work because we are a js file, not a template that is being processed by HTC.
	window.parent.location.href = script_url + '?rm=' + runmode;
}

function editformCancel(record_id, record_id_param, runmode) {
	var jq_dom_els = $('#editform_cancelled').val(1);
	if (!jq_dom_els.length) { 
		alert('editformCancel: error setting editform_cancelled var.');
	} else {
		submitRecordId(record_id, record_id_param, runmode, 'editformCancel');
	}
}

/*
Functions that might be very general purpose and hopefully not too gay.
*/
function submit_form(runmode, url_target) {
	if (!runmode) {
		alert('error: submit_form without a runmode. sorry.'); return false;
	}
	var my_target = "_self";
	if( url_target ) {
		my_target = url_target;
	}

	$( "form[main_form]" ).attr( "target", my_target );
	document.main_form.rm.value = runmode;
	document.main_form.submit();
	//alert('after submit');
}

function submit_form_target(runmode, target) {
    if (!runmode) {
        alert('error: submit_form without a runmode. sorry.'); return false;
    }
	var saved_target = document.getElementById("main_form").target;
    var my_target = "_self";
    if( target ) {
        my_target = target;
    }
//    $( "form[main_form]" ).attr( "target", my_target );
	document.getElementById("main_form").target = my_target;
    document.main_form.rm.value = runmode;
    document.main_form.submit();
    //alert('after submit');
	document.getElementById("main_form").target = saved_target;
}

function relatedDeleteButton(operation, record_id, record_id_param, runmode, note) {
        document.main_form.related_record_operation_type.value = operation;

//      alert( 'relatedDeleteButton ' + operation + ' ' + record_id + ' ' + record_id_param + ' ' + runmode );

//      submitRecordId(record_id, record_id_param, runmode, note);
        submit_form(runmode);
}


function relatedButton(operation, record_id, record_id_param, runmode, note) {
        document.main_form.related_record_operation_type.value = operation;

//      alert( 'relatedButton ' + operation + ' ' + record_id + ' ' + record_id_param + ' ' + runmode );

        submitRecordId(record_id, record_id_param, runmode, note);
//      submit_form(runmode);
}

function submitRecordId(record_id, record_id_param, runmode, note) {
//DumperAlert({'r':record_id, 'rp':record_id_param, 'rm':runmode, 'note':note});
	
	if (record_id) {
		var record_id_field = $('#' + record_id_param);
		if (record_id_field.length) {
			record_id_field.val(record_id);
		} else {
			alert(note + ': error finding record_id param to set its value');
		}
	}
  submit_form(runmode);
}

//Taken from javascript.about.com, god only knows where they got it from.
function main_form_checkenter(event, arg) { 	
	//alert('here1');
	var NS4 = (document.layers) ? true : false;
	var code = 0;
	if (NS4) { code = event.which; } else { code = event.keyCode;	}
	if (code==13) { 
		if (typeof(arg) == 'string') {
			submit_form(arg);	
		} else if (typeof(arg) == 'function') {
			arg(); //execute said function. hopefully it submits the form! probably does some other stuff first tho, hence the purpose of adding ability to call functions instead.
		}
	}
}


///////// Adding stuff 2007 01 30
function initAllRadioControlledFields() { 

	for (var radioParam in rcfControl) {
		//DumperAlert(['have to control a group using this:', control]);
		//attaching the event to the radio button through code. inlining it I have no idea how to access the "this" object which means I have no idea what radio button luser clicked on.
		//each radio button has a different ID for the label stuff. that id is like param_radiovalue
		//alert(radioParam);
		
		if (rcfControl[radioParam]['control_type'] == 'radio') {
			//radio button controls some subfields
			for (var i = 0; i < rcfControl[radioParam]['control'].length; i++) {
				//DumperAlert(radioEntry[i]);
				var entryId = radioParam + '_' + rcfControl[radioParam]['control'][i]['value'];
				var radioBtn = document.getElementById(entryId);
				if (!radioBtn) { throw new Error ("Error: Failed to obtain a radio button by id of " + entryId + " which means no onclick/change event can be attached which is pretty fatal.");	}
				//alert('attaching onchange event to a radio button with an id like: ' + entryId);
				addEvent(radioBtn, 'click', rcfRadioChange); //click NOT change ... stupid IE.
			}
		} else if (rcfControl[radioParam]['control_type'] == 'select') {
			//select box controls some subfields
			var entryId = radioParam + '_controlselect';
			var selectBox = document.getElementById(entryId);
			if (!selectBox) { throw new Error ("Error: Failed to obtain a select box by id of " + entryId + " which means no onclick/change event can be attached which is pretty fatal.");	}
			addEvent(selectBox, 'change', rcfRadioChange);
			addEvent(selectBox, 'keypress', rcfRadioChange); //experimental, adding keypress event as well to allow arrowing through the list. seems to work right.
		}

		//begin setup of the field (select or textbox at this point) related to this set of radio buttons.
		initRadioControlledField(radioParam);
	}

}

function initRadioControlledField(radioParam) {
	//this is called individually for each radio button group that has to control other field(s) (select or textbox).
	//alert('doing initRadioControlledField');

	if (!radioParam) {
		throw new Error('Badness: no radioParam in initRadioControlledField');
	}
	
	
	//obtain target area for the select to go into.
	var selectDivId = radioParam + '_select_container';
	var selectDiv = document.getElementById(selectDivId);
	if (!selectDiv) { throw new Error ('why is there no select target div with id like ' + selectDivId + '???'); }

	//obtain target area for the textbox to go into.
	var textboxDivId = radioParam + '_textbox_container';
	var textboxDiv = document.getElementById(textboxDivId);
	if (!textboxDiv) { throw new Error ('why is there no select target div with id like ' + textboxDivId + '???'); }
	
	//does the radio have a value?
	//var radioGrp = document.forms["main_form"][radioParam];
//	var radioGrp = document.getElementById("main_form").elements[radioParam];
//	if (!radioGrp) {
//		throw new Error('Badness: no radioGrp in initRadioControlledField');
//	}

	//var radioValue = getSelectedRadioValue(radioGrp);
	var radioValue = rcfControl[radioParam]['radio_selected_value'];
//	if (radioGrp && radioValue) {
	if (radioValue) {
//		setSelectedRadioValue(radioGrp, radioValue);
		setSelectedControlValue(radioParam, radioValue);
	}

	//create the select
	selectParam = rcfControl[radioParam]['select_parameter_name'];
	var controlledSelect = document.createElement('select');
	controlledSelect.setAttribute("name", selectParam);
	controlledSelect.setAttribute("id", selectParam);
	controlledSelect.setAttribute("dir", 'ltr');
	var selectClassName = 'editform_input';
	if (rcfControl[radioParam]['subfield_styles'] && rcfControl[radioParam]['subfield_styles']['sub_select_classname']) {
		selectClassName = rcfControl[radioParam]['subfield_styles']['sub_select_classname'];
	}
	controlledSelect.className = selectClassName;

	//create the textbox
	textParam = rcfControl[radioParam]['text_parameter_name'];
	var controlledTextbox = document.createElement('input');
	controlledTextbox.setAttribute("name", textParam);
	controlledTextbox.setAttribute("id", textParam);
	controlledTextbox.setAttribute("type", 'text');
	var textboxClassName = 'editform_input';
	if (rcfControl[radioParam]['subfield_styles'] && rcfControl[radioParam]['subfield_styles']['sub_text_classname']) {
		textboxClassName = rcfControl[radioParam]['subfield_styles']['sub_text_classname'];
	}
	controlledTextbox.className = textboxClassName;
	
	//throw new Error("stopping right after you should see a select box on the screen");
	
	//add a blank/title option to the select if no value was already chosen, otherwise update it to reflect currently chosen option.
	if (!radioValue) {
		//nothing currently chosen for the radio
			//not sure what we actually want to do now with the 'evolved' requirements. probably show just a text node maybe. dunno yet. 
//		var blankEntryDisplay = "Select " + rcfControl[radioParam]['blankitem_label'] + " Above ..."; //this may need text specifically relating to picking an option of the radios above ... in which case that will need to be coded for. for now, nice generic message.
//		var blankEntry = document.createElement('option');
//		blankEntry.setAttribute('value', '');
//		blankEntry.appendChild(document.createTextNode(blankEntryDisplay));
//		controlledSelect.appendChild(blankEntry);
	} else {
		//something currently chosen for the radio - call the function to fix the selectbox for already chosen radiovalue.
			//also, pass the controlledSelect dropdown DOM object since we havent actually put it in the DOM yet.
		//alert('initRadioControlledField: going to call updateRadioControlledSingleselect');
		updateRadioControlledSingleselect(radioParam, controlledSelect);
		updateRadioControlledTextbox(radioParam, controlledTextbox);
	}

	//and add the select to the div to put it on the screen.
	selectDiv.appendChild(controlledSelect);
	textboxDiv.appendChild(controlledTextbox);
}

function rcfRadioChange() {
	//find out what radio button changed, then call the function to fix the select for it. this func mainly needed b/c we want to be able to have several of these things on the form if so needed.
	//alert('rcfRadioChange (as in the onchange event was triggerd): going to call updateRadioControlledSingleselect');
	var radioParam = this.name;
	if (!radioParam) {
		throw new Error('Badness: no radioParam in rcfRadioChange');
	}
	//alert('radio was changed. The param for that radio is: ' + radioParam);
	updateRadioControlledSingleselect(radioParam);
	updateRadioControlledTextbox(radioParam);
}

function updateRadioControlledSingleselect(radioParam, controlledSelect) {
	//alert('updateRadioControlledSingleselect: gonna have to set the current select dropdown up for this radioParam:' + radioParam);

//	var radioGrp = document.forms["main_form"][radioParam];
//	var radioValue = getSelectedRadioValue(radioGrp);
	var radioValue = getSelectedControlValue(radioParam);

	//if the radio button is to show something other than a select, then we probably have nothing more to do here.
	var selectDivId = radioParam + '_select_container';
	var selectDiv = document.getElementById(selectDivId);
	if (!selectDiv) { throw new Error ('why is there no select target div with id like ' + selectDivId + '???'); }
	if (rcfControl[radioParam]['value_to_type_map'][radioValue] != 'select') {
		//its not for a select! hide the select (div)! and do nothing else.
		selectDiv.style.display    = 'none';
		selectDiv.style.visibility = 'hidden';
		return false;
	} 
	
	//later, since being past here means it is a select, we will ensure the select is showing once we've set its values up.
	
	var selectParam = null;
	selectParam = rcfControl[radioParam]['select_parameter_name'];
	
	//get the selectbox we are to update. the selectParam ___MUST___ be the same as the id used for the select. that lets the following work:
		//we might have been passed this in during the intial set up but for the onchange events we'll have to pick it out of the DOM.
	if (!controlledSelect) { 
		controlledSelect = document.getElementById(selectParam);
	}
	if (!controlledSelect) {
		throw new Error('badness: no select was obtained with selectParam like: ' + selectParam); 
	}

	//figure out which radio is chosen and obtain the selectEntires related to it
	var selectEntries = null;
	var blankEntryDisplay = null;
	for (var i = 0; i < rcfControl[radioParam]['control'].length; i++) {
		var radioControl = rcfControl[radioParam]['control'][i]; 
		//DumperAlert(radioEntry[i]);
		if (radioValue == radioControl['value']) {
			selectEntries = radioControl['select_entries'];
			var blankEntryPreLabel = radioControl['blankitem_prelabel'] ? radioControl['blankitem_prelabel'] : 'Select';
			blankEntryDisplay = blankEntryPreLabel + ' ' + radioControl['display_name'] + ' ' + radioControl['blankitem_label'] + ' ...';
			break;
		}
	}	
	//kill self if we couldnt get the selectentries.
	if (!selectEntries) {
		throw new Error('badness: failed to obtain select entries for the chosen radio.'); 
	}
	//alert('getting there ... need to add the options now to the selcet for selectParam: ' + selectParam + ' now.');
	//DumperAlert(['set up the select with these entries:', selectEntries]);

	//empty the select of all its items. even the blank one, since the blank one will have to reflect the chosen radio.	
	while (controlledSelect.childNodes.length) {
		controlledSelect.removeChild(controlledSelect.childNodes[0]);
	}
	//alert('select should be empty of items now');

	//set up blank entry with some text about the selected radio
	var blankEntry = document.createElement('option');
	blankEntry.setAttribute('value', '');
	blankEntry.appendChild(document.createTextNode(blankEntryDisplay));
	controlledSelect.appendChild(blankEntry);
	//alert('select should have new "blank" item');

	var selectValue = rcfControl[radioParam]['select_selected_value'];

	//add all the real options for the select.
	for (var i = 0; i < selectEntries.length; i++) {
		//alert('should be adding a listoption for a month
		var selectEntry = document.createElement('option');
		selectEntry.setAttribute('value', selectEntries[i]['value']);
		if (selectValue && selectValue == selectEntries[i]['value']) {
			selectEntry.setAttribute('selected', 1);
			rcfControl[radioParam]['select_selected_value'] = null; //clear it after first use. this is to effect the desired behavior and thwart the following: if you retry the form with a selected select itme, click off to a different control radio, and click back to the retried one, are you still on the trety select item or is it cleared? (yes ...) It should be cleared.
		}
		selectEntry.appendChild(document.createTextNode(selectEntries[i]['display_name'])); //give the option its display text. (displays formatted month)
		controlledSelect.appendChild(selectEntry);
	}	
	//alert('select should be populated with all new values.');

	//make sure its on the screen.
	selectDiv.style.display    = 'block';
	selectDiv.style.visibility = 'visible';
	//alert('see the selectbox');
}

function updateRadioControlledTextbox(radioParam, controlledTextbox) {
	//not sure what to do next.

//	var radioGrp = document.forms["main_form"][radioParam];
//	var radioValue = getSelectedRadioValue(radioGrp);
	var radioValue = getSelectedControlValue(radioParam);

	//if the radio button is to show something other than a textbox, then we probably have nothing more to do here.
	var textboxDivId = radioParam + '_textbox_container';
	var textboxDiv = document.getElementById(textboxDivId);
	if (!textboxDiv) { throw new Error ('why is there no textbox target div with id like ' + textboxDivId + '???'); }
	if (rcfControl[radioParam]['value_to_type_map'][radioValue] != 'text') {
		//its not for a textbox! hide the textbox (div)! and do nothing else.
		textboxDiv.style.display    = 'none';
		textboxDiv.style.visibility = 'hidden';
		return false;
	} 
	
	//later, since being past here means it is a textbox, we will ensure the textbox is showing once we've set its values up.
	
	var textboxParam = null;
	textboxParam = rcfControl[radioParam]['text_parameter_name'];
	
	//get the textboxbox we are to update. the textboxParam ___MUST___ be the same as the id used for the textbox. that lets the following work:
		//we might have been passed this in during the intial set up but for the onchange events we'll have to pick it out of the DOM.
	if (!controlledTextbox) { 
		controlledTextbox = document.getElementById(textboxParam);
	}
	if (!controlledTextbox) {
		throw new Error('badness: no textbox was obtained with textboxParam like: ' + textboxParam); 
	}
	
	var textValue = rcfControl[radioParam]['text_value'];
	if (textValue) {
		controlledTextbox.value = textValue;
		rcfControl[radioParam]['text_value'] = null; //clear so as not to redisplay when user changes options.
	} else {
	 //ensure it doesnt have a value if we are showing it for fresh.
	 controlledTextbox.value = '';
	}	 

	////// Here something probably has to happen to what the textbox has in it.
	//which would be check if there was a retry value (	var selectValue = rcfControl[radioParam]['select_selected_value']; ) but for textbox
	// and i dunno .. hey question  same goes for the text value here. ugh.

	//make sure its on the screen.
	textboxDiv.style.display    = 'block';
	textboxDiv.style.visibility = 'visible';
	//alert('see the textbox');

}

function getSelectedControlValue(radioParam) {
	if (rcfControl[radioParam]['control_type'] == 'radio') {
		var radioGrp = document.getElementById("main_form").elements[radioParam];
		if (!radioGrp) {
			throw new Error('getSelectedControlValue: no radioGrp in getSelectedControlValue');
		}
		return getSelectedRadioValue(radioGrp);
	} else if (rcfControl[radioParam]['control_type'] == 'select') {
		var selectBox = document.getElementById("main_form").elements[radioParam];
		if (!selectBox) {
			throw new Error('getSelectedControlValue: no selectBox in getSelectedControlValue');
		}
		return getSelectedSelectValue(selectBox);
	} else {
		throw new Error ('getSelectedControlValue: unknown control field type');
	}
}

function setSelectedControlValue(radioParam, value) {
	if (rcfControl[radioParam]['control_type'] == 'radio') {
		var radioGrp = document.getElementById("main_form").elements[radioParam];
		if (!radioGrp) {
			throw new Error('setSelectedControlValue: no radioGrp in setSelectedControlValue');
		}
		return setSelectedRadioValue(radioGrp, value);
	} else if (rcfControl[radioParam]['control_type'] == 'select') {
		var selectBox = document.getElementById("main_form").elements[radioParam];
		if (!selectBox) {
			throw new Error('setSelectedControlValue: no selectBox in setSelectedControlValue');
		}
		return setSelectedSelectValue(selectBox, value);
	} else {
		throw new Error ('setSelectedControlValue: unknown control field type');
	}
}

//Thanks to http://www.breakingpar.com/bkp/home.nsf/0/CA99375CC06FB52687256AFB0013E5E9
	//though I want a value not a state.
//function getSelectedRadio(buttonGroup) {
function getSelectedRadioValue(buttonGroup) {
   // returns the array number of the selected radio button or -1 if no button is selected
   if (buttonGroup[0]) { // if the button group is an array (one button is not an array)
      for (var i=0; i<buttonGroup.length; i++) {
         if (buttonGroup[i].checked) {
            //return i
            return buttonGroup[i].value;
         }
      }
   } else {
      //if (buttonGroup.checked) { return 0; } // if the one button is checked, return zero
      if (buttonGroup.checked) { return buttonGroup.value; }
   }
   // if we get to this point, no radio button is selected
   return null;
} // Ends the "getSelectedRadio" function

function setSelectedRadioValue(buttonGroup, buttonValue) {
	//sets a radio button selection based on a passed in radiogroup and value to find/set.
   if (buttonGroup[0]) { // if the button group is an array (one button is not an array)
      for (var i=0; i<buttonGroup.length; i++) {
         if (buttonGroup[i].value == buttonValue) {
						buttonGroup[i].checked = 1;
         }
      }
   } else {
      //if (buttonGroup.checked) { return 0; } // if the one button is checked, return zero
      if (buttonGroup.value == buttonValue) { buttonGroup.checked = 1; }
   }
   return null;
}

function getSelectedRadioId(buttonGroup) {
   // returns the array number of the selected radio button or -1 if no button is selected
   if (buttonGroup[0]) { // if the button group is an array (one button is not an array)
      for (var i=0; i<buttonGroup.length; i++) {
         if (buttonGroup[i].checked) {
            //return i
            return buttonGroup[i].id;
         }
      }
   } else {
      //if (buttonGroup.checked) { return 0; } // if the one button is checked, return zero
      if (buttonGroup.checked) { return buttonGroup.id; }
   }
   // if we get to this point, no radio button is selected
   return null;
} // Ends the "getSelectedRadio" function

//couple functions for accessing selectbox values
function getSelectedSelectValue(selectBox) {
	return selectBox[selectBox.selectedIndex].value;
}

//returns the values of the selected cboxes in the buttongroup.
function getSelectedCboxValues(buttonGroup) {
   var checkedValues = [];
   if (buttonGroup[0]) { // if the button group is an array (one button is not an array)
      for (var i=0; i<buttonGroup.length; i++) {
         if (buttonGroup[i].checked) {
            checkedValues.push(buttonGroup[i].value);
         }
      }
   } else {
      //if (buttonGroup.checked) { return 0; } // if the one button is checked, return zero
      if (buttonGroup.checked) { checkedValues.push(buttonGroup.value); }
   }
   // if we get to this point, no radio button is selected
   return checkedValues;
} // Ends the "getSelectedCboxValues" function

// -------------------------------------------------------------------------
//  Name: setSelectedSelectValue (was SelectOptionInList)
//  Abstract: Given a select list and an ID search the list for the option with
//                  the matching ID and select it.
//  Ripped From: http://www.experts-exchange.com/Programming/Languages/Scripting/JavaScript/Q_21324403.html?qid=21324403
//		(then chopped a bit by CH)
// -------------------------------------------------------------------------
function setSelectedSelectValue( selectBox, value ) {
	// Loop through all the options
	for( var i = 0; i < selectBox.options.length; i++ ) {
		// Is this the value we are looking for?
		if( selectBox.options[i].value == value ) {
			// Select it and stop searching.
			selectBox.selectedIndex = i;
			break;
		}
	}
} // setSelectedSelectValue

function setSelectedRadioValue(buttonGroup, buttonValue) {
	//sets a radio button selection based on a passed in radiogroup and value to find/set.
   if (buttonGroup[0]) { // if the button group is an array (one button is not an array)
      for (var i=0; i<buttonGroup.length; i++) {
         if (buttonGroup[i].value == buttonValue) {
						buttonGroup[i].checked = 1;
         }
      }
   } else {
      //if (buttonGroup.checked) { return 0; } // if the one button is checked, return zero
      if (buttonGroup.value == buttonValue) { buttonGroup.checked = 1; }
   }
   return null;
}



////JSON STUFF 
////This code below comes from http://trimpath.com/project/wiki/JsonLibrary
//     which is based on code at http://www.json.org/json.js (but this code at this url is evil  that overrides object.prototype and s up lots of other things)
//     and an even more advanced rewriting of SteveYen's version can be found at http://www.thomasfrank.se/downloadableJS/jsonStringify.js
/*
Copyright (c) 2002 JSON.org

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

The Software shall be used for Good, not Evil.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
*/

toJsonString = function(arg) {
    return toJsonStringArray(arg).join('');
}

toJsonStringArray = function(arg, out) {
    out = out || new Array();
    var u; // undefined

    switch (typeof arg) {
    case 'object':
        if (arg) {
            if (arg.constructor == Array) {
                out.push('[');
                for (var i = 0; i < arg.length; ++i) {
                    if (i > 0)
                        out.push(',\n');
                    toJsonStringArray(arg[i], out);
                }
                out.push(']');
                return out;
            } else if (typeof arg.toString != 'undefined') {
                out.push('{');
                var first = true;
                for (var i in arg) {
                    var curr = out.length; // Record position to allow undo when arg[i] is undefined.
                    if (!first)
                        out.push(',\n');
                    toJsonStringArray(i, out);
                    out.push(':');                    
                    toJsonStringArray(arg[i], out);
                    if (out[out.length - 1] == u)
                        out.splice(curr, out.length - curr);
                    else
                        first = false;
                }
                out.push('}');
                return out;
            }
            return out;
        }
        out.push('null');
        return out;
    case 'unknown':
    case 'undefined':
    case 'function':
        out.push(u);
        return out;
    case 'string':
        out.push('"')
        out.push(arg.replace(/(["\\])/g, '\\$1').replace(/\r/g, '').replace(/\n/g, '\\n'));
        out.push('"');
        return out;
    default:
        out.push(String(arg));
        return out;
    }
}
//CH adds: (but this is baby easy anyway)
function fromJsonString(textStr) {
	if (!textStr) {
		//maybe should be testing value better before bailing.
		return null;
	}

	var myObject;
	try {
		myObject = eval('(' + textStr + ')'); //copied from http://www.json.org/js.html
	} 
	catch(e) {
		//exception in evalling ... whatever who cares, just send back null then.
		alert('fromJsonString error: exception turning text str:"' + textStr + '" into a json data structure.');
		return null;
	}
	return myObject;
}

//bulk of this code ripped from http://www.go4expert.com/forums/showthread.php?t=2163
//originally I used this in the advisors.lakeviewfunds.com mini signup thing.
function getQueryParams() {
	// get the current URL
	var url = window.location.toString();
	//get the parameters
	url.match(/\?(.+)$/);
	var params = RegExp.$1;
	
	// split up the query string and store in an associative array
	var params = params.split("&");
	var queryStringList = {};
	
	for(var i=0;i<params.length;i++) {
		var tmp = params[i].split("=");
		queryStringList[tmp[0]] = decodeURIComponent(tmp[1]);
	}
	
	return queryStringList;
}

/// This function below is just here to be an exmaple of how to use the getQueryParams function.
////////////////////Functions that are specific to this install that could but wont be placed into another js file:
//function setEmailAddress() {
//	//var url = window.location.toString();
//	//url.match(/\?.*emailAddress=(.*)\&?.*/);
//	//var email = RegExp.$1;
//	var email = getQueryParams()['emailAddress'];
//
//	var target_fld = document.getElementById('emailAddress');
//	if (target_fld) {
//		target_fld.value = email;
//	}
//	//alert('the email is: ' + email);
//}

//2009 04 03 a new idea (well, finally implementing a rather old one) for page context to be able to embed arbitrarily complex JSON data structure in the page for context and passing multiple params around without having to do a lot of work.
	//some ideas for further improvement: 
		//definitely need to add the json_context textarea to the DOM if we are attempting to set a context variable in a screen that hasnt had json_context sent to it (b/c the templating in admin master will not render the json_context textarea if it wasnt set as a template var)
		//also was thinking of getContextVar and setContextVar which could cut out a couple lines of code in things that will call these ones I have implemented below (in typical usages anyway)
function getContext() {
	var json_context = $('#json_context');
	var context = {};
	if (!json_context.length) {
		alert('could not set context - need to implement some DOM stuff to do it since the field is not there right now.')
		return context;
	}
	context = eval('(' + json_context.val() + ')');
	return context;
}
function setContext(context) {
	var json_context = $('#json_context');
	if (!json_context.length) {
		alert('could not set context - need to implement some DOM stuff to do it since the field is not there right now.')
		return false;
	}
	json_context.val(toJsonString(context));
}
function setContextVars(vars) {
	var context = getContext();
	for (var i in vars) {
		context[i] = vars[i];
	}
	setContext(context);
}
function randomer() {
	return 	Math.round(1000000*Math.random());
}

String.prototype.trim = function () {
    return this.replace(/^\s*/, "").replace(/\s*$/, "");
}

function checkRegexp( field_id, pattern ) {
    var mystring = $( '#' + field_id ).val();
    if( mystring.match( /pattern/ ) ) {
        return true;
    }

    return false;
}

function checkNotNull( field_id ) {
    var mystring = $( '#' + field_id ).val();
    mystring = mystring.trim();

    if( mystring.length > 0 ) {
        return true;
    }

    return false;
}

function select_all_class( class_name ) {
	$( "." + class_name ).attr('checked', true);
}

function unselect_all_class( class_name ) {
	$( "." + class_name ).attr('checked', false);
}

