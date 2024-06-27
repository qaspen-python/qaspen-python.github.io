import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-BBMUlEyS.js";const t={},o=e(`<p>There is the default example for <code>FastAPI</code> framework.</p><h2 id="standard-example" tabindex="-1"><a class="header-anchor" href="#standard-example"><span>Standard example.</span></a></h2><p>This code is perfect for situations when your endpoints don&#39;t have complex logic like sending messages over network with some queues (<code>RabbitMQ</code>, <code>NATS</code>, <code>Kafka</code> and etc) or making long calculations, so a connection won&#39;t idle to much. You need to take this restrictions into account if you don&#39;t have external database connection pool like <code>PGBouncer</code>.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># Start example</span>
<span class="token keyword">from</span> contextlib <span class="token keyword">import</span> asynccontextmanager
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Annotated<span class="token punctuation">,</span> AsyncGenerator<span class="token punctuation">,</span> cast
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> Depends<span class="token punctuation">,</span> FastAPI<span class="token punctuation">,</span> Request
<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>responses <span class="token keyword">import</span> JSONResponse
<span class="token keyword">from</span> psqlpy <span class="token keyword">import</span> ConnectionPool<span class="token punctuation">,</span> Connection
<span class="token keyword">import</span> uvicorn


<span class="token decorator annotation punctuation">@asynccontextmanager</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">lifespan</span><span class="token punctuation">(</span>app<span class="token punctuation">:</span> FastAPI<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> AsyncGenerator<span class="token punctuation">[</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Startup database connection pool and close it on shutdown.&quot;&quot;&quot;</span>
    db_pool <span class="token operator">=</span> ConnectionPool<span class="token punctuation">(</span>
        dsn<span class="token operator">=</span><span class="token string">&quot;postgres://postgres:postgres@localhost:5432/postgres&quot;</span><span class="token punctuation">,</span>
        max_db_pool_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    app<span class="token punctuation">.</span>state<span class="token punctuation">.</span>db_pool <span class="token operator">=</span> db_pool
    <span class="token keyword">yield</span>
    <span class="token keyword">await</span> db_pool<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span>lifespan<span class="token operator">=</span>lifespan<span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">db_connection</span><span class="token punctuation">(</span>request<span class="token punctuation">:</span> Request<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> Connection<span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Retrieve new connection from connection pool and return it.&quot;&quot;&quot;</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token punctuation">(</span>cast<span class="token punctuation">(</span>ConnectionPool<span class="token punctuation">,</span> request<span class="token punctuation">.</span>app<span class="token punctuation">.</span>state<span class="token punctuation">.</span>db_pool<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>connection<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">pg_pool_example</span><span class="token punctuation">(</span>
    db_connection<span class="token punctuation">:</span> Annotated<span class="token punctuation">[</span>Connection<span class="token punctuation">,</span> Depends<span class="token punctuation">(</span>db_connection<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">:</span>
    query_result <span class="token operator">=</span> <span class="token keyword">await</span> db_connection<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>
        <span class="token string">&quot;SELECT * FROM users&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> JSONResponse<span class="token punctuation">(</span>content<span class="token operator">=</span>query_result<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
        <span class="token string">&quot;start_example:app&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="advanced-example" tabindex="-1"><a class="header-anchor" href="#advanced-example"><span>Advanced example</span></a></h2><p>If you don&#39;t have external connection pool like <code>PGBouncer</code> and your application have a lot of endpoints with a lot of complex logic, so it&#39;s better not to take a connection from a pool at the start of an endpoint execution (don&#39;t use <code>Depends()</code> like in the previous example), because it will be blocked until the end of the endpoint logic. The main idea is take a connection from a pool only for code parts in which it will be used immediately.</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># Start example</span>
<span class="token keyword">from</span> contextlib <span class="token keyword">import</span> asynccontextmanager
<span class="token keyword">from</span> typing <span class="token keyword">import</span> Annotated<span class="token punctuation">,</span> AsyncGenerator<span class="token punctuation">,</span> cast
<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> Depends<span class="token punctuation">,</span> FastAPI<span class="token punctuation">,</span> Request
<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>responses <span class="token keyword">import</span> JSONResponse
<span class="token keyword">from</span> psqlpy <span class="token keyword">import</span> ConnectionPool<span class="token punctuation">,</span> Connection
<span class="token keyword">import</span> uvicorn


db_pool <span class="token operator">=</span> ConnectionPool<span class="token punctuation">(</span>
    dsn<span class="token operator">=</span><span class="token string">&quot;postgres://postgres:postgres@localhost:5432/postgres&quot;</span><span class="token punctuation">,</span>
    max_db_pool_size<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@asynccontextmanager</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">lifespan</span><span class="token punctuation">(</span>app<span class="token punctuation">:</span> FastAPI<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> AsyncGenerator<span class="token punctuation">[</span><span class="token boolean">None</span><span class="token punctuation">,</span> <span class="token boolean">None</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;Startup database connection pool and close it on shutdown.&quot;&quot;&quot;</span>
    app<span class="token punctuation">.</span>state<span class="token punctuation">.</span>db_pool <span class="token operator">=</span> db_pool
    <span class="token keyword">yield</span>
    db_pool<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


app <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span>lifespan<span class="token operator">=</span>lifespan<span class="token punctuation">)</span>


<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">some_long_func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
    <span class="token comment"># Some very long execution.</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">pg_pool_example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">await</span> some_long_func<span class="token punctuation">(</span><span class="token punctuation">)</span>
    db_connection <span class="token operator">=</span> <span class="token keyword">await</span> db_pool<span class="token punctuation">.</span>connection<span class="token punctuation">(</span><span class="token punctuation">)</span>
    query_result <span class="token operator">=</span> <span class="token keyword">await</span> db_connection<span class="token punctuation">.</span>execute<span class="token punctuation">(</span>
        <span class="token string">&quot;SELECT * FROM users&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token keyword">return</span> JSONResponse<span class="token punctuation">(</span>content<span class="token operator">=</span>query_result<span class="token punctuation">.</span>result<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span>
        <span class="token string">&quot;start_example:app&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[o];function c(i,l){return s(),a("div",null,p)}const d=n(t,[["render",c],["__file","fastapi.html.vue"]]),k=JSON.parse(`{"path":"/usage/frameworks/fastapi.html","title":"FastAPI","lang":"en-US","frontmatter":{"title":"FastAPI","description":"There is the default example for FastAPI framework. Standard example. This code is perfect for situations when your endpoints don't have complex logic like sending messages over...","head":[["meta",{"property":"og:url","content":"https://qaspen-python.github.io/psqlpy-docs/usage/frameworks/fastapi.html"}],["meta",{"property":"og:site_name","content":"PSQLPy"}],["meta",{"property":"og:title","content":"FastAPI"}],["meta",{"property":"og:description","content":"There is the default example for FastAPI framework. Standard example. This code is perfect for situations when your endpoints don't have complex logic like sending messages over..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T22:41:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T22:41:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FastAPI\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T22:41:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Standard example.","slug":"standard-example","link":"#standard-example","children":[]},{"level":2,"title":"Advanced example","slug":"advanced-example","link":"#advanced-example","children":[]}],"git":{"createdTime":1719528105000,"updatedTime":1719528105000,"contributors":[{"name":"chandr-andr (Kiselev Aleksandr)","email":"chandr@chandr.net","commits":1}]},"filePathRelative":"usage/frameworks/fastapi.md","localizedDate":"June 27, 2024","autoDesc":true,"excerpt":"<p>There is the default example for <code>FastAPI</code> framework.</p>\\n<h2>Standard example.</h2>\\n<p>This code is perfect for situations when your endpoints don't have complex logic\\nlike sending messages over network with some queues (<code>RabbitMQ</code>, <code>NATS</code>, <code>Kafka</code> and etc)\\nor making long calculations, so a connection won't idle to much.\\nYou need to take this restrictions into account if you don't have external database connection pool\\nlike <code>PGBouncer</code>.</p>"}`);export{d as comp,k as data};
