/* Author : @hjwu
 * This is inspired by [jekyll-katex-block](https://github.com/drewsberry/jekyll-katex-block)
 * To use it in a post, wrap your equation in a latex block as follows:
 *
 * <katex> E = mc^2 </katex>
 * And that's it!
 *
 * If you also want to have centred equations, you can do:
 *
 * <katex centred="true"> E = mc^2 </katex>
 */

(function(){
    var ka = document.querySelectorAll("katex");

    ka.forEach(function(k){
      var m = k.innerText || k.textContent;
      if (k.hasAttribute("centred")){
        k.innerHTML = "<p class='mathblock'>" + katex.renderToString(m, { displayMode: true }) + "</p>";
      }
      else {
        k.innerHTML = katex.renderToString(m);
      }

  });
})();
