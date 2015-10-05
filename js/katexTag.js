/* Author: hsinjungwu
 * 
 * This is inspired by [jekyll-katex-block](https://github.com/drewsberry/jekyll-katex-block)
 * 
 * To use it in a post, wrap your equation in a latex block as follows:
 *
 * <katex> E = mc^2 </katex>
 * 
 * And that's it!
 *
 * If you also want to have centred equations, you can do:
 *
 * <katex centred="true"> E = mc^2 </katex>
 */

function RenderKatexTag(){
  $("katex").each(function(){
    var m = $(this).html();
    //if "superscript" set true
    //it will cause '^' become <sup></sup> 
    //m = m.replace("<sup>", "^").replace("</sup>", "");
    
    var c = $(this).attr("centred");
    if (!c) c = "false";
    var r;
    if (c.toLowerCase() == "true"){
      r = "<p class='mathblock'>" + katex.renderToString(m, { displayMode: true }) + "</p>";
    }
    else {
      r = katex.renderToString(m);
    }
    $(this).replaceWith(r);
  });
}
