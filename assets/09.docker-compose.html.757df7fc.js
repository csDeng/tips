import{_ as n,e as s}from"./app.2a7ffa2e.js";var a="/assets/docker-composex.4df4018c.png";const e={},p=s(`<p>[TOC]</p><h2 id="compose-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#compose-\u7B80\u4ECB" aria-hidden="true">#</a> Compose \u7B80\u4ECB</h2><p>Compose \u662F\u7528\u4E8E\u5B9A\u4E49\u548C\u8FD0\u884C\u591A\u5BB9\u5668 Docker \u5E94\u7528\u7A0B\u5E8F\u7684\u5DE5\u5177\u3002\u901A\u8FC7 <code>Compose</code>\u4F7F\u7528\u4E00\u4E2A\u547D\u4EE4\uFF0C\u5C31\u53EF\u4EE5\u4ECE YML \u6587\u4EF6\u914D\u7F6E\u4E2D\u521B\u5EFA\u5E76==\u542F\u52A8\u6240\u6709\u670D\u52A1==\u3002</p><p>Compose \u4F7F\u7528\u7684\u4E09\u4E2A\u6B65\u9AA4\uFF1A</p><ol><li>\u4F7F\u7528 Dockerfile \u5B9A\u4E49\u5E94\u7528\u7A0B\u5E8F\u7684\u73AF\u5883\u3002</li><li>\u4F7F\u7528 docker-compose.yml \u5B9A\u4E49\u6784\u6210\u5E94\u7528\u7A0B\u5E8F\u7684\u670D\u52A1\uFF0C\u8FD9\u6837\u5B83\u4EEC\u53EF\u4EE5\u5728\u9694\u79BB\u73AF\u5883\u4E2D\u4E00\u8D77\u8FD0\u884C\u3002</li><li>\u6700\u540E\uFF0C\u6267\u884C <code>docker-compose up</code> \u547D\u4EE4\u6765\u542F\u52A8\u5E76\u8FD0\u884C\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u3002</li></ol><p><code>docker-compose.yml </code>\u7684\u914D\u7F6E\u6848\u4F8B\u5982\u4E0B\uFF08\u914D\u7F6E\u53C2\u6570\u53C2\u8003\u4E0B\u6587\uFF09\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># yaml \u914D\u7F6E\u5B9E\u4F8B</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">web</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> .
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;5000: 5000&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> .<span class="token punctuation">:</span>code
    <span class="token punctuation">-</span> <span class="token key atrule">logvolume01</span><span class="token punctuation">:</span> /var/log
   <span class="token key atrule">links</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> redis
   <span class="token key atrule">redis</span><span class="token punctuation">:</span>
     <span class="token key atrule">image</span><span class="token punctuation">:</span> redis
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token key atrule">logvolume01</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><hr><h2 id="compose-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#compose-\u5B89\u88C5" aria-hidden="true">#</a> Compose \u5B89\u88C5</h2><p>Linux</p><h3 id="_1\u3001\u4F7F\u7528\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4F7F\u7528\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305\u5B89\u88C5" aria-hidden="true">#</a> 1\u3001\u4F7F\u7528\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305\u5B89\u88C5</h3><p>Linux \u4E0A\u6211\u4EEC\u53EF\u4EE5\u4ECE Github \u4E0A\u4E0B\u8F7D\u5B83\u7684\u4E8C\u8FDB\u5236\u5305\u6765\u4F7F\u7528\uFF0C\u6700\u65B0\u53D1\u884C\u7684\u7248\u672C\u5730\u5740\uFF1Ahttps://github.com/docker/compose/releases\u3002</p><p>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u4EE5\u4E0B\u8F7D Docker Compose \u7684\u5F53\u524D\u7A33\u5B9A\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">curl</span> -L <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.24.1/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -s<span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -m<span class="token variable">)</span></span>&quot;</span> -o /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8981\u5B89\u88C5\u5176\u4ED6\u7248\u672C\u7684 Compose\uFF0C\u8BF7\u66FF\u6362 1.24.1\u3002</p><p>\u5C06\u53EF\u6267\u884C\u6743\u9650\u5E94\u7528\u4E8E\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA\u8F6F\u94FE\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> <span class="token function">ln</span> -s /usr/local/bin/docker-compose /usr/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6D4B\u8BD5\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">docker-compose</span> --version
cker-compose version <span class="token number">1.24</span>.1, build 4667896b
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>\u6CE8\u610F</strong>\uFF1A \u5BF9\u4E8E alpine\uFF0C\u9700\u8981\u4EE5\u4E0B\u4F9D\u8D56\u5305\uFF1A py-pip\uFF0Cpython-dev\uFF0Clibffi-dev\uFF0Copenssl-dev\uFF0Cgcc\uFF0Clibc-dev\uFF0C\u548C make\u3002</p><h3 id="_2\u3001\u7528pip\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u7528pip\u5B89\u88C5" aria-hidden="true">#</a> 2\u3001\u7528<code>pip</code>\u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pip <span class="token function">install</span> <span class="token function">docker-compose</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dcs@DESKTOP-GC42A9O:/mnt/c/Users/dcs$ <span class="token function">docker-compose</span> --help
/Define and run multi-container applications with Docker.

Usage:
  <span class="token function">docker-compose</span> <span class="token punctuation">[</span>-f <span class="token operator">&lt;</span>arg<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span>--profile <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span> <span class="token punctuation">[</span>--<span class="token punctuation">]</span> <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARGS<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
  <span class="token function">docker-compose</span> -h<span class="token operator">|</span>--help

Options:
  -f, --file FILE             Specify an alternate compose <span class="token function">file</span>
                              <span class="token punctuation">(</span>default: docker-compose.yml<span class="token punctuation">)</span>
  -p, --project-name NAME     Specify an alternate project name
                              <span class="token punctuation">(</span>default: directory name<span class="token punctuation">)</span>
  --profile NAME              Specify a profile to <span class="token builtin class-name">enable</span>
  -c, --context NAME          Specify a context name
  --verbose                   Show <span class="token function">more</span> output
  --log-level LEVEL           Set log level <span class="token punctuation">(</span>DEBUG, INFO, WARNING, ERROR, CRITICAL<span class="token punctuation">)</span>
  --ansi <span class="token punctuation">(</span>never<span class="token operator">|</span>always<span class="token operator">|</span>auto<span class="token punctuation">)</span>  Control when to print ANSI control characters
  --no-ansi                   Do not print ANSI control characters <span class="token punctuation">(</span>DEPRECATED<span class="token punctuation">)</span>
  -v, --version               Print version and <span class="token builtin class-name">exit</span>
  -H, --host HOST             Daemon socket to connect to

  --tls                       Use TLS<span class="token punctuation">;</span> implied by --tlsverify
  --tlscacert CA_PATH         Trust certs signed only by this CA
  --tlscert CLIENT_CERT_PATH  Path to TLS certificate <span class="token function">file</span>
  --tlskey TLS_KEY_PATH       Path to TLS key <span class="token function">file</span>
  --tlsverify                 Use TLS and verify the remote
  --skip-hostname-check       Don<span class="token string">&#39;t check the daemon&#39;</span>s <span class="token function">hostname</span> against the
                              name specified <span class="token keyword">in</span> the client certificate
  --project-directory <span class="token environment constant">PATH</span>    Specify an alternate working directory
                              <span class="token punctuation">(</span>default: the path of the Compose <span class="token function">file</span><span class="token punctuation">)</span>
  --compatibility             If set, Compose will attempt to convert keys
                              <span class="token keyword">in</span> v3 files to their non-Swarm equivalent <span class="token punctuation">(</span>DEPRECATED<span class="token punctuation">)</span>
  --env-file <span class="token environment constant">PATH</span>             Specify an alternate environment <span class="token function">file</span>

Commands:
  build              Build or rebuild services
  config             Validate and view the Compose <span class="token function">file</span>
  create             Create services
  down               Stop and remove resources
  events             Receive real <span class="token function">time</span> events from containers
  <span class="token builtin class-name">exec</span>               Execute a <span class="token builtin class-name">command</span> <span class="token keyword">in</span> a running container
  <span class="token builtin class-name">help</span>               Get <span class="token builtin class-name">help</span> on a <span class="token builtin class-name">command</span>
  images             List images
  <span class="token function">kill</span>               Kill containers
  logs               View output from containers
  pause              Pause services
  port               Print the public port <span class="token keyword">for</span> a port binding
  <span class="token function">ps</span>                 List containers
  pull               Pull <span class="token function">service</span> images
  push               Push <span class="token function">service</span> images
  restart            Restart services
  <span class="token function">rm</span>                 Remove stopped containers
  run                Run a one-off <span class="token builtin class-name">command</span>
  scale              Set number of containers <span class="token keyword">for</span> a <span class="token function">service</span>
  start              Start services
  stop               Stop services
  <span class="token function">top</span>                Display the running processes
  unpause            Unpause services
  up                 Create and start containers
  version            Show version information and quit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br></div></div><h3 id="_1\u3001\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u51C6\u5907" aria-hidden="true">#</a> 1\u3001\u51C6\u5907</h3><p>\u521B\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u76EE\u5F55\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ mkdir composetest
$ cd composetest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728\u6D4B\u8BD5\u76EE\u5F55\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A app.py \u7684\u6587\u4EF6\uFF0C\u5E76\u590D\u5236\u7C98\u8D34\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time

<span class="token keyword">import</span> redis
<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask

app <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>
cache <span class="token operator">=</span> redis<span class="token punctuation">.</span>Redis<span class="token punctuation">(</span>host<span class="token operator">=</span><span class="token string">&#39;redis&#39;</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">6379</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">get_hit_count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  retries <span class="token operator">=</span> <span class="token number">5</span>
  <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
      <span class="token keyword">return</span> cache<span class="token punctuation">.</span>incr<span class="token punctuation">(</span><span class="token string">&#39;hits&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> redis<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span>ConnectionError <span class="token operator">**</span><span class="token keyword">as</span><span class="token operator">**</span> exc<span class="token punctuation">:</span>
      <span class="token keyword">if</span> retries <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> exc
      retries <span class="token operator">-=</span> <span class="token number">1</span>
      time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>


<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>route</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  count <span class="token operator">=</span> get_hit_count<span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Hello World! I have been seen {} times./n&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0Credis \u662F\u5E94\u7528\u7A0B\u5E8F\u7F51\u7EDC\u4E0A\u7684 redis \u5BB9\u5668\u7684\u4E3B\u673A\u540D\uFF0C\u8BE5\u4E3B\u673A\u4F7F\u7528\u7684\u7AEF\u53E3\u4E3A 6379\u3002</p><p>\u5728 composetest \u76EE\u5F55\u4E2D\u521B\u5EFA\u53E6\u4E00\u4E2A\u540D\u4E3A requirements.txt \u7684\u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-txt ext-txt line-numbers-mode"><pre class="language-txt"><code>flask
redis
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="_2\u3001\u521B\u5EFAdockerfile\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u521B\u5EFAdockerfile\u6587\u4EF6" aria-hidden="true">#</a> 2\u3001\u521B\u5EFA<code>Dockerfile</code>\u6587\u4EF6</h3><p>\u5728 composetest \u76EE\u5F55\u4E2D\uFF0C\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A\u7684\u6587\u4EF6 <code>Dockerfile</code>\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> python:3.7-alpine</span>
<span class="token instruction"><span class="token keyword">WORKDIR</span> /code</span>
<span class="token instruction"><span class="token keyword">ENV</span> FLASK_APP app.py</span>
<span class="token instruction"><span class="token keyword">ENV</span> FLASK_RUN_HOST 0.0.0.0</span>
<span class="token instruction"><span class="token keyword">RUN</span> apk add --no-cache gcc musl-dev linux-headers</span>
<span class="token instruction"><span class="token keyword">COPY</span> requirements.txt requirements.txt</span>
<span class="token instruction"><span class="token keyword">RUN</span> pip install -r requirements.txt</span>
<span class="token instruction"><span class="token keyword">COPY</span> . .</span>
<span class="token instruction"><span class="token keyword">CMD</span> [<span class="token string">&quot;flask&quot;</span>, <span class="token string">&quot;run&quot;</span>]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Dockerfile \u5185\u5BB9\u89E3\u91CA\uFF1A</strong></p><ul><li><p><strong>FROM python:3.7-alpine</strong>: \u4ECE Python 3.7 \u6620\u50CF\u5F00\u59CB\u6784\u5EFA\u955C\u50CF\u3002</p></li><li><p><strong>WORKDIR /code</strong>: \u5C06\u5DE5\u4F5C\u76EE\u5F55\u8BBE\u7F6E\u4E3A /code\u3002</p></li><li><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ENV FLASK_APP app.py
ENV FLASK_RUN_HOST <span class="token number">0.0</span>.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8BBE\u7F6E flask \u547D\u4EE4\u4F7F\u7528\u7684\u73AF\u5883\u53D8\u91CF\u3002</p></li><li><p><strong>RUN apk add --no-cache gcc musl-dev linux-headers</strong>: \u5B89\u88C5 gcc\uFF0C\u4EE5\u4FBF\u8BF8\u5982 MarkupSafe \u548C SQLAlchemy \u4E4B\u7C7B\u7684 Python \u5305\u53EF\u4EE5\u7F16\u8BD1\u52A0\u901F\u3002</p></li><li><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>COPY requirements.txt requirements.txt
RUN pip <span class="token function">install</span> -r requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u590D\u5236 requirements.txt \u5E76\u5B89\u88C5 Python \u4F9D\u8D56\u9879\u3002</p></li><li><p><code>COPY . .</code> : \u5C06<code>.</code>\u9879\u76EE\u4E2D\u7684\u5F53\u524D\u76EE\u5F55\u590D\u5236\u5230<code>.</code>\u955C\u50CF\u4E2D\u7684\u5DE5\u4F5C\u76EE\u5F55\u3002</p></li><li><p><strong>CMD [&quot;flask&quot;, &quot;run&quot;]</strong>: \u5BB9\u5668\u63D0\u4F9B\u9ED8\u8BA4\u7684\u6267\u884C\u547D\u4EE4\u4E3A\uFF1A<code>flask run</code>\u3002</p></li></ul><h3 id="_3\u3001\u521B\u5EFA-docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u521B\u5EFA-docker-compose-yml" aria-hidden="true">#</a> 3\u3001\u521B\u5EFA docker-compose.yml</h3><p>\u5728\u6D4B\u8BD5\u76EE\u5F55\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A docker-compose.yml \u7684\u6587\u4EF6\uFF0C\u7136\u540E\u7C98\u8D34\u4EE5\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># yaml \u914D\u7F6E</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
 <span class="token key atrule">web</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>  .
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;5000:5000&quot;</span>
<span class="token key atrule">redis</span><span class="token punctuation">:</span>
  <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&quot;redis:alpine&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u8BE5 Compose \u6587\u4EF6\u5B9A\u4E49\u4E86\u4E24\u4E2A\u670D\u52A1\uFF1Aweb \u548C redis\u3002</p><ul><li><strong>web</strong>\uFF1A\u8BE5 web \u670D\u52A1\u4F7F\u7528\u4ECE Dockerfile \u5F53\u524D\u76EE\u5F55\u4E2D\u6784\u5EFA\u7684\u955C\u50CF\u3002\u7136\u540E\uFF0C\u5B83\u5C06\u5BB9\u5668\u548C\u4E3B\u673A\u7ED1\u5B9A\u5230\u66B4\u9732\u7684\u7AEF\u53E3 5000\u3002\u6B64\u793A\u4F8B\u670D\u52A1\u4F7F\u7528 Flask Web \u670D\u52A1\u5668\u7684\u9ED8\u8BA4\u7AEF\u53E3 5000 \u3002</li><li><strong>redis</strong>\uFF1A\u8BE5 redis \u670D\u52A1\u4F7F\u7528 Docker Hub \u7684\u516C\u5171 Redis \u6620\u50CF\u3002</li></ul><h3 id="_4\u3001\u4F7F\u7528-compose-\u547D\u4EE4\u6784\u5EFA\u548C\u8FD0\u884C\u60A8\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u4F7F\u7528-compose-\u547D\u4EE4\u6784\u5EFA\u548C\u8FD0\u884C\u60A8\u7684\u5E94\u7528" aria-hidden="true">#</a> 4\u3001\u4F7F\u7528 Compose \u547D\u4EE4\u6784\u5EFA\u548C\u8FD0\u884C\u60A8\u7684\u5E94\u7528</h3><p>\u5728\u6D4B\u8BD5\u76EE\u5F55\u4E2D\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u6765\u542F\u52A8\u5E94\u7528\u7A0B\u5E8F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u4F60\u60F3\u5728==\u540E\u53F0\u6267\u884C==\u8BE5\u670D\u52A1\u53EF\u4EE5\u52A0\u4E0A <strong>-d</strong> \u53C2\u6570\uFF1A</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code>docker-compose up -d
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><hr><h2 id="yml-\u914D\u7F6E\u6307\u4EE4\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#yml-\u914D\u7F6E\u6307\u4EE4\u53C2\u8003" aria-hidden="true">#</a> yml \u914D\u7F6E\u6307\u4EE4\u53C2\u8003</h2><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> version</h3><p>\u6307\u5B9A\u672C yml \u4F9D\u4ECE\u7684 compose \u54EA\u4E2A\u7248\u672C\u5236\u5B9A\u7684\u3002</p><h3 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h3><p>\u6307\u5B9A\u4E3A\u6784\u5EFA\u955C\u50CF\u4E0A\u4E0B\u6587\u8DEF\u5F84\uFF1A</p><p>\u4F8B\u5982 webapp \u670D\u52A1\uFF0C\u6307\u5B9A\u4E3A\u4ECE\u4E0A\u4E0B\u6587\u8DEF\u5F84 ./dir/Dockerfile \u6240\u6784\u5EFA\u7684\u955C\u50CF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &quot;3.7&quot;
services:
  webapp:
    build: ./dir
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6216\u8005\uFF0C\u4F5C\u4E3A\u5177\u6709\u5728\u4E0A\u4E0B\u6587\u6307\u5B9A\u7684\u8DEF\u5F84\u7684\u5BF9\u8C61\uFF0C\u4EE5\u53CA\u53EF\u9009\u7684 Dockerfile \u548C args\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &quot;3.7&quot;
services:
  webapp:
    build:
      context: ./dir
      dockerfile: Dockerfile-alternate
      args:
        buildno: 1
      labels:
        - &quot;com.example.description=Accounting webapp&quot;
        - &quot;com.example.department=Finance&quot;
        - &quot;com.example.label-with-empty-value&quot;
      target: prod
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><ul><li>context\uFF1A\u4E0A\u4E0B\u6587\u8DEF\u5F84\u3002</li><li>dockerfile\uFF1A\u6307\u5B9A\u6784\u5EFA\u955C\u50CF\u7684 Dockerfile \u6587\u4EF6\u540D\u3002</li><li>args\uFF1A\u6DFB\u52A0\u6784\u5EFA\u53C2\u6570\uFF0C\u8FD9\u662F\u53EA\u80FD\u5728\u6784\u5EFA\u8FC7\u7A0B\u4E2D\u8BBF\u95EE\u7684\u73AF\u5883\u53D8\u91CF\u3002</li><li>labels\uFF1A\u8BBE\u7F6E\u6784\u5EFA\u955C\u50CF\u7684\u6807\u7B7E\u3002</li><li>target\uFF1A\u591A\u5C42\u6784\u5EFA\uFF0C\u53EF\u4EE5\u6307\u5B9A\u6784\u5EFA\u54EA\u4E00\u5C42\u3002</li></ul><h3 id="cap-add-cap-drop" tabindex="-1"><a class="header-anchor" href="#cap-add-cap-drop" aria-hidden="true">#</a> cap_add\uFF0Ccap_drop</h3><p>\u6DFB\u52A0\u6216\u5220\u9664\u5BB9\u5668\u62E5\u6709\u7684\u5BBF\u4E3B\u673A\u7684\u5185\u6838\u529F\u80FD\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cap_add:
  - ALL # \u5F00\u542F\u5168\u90E8\u6743\u9650

cap_drop:
  - SYS_PTRACE # \u5173\u95ED ptrace\u6743\u9650
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="cgroup-parent" tabindex="-1"><a class="header-anchor" href="#cgroup-parent" aria-hidden="true">#</a> cgroup_parent</h3><p>\u4E3A\u5BB9\u5668\u6307\u5B9A\u7236 cgroup \u7EC4\uFF0C\u610F\u5473\u7740\u5C06\u7EE7\u627F\u8BE5\u7EC4\u7684\u8D44\u6E90\u9650\u5236\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cgroup_parent: m-executor-abcd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> command</h3><p>\u8986\u76D6\u5BB9\u5668\u542F\u52A8\u7684\u9ED8\u8BA4\u547D\u4EE4\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>command: [&quot;bundle&quot;, &quot;exec&quot;, &quot;thin&quot;, &quot;-p&quot;, &quot;3000&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="container-name" tabindex="-1"><a class="header-anchor" href="#container-name" aria-hidden="true">#</a> container_name</h3><p>\u6307\u5B9A\u81EA\u5B9A\u4E49\u5BB9\u5668\u540D\u79F0\uFF0C\u800C\u4E0D\u662F\u751F\u6210\u7684\u9ED8\u8BA4\u540D\u79F0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>container_name: my-web-container
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="depends-on" tabindex="-1"><a class="header-anchor" href="#depends-on" aria-hidden="true">#</a> depends_on</h3><p>\u8BBE\u7F6E\u4F9D\u8D56\u5173\u7CFB\u3002</p><ul><li>docker-compose up \uFF1A\u4EE5\u4F9D\u8D56\u6027\u987A\u5E8F\u542F\u52A8\u670D\u52A1\u3002\u5728\u4EE5\u4E0B\u793A\u4F8B\u4E2D\uFF0C\u5148\u542F\u52A8 db \u548C redis \uFF0C\u624D\u4F1A\u542F\u52A8 web\u3002</li><li>docker-compose up SERVICE \uFF1A\u81EA\u52A8\u5305\u542B SERVICE \u7684\u4F9D\u8D56\u9879\u3002\u5728\u4EE5\u4E0B\u793A\u4F8B\u4E2D\uFF0Cdocker-compose up web \u8FD8\u5C06\u521B\u5EFA\u5E76\u542F\u52A8 db \u548C redis\u3002</li><li>docker-compose stop \uFF1A\u6309\u4F9D\u8D56\u5173\u7CFB\u987A\u5E8F\u505C\u6B62\u670D\u52A1\u3002\u5728\u4EE5\u4E0B\u793A\u4F8B\u4E2D\uFF0Cweb \u5728 db \u548C redis \u4E4B\u524D\u505C\u6B62\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &quot;3.7&quot;
services:
  web:
    build: .
    depends_on:
      - db
      - redis
  redis:
    image: redis
  db:
    image: postgres
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6CE8\u610F\uFF1Aweb \u670D\u52A1\u4E0D\u4F1A\u7B49\u5F85 redis db \u5B8C\u5168\u542F\u52A8 \u4E4B\u540E\u624D\u542F\u52A8\u3002</p><h3 id="deploy" tabindex="-1"><a class="header-anchor" href="#deploy" aria-hidden="true">#</a> deploy</h3><p>\u6307\u5B9A\u4E0E\u670D\u52A1\u7684\u90E8\u7F72\u548C\u8FD0\u884C\u6709\u5173\u7684\u914D\u7F6E\u3002\u53EA\u5728 swarm \u6A21\u5F0F\u4E0B\u624D\u4F1A\u6709\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &quot;3.7&quot;
services:
  redis:
    image: redis:alpine
    deploy:
      mode\uFF1Areplicated
      replicas: 6
      endpoint_mode: dnsrr
      labels: 
        description: &quot;This redis service label&quot;
      resources:
        limits:
          cpus: &#39;0.50&#39;
          memory: 50M
        reservations:
          cpus: &#39;0.25&#39;
          memory: 20M
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
        window: 120s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>\u53EF\u4EE5\u9009\u53C2\u6570\uFF1A</p><p><strong>endpoint_mode</strong>\uFF1A\u8BBF\u95EE\u96C6\u7FA4\u670D\u52A1\u7684\u65B9\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>endpoint_mode: vip 
# Docker \u96C6\u7FA4\u670D\u52A1\u4E00\u4E2A\u5BF9\u5916\u7684\u865A\u62DF ip\u3002\u6240\u6709\u7684\u8BF7\u6C42\u90FD\u4F1A\u901A\u8FC7\u8FD9\u4E2A\u865A\u62DF ip \u5230\u8FBE\u96C6\u7FA4\u670D\u52A1\u5185\u90E8\u7684\u673A\u5668\u3002
endpoint_mode: dnsrr
# DNS \u8F6E\u8BE2\uFF08DNSRR\uFF09\u3002\u6240\u6709\u7684\u8BF7\u6C42\u4F1A\u81EA\u52A8\u8F6E\u8BE2\u83B7\u53D6\u5230\u96C6\u7FA4 ip \u5217\u8868\u4E2D\u7684\u4E00\u4E2A ip \u5730\u5740\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>labels</strong>\uFF1A\u5728\u670D\u52A1\u4E0A\u8BBE\u7F6E\u6807\u7B7E\u3002\u53EF\u4EE5\u7528\u5BB9\u5668\u4E0A\u7684 labels\uFF08\u8DDF deploy \u540C\u7EA7\u7684\u914D\u7F6E\uFF09 \u8986\u76D6 deploy \u4E0B\u7684 labels\u3002</p><p><strong>mode</strong>\uFF1A\u6307\u5B9A\u670D\u52A1\u63D0\u4F9B\u7684\u6A21\u5F0F\u3002</p><ul><li><p><strong>replicated</strong>\uFF1A\u590D\u5236\u670D\u52A1\uFF0C\u590D\u5236\u6307\u5B9A\u670D\u52A1\u5230\u96C6\u7FA4\u7684\u673A\u5668\u4E0A\u3002</p></li><li><p><strong>global</strong>\uFF1A\u5168\u5C40\u670D\u52A1\uFF0C\u670D\u52A1\u5C06\u90E8\u7F72\u81F3\u96C6\u7FA4\u7684\u6BCF\u4E2A\u8282\u70B9\u3002</p></li><li><p>\u56FE\u89E3\uFF1A\u4E0B\u56FE\u4E2D\u9EC4\u8272\u7684\u65B9\u5757\u662F replicated \u6A21\u5F0F\u7684\u8FD0\u884C\u60C5\u51B5\uFF0C\u7070\u8272\u65B9\u5757\u662F global \u6A21\u5F0F\u7684\u8FD0\u884C\u60C5\u51B5\u3002</p><p><img src="`+a+`" alt="img"></p></li></ul><p><strong>replicas\uFF1Amode</strong> \u4E3A replicated \u65F6\uFF0C\u9700\u8981\u4F7F\u7528\u6B64\u53C2\u6570\u914D\u7F6E\u5177\u4F53\u8FD0\u884C\u7684\u8282\u70B9\u6570\u91CF\u3002</p><p><strong>resources</strong>\uFF1A\u914D\u7F6E\u670D\u52A1\u5668\u8D44\u6E90\u4F7F\u7528\u7684\u9650\u5236\uFF0C\u4F8B\u5982\u4E0A\u4F8B\u5B50\uFF0C\u914D\u7F6E redis \u96C6\u7FA4\u8FD0\u884C\u9700\u8981\u7684 cpu \u7684\u767E\u5206\u6BD4 \u548C \u5185\u5B58\u7684\u5360\u7528\u3002\u907F\u514D\u5360\u7528\u8D44\u6E90\u8FC7\u9AD8\u51FA\u73B0\u5F02\u5E38\u3002</p><p><strong>restart_policy</strong>\uFF1A\u914D\u7F6E\u5982\u4F55\u5728\u9000\u51FA\u5BB9\u5668\u65F6\u91CD\u65B0\u542F\u52A8\u5BB9\u5668\u3002</p><ul><li>condition\uFF1A\u53EF\u9009 none\uFF0Con-failure \u6216\u8005 any\uFF08\u9ED8\u8BA4\u503C\uFF1Aany\uFF09\u3002</li><li>delay\uFF1A\u8BBE\u7F6E\u591A\u4E45\u4E4B\u540E\u91CD\u542F\uFF08\u9ED8\u8BA4\u503C\uFF1A0\uFF09\u3002</li><li>max_attempts\uFF1A\u5C1D\u8BD5\u91CD\u65B0\u542F\u52A8\u5BB9\u5668\u7684\u6B21\u6570\uFF0C\u8D85\u51FA\u6B21\u6570\uFF0C\u5219\u4E0D\u518D\u5C1D\u8BD5\uFF08\u9ED8\u8BA4\u503C\uFF1A\u4E00\u76F4\u91CD\u8BD5\uFF09\u3002</li><li>window\uFF1A\u8BBE\u7F6E\u5BB9\u5668\u91CD\u542F\u8D85\u65F6\u65F6\u95F4\uFF08\u9ED8\u8BA4\u503C\uFF1A0\uFF09\u3002</li></ul><p><strong>rollback_config</strong>\uFF1A\u914D\u7F6E\u5728\u66F4\u65B0\u5931\u8D25\u7684\u60C5\u51B5\u4E0B\u5E94\u5982\u4F55\u56DE\u6EDA\u670D\u52A1\u3002</p><ul><li>parallelism\uFF1A\u4E00\u6B21\u8981\u56DE\u6EDA\u7684\u5BB9\u5668\u6570\u3002\u5982\u679C\u8BBE\u7F6E\u4E3A0\uFF0C\u5219\u6240\u6709\u5BB9\u5668\u5C06\u540C\u65F6\u56DE\u6EDA\u3002</li><li>delay\uFF1A\u6BCF\u4E2A\u5BB9\u5668\u7EC4\u56DE\u6EDA\u4E4B\u95F4\u7B49\u5F85\u7684\u65F6\u95F4\uFF08\u9ED8\u8BA4\u4E3A0s\uFF09\u3002</li><li>failure_action\uFF1A\u5982\u679C\u56DE\u6EDA\u5931\u8D25\uFF0C\u8BE5\u600E\u4E48\u529E\u3002\u5176\u4E2D\u4E00\u4E2A continue \u6216\u8005 pause\uFF08\u9ED8\u8BA4pause\uFF09\u3002</li><li>monitor\uFF1A\u6BCF\u4E2A\u5BB9\u5668\u66F4\u65B0\u540E\uFF0C\u6301\u7EED\u89C2\u5BDF\u662F\u5426\u5931\u8D25\u4E86\u7684\u65F6\u95F4 (ns|us|ms|s|m|h)\uFF08\u9ED8\u8BA4\u4E3A0s\uFF09\u3002</li><li>max_failure_ratio\uFF1A\u5728\u56DE\u6EDA\u671F\u95F4\u53EF\u4EE5\u5BB9\u5FCD\u7684\u6545\u969C\u7387\uFF08\u9ED8\u8BA4\u4E3A0\uFF09\u3002</li><li>order\uFF1A\u56DE\u6EDA\u671F\u95F4\u7684\u64CD\u4F5C\u987A\u5E8F\u3002\u5176\u4E2D\u4E00\u4E2A stop-first\uFF08\u4E32\u884C\u56DE\u6EDA\uFF09\uFF0C\u6216\u8005 start-first\uFF08\u5E76\u884C\u56DE\u6EDA\uFF09\uFF08\u9ED8\u8BA4 stop-first \uFF09\u3002</li></ul><p><strong>update_config</strong>\uFF1A\u914D\u7F6E\u5E94\u5982\u4F55\u66F4\u65B0\u670D\u52A1\uFF0C\u5BF9\u4E8E\u914D\u7F6E\u6EDA\u52A8\u66F4\u65B0\u5F88\u6709\u7528\u3002</p><ul><li>parallelism\uFF1A\u4E00\u6B21\u66F4\u65B0\u7684\u5BB9\u5668\u6570\u3002</li><li>delay\uFF1A\u5728\u66F4\u65B0\u4E00\u7EC4\u5BB9\u5668\u4E4B\u95F4\u7B49\u5F85\u7684\u65F6\u95F4\u3002</li><li>failure_action\uFF1A\u5982\u679C\u66F4\u65B0\u5931\u8D25\uFF0C\u8BE5\u600E\u4E48\u529E\u3002\u5176\u4E2D\u4E00\u4E2A continue\uFF0Crollback \u6216\u8005pause \uFF08\u9ED8\u8BA4\uFF1Apause\uFF09\u3002</li><li>monitor\uFF1A\u6BCF\u4E2A\u5BB9\u5668\u66F4\u65B0\u540E\uFF0C\u6301\u7EED\u89C2\u5BDF\u662F\u5426\u5931\u8D25\u4E86\u7684\u65F6\u95F4 (ns|us|ms|s|m|h)\uFF08\u9ED8\u8BA4\u4E3A0s\uFF09\u3002</li><li>max_failure_ratio\uFF1A\u5728\u66F4\u65B0\u8FC7\u7A0B\u4E2D\u53EF\u4EE5\u5BB9\u5FCD\u7684\u6545\u969C\u7387\u3002</li><li>order\uFF1A\u56DE\u6EDA\u671F\u95F4\u7684\u64CD\u4F5C\u987A\u5E8F\u3002\u5176\u4E2D\u4E00\u4E2A stop-first\uFF08\u4E32\u884C\u56DE\u6EDA\uFF09\uFF0C\u6216\u8005 start-first\uFF08\u5E76\u884C\u56DE\u6EDA\uFF09\uFF08\u9ED8\u8BA4stop-first\uFF09\u3002</li></ul><p><strong>\u6CE8</strong>\uFF1A\u4EC5\u652F\u6301 V3.4 \u53CA\u66F4\u9AD8\u7248\u672C\u3002</p><h3 id="devices" tabindex="-1"><a class="header-anchor" href="#devices" aria-hidden="true">#</a> devices</h3><p>\u6307\u5B9A\u8BBE\u5907\u6620\u5C04\u5217\u8868\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>devices:
  - &quot;/dev/ttyUSB0:/dev/ttyUSB0&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="dns" tabindex="-1"><a class="header-anchor" href="#dns" aria-hidden="true">#</a> dns</h3><p>\u81EA\u5B9A\u4E49 DNS \u670D\u52A1\u5668\uFF0C\u53EF\u4EE5\u662F\u5355\u4E2A\u503C\u6216\u5217\u8868\u7684\u591A\u4E2A\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dns: 8.8.8.8

dns:
  - 8.8.8.8
  - 9.9.9.9
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="dns-search" tabindex="-1"><a class="header-anchor" href="#dns-search" aria-hidden="true">#</a> dns_search</h3><p>\u81EA\u5B9A\u4E49 DNS \u641C\u7D22\u57DF\u3002\u53EF\u4EE5\u662F\u5355\u4E2A\u503C\u6216\u5217\u8868\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dns_search: example.com

dns_search:
  - dc1.example.com
  - dc2.example.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="entrypoint" tabindex="-1"><a class="header-anchor" href="#entrypoint" aria-hidden="true">#</a> entrypoint</h3><p>\u8986\u76D6\u5BB9\u5668\u9ED8\u8BA4\u7684 entrypoint\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>entrypoint: /code/entrypoint.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u662F\u4EE5\u4E0B\u683C\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>entrypoint:
    - php
    - -d
    - zend_extension=/usr/local/lib/php/extensions/no-debug-non-zts-20100525/xdebug.so
    - -d
    - memory_limit=-1
    - vendor/bin/phpunit
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="env-file" tabindex="-1"><a class="header-anchor" href="#env-file" aria-hidden="true">#</a> env_file</h3><p>\u4ECE\u6587\u4EF6\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF\u3002\u53EF\u4EE5\u662F\u5355\u4E2A\u503C\u6216\u5217\u8868\u7684\u591A\u4E2A\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>env_file: .env
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E5F\u53EF\u4EE5\u662F\u5217\u8868\u683C\u5F0F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>env_file:
  - ./common.env
  - ./apps/web.env
  - /opt/secrets.env
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="environment" tabindex="-1"><a class="header-anchor" href="#environment" aria-hidden="true">#</a> environment</h3><p>\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u6216\u5B57\u5178\u3001\u4EFB\u4F55\u5E03\u5C14\u503C\uFF0C\u5E03\u5C14\u503C\u9700\u8981\u7528\u5F15\u53F7\u5F15\u8D77\u6765\uFF0C\u4EE5\u786E\u4FDD YML \u89E3\u6790\u5668\u4E0D\u4F1A\u5C06\u5176\u8F6C\u6362\u4E3A True \u6216 False\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>environment:
  RACK_ENV: development
  SHOW: &#39;true&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="expose" tabindex="-1"><a class="header-anchor" href="#expose" aria-hidden="true">#</a> expose</h3><p>\u66B4\u9732\u7AEF\u53E3\uFF0C\u4F46\u4E0D\u6620\u5C04\u5230\u5BBF\u4E3B\u673A\uFF0C\u53EA\u88AB\u8FDE\u63A5\u7684\u670D\u52A1\u8BBF\u95EE\u3002</p><p>\u4EC5\u53EF\u4EE5\u6307\u5B9A\u5185\u90E8\u7AEF\u53E3\u4E3A\u53C2\u6570\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>expose:
 - &quot;3000&quot;
 - &quot;8000&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="extra-hosts" tabindex="-1"><a class="header-anchor" href="#extra-hosts" aria-hidden="true">#</a> extra_hosts</h3><p>\u6DFB\u52A0\u4E3B\u673A\u540D\u6620\u5C04\u3002\u7C7B\u4F3C docker client --add-host\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>extra_hosts:
 - &quot;somehost:162.242.195.82&quot;
 - &quot;otherhost:50.31.209.229&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4EE5\u4E0A\u4F1A\u5728\u6B64\u670D\u52A1\u7684\u5185\u90E8\u5BB9\u5668\u4E2D /etc/hosts \u521B\u5EFA\u4E00\u4E2A\u5177\u6709 ip \u5730\u5740\u548C\u4E3B\u673A\u540D\u7684\u6620\u5C04\u5173\u7CFB\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>162.242.195.82  somehost
50.31.209.229   otherhost
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="healthcheck" tabindex="-1"><a class="header-anchor" href="#healthcheck" aria-hidden="true">#</a> healthcheck</h3><p>\u7528\u4E8E\u68C0\u6D4B docker \u670D\u52A1\u662F\u5426\u5065\u5EB7\u8FD0\u884C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>healthcheck:
  test: [&quot;CMD&quot;, &quot;curl&quot;, &quot;-f&quot;, &quot;http://localhost&quot;] # \u8BBE\u7F6E\u68C0\u6D4B\u7A0B\u5E8F
  interval: 1m30s # \u8BBE\u7F6E\u68C0\u6D4B\u95F4\u9694
  timeout: 10s # \u8BBE\u7F6E\u68C0\u6D4B\u8D85\u65F6\u65F6\u95F4
  retries: 3 # \u8BBE\u7F6E\u91CD\u8BD5\u6B21\u6570
  start_period: 40s # \u542F\u52A8\u540E\uFF0C\u591A\u5C11\u79D2\u5F00\u59CB\u542F\u52A8\u68C0\u6D4B\u7A0B\u5E8F
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><p>\u6307\u5B9A\u5BB9\u5668\u8FD0\u884C\u7684\u955C\u50CF\u3002\u4EE5\u4E0B\u683C\u5F0F\u90FD\u53EF\u4EE5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>image: redis
image: ubuntu:14.04
image: tutum/influxdb
image: example-registry.com:4000/postgresql
image: a4bc65fd # \u955C\u50CFid
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="logging" tabindex="-1"><a class="header-anchor" href="#logging" aria-hidden="true">#</a> logging</h3><p>\u670D\u52A1\u7684\u65E5\u5FD7\u8BB0\u5F55\u914D\u7F6E\u3002</p><p>driver\uFF1A\u6307\u5B9A\u670D\u52A1\u5BB9\u5668\u7684\u65E5\u5FD7\u8BB0\u5F55\u9A71\u52A8\u7A0B\u5E8F\uFF0C\u9ED8\u8BA4\u503C\u4E3Ajson-file\u3002\u6709\u4EE5\u4E0B\u4E09\u4E2A\u9009\u9879</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>driver: &quot;json-file&quot;
driver: &quot;syslog&quot;
driver: &quot;none&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4EC5\u5728 json-file \u9A71\u52A8\u7A0B\u5E8F\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u53C2\u6570\uFF0C\u9650\u5236\u65E5\u5FD7\u5F97\u6570\u91CF\u548C\u5927\u5C0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>logging:
  driver: json-file
  options:
    max-size: &quot;200k&quot; # \u5355\u4E2A\u6587\u4EF6\u5927\u5C0F\u4E3A200k
    max-file: &quot;10&quot; # \u6700\u591A10\u4E2A\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5F53\u8FBE\u5230\u6587\u4EF6\u9650\u5236\u4E0A\u9650\uFF0C\u4F1A\u81EA\u52A8\u5220\u9664\u65E7\u5F97\u6587\u4EF6\u3002</p><p>syslog \u9A71\u52A8\u7A0B\u5E8F\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528 syslog-address \u6307\u5B9A\u65E5\u5FD7\u63A5\u6536\u5730\u5740\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>logging:
  driver: syslog
  options:
    syslog-address: &quot;tcp://192.168.0.42:123&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="network-mode" tabindex="-1"><a class="header-anchor" href="#network-mode" aria-hidden="true">#</a> network_mode</h3><p>\u8BBE\u7F6E\u7F51\u7EDC\u6A21\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>network_mode: &quot;bridge&quot;
network_mode: &quot;host&quot;
network_mode: &quot;none&quot;
network_mode: &quot;service:[service name]&quot;
network_mode: &quot;container:[container name/id]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>networks</p><p>\u914D\u7F6E\u5BB9\u5668\u8FDE\u63A5\u7684\u7F51\u7EDC\uFF0C\u5F15\u7528\u9876\u7EA7 networks \u4E0B\u7684\u6761\u76EE \u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>services:
  some-service:
    networks:
      some-network:
        aliases:
         - alias1
      other-network:
        aliases:
         - alias2
networks:
  some-network:
    # Use a custom driver
    driver: custom-driver-1
  other-network:
    # Use a custom driver which takes special options
    driver: custom-driver-2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p><strong>aliases</strong> \uFF1A\u540C\u4E00\u7F51\u7EDC\u4E0A\u7684\u5176\u4ED6\u5BB9\u5668\u53EF\u4EE5\u4F7F\u7528\u670D\u52A1\u540D\u79F0\u6216\u6B64\u522B\u540D\u6765\u8FDE\u63A5\u5230\u5BF9\u5E94\u5BB9\u5668\u7684\u670D\u52A1\u3002</p><h3 id="restart" tabindex="-1"><a class="header-anchor" href="#restart" aria-hidden="true">#</a> restart</h3><ul><li>no\uFF1A\u662F\u9ED8\u8BA4\u7684\u91CD\u542F\u7B56\u7565\uFF0C\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u90FD\u4E0D\u4F1A\u91CD\u542F\u5BB9\u5668\u3002</li><li>always\uFF1A\u5BB9\u5668\u603B\u662F\u91CD\u65B0\u542F\u52A8\u3002</li><li>on-failure\uFF1A\u5728\u5BB9\u5668\u975E\u6B63\u5E38\u9000\u51FA\u65F6\uFF08\u9000\u51FA\u72B6\u6001\u975E0\uFF09\uFF0C\u624D\u4F1A\u91CD\u542F\u5BB9\u5668\u3002</li><li>unless-stopped\uFF1A\u5728\u5BB9\u5668\u9000\u51FA\u65F6\u603B\u662F\u91CD\u542F\u5BB9\u5668\uFF0C\u4F46\u662F\u4E0D\u8003\u8651\u5728Docker\u5B88\u62A4\u8FDB\u7A0B\u542F\u52A8\u65F6\u5C31\u5DF2\u7ECF\u505C\u6B62\u4E86\u7684\u5BB9\u5668</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>restart: &quot;no&quot;
restart: always
restart: on-failure
restart: unless-stopped
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6CE8\uFF1Aswarm \u96C6\u7FA4\u6A21\u5F0F\uFF0C\u8BF7\u6539\u7528 restart_policy\u3002</p><h3 id="secrets" tabindex="-1"><a class="header-anchor" href="#secrets" aria-hidden="true">#</a> secrets</h3><p>\u5B58\u50A8\u654F\u611F\u6570\u636E\uFF0C\u4F8B\u5982\u5BC6\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &quot;3.1&quot;
services:

mysql:
  image: mysql
  environment:
    MYSQL_ROOT_PASSWORD_FILE: /run/secrets/my_secret
  secrets:
    - my_secret

secrets:
  my_secret:
    file: ./my_secret.txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="security-opt" tabindex="-1"><a class="header-anchor" href="#security-opt" aria-hidden="true">#</a> security_opt</h3><p>\u4FEE\u6539\u5BB9\u5668\u9ED8\u8BA4\u7684 schema \u6807\u7B7E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>security-opt\uFF1A
  - label:user:USER   # \u8BBE\u7F6E\u5BB9\u5668\u7684\u7528\u6237\u6807\u7B7E
  - label:role:ROLE   # \u8BBE\u7F6E\u5BB9\u5668\u7684\u89D2\u8272\u6807\u7B7E
  - label:type:TYPE   # \u8BBE\u7F6E\u5BB9\u5668\u7684\u5B89\u5168\u7B56\u7565\u6807\u7B7E
  - label:level:LEVEL  # \u8BBE\u7F6E\u5BB9\u5668\u7684\u5B89\u5168\u7B49\u7EA7\u6807\u7B7E
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="stop-grace-period" tabindex="-1"><a class="header-anchor" href="#stop-grace-period" aria-hidden="true">#</a> stop_grace_period</h3><p>\u6307\u5B9A\u5728\u5BB9\u5668\u65E0\u6CD5\u5904\u7406 SIGTERM (\u6216\u8005\u4EFB\u4F55 stop_signal \u7684\u4FE1\u53F7)\uFF0C\u7B49\u5F85\u591A\u4E45\u540E\u53D1\u9001 SIGKILL \u4FE1\u53F7\u5173\u95ED\u5BB9\u5668\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>stop_grace_period: 1s # \u7B49\u5F85 1 \u79D2
stop_grace_period: 1m30s # \u7B49\u5F85 1 \u5206 30 \u79D2 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u9ED8\u8BA4\u7684\u7B49\u5F85\u65F6\u95F4\u662F 10 \u79D2\u3002</p><h3 id="stop-signal" tabindex="-1"><a class="header-anchor" href="#stop-signal" aria-hidden="true">#</a> stop_signal</h3><p>\u8BBE\u7F6E\u505C\u6B62\u5BB9\u5668\u7684\u66FF\u4EE3\u4FE1\u53F7\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F7F\u7528 SIGTERM \u3002</p><p>\u4EE5\u4E0B\u793A\u4F8B\uFF0C\u4F7F\u7528 SIGUSR1 \u66FF\u4EE3\u4FE1\u53F7 SIGTERM \u6765\u505C\u6B62\u5BB9\u5668\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>stop_signal: SIGUSR1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="sysctls" tabindex="-1"><a class="header-anchor" href="#sysctls" aria-hidden="true">#</a> sysctls</h3><p>\u8BBE\u7F6E\u5BB9\u5668\u4E2D\u7684\u5185\u6838\u53C2\u6570\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u6216\u5B57\u5178\u683C\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sysctls:
  net.core.somaxconn: 1024
  net.ipv4.tcp_syncookies: 0

sysctls:
  - net.core.somaxconn=1024
  - net.ipv4.tcp_syncookies=0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="tmpfs" tabindex="-1"><a class="header-anchor" href="#tmpfs" aria-hidden="true">#</a> tmpfs</h3><p>\u5728\u5BB9\u5668\u5185\u5B89\u88C5\u4E00\u4E2A\u4E34\u65F6\u6587\u4EF6\u7CFB\u7EDF\u3002\u53EF\u4EE5\u662F\u5355\u4E2A\u503C\u6216\u5217\u8868\u7684\u591A\u4E2A\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tmpfs: /run

tmpfs:
  - /run
  - /tmp
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="ulimits" tabindex="-1"><a class="header-anchor" href="#ulimits" aria-hidden="true">#</a> ulimits</h3><p>\u8986\u76D6\u5BB9\u5668\u9ED8\u8BA4\u7684 ulimit\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ulimits:
  nproc: 65535
  nofile:
    soft: 20000
    hard: 40000
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="volumes" tabindex="-1"><a class="header-anchor" href="#volumes" aria-hidden="true">#</a> volumes</h3><p>\u5C06\u4E3B\u673A\u7684\u6570\u636E\u5377\u6216\u7740\u6587\u4EF6\u6302\u8F7D\u5230\u5BB9\u5668\u91CC\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>version: &quot;3.7&quot;
services:
  db:
    image: postgres:latest
    volumes:
      - &quot;/localhost/postgres.sock:/var/run/postgres/postgres.sock&quot;
      - &quot;/localhost/data:/var/lib/postgresql/data&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,179);function r(l,i){return p}var c=n(e,[["render",r],["__file","09.docker-compose.html.vue"]]);export{c as default};
