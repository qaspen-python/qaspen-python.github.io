import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as a,c,a as e,b as t,d as n,e as s}from"./app-BBMUlEyS.js";const l={},d=s('<p><code>PSQLPy</code> is a new Python driver for PostgreSQL fully written in Rust. It was inspired by <code>Psycopg3</code> and <code>AsyncPG</code>.</p><p>With <code>PSQLPy</code> you can:</p><ul><li>Make an interaction with the PostgeSQL in your application much faster (2-3 times).</li><li>Be sure that there won&#39;t be any unexpected errors.</li><li>Don&#39;t usually go to the documentation to search every question - we have awesome docstrings for every component.</li><li>Use <code>MyPy</code> (or any other Python type checker) with confidence that exactly the types specified in the typing will be returned.</li><li>Concentrate on writing your code, not understanding new abstractions in this library, we only have classes which represents PostgreSQL object (transaction, cursor, etc).</li></ul><div class="hint-container info"><p class="hint-container-title">Info</p><p>It is extremely important to understand that the library will provide a noticeable acceleration in working with the database only if your queries are optimized. Otherwise, there will be acceleration, but not so significant</p></div><h2 id="important-notes" tabindex="-1"><a class="header-anchor" href="#important-notes"><span>Important notes</span></a></h2>',5),h={href:"https://www.postgresql.org/docs/current/sql-prepare.html",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"PGBouncer",-1),u=e("code",null,"Transaction Pooling Mode",-1),y={href:"https://devcenter.heroku.com/articles/best-practices-pgbouncer-configuration#transaction-pooling-mode-recommended",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"Statement Pooling Mode",-1),g={href:"https://devcenter.heroku.com/articles/best-practices-pgbouncer-configuration#transaction-pooling-mode-recommended",target:"_blank",rel:"noopener noreferrer"},P=e("h2",{id:"join-community",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#join-community"},[e("span",null,"Join community!")])],-1),f=e("p",null,[t("You can get support from the creators of "),e("code",null,"PSQLPy"),t(" in some social media:")],-1),w={href:"https://t.me/+f3Y8mYKgXxhmYThi",target:"_blank",rel:"noopener noreferrer"};function _(b,S){const o=r("ExternalLinkIcon");return a(),c("div",null,[d,e("p",null,[t("All statements will be prepared by default. You can read more about it here "),e("a",h,[t("PostgreSQL Docs"),n(o)]),t(" But in some situations this behavior can break you application. As an example, if you are using "),p,t(" with "),u,t(),e("a",y,[t("Docs"),n(o)]),t(" or "),m,t(),e("a",g,[t("Docs"),n(o)]),t(" you need to disable statement preparation. You can read how to do it in the next parts of the documentation.")]),P,f,e("ul",null,[e("li",null,[e("a",w,[t("Telegram"),n(o)])])])])}const Q=i(l,[["render",_],["__file","introduction.html.vue"]]),k=JSON.parse(`{"path":"/introduction/introduction.html","title":"What is PSQLPy?","lang":"en-US","frontmatter":{"title":"What is PSQLPy?","description":"PSQLPy is a new Python driver for PostgreSQL fully written in Rust. It was inspired by Psycopg3 and AsyncPG. With PSQLPy you can: Make an interaction with the PostgeSQL in your ...","head":[["meta",{"property":"og:url","content":"https://qaspen-python.github.io/psqlpy-docs/introduction/introduction.html"}],["meta",{"property":"og:site_name","content":"PSQLPy"}],["meta",{"property":"og:title","content":"What is PSQLPy?"}],["meta",{"property":"og:description","content":"PSQLPy is a new Python driver for PostgreSQL fully written in Rust. It was inspired by Psycopg3 and AsyncPG. With PSQLPy you can: Make an interaction with the PostgeSQL in your ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-27T22:41:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-27T22:41:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"What is PSQLPy?\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-27T22:41:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Important notes","slug":"important-notes","link":"#important-notes","children":[]},{"level":2,"title":"Join community!","slug":"join-community","link":"#join-community","children":[]}],"git":{"createdTime":1719528105000,"updatedTime":1719528105000,"contributors":[{"name":"chandr-andr (Kiselev Aleksandr)","email":"chandr@chandr.net","commits":1}]},"filePathRelative":"introduction/introduction.md","localizedDate":"June 27, 2024","autoDesc":true,"excerpt":"<p><code>PSQLPy</code> is a new Python driver for PostgreSQL fully written in Rust. It was inspired by <code>Psycopg3</code> and <code>AsyncPG</code>.</p>\\n<p>With <code>PSQLPy</code> you can:</p>\\n<ul>\\n<li>Make an interaction with the PostgeSQL in your application much faster (2-3 times).</li>\\n<li>Be sure that there won't be any unexpected errors.</li>\\n<li>Don't usually go to the documentation to search every question - we have awesome docstrings for every component.</li>\\n<li>Use <code>MyPy</code> (or any other Python type checker) with confidence that exactly the types specified in the typing will be returned.</li>\\n<li>Concentrate on writing your code, not understanding new abstractions in this library, we only have classes which represents PostgreSQL object (transaction, cursor, etc).</li>\\n</ul>"}`);export{Q as comp,k as data};
