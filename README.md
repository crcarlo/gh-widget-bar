# gh-widget-bar

A responsive widget bar for showing and linking to a GitHub user profile.

## Usage

Insert the following iside your HTML replacing `gh-username` with the username of the profile you want the widget to show.

```html
<div class="gh-widget-bar" gh-username="crcarlo"></div>
<script src="gh-widget-bar.min.js"></script>
```

You might also want to insert more than one widget in a single page. For doing that you only need to include the `script` tag just once after all the widgets.

### Note

This widget is meant to be an horizontal responsive bar. So it is recommended for it to take a good part of the horizontal space of the viewport.
For viewports of 768px or less it is recommended to take all the available space instead.

## For editors

If you want to edit or customize this widget go on and fork this repository. Here's a basic guide on how to build this widget.

- First install all node dependencies with `npm install`.
- You can edit everything you want inside the `src` directory (HTML, SCSS, JS).
- Run `gulp build` for creating the widget.
- You're done! You can find your built widget `buid/gh-widget-bar.js` and a minified version `buid/gh-widget-bar.min.js`