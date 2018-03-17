function addCss() {
	var style_content = `@@include('../temporary/style.min.css')`;
	var style_text_node = document.createTextNode(style_content);
	var style_element = document.createElement("style");
	style_element.appendChild(style_text_node);
	document
		.getElementsByClassName("gh-widget-bar")[0]
		.appendChild(style_element);
}

function initializeWidgets() {
	var wid_html = `@@include('../temporary/template.min.html')`;
	var wids = document.getElementsByClassName("gh-widget-bar");
	for (var i = 0; i < wids.length; i++) {
		wids[i].innerHTML = wid_html;
	}
}

/**
 * This function updates all the widgets with the "gh-username" equal to userid
 */
function updateWidget(
	userid,
	name,
	nick,
	avatar,
	bio,
	repo,
	followers,
	following,
	link
) {
	var count = document.querySelectorAll('[gh-username="' + userid + '"]');
	for (var i = 0; i < count.length; i++) {
		document
			.querySelectorAll('[gh-username="' + userid + '"] .gh-wid-avatar img')
			[i].setAttribute("src", avatar);
		document.querySelectorAll('[gh-username="' + userid + '"] .gh-wid-name')[
			i
		].innerHTML = name;
		document.querySelectorAll('[gh-username="' + userid + '"] .gh-wid-nick')[
			i
		].innerHTML = nick;
		document.querySelectorAll('[gh-username="' + userid + '"] .gh-wid-bio')[
			i
		].innerHTML = bio;
		document.querySelectorAll('[gh-username="' + userid + '"] .gh-repo .gh-number span')[
			i
		].innerHTML = repo;
		document.querySelectorAll('[gh-username="' + userid + '"] .gh-followers .gh-number span')[
			i
		].innerHTML = followers;
		document.querySelectorAll('[gh-username="' + userid + '"] .gh-following .gh-number span')[
			i
		].innerHTML = following;
		//make elements links
		document
			.querySelectorAll('[gh-username="' + userid + '"] .gh-link a')
			[i].setAttribute("href", link);
		document
			.querySelectorAll('[gh-username="' + userid + '"] .gh-repo a')
			[i].setAttribute("href", link + "/?tab=repositories");
		document
			.querySelectorAll('[gh-username="' + userid + '"] .gh-followers a')
			[i].setAttribute("href", link + "/?tab=followers");
		document
			.querySelectorAll('[gh-username="' + userid + '"] .gh-following a')
			[i].setAttribute("href", link + "/?tab=following");
	}
}

function updateUserDetails(data, userid) {
	updateWidget(
		userid,
		data.name,
		data.login,
		data.avatar_url,
		data.bio,
		data.public_repos,
		data.followers,
		data.following,
		data.html_url
	);
}

function getJSON(userid, callback) {
	var url = "https://api.github.com/users/" + userid;
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.onload = function() {
		if (request.status === 200) {
			var data = JSON.parse(request.responseText);
			callback(data, userid);
		}
	};
	request.onreadystatechange = function() {
		// TO ADD CHECK ON FAIL
		//console.log("FINISHED", request.status);
	}
	request.send();
}

function requireUserDetail(userid) {
	getJSON(userid, updateUserDetails);
}

function start() {
	initializeWidgets();
	addCss();
	// get users ids
	var wids = document.getElementsByClassName("gh-widget-bar");
	var userids = [];
	for (var i = 0; i < wids.length; i++) {
		userids.push(wids[i].getAttribute("gh-username"));
	}
	// for each user require details
	for (var i = 0; i < userids.length; i++) {
		requireUserDetail(userids[i]);
	}
}

function ready(fn) {
	if (document.readyState != "loading") {
		fn();
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

ready(start);
