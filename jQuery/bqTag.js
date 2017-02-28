/* Author: hsinjungwu
 * 
 * motivated by [Octopress](http://octopress.com) blockquote plugin
 *
 * original in http://octopress.org/docs/plugins/blockquote/
 * {% blockquote [author[, source]] [link] [source_link_title] %}
 * Quote string
 * {% endblockquote %}
 *
 * my custom
 * <cb autor="" link="" soure="">
 * Quote string
 * </cb>
 * where source attribute = [source_link_title]
 */ 

function RenderBqTag(){
  $("bq").each(function(){
    var r;    
    
    var s = $(this).attr("source"); 
    var l = $(this).attr("link"); 

    if (s && l) r = '<cite><a href="' + l + '">' + s + '</a></cite>';
    else if(s && !l) r = '<cite>' + s + '</cite>';
    else if (!s && l) r = '<cite><a href="' + l + '">' + l + '</a></cite>';

    var a = $(this).attr("author");
    if (a) {
      if (r) r += ', ';
      else r = '';
      r += '<strong>' + a + '</strong>';
    }

    if (r) r = '<footer>' + r + '</footer>';

    r = '<blockquote><p>' + $(this).html() + '</p>' + r + '</blockquote>';

    $(this).replaceWith(r);
  });
}
