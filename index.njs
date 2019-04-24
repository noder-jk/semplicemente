module.exports.run=function($, next)
{
	$=add_action
	(
		$,
		'widgets_init',
		function($, next)
		{
			$=register_sidebar($, {'title':'Right Panel', 'id':'right_side_panel_theme'});
			next($);
		}
	);
	
	$=add_action
	(
		$,
		'widgets_init',
		function($, next)
		{
			$=register_sidebar($, {'title':'Right Panel2', 'id':'right_side_panel_theme2'});
			next($);
		}
	);

	$=add_action($,'register_nav_menus',function($, next)
	{
		$=register_nav_menu($, {'id':'semp_nav_menu', 'title':'Top Nav Bar', 'description':'This menu location is registered from Semplicemente'});
		next($);
	});

	function meta_field($, next)
	{
		var box=
		{
			'id':'meta_field_id',
			'title':'Test Custom Box',
			'component':'TestComponentInput',
			'position':'right',
			'dir':__dirname
		}

		$=register_post_module($,box);
		next($);
	}
	$=add_action($, 'register_post_modules', meta_field);

	function reg_mods($, next)
	{
		var ob=
		{
			'post_type':'post',
			'modules':['meta_field_id']
		}

		$=use_post_module($, ob);

		next($);
	}
	$=add_action($, 'use_post_modules', reg_mods);

	
	function set_template($, next)
	{
		var ob=
		{
			'title':'Test From Smpl',
			'component':'TestCustomTemplate',
			'package':'semplicemente'
		}
		
		$=register_custom_template($, ob);

		next($);
	}
	$=add_action($, 'register_custom_templates', set_template);

	next($);
}