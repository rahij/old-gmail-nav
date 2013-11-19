var app_num = document.URL.split('/')[5] == undefined ? 0 : document.URL.split('/')[5];
var drive_path = app_num == 1 ? 'a/groupon.com' : ''
var html_string = "<div id='menu_bar'>"
+"<a href='http://google.com' target='_blank'>Search</a>"
+"<a href='http://images.google.com' target='_blank'>Images</a>"
+"<a href='http://maps.google.com' target='_blank'>Maps</a>"
+"<a href='http://play.google.com' target='_blank'>Play</a>"
+"<a href='http://youtube.com' target='_blank'>YouTube</a>"
+"<a href='http://news.google.com' target='_blank'>News</a>"
+"<a href='http://mail.google.com' class='active' target='_blank'>Gmail</a>"
+"<a href='http://drive.google.com/"+drive_path+"' target='_blank'>Drive</a>"
+"<a href='http://calendar.google.com/b/"+app_num+"/render?tab=mc' target='_blank'>Calendar</a>"
+"<a href='http://translate.google.com' target='_blank'>Translate</a>"
+ "</div>"
;

$('body').before(html_string);