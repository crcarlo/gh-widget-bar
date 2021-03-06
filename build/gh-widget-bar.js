function addCss() {
	var style_content = `.gh-widget-bar{color:#666;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial, sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.gh-widget-bar a{color:inherit;text-decoration:none!important}.gh-widget-bar h3{padding:0;margin:0}.gh-widget-bar svg{fill:#fff}.gh-widget-bar .gh-wid-head{display:flex;padding:5px;color:#fff;font-weight:600;background-color:#24292e;border-radius:3px 3px 0 0}.gh-widget-bar .gh-wid-head .logo{display:inline-block}.gh-widget-bar .gh-wid-head .title{margin-left:8px}.gh-widget-bar .gh-wid-body{border-color:#ccc;border-style:solid;border-width:0 1px 1px 1px;border-radius:0 0 3px 3px;padding:8px;display:flex;justify-content:space-between}.gh-widget-bar .gh-wid-body .gh-link{font-size:15;float:left;width:23%;min-width:220px}.gh-widget-bar .gh-wid-body .gh-link .gh-wid-avatar{float:left;margin-right:10px}.gh-widget-bar .gh-wid-body .gh-link .gh-wid-avatar img{border-radius:4px;width:60px;height:60px}.gh-widget-bar .gh-wid-body .gh-link .gh-wid-name-box{float:left}.gh-widget-bar .gh-wid-body .gh-link .gh-wid-name-box .gh-wid-name{color:#24292e;font-weight:600}.gh-widget-bar .gh-wid-body .gh-wid-bio{font-size:13;float:left;width:42%;padding:5px 8px 5px 8px}@media (max-width:480px){.gh-widget-bar .gh-wid-body .gh-wid-bio{width:100%}}.gh-widget-bar .gh-wid-body .gh-stats{float:left;width:35%;font-size:13;display:flex;justify-content:space-between;max-width:280px}.gh-widget-bar .gh-wid-body .gh-stats a{display:flex;flex-direction:column;align-items:center}@media (min-width:601px) and (max-width:767px){.gh-widget-bar .gh-wid-body .gh-stats>*{margin-bottom:8px}}@media (max-width:767px){.gh-widget-bar .gh-wid-body .gh-stats>* a{justify-content:space-between;flex-direction:row}}.gh-widget-bar .gh-wid-body .gh-stats .gh-number{display:block;height:25px;width:25px;background-color:#eee;font-weight:600;border-radius:15px;text-align:center;margin-top:7px}.gh-widget-bar .gh-wid-body .gh-stats .gh-number span{display:block;padding-top:calc(50% - 8.5px)}@media (max-width:767px){.gh-widget-bar .gh-wid-body .gh-stats .gh-number{margin-top:0}}@media (min-width:601px) and (max-width:767px){.gh-widget-bar .gh-wid-body .gh-stats{flex-direction:column;justify-content:unset}}@media (max-width:600px){.gh-widget-bar .gh-wid-body{flex-wrap:wrap}.gh-widget-bar .gh-wid-body .gh-link{width:50%}.gh-widget-bar .gh-wid-body .gh-wid-bio{padding:8px 0 8px 0}.gh-widget-bar .gh-wid-body .gh-stats{width:100%;max-width:none}.gh-widget-bar .gh-wid-body .gh-stats .gh-number{margin-left:8px}}`;
	var style_text_node = document.createTextNode(style_content);
	var style_element = document.createElement("style");
	style_element.appendChild(style_text_node);
	document
		.getElementsByClassName("gh-widget-bar")[0]
		.appendChild(style_element);
}

function initializeWidgets() {
	var wid_html = `<div class="gh-wid-head"><div class="logo"><svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></div><div class="title">GitHub</div></div><div class="gh-wid-body"><div class="gh-link"><a href="#"><div class="gh-wid-avatar"><img></div><div class="gh-wid-name-box"><h3><div class="gh-wid-name"></div></h3><div class="gh-wid-nick">--</div></div></a></div><div class="gh-wid-bio">--</div><div class="gh-stats"><div class="gh-repo"><a><div>Repositories</div><div class="gh-number"><span></span></div></a></div><div class="gh-followers"><a><div>Followers</div><div class="gh-number"><span></span></div></a></div><div class="gh-following"><a><div>Following</div><div class="gh-number"><span></span></div></a></div></div></div>`;
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
