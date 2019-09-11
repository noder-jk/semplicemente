module.exports.run=function($, next)
{
	// register an widget area
	$.add_action('widgets_init', function($, next)
	{
		$.register_sidebar({'title':'Right Column', 'id':'right_side_panel_theme'});
		next($);
	});
	
	// register a menu location
	$.add_action('register_nav_menus',function($, next)
	{
		var ob=
		{
			'id':'semp_nav_menu', 
			'title':'Top Nav Bar', 
			'description':'This menu location is registered from Semplicemente'
		}

		$.register_nav_menu(ob);
		
		next($);
	});

	// register a custom meta box at runtime for post
	/* function meta_field($, next)
	{
		var box=
		{
			'id':'meta_field_id',
			'title':'Test Custom Box',
			'component':'TestComponentInput',
			'position':'right',
			'package':'semplicemente'
		}

		$.register_meta_box(box);
		next($);
	}
	$.add_action('register_meta_boxes', meta_field); */

	// associate the meta box with specific post type
	/* function reg_mods($, next)
	{
		var ob=
		{
			'post_type':'post',
			'module':['meta_field_id']
		}

		$.use_meta_box(ob);

		next($);
	}
	$.add_action('use_meta_boxes', reg_mods); */

	// register a custom template at runtime for posts
	function set_template($, next)
	{
		var ob=
		{
			'title':'Test From Smpl',
			'component':'TestCustomTemplate',
			'package':'semplicemente'
		}
		
		$.register_custom_template(ob);

		next($);
	}
	
	$.add_action('register_custom_templates', set_template);

	// go next add-on's functionalities
	next($);
}