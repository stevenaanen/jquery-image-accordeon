jQuery Image Accordeon
====================

Using this plugin, you can make a fancy accordeon of images. The images can for example be in a grid form, with some rows and columns. By clicking an image, more details slide in as a new row under it. Check the demo for an example.

Usage
-----

### HTML
The HTML consists of an unordered list of items. Each item has a summary, which is basically what you always see (the img for example), and a details section. The details are hidden by default, and copied to the details block on click. So the details block is what actually slides out on a click on one of the other list items. You can position is wherever you prefer, and any html already in it will be retained. Also for the list items you can basically put anything in it, as long as you keep the `summary` and `details` nodes as the only direct children.
	<ul>
		<li>
			<summary>
				<img src="">
			</summary>
			<details>
				<img src="">
				<section>
					<h1>Vel scelerisque</h1>
					<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. Vestibulum id ligula porta felis euismod semper.</p>
				</section>
			</details>
		</li>
		<li class="details-block">
			<a class="close-button">×</a>
		</li>
	</ul>

Actually the class `close-button` has a special meaning; by default anything with that class will trigger the details block to be closed.

### CSS
This project contains 2 CSS files: a main CSS file and a demo CSS file. The main file is very basic and contains rules that are basically always needed, like hiding the details nodes by default and stuff. The demo file creates a simple style as an example of how to use this plugin. Feel free to use or change it.

### JS
Make sure you've loaded jQuery and then *jquery.imageaccordeon.js* in your HTML before the plugin call. I personally like to place my scripts file at the end of the body, and using an asynchronous loader for the plugins. You're free to choose though. Call the plugin wrapped in a `$(document).ready(function { })`. This is a sample of the call with all posible options and defaults:

	$(".accordeon").accordeonize({
		detailsBlock	: ".details-block",		// selector of details block
		closeButton		: ".close-button",		// close button selector
		hideTime		: 170,					// how fast details block slides up
		showTime		: 280					// how fast details block slides down
	});

Changelog
---------
### v1.0
- first working version of plugin

Roadmap
-------
To add at some point in the future:
- support for multiple details blocks for responsive design
- wider transition support (more options)
