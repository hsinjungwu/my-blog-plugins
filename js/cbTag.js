/* Author: hsinjungwu
 * motivated by [Octopress](http://octopress.com) codeblock plugin
 *
 * original in http://octopress.org/docs/plugins/codeblock/
 * {% codeblock [lang:language] [title] [url] [link text] [start:#] [mark:#,#-#] [linenos]%}
 * code snippet
 * {% endcodeblock %} 
 *
 * my custom
 * 
 * <cb caption="" url="" title="" mark="" line="">
 * {% highlight language linenos %}
 * code snippet
 * {% endhighlight %}
 * </cb>
 *
 * where caption = [title], title = [link text] and 
 * if line = "#-" then it does the same thing as [start:#]
 * if line = "#,#-#", it will resert the number of lines.
 */

function RenderCbTag(){
  $("div.highlight").each(function(){
    var h = $(this);
    var cb = h.prev().children("cb");
    if (cb){
      var c = cb.attr("caption");
      var u = cb.attr("url");
      var t = cb.attr("title");
      var l = cb.attr("line");
      if (l) ResetLineno(h, l);
      var m = cb.attr("mark");
      if (m) h.html(MarkLineno(h, m));
      if (u && !t) t = "link";
      var r;
      if (u || c){
        r = '<figure class="octocode"><figcaption>';
        if (c) r += c;
        if (u) r += '<a href="' + u + '">' + t + '</a>';
        r += '</figcaption><div class="highlight">';
        r += h.html();
        r += '</div></figure>';
        h.replaceWith(r);
      }
      cb.remove();
    }
  });
}

function ResetLineno(c, ns){
  var lnno = c.find(".lineno");
  var pns = ParseNumStr(ns, lnno.length);
  var l = pns[pns.length - 1].toString().length;
  lnno.each(function(i){
    var t = PadLeft(pns[i].toString(), l);
    $(this).text(t);
  });
}

function MarkLineno(c, mk){
  var ct = c.html();
  var ln = c.find(".lineno");
  var pmk = ParseNumStr(mk, ln.length);
  ln.each(function(i){
    var t = parseInt($(this).text().trim());
    var cls; 
    if (pmk.indexOf(t) > -1) cls = " class='marked'";
    var p;
    if (i == 0) p = "<table class='markedcode'><tbody>";
    else p = "</td></tr>";
    p += "<tr";
    if (cls) p += cls;
    p += "><td>";
    var oldt = $(this).clone().wrap("<p>").parent().html();
    ct = ct.replace(oldt, p + oldt + "</td><td>");
  });
  if (ln.length > 0) ct = ct.replace("</code></pre>", "</td></tr></tbody></table></code></pre>");
  return ct;
}

function ParseNumStr(ns, total){
  var a = ns.split(',');
  var r = []; 
  for (var i = 0; i<a.length; i++){
    if (a[i].indexOf('-') > -1){
      b = a[i].split('-');      
      if (b[1] == "")
        for (var j = 0; j <= total; j++)
        {
          r.push(parseInt(b[0])+j);
        }
      else
        for (var j = parseInt(b[0]); j <= parseInt(b[1]); j++)
        {
          r.push(j);
        }
    }
    else r.push(parseInt(a[i]));
  }
  return r.sort(function(a, b){return a-b});
}

function PadLeft(s, l){
  if(s.length >= l) return s;
  else return PadLeft(" " + s, l);
}
