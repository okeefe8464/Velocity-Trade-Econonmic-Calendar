
	function set_rtes( ) {
		$( '.rte' ).ckeditor( {
			customConfig : "/includes/qtrade_rte.js"
		} );
	}

	function clear_rtes( ) {
		$( '.rte' ).each( function( index, element ) {
			$( this ).ckeditor( function() {
				this.destroy();
			} );
		} );
	}

	function update_rtes() {
		$( '.rte' ).each( function( index, element ) {
			$( this ).ckeditor( function() {
				this.updateElement();
			} );
		} );
	} 

//	function product_set_view( view_type ) {
//		$( ".product_selected" ).hide();
//		$( ".product_view" ).hide();
//		$( "#product_" + view_type + "_selected" ).show();
//		$( "#product_" + view_type + "_selected_excel" ).show();
//		$( "#product_" + view_type + "_view" ).show();
//		$( "#product_" + view_type + "_bc" ).show();
//
//		var post_data = {
//			'rm':'product_set_view',
//			'product_view':view_type,
//			'randomer':randomer()
//		};
//
//		ajax_call( post_data );
//	}
//
//	function ajax_call_success( data, status ) {
////		alert( 'Error' );
//	}
//
//	function ajax_call_error( xhr, status ) {
////		alert( 'Success' );
//	}
//
//	function ajax_call( post_data )
//	{
//		var ajax_param = {
//			'url': $('form#main_form').attr('action'),
//			'type':'POST',
//			'dataType':'html',
//			'data':post_data,
//			'cache':false,
//			'error':ajax_call_error,
//			'success':ajax_call_success
//		};
//		if( post_data['pick'] ) {
//			ajax_param['success'] = ajax_call_success_pick;
//		}
//		if( post_data['success_cb'] ) {
//			ajax_param['success'] = post_data['success_cb'];
//			post_data['success_cb'] = 0;
//		}
//		if( post_data['error_cb'] ) {
//			ajax_param['error'] = post_data['error_cb'];
//			post_data['error_cb'] = 0;
//		}
//
////		alert( 'pre-ajax' );
//
//		$.ajax( ajax_param );
//
//		return;
//	}
//
//// All of the functions for the overlay
//
//function show_popover() {
//	$( '#overlay_base_2' ).show();
//	$( '#overlay_table' ).show();
//
//	show_popover_signup();
//}
//
//function hide_popover() {
//	$( '#overlay_base_2' ).hide();
//	$( '#overlay_table' ).hide();
//
//	reset_tops();
//}
//
//function show_popover_2( top_number, bottom_type ) {
//	$( '#overlay_base_2' ).show();
//	$( '#overlay_table_2' ).show();
//	$( '#top_wrapper > div' ).hide();
//	$( '#top_' + top_number ).show();
//
//	show_popover_signup();
//
//	if( bottom_type == 'login' ) {
//		show_popover_login();
//	} else if( bottom_type == 'reset' ) {
//		show_popover_login();
//		over_login_reminder_show();
//	} 
//}
//
//function hide_popover_2() {
//	$( '#overlay_base_2' ).hide();
//	$( '#overlay_table_2' ).hide();
//
//	reset_tops();
//}
//
//function show_popover_login() {
//	$( '#over_signup_title' ).hide();
//	$( '#over_login_title' ).show();
//
//	$( '#over_signup_switch' ).hide();
//	$( '#over_login_switch' ).show();
//
//	$( '#over_email' ).show();
//	$( '#over_email' ).css( 'color', '#003474' );
//	$( '#over_email_input' ).show();
//	$( '#over_password' ).show();
//	$( '#over_password_input' ).show();
//	$( '#over_first_name' ).hide();
//	$( '#over_first_name_input' ).hide();
//	$( '#over_last_name' ).hide();
//	$( '#over_last_name_input' ).hide();
//	$( '#over_company' ).hide();
//	$( '#over_company_input' ).hide();
//	$( '#over_password_retype' ).hide();
//	$( '#over_password_retype_input' ).hide();
//
//	$( '#over_signup_mailing' ).hide();
//	$( '#over_login_reminder' ).show();
//	$( '#over_login_promo' ).show();
//
//	$( '#over_login_reminder_button' ).hide();
//	$( '#over_signup_button' ).hide();
//	$( '#over_login_button' ).show();
//
//	$( '#over_passwd_remind' ).hide();
//	$( '#over_user_pass_invalid' ).hide();
//	$( '#over_email_in_use' ).hide();
//	$( '#over_login_reminder_help' ).hide();
//
//	$( '#layer' ).val( 'over_login' );
//
//	$( '#over_data_entry' ).show();
//	$( '#over_email_input' ).focus();
//}
//
//function show_popover_signup() {
//	$( '#over_login_title' ).hide();
//	$( '#over_signup_title' ).show();
//	$( '#over_register' ).show();
//
//	$( '#over_login_switch' ).hide();
//	$( '#over_signup_switch' ).show();
//
//	$( '#over_email' ).show();
//	$( '#over_email' ).css( 'color', '#003474' );
//	$( '#over_email_input' ).show();
//	$( '#over_password' ).show();
//	$( '#over_password_input' ).show();
//	$( '#over_first_name' ).show();
//	$( '#over_first_name_input' ).show();
//	$( '#over_last_name' ).show();
//	$( '#over_last_name_input' ).show();
//	$( '#over_company' ).show();
//	$( '#over_company_input' ).show();
//	$( '#over_password_retype' ).show();
//	$( '#over_password_retype_input' ).show();
//
//	$( '#over_signup_mailing' ).show();
//	$( '#over_login_reminder' ).hide();
//	$( '#over_login_promo' ).hide();
//	$( '#over_logged_in' ).hide();
//	$( '#over_registered' ).hide();
//
//	$( '#over_signup_button' ).show();
//	$( '#over_login_button' ).hide();
//	$( '#over_login_reminder_button' ).hide();
//
//	$( '#over_passwd_remind' ).hide();
//	$( '#over_user_pass_invalid' ).hide();
//	$( '#over_email_in_use' ).hide();
//	$( '#over_login_reminder_help' ).hide();
//
//	$( '#layer' ).val( 'over_signup' );
//
//	$( '#over_data_entry' ).show();
//	$( '#over_email_input' ).focus();
//}
//
//function show_popover_signup_ok() {
//	$( '#over_register' ).hide();
//	$( '#over_registered' ).show();
//	$( '#over_signup_switch' ).hide();
//
//	$( '#layer' ).val( '' );
//}
//
//function show_popover_login_ok() {
//	$( '#over_register' ).hide();
//	$( '#over_logged_in' ).show();
//	$( '#over_login_switch' ).hide();
//
//	$( '#layer' ).val( '' );
//}
//
//function over_login_reminder_show() {
//	$( '#over_password' ).hide();
//	$( '#over_password_input' ).hide();
//	$( '#over_login_reminder' ).hide();
//	$( '#over_login_promo' ).hide();
//	$( '#over_login_reminder_button' ).show();
//	$( '#over_login_button' ).hide();
//	$( '#over_login_reminder_help' ).show();
//
//	$( '#layer' ).val( 'over_remind' );
//
//	$( '#over_email_input' ).focus();
//}
//
//function over_login_reminder() {
//	$( '#over_email' ).css( 'color', '#003474' );
//	$( '#over_password' ).css( 'color', '#003474' );
//	$( '#over_passwd_remind' ).hide();
//	$( '#over_user_pass_invalid' ).hide();
//
//	var username = $.trim( $( '#over_email_input' ).val() );
//
//	var input_error = 0;
//
//	if( username.length == 0 ) {
//		$( '#over_email' ).css( 'color', '#ff0000' );
//		input_error = 1;
//	}
//
//	if( input_error > 0 ) {
//		return;
//	}
//
//	var registration = $( '#registration' ).val();
//	var post_data = {
//		'rm':'remind_passwd_popover',
//		'randomer':randomer(),
//		'username':username,
//		'campaign':registration,
//		'admin_email':1,
//		'ajax':1,
//		'success_cb':over_login_success_reminder,
//		'error_cb':over_login_error
//	};
//
//	ajax_call( post_data );
//
//	return;
//}
//
//function over_login() {
//	$( '#over_email' ).css( 'color', '#003474' );
//	$( '#over_password' ).css( 'color', '#003474' );
//	$( '#over_passwd_remind' ).hide();
//	$( '#over_user_pass_invalid' ).hide();
//
//	var username = $.trim( $( '#over_email_input' ).val() );
//	var password = $.trim( $( '#over_password_input' ).val() );
////	var checkbox = $( '#over_login_reminder_input' ).attr( 'checked' );
//
//	var input_error = 0;
//
//	if( username.length == 0 ) {
//		$( '#over_email' ).css( 'color', '#ff0000' );
//		input_error = 1;
//	}
//
////	if( ! checkbox ) {
//		if( password.length == 0 ) {
//			$( '#over_password' ).css( 'color', '#ff0000' );
//			input_error = 1;
//		}
////	}
//
//	if( input_error > 0 ) {
//		return;
//	}
//
////	if( ! checkbox ) {
//	var registration = $( '#registration' ).val();
//
//		var post_data = {
//			'rm':'signin',
//			'randomer':randomer(),
//			'username':username,
//			'password':password,
//			'campaign':registration,
//			'admin_email':1,
//			'ajax':1,
//			'success_cb':over_login_success,
//			'error_cb':over_login_error
//		};
////	} else {
////		var post_data = {
////			'rm':'remind_passwd_popover',
////			'randomer':randomer(),
////			'username':username,
////			'ajax':1,
////			'success_cb':over_login_success_reminder,
////			'error_cb':over_login_error
////		};
////	}
//
//	ajax_call( post_data );
//
//	return;
//}
//
//function over_login_success( data_in, status ) {
//	var data = jQuery.parseJSON(data_in);
//
//	var cx_id = Number(data['cx_id']);
//	if( cx_id < 1 ) {
//		$( '#over_user_pass_invalid' ).show();
//		$( '#over_email' ).css( 'color', '#ff0000' );
//		$( '#over_password' ).css( 'color', '#ff0000' );
//		return;
//	}
//
//	show_popover_login_ok();
//
//	$('#welcome_user').show();
//	$('#fname').html(data['first_name']);
//	$('#lname').html(data['last_name']);
//	$( '#cx_id' ).val( cx_id );
//
//	bottom_right_select_load( 1 );
//
//	return;
//}
//
//function over_login_success_reminder( data_in, status ) {
//	var data = jQuery.parseJSON(data_in);
//
//	var status = Number(data['status']);
//	if( status < 1 ) {
//		$( '#over_email' ).css( 'color', '#ff0000' );
//		return;
//	}
//
//	$( '#over_passwd_remind' ).show();
//	$( '#over_login_reminder_button' ).hide();
//	$( '#over_email' ).hide();
//	$( '#over_email_input' ).hide();
//	$( '#over_login_switch' ).hide();
//	$( '#over_data_entry' ).hide();
//	$( '#over_login_reminder_help' ).hide();
//
//
//	return;
//}
//
//function over_login_error() {
//	alert( 'over_login_error' );
//
//	return;
//}
//
//function over_signup() {
//	 $( '#over_email' ).css( 'color', '#003474' );
//	 $( '#over_first_name' ).css( 'color', '#003474' );
//	 $( '#over_last_name' ).css( 'color', '#003474' );
//	 $( '#over_company' ).css( 'color', '#003474' );
//	 $( '#over_password' ).css( 'color', '#003474' );
//	 $( '#over_password_retype' ).css( 'color', '#003474' );
//	$( '#over_email_in_use' ).hide();
//
//	var username = $.trim( $( '#over_email_input' ).val() );
//	var first_name = $.trim( $( '#over_first_name_input' ).val() );
//	var last_name = $.trim( $( '#over_last_name_input' ).val() );
//	var company = $.trim( $( '#over_company_input' ).val() );
//	var password = $.trim( $( '#over_password_input' ).val() );
//	var password_retype = $.trim( $( '#over_password_retype_input' ).val() );
//	var checked = $( '#over_signup_mailing_input' ).attr( 'checked' );
//	var registration = $( '#registration' ).val();
//
//	var mailing_list = 0;
//	if( checked ) {
//		mailing_list = 1;
//	}
//
//	var input_error = 0;
//
//	if( username.length == 0 ) {
//		$( '#over_email' ).css( 'color', '#ff0000' );
//		input_error = 1;
//	} else {
//		var re = /^[\w\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9\-]+$/;
//
//		if( ! re.test( username ) ) {
//			$( '#over_email' ).css( 'color', '#ff0000' );
//			input_error = 1;
//		}
//	}
//
//	if( first_name.length == 0 ) {
//		$( '#over_first_name' ).css( 'color', '#ff0000' );
//		input_error = 1;
//	}
//
//	if( last_name.length == 0 ) {
//		$( '#over_last_name' ).css( 'color', '#ff0000' );
//		input_error = 1;
//	}
//
//	if( company.length == 0 ) {
//		$( '#over_company' ).css( 'color', '#ff0000' );
//		input_error = 1;
//	}
//
//	if( password.length == 0 ) {
//		$( '#over_password' ).css( 'color', '#ff0000' );
//		input_error = 1;
//	}
//
//	if( password_retype.length == 0 ) {
//		$( '#over_password_retype' ).css( 'color', '#ff0000' );
//		input_error = 1;
//	}
//
//	if( password != password_retype ) {
//		$( '#over_password' ).css( 'color', '#ff0000' );
//		$( '#over_password_retype' ).css( 'color', '#ff0000' );
//		input_error = 1;
//	}
//
//	if( input_error > 0 ) {
//		return;
//	}
//
//	var post_data = {
//		'rm':'add_newuser',
//		'randomer':randomer(),
//		'username':username,
//		'user_fname':first_name,
//		'user_lname':last_name,
//		'company':company,
//		'password':password,
//		'mailing_list':mailing_list,
//		'registration':registration,
//		'no_auto_login':1,
//		'send_email':1,
//		'admin_email':1,
//		'ajax':1,
//		'success_cb':over_signup_success,
//		'error_cb':over_signup_error
//	};
//
//	ajax_call( post_data );
//
//	return;
//}
//
//function over_signup_success( data_in, status ) {
//	var data = jQuery.parseJSON(data_in);
//
//	var cx_id = Number(data['cx_id']);
//	if( cx_id < 1 ) {
//		$( '#over_email' ).css( 'color', '#ff0000' );
//		$( '#over_email_in_use' ).show();
//		return;
//	}
//
//	show_popover_signup_ok();
//
////	window.open("/", '_blank');
//
//	return;
//}
//
//function over_signup_error() {
//	return;
//}
//
//	function search_page(page_num) {
//		$( '#show_page' ).val( page_num );
//		submit_form('product_search_new');
//	}
//
//	function sort_page( sort_param, sort_dir ) {
//		$( '#search_2_sort_param' ).val( sort_param );
//		$( '#search_2_sort_dir' ).val( sort_dir );
//		submit_form('product_search_sort');
//	}
//
//	function product_search_new( search_type ) {
//		var search_2_params = [ 'keywords', 'within', 'sort_param', 'sort_dir', 'cat_1', 'cat_2', 'cat_3', 'cat_4' ];
//		var loop, orig;
//		for ( loop in search_2_params ) {
//			var orig_name = '#search_2_' + search_type + '_' + search_2_params[loop];
//			var dest_name = '#search_2_' + search_2_params[loop];
//			orig = $( orig_name ).val();
////			alert( orig_name + ' ' +  dest_name + ',' + orig );
//			$( dest_name ).val( orig );
//		}
//
//		$( '#new_search' ).val( 1 );
//
//		submit_form('product_search_new');
//	}
//
//	function clear_cat_dropdown( cat_number, type ) {
//		while( cat_number <= 3 ) {
//			$( '#search_2_list_cat_' + cat_number ).empty();
//			$( '#search_2_thumb_cat_' + cat_number ).empty();
//
//			$( '#search_2_list_cat_' + cat_number ).append( '<option value="">All</option>' );
//			$( '#search_2_thumb_cat_' + cat_number ).append( '<option value="">All</option>' );
//
////			$( '#cat_dropdown_list_' + cat_number ).css('visibility','hidden');
////			$( '#cat_dropdown_thumb_' + cat_number ).hide();
//
////			$( '#search_2_list_cat_' + cat_number ).val( '' );
////			$( '#search_2_thumb_cat_' + cat_number ).val( '' );
//
//			cat_number = cat_number + 1;
//		}
//	}
//
//	function cat_success( data_in, status ) {
//		var data = jQuery.parseJSON( data_in );
////		alert( status, data );
//
//		var cat_number = Number(data['cat_number'])+1;
//		if( cat_number >= 4 ) {
//			return;
//		}
//
//		$( '#search_2_list_cat_' + cat_number ).empty();
//		$( '#search_2_thumb_cat_' + cat_number ).empty();
//
//		$( '#search_2_list_cat_' + cat_number ).append( '<option value="">All</option>' );
//		$( '#search_2_thumb_cat_' + cat_number ).append( '<option value="">All</option>' );
//
////		alert( 'cat_number ' + cat_number );
//
//		var got_one = 0;
//		var elem_id;
//		var elem_name;
//		var option;
//		var dr = data['records'];
//		for ( var loop in dr ) {
//			elem_id = dr[loop]['id'];
//			elem_name = dr[loop]['name'];
////			alert( 'elem_id: ' + elem_id + ', elem_name: ' + elem_name );
//
//			option = '<option value="' + elem_id + '">' + elem_name + '</option>';
//			$( '#search_2_list_cat_' + cat_number ).append( option );
//			$( '#search_2_thumb_cat_' + cat_number ).append( option );
//			got_one = 1;
//		}
//
//		if( got_one ) {
//			$( '#cat_dropdown_list_' + cat_number ).css('visibility','visible');
//			$( '#cat_dropdown_thumb_' + cat_number ).show();
//		}
//	}
//
//	function cat_dropdown_change( cat_number, type ) {
//		var value = $( '#search_2_' + type + '_cat_' + cat_number ).val();
////		alert( 'cat_dropdown_change: ' + cat_number + ' ' + type + ',' + value );
//
//		$( '#search_2_list_cat_' + cat_number ).val( value );
//		$( '#search_2_thumb_cat_' + cat_number ).val( value );
//
//		clear_cat_dropdown( cat_number + 1 );
//
//		if( value && value > 0 ) {
//			var post_data = {
//				'rm':'get_cats_from_parent',
//				'randomer':randomer(),
//				'parent_id':value,
//				'cat_number':cat_number,
//				'success_cb':cat_success
//			};
//	
//			ajax_call( post_data );
//		}
//	}
//
//	function within_dropdown_change( type ) {
//		var value = $( '#search_2_' + type + '_within' ).val();
////		alert( 'within_dropdown_change: ' + type + ',' + value );
//
//		$( '#search_2_list_within' ).val( value );
//		$( '#search_2_thumb_within' ).val( value );
//	}
//
//	function anyall_radio_change( type, value ) {
////		alert( 'anyall_radio_change: ' + type + ',' + value );
//
//		$("[name=search_2_list_anyall]").prop("checked",false);
//		$("[name=search_2_thumb_anyall]").prop("checked",false);
//
//		$("[name=search_2_list_anyall]").filter("[value="+value+"]").prop("checked",true);
//		$("[name=search_2_thumb_anyall]").filter("[value="+value+"]").prop("checked",true);
//
//		$("#search_2_anyall").val( value );
//	}
//
//	// These two functions will add/removed the product from a user's favourite
//	// list in the background.  There are no callbacks required for this.
//	// Maybe the callback should change the class of the heart that is shown ???
//
//	function add_favourite( product_id, user_id_unused ) {
//		var user_id = Number( $( '#cx_id' ).val() );
//		if( ! user_id ) {
//			return show_popover_2( 1 );
//		}
//
//		var post_data = {
//			'rm':'add_favourite',
//			'randomer':randomer(),
//			'product_id':product_id,
//			'customer_id':user_id
//		};
//	
//		ajax_call( post_data );
//
//		$( "#fav_list_" + product_id ).show();
//		$( "#fav_full_list_" + product_id ).show();
//		$( "#fav_thumb_" + product_id ).show();
//		$( "#not_fav_list_" + product_id ).hide();
//		$( "#not_fav_full_list_" + product_id ).hide();
//		$( "#not_fav_thumb_" + product_id ).hide();
//	}
//
//	function remove_favourite( product_id, user_id_unused ) {
//		var user_id = Number( $( '#cx_id' ).val() );
//
//		var post_data = {
//			'rm':'remove_favourite',
//			'randomer':randomer(),
//			'product_id':product_id,
//			'customer_id':user_id
//		};
//	
//		ajax_call( post_data );
//
//		$( "#fav_list_" + product_id ).hide();
//		$( "#fav_full_list_" + product_id ).hide();
//		$( "#fav_thumb_" + product_id ).hide();
//		$( "#not_fav_list_" + product_id ).show();
//		$( "#not_fav_full_list_" + product_id ).show();
//		$( "#not_fav_thumb_" + product_id ).show();
//	}
//
//	function run_new_product_search() {
////		document.main_form.rm.value = 'product_search_new';
////		document.main_form.new_search.value = '1';
////		document.main_form.lang.value = 'en';
////		$( '#search_2_keywords' ).val( $( '#keywords' ).val() );
////		$( '#search_2_anyall' ).val( 1 );
////		$( '#search_2_within' ).val( 'sku' );
////		document.main_form.submit();
//
//		var search_2_params = [ 'keywords', 'within', 'sort_param', 'sort_dir', 'cat_1', 'cat_2', 'cat_3', 'cat_4' ];
//		var loop, orig;
//		for ( loop in search_2_params ) {
//			var orig_name = '#search_2_' + search_type + '_' + search_2_params[loop];
//			var dest_name = '#search_2_' + search_2_params[loop];
//			orig = $( orig_name ).val();
////			alert( orig_name + ' ' +  dest_name + ',' + orig );
//			$( dest_name ).val( '' );
//		}
//		$( '#search_2_keywords' ).val( $( '#keywords' ) );
//
//		$( '#new_search' ).val( 1 );
//
//		submit_form('product_search_new');
//	}
//
//	function product_search() {
////		document.main_form.rm.value = 'product_search_new';
////		document.main_form.new_search.value = '0';
////		document.main_form.lang.value = 'en';
////		document.main_form.submit();
//
//		window.location.href = "/cgi-bin/oms.cgi?rm=product_search_new&blank_search=1&list_default=1";
//	}
//	
//	function product_search_favourites( ) {
//		var cx_id = Number( $( '#cx_id' ).val() );
//		if( cx_id < 1 ) {
//			show_popover_2( 1 );
//			return;
//
//			show_error_popover( 'You must be logged in to search for favorites.' );
//			return;
//		}
//
////		document.main_form.rm.value = 'product_search_new';
////		document.main_form.new_search.value = '1';
////		document.main_form.lang.value = 'en';
////		$( '#search_2_cat_1' ).val( 'Favourite' );
////		$( '#search_2_anyall' ).val( 1 );
////		document.main_form.submit();
//
//		window.location.href = "/cgi-bin/oms.cgi?rm=product_search_new&new_search=1&list_default=1&search_2_cat_1=Favorite&search_2_anyall=1";
//	}
//	
//	function my_account() {
//		var cx_id = Number( $( '#cx_id' ).val() );
//		if( cx_id < 1 ) {
//			show_popover_2( 1 );
//			return;
//		}
//
////		document.main_form.rm.value = 'show_signin_form';
////		$( '#cx_profile_signin' ).val( 1 );
////		$( '#lang' ).val( 'en' );
////		document.main_form.submit();
//
//		window.location.href = "/cgi-bin/oms.cgi?rm=show_signin_form&cx_profile_signin=1&lang=en";
//	}
//	
//	//Taken from javascript.about.com, foo only knows where they got it from.
//	function product_search_checkenter(event) {
//		NS4 = (document.layers) ? true : false;
//		var code = 0;
//		if (NS4) { code = event.which; } else { code = event.keyCode; }
//		if (code==13) { run_new_product_search(); }
//	}
//
//	function use_cart_template( cx_id ) {
//		var ct_id = $("input[name=cart_template]:checked").val();
//
//		if( ! ct_id ) {
//			alert( "You need to select a Cart/Template first." );
//			return false;
//		}
//
//		use_cart_template_base( ct_id );
//	}
//
//	function use_cart_template_base( ct_id ) {
//		var cx_id = Number( $( '#cx_id' ).val() );
//
//		$( "#cart_template_id" ).val( ct_id );
//		$( "#cart_template_cx_id" ).val( cx_id );
//		$( "#rm" ).val( 'use_cart_template' );
//
//		var cart_num_items = $( '#cart_num_items' ).val();
//		if( cart_num_items > 0 ) {
//			show_use_cart_confirm();
//		} else {
//			use_cart_confirm();
//		}
//	}
//
//	function use_cart_confirm( ) {
//		document.main_form.submit();
//	}
//
//	function use_order_template_base( ct_id ) {
//		var cx_id = Number( $( '#cx_id' ).val() );
//
//		$( "#cart_template_id" ).val( ct_id );
//		$( "#cart_template_cx_id" ).val( cx_id );
//		$( "#rm" ).val( 'use_order_template' );
//
//		var cart_num_items = $( '#cart_num_items' ).val();
//		if( cart_num_items > 0 ) {
//			show_use_order_confirm();
//		} else {
//			use_order_confirm();
//		}
//	}
//
//	function use_order_confirm( ) {
//		document.main_form.submit();
//	}
//
//	function remove_cart_template( cx_id ) {
//		var ct_id = $("input[name=cart_template]:checked").val();
//
//		if( ! ct_id ) {
//			alert( "You need to select a Cart/Template first." );
//			return false;
//		}
//
//		$( "#cart_template_id" ).val( ct_id );
//		$( "#cart_template_cx_id" ).val( cx_id );
//		$( "#rm" ).val( 'remove_cart_template' );
//
//		document.main_form.submit();
//	}
//
//	function cart_as_pdf() {
//		var num_items = Number( $( '#cart_num_items' ).val() );
//		var cx_id = Number( $( '#cx_id' ).val() );
//
//		if( num_items < 1 ) {
//			show_error_popover( 'There must be items in the cart for this functionality.' );
//			return;
//		}
//
//		if( cx_id < 1 ) {
//			show_popover_2( 1 );
//			return;
//
//			show_error_popover( 'You must be logged in to access this functionality.' );
//			return;
//		}
//		
//		$( "#rm" ).val( 'cart_pdf' );
//
//		document.main_form.submit();
//	}
//
//	var max_excel_pdf_records = 200;
//
//	function view_search_pdf() {
//		var total_records = $( '#total_records' ).val();
//
//		if( total_records >= max_excel_pdf_records ) {
//			show_error_popover( 'You must have fewer than ' + max_excel_pdf_records + ' items in the result search for a PDF.' );
//
//			return;
//		}
//
//		if( total_records < 1 ) {
//			show_error_popover( 'You must have items in the result search for a PDF.' );
//
//			return;
//		}
//
//		window.location.href = "/cgi-bin/oms.cgi?rm=product_search_new&pdf=1";
//	}
//
//	function view_search_excel() {
//		var total_records = $( '#total_records' ).val();
//
//		if( total_records >= max_excel_pdf_records ) {
//			show_error_popover( 'You must have fewer than ' + max_excel_pdf_records + ' items in the result search for an Excel spreadsheet.' );
//
//			return;
//		}
//
//		if( total_records < 1 ) {
//			show_error_popover( 'You must have items in the result search for an Excel spreadsheet .' );
//
//			return;
//		}
//
//		window.location.href = "/cgi-bin/oms.cgi?rm=product_search_new&excel=1";
//	}
//
//	function login_user() {
//		var username = $.trim( $( '#signin_email' ).val() );
//		var password = $.trim( $( '#signin_password' ).val() );
//
////		alert( username + ',' + password );
//
//		if( username.length == 0 ||
//		    password.length == 0 ) {
//
//			$( '.sp_feat_error' ).hide();
//			$( '#login_invalid_username_password' ).show();
//
//			return;
//		}
//
//		var post_data = {
//			'rm':'signin',
//			'randomer':randomer(),
//			'username':username,
//			'password':password,
//			'ajax':1,
//			'success_cb':login_user_success,
//			'error_cb':login_user_error
//		};
//	
//		ajax_call( post_data );
//
//		return;
//	}
//
//	function login_user_success( data_in, status ) {
//		var data = jQuery.parseJSON( data_in );
//
//		var cx_id = Number(data['cx_id']);
//
//		if( cx_id < 1 ) {
//			return login_user_error();
//		}
//
//		hide_sp_feat_popover();
//		$( '.sp_feat_error' ).hide();
//		$( '#logout_image' ).show();
//		$('#welcome_user').show();
//		$('#fname').html(data['first_name']);
//		$('#lname').html(data['last_name']);
//		$( '#cx_id' ).val( cx_id );
//
//		bottom_right_select_load( 1 );
//
//		show_status_popover( 'You are now logged in.' );
//
////		login_get_br_data();
//
//		return;
//	}
//
//	function login_user_error() {
//		$( '.sp_feat_error' ).hide();
//		$( '#login_invalid_username_password' ).show();
//
//		return;
//	}
//
//	function br_login_user() {
//		var username = $.trim( $( '#br_signin_email' ).val() );
//		var password = $.trim( $( '#br_signin_password' ).val() );
//
////		alert( username + ',' + password );
//
//		if( username.length == 0 ||
//		    password.length == 0 ) {
//
//			br_login_user_error();
//
//			return;
//		}
//
//		var post_data = {
//			'rm':'signin',
//			'randomer':randomer(),
//			'username':username,
//			'password':password,
//			'ajax':1,
//			'success_cb':br_login_user_success,
//			'error_cb':br_login_user_error
//		};
//	
//		ajax_call( post_data );
//
//		return;
//	}
//
//	function br_login_user_success( data_in, status ) {
//		var data = jQuery.parseJSON( data_in );
//
//		var cx_id = Number(data['cx_id']);
//
//		if( cx_id < 1 ) {
//			return br_login_user_error();
//		}
//
//		hide_sp_feat_popover();
//		$( '.sp_feat_error' ).hide();
//		$( '#logout_image' ).show();
//		$('#welcome_user').show();
//		$('#fname').html(data['first_name']);
//		$('#lname').html(data['last_name']);
//		$( '#cx_id' ).val( cx_id );
//
//		bottom_right_select_load( 1 );
//
//		show_status_popover( 'You are now logged in.' );
//
////		login_get_br_data();
//
//		return;
//	}
//
//	function br_login_user_error() {
//		show_error_popover( 'The username / password combination is invalid.' );
//
//		return;
//	}
//
//	function login_get_br_data() {
//		var br_data_load = $( '#br_data_load' ).val();
//
//		// check if br data is already loaded
//		if( br_data_load > 0 ) {
//			return;
//		}
//
//		var post_data = {
//			'rm':'get_ajax_home_data',
//			'randomer':randomer(),
//			'ajax':1,
//			'success_cb':br_data_success,
//			'error_cb':br_data_error
//		};
//	
//		ajax_call( post_data );
//	}
//
//	function br_data_success( data_in, status ) {
//		var data = jQuery.parseJSON(data_in);
////JSON.parse( data_in );
//
////		show_error_popover( 'Got ajax data.' );
//
////		$( '#br_data_load' ).val( 1 );
//
//		for( var loop = 1; loop <= 4; loop++ ) {
//			var elem = $( "#br_table_real_" + loop );
//			elem.empty();
//
//		    var loop_obj = data[loop];
//			var headers = loop_obj.headers;
//		    var num_headers = headers.length;
//		
//			var row_string = '<tr>';
//			for( var header_count = 0; header_count < num_headers; header_count++ ) {
//		        var row = headers[ header_count ];
//				if( row['hide'] ) {
//					continue;
//				}
//				row_string += '<td class="f_table_header_01"';
////				row_string += ' valign="top" align="' + row['align'] + '" width="' + row['width'] + '">';
//				row_string += ' valign="top" align="' + row['align'] + '" >';
//				row_string += row['name'];
//				row_string += '</td>';
//			}
//			row_string += '</tr>';
//
//	        elem.append( row_string );
//
//		    var rows = loop_obj.data;
//		    var num_rows = rows.length;
//		
//		    for ( var row_count=0; row_count<num_rows; row_count++ ) {
//		        var row = rows[ row_count ];
//		        var row_string = '<tr>';
//		
//		        var num_cols = row.length;
//
//		        row_string = '<tr>';
//		
//				var odd_row = ( row_count % 2 );
//		        for ( var col_count=0; col_count<num_cols; col_count++ ) {
//		            var col = row[ col_count ];
//					if( col['hide'] ) {
//						continue;
//					}
//
//		            if( odd_row == 0 ) {
//		                row_string += '<td class="f_table_body_01a"';
//		            } else {
//		                row_string += '<td class="f_table_body_02a"';
//		            }
////		            row_string += ' valign="top" align="' + col['align'] + '" width="' + col['width'] + '">';
//		            row_string += ' valign="top" align="' + col['align'] + '" >';
//		            row_string += col['value'];
//		            row_string += '</td>';
//		        }
//		
//		        row_string += '</tr>';
//		
//		        elem.append( row_string );
//			}
//
//		}
//
//		return;
//	}
//
//	function br_data_error() {
////		show_error_popover( 'Got NO ajax data.' );
//
//		return;
//	}
//
//	function bottom_right_select_load( table_number ) {
//		var cx_id = $( '#cx_id' ).val();
//
//		if( cx_id ) {
//			login_get_br_data();
//		}
//
//		bottom_right_select( table_number );
//	}
//
//	function bottom_right_select( table_number ) {
//		var cx_id = $( '#cx_id' ).val();
//
//		if( cx_id > 0 ) {
//			$( '#br_logged_in' ).show();
//			$( '#br_logged_out' ).hide();
//
//			for( var loop = 1; loop <= 4; loop++ ) {
//				if( loop == table_number ) {
//					$( '#br_table_header_' + loop ).attr( 'class', 'f_table_header_tab_on' );
//					$( '#br_table_' + loop ).show();
//				} else {
//					$( '#br_table_header_' + loop ).attr( 'class', 'f_table_header_tab_off' );
//					$( '#br_table_' + loop ).hide();
//				}
//			}
//		} else {
//			$( '#br_logged_out' ).show();
//			$( '#br_logged_in' ).hide();
//		}
//
//		return;
//	}
//
//	function passwd_remind() {
//		var username = $.trim( $( '#passwd_reset_popover' ).val() );
//
//		if( username.length == 0 ) {
//			$( '.sp_feat_error' ).hide();
//			$( '#remind_invalid_username' ).show();
//
//			return;
//		}
//
//		var re = /^[\w\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9\-]+$/;
//
//		if( ! re.test( username ) ) {
//			$( '.sp_feat_error' ).hide();
//			$( '#remind_invalid_username' ).show();
//
//			return;
//		}
//
//		var post_data = {
//			'rm':'remind_passwd_popover',
//			'randomer':randomer(),
//			'username':username,
//			'ajax':1,
//			'success_cb':remind_user_success,
//			'error_cb':remind_user_error
//		};
//	
//		ajax_call( post_data );
//
//		return;
//	}
//
//	function remind_user_success( data_in, status ) {
//		var data = jQuery.parseJSON( data_in );
//
//		var cx_ok = data['status'];
//
//		if( cx_ok < 1 ) {
//			return remind_user_error();
//		}
//
//		hide_passwd_remind_popover();
//		$( '.sp_feat_error' ).hide();
//		$( '#login_remind_email_sent' ).show();
//	}
//
//	function remind_user_error() {
//		$( '.sp_feat_error' ).hide();
//		$( '#remind_invalid_username' ).show();
//	}
//
//	function new_user() {
//		var username = $.trim( $( '#new_email' ).val() );
//
//		if( username.length == 0 ) {
//			$( '.sp_feat_error' ).hide();
//			$( '#signup_invalid_username_password' ).show();
//
//			return;
//		}
//
//		var re = /^[\w\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9\-]+$/;
//	
//		if( ! re.test( username ) ) {
//			$( '.sp_feat_error' ).hide();
//			$( '#signup_invalid_username_password' ).show();
//
//			return;
//		}
//
//		var post_data = {
//			'rm':'find_user',
//			'randomer':randomer(),
//			'username':username,
//			'ajax':1,
//			'success_cb':new_user_success,
//			'error_cb':new_user_error
//		};
//	
//		ajax_call( post_data );
//
//		return;
//	}
//
//	function new_user_error( data_in, status ) {
//		hide_sp_feat_popover();
//		$( '.sp_feat_error' ).hide();
//		var username = $.trim( $( '#new_email' ).val() );
//
//		$( '#newuser_email' ).val( username );
//		$('#newuser_email').attr("disabled", true); 
//
//		show_newuser_popover();
//
//		return;
//	}
//
//	function new_user_success( data_in, status ) {
//		var data = jQuery.parseJSON( data_in );
//
//		var cx_id = Number(data['cx_id']);
//
//		if( cx_id < 1 ) {
//			return new_user_error();
//		}
//
//		$( '.sp_feat_error' ).hide();
//		$( '#email_already_in_use' ).show();
//
//		return;
//	}
//
//	function add_newuser() {
//		$( '.sp_feat_error' ).hide();
//		var username = $.trim( $( '#newuser_email' ).val() );
//		var user_fname = $.trim( $( '#newuser_fname' ).val() );
//		var user_lname = $.trim( $( '#newuser_lname' ).val() );
//		var company = $.trim( $( '#newuser_company' ).val() );
//		var password = $.trim( $( '#newuser_password' ).val() );
//		var password_retype = $.trim( $( '#newuser_password_retype' ).val() );
//		var error = 0;
//
//		if( user_fname.length == 0 ) {
//			$( '#newuser_invalid_fname' ).show();
//			error = 1;
//		}
//
//		if( user_lname.length == 0 ) {
//			$( '#newuser_invalid_lname' ).show();
//			error = 1;
//		}
//
//		if( company.length == 0 ) {
//			$( '#newuser_invalid_company' ).show();
//			error = 1;
//		}
//
//		if( password.length == 0 ) {
//			$( '#newuser_invalid_password' ).show();
//			error = 1;
//		}
//
//		if( password_retype.length == 0 ) {
//			$( '#newuser_invalid_retype_password' ).show();
//			error = 1;
//		}
//
//		if( password != password_retype && error == 0 ) {
//			$( '#newuser_invalid_password_match' ).show();
//			error = 1;
//
//			return;
//		}
//
//		if( error ) {
//			return;
//		}
//
//		var post_data = {
//			'rm':'add_newuser',
//			'randomer':randomer(),
//			'username':username,
//			'user_fname':user_fname,
//			'user_lname':user_lname,
//			'company':company,
//			'password':password,
//			'ajax':1,
//			'success_cb':add_newuser_success,
//			'error_cb':add_newuser_error
//		};
//	
//		ajax_call( post_data );
//
//		return;
//	}
//
//	function add_newuser_error() {
//		$( '.sp_feat_error' ).hide();
//		$( '#newuser_error' ).show();
//
//		show_error_popover( 'There was an error creating the new user.' );
//
//		return;
//	}
//
//	function add_newuser_success( data_in, status ) {
//		var data = jQuery.parseJSON( data_in );
//
//		var cx_id = Number(data['cx_id']);
//
//		hide_newuser_popover();
//		$( '.sp_feat_error' ).hide();
//		$( '#logout_image' ).show();
//		$( '#cx_id' ).val( cx_id );
//
//		show_status_popover( 'The new user has been created.<br>You have been automatically logged in as the new user.' );
//
//		return;
//	}
//
//	function show_sp_feat_popover() {
//		$( '#overlay_base' ).show();
////		$( '#homepopoverblocker' ).show();
//		$( '#sp_feat_popover' ).show();
//	}
//	
//	function hide_sp_feat_popover() {
//		$( '#overlay_base' ).hide();
//		$( '.sp_feat_error' ).hide();
////		$( '#homepopoverblocker' ).hide();
//		$( '#sp_feat_popover' ).hide();
//	}
//	
//	function show_savecart_popover() {
//		var num_items = Number( $( '#cart_num_items' ).val() );
//		if( num_items < 1 ) {
//			show_error_popover( 'There must be items in the cart for this functionality.' );
//			return;
//		}
//
//		var logged_in = Number( $( '#cx_id' ).val() );
//		if( logged_in < 1 ) {
//			show_popover_2( 1 );
//			return;
//
//			show_error_popover( 'You must be logged in to access this functionality.' );
//			return;
//		}
//
//		$( '#overlay_base' ).show();
////		$( '#homepopoverblocker' ).show();
//		$( '#savecart_popover' ).show();
//
//		return;
//	}
//
//	function show_checkout_popover() {
//		var num_items = Number( $( '#cart_num_items' ).val() );
//		if( num_items < 1 ) {
//			show_error_popover( 'There must be items in the cart before you can checkout.' );
//			return;
//		}
//
//		window.location.href = "/cgi-bin/oms.cgi?rm=show_signin_form&checkout=1";
//	}
//
//	function hide_savecart_popover() {
//		$( '#overlay_base' ).hide();
//		$( '.sp_feat_error' ).hide();
////		$( '#homepopoverblocker' ).hide();
//		$( '#savecart_popover' ).hide();
//	}
//
//	function show_emailcart_popover() {
//		var num_items = Number( $( '#cart_num_items' ).val() );
//		if( num_items < 1 ) {
//			show_error_popover( 'There must be items in the cart for this functionality.' );
//			return;
//		}
//
//		var logged_in = Number( $( '#cx_id' ).val() );
//		if( logged_in < 1 ) {
//			show_popover_2( 1 );
//			return;
//
//			show_error_popover( 'You must be logged in to access this functionality.' );
//			return;
//		}
//
//		$( '#overlay_base' ).show();
////		$( '#homepopoverblocker' ).show();
//		$( '#emailcart_popover' ).show();
//	}
//
//	function hide_emailcart_popover() {
//		$( '#overlay_base' ).hide();
//		$( '.sp_feat_error' ).hide();
////		$( '#homepopoverblocker' ).hide();
//		$( '#emailcart_popover' ).hide();
//	}
//
//	function show_error_popover( text ) {
//		$( '#overlay_base' ).show();
////		$( '#errorpopoverblocker' ).show();
//		$( '#error_p' ).html( text );
//		$( '#error_popover' ).show();
//	}
//
//	function hide_error_popover() {
//		$( '#overlay_base' ).hide();
//		$( '.sp_feat_error' ).hide();
////		$( '#errorpopoverblocker' ).hide();
//		$( '#error_popover' ).hide();
//	}
//
//	function show_status_popover( text ) {
//		$( '#overlay_base' ).show();
////		$( '#errorpopoverblocker' ).show();
//		$( '#status_popover' ).show();
//		$( '#status_p' ).html( text );
//	}
//
//	function hide_status_popover() {
//		$( '#overlay_base' ).hide();
//		$( '.sp_feat_error' ).hide();
////		$( '#errorpopoverblocker' ).hide();
//		$( '#status_popover' ).hide();
//	}
//
//	function show_passwd_remind_popover() {
//		$( '#sp_feat_popover' ).hide();
//		$( '#overlay_base' ).show();
////		$( '#homepopoverblocker' ).show();
//		$( '#passwd_remind_popover' ).show();
//	}
//
//	function hide_passwd_remind_popover() {
//		$( '#passwd_remind_popover' ).hide();
//		$( '#sp_feat_popover' ).show();
//	}
//
//	function show_use_cart_confirm() {
//		$( '#overlay_base' ).show();
//		$( '#use_cart_confirm' ).show();
//	}
//
//	function hide_use_cart_confirm() {
//		$( '#overlay_base' ).hide();
//		$( '#use_cart_confirm' ).hide();
//	}
//
//	function show_use_order_confirm() {
//		$( '#overlay_base' ).show();
//		$( '#use_order_confirm' ).show();
//	}
//
//	function hide_use_order_confirm() {
//		$( '#overlay_base' ).hide();
//		$( '#use_order_confirm' ).hide();
//	}
//
//	function preview_cart_template( cart_id ) {
//		var cx_id = $( '#cx_id' ).val();
//		var script_url_prefix = $('#main_form').attr('action'); 
//		var rm_url = script_url_prefix + '?rm=preview_cart_template&cart_template_cx_id=' + cx_id + '&cart_template_id=' + cart_id;
//		appPopupWin(rm_url, {'location':'no','toolbar':'no', 'resizable':'no', 'width':'700', 'height':'400'});
//	}
//
//	function savecart() {
//		$( '.sp_feat_error' ).hide();
//		// need to check for valid fields
//		var savecart_name = $.trim( $( '#savecart_name' ).val() );
//		var savecart_description = $.trim( $( '#savecart_description' ).val() );
//		var cart_type = 1;
//		var error = 0;
//
//		if( savecart_name.length == 0 ) {
//			$( '#save_invalid_name' ).show();
//			error = 1;
//		}
//
//		if( savecart_description.length == 0 ) { 
//			$( '#save_invalid_description' ).show();
//			error = 1;
//		}
//
//		if( error ) {
//			return;
//		}
//
//		var post_data = {
//			'rm':'savecart',
//			'randomer':randomer(),
//			'name':savecart_name,
//			'description':savecart_description,
//			'cart_type':cart_type,
//			'cx_id':$( '#cx_id' ).val()
//		};
//
//		ajax_call( post_data );
//
//		hide_savecart_popover();
//
//		show_status_popover( 'The cart has been saved.' );
//	}
//
//	function emailcart() {
//		$( '.sp_feat_error' ).hide();
//		// need to check for valid fields
//		var emailcart_address = $.trim( $( '#emailcart_address' ).val() );
//		var emailcart_fname = $.trim( $( '#emailcart_fname' ).val() );
//		var emailcart_lname = $.trim( $( '#emailcart_lname' ).val() );
//		var emailcart_description = $.trim( $( '#emailcart_description' ).val() );
//		var emailcart_subject = $.trim( $('#emailcart_subject').val() );
//		var error = 0;
//
//		if( emailcart_address.length == 0 ) {
//			$( '#email_invalid_address' ).show();
//			error = 1;
//		}
//
//		if( emailcart_fname.length == 0 ) {
//			$( '#email_invalid_first' ).show();
//			error = 1;
//		}
//
//		if( emailcart_lname.length == 0 ) {
//			$( '#email_invalid_last' ).show();
//			error = 1;
//		}
//
//		if( emailcart_description.length == 0 ) {
//			$( '#email_invalid_personal' ).show();
//			error = 1;
//		}
//
//		if( emailcart_subject.length == 0 ) {
//			$( '#email_invalid_subject' ).show();
//			error = 1;
//		}
//
//		var re = /^[\w\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9\-]+$/;
//	
//		if( ! re.test( emailcart_address ) ) {
//			$( '#email_invalid_address' ).show();
//			error = 1;
//		}
//
////		show_error_popover( 'Currently not implemented.' );
////
////		hide_emailcart_popover();
////
////		return;
//
//		if( error ) {
//			return;
//		}
//
//		var post_data = {
//			'rm':'emailcart',
//			'randomer':randomer(),
//			'address':emailcart_address,
//			'fname':emailcart_fname,
//			'lname':emailcart_lname,
//			'description':emailcart_description,
//			'subject':emailcart_subject,
//			'cx_id':$( '#cx_id' ).val()
//		};
//
//		ajax_call( post_data );
//
//		hide_emailcart_popover();
//
//		show_status_popover( 'The email has been sent.' );
//	}
//
//	function hide_newuser_popover() {
//		$( '#overlay_base' ).hide();
//		$( '.sp_feat_error' ).hide();
////		$( '#homepopoverblocker' ).hide();
//		$( '#newuser_popover' ).hide();
//	}
//
//	function show_newuser_popover() {
//		$( '#overlay_base' ).show();
////		$( '#homepopoverblocker' ).show();
//		$( '#newuser_popover' ).show();
//	}
//
//	function show_logout_popover() {
//		$( '#overlay_base' ).show();
////		$( '#homepopoverblocker' ).show();
//		$( '#logout_popover' ).show();
//	}
//
//	function hide_logout_popover() {
//		$( '#overlay_base' ).hide();
////		$( '#homepopoverblocker' ).hide();
//		$( '#logout_popover' ).hide();
//	}
//
//	function do_logout_popover() {
//		window.location.href = "/cgi-bin/oms.cgi?rm=logout";
//
//		return;
//	}
//
//	function logout_user() {
//		var num_items = Number( $( '#cart_num_items' ).val() );
//		if( num_items > 0 ) {
//			show_logout_popover( 'There must be items in the cart for this functionality.' );
//			return;
//		}
//
//		window.location.href = "/cgi-bin/oms.cgi?rm=logout";
//
//		return;
//	}
//
//			function submit_form(runmode) {
//				$('#rm').val( runmode );
//				$('#main_form').submit();
//			}
//
//			function submit_special(runmode) {
//				if (runmode == 'show_nonmember_cx_form') {
//					var can_submit = 0;
//					var checked = document.getElementById('not_a_member_cbox').checked;
//					if (!checked) {
//						alert ('Please verify your new-customer status by marking the checkbox');
//					} else {
//						return submit_form(runmode);
//					}
//				}
//			}
//
//			function add_to_order(prod_id, donation, entry_type, cat_id) {
//
//				var qty;
//				if (entry_type) {
//					document.main_form.entry_type.value = entry_type;
//					if (entry_type == 's') {
//						qty = document.getElementById('sampleqty_prod_' + prod_id).value;
//					} else if (entry_type == 'q') {
//						qty = 1;
//					}
//				} else {
//					qty = document.getElementById('qty_prod_' + prod_id).value;
//				}
//
//				//alert('the value:' + qty + ', value is (qty < 1)? ' + (qty < 1) + ', value isNaN? ' + isNaN(qty));
//
//				if (qty < 1 || isNaN(qty)) {
//					var str;
//					if (donation) {
//						str = 'Please enter a dollar amount';
//					} else {
//						str = 'Please enter a quantity';
//					}
//					if (qty) { str += ' (integer > 0)'; } //make error match up with what the user is trying to do when they've entered a decimal quantity below 1.
//					alert (str); return;
//				}
//
//				document.main_form.add_product.value = prod_id;
//				document.main_form.prod_qty.value = qty;
//				if (cat_id) {
//					document.main_form.prod_cat.value = cat_id;
//				}
//				submit_form('add_product');
//			}
//
//			function add_to_order_list(prod_id, donation, entry_type, cat_id) {
//
//				var qty;
//				if (entry_type) {
//					document.main_form.entry_type.value = entry_type;
//					if (entry_type == 's') {
//						qty = document.getElementById('sampleqty_prod_' + prod_id).value;
//					} else if (entry_type == 'q') {
//						qty = 1;
//					}
//				} else {
//					qty = document.getElementById('qty_prod_list_' + prod_id).value;
//				}
//
//				//alert('the value:' + qty + ', value is (qty < 1)? ' + (qty < 1) + ', value isNaN? ' + isNaN(qty));
//
//				if (qty < 1 || isNaN(qty)) {
//					var str;
//					if (donation) {
//						str = 'Please enter a dollar amount';
//					} else {
//						str = 'Please enter a quantity';
//					}
//					if (qty) { str += ' (integer > 0)'; } //make error match up with what the user is trying to do when they've entered a decimal quantity below 1.
//					alert (str); return;
//				}
//
//				document.main_form.add_product.value = prod_id;
//				document.main_form.prod_qty.value = qty;
//				if (cat_id) {
//					document.main_form.prod_cat.value = cat_id;
//				}
//				submit_form('add_product');
//			}
//
//			function remove_product(prod_id, entry_type) {
//				//will entirely remove the product from order
//				if (entry_type) {
//					document.main_form.entry_type.value = entry_type;
//				}
//				document.main_form.remove_product.value = prod_id;
//				submit_form('remove_product');
//			}
//
//			function adjust_product_qty(prod_id, donation, entry_type) {
//				var qty;
//				if (entry_type) {
//					document.main_form.entry_type.value = entry_type;
//					if (entry_type == 's') {
//						qty = document.getElementById('sampleqty_prod_' + prod_id).value;
//					} else if (entry_type == 'q') {
//						qty = 1;
//					}
//				} else {
//					qty = document.getElementById('qty_prod_' + prod_id).value;
//				}
//
//				if (qty < 1) {
//					var str;
//					if (donation) {
//						str = 'Please enter a dollar amount';
//					} else {
//						str = 'Please enter a quantity';
//					}
//					if (qty) { str += ' (integer > 0)'; } //make error match up with what the user is trying to do when they've entered a decimal quantity below 1.
//					alert (str); return;
//				}
//				document.main_form.adjust_product.value = prod_id;
//				document.main_form.prod_qty.value = qty;
//				//alert('for qty, should submit' + qty);
//				submit_form('adjust_product_qty');
//			}
//
//			function adjust_donation_amount(prod_id) {
//				adjust_product_qty(prod_id, 1); //this func is just an alias for adjust_product_qty (so if the javascript funcs are visible it will look like adjusting a donation!)
//			}
//
//			function qty_prod_checkenter(event, prod_id) {
//				NS4 = (document.layers) ? true : false;
//				var code = 0;
//				if (NS4) { code = event.which; } else { code = event.keyCode; }
//				if (code==13) { add_to_order(prod_id); }
//			}
//
//			function suppressenter(event) {
//				NS4 = (document.layers) ? true : false;
//				var code = 0;
//				if (NS4) { code = event.which; } else { code = event.keyCode; }
//				if (code==13) {
//					return false;
//				} else {
//					return true;
//				}
//			}
//
//function reset_tops() {
//	$("#top_wrapper > div" ).each(
//		function( elem ) {
//			var html_save = $(this).html();
//			$(this).empty();
//			$(this).html( html_save );
//		}
//	);
//}

function element_selected( field_name ) {
	var value = $('input:radio[name=' + field_name + ']:checked').val();
	if( value >= 1 ) {
		return 1;
	}

	alert( 'You must select an element first.' );

	return 0;
}

function check_keywords() {
	var keywords = $( '#keywords' ).val();

	if( keywords == 'enter search keywords' ) {
		$( '#keywords' ).val( '' );
	}

	var keywords = $( '#keywords2' ).val();

	if( keywords == 'enter search keywords' ) {
		$( '#keywords2' ).val( '' );
	}

	return 1;
}

//function add_cart( id, prod_price ) {
//	var quantity = $( '#quantity_' + id ).val();
//
//	quantity = parseInt( quantity, 10 );
//
//	if( isNaN( quantity ) || quantity <= 0 ) {
//		return;
//	}
//
// 	$( '#prod_id' ).val( id );
//	$( '#quantity' ).val( quantity );
//	$( '#prod_price' ).val( prod_price );
//
//	submit_form( 'add_cart' );
//
//	return;
//}
//
//function update_cart( id ) {
//	var quantity = $( '#quantity_' + id ).val();
//
// 	$( '#prod_id' ).val( id );
//	$( '#quantity' ).val( quantity );
//
//	submit_form( 'update_cart' );
//
//	return;
//}
//
//function update_cart_review( id ) {
//	var quantity = $( '#quantity_' + id ).val();
//
// 	$( '#prod_id' ).val( id );
//	$( '#quantity' ).val( quantity );
//
//	submit_form( 'update_cart_review' );
//
//	return;
//}
//
//function delete_cart( id ) {
// 	$( '#prod_id' ).val( id );
//
//	submit_form( 'delete_cart' );
//
//	return;
//}
//
//function delete_cart_review( id ) {
// 	$( '#prod_id' ).val( id );
//
//	submit_form( 'delete_cart_review' );
//
//	return;
//}
//
//function get_data( data_group, order_name, order_dir, limit ) {
//	var daterange_start = $( "#daterange_start" ).val();
//	var daterange_end = $( "#daterange_end" ).val();
//
//	var post_data = {
//		'rm':'show_data',
//		'daterange_start':daterange_start,
//		'daterange_end':daterange_end,
//		'data_group':data_group,
//		'order_name':order_name,
//		'order_dir':order_dir,
//		'limit':limit,
//		'success_cb':get_data_success,
//		'error_cb':get_data_error,
//		'randomer':randomer()
//	};
//
//	ajax_call( post_data );
//
//	return false;
//}
//
//function get_data_success( data_in, status ) {
//	var data = jQuery.parseJSON(data_in);
//	var table_elem = $( "#" + data['name'] + "_table" );
//
//	$( '#' + data['name'] + "_order_name" ).val( data['order_name'] );
//	$( '#' + data['name'] + "_order_dir" ).val( data['order_dir'] );
//
//	table_elem.empty();
//
//	var rows = data['rows'];
//	var num_rows = rows.length;
//
//	for ( var row_count=0; row_count<num_rows; row_count++ ) {
//		var row = rows[ row_count ];
//		var row_string = '<tr>';
//
//		var num_cols = row.length;
//		if( row_count == 0 ) {
//			for ( var col_count=0; col_count<num_cols; col_count++ ) {
//				var col = row[ col_count ];
//				if( col_count == 0 ) {
//					row_string += '<td class="table_header_01"';
//				} else {
//					row_string += '<td class="table_header_02"';
//				}
//				row_string += ' valign="top" align="' + col['align'] + '" width="' + col['width'] + '">';
//				if( col['no_sort'] ) {
//					row_string += '<span class="no_sort">' + col['title'] + '</span>';
//				} else {
//					row_string += '<a href="#" onclick="get_data( \'' + data['name'] +'\',\'' + col['var_name'] + '\',\'';
//					if( col['selected'] ) {
//						if( col['direction'] == 'asc' ) {
//							row_string += 'desc';
//						} else {
//							row_string += 'asc';
//						}
//					} else {
//						row_string += 'desc';
//					}
//					row_string += '\', 10 ); return false;">';
//					row_string += col['title'];
//					row_string += '</a>';
//					if( col['selected'] ) {
//						if( col['direction'] == 'asc' ) {
//							row_string += '<img src="/images/arrow_up.gif" width="15" height="15" border="0">';
//						} else {
//							row_string += '<img src="/images/arrow_down.gif" width="15" height="15" border="0">';
//						}
//					}
//				}
//				row_string += '</td>';
//			}
//
//			table_elem.append( row_string );
//		}
//
//		row_string = '<tr>';
//
//		for ( var col_count=0; col_count<num_cols; col_count++ ) {
//			var col = row[ col_count ];
//			if( col_count == 0 ) {
//				row_string += '<td class="table_body_01a"';
//			} else {
//				row_string += '<td class="table_body_02a"';
//			}
//			row_string += ' valign="top" align="' + col['align'] + '" width="' + col['width'] + '">';
//			row_string += col['value'];
//			row_string += '</td>';
//		}
//
//		table_elem.append( row_string );
//	}
//}
//
//function get_data_error() {
//	alert( 'Failure on json data call' );
//}
//
//function get_xls( data_group ) {
//	var order_name = $( '#' + data_group + "_order_name" ).val( );
//	var order_dir = $( '#' + data_group + "_order_dir" ).val( );
//	var daterange_start = $( "#daterange_start" ).val();
//	var daterange_end = $( "#daterange_end" ).val();
//	var domain_template = $( "#domain_template" ).val();
//
//	window.location.href = "/" + domain_template + "/shop.pl?rm=show_xls" +
//		"&daterange_start=" + daterange_start +
//		"&daterange_end=" + daterange_end +
//		"&data_group=" + data_group +
//		"&order_name=" + order_name +
//		"&order_dir=" + order_dir
//
//	return;
//}
//
//function get_pdf( data_group ) {
//	var order_name = $( '#' + data_group + "_order_name" ).val();
//	var order_dir = $( '#' + data_group + "_order_dir" ).val();
//	var daterange_start = $( "#daterange_start" ).val();
//	var daterange_end = $( "#daterange_end" ).val();
//	var domain_template = $( "#domain_template" ).val();
//
//	window.location.href = "/" + domain_template + "/shop.pl?rm=show_pdf" +
//		"&daterange_start=" + daterange_start +
//		"&daterange_end=" + daterange_end +
//		"&data_group=" + data_group +
//		"&order_name=" + order_name +
//		"&order_dir=" + order_dir;
//
//	return;
//}
//
//function load_cart() {
//	var cart_count = $( '#cart_count' ).val();
//	var domain_template = $( "#domain_template" ).val();
//	var order_id = $( '#order_id' ).val();
//
//	if( cart_count == 0 ) {
//		window.location.href = "/" + domain_template + "/shop.pl?rm=load_cart" +
//			"&order_id=" + order_id;
//		return;
//	}
//
//	alert( "You can not edit another order if there are items in your cart" );
//	return;
//
//}
//
function get_campaign_report_xls( number ) {
	document.getElementById('chart_id').selectedIndex=number;
	var report_name = $( '#chart_id' ).val();
	var campaign_name = $( '#chart_id' ).val();
	var frame_id = $( '#period_selector_' + report_name ).val( );
	var daterange_start = $( '#daterange_start_' + report_name ).val();
	var daterange_end = $( '#daterange_end_' + report_name ).val();

	window.location.href = "/user.pl?rm=show_report_xls" +
		"&frame_id=" + frame_id +
		"&report_name=" + report_name + 
		"&campaign_name=" + campaign_name + 
		"&daterange_start=" + daterange_start +
		"&daterange_end=" + daterange_end

	return;
}

function get_campaign_report_pdf( number ) {
	document.getElementById('chart_id').selectedIndex=number;
	var report_name = $( '#chart_id' ).val();
	var campaign_name = $( '#chart_id' ).val();
	var frame_id = $( '#period_selector_' + report_name ).val( );
	var daterange_start = $( '#daterange_start_' + report_name ).val();
	var daterange_end = $( '#daterange_end_' + report_name ).val();
	
	window.location.href = "/user.pl?rm=show_report_pdf" +
		"&frame_id=" + frame_id +
		"&report_name=" + report_name +
		"&campaign_name=" + campaign_name + 
		"&daterange_start=" + daterange_start +
		"&daterange_end=" + daterange_end

	return;
}

function popover_confirm( phrase, rm ) {
	var r = confirm( phrase );
	if( r == true ) {
		submit_form( rm );
	}

	return false;
}

function confirm_newsletter_cancel() {
	return popover_confirm( 'Are you sure you want to cancel?  You will lose all current changes!', 'process_advisor_cancel' );
}

function confirm_review_edit( runmode ) {
	return popover_confirm( 'This message is already approved!  Are you sure you want to edit the message?  If anything is changed, you will need to have the message approved again!', runmode );
}

   function get_partner_image( ) {
        var partner_id = $( '#partner :selected' ).val();
		if( ! partner_id ) {
        	partner_id = $( '#partner' ).val();
		}

        if( partner_id > 0 ) {
            var formdata = new FormData();
            formdata.append( 'rm', 'partner_get_json' );
            formdata.append( 'partner_id', partner_id );

            $.ajax({
                url: '/user.pl',
                data: formdata,
                processData: false,
                contentType: false,
                type: 'POST',
                dataType: 'json',
                success: function( data ) {
                    var image_id = data.image_id;
                    if( image_id > 0 ) {
                        $( '#partner_image_src' ).attr( 'src', '/library_images/orig_size/' + image_id + '.jpg' );
                    } else {
                        $( '#partner_image_src' ).attr( 'src', '/images/sample-partner-logo.jpg' );
                    }
                }
            });
        }
    }

function set_radio( value ) {
	$("#rec_" + value + "_row").prop("checked", true);
}

function set_radio_mobile( value ) {
	$("#rec_mobile_" + value + "_row").prop("checked", true);
}


