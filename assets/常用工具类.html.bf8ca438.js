import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as e,c,a as s,b as l,e as a,d as n}from"./app.56b03e2c.js";var i="/JavaStudy/images/Java/Java-105.png",u="/JavaStudy/images/Java/Java-106.png",k="/JavaStudy/images/Java/Java-107.png";const r={},d=a(`<h1 id="\u5E38\u7528\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> \u5E38\u7528\u5DE5\u5177\u7C7B</h1><h2 id="collections\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#collections\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> Collections\u5DE5\u5177\u7C7B</h2><p>\u5728Java\u4E2D\uFF0C\u9488\u5BF9\u96C6\u5408\u7684\u64CD\u4F5C\u975E\u5E38\u9891\u7E41\uFF0C\u4F8B\u5982\u5C06\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u6392\u5E8F\u3001\u4ECE\u96C6\u5408\u4E2D\u67E5\u627E\u5143\u7D20\u7B49\uFF0C\u9488\u5BF9\u8FD9\u4E9B\u5E38\u89C1\u64CD\u4F5C\uFF0CJava\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5DE5\u5177\u7C7B\u4E13\u95E8\u7528\u6765\u64CD\u4F5C\u96C6\u5408\uFF0C\u8FD9\u4E2A\u7C7B\u5C31\u662F<code>Collections</code>\uFF0C\u5B83\u4F4D\u4E8Ejava.util\u5305\u4E2D\u3002Collections\u63D0\u4F9B\u4E86\u5927\u91CF\u7684\u9759\u6001\u7684\u65B9\u6CD5\u7528\u4E8E\u5BF9\u96C6\u5408\u4E2D\u5143\u7D20\u8FDB\u884C\u6392\u5E8F\u3001\u67E5\u627E\u548C\u4FEE\u6539\u7B49\u64CD\u4F5C\u3002</p><h3 id="\u6DFB\u52A0\u3001\u6392\u5E8F\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u3001\u6392\u5E8F\u64CD\u4F5C" aria-hidden="true">#</a> \u6DFB\u52A0\u3001\u6392\u5E8F\u64CD\u4F5C</h3><p>Collections\u7C7B\u4E2D\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u65B9\u6CD5\u7528\u4E8E\u5BF9List\u96C6\u5408\u8FDB\u884C\u6DFB\u52A0\u548C\u6392\u5E8F\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982\u4E0B\u8868</p><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u58F0\u660E</th><th style="text-align:center;">\u529F\u80FD\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">static<code>&lt;T&gt;</code>boolean addAll(Collection&lt;? super T&gt;c,T\xB7\xB7\xB7elements)</td><td style="text-align:center;">\u5C06\u6240\u6709\u6307\u5B9A\u5143\u7D20\u6DFB\u52A0\u5230\u6307\u5B9A\u96C6\u5408c\u4E2D</td></tr><tr><td style="text-align:center;">static void reverse(List list)</td><td style="text-align:center;">\u53CD\u8F6C\u6307\u5B9AList\u96C6\u5408\u4E2D\u5143\u7D20\u7684\u987A\u5E8F</td></tr><tr><td style="text-align:center;">static void shuffle(List list)</td><td style="text-align:center;">\u5BF9List\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u8FDB\u884C\u968F\u673A\u6392\u5E8F</td></tr><tr><td style="text-align:center;">static void sort(List list)</td><td style="text-align:center;">\u6839\u636E\u5143\u7D20\u7684\u81EA\u7136\u6392\u5E8F\u5BF9List\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u8FDB\u884C\u6392\u5E8F</td></tr><tr><td style="text-align:center;">static void swap(List list,int i,int j)</td><td style="text-align:center;">\u5C06\u6307\u5B9AList\u96C6\u5408\u4E2D\u89D2\u6807i\u5904\u5143\u7D20\u548Cj\u5904\u5143\u7D20\u8FDB\u884C\u4EA4\u6362</td></tr></tbody></table><p><strong>\u5B9E\u4F8B</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Z&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;K&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//\u6DFB\u52A0\u5143\u7D20</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6392\u5E8F\u524D&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>                              <span class="token comment">//\u53CD\u8F6C\u5143\u7D20</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u53CD\u8F6C\u540E&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>                                 <span class="token comment">//\u6309\u7167\u81EA\u7136\u6392\u5E8F</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6309\u7167\u81EA\u7136\u6392\u5E8F\u540E&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">shuffle</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6309\u7167\u968F\u673A\u6392\u5E8F\u540E&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>                 <span class="token comment">//\u6309\u7167\u968F\u673A\u6392\u5E8F</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">swap</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u96C6\u5408\u9996\u5C3E\u5143\u7D20\u4EA4\u6362\u540E&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">//\u96C6\u5408\u9996\u5C3E\u5143\u7D20\u4EA4\u6362</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\uFF1A</strong></p><p><img src="`+i+`" alt="1655264074457" loading="lazy"></p><h3 id="\u67E5\u627E\u3001\u66FF\u6362\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u3001\u66FF\u6362\u64CD\u4F5C" aria-hidden="true">#</a> \u67E5\u627E\u3001\u66FF\u6362\u64CD\u4F5C</h3><p>Collections\u8FD8\u63D0\u4F9B\u4E86\u4E00\u4E9B\u5E38\u7528\u65B9\u6CD5\u7528\u4E8E\u5BF9\u67E5\u627E\u548C\u66FF\u6362\u96C6\u5408\u4E2D\u7684\u5143\u7D20\uFF0C\u5982\u4E0B\u8868</p><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5\u58F0\u660E</th><th style="text-align:center;">\u529F\u80FD\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:center;">static int binarySearch(List list,Obejct key)</td><td style="text-align:center;">\u4F7F\u7528\u4E8C\u5206\u6CD5\u641C\u7D22\u6307\u5B9A\u5BF9\u8C61\u5728List\u96C6\u5408\u4E2D\u7684\u7D22\u5F15\uFF0C\u67E5\u627E\u7684List\u96C6\u5408\u4E2D\u7684\u5143\u7D20\u5FC5\u987B\u662F\u6709\u5E8F\u7684</td></tr><tr><td style="text-align:center;">static Object max(Collection col)</td><td style="text-align:center;">\u6839\u636E\u5143\u7D20\u7684\u81EA\u7136\u987A\u5E8F\uFF0C\u8FD4\u56DE\u7ED9\u5B9A\u96C6\u5408\u4E2D\u6700\u5927\u7684\u5143\u7D20</td></tr><tr><td style="text-align:center;">static Object min(Collection col)</td><td style="text-align:center;">\u6839\u636E\u5143\u7D20\u7684\u81EA\u7136\u987A\u5E8F\uFF0C\u8FD4\u56DE\u7ED9\u5B9A\u96C6\u5408\u4E2D\u6700\u5C0F\u7684\u5143\u7D20</td></tr><tr><td style="text-align:center;">static boolean replaceAll(List list,Obejct oldVal,Obejct newVal)</td><td style="text-align:center;">\u7528\u4E00\u4E2A\u65B0\u503CnewVal\u66FF\u6362\u6389List\u96C6\u5408\u4E2D\u65E7\u503ColdVal</td></tr></tbody></table><p><strong>\u5B9E\u4F8B</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example02</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">//\u5411\u96C6\u5408\u4E2D\u6DFB\u52A0\u6240\u6709\u6307\u5B9A\u5143\u7D20</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u96C6\u5408\u4E2D\u7684\u5143\u7D20&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u96C6\u5408\u4E2D\u7684\u6700\u5927\u5143\u7D20&quot;</span><span class="token operator">+</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u96C6\u5408\u4E2D\u7684\u6700\u5C0F\u5143\u7D20&quot;</span><span class="token operator">+</span><span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//\u5C06\u96C6\u5408\u4E2D\u76848\u75281\u66FF\u6362</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u66FF\u6362\u8FC7\u540E\u7684\u96C6\u5408&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>                                 <span class="token comment">//\u4F7F\u7528\u4E8C\u5206\u6CD5\u67E5\u627E\u524D\uFF0C\u5FC5\u987B\u4FDD\u8BC1\u5143\u7D20\u6709\u5E8F</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6392\u5E8F\u540E\u7684\u96C6\u5408&quot;</span><span class="token operator">+</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">binarySearch</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u4F7F\u7528\u4E8C\u5206\u6CD5\u67E5\u627E\u5143\u7D202\u6240\u5728\u4F4D\u7F6E&quot;</span><span class="token operator">+</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\uFF1A</strong></p><p><img src="`+u+'" alt="1655264772094" loading="lazy"></p><h2 id="arrays\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#arrays\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> Arrays\u5DE5\u5177\u7C7B</h2>',18),m=n("Arrays\u7C7B\u662F\u4E00\u4E2A\u5DE5\u5177\u7C7B\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u6570\u7EC4\u64CD\u4F5C\u7684\u5F88\u591A\u65B9\u6CD5\uFF0C\u8FD9\u4E2AArrays\u7C7B\u91CC\u5747\u4F4Dstatic\u4FEE\u9970\u7684\u65B9\u6CD5\uFF08static\u4FEE\u9970\u7684\u65B9\u6CD5\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u7C7B\u540D\u8C03\u7528\uFF09\uFF0C"),v={href:"http://xn--Arrays-2x8i375ajt9ajm4blc5cp2a.xxx",target:"_blank",rel:"noopener noreferrer"},b=n("\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7Arrays.xxx"),g=n("(xxx)\u7684\u5F62\u5F0F\u8C03\u7528\u65B9\u6CD5\u3002"),y=a(`<p><strong>1)int binarySearch(type[]a,type key)</strong></p><p>\u4F7F\u7528\u4E8C\u5206\u6CD5\u67E5\u8BE2 key \u5143\u7D20\u503C\u5728 a \u6570\u7EC4\u4E2D\u51FA\u73B0\u7684\u7D22\u5F15\uFF0C\u5982\u679C a \u6570\u7EC4\u4E0D\u5305\u542B key \u5143\u7D20\u503C\uFF0C\u5219\u8FD4\u56DE\u8D1F\u6570\u3002\u8C03\u7528\u8BE5\u65B9\u6CD5\u65F6\u8981\u6C42\u6570\u7EC4\u4E2D\u5143\u7D20\u5DF1\u7ECF\u6309\u5347\u5E8F\u6392\u5217\uFF0C\u8FD9\u6837\u624D\u80FD\u5F97\u5230\u6B63\u786E\u7ED3\u679C\u3002</p><p><strong>2)int binarySearch(type[]a,int fromindex,int toindex,type key)</strong></p><p>\u8FD9\u4E2A\u65B9\u6CD5\u4E0E\u524D\u4E00\u4E2A\u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u4F46\u5B83\u53EA\u641C\u7D22 a \u6570\u7EC4\u4E2D fromIndex \u5230 toIndex \u7D22\u5F15\u7684\u5143\u7D20\u3002\u8C03\u7528\u8BE5\u65B9\u6CD5\u65F6\u8981\u6C42\u6570\u7EC4\u4E2D\u5143\u7D20\u5DF1\u7ECF\u6309\u5347\u5E8F\u6392\u5217\uFF0C\u8FD9\u6837\u624D\u80FD\u5F97\u5230\u6B63\u786E\u7ED3\u679C\u3002</p><p><strong>3\uFF09type[] copyOf(type[] original, int length)</strong></p><p>\u8FD9\u4E2A\u65B9\u6CD5\u5C06\u4F1A\u628A original \u6570\u7EC4\u590D\u5236\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\uFF0C\u5176\u4E2D length \u662F\u65B0\u6570\u7EC4\u7684\u957F\u5EA6\u3002\u5982\u679C length \u5C0F\u4E8E original \u6570\u7EC4\u7684\u957F\u5EA6\uFF0C\u5219\u65B0\u6570\u7EC4\u5C31\u662F\u539F\u6570\u7EC4\u7684\u524D\u9762 length \u4E2A\u5143\u7D20\uFF0C\u5982\u679C length \u5927\u4E8E original \u6570\u7EC4\u7684\u957F\u5EA6\uFF0C\u5219\u65B0\u6570\u7EC4\u7684\u524D\u9762\u5143\u7D22\u5C31\u662F\u539F\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20\uFF0C\u540E\u9762\u8865\u5145 0\uFF08\u6570\u503C\u7C7B\u578B\uFF09\u3001false\uFF08\u5E03\u5C14\u7C7B\u578B\uFF09\u6216\u8005 null\uFF08\u5F15\u7528\u7C7B\u578B\uFF09\u3002</p><p><strong>4\uFF09type[] copyOfRange(type[] original, int from, int to)</strong></p><p>\u8FD9\u4E2A\u65B9\u6CD5\u4E0E\u524D\u9762\u65B9\u6CD5\u76F8\u4F3C\uFF0C\u4F46\u8FD9\u4E2A\u65B9\u6CD5\u53EA\u590D\u5236 original \u6570\u7EC4\u7684 from \u7D22\u5F15\u5230 to \u7D22\u5F15\u7684\u5143\u7D20\u3002</p><p><strong>5\uFF09boolean equals(type[] a, type[] a2)</strong></p><p>\u5982\u679C a \u6570\u7EC4\u548C a2 \u6570\u7EC4\u7684\u957F\u5EA6\u76F8\u7B49\uFF0C\u800C\u4E14 a \u6570\u7EC4\u548C a2 \u6570\u7EC4\u7684\u6570\u7EC4\u5143\u7D20\u4E5F\u4E00\u4E00\u76F8\u540C\uFF0C\u8BE5\u65B9\u6CD5\u5C06\u8FD4\u56DE true\u3002</p><p><strong>6\uFF09void fill(type[] a, type val)</strong></p><p>\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u628A a \u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20\u90FD\u8D4B\u503C\u4E3A val\u3002</p><p><strong>7\uFF09void fill(type[] a, int fromIndex, int toIndex, type val)</strong></p><p>\u8BE5\u65B9\u6CD5\u4E0E\u524D\u4E00\u4E2A\u65B9\u6CD5\u7684\u4F5C\u7528\u76F8\u540C\uFF0C\u533A\u522B\u53EA\u662F\u8BE5\u65B9\u6CD5\u4EC5\u4EC5\u5C06 a \u6570\u7EC4\u7684 fromIndex \u5230 toIndex \u7D22\u5F15\u7684\u6570\u7EC4\u5143\u7D20\u8D4B\u503C\u4E3A val\u3002</p><p><strong>8\uFF09void sort(type[] a)</strong></p><p>\u8BE5\u65B9\u6CD5\u5BF9 a \u6570\u7EC4\u7684\u6570\u7EC4\u5143\u7D20\u8FDB\u884C\u6392\u5E8F\u3002</p><p><strong>9\uFF09void sort(type[] a, int fromIndex, int toIndex)</strong></p><p>\u8BE5\u65B9\u6CD5\u4E0E\u524D\u4E00\u4E2A\u65B9\u6CD5\u76F8\u4F3C\uFF0C\u533A\u522B\u662F\u8BE5\u65B9\u6CD5\u4EC5\u4EC5\u5BF9 fromIndex \u5230 toIndex \u7D22\u5F15\u7684\u5143\u7D20\u8FDB\u884C\u6392\u5E8F\u3002</p><p><strong>10\uFF09String toString(type[] a)</strong></p><p>\u8BE5\u65B9\u6CD5\u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u6362\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u8BE5\u65B9\u6CD5\u6309\u987A\u5E8F\u628A\u591A\u4E2A\u6570\u7EC4\u5143\u7D20\u8FDE\u7F00\u5728\u4E00\u8D77\uFF0C\u591A\u4E2A\u6570\u7EC4\u5143\u7D20\u4F7F\u7528\u82F1\u6587\u9017\u53F7<code>,</code>\u548C\u7A7A\u683C\u9694\u5F00\u3002</p><p>\u4E0B\u9762\u7A0B\u5E8F\u793A\u8303\u4E86 Arrays \u7C7B\u7684\u7528\u6CD5\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Example03</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2Aa\u6570\u7EC4</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5B9A\u4E49\u4E00\u4E2Aa2\u6570\u7EC4</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">//a\u6570\u7EC4\u548Ca2\u6570\u7EC4\u957F\u5EA6\u76F8\u7B49\uFF0C\u6BCF\u4E2A\u5143\u7D20\u4E00\u6B21\u76F8\u7B49\uFF0C\u5C06\u8F93\u51FAtrue</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a\u6570\u7EC4\u548Ca2\u6570\u7EC4\u662F\u5426\u76F8\u7B49&quot;</span><span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>a2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u901A\u8FC7\u590D\u5236a\u6570\u7EC4\uFF0C\u751F\u6210\u4E00\u4E2A\u65B0\u7684b\u6570\u7EC4</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a\u6570\u7EC4\u548Cb\u6570\u7EC4\u957F\u5EA6\u662F\u5426\u76F8\u7B49&quot;</span><span class="token operator">+</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5C06b\u6570\u7EC4\u7B2C3\u4E2A\u5143\u7D20\uFF08\u5305\u62EC\uFF09\u5230\u7B2C5\u4E2A\u5143\u7D20\uFF08\u4E0D\u5305\u62EC\uFF09\u8D4B\u503C\u4E3A1</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8F93\u51FAb\u6570\u7EC4\u7684\u4EE5\u5143\u7D20\uFF0C\u5C06\u8F93\u51FA[1, 2, 1, 1, 5, 0]</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b\u6570\u7EC4\u7684\u5143\u7D20\u4E3A&quot;</span><span class="token operator">+</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5BF9b\u6570\u7EC4\u8FDB\u884C\u6392\u5E8F</span>
        <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u8F93\u51FAb\u6570\u7EC4\u7684\u5143\u7D20[0, 1, 1, 1, 2, 5]</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b\u6570\u7EC4\u7684\u5143\u7D20\u4F4D&quot;</span><span class="token operator">+</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\u5982\u4E0B\uFF1A</p><p><img src="`+k+'" alt="1655339572989" loading="lazy"></p>',24);function f(h,x){const t=o("ExternalLinkIcon");return e(),c("div",null,[d,s("p",null,[m,s("a",v,[b,l(t)]),g]),y])}var w=p(r,[["render",f],["__file","\u5E38\u7528\u5DE5\u5177\u7C7B.html.vue"]]);export{w as default};
