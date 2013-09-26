// Method from http://www.openjs.com/articles/ajax_xmlhttp_using_post.php

function getSelectionText() {
    var text = "";
    if (window.getSelection) {
                text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
                text = document.selection.createRange().text;
    }
    return text;
}


var http = new XMLHttpRequest();
var url = "https://prowl.weks.net/publicapi/add";
var apikey = "XXXX";
var application = "Browser";
var evt = "Sent from browser";
var selection = getSelectionText();
if (selection != '') {
                selection = selection + escape("\n\n\n");
}

var description = selection + encodeURIComponent(document.title.replace(/^\s*|\s*$/g,'')) + escape("\n") + encodeURIComponent(location.href);

var params = "apikey="+apikey
            +"&application="+escape(application)
            +"&event="+escape(evt)
            +"&description="+description
            ;
http.open("POST", url, true);

//Send the proper header information along with the request
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//http.setRequestHeader("Content-length", params.length);
//http.setRequestHeader("Connection", "close");

//http.onreadystatechange = function() {//Call a function when the state changes.
//	if(http.readyState == 4 && http.status == 200) {
//		alert(http.responseText);
//	}
//}
http.send(params);
