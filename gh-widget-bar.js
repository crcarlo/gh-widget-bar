function addCss() {
	var style_content = `
	svg {
		fill: white;
	}
	.gh-widget-bar {
		color: #666;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	}
	#gh-wid-head {
		padding: 5px;
		color: white;
		font-weight: 600;
		background-color: rgb(36, 41, 46);
		border-radius: 3px 3px 0px 0px;
	}
	#gh-logo {
		width: 24px;
		display: inline-block;
	}
	#gh-title {
		display: table-cell;
		display: inline-block;
		margin-left: 5px;
		margin-top: -25px;
	}
	.gh-widget-bar a {
		color: inherit;
		text-decoration: none !important;
	}
	.gh-widget-bar h3 {
		padding: 0px;
		margin: 0px;
	}
	#gh-wid-body {
		border-color: #ccc;
		border-style: solid;
		border-width: 1px;
		border-radius: 0px 0px 3px 3px;
		padding: 5px;
		overflow: auto;
	}
	#gh-wid-body > * {
		margin: 5px;
	}
	#gh-link {
		float: left;
		width: 23%;
	}
	#gh-wid-bio {
		float: left;
		width: 30%;
		margin-top: 10px;
	}
	#gh-stats {
		float: left;
		width: 38%
	}
	#gh-wid-avatar img {
		border-radius: 4px;
		width: 60px; 
		height: 60px; 
	}
	#gh-link {
		font-size: 15;
		float: left;
	}
	#gh-wid-avatar {
		float: left;
		margin-bottom: 10px;
	}
	#gh-wid-name-box {
		float: left;
	}
	#gh-wid-name {
		color: #24292e;
		font-weight: 600;
	}
	#gh-wid-avatar {
		margin-right: 10px;
	}
	#gh-stats {
		font-size: 13;
	}
	#gh-stats > * {
		margin-right: 10px;
		float: left;
		width: 28%;
	}
	#gh-wid-bio {
		font-size: 13;
	}
	.gh-number {
		height: 25px;
		width: 25px;
		background-color: #eee;
		font-weight: 600;
		border-radius: 15px;
		text-align: center;
		display: table-cell;
		vertical-align: middle;
	}
	`;
	var style_text_node = document.createTextNode(style_content);
	var style_element = document.createElement("style");
	style_element.appendChild(style_text_node);
	document.getElementsByClassName("gh-widget-bar")[0].appendChild(style_element);
}

function initializeWidgets() {
	var wid_html = `
	<div id="gh-wid-head">
		<div id="gh-logo">
			<svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
		</div>
		<div id="gh-title">
			GitHub
		</div>
	</div>
	<div id="gh-wid-body">
		<div id="gh-link">
			<a href="">
				<div id="gh-wid-avatar">
					<img>
				</div>
				<div id="gh-wid-name-box">
					<h3>
						<div id="gh-wid-name"></div>
					</h3>
					<div id="gh-wid-nick">
						--
					</div>
				</div>
			</a>
		</div>
		<div id="gh-wid-bio">
			--
		</div>
		<div id="gh-stats">
			<div id="gh-wid-repo" class="gh-stat">
				<a>
					<div class="wid-num-title">
						Repositories
					</div>
					<div class="gh-number" id="gh-repo">
					</div>
				</a>
			</div>
			<div id="gh-wid-followers" class="gh-stat">
				<a>
					<div class="wid-num-title">
						Followers
					</div>
					<div class="gh-number" id="gh-followers">
					</div>
				</a>
			</div>
			<div id="gh-wid-following" class="gh-stat">
				<a>
					<div class="wid-num-title">
						Following
					</div>
					<div class="gh-number" id="gh-following">
					</div>
				</a>
			</div>
		</div>
	</div>
	`;
	var wids = document.getElementsByClassName("gh-widget-bar");
	for (var i=0; i<wids.length; i++) {
		wids[i].innerHTML = wid_html;
	}
}

/**
* This function updates all the widgets with the "gh-username" equal to userid
*/
function updateWidget(userid, name, nick, avatar, bio, repo, followers, following, link) {
	var count = document.querySelectorAll('[gh-username="'+userid+'"]');
	for (var i=0; i<count.length; i++) {
		document.querySelectorAll('[gh-username="'+userid+'"] #gh-wid-avatar img')[i].setAttribute("src",avatar);
		document.querySelectorAll('[gh-username="'+userid+'"] #gh-wid-name')[i].innerHTML = name;
		document.querySelectorAll('[gh-username="'+userid+'"] #gh-wid-nick')[i].innerHTML = nick;
		document.querySelectorAll('[gh-username="'+userid+'"] #gh-wid-bio')[i].innerHTML = bio;
		document.querySelectorAll('[gh-username="'+userid+'"] #gh-repo')[i].innerHTML = repo;
		document.querySelectorAll('[gh-username="'+userid+'"] #gh-followers')[i].innerHTML = followers;
		document.querySelectorAll('[gh-username="'+userid+'"] #gh-following')[i].innerHTML = following;
		//make elements links
		document.querySelectorAll('[gh-username="'+userid+'"] #gh-link a')[i].setAttribute("href",link);
		document.querySelectorAll('[gh-username="'+userid+'"] #gh-wid-repo a')[i].setAttribute("href",link+"/?tab=repositories");
		document.querySelectorAll('[gh-username="'+userid+'"] #gh-wid-followers a')[i].setAttribute("href",link+"/?tab=followers");
		document.querySelectorAll('[gh-username="'+userid+'"] #gh-wid-following a')[i].setAttribute("href",link+"/?tab=following");
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
	var url = "https://api.github.com/users/"+userid;
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            callback(data, userid);
        }
    };
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
	for (var i=0; i<wids.length; i++) {
		userids.push(wids[i].getAttribute("gh-username"));
	}
	// for each user require details
	for (var i=0; i<userids.length; i++) {
		requireUserDetail(userids[i]);
	}
}

function ready(fn) {
	if (document.readyState != 'loading') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(start);
