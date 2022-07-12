import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as t,e as p}from"./app.56b03e2c.js";var e="/JavaStudy/images/Java/Java-87.png",n="/JavaStudy/images/Java/Java-88.png",o="/JavaStudy/images/Java/Java-88-1.png";const c={},l=p(`<h1 id="collection\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#collection\u63A5\u53E3" aria-hidden="true">#</a> Collection\u63A5\u53E3</h1><h2 id="\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u6982\u8FF0" aria-hidden="true">#</a> \u6982\u8FF0</h2><p><strong>Collection\u63A5\u53E3\u662FList\u3001Set\u63A5\u53E3\u7684\u7236\u63A5\u53E3\uFF0C\u901A\u5E38\u60C5\u51B5\u4E0B\u4E0D\u88AB\u76F4\u63A5\u4F7F\u7528</strong>.Collection\u63A5\u53E3\u5B9A\u4E49\u4E86\u4E00\u4E9B\u901A\u7528\u7684\u65B9\u6CD5\uFF0C\u901A\u8FC7\u8FD9\u4E9B\u65B9\u6CD5\u53EF\u4EE5\u5B9E\u73B0\u5BF9\u96C6\u5408\u7684\u57FA\u672C\u64CD\u4F5C\u3002\u5B9A\u4E49\u7684\u65B9\u6CD5\u65E2\u53EF\u7528\u4E8E\u64CD\u4F5CList\u96C6\u5408\uFF0C\u4E5F\u53EF\u7528\u4E8ESet\u96C6\u5408\u3002</p><h2 id="collection\u63A5\u53E3\u7684\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#collection\u63A5\u53E3\u7684\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> Collection\u63A5\u53E3\u7684\u5E38\u7528\u65B9\u6CD5</h2><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u540D\u79F0</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">boolean add(E e)</td><td style="text-align:center;">\u5411\u96C6\u5408\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20\uFF0C\u5982\u679C\u96C6\u5408\u5BF9\u8C61\u88AB\u6DFB\u52A0\u64CD\u4F5C\u6539\u53D8\u4E86\uFF0C\u5219\u8FD4\u56DE true\u3002E \u662F\u5143\u7D20\u7684\u6570\u636E\u7C7B\u578B</td></tr><tr><td style="text-align:center;">boolean addAll(Collection c)</td><td style="text-align:center;">\u5411\u96C6\u5408\u4E2D\u6DFB\u52A0\u96C6\u5408 c \u4E2D\u7684\u6240\u6709\u5143\u7D20\uFF0C\u5982\u679C\u96C6\u5408\u5BF9\u8C61\u88AB\u6DFB\u52A0\u64CD\u4F5C\u6539\u53D8\u4E86\uFF0C\u5219\u8FD4\u56DE true\u3002</td></tr><tr><td style="text-align:center;">void clear()</td><td style="text-align:center;">\u6E05\u9664\u96C6\u5408\u4E2D\u7684\u6240\u6709\u5143\u7D20\uFF0C\u5C06\u96C6\u5408\u957F\u5EA6\u53D8\u4E3A 0\u3002</td></tr><tr><td style="text-align:center;">boolean contains(Object o)</td><td style="text-align:center;">\u5224\u65AD\u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728\u6307\u5B9A\u5143\u7D20</td></tr><tr><td style="text-align:center;">boolean containsAll(Collection c)</td><td style="text-align:center;">\u5224\u65AD\u96C6\u5408\u4E2D\u662F\u5426\u5305\u542B\u96C6\u5408 c \u4E2D\u7684\u6240\u6709\u5143\u7D20</td></tr><tr><td style="text-align:center;">boolean isEmpty()</td><td style="text-align:center;">\u5224\u65AD\u96C6\u5408\u662F\u5426\u4E3A\u7A7A</td></tr><tr><td style="text-align:center;">Iterator<code>&lt;E&gt;</code>iterator()</td><td style="text-align:center;">\u8FD4\u56DE\u4E00\u4E2A Iterator \u5BF9\u8C61\uFF0C\u7528\u4E8E\u904D\u5386\u96C6\u5408\u4E2D\u7684\u5143\u7D20</td></tr><tr><td style="text-align:center;">boolean remove(Object o)</td><td style="text-align:center;">\u4ECE\u96C6\u5408\u4E2D\u5220\u9664\u4E00\u4E2A\u6307\u5B9A\u5143\u7D20\uFF0C\u5F53\u96C6\u5408\u4E2D\u5305\u542B\u4E86\u4E00\u4E2A\u6216\u591A\u4E2A\u5143\u7D20 o \u65F6\uFF0C\u8BE5\u65B9\u6CD5\u53EA\u5220\u9664\u7B2C\u4E00\u4E2A\u7B26\u5408\u6761\u4EF6\u7684\u5143\u7D20\uFF0C\u8BE5\u65B9\u6CD5\u5C06\u8FD4\u56DE true\u3002</td></tr><tr><td style="text-align:center;">boolean removeAll(Collection c)</td><td style="text-align:center;">\u4ECE\u96C6\u5408\u4E2D\u5220\u9664\u6240\u6709\u5728\u96C6\u5408 c \u4E2D\u51FA\u73B0\u7684\u5143\u7D20\uFF08\u76F8\u5F53\u4E8E\u628A\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u96C6\u5408\u51CF\u53BB\u96C6\u5408 c\uFF09\u3002\u5982\u679C\u8BE5\u64CD\u4F5C\u6539\u53D8\u4E86\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u96C6\u5408\uFF0C\u5219\u8BE5\u65B9\u6CD5\u8FD4\u56DE true\u3002</td></tr><tr><td style="text-align:center;">boolean retainAll(Collection c)</td><td style="text-align:center;">\u4ECE\u96C6\u5408\u4E2D\u5220\u9664\u96C6\u5408 c \u91CC\u4E0D\u5305\u542B\u7684\u5143\u7D20\uFF08\u76F8\u5F53\u4E8E\u628A\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u96C6\u5408\u53D8\u6210\u8BE5\u96C6\u5408\u548C\u96C6\u5408 c \u7684\u4EA4\u96C6\uFF09\uFF0C\u5982\u679C\u8BE5\u64CD\u4F5C\u6539\u53D8\u4E86\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u96C6\u5408\uFF0C\u5219\u8BE5\u65B9\u6CD5\u8FD4\u56DE true\u3002</td></tr><tr><td style="text-align:center;">int size()</td><td style="text-align:center;">\u8FD4\u56DE\u96C6\u5408\u4E2D\u5143\u7D20\u7684\u4E2A\u6570</td></tr><tr><td style="text-align:center;">Object[] toArray()</td><td style="text-align:center;">\u628A\u96C6\u5408\u8F6C\u6362\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6240\u6709\u7684\u96C6\u5408\u5143\u7D20\u53D8\u6210\u5BF9\u5E94\u7684\u6570\u7EC4\u5143\u7D20\u3002</td></tr></tbody></table><p><strong>\u96C6\u5408\u7C7B\u5C31\u50CF\u5BB9\u5668\uFF0C\u73B0\u5B9E\u751F\u6D3B\u4E2D\u5BB9\u5668\u7684\u529F\u80FD\uFF0C\u5C31\u662F\u6DFB\u52A0\u5BF9\u8C61\u3001\u5220\u9664\u5BF9\u8C61\u3001\u6E05\u7A7A\u5BB9\u5668\u548C\u5224\u65AD\u5BB9\u5668\u662F\u5426\u4E3A\u7A7A\u7B49\uFF0C\u96C6\u5408\u7C7B\u4E3A\u8FD9\u4E9B\u529F\u80FD\u90FD\u63D0\u4F9B\u4E86\u5BF9\u5E94\u7684\u65B9\u6CD5\u3002</strong></p><h2 id="\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B" aria-hidden="true">#</a> \u6848\u4F8B</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CollectionMethod</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// add:\u6DFB\u52A0\u5355\u4E2A\u5143\u7D20</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;java&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;add:\u6DFB\u52A0\u5355\u4E2A\u5143\u7D20-&gt;list=&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// remove:\u5220\u9664\u6307\u5B9A\u5143\u7D20</span>
        list<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;remove:\u5220\u9664\u6307\u5B9A\u5143\u7D20-&gt;list=&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// contains:\u67E5\u627E\u5143\u7D20\u662F\u5426\u5B58\u5728</span>
        <span class="token keyword">boolean</span> contains <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;contains:\u67E5\u627E\u5143\u7D20\u662F\u5426\u5B58\u5728-&gt;\u5143\u7D20\u662F\u5426\u5B58\u5728&quot;</span><span class="token operator">+</span>contains<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// size:\u83B7\u53D6\u5143\u7D20\u4E2A\u6570</span>
        <span class="token keyword">int</span> size <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;size:\u83B7\u53D6\u5143\u7D20\u4E2A\u6570-&gt;\u5143\u7D20\u4E2A\u6570&quot;</span><span class="token operator">+</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// isEmpty:\u5224\u65AD\u662F\u5426\u4E3A\u7A7A</span>
        <span class="token keyword">boolean</span> empty <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;isEmpty:\u5224\u65AD\u662F\u5426\u4E3A\u7A7A-&gt;\u662F\u5426\u4E3A\u7A7A&quot;</span><span class="token operator">+</span>empty<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// clear:\u6E05\u7A7A</span>
        list<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// addAll:\u6DFB\u52A0\u591A\u4E2A\u5143\u7D20</span>
        <span class="token class-name">List</span> list2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">21</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;addAll:\u6DFB\u52A0\u591A\u4E2A\u5143\u7D20-&gt;list&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// containsAll:\u67E5\u627E\u591A\u4E2A\u5143\u7D20\u662F\u5426\u90FD\u5B58\u5728</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;containsAll:\u67E5\u627E\u591A\u4E2A\u5143\u7D20\u662F\u5426\u90FD\u5B58\u5728-&gt;&quot;</span><span class="token operator">+</span>list<span class="token punctuation">.</span><span class="token function">containsAll</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// removeAll\uFF1A\u5220\u9664\u591A\u4E2A\u5143\u7D20</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E09\u56FD\u6F14\u4E49&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">removeAll</span><span class="token punctuation">(</span>list2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;removeAll\uFF1A\u5220\u9664\u591A\u4E2A\u5143\u7D20-&gt;&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u8BF4\u660E\uFF1A\u4EE5 ArrayList \u5B9E\u73B0\u7C7B\u6765\u6F14\u793A.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u7ED3\u679C</strong></p><p><img src="`+e+`" alt="1654997295743" loading="lazy"></p><h2 id="collection\u63A5\u53E3\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#collection\u63A5\u53E3\u904D\u5386" aria-hidden="true">#</a> Collection\u63A5\u53E3\u904D\u5386</h2><h3 id="iterator\u904D\u5386\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#iterator\u904D\u5386\u96C6\u5408" aria-hidden="true">#</a> Iterator\u904D\u5386\u96C6\u5408</h3><p><strong>\u57FA\u672C\u4ECB\u7ECD</strong></p><p>1)Iteratorj\u5BF9\u8C61\u79F0\u4E3A\u8FED\u4EE3\u5668\uFF0C\u4E3B\u8981\u7528\u4E8E\u904D\u5386Collection\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u3002 2)\u6240\u6709\u5B9E\u73B0\u4E86Collection\u63A5\u53E3\u7684\u96C6\u5408\u7C7B\u90FD\u6709\u4E00\u4E2Aiterator0\u65B9\u6CD5\uFF0C\u7528\u4EE5\u8FD4\u56DE \u4E00\u4E2A\u5B9E\u73B0\u4E86Iterator\u63A5\u53E3\u7684\u5BF9\u8C61\uFF0C\u5373\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u8FED\u4EE3\u5668\u3002 3)Iterator\u4EC5\u7528\u4E8E\u904D\u5386\u96C6\u5408\uFF0CIterator\u672C\u8EAB\u5E76\u4E0D\u5B58\u653E\u5BF9\u8C61\u3002</p><p><strong>\u6848\u4F8B</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IteratorExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u521B\u5EFAArrayList\u96C6\u5408</span>
        <span class="token class-name">ArrayList</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5411\u96C6\u5408\u6DFB\u52A0\u5143\u7D20</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;data_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;data_2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;data_3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u83B7\u53D6Iterator\u5BF9\u8C61</span>
        <span class="token class-name">Iterator</span> iterator <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5224\u65AD\u96C6\u5408\u4E2D\u662F\u5426\u5B58\u5728\u4E0B\u4E00\u4E2A\u5143\u7D20</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Object</span> obj <span class="token operator">=</span>  iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8FD0\u884C\u7ED3\u679C</strong></p><p><img src="`+n+`" alt="1654997885939" loading="lazy"></p><div class="custom-container info"><p class="custom-container-title">\u4F7F\u7528Iterator\u63A5\u53E3\u904D\u5386\u96C6\u5408\u65F6\u8BBE\u8BA1\u5230\u7684\u4E24\u4E2A\u65B9\u6CD5</p><ol><li><p>hasNext();</p></li><li><p>\u5224\u65AD\u662F\u5426\u8FD8\u6709\u4E0B\u4E00\u4E2A\u5143\u7D20</p><ol><li>\u4E5F\u5C31\u662F\u8C03\u7528hasNext()\u65B9\u6CD5\u540E\u5C31\u5224\u65AD\u4E0B\u4E00\u4E2A\u4F4D\u7F6E\u4E0A\u6709\u6CA1\u6709\u5143\u7D20,\u5982\u679C\u6709\u7684\u8BDD\u5C31\u8FD4\u56DE\u4E00\u4E2Atrue,\u5982\u679C\u6CA1\u6709\u7684\u8BDD\u5C31\u8FD4\u56DE\u4E00\u4E2Afalse</li></ol></li><li><p>next();</p><p>\u2460 \u6307\u9488\u4E0B\u79FB</p><p>\u2461 \u5C06\u6307\u9488\u4E0B\u79FB\u4E4B\u540E\u4F4D\u7F6E\u4E0A\u7684\u5143\u7D20\u8FD4\u56DE</p></li><li><p>\u5982\u679C\u8C03\u7528next()\u65B9\u6CD5\u6307\u9488\u4E0B\u79FB\u4E4B\u540E\u5982\u679C\u4E0B\u79FB\u540E\u4F4D\u7F6E\u4E0A\u7684\u96C6\u5408\u5143\u7D20\u4E3Anull\u65F6\u5C31\u4F1A\u629B\u51FA\u4E00\u4E2ANoSuchElementException(\u627E\u4E0D\u5230\u5143\u7D20)</p></li></ol></div><h3 id="foreach\u904D\u5386\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#foreach\u904D\u5386\u96C6\u5408" aria-hidden="true">#</a> foreach\u904D\u5386\u96C6\u5408</h3><p>foreach\u5FAA\u73AF\u7528\u4E8E\u904D\u5386\u6570\u7EC4\u6216\u96C6\u5408\u4E2D\u7684\u5143\u7D20\uFF0C\u5176\u5177\u4F53\u8BED\u6CD5\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>\u5BB9\u5668\u4E2D\u5143\u7D20\u7C7B\u578B \u4E34\u65F6\u53D8\u91CF <span class="token operator">:</span> \u5BB9\u5668\u53D8\u91CF<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//\u6267\u884C\u8BED\u53E5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u683C\u5F0F\u53EF\u4EE5\u770B\u51FA\uFF0C\u4E0Efor\u5FAA\u73AF\u76F8\u6BD4\uFF0Cforeach\u5FAA\u73AF\u4E0D\u9700\u8981\u83B7\u5F97\u5BB9\u5668\u7684\u957F\u5EA6\uFF0C\u4E5F\u4E0D\u9700\u8981\u6839\u636E\u7D22\u5F15\u8BBF\u95EE\u5BB9\u5668\u4E2D\u7684\u5143\u7D20\uFF0C\u4F46\u5B83\u4F1A\u81EA\u52A8\u904D\u5386\u5BB9\u5668\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u3002</p><p><strong>\u6848\u4F8B</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ForeachExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u521B\u5EFAArrayList\u96C6\u5408</span>
        <span class="token class-name">ArrayList</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5411\u96C6\u5408\u6DFB\u52A0\u5143\u7D20</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;data_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;data_2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;data_3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u4F7F\u7528foreach\u5FAA\u73AF\u904D\u5386</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//\u53D6\u51FA\u5E76\u6253\u5370\u96C6\u5408\u4E2D\u7684\u5143\u7D20</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+n+`" alt="1654997885939" loading="lazy"></p><h3 id="jdk8\u7684foreach\u904D\u5386\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#jdk8\u7684foreach\u904D\u5386\u96C6\u5408" aria-hidden="true">#</a> JDK8\u7684foreach\u904D\u5386\u96C6\u5408</h3><p>\u5728JDK8\u4E2D\uFF0C\u6839\u636ELambda\u8868\u8FBE\u5F0F\u7279\u6027\u8FD8\u589E\u52A0\u4E86\u4E00\u4E2AforEach\uFF08Consumer action\uFF09\u65B9\u6CD5\u6765\u904D\u5386\u96C6\u5408\uFF0C\u8BE5\u65B9\u6CD5\u6240\u9700\u8981\u7684\u53C2\u6570\u662F\u4E00\u4E2A\u51FD\u6570\u5F0F\u63A5\u53E3\u3002</p><p><strong>\u6848\u4F8B</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ForeachExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u521B\u5EFAArrayList\u96C6\u5408</span>
        <span class="token class-name">ArrayList</span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5411\u96C6\u5408\u6DFB\u52A0\u5143\u7D20</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;data_1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;data_2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;data_3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u4F7F\u7528JDK8\u589E\u52A0\u7684forEach\uFF08Consumer action\uFF09\u5FAA\u73AF\u904D\u5386</span>
        list<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>obj<span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u8FED\u4EE3\u96C6\u5408\u5143\u7D20&quot;</span><span class="token operator">+</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="1654999110561" loading="lazy"></p>',31),i=[l];function u(r,k){return a(),t("div",null,i)}var v=s(c,[["render",u],["__file","Collection\u63A5\u53E3.html.vue"]]);export{v as default};
