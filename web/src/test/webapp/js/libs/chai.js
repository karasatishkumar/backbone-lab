




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>Todos/test/lib/chai.js at master · uzikilon/Todos · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="uzikilon/Todos" name="twitter:title" /><meta content="Todos - A Sample Javascript Todo App Using Backbone and RequireJS" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/874904?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/874904?s=400" property="og:image" /><meta content="uzikilon/Todos" property="og:title" /><meta content="https://github.com/uzikilon/Todos" property="og:url" /><meta content="Todos - A Sample Javascript Todo App Using Backbone and RequireJS" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector-new.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="CA0C532B:475B:736175:5398827C" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico" />


    <meta content="authenticity_token" name="csrf-param" />
<meta content="bo3pZ0qhRE0HPKtTNoRVXFY0OPB/djNJYsF+5f+b051ihjiGLaNsIjwMHeY3DCZ/SO5KLxO7MiTo5pnoj8/1Lg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-e3bc44d99a5c83dfa1f8fd5618b2bf5595dd9023.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-a1fd2161b2d8ea3aef1c3d15c79772ff80eb5523.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="92f9821c7638c0a1ef0516b683c9c7e2">

      
  <meta name="description" content="Todos - A Sample Javascript Todo App Using Backbone and RequireJS" />

  <meta content="874904" name="octolytics-dimension-user_id" /><meta content="uzikilon" name="octolytics-dimension-user_login" /><meta content="5436531" name="octolytics-dimension-repository_id" /><meta content="uzikilon/Todos" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5436531" name="octolytics-dimension-repository_network_root_id" /><meta content="uzikilon/Todos" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/uzikilon/Todos/commits/master.atom" rel="alternate" title="Recent Commits to Todos:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production  vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fuzikilon%2FTodos%2Fblob%2Fmaster%2Ftest%2Flib%2Fchai.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="uzikilon/Todos"
      data-branch="master"
      data-sha="de25fa6dc45edabfe093a8aa5aeb7af92672392e"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="uzikilon/Todos" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fuzikilon%2FTodos"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/uzikilon/Todos/stargazers">
      49
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fuzikilon%2FTodos"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>Fork
      </a>
      <a href="/uzikilon/Todos/network" class="social-count">
        27
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/uzikilon" class="url fn" itemprop="url" rel="author"><span itemprop="title">uzikilon</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/uzikilon/Todos" class="js-current-repository js-repo-home-link">Todos</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/uzikilon/Todos" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /uzikilon/Todos">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/uzikilon/Todos/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues /uzikilon/Todos/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>1</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/uzikilon/Todos/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /uzikilon/Todos/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/uzikilon/Todos/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /uzikilon/Todos/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/uzikilon/Todos/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /uzikilon/Todos/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/uzikilon/Todos/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /uzikilon/Todos/network">
          <span class="octicon octicon-repo-forked"></span> <span class="full-word">Network</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/uzikilon/Todos.git" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/uzikilon/Todos.git" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/uzikilon/Todos" readonly="readonly">
    <span class="url-box-clippy">
    <button aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/uzikilon/Todos" data-copied-hint="copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>



                <a href="/uzikilon/Todos/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download uzikilon/Todos as a zip file"
                   title="Download uzikilon/Todos as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/uzikilon/Todos/blob/eef267f097af95628b01f0bc34126f86589383e4/test/lib/chai.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:10304cbd9d4ea8658a29ba70ce840e74 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/uzikilon/Todos/blob/gh-pages/test/lib/chai.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/uzikilon/Todos/blob/master/test/lib/chai.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/uzikilon/Todos/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="test/lib/chai.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/uzikilon/Todos" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Todos</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/uzikilon/Todos/tree/master/test" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">test</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/uzikilon/Todos/tree/master/test/lib" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">lib</span></a></span><span class="separator"> / </span><strong class="final-path">chai.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/uzikilon/Todos/contributors/master/test/lib/chai.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>3590 lines (3122 sloc)</span>
          <span class="meta-divider"></span>
        <span>103.587 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/uzikilon/Todos/raw/master/test/lib/chai.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/uzikilon/Todos/blame/master/test/lib/chai.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/uzikilon/Todos/commits/master/test/lib/chai.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript js-blob-data">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
<span id="L1426" rel="#L1426">1426</span>
<span id="L1427" rel="#L1427">1427</span>
<span id="L1428" rel="#L1428">1428</span>
<span id="L1429" rel="#L1429">1429</span>
<span id="L1430" rel="#L1430">1430</span>
<span id="L1431" rel="#L1431">1431</span>
<span id="L1432" rel="#L1432">1432</span>
<span id="L1433" rel="#L1433">1433</span>
<span id="L1434" rel="#L1434">1434</span>
<span id="L1435" rel="#L1435">1435</span>
<span id="L1436" rel="#L1436">1436</span>
<span id="L1437" rel="#L1437">1437</span>
<span id="L1438" rel="#L1438">1438</span>
<span id="L1439" rel="#L1439">1439</span>
<span id="L1440" rel="#L1440">1440</span>
<span id="L1441" rel="#L1441">1441</span>
<span id="L1442" rel="#L1442">1442</span>
<span id="L1443" rel="#L1443">1443</span>
<span id="L1444" rel="#L1444">1444</span>
<span id="L1445" rel="#L1445">1445</span>
<span id="L1446" rel="#L1446">1446</span>
<span id="L1447" rel="#L1447">1447</span>
<span id="L1448" rel="#L1448">1448</span>
<span id="L1449" rel="#L1449">1449</span>
<span id="L1450" rel="#L1450">1450</span>
<span id="L1451" rel="#L1451">1451</span>
<span id="L1452" rel="#L1452">1452</span>
<span id="L1453" rel="#L1453">1453</span>
<span id="L1454" rel="#L1454">1454</span>
<span id="L1455" rel="#L1455">1455</span>
<span id="L1456" rel="#L1456">1456</span>
<span id="L1457" rel="#L1457">1457</span>
<span id="L1458" rel="#L1458">1458</span>
<span id="L1459" rel="#L1459">1459</span>
<span id="L1460" rel="#L1460">1460</span>
<span id="L1461" rel="#L1461">1461</span>
<span id="L1462" rel="#L1462">1462</span>
<span id="L1463" rel="#L1463">1463</span>
<span id="L1464" rel="#L1464">1464</span>
<span id="L1465" rel="#L1465">1465</span>
<span id="L1466" rel="#L1466">1466</span>
<span id="L1467" rel="#L1467">1467</span>
<span id="L1468" rel="#L1468">1468</span>
<span id="L1469" rel="#L1469">1469</span>
<span id="L1470" rel="#L1470">1470</span>
<span id="L1471" rel="#L1471">1471</span>
<span id="L1472" rel="#L1472">1472</span>
<span id="L1473" rel="#L1473">1473</span>
<span id="L1474" rel="#L1474">1474</span>
<span id="L1475" rel="#L1475">1475</span>
<span id="L1476" rel="#L1476">1476</span>
<span id="L1477" rel="#L1477">1477</span>
<span id="L1478" rel="#L1478">1478</span>
<span id="L1479" rel="#L1479">1479</span>
<span id="L1480" rel="#L1480">1480</span>
<span id="L1481" rel="#L1481">1481</span>
<span id="L1482" rel="#L1482">1482</span>
<span id="L1483" rel="#L1483">1483</span>
<span id="L1484" rel="#L1484">1484</span>
<span id="L1485" rel="#L1485">1485</span>
<span id="L1486" rel="#L1486">1486</span>
<span id="L1487" rel="#L1487">1487</span>
<span id="L1488" rel="#L1488">1488</span>
<span id="L1489" rel="#L1489">1489</span>
<span id="L1490" rel="#L1490">1490</span>
<span id="L1491" rel="#L1491">1491</span>
<span id="L1492" rel="#L1492">1492</span>
<span id="L1493" rel="#L1493">1493</span>
<span id="L1494" rel="#L1494">1494</span>
<span id="L1495" rel="#L1495">1495</span>
<span id="L1496" rel="#L1496">1496</span>
<span id="L1497" rel="#L1497">1497</span>
<span id="L1498" rel="#L1498">1498</span>
<span id="L1499" rel="#L1499">1499</span>
<span id="L1500" rel="#L1500">1500</span>
<span id="L1501" rel="#L1501">1501</span>
<span id="L1502" rel="#L1502">1502</span>
<span id="L1503" rel="#L1503">1503</span>
<span id="L1504" rel="#L1504">1504</span>
<span id="L1505" rel="#L1505">1505</span>
<span id="L1506" rel="#L1506">1506</span>
<span id="L1507" rel="#L1507">1507</span>
<span id="L1508" rel="#L1508">1508</span>
<span id="L1509" rel="#L1509">1509</span>
<span id="L1510" rel="#L1510">1510</span>
<span id="L1511" rel="#L1511">1511</span>
<span id="L1512" rel="#L1512">1512</span>
<span id="L1513" rel="#L1513">1513</span>
<span id="L1514" rel="#L1514">1514</span>
<span id="L1515" rel="#L1515">1515</span>
<span id="L1516" rel="#L1516">1516</span>
<span id="L1517" rel="#L1517">1517</span>
<span id="L1518" rel="#L1518">1518</span>
<span id="L1519" rel="#L1519">1519</span>
<span id="L1520" rel="#L1520">1520</span>
<span id="L1521" rel="#L1521">1521</span>
<span id="L1522" rel="#L1522">1522</span>
<span id="L1523" rel="#L1523">1523</span>
<span id="L1524" rel="#L1524">1524</span>
<span id="L1525" rel="#L1525">1525</span>
<span id="L1526" rel="#L1526">1526</span>
<span id="L1527" rel="#L1527">1527</span>
<span id="L1528" rel="#L1528">1528</span>
<span id="L1529" rel="#L1529">1529</span>
<span id="L1530" rel="#L1530">1530</span>
<span id="L1531" rel="#L1531">1531</span>
<span id="L1532" rel="#L1532">1532</span>
<span id="L1533" rel="#L1533">1533</span>
<span id="L1534" rel="#L1534">1534</span>
<span id="L1535" rel="#L1535">1535</span>
<span id="L1536" rel="#L1536">1536</span>
<span id="L1537" rel="#L1537">1537</span>
<span id="L1538" rel="#L1538">1538</span>
<span id="L1539" rel="#L1539">1539</span>
<span id="L1540" rel="#L1540">1540</span>
<span id="L1541" rel="#L1541">1541</span>
<span id="L1542" rel="#L1542">1542</span>
<span id="L1543" rel="#L1543">1543</span>
<span id="L1544" rel="#L1544">1544</span>
<span id="L1545" rel="#L1545">1545</span>
<span id="L1546" rel="#L1546">1546</span>
<span id="L1547" rel="#L1547">1547</span>
<span id="L1548" rel="#L1548">1548</span>
<span id="L1549" rel="#L1549">1549</span>
<span id="L1550" rel="#L1550">1550</span>
<span id="L1551" rel="#L1551">1551</span>
<span id="L1552" rel="#L1552">1552</span>
<span id="L1553" rel="#L1553">1553</span>
<span id="L1554" rel="#L1554">1554</span>
<span id="L1555" rel="#L1555">1555</span>
<span id="L1556" rel="#L1556">1556</span>
<span id="L1557" rel="#L1557">1557</span>
<span id="L1558" rel="#L1558">1558</span>
<span id="L1559" rel="#L1559">1559</span>
<span id="L1560" rel="#L1560">1560</span>
<span id="L1561" rel="#L1561">1561</span>
<span id="L1562" rel="#L1562">1562</span>
<span id="L1563" rel="#L1563">1563</span>
<span id="L1564" rel="#L1564">1564</span>
<span id="L1565" rel="#L1565">1565</span>
<span id="L1566" rel="#L1566">1566</span>
<span id="L1567" rel="#L1567">1567</span>
<span id="L1568" rel="#L1568">1568</span>
<span id="L1569" rel="#L1569">1569</span>
<span id="L1570" rel="#L1570">1570</span>
<span id="L1571" rel="#L1571">1571</span>
<span id="L1572" rel="#L1572">1572</span>
<span id="L1573" rel="#L1573">1573</span>
<span id="L1574" rel="#L1574">1574</span>
<span id="L1575" rel="#L1575">1575</span>
<span id="L1576" rel="#L1576">1576</span>
<span id="L1577" rel="#L1577">1577</span>
<span id="L1578" rel="#L1578">1578</span>
<span id="L1579" rel="#L1579">1579</span>
<span id="L1580" rel="#L1580">1580</span>
<span id="L1581" rel="#L1581">1581</span>
<span id="L1582" rel="#L1582">1582</span>
<span id="L1583" rel="#L1583">1583</span>
<span id="L1584" rel="#L1584">1584</span>
<span id="L1585" rel="#L1585">1585</span>
<span id="L1586" rel="#L1586">1586</span>
<span id="L1587" rel="#L1587">1587</span>
<span id="L1588" rel="#L1588">1588</span>
<span id="L1589" rel="#L1589">1589</span>
<span id="L1590" rel="#L1590">1590</span>
<span id="L1591" rel="#L1591">1591</span>
<span id="L1592" rel="#L1592">1592</span>
<span id="L1593" rel="#L1593">1593</span>
<span id="L1594" rel="#L1594">1594</span>
<span id="L1595" rel="#L1595">1595</span>
<span id="L1596" rel="#L1596">1596</span>
<span id="L1597" rel="#L1597">1597</span>
<span id="L1598" rel="#L1598">1598</span>
<span id="L1599" rel="#L1599">1599</span>
<span id="L1600" rel="#L1600">1600</span>
<span id="L1601" rel="#L1601">1601</span>
<span id="L1602" rel="#L1602">1602</span>
<span id="L1603" rel="#L1603">1603</span>
<span id="L1604" rel="#L1604">1604</span>
<span id="L1605" rel="#L1605">1605</span>
<span id="L1606" rel="#L1606">1606</span>
<span id="L1607" rel="#L1607">1607</span>
<span id="L1608" rel="#L1608">1608</span>
<span id="L1609" rel="#L1609">1609</span>
<span id="L1610" rel="#L1610">1610</span>
<span id="L1611" rel="#L1611">1611</span>
<span id="L1612" rel="#L1612">1612</span>
<span id="L1613" rel="#L1613">1613</span>
<span id="L1614" rel="#L1614">1614</span>
<span id="L1615" rel="#L1615">1615</span>
<span id="L1616" rel="#L1616">1616</span>
<span id="L1617" rel="#L1617">1617</span>
<span id="L1618" rel="#L1618">1618</span>
<span id="L1619" rel="#L1619">1619</span>
<span id="L1620" rel="#L1620">1620</span>
<span id="L1621" rel="#L1621">1621</span>
<span id="L1622" rel="#L1622">1622</span>
<span id="L1623" rel="#L1623">1623</span>
<span id="L1624" rel="#L1624">1624</span>
<span id="L1625" rel="#L1625">1625</span>
<span id="L1626" rel="#L1626">1626</span>
<span id="L1627" rel="#L1627">1627</span>
<span id="L1628" rel="#L1628">1628</span>
<span id="L1629" rel="#L1629">1629</span>
<span id="L1630" rel="#L1630">1630</span>
<span id="L1631" rel="#L1631">1631</span>
<span id="L1632" rel="#L1632">1632</span>
<span id="L1633" rel="#L1633">1633</span>
<span id="L1634" rel="#L1634">1634</span>
<span id="L1635" rel="#L1635">1635</span>
<span id="L1636" rel="#L1636">1636</span>
<span id="L1637" rel="#L1637">1637</span>
<span id="L1638" rel="#L1638">1638</span>
<span id="L1639" rel="#L1639">1639</span>
<span id="L1640" rel="#L1640">1640</span>
<span id="L1641" rel="#L1641">1641</span>
<span id="L1642" rel="#L1642">1642</span>
<span id="L1643" rel="#L1643">1643</span>
<span id="L1644" rel="#L1644">1644</span>
<span id="L1645" rel="#L1645">1645</span>
<span id="L1646" rel="#L1646">1646</span>
<span id="L1647" rel="#L1647">1647</span>
<span id="L1648" rel="#L1648">1648</span>
<span id="L1649" rel="#L1649">1649</span>
<span id="L1650" rel="#L1650">1650</span>
<span id="L1651" rel="#L1651">1651</span>
<span id="L1652" rel="#L1652">1652</span>
<span id="L1653" rel="#L1653">1653</span>
<span id="L1654" rel="#L1654">1654</span>
<span id="L1655" rel="#L1655">1655</span>
<span id="L1656" rel="#L1656">1656</span>
<span id="L1657" rel="#L1657">1657</span>
<span id="L1658" rel="#L1658">1658</span>
<span id="L1659" rel="#L1659">1659</span>
<span id="L1660" rel="#L1660">1660</span>
<span id="L1661" rel="#L1661">1661</span>
<span id="L1662" rel="#L1662">1662</span>
<span id="L1663" rel="#L1663">1663</span>
<span id="L1664" rel="#L1664">1664</span>
<span id="L1665" rel="#L1665">1665</span>
<span id="L1666" rel="#L1666">1666</span>
<span id="L1667" rel="#L1667">1667</span>
<span id="L1668" rel="#L1668">1668</span>
<span id="L1669" rel="#L1669">1669</span>
<span id="L1670" rel="#L1670">1670</span>
<span id="L1671" rel="#L1671">1671</span>
<span id="L1672" rel="#L1672">1672</span>
<span id="L1673" rel="#L1673">1673</span>
<span id="L1674" rel="#L1674">1674</span>
<span id="L1675" rel="#L1675">1675</span>
<span id="L1676" rel="#L1676">1676</span>
<span id="L1677" rel="#L1677">1677</span>
<span id="L1678" rel="#L1678">1678</span>
<span id="L1679" rel="#L1679">1679</span>
<span id="L1680" rel="#L1680">1680</span>
<span id="L1681" rel="#L1681">1681</span>
<span id="L1682" rel="#L1682">1682</span>
<span id="L1683" rel="#L1683">1683</span>
<span id="L1684" rel="#L1684">1684</span>
<span id="L1685" rel="#L1685">1685</span>
<span id="L1686" rel="#L1686">1686</span>
<span id="L1687" rel="#L1687">1687</span>
<span id="L1688" rel="#L1688">1688</span>
<span id="L1689" rel="#L1689">1689</span>
<span id="L1690" rel="#L1690">1690</span>
<span id="L1691" rel="#L1691">1691</span>
<span id="L1692" rel="#L1692">1692</span>
<span id="L1693" rel="#L1693">1693</span>
<span id="L1694" rel="#L1694">1694</span>
<span id="L1695" rel="#L1695">1695</span>
<span id="L1696" rel="#L1696">1696</span>
<span id="L1697" rel="#L1697">1697</span>
<span id="L1698" rel="#L1698">1698</span>
<span id="L1699" rel="#L1699">1699</span>
<span id="L1700" rel="#L1700">1700</span>
<span id="L1701" rel="#L1701">1701</span>
<span id="L1702" rel="#L1702">1702</span>
<span id="L1703" rel="#L1703">1703</span>
<span id="L1704" rel="#L1704">1704</span>
<span id="L1705" rel="#L1705">1705</span>
<span id="L1706" rel="#L1706">1706</span>
<span id="L1707" rel="#L1707">1707</span>
<span id="L1708" rel="#L1708">1708</span>
<span id="L1709" rel="#L1709">1709</span>
<span id="L1710" rel="#L1710">1710</span>
<span id="L1711" rel="#L1711">1711</span>
<span id="L1712" rel="#L1712">1712</span>
<span id="L1713" rel="#L1713">1713</span>
<span id="L1714" rel="#L1714">1714</span>
<span id="L1715" rel="#L1715">1715</span>
<span id="L1716" rel="#L1716">1716</span>
<span id="L1717" rel="#L1717">1717</span>
<span id="L1718" rel="#L1718">1718</span>
<span id="L1719" rel="#L1719">1719</span>
<span id="L1720" rel="#L1720">1720</span>
<span id="L1721" rel="#L1721">1721</span>
<span id="L1722" rel="#L1722">1722</span>
<span id="L1723" rel="#L1723">1723</span>
<span id="L1724" rel="#L1724">1724</span>
<span id="L1725" rel="#L1725">1725</span>
<span id="L1726" rel="#L1726">1726</span>
<span id="L1727" rel="#L1727">1727</span>
<span id="L1728" rel="#L1728">1728</span>
<span id="L1729" rel="#L1729">1729</span>
<span id="L1730" rel="#L1730">1730</span>
<span id="L1731" rel="#L1731">1731</span>
<span id="L1732" rel="#L1732">1732</span>
<span id="L1733" rel="#L1733">1733</span>
<span id="L1734" rel="#L1734">1734</span>
<span id="L1735" rel="#L1735">1735</span>
<span id="L1736" rel="#L1736">1736</span>
<span id="L1737" rel="#L1737">1737</span>
<span id="L1738" rel="#L1738">1738</span>
<span id="L1739" rel="#L1739">1739</span>
<span id="L1740" rel="#L1740">1740</span>
<span id="L1741" rel="#L1741">1741</span>
<span id="L1742" rel="#L1742">1742</span>
<span id="L1743" rel="#L1743">1743</span>
<span id="L1744" rel="#L1744">1744</span>
<span id="L1745" rel="#L1745">1745</span>
<span id="L1746" rel="#L1746">1746</span>
<span id="L1747" rel="#L1747">1747</span>
<span id="L1748" rel="#L1748">1748</span>
<span id="L1749" rel="#L1749">1749</span>
<span id="L1750" rel="#L1750">1750</span>
<span id="L1751" rel="#L1751">1751</span>
<span id="L1752" rel="#L1752">1752</span>
<span id="L1753" rel="#L1753">1753</span>
<span id="L1754" rel="#L1754">1754</span>
<span id="L1755" rel="#L1755">1755</span>
<span id="L1756" rel="#L1756">1756</span>
<span id="L1757" rel="#L1757">1757</span>
<span id="L1758" rel="#L1758">1758</span>
<span id="L1759" rel="#L1759">1759</span>
<span id="L1760" rel="#L1760">1760</span>
<span id="L1761" rel="#L1761">1761</span>
<span id="L1762" rel="#L1762">1762</span>
<span id="L1763" rel="#L1763">1763</span>
<span id="L1764" rel="#L1764">1764</span>
<span id="L1765" rel="#L1765">1765</span>
<span id="L1766" rel="#L1766">1766</span>
<span id="L1767" rel="#L1767">1767</span>
<span id="L1768" rel="#L1768">1768</span>
<span id="L1769" rel="#L1769">1769</span>
<span id="L1770" rel="#L1770">1770</span>
<span id="L1771" rel="#L1771">1771</span>
<span id="L1772" rel="#L1772">1772</span>
<span id="L1773" rel="#L1773">1773</span>
<span id="L1774" rel="#L1774">1774</span>
<span id="L1775" rel="#L1775">1775</span>
<span id="L1776" rel="#L1776">1776</span>
<span id="L1777" rel="#L1777">1777</span>
<span id="L1778" rel="#L1778">1778</span>
<span id="L1779" rel="#L1779">1779</span>
<span id="L1780" rel="#L1780">1780</span>
<span id="L1781" rel="#L1781">1781</span>
<span id="L1782" rel="#L1782">1782</span>
<span id="L1783" rel="#L1783">1783</span>
<span id="L1784" rel="#L1784">1784</span>
<span id="L1785" rel="#L1785">1785</span>
<span id="L1786" rel="#L1786">1786</span>
<span id="L1787" rel="#L1787">1787</span>
<span id="L1788" rel="#L1788">1788</span>
<span id="L1789" rel="#L1789">1789</span>
<span id="L1790" rel="#L1790">1790</span>
<span id="L1791" rel="#L1791">1791</span>
<span id="L1792" rel="#L1792">1792</span>
<span id="L1793" rel="#L1793">1793</span>
<span id="L1794" rel="#L1794">1794</span>
<span id="L1795" rel="#L1795">1795</span>
<span id="L1796" rel="#L1796">1796</span>
<span id="L1797" rel="#L1797">1797</span>
<span id="L1798" rel="#L1798">1798</span>
<span id="L1799" rel="#L1799">1799</span>
<span id="L1800" rel="#L1800">1800</span>
<span id="L1801" rel="#L1801">1801</span>
<span id="L1802" rel="#L1802">1802</span>
<span id="L1803" rel="#L1803">1803</span>
<span id="L1804" rel="#L1804">1804</span>
<span id="L1805" rel="#L1805">1805</span>
<span id="L1806" rel="#L1806">1806</span>
<span id="L1807" rel="#L1807">1807</span>
<span id="L1808" rel="#L1808">1808</span>
<span id="L1809" rel="#L1809">1809</span>
<span id="L1810" rel="#L1810">1810</span>
<span id="L1811" rel="#L1811">1811</span>
<span id="L1812" rel="#L1812">1812</span>
<span id="L1813" rel="#L1813">1813</span>
<span id="L1814" rel="#L1814">1814</span>
<span id="L1815" rel="#L1815">1815</span>
<span id="L1816" rel="#L1816">1816</span>
<span id="L1817" rel="#L1817">1817</span>
<span id="L1818" rel="#L1818">1818</span>
<span id="L1819" rel="#L1819">1819</span>
<span id="L1820" rel="#L1820">1820</span>
<span id="L1821" rel="#L1821">1821</span>
<span id="L1822" rel="#L1822">1822</span>
<span id="L1823" rel="#L1823">1823</span>
<span id="L1824" rel="#L1824">1824</span>
<span id="L1825" rel="#L1825">1825</span>
<span id="L1826" rel="#L1826">1826</span>
<span id="L1827" rel="#L1827">1827</span>
<span id="L1828" rel="#L1828">1828</span>
<span id="L1829" rel="#L1829">1829</span>
<span id="L1830" rel="#L1830">1830</span>
<span id="L1831" rel="#L1831">1831</span>
<span id="L1832" rel="#L1832">1832</span>
<span id="L1833" rel="#L1833">1833</span>
<span id="L1834" rel="#L1834">1834</span>
<span id="L1835" rel="#L1835">1835</span>
<span id="L1836" rel="#L1836">1836</span>
<span id="L1837" rel="#L1837">1837</span>
<span id="L1838" rel="#L1838">1838</span>
<span id="L1839" rel="#L1839">1839</span>
<span id="L1840" rel="#L1840">1840</span>
<span id="L1841" rel="#L1841">1841</span>
<span id="L1842" rel="#L1842">1842</span>
<span id="L1843" rel="#L1843">1843</span>
<span id="L1844" rel="#L1844">1844</span>
<span id="L1845" rel="#L1845">1845</span>
<span id="L1846" rel="#L1846">1846</span>
<span id="L1847" rel="#L1847">1847</span>
<span id="L1848" rel="#L1848">1848</span>
<span id="L1849" rel="#L1849">1849</span>
<span id="L1850" rel="#L1850">1850</span>
<span id="L1851" rel="#L1851">1851</span>
<span id="L1852" rel="#L1852">1852</span>
<span id="L1853" rel="#L1853">1853</span>
<span id="L1854" rel="#L1854">1854</span>
<span id="L1855" rel="#L1855">1855</span>
<span id="L1856" rel="#L1856">1856</span>
<span id="L1857" rel="#L1857">1857</span>
<span id="L1858" rel="#L1858">1858</span>
<span id="L1859" rel="#L1859">1859</span>
<span id="L1860" rel="#L1860">1860</span>
<span id="L1861" rel="#L1861">1861</span>
<span id="L1862" rel="#L1862">1862</span>
<span id="L1863" rel="#L1863">1863</span>
<span id="L1864" rel="#L1864">1864</span>
<span id="L1865" rel="#L1865">1865</span>
<span id="L1866" rel="#L1866">1866</span>
<span id="L1867" rel="#L1867">1867</span>
<span id="L1868" rel="#L1868">1868</span>
<span id="L1869" rel="#L1869">1869</span>
<span id="L1870" rel="#L1870">1870</span>
<span id="L1871" rel="#L1871">1871</span>
<span id="L1872" rel="#L1872">1872</span>
<span id="L1873" rel="#L1873">1873</span>
<span id="L1874" rel="#L1874">1874</span>
<span id="L1875" rel="#L1875">1875</span>
<span id="L1876" rel="#L1876">1876</span>
<span id="L1877" rel="#L1877">1877</span>
<span id="L1878" rel="#L1878">1878</span>
<span id="L1879" rel="#L1879">1879</span>
<span id="L1880" rel="#L1880">1880</span>
<span id="L1881" rel="#L1881">1881</span>
<span id="L1882" rel="#L1882">1882</span>
<span id="L1883" rel="#L1883">1883</span>
<span id="L1884" rel="#L1884">1884</span>
<span id="L1885" rel="#L1885">1885</span>
<span id="L1886" rel="#L1886">1886</span>
<span id="L1887" rel="#L1887">1887</span>
<span id="L1888" rel="#L1888">1888</span>
<span id="L1889" rel="#L1889">1889</span>
<span id="L1890" rel="#L1890">1890</span>
<span id="L1891" rel="#L1891">1891</span>
<span id="L1892" rel="#L1892">1892</span>
<span id="L1893" rel="#L1893">1893</span>
<span id="L1894" rel="#L1894">1894</span>
<span id="L1895" rel="#L1895">1895</span>
<span id="L1896" rel="#L1896">1896</span>
<span id="L1897" rel="#L1897">1897</span>
<span id="L1898" rel="#L1898">1898</span>
<span id="L1899" rel="#L1899">1899</span>
<span id="L1900" rel="#L1900">1900</span>
<span id="L1901" rel="#L1901">1901</span>
<span id="L1902" rel="#L1902">1902</span>
<span id="L1903" rel="#L1903">1903</span>
<span id="L1904" rel="#L1904">1904</span>
<span id="L1905" rel="#L1905">1905</span>
<span id="L1906" rel="#L1906">1906</span>
<span id="L1907" rel="#L1907">1907</span>
<span id="L1908" rel="#L1908">1908</span>
<span id="L1909" rel="#L1909">1909</span>
<span id="L1910" rel="#L1910">1910</span>
<span id="L1911" rel="#L1911">1911</span>
<span id="L1912" rel="#L1912">1912</span>
<span id="L1913" rel="#L1913">1913</span>
<span id="L1914" rel="#L1914">1914</span>
<span id="L1915" rel="#L1915">1915</span>
<span id="L1916" rel="#L1916">1916</span>
<span id="L1917" rel="#L1917">1917</span>
<span id="L1918" rel="#L1918">1918</span>
<span id="L1919" rel="#L1919">1919</span>
<span id="L1920" rel="#L1920">1920</span>
<span id="L1921" rel="#L1921">1921</span>
<span id="L1922" rel="#L1922">1922</span>
<span id="L1923" rel="#L1923">1923</span>
<span id="L1924" rel="#L1924">1924</span>
<span id="L1925" rel="#L1925">1925</span>
<span id="L1926" rel="#L1926">1926</span>
<span id="L1927" rel="#L1927">1927</span>
<span id="L1928" rel="#L1928">1928</span>
<span id="L1929" rel="#L1929">1929</span>
<span id="L1930" rel="#L1930">1930</span>
<span id="L1931" rel="#L1931">1931</span>
<span id="L1932" rel="#L1932">1932</span>
<span id="L1933" rel="#L1933">1933</span>
<span id="L1934" rel="#L1934">1934</span>
<span id="L1935" rel="#L1935">1935</span>
<span id="L1936" rel="#L1936">1936</span>
<span id="L1937" rel="#L1937">1937</span>
<span id="L1938" rel="#L1938">1938</span>
<span id="L1939" rel="#L1939">1939</span>
<span id="L1940" rel="#L1940">1940</span>
<span id="L1941" rel="#L1941">1941</span>
<span id="L1942" rel="#L1942">1942</span>
<span id="L1943" rel="#L1943">1943</span>
<span id="L1944" rel="#L1944">1944</span>
<span id="L1945" rel="#L1945">1945</span>
<span id="L1946" rel="#L1946">1946</span>
<span id="L1947" rel="#L1947">1947</span>
<span id="L1948" rel="#L1948">1948</span>
<span id="L1949" rel="#L1949">1949</span>
<span id="L1950" rel="#L1950">1950</span>
<span id="L1951" rel="#L1951">1951</span>
<span id="L1952" rel="#L1952">1952</span>
<span id="L1953" rel="#L1953">1953</span>
<span id="L1954" rel="#L1954">1954</span>
<span id="L1955" rel="#L1955">1955</span>
<span id="L1956" rel="#L1956">1956</span>
<span id="L1957" rel="#L1957">1957</span>
<span id="L1958" rel="#L1958">1958</span>
<span id="L1959" rel="#L1959">1959</span>
<span id="L1960" rel="#L1960">1960</span>
<span id="L1961" rel="#L1961">1961</span>
<span id="L1962" rel="#L1962">1962</span>
<span id="L1963" rel="#L1963">1963</span>
<span id="L1964" rel="#L1964">1964</span>
<span id="L1965" rel="#L1965">1965</span>
<span id="L1966" rel="#L1966">1966</span>
<span id="L1967" rel="#L1967">1967</span>
<span id="L1968" rel="#L1968">1968</span>
<span id="L1969" rel="#L1969">1969</span>
<span id="L1970" rel="#L1970">1970</span>
<span id="L1971" rel="#L1971">1971</span>
<span id="L1972" rel="#L1972">1972</span>
<span id="L1973" rel="#L1973">1973</span>
<span id="L1974" rel="#L1974">1974</span>
<span id="L1975" rel="#L1975">1975</span>
<span id="L1976" rel="#L1976">1976</span>
<span id="L1977" rel="#L1977">1977</span>
<span id="L1978" rel="#L1978">1978</span>
<span id="L1979" rel="#L1979">1979</span>
<span id="L1980" rel="#L1980">1980</span>
<span id="L1981" rel="#L1981">1981</span>
<span id="L1982" rel="#L1982">1982</span>
<span id="L1983" rel="#L1983">1983</span>
<span id="L1984" rel="#L1984">1984</span>
<span id="L1985" rel="#L1985">1985</span>
<span id="L1986" rel="#L1986">1986</span>
<span id="L1987" rel="#L1987">1987</span>
<span id="L1988" rel="#L1988">1988</span>
<span id="L1989" rel="#L1989">1989</span>
<span id="L1990" rel="#L1990">1990</span>
<span id="L1991" rel="#L1991">1991</span>
<span id="L1992" rel="#L1992">1992</span>
<span id="L1993" rel="#L1993">1993</span>
<span id="L1994" rel="#L1994">1994</span>
<span id="L1995" rel="#L1995">1995</span>
<span id="L1996" rel="#L1996">1996</span>
<span id="L1997" rel="#L1997">1997</span>
<span id="L1998" rel="#L1998">1998</span>
<span id="L1999" rel="#L1999">1999</span>
<span id="L2000" rel="#L2000">2000</span>
<span id="L2001" rel="#L2001">2001</span>
<span id="L2002" rel="#L2002">2002</span>
<span id="L2003" rel="#L2003">2003</span>
<span id="L2004" rel="#L2004">2004</span>
<span id="L2005" rel="#L2005">2005</span>
<span id="L2006" rel="#L2006">2006</span>
<span id="L2007" rel="#L2007">2007</span>
<span id="L2008" rel="#L2008">2008</span>
<span id="L2009" rel="#L2009">2009</span>
<span id="L2010" rel="#L2010">2010</span>
<span id="L2011" rel="#L2011">2011</span>
<span id="L2012" rel="#L2012">2012</span>
<span id="L2013" rel="#L2013">2013</span>
<span id="L2014" rel="#L2014">2014</span>
<span id="L2015" rel="#L2015">2015</span>
<span id="L2016" rel="#L2016">2016</span>
<span id="L2017" rel="#L2017">2017</span>
<span id="L2018" rel="#L2018">2018</span>
<span id="L2019" rel="#L2019">2019</span>
<span id="L2020" rel="#L2020">2020</span>
<span id="L2021" rel="#L2021">2021</span>
<span id="L2022" rel="#L2022">2022</span>
<span id="L2023" rel="#L2023">2023</span>
<span id="L2024" rel="#L2024">2024</span>
<span id="L2025" rel="#L2025">2025</span>
<span id="L2026" rel="#L2026">2026</span>
<span id="L2027" rel="#L2027">2027</span>
<span id="L2028" rel="#L2028">2028</span>
<span id="L2029" rel="#L2029">2029</span>
<span id="L2030" rel="#L2030">2030</span>
<span id="L2031" rel="#L2031">2031</span>
<span id="L2032" rel="#L2032">2032</span>
<span id="L2033" rel="#L2033">2033</span>
<span id="L2034" rel="#L2034">2034</span>
<span id="L2035" rel="#L2035">2035</span>
<span id="L2036" rel="#L2036">2036</span>
<span id="L2037" rel="#L2037">2037</span>
<span id="L2038" rel="#L2038">2038</span>
<span id="L2039" rel="#L2039">2039</span>
<span id="L2040" rel="#L2040">2040</span>
<span id="L2041" rel="#L2041">2041</span>
<span id="L2042" rel="#L2042">2042</span>
<span id="L2043" rel="#L2043">2043</span>
<span id="L2044" rel="#L2044">2044</span>
<span id="L2045" rel="#L2045">2045</span>
<span id="L2046" rel="#L2046">2046</span>
<span id="L2047" rel="#L2047">2047</span>
<span id="L2048" rel="#L2048">2048</span>
<span id="L2049" rel="#L2049">2049</span>
<span id="L2050" rel="#L2050">2050</span>
<span id="L2051" rel="#L2051">2051</span>
<span id="L2052" rel="#L2052">2052</span>
<span id="L2053" rel="#L2053">2053</span>
<span id="L2054" rel="#L2054">2054</span>
<span id="L2055" rel="#L2055">2055</span>
<span id="L2056" rel="#L2056">2056</span>
<span id="L2057" rel="#L2057">2057</span>
<span id="L2058" rel="#L2058">2058</span>
<span id="L2059" rel="#L2059">2059</span>
<span id="L2060" rel="#L2060">2060</span>
<span id="L2061" rel="#L2061">2061</span>
<span id="L2062" rel="#L2062">2062</span>
<span id="L2063" rel="#L2063">2063</span>
<span id="L2064" rel="#L2064">2064</span>
<span id="L2065" rel="#L2065">2065</span>
<span id="L2066" rel="#L2066">2066</span>
<span id="L2067" rel="#L2067">2067</span>
<span id="L2068" rel="#L2068">2068</span>
<span id="L2069" rel="#L2069">2069</span>
<span id="L2070" rel="#L2070">2070</span>
<span id="L2071" rel="#L2071">2071</span>
<span id="L2072" rel="#L2072">2072</span>
<span id="L2073" rel="#L2073">2073</span>
<span id="L2074" rel="#L2074">2074</span>
<span id="L2075" rel="#L2075">2075</span>
<span id="L2076" rel="#L2076">2076</span>
<span id="L2077" rel="#L2077">2077</span>
<span id="L2078" rel="#L2078">2078</span>
<span id="L2079" rel="#L2079">2079</span>
<span id="L2080" rel="#L2080">2080</span>
<span id="L2081" rel="#L2081">2081</span>
<span id="L2082" rel="#L2082">2082</span>
<span id="L2083" rel="#L2083">2083</span>
<span id="L2084" rel="#L2084">2084</span>
<span id="L2085" rel="#L2085">2085</span>
<span id="L2086" rel="#L2086">2086</span>
<span id="L2087" rel="#L2087">2087</span>
<span id="L2088" rel="#L2088">2088</span>
<span id="L2089" rel="#L2089">2089</span>
<span id="L2090" rel="#L2090">2090</span>
<span id="L2091" rel="#L2091">2091</span>
<span id="L2092" rel="#L2092">2092</span>
<span id="L2093" rel="#L2093">2093</span>
<span id="L2094" rel="#L2094">2094</span>
<span id="L2095" rel="#L2095">2095</span>
<span id="L2096" rel="#L2096">2096</span>
<span id="L2097" rel="#L2097">2097</span>
<span id="L2098" rel="#L2098">2098</span>
<span id="L2099" rel="#L2099">2099</span>
<span id="L2100" rel="#L2100">2100</span>
<span id="L2101" rel="#L2101">2101</span>
<span id="L2102" rel="#L2102">2102</span>
<span id="L2103" rel="#L2103">2103</span>
<span id="L2104" rel="#L2104">2104</span>
<span id="L2105" rel="#L2105">2105</span>
<span id="L2106" rel="#L2106">2106</span>
<span id="L2107" rel="#L2107">2107</span>
<span id="L2108" rel="#L2108">2108</span>
<span id="L2109" rel="#L2109">2109</span>
<span id="L2110" rel="#L2110">2110</span>
<span id="L2111" rel="#L2111">2111</span>
<span id="L2112" rel="#L2112">2112</span>
<span id="L2113" rel="#L2113">2113</span>
<span id="L2114" rel="#L2114">2114</span>
<span id="L2115" rel="#L2115">2115</span>
<span id="L2116" rel="#L2116">2116</span>
<span id="L2117" rel="#L2117">2117</span>
<span id="L2118" rel="#L2118">2118</span>
<span id="L2119" rel="#L2119">2119</span>
<span id="L2120" rel="#L2120">2120</span>
<span id="L2121" rel="#L2121">2121</span>
<span id="L2122" rel="#L2122">2122</span>
<span id="L2123" rel="#L2123">2123</span>
<span id="L2124" rel="#L2124">2124</span>
<span id="L2125" rel="#L2125">2125</span>
<span id="L2126" rel="#L2126">2126</span>
<span id="L2127" rel="#L2127">2127</span>
<span id="L2128" rel="#L2128">2128</span>
<span id="L2129" rel="#L2129">2129</span>
<span id="L2130" rel="#L2130">2130</span>
<span id="L2131" rel="#L2131">2131</span>
<span id="L2132" rel="#L2132">2132</span>
<span id="L2133" rel="#L2133">2133</span>
<span id="L2134" rel="#L2134">2134</span>
<span id="L2135" rel="#L2135">2135</span>
<span id="L2136" rel="#L2136">2136</span>
<span id="L2137" rel="#L2137">2137</span>
<span id="L2138" rel="#L2138">2138</span>
<span id="L2139" rel="#L2139">2139</span>
<span id="L2140" rel="#L2140">2140</span>
<span id="L2141" rel="#L2141">2141</span>
<span id="L2142" rel="#L2142">2142</span>
<span id="L2143" rel="#L2143">2143</span>
<span id="L2144" rel="#L2144">2144</span>
<span id="L2145" rel="#L2145">2145</span>
<span id="L2146" rel="#L2146">2146</span>
<span id="L2147" rel="#L2147">2147</span>
<span id="L2148" rel="#L2148">2148</span>
<span id="L2149" rel="#L2149">2149</span>
<span id="L2150" rel="#L2150">2150</span>
<span id="L2151" rel="#L2151">2151</span>
<span id="L2152" rel="#L2152">2152</span>
<span id="L2153" rel="#L2153">2153</span>
<span id="L2154" rel="#L2154">2154</span>
<span id="L2155" rel="#L2155">2155</span>
<span id="L2156" rel="#L2156">2156</span>
<span id="L2157" rel="#L2157">2157</span>
<span id="L2158" rel="#L2158">2158</span>
<span id="L2159" rel="#L2159">2159</span>
<span id="L2160" rel="#L2160">2160</span>
<span id="L2161" rel="#L2161">2161</span>
<span id="L2162" rel="#L2162">2162</span>
<span id="L2163" rel="#L2163">2163</span>
<span id="L2164" rel="#L2164">2164</span>
<span id="L2165" rel="#L2165">2165</span>
<span id="L2166" rel="#L2166">2166</span>
<span id="L2167" rel="#L2167">2167</span>
<span id="L2168" rel="#L2168">2168</span>
<span id="L2169" rel="#L2169">2169</span>
<span id="L2170" rel="#L2170">2170</span>
<span id="L2171" rel="#L2171">2171</span>
<span id="L2172" rel="#L2172">2172</span>
<span id="L2173" rel="#L2173">2173</span>
<span id="L2174" rel="#L2174">2174</span>
<span id="L2175" rel="#L2175">2175</span>
<span id="L2176" rel="#L2176">2176</span>
<span id="L2177" rel="#L2177">2177</span>
<span id="L2178" rel="#L2178">2178</span>
<span id="L2179" rel="#L2179">2179</span>
<span id="L2180" rel="#L2180">2180</span>
<span id="L2181" rel="#L2181">2181</span>
<span id="L2182" rel="#L2182">2182</span>
<span id="L2183" rel="#L2183">2183</span>
<span id="L2184" rel="#L2184">2184</span>
<span id="L2185" rel="#L2185">2185</span>
<span id="L2186" rel="#L2186">2186</span>
<span id="L2187" rel="#L2187">2187</span>
<span id="L2188" rel="#L2188">2188</span>
<span id="L2189" rel="#L2189">2189</span>
<span id="L2190" rel="#L2190">2190</span>
<span id="L2191" rel="#L2191">2191</span>
<span id="L2192" rel="#L2192">2192</span>
<span id="L2193" rel="#L2193">2193</span>
<span id="L2194" rel="#L2194">2194</span>
<span id="L2195" rel="#L2195">2195</span>
<span id="L2196" rel="#L2196">2196</span>
<span id="L2197" rel="#L2197">2197</span>
<span id="L2198" rel="#L2198">2198</span>
<span id="L2199" rel="#L2199">2199</span>
<span id="L2200" rel="#L2200">2200</span>
<span id="L2201" rel="#L2201">2201</span>
<span id="L2202" rel="#L2202">2202</span>
<span id="L2203" rel="#L2203">2203</span>
<span id="L2204" rel="#L2204">2204</span>
<span id="L2205" rel="#L2205">2205</span>
<span id="L2206" rel="#L2206">2206</span>
<span id="L2207" rel="#L2207">2207</span>
<span id="L2208" rel="#L2208">2208</span>
<span id="L2209" rel="#L2209">2209</span>
<span id="L2210" rel="#L2210">2210</span>
<span id="L2211" rel="#L2211">2211</span>
<span id="L2212" rel="#L2212">2212</span>
<span id="L2213" rel="#L2213">2213</span>
<span id="L2214" rel="#L2214">2214</span>
<span id="L2215" rel="#L2215">2215</span>
<span id="L2216" rel="#L2216">2216</span>
<span id="L2217" rel="#L2217">2217</span>
<span id="L2218" rel="#L2218">2218</span>
<span id="L2219" rel="#L2219">2219</span>
<span id="L2220" rel="#L2220">2220</span>
<span id="L2221" rel="#L2221">2221</span>
<span id="L2222" rel="#L2222">2222</span>
<span id="L2223" rel="#L2223">2223</span>
<span id="L2224" rel="#L2224">2224</span>
<span id="L2225" rel="#L2225">2225</span>
<span id="L2226" rel="#L2226">2226</span>
<span id="L2227" rel="#L2227">2227</span>
<span id="L2228" rel="#L2228">2228</span>
<span id="L2229" rel="#L2229">2229</span>
<span id="L2230" rel="#L2230">2230</span>
<span id="L2231" rel="#L2231">2231</span>
<span id="L2232" rel="#L2232">2232</span>
<span id="L2233" rel="#L2233">2233</span>
<span id="L2234" rel="#L2234">2234</span>
<span id="L2235" rel="#L2235">2235</span>
<span id="L2236" rel="#L2236">2236</span>
<span id="L2237" rel="#L2237">2237</span>
<span id="L2238" rel="#L2238">2238</span>
<span id="L2239" rel="#L2239">2239</span>
<span id="L2240" rel="#L2240">2240</span>
<span id="L2241" rel="#L2241">2241</span>
<span id="L2242" rel="#L2242">2242</span>
<span id="L2243" rel="#L2243">2243</span>
<span id="L2244" rel="#L2244">2244</span>
<span id="L2245" rel="#L2245">2245</span>
<span id="L2246" rel="#L2246">2246</span>
<span id="L2247" rel="#L2247">2247</span>
<span id="L2248" rel="#L2248">2248</span>
<span id="L2249" rel="#L2249">2249</span>
<span id="L2250" rel="#L2250">2250</span>
<span id="L2251" rel="#L2251">2251</span>
<span id="L2252" rel="#L2252">2252</span>
<span id="L2253" rel="#L2253">2253</span>
<span id="L2254" rel="#L2254">2254</span>
<span id="L2255" rel="#L2255">2255</span>
<span id="L2256" rel="#L2256">2256</span>
<span id="L2257" rel="#L2257">2257</span>
<span id="L2258" rel="#L2258">2258</span>
<span id="L2259" rel="#L2259">2259</span>
<span id="L2260" rel="#L2260">2260</span>
<span id="L2261" rel="#L2261">2261</span>
<span id="L2262" rel="#L2262">2262</span>
<span id="L2263" rel="#L2263">2263</span>
<span id="L2264" rel="#L2264">2264</span>
<span id="L2265" rel="#L2265">2265</span>
<span id="L2266" rel="#L2266">2266</span>
<span id="L2267" rel="#L2267">2267</span>
<span id="L2268" rel="#L2268">2268</span>
<span id="L2269" rel="#L2269">2269</span>
<span id="L2270" rel="#L2270">2270</span>
<span id="L2271" rel="#L2271">2271</span>
<span id="L2272" rel="#L2272">2272</span>
<span id="L2273" rel="#L2273">2273</span>
<span id="L2274" rel="#L2274">2274</span>
<span id="L2275" rel="#L2275">2275</span>
<span id="L2276" rel="#L2276">2276</span>
<span id="L2277" rel="#L2277">2277</span>
<span id="L2278" rel="#L2278">2278</span>
<span id="L2279" rel="#L2279">2279</span>
<span id="L2280" rel="#L2280">2280</span>
<span id="L2281" rel="#L2281">2281</span>
<span id="L2282" rel="#L2282">2282</span>
<span id="L2283" rel="#L2283">2283</span>
<span id="L2284" rel="#L2284">2284</span>
<span id="L2285" rel="#L2285">2285</span>
<span id="L2286" rel="#L2286">2286</span>
<span id="L2287" rel="#L2287">2287</span>
<span id="L2288" rel="#L2288">2288</span>
<span id="L2289" rel="#L2289">2289</span>
<span id="L2290" rel="#L2290">2290</span>
<span id="L2291" rel="#L2291">2291</span>
<span id="L2292" rel="#L2292">2292</span>
<span id="L2293" rel="#L2293">2293</span>
<span id="L2294" rel="#L2294">2294</span>
<span id="L2295" rel="#L2295">2295</span>
<span id="L2296" rel="#L2296">2296</span>
<span id="L2297" rel="#L2297">2297</span>
<span id="L2298" rel="#L2298">2298</span>
<span id="L2299" rel="#L2299">2299</span>
<span id="L2300" rel="#L2300">2300</span>
<span id="L2301" rel="#L2301">2301</span>
<span id="L2302" rel="#L2302">2302</span>
<span id="L2303" rel="#L2303">2303</span>
<span id="L2304" rel="#L2304">2304</span>
<span id="L2305" rel="#L2305">2305</span>
<span id="L2306" rel="#L2306">2306</span>
<span id="L2307" rel="#L2307">2307</span>
<span id="L2308" rel="#L2308">2308</span>
<span id="L2309" rel="#L2309">2309</span>
<span id="L2310" rel="#L2310">2310</span>
<span id="L2311" rel="#L2311">2311</span>
<span id="L2312" rel="#L2312">2312</span>
<span id="L2313" rel="#L2313">2313</span>
<span id="L2314" rel="#L2314">2314</span>
<span id="L2315" rel="#L2315">2315</span>
<span id="L2316" rel="#L2316">2316</span>
<span id="L2317" rel="#L2317">2317</span>
<span id="L2318" rel="#L2318">2318</span>
<span id="L2319" rel="#L2319">2319</span>
<span id="L2320" rel="#L2320">2320</span>
<span id="L2321" rel="#L2321">2321</span>
<span id="L2322" rel="#L2322">2322</span>
<span id="L2323" rel="#L2323">2323</span>
<span id="L2324" rel="#L2324">2324</span>
<span id="L2325" rel="#L2325">2325</span>
<span id="L2326" rel="#L2326">2326</span>
<span id="L2327" rel="#L2327">2327</span>
<span id="L2328" rel="#L2328">2328</span>
<span id="L2329" rel="#L2329">2329</span>
<span id="L2330" rel="#L2330">2330</span>
<span id="L2331" rel="#L2331">2331</span>
<span id="L2332" rel="#L2332">2332</span>
<span id="L2333" rel="#L2333">2333</span>
<span id="L2334" rel="#L2334">2334</span>
<span id="L2335" rel="#L2335">2335</span>
<span id="L2336" rel="#L2336">2336</span>
<span id="L2337" rel="#L2337">2337</span>
<span id="L2338" rel="#L2338">2338</span>
<span id="L2339" rel="#L2339">2339</span>
<span id="L2340" rel="#L2340">2340</span>
<span id="L2341" rel="#L2341">2341</span>
<span id="L2342" rel="#L2342">2342</span>
<span id="L2343" rel="#L2343">2343</span>
<span id="L2344" rel="#L2344">2344</span>
<span id="L2345" rel="#L2345">2345</span>
<span id="L2346" rel="#L2346">2346</span>
<span id="L2347" rel="#L2347">2347</span>
<span id="L2348" rel="#L2348">2348</span>
<span id="L2349" rel="#L2349">2349</span>
<span id="L2350" rel="#L2350">2350</span>
<span id="L2351" rel="#L2351">2351</span>
<span id="L2352" rel="#L2352">2352</span>
<span id="L2353" rel="#L2353">2353</span>
<span id="L2354" rel="#L2354">2354</span>
<span id="L2355" rel="#L2355">2355</span>
<span id="L2356" rel="#L2356">2356</span>
<span id="L2357" rel="#L2357">2357</span>
<span id="L2358" rel="#L2358">2358</span>
<span id="L2359" rel="#L2359">2359</span>
<span id="L2360" rel="#L2360">2360</span>
<span id="L2361" rel="#L2361">2361</span>
<span id="L2362" rel="#L2362">2362</span>
<span id="L2363" rel="#L2363">2363</span>
<span id="L2364" rel="#L2364">2364</span>
<span id="L2365" rel="#L2365">2365</span>
<span id="L2366" rel="#L2366">2366</span>
<span id="L2367" rel="#L2367">2367</span>
<span id="L2368" rel="#L2368">2368</span>
<span id="L2369" rel="#L2369">2369</span>
<span id="L2370" rel="#L2370">2370</span>
<span id="L2371" rel="#L2371">2371</span>
<span id="L2372" rel="#L2372">2372</span>
<span id="L2373" rel="#L2373">2373</span>
<span id="L2374" rel="#L2374">2374</span>
<span id="L2375" rel="#L2375">2375</span>
<span id="L2376" rel="#L2376">2376</span>
<span id="L2377" rel="#L2377">2377</span>
<span id="L2378" rel="#L2378">2378</span>
<span id="L2379" rel="#L2379">2379</span>
<span id="L2380" rel="#L2380">2380</span>
<span id="L2381" rel="#L2381">2381</span>
<span id="L2382" rel="#L2382">2382</span>
<span id="L2383" rel="#L2383">2383</span>
<span id="L2384" rel="#L2384">2384</span>
<span id="L2385" rel="#L2385">2385</span>
<span id="L2386" rel="#L2386">2386</span>
<span id="L2387" rel="#L2387">2387</span>
<span id="L2388" rel="#L2388">2388</span>
<span id="L2389" rel="#L2389">2389</span>
<span id="L2390" rel="#L2390">2390</span>
<span id="L2391" rel="#L2391">2391</span>
<span id="L2392" rel="#L2392">2392</span>
<span id="L2393" rel="#L2393">2393</span>
<span id="L2394" rel="#L2394">2394</span>
<span id="L2395" rel="#L2395">2395</span>
<span id="L2396" rel="#L2396">2396</span>
<span id="L2397" rel="#L2397">2397</span>
<span id="L2398" rel="#L2398">2398</span>
<span id="L2399" rel="#L2399">2399</span>
<span id="L2400" rel="#L2400">2400</span>
<span id="L2401" rel="#L2401">2401</span>
<span id="L2402" rel="#L2402">2402</span>
<span id="L2403" rel="#L2403">2403</span>
<span id="L2404" rel="#L2404">2404</span>
<span id="L2405" rel="#L2405">2405</span>
<span id="L2406" rel="#L2406">2406</span>
<span id="L2407" rel="#L2407">2407</span>
<span id="L2408" rel="#L2408">2408</span>
<span id="L2409" rel="#L2409">2409</span>
<span id="L2410" rel="#L2410">2410</span>
<span id="L2411" rel="#L2411">2411</span>
<span id="L2412" rel="#L2412">2412</span>
<span id="L2413" rel="#L2413">2413</span>
<span id="L2414" rel="#L2414">2414</span>
<span id="L2415" rel="#L2415">2415</span>
<span id="L2416" rel="#L2416">2416</span>
<span id="L2417" rel="#L2417">2417</span>
<span id="L2418" rel="#L2418">2418</span>
<span id="L2419" rel="#L2419">2419</span>
<span id="L2420" rel="#L2420">2420</span>
<span id="L2421" rel="#L2421">2421</span>
<span id="L2422" rel="#L2422">2422</span>
<span id="L2423" rel="#L2423">2423</span>
<span id="L2424" rel="#L2424">2424</span>
<span id="L2425" rel="#L2425">2425</span>
<span id="L2426" rel="#L2426">2426</span>
<span id="L2427" rel="#L2427">2427</span>
<span id="L2428" rel="#L2428">2428</span>
<span id="L2429" rel="#L2429">2429</span>
<span id="L2430" rel="#L2430">2430</span>
<span id="L2431" rel="#L2431">2431</span>
<span id="L2432" rel="#L2432">2432</span>
<span id="L2433" rel="#L2433">2433</span>
<span id="L2434" rel="#L2434">2434</span>
<span id="L2435" rel="#L2435">2435</span>
<span id="L2436" rel="#L2436">2436</span>
<span id="L2437" rel="#L2437">2437</span>
<span id="L2438" rel="#L2438">2438</span>
<span id="L2439" rel="#L2439">2439</span>
<span id="L2440" rel="#L2440">2440</span>
<span id="L2441" rel="#L2441">2441</span>
<span id="L2442" rel="#L2442">2442</span>
<span id="L2443" rel="#L2443">2443</span>
<span id="L2444" rel="#L2444">2444</span>
<span id="L2445" rel="#L2445">2445</span>
<span id="L2446" rel="#L2446">2446</span>
<span id="L2447" rel="#L2447">2447</span>
<span id="L2448" rel="#L2448">2448</span>
<span id="L2449" rel="#L2449">2449</span>
<span id="L2450" rel="#L2450">2450</span>
<span id="L2451" rel="#L2451">2451</span>
<span id="L2452" rel="#L2452">2452</span>
<span id="L2453" rel="#L2453">2453</span>
<span id="L2454" rel="#L2454">2454</span>
<span id="L2455" rel="#L2455">2455</span>
<span id="L2456" rel="#L2456">2456</span>
<span id="L2457" rel="#L2457">2457</span>
<span id="L2458" rel="#L2458">2458</span>
<span id="L2459" rel="#L2459">2459</span>
<span id="L2460" rel="#L2460">2460</span>
<span id="L2461" rel="#L2461">2461</span>
<span id="L2462" rel="#L2462">2462</span>
<span id="L2463" rel="#L2463">2463</span>
<span id="L2464" rel="#L2464">2464</span>
<span id="L2465" rel="#L2465">2465</span>
<span id="L2466" rel="#L2466">2466</span>
<span id="L2467" rel="#L2467">2467</span>
<span id="L2468" rel="#L2468">2468</span>
<span id="L2469" rel="#L2469">2469</span>
<span id="L2470" rel="#L2470">2470</span>
<span id="L2471" rel="#L2471">2471</span>
<span id="L2472" rel="#L2472">2472</span>
<span id="L2473" rel="#L2473">2473</span>
<span id="L2474" rel="#L2474">2474</span>
<span id="L2475" rel="#L2475">2475</span>
<span id="L2476" rel="#L2476">2476</span>
<span id="L2477" rel="#L2477">2477</span>
<span id="L2478" rel="#L2478">2478</span>
<span id="L2479" rel="#L2479">2479</span>
<span id="L2480" rel="#L2480">2480</span>
<span id="L2481" rel="#L2481">2481</span>
<span id="L2482" rel="#L2482">2482</span>
<span id="L2483" rel="#L2483">2483</span>
<span id="L2484" rel="#L2484">2484</span>
<span id="L2485" rel="#L2485">2485</span>
<span id="L2486" rel="#L2486">2486</span>
<span id="L2487" rel="#L2487">2487</span>
<span id="L2488" rel="#L2488">2488</span>
<span id="L2489" rel="#L2489">2489</span>
<span id="L2490" rel="#L2490">2490</span>
<span id="L2491" rel="#L2491">2491</span>
<span id="L2492" rel="#L2492">2492</span>
<span id="L2493" rel="#L2493">2493</span>
<span id="L2494" rel="#L2494">2494</span>
<span id="L2495" rel="#L2495">2495</span>
<span id="L2496" rel="#L2496">2496</span>
<span id="L2497" rel="#L2497">2497</span>
<span id="L2498" rel="#L2498">2498</span>
<span id="L2499" rel="#L2499">2499</span>
<span id="L2500" rel="#L2500">2500</span>
<span id="L2501" rel="#L2501">2501</span>
<span id="L2502" rel="#L2502">2502</span>
<span id="L2503" rel="#L2503">2503</span>
<span id="L2504" rel="#L2504">2504</span>
<span id="L2505" rel="#L2505">2505</span>
<span id="L2506" rel="#L2506">2506</span>
<span id="L2507" rel="#L2507">2507</span>
<span id="L2508" rel="#L2508">2508</span>
<span id="L2509" rel="#L2509">2509</span>
<span id="L2510" rel="#L2510">2510</span>
<span id="L2511" rel="#L2511">2511</span>
<span id="L2512" rel="#L2512">2512</span>
<span id="L2513" rel="#L2513">2513</span>
<span id="L2514" rel="#L2514">2514</span>
<span id="L2515" rel="#L2515">2515</span>
<span id="L2516" rel="#L2516">2516</span>
<span id="L2517" rel="#L2517">2517</span>
<span id="L2518" rel="#L2518">2518</span>
<span id="L2519" rel="#L2519">2519</span>
<span id="L2520" rel="#L2520">2520</span>
<span id="L2521" rel="#L2521">2521</span>
<span id="L2522" rel="#L2522">2522</span>
<span id="L2523" rel="#L2523">2523</span>
<span id="L2524" rel="#L2524">2524</span>
<span id="L2525" rel="#L2525">2525</span>
<span id="L2526" rel="#L2526">2526</span>
<span id="L2527" rel="#L2527">2527</span>
<span id="L2528" rel="#L2528">2528</span>
<span id="L2529" rel="#L2529">2529</span>
<span id="L2530" rel="#L2530">2530</span>
<span id="L2531" rel="#L2531">2531</span>
<span id="L2532" rel="#L2532">2532</span>
<span id="L2533" rel="#L2533">2533</span>
<span id="L2534" rel="#L2534">2534</span>
<span id="L2535" rel="#L2535">2535</span>
<span id="L2536" rel="#L2536">2536</span>
<span id="L2537" rel="#L2537">2537</span>
<span id="L2538" rel="#L2538">2538</span>
<span id="L2539" rel="#L2539">2539</span>
<span id="L2540" rel="#L2540">2540</span>
<span id="L2541" rel="#L2541">2541</span>
<span id="L2542" rel="#L2542">2542</span>
<span id="L2543" rel="#L2543">2543</span>
<span id="L2544" rel="#L2544">2544</span>
<span id="L2545" rel="#L2545">2545</span>
<span id="L2546" rel="#L2546">2546</span>
<span id="L2547" rel="#L2547">2547</span>
<span id="L2548" rel="#L2548">2548</span>
<span id="L2549" rel="#L2549">2549</span>
<span id="L2550" rel="#L2550">2550</span>
<span id="L2551" rel="#L2551">2551</span>
<span id="L2552" rel="#L2552">2552</span>
<span id="L2553" rel="#L2553">2553</span>
<span id="L2554" rel="#L2554">2554</span>
<span id="L2555" rel="#L2555">2555</span>
<span id="L2556" rel="#L2556">2556</span>
<span id="L2557" rel="#L2557">2557</span>
<span id="L2558" rel="#L2558">2558</span>
<span id="L2559" rel="#L2559">2559</span>
<span id="L2560" rel="#L2560">2560</span>
<span id="L2561" rel="#L2561">2561</span>
<span id="L2562" rel="#L2562">2562</span>
<span id="L2563" rel="#L2563">2563</span>
<span id="L2564" rel="#L2564">2564</span>
<span id="L2565" rel="#L2565">2565</span>
<span id="L2566" rel="#L2566">2566</span>
<span id="L2567" rel="#L2567">2567</span>
<span id="L2568" rel="#L2568">2568</span>
<span id="L2569" rel="#L2569">2569</span>
<span id="L2570" rel="#L2570">2570</span>
<span id="L2571" rel="#L2571">2571</span>
<span id="L2572" rel="#L2572">2572</span>
<span id="L2573" rel="#L2573">2573</span>
<span id="L2574" rel="#L2574">2574</span>
<span id="L2575" rel="#L2575">2575</span>
<span id="L2576" rel="#L2576">2576</span>
<span id="L2577" rel="#L2577">2577</span>
<span id="L2578" rel="#L2578">2578</span>
<span id="L2579" rel="#L2579">2579</span>
<span id="L2580" rel="#L2580">2580</span>
<span id="L2581" rel="#L2581">2581</span>
<span id="L2582" rel="#L2582">2582</span>
<span id="L2583" rel="#L2583">2583</span>
<span id="L2584" rel="#L2584">2584</span>
<span id="L2585" rel="#L2585">2585</span>
<span id="L2586" rel="#L2586">2586</span>
<span id="L2587" rel="#L2587">2587</span>
<span id="L2588" rel="#L2588">2588</span>
<span id="L2589" rel="#L2589">2589</span>
<span id="L2590" rel="#L2590">2590</span>
<span id="L2591" rel="#L2591">2591</span>
<span id="L2592" rel="#L2592">2592</span>
<span id="L2593" rel="#L2593">2593</span>
<span id="L2594" rel="#L2594">2594</span>
<span id="L2595" rel="#L2595">2595</span>
<span id="L2596" rel="#L2596">2596</span>
<span id="L2597" rel="#L2597">2597</span>
<span id="L2598" rel="#L2598">2598</span>
<span id="L2599" rel="#L2599">2599</span>
<span id="L2600" rel="#L2600">2600</span>
<span id="L2601" rel="#L2601">2601</span>
<span id="L2602" rel="#L2602">2602</span>
<span id="L2603" rel="#L2603">2603</span>
<span id="L2604" rel="#L2604">2604</span>
<span id="L2605" rel="#L2605">2605</span>
<span id="L2606" rel="#L2606">2606</span>
<span id="L2607" rel="#L2607">2607</span>
<span id="L2608" rel="#L2608">2608</span>
<span id="L2609" rel="#L2609">2609</span>
<span id="L2610" rel="#L2610">2610</span>
<span id="L2611" rel="#L2611">2611</span>
<span id="L2612" rel="#L2612">2612</span>
<span id="L2613" rel="#L2613">2613</span>
<span id="L2614" rel="#L2614">2614</span>
<span id="L2615" rel="#L2615">2615</span>
<span id="L2616" rel="#L2616">2616</span>
<span id="L2617" rel="#L2617">2617</span>
<span id="L2618" rel="#L2618">2618</span>
<span id="L2619" rel="#L2619">2619</span>
<span id="L2620" rel="#L2620">2620</span>
<span id="L2621" rel="#L2621">2621</span>
<span id="L2622" rel="#L2622">2622</span>
<span id="L2623" rel="#L2623">2623</span>
<span id="L2624" rel="#L2624">2624</span>
<span id="L2625" rel="#L2625">2625</span>
<span id="L2626" rel="#L2626">2626</span>
<span id="L2627" rel="#L2627">2627</span>
<span id="L2628" rel="#L2628">2628</span>
<span id="L2629" rel="#L2629">2629</span>
<span id="L2630" rel="#L2630">2630</span>
<span id="L2631" rel="#L2631">2631</span>
<span id="L2632" rel="#L2632">2632</span>
<span id="L2633" rel="#L2633">2633</span>
<span id="L2634" rel="#L2634">2634</span>
<span id="L2635" rel="#L2635">2635</span>
<span id="L2636" rel="#L2636">2636</span>
<span id="L2637" rel="#L2637">2637</span>
<span id="L2638" rel="#L2638">2638</span>
<span id="L2639" rel="#L2639">2639</span>
<span id="L2640" rel="#L2640">2640</span>
<span id="L2641" rel="#L2641">2641</span>
<span id="L2642" rel="#L2642">2642</span>
<span id="L2643" rel="#L2643">2643</span>
<span id="L2644" rel="#L2644">2644</span>
<span id="L2645" rel="#L2645">2645</span>
<span id="L2646" rel="#L2646">2646</span>
<span id="L2647" rel="#L2647">2647</span>
<span id="L2648" rel="#L2648">2648</span>
<span id="L2649" rel="#L2649">2649</span>
<span id="L2650" rel="#L2650">2650</span>
<span id="L2651" rel="#L2651">2651</span>
<span id="L2652" rel="#L2652">2652</span>
<span id="L2653" rel="#L2653">2653</span>
<span id="L2654" rel="#L2654">2654</span>
<span id="L2655" rel="#L2655">2655</span>
<span id="L2656" rel="#L2656">2656</span>
<span id="L2657" rel="#L2657">2657</span>
<span id="L2658" rel="#L2658">2658</span>
<span id="L2659" rel="#L2659">2659</span>
<span id="L2660" rel="#L2660">2660</span>
<span id="L2661" rel="#L2661">2661</span>
<span id="L2662" rel="#L2662">2662</span>
<span id="L2663" rel="#L2663">2663</span>
<span id="L2664" rel="#L2664">2664</span>
<span id="L2665" rel="#L2665">2665</span>
<span id="L2666" rel="#L2666">2666</span>
<span id="L2667" rel="#L2667">2667</span>
<span id="L2668" rel="#L2668">2668</span>
<span id="L2669" rel="#L2669">2669</span>
<span id="L2670" rel="#L2670">2670</span>
<span id="L2671" rel="#L2671">2671</span>
<span id="L2672" rel="#L2672">2672</span>
<span id="L2673" rel="#L2673">2673</span>
<span id="L2674" rel="#L2674">2674</span>
<span id="L2675" rel="#L2675">2675</span>
<span id="L2676" rel="#L2676">2676</span>
<span id="L2677" rel="#L2677">2677</span>
<span id="L2678" rel="#L2678">2678</span>
<span id="L2679" rel="#L2679">2679</span>
<span id="L2680" rel="#L2680">2680</span>
<span id="L2681" rel="#L2681">2681</span>
<span id="L2682" rel="#L2682">2682</span>
<span id="L2683" rel="#L2683">2683</span>
<span id="L2684" rel="#L2684">2684</span>
<span id="L2685" rel="#L2685">2685</span>
<span id="L2686" rel="#L2686">2686</span>
<span id="L2687" rel="#L2687">2687</span>
<span id="L2688" rel="#L2688">2688</span>
<span id="L2689" rel="#L2689">2689</span>
<span id="L2690" rel="#L2690">2690</span>
<span id="L2691" rel="#L2691">2691</span>
<span id="L2692" rel="#L2692">2692</span>
<span id="L2693" rel="#L2693">2693</span>
<span id="L2694" rel="#L2694">2694</span>
<span id="L2695" rel="#L2695">2695</span>
<span id="L2696" rel="#L2696">2696</span>
<span id="L2697" rel="#L2697">2697</span>
<span id="L2698" rel="#L2698">2698</span>
<span id="L2699" rel="#L2699">2699</span>
<span id="L2700" rel="#L2700">2700</span>
<span id="L2701" rel="#L2701">2701</span>
<span id="L2702" rel="#L2702">2702</span>
<span id="L2703" rel="#L2703">2703</span>
<span id="L2704" rel="#L2704">2704</span>
<span id="L2705" rel="#L2705">2705</span>
<span id="L2706" rel="#L2706">2706</span>
<span id="L2707" rel="#L2707">2707</span>
<span id="L2708" rel="#L2708">2708</span>
<span id="L2709" rel="#L2709">2709</span>
<span id="L2710" rel="#L2710">2710</span>
<span id="L2711" rel="#L2711">2711</span>
<span id="L2712" rel="#L2712">2712</span>
<span id="L2713" rel="#L2713">2713</span>
<span id="L2714" rel="#L2714">2714</span>
<span id="L2715" rel="#L2715">2715</span>
<span id="L2716" rel="#L2716">2716</span>
<span id="L2717" rel="#L2717">2717</span>
<span id="L2718" rel="#L2718">2718</span>
<span id="L2719" rel="#L2719">2719</span>
<span id="L2720" rel="#L2720">2720</span>
<span id="L2721" rel="#L2721">2721</span>
<span id="L2722" rel="#L2722">2722</span>
<span id="L2723" rel="#L2723">2723</span>
<span id="L2724" rel="#L2724">2724</span>
<span id="L2725" rel="#L2725">2725</span>
<span id="L2726" rel="#L2726">2726</span>
<span id="L2727" rel="#L2727">2727</span>
<span id="L2728" rel="#L2728">2728</span>
<span id="L2729" rel="#L2729">2729</span>
<span id="L2730" rel="#L2730">2730</span>
<span id="L2731" rel="#L2731">2731</span>
<span id="L2732" rel="#L2732">2732</span>
<span id="L2733" rel="#L2733">2733</span>
<span id="L2734" rel="#L2734">2734</span>
<span id="L2735" rel="#L2735">2735</span>
<span id="L2736" rel="#L2736">2736</span>
<span id="L2737" rel="#L2737">2737</span>
<span id="L2738" rel="#L2738">2738</span>
<span id="L2739" rel="#L2739">2739</span>
<span id="L2740" rel="#L2740">2740</span>
<span id="L2741" rel="#L2741">2741</span>
<span id="L2742" rel="#L2742">2742</span>
<span id="L2743" rel="#L2743">2743</span>
<span id="L2744" rel="#L2744">2744</span>
<span id="L2745" rel="#L2745">2745</span>
<span id="L2746" rel="#L2746">2746</span>
<span id="L2747" rel="#L2747">2747</span>
<span id="L2748" rel="#L2748">2748</span>
<span id="L2749" rel="#L2749">2749</span>
<span id="L2750" rel="#L2750">2750</span>
<span id="L2751" rel="#L2751">2751</span>
<span id="L2752" rel="#L2752">2752</span>
<span id="L2753" rel="#L2753">2753</span>
<span id="L2754" rel="#L2754">2754</span>
<span id="L2755" rel="#L2755">2755</span>
<span id="L2756" rel="#L2756">2756</span>
<span id="L2757" rel="#L2757">2757</span>
<span id="L2758" rel="#L2758">2758</span>
<span id="L2759" rel="#L2759">2759</span>
<span id="L2760" rel="#L2760">2760</span>
<span id="L2761" rel="#L2761">2761</span>
<span id="L2762" rel="#L2762">2762</span>
<span id="L2763" rel="#L2763">2763</span>
<span id="L2764" rel="#L2764">2764</span>
<span id="L2765" rel="#L2765">2765</span>
<span id="L2766" rel="#L2766">2766</span>
<span id="L2767" rel="#L2767">2767</span>
<span id="L2768" rel="#L2768">2768</span>
<span id="L2769" rel="#L2769">2769</span>
<span id="L2770" rel="#L2770">2770</span>
<span id="L2771" rel="#L2771">2771</span>
<span id="L2772" rel="#L2772">2772</span>
<span id="L2773" rel="#L2773">2773</span>
<span id="L2774" rel="#L2774">2774</span>
<span id="L2775" rel="#L2775">2775</span>
<span id="L2776" rel="#L2776">2776</span>
<span id="L2777" rel="#L2777">2777</span>
<span id="L2778" rel="#L2778">2778</span>
<span id="L2779" rel="#L2779">2779</span>
<span id="L2780" rel="#L2780">2780</span>
<span id="L2781" rel="#L2781">2781</span>
<span id="L2782" rel="#L2782">2782</span>
<span id="L2783" rel="#L2783">2783</span>
<span id="L2784" rel="#L2784">2784</span>
<span id="L2785" rel="#L2785">2785</span>
<span id="L2786" rel="#L2786">2786</span>
<span id="L2787" rel="#L2787">2787</span>
<span id="L2788" rel="#L2788">2788</span>
<span id="L2789" rel="#L2789">2789</span>
<span id="L2790" rel="#L2790">2790</span>
<span id="L2791" rel="#L2791">2791</span>
<span id="L2792" rel="#L2792">2792</span>
<span id="L2793" rel="#L2793">2793</span>
<span id="L2794" rel="#L2794">2794</span>
<span id="L2795" rel="#L2795">2795</span>
<span id="L2796" rel="#L2796">2796</span>
<span id="L2797" rel="#L2797">2797</span>
<span id="L2798" rel="#L2798">2798</span>
<span id="L2799" rel="#L2799">2799</span>
<span id="L2800" rel="#L2800">2800</span>
<span id="L2801" rel="#L2801">2801</span>
<span id="L2802" rel="#L2802">2802</span>
<span id="L2803" rel="#L2803">2803</span>
<span id="L2804" rel="#L2804">2804</span>
<span id="L2805" rel="#L2805">2805</span>
<span id="L2806" rel="#L2806">2806</span>
<span id="L2807" rel="#L2807">2807</span>
<span id="L2808" rel="#L2808">2808</span>
<span id="L2809" rel="#L2809">2809</span>
<span id="L2810" rel="#L2810">2810</span>
<span id="L2811" rel="#L2811">2811</span>
<span id="L2812" rel="#L2812">2812</span>
<span id="L2813" rel="#L2813">2813</span>
<span id="L2814" rel="#L2814">2814</span>
<span id="L2815" rel="#L2815">2815</span>
<span id="L2816" rel="#L2816">2816</span>
<span id="L2817" rel="#L2817">2817</span>
<span id="L2818" rel="#L2818">2818</span>
<span id="L2819" rel="#L2819">2819</span>
<span id="L2820" rel="#L2820">2820</span>
<span id="L2821" rel="#L2821">2821</span>
<span id="L2822" rel="#L2822">2822</span>
<span id="L2823" rel="#L2823">2823</span>
<span id="L2824" rel="#L2824">2824</span>
<span id="L2825" rel="#L2825">2825</span>
<span id="L2826" rel="#L2826">2826</span>
<span id="L2827" rel="#L2827">2827</span>
<span id="L2828" rel="#L2828">2828</span>
<span id="L2829" rel="#L2829">2829</span>
<span id="L2830" rel="#L2830">2830</span>
<span id="L2831" rel="#L2831">2831</span>
<span id="L2832" rel="#L2832">2832</span>
<span id="L2833" rel="#L2833">2833</span>
<span id="L2834" rel="#L2834">2834</span>
<span id="L2835" rel="#L2835">2835</span>
<span id="L2836" rel="#L2836">2836</span>
<span id="L2837" rel="#L2837">2837</span>
<span id="L2838" rel="#L2838">2838</span>
<span id="L2839" rel="#L2839">2839</span>
<span id="L2840" rel="#L2840">2840</span>
<span id="L2841" rel="#L2841">2841</span>
<span id="L2842" rel="#L2842">2842</span>
<span id="L2843" rel="#L2843">2843</span>
<span id="L2844" rel="#L2844">2844</span>
<span id="L2845" rel="#L2845">2845</span>
<span id="L2846" rel="#L2846">2846</span>
<span id="L2847" rel="#L2847">2847</span>
<span id="L2848" rel="#L2848">2848</span>
<span id="L2849" rel="#L2849">2849</span>
<span id="L2850" rel="#L2850">2850</span>
<span id="L2851" rel="#L2851">2851</span>
<span id="L2852" rel="#L2852">2852</span>
<span id="L2853" rel="#L2853">2853</span>
<span id="L2854" rel="#L2854">2854</span>
<span id="L2855" rel="#L2855">2855</span>
<span id="L2856" rel="#L2856">2856</span>
<span id="L2857" rel="#L2857">2857</span>
<span id="L2858" rel="#L2858">2858</span>
<span id="L2859" rel="#L2859">2859</span>
<span id="L2860" rel="#L2860">2860</span>
<span id="L2861" rel="#L2861">2861</span>
<span id="L2862" rel="#L2862">2862</span>
<span id="L2863" rel="#L2863">2863</span>
<span id="L2864" rel="#L2864">2864</span>
<span id="L2865" rel="#L2865">2865</span>
<span id="L2866" rel="#L2866">2866</span>
<span id="L2867" rel="#L2867">2867</span>
<span id="L2868" rel="#L2868">2868</span>
<span id="L2869" rel="#L2869">2869</span>
<span id="L2870" rel="#L2870">2870</span>
<span id="L2871" rel="#L2871">2871</span>
<span id="L2872" rel="#L2872">2872</span>
<span id="L2873" rel="#L2873">2873</span>
<span id="L2874" rel="#L2874">2874</span>
<span id="L2875" rel="#L2875">2875</span>
<span id="L2876" rel="#L2876">2876</span>
<span id="L2877" rel="#L2877">2877</span>
<span id="L2878" rel="#L2878">2878</span>
<span id="L2879" rel="#L2879">2879</span>
<span id="L2880" rel="#L2880">2880</span>
<span id="L2881" rel="#L2881">2881</span>
<span id="L2882" rel="#L2882">2882</span>
<span id="L2883" rel="#L2883">2883</span>
<span id="L2884" rel="#L2884">2884</span>
<span id="L2885" rel="#L2885">2885</span>
<span id="L2886" rel="#L2886">2886</span>
<span id="L2887" rel="#L2887">2887</span>
<span id="L2888" rel="#L2888">2888</span>
<span id="L2889" rel="#L2889">2889</span>
<span id="L2890" rel="#L2890">2890</span>
<span id="L2891" rel="#L2891">2891</span>
<span id="L2892" rel="#L2892">2892</span>
<span id="L2893" rel="#L2893">2893</span>
<span id="L2894" rel="#L2894">2894</span>
<span id="L2895" rel="#L2895">2895</span>
<span id="L2896" rel="#L2896">2896</span>
<span id="L2897" rel="#L2897">2897</span>
<span id="L2898" rel="#L2898">2898</span>
<span id="L2899" rel="#L2899">2899</span>
<span id="L2900" rel="#L2900">2900</span>
<span id="L2901" rel="#L2901">2901</span>
<span id="L2902" rel="#L2902">2902</span>
<span id="L2903" rel="#L2903">2903</span>
<span id="L2904" rel="#L2904">2904</span>
<span id="L2905" rel="#L2905">2905</span>
<span id="L2906" rel="#L2906">2906</span>
<span id="L2907" rel="#L2907">2907</span>
<span id="L2908" rel="#L2908">2908</span>
<span id="L2909" rel="#L2909">2909</span>
<span id="L2910" rel="#L2910">2910</span>
<span id="L2911" rel="#L2911">2911</span>
<span id="L2912" rel="#L2912">2912</span>
<span id="L2913" rel="#L2913">2913</span>
<span id="L2914" rel="#L2914">2914</span>
<span id="L2915" rel="#L2915">2915</span>
<span id="L2916" rel="#L2916">2916</span>
<span id="L2917" rel="#L2917">2917</span>
<span id="L2918" rel="#L2918">2918</span>
<span id="L2919" rel="#L2919">2919</span>
<span id="L2920" rel="#L2920">2920</span>
<span id="L2921" rel="#L2921">2921</span>
<span id="L2922" rel="#L2922">2922</span>
<span id="L2923" rel="#L2923">2923</span>
<span id="L2924" rel="#L2924">2924</span>
<span id="L2925" rel="#L2925">2925</span>
<span id="L2926" rel="#L2926">2926</span>
<span id="L2927" rel="#L2927">2927</span>
<span id="L2928" rel="#L2928">2928</span>
<span id="L2929" rel="#L2929">2929</span>
<span id="L2930" rel="#L2930">2930</span>
<span id="L2931" rel="#L2931">2931</span>
<span id="L2932" rel="#L2932">2932</span>
<span id="L2933" rel="#L2933">2933</span>
<span id="L2934" rel="#L2934">2934</span>
<span id="L2935" rel="#L2935">2935</span>
<span id="L2936" rel="#L2936">2936</span>
<span id="L2937" rel="#L2937">2937</span>
<span id="L2938" rel="#L2938">2938</span>
<span id="L2939" rel="#L2939">2939</span>
<span id="L2940" rel="#L2940">2940</span>
<span id="L2941" rel="#L2941">2941</span>
<span id="L2942" rel="#L2942">2942</span>
<span id="L2943" rel="#L2943">2943</span>
<span id="L2944" rel="#L2944">2944</span>
<span id="L2945" rel="#L2945">2945</span>
<span id="L2946" rel="#L2946">2946</span>
<span id="L2947" rel="#L2947">2947</span>
<span id="L2948" rel="#L2948">2948</span>
<span id="L2949" rel="#L2949">2949</span>
<span id="L2950" rel="#L2950">2950</span>
<span id="L2951" rel="#L2951">2951</span>
<span id="L2952" rel="#L2952">2952</span>
<span id="L2953" rel="#L2953">2953</span>
<span id="L2954" rel="#L2954">2954</span>
<span id="L2955" rel="#L2955">2955</span>
<span id="L2956" rel="#L2956">2956</span>
<span id="L2957" rel="#L2957">2957</span>
<span id="L2958" rel="#L2958">2958</span>
<span id="L2959" rel="#L2959">2959</span>
<span id="L2960" rel="#L2960">2960</span>
<span id="L2961" rel="#L2961">2961</span>
<span id="L2962" rel="#L2962">2962</span>
<span id="L2963" rel="#L2963">2963</span>
<span id="L2964" rel="#L2964">2964</span>
<span id="L2965" rel="#L2965">2965</span>
<span id="L2966" rel="#L2966">2966</span>
<span id="L2967" rel="#L2967">2967</span>
<span id="L2968" rel="#L2968">2968</span>
<span id="L2969" rel="#L2969">2969</span>
<span id="L2970" rel="#L2970">2970</span>
<span id="L2971" rel="#L2971">2971</span>
<span id="L2972" rel="#L2972">2972</span>
<span id="L2973" rel="#L2973">2973</span>
<span id="L2974" rel="#L2974">2974</span>
<span id="L2975" rel="#L2975">2975</span>
<span id="L2976" rel="#L2976">2976</span>
<span id="L2977" rel="#L2977">2977</span>
<span id="L2978" rel="#L2978">2978</span>
<span id="L2979" rel="#L2979">2979</span>
<span id="L2980" rel="#L2980">2980</span>
<span id="L2981" rel="#L2981">2981</span>
<span id="L2982" rel="#L2982">2982</span>
<span id="L2983" rel="#L2983">2983</span>
<span id="L2984" rel="#L2984">2984</span>
<span id="L2985" rel="#L2985">2985</span>
<span id="L2986" rel="#L2986">2986</span>
<span id="L2987" rel="#L2987">2987</span>
<span id="L2988" rel="#L2988">2988</span>
<span id="L2989" rel="#L2989">2989</span>
<span id="L2990" rel="#L2990">2990</span>
<span id="L2991" rel="#L2991">2991</span>
<span id="L2992" rel="#L2992">2992</span>
<span id="L2993" rel="#L2993">2993</span>
<span id="L2994" rel="#L2994">2994</span>
<span id="L2995" rel="#L2995">2995</span>
<span id="L2996" rel="#L2996">2996</span>
<span id="L2997" rel="#L2997">2997</span>
<span id="L2998" rel="#L2998">2998</span>
<span id="L2999" rel="#L2999">2999</span>
<span id="L3000" rel="#L3000">3000</span>
<span id="L3001" rel="#L3001">3001</span>
<span id="L3002" rel="#L3002">3002</span>
<span id="L3003" rel="#L3003">3003</span>
<span id="L3004" rel="#L3004">3004</span>
<span id="L3005" rel="#L3005">3005</span>
<span id="L3006" rel="#L3006">3006</span>
<span id="L3007" rel="#L3007">3007</span>
<span id="L3008" rel="#L3008">3008</span>
<span id="L3009" rel="#L3009">3009</span>
<span id="L3010" rel="#L3010">3010</span>
<span id="L3011" rel="#L3011">3011</span>
<span id="L3012" rel="#L3012">3012</span>
<span id="L3013" rel="#L3013">3013</span>
<span id="L3014" rel="#L3014">3014</span>
<span id="L3015" rel="#L3015">3015</span>
<span id="L3016" rel="#L3016">3016</span>
<span id="L3017" rel="#L3017">3017</span>
<span id="L3018" rel="#L3018">3018</span>
<span id="L3019" rel="#L3019">3019</span>
<span id="L3020" rel="#L3020">3020</span>
<span id="L3021" rel="#L3021">3021</span>
<span id="L3022" rel="#L3022">3022</span>
<span id="L3023" rel="#L3023">3023</span>
<span id="L3024" rel="#L3024">3024</span>
<span id="L3025" rel="#L3025">3025</span>
<span id="L3026" rel="#L3026">3026</span>
<span id="L3027" rel="#L3027">3027</span>
<span id="L3028" rel="#L3028">3028</span>
<span id="L3029" rel="#L3029">3029</span>
<span id="L3030" rel="#L3030">3030</span>
<span id="L3031" rel="#L3031">3031</span>
<span id="L3032" rel="#L3032">3032</span>
<span id="L3033" rel="#L3033">3033</span>
<span id="L3034" rel="#L3034">3034</span>
<span id="L3035" rel="#L3035">3035</span>
<span id="L3036" rel="#L3036">3036</span>
<span id="L3037" rel="#L3037">3037</span>
<span id="L3038" rel="#L3038">3038</span>
<span id="L3039" rel="#L3039">3039</span>
<span id="L3040" rel="#L3040">3040</span>
<span id="L3041" rel="#L3041">3041</span>
<span id="L3042" rel="#L3042">3042</span>
<span id="L3043" rel="#L3043">3043</span>
<span id="L3044" rel="#L3044">3044</span>
<span id="L3045" rel="#L3045">3045</span>
<span id="L3046" rel="#L3046">3046</span>
<span id="L3047" rel="#L3047">3047</span>
<span id="L3048" rel="#L3048">3048</span>
<span id="L3049" rel="#L3049">3049</span>
<span id="L3050" rel="#L3050">3050</span>
<span id="L3051" rel="#L3051">3051</span>
<span id="L3052" rel="#L3052">3052</span>
<span id="L3053" rel="#L3053">3053</span>
<span id="L3054" rel="#L3054">3054</span>
<span id="L3055" rel="#L3055">3055</span>
<span id="L3056" rel="#L3056">3056</span>
<span id="L3057" rel="#L3057">3057</span>
<span id="L3058" rel="#L3058">3058</span>
<span id="L3059" rel="#L3059">3059</span>
<span id="L3060" rel="#L3060">3060</span>
<span id="L3061" rel="#L3061">3061</span>
<span id="L3062" rel="#L3062">3062</span>
<span id="L3063" rel="#L3063">3063</span>
<span id="L3064" rel="#L3064">3064</span>
<span id="L3065" rel="#L3065">3065</span>
<span id="L3066" rel="#L3066">3066</span>
<span id="L3067" rel="#L3067">3067</span>
<span id="L3068" rel="#L3068">3068</span>
<span id="L3069" rel="#L3069">3069</span>
<span id="L3070" rel="#L3070">3070</span>
<span id="L3071" rel="#L3071">3071</span>
<span id="L3072" rel="#L3072">3072</span>
<span id="L3073" rel="#L3073">3073</span>
<span id="L3074" rel="#L3074">3074</span>
<span id="L3075" rel="#L3075">3075</span>
<span id="L3076" rel="#L3076">3076</span>
<span id="L3077" rel="#L3077">3077</span>
<span id="L3078" rel="#L3078">3078</span>
<span id="L3079" rel="#L3079">3079</span>
<span id="L3080" rel="#L3080">3080</span>
<span id="L3081" rel="#L3081">3081</span>
<span id="L3082" rel="#L3082">3082</span>
<span id="L3083" rel="#L3083">3083</span>
<span id="L3084" rel="#L3084">3084</span>
<span id="L3085" rel="#L3085">3085</span>
<span id="L3086" rel="#L3086">3086</span>
<span id="L3087" rel="#L3087">3087</span>
<span id="L3088" rel="#L3088">3088</span>
<span id="L3089" rel="#L3089">3089</span>
<span id="L3090" rel="#L3090">3090</span>
<span id="L3091" rel="#L3091">3091</span>
<span id="L3092" rel="#L3092">3092</span>
<span id="L3093" rel="#L3093">3093</span>
<span id="L3094" rel="#L3094">3094</span>
<span id="L3095" rel="#L3095">3095</span>
<span id="L3096" rel="#L3096">3096</span>
<span id="L3097" rel="#L3097">3097</span>
<span id="L3098" rel="#L3098">3098</span>
<span id="L3099" rel="#L3099">3099</span>
<span id="L3100" rel="#L3100">3100</span>
<span id="L3101" rel="#L3101">3101</span>
<span id="L3102" rel="#L3102">3102</span>
<span id="L3103" rel="#L3103">3103</span>
<span id="L3104" rel="#L3104">3104</span>
<span id="L3105" rel="#L3105">3105</span>
<span id="L3106" rel="#L3106">3106</span>
<span id="L3107" rel="#L3107">3107</span>
<span id="L3108" rel="#L3108">3108</span>
<span id="L3109" rel="#L3109">3109</span>
<span id="L3110" rel="#L3110">3110</span>
<span id="L3111" rel="#L3111">3111</span>
<span id="L3112" rel="#L3112">3112</span>
<span id="L3113" rel="#L3113">3113</span>
<span id="L3114" rel="#L3114">3114</span>
<span id="L3115" rel="#L3115">3115</span>
<span id="L3116" rel="#L3116">3116</span>
<span id="L3117" rel="#L3117">3117</span>
<span id="L3118" rel="#L3118">3118</span>
<span id="L3119" rel="#L3119">3119</span>
<span id="L3120" rel="#L3120">3120</span>
<span id="L3121" rel="#L3121">3121</span>
<span id="L3122" rel="#L3122">3122</span>
<span id="L3123" rel="#L3123">3123</span>
<span id="L3124" rel="#L3124">3124</span>
<span id="L3125" rel="#L3125">3125</span>
<span id="L3126" rel="#L3126">3126</span>
<span id="L3127" rel="#L3127">3127</span>
<span id="L3128" rel="#L3128">3128</span>
<span id="L3129" rel="#L3129">3129</span>
<span id="L3130" rel="#L3130">3130</span>
<span id="L3131" rel="#L3131">3131</span>
<span id="L3132" rel="#L3132">3132</span>
<span id="L3133" rel="#L3133">3133</span>
<span id="L3134" rel="#L3134">3134</span>
<span id="L3135" rel="#L3135">3135</span>
<span id="L3136" rel="#L3136">3136</span>
<span id="L3137" rel="#L3137">3137</span>
<span id="L3138" rel="#L3138">3138</span>
<span id="L3139" rel="#L3139">3139</span>
<span id="L3140" rel="#L3140">3140</span>
<span id="L3141" rel="#L3141">3141</span>
<span id="L3142" rel="#L3142">3142</span>
<span id="L3143" rel="#L3143">3143</span>
<span id="L3144" rel="#L3144">3144</span>
<span id="L3145" rel="#L3145">3145</span>
<span id="L3146" rel="#L3146">3146</span>
<span id="L3147" rel="#L3147">3147</span>
<span id="L3148" rel="#L3148">3148</span>
<span id="L3149" rel="#L3149">3149</span>
<span id="L3150" rel="#L3150">3150</span>
<span id="L3151" rel="#L3151">3151</span>
<span id="L3152" rel="#L3152">3152</span>
<span id="L3153" rel="#L3153">3153</span>
<span id="L3154" rel="#L3154">3154</span>
<span id="L3155" rel="#L3155">3155</span>
<span id="L3156" rel="#L3156">3156</span>
<span id="L3157" rel="#L3157">3157</span>
<span id="L3158" rel="#L3158">3158</span>
<span id="L3159" rel="#L3159">3159</span>
<span id="L3160" rel="#L3160">3160</span>
<span id="L3161" rel="#L3161">3161</span>
<span id="L3162" rel="#L3162">3162</span>
<span id="L3163" rel="#L3163">3163</span>
<span id="L3164" rel="#L3164">3164</span>
<span id="L3165" rel="#L3165">3165</span>
<span id="L3166" rel="#L3166">3166</span>
<span id="L3167" rel="#L3167">3167</span>
<span id="L3168" rel="#L3168">3168</span>
<span id="L3169" rel="#L3169">3169</span>
<span id="L3170" rel="#L3170">3170</span>
<span id="L3171" rel="#L3171">3171</span>
<span id="L3172" rel="#L3172">3172</span>
<span id="L3173" rel="#L3173">3173</span>
<span id="L3174" rel="#L3174">3174</span>
<span id="L3175" rel="#L3175">3175</span>
<span id="L3176" rel="#L3176">3176</span>
<span id="L3177" rel="#L3177">3177</span>
<span id="L3178" rel="#L3178">3178</span>
<span id="L3179" rel="#L3179">3179</span>
<span id="L3180" rel="#L3180">3180</span>
<span id="L3181" rel="#L3181">3181</span>
<span id="L3182" rel="#L3182">3182</span>
<span id="L3183" rel="#L3183">3183</span>
<span id="L3184" rel="#L3184">3184</span>
<span id="L3185" rel="#L3185">3185</span>
<span id="L3186" rel="#L3186">3186</span>
<span id="L3187" rel="#L3187">3187</span>
<span id="L3188" rel="#L3188">3188</span>
<span id="L3189" rel="#L3189">3189</span>
<span id="L3190" rel="#L3190">3190</span>
<span id="L3191" rel="#L3191">3191</span>
<span id="L3192" rel="#L3192">3192</span>
<span id="L3193" rel="#L3193">3193</span>
<span id="L3194" rel="#L3194">3194</span>
<span id="L3195" rel="#L3195">3195</span>
<span id="L3196" rel="#L3196">3196</span>
<span id="L3197" rel="#L3197">3197</span>
<span id="L3198" rel="#L3198">3198</span>
<span id="L3199" rel="#L3199">3199</span>
<span id="L3200" rel="#L3200">3200</span>
<span id="L3201" rel="#L3201">3201</span>
<span id="L3202" rel="#L3202">3202</span>
<span id="L3203" rel="#L3203">3203</span>
<span id="L3204" rel="#L3204">3204</span>
<span id="L3205" rel="#L3205">3205</span>
<span id="L3206" rel="#L3206">3206</span>
<span id="L3207" rel="#L3207">3207</span>
<span id="L3208" rel="#L3208">3208</span>
<span id="L3209" rel="#L3209">3209</span>
<span id="L3210" rel="#L3210">3210</span>
<span id="L3211" rel="#L3211">3211</span>
<span id="L3212" rel="#L3212">3212</span>
<span id="L3213" rel="#L3213">3213</span>
<span id="L3214" rel="#L3214">3214</span>
<span id="L3215" rel="#L3215">3215</span>
<span id="L3216" rel="#L3216">3216</span>
<span id="L3217" rel="#L3217">3217</span>
<span id="L3218" rel="#L3218">3218</span>
<span id="L3219" rel="#L3219">3219</span>
<span id="L3220" rel="#L3220">3220</span>
<span id="L3221" rel="#L3221">3221</span>
<span id="L3222" rel="#L3222">3222</span>
<span id="L3223" rel="#L3223">3223</span>
<span id="L3224" rel="#L3224">3224</span>
<span id="L3225" rel="#L3225">3225</span>
<span id="L3226" rel="#L3226">3226</span>
<span id="L3227" rel="#L3227">3227</span>
<span id="L3228" rel="#L3228">3228</span>
<span id="L3229" rel="#L3229">3229</span>
<span id="L3230" rel="#L3230">3230</span>
<span id="L3231" rel="#L3231">3231</span>
<span id="L3232" rel="#L3232">3232</span>
<span id="L3233" rel="#L3233">3233</span>
<span id="L3234" rel="#L3234">3234</span>
<span id="L3235" rel="#L3235">3235</span>
<span id="L3236" rel="#L3236">3236</span>
<span id="L3237" rel="#L3237">3237</span>
<span id="L3238" rel="#L3238">3238</span>
<span id="L3239" rel="#L3239">3239</span>
<span id="L3240" rel="#L3240">3240</span>
<span id="L3241" rel="#L3241">3241</span>
<span id="L3242" rel="#L3242">3242</span>
<span id="L3243" rel="#L3243">3243</span>
<span id="L3244" rel="#L3244">3244</span>
<span id="L3245" rel="#L3245">3245</span>
<span id="L3246" rel="#L3246">3246</span>
<span id="L3247" rel="#L3247">3247</span>
<span id="L3248" rel="#L3248">3248</span>
<span id="L3249" rel="#L3249">3249</span>
<span id="L3250" rel="#L3250">3250</span>
<span id="L3251" rel="#L3251">3251</span>
<span id="L3252" rel="#L3252">3252</span>
<span id="L3253" rel="#L3253">3253</span>
<span id="L3254" rel="#L3254">3254</span>
<span id="L3255" rel="#L3255">3255</span>
<span id="L3256" rel="#L3256">3256</span>
<span id="L3257" rel="#L3257">3257</span>
<span id="L3258" rel="#L3258">3258</span>
<span id="L3259" rel="#L3259">3259</span>
<span id="L3260" rel="#L3260">3260</span>
<span id="L3261" rel="#L3261">3261</span>
<span id="L3262" rel="#L3262">3262</span>
<span id="L3263" rel="#L3263">3263</span>
<span id="L3264" rel="#L3264">3264</span>
<span id="L3265" rel="#L3265">3265</span>
<span id="L3266" rel="#L3266">3266</span>
<span id="L3267" rel="#L3267">3267</span>
<span id="L3268" rel="#L3268">3268</span>
<span id="L3269" rel="#L3269">3269</span>
<span id="L3270" rel="#L3270">3270</span>
<span id="L3271" rel="#L3271">3271</span>
<span id="L3272" rel="#L3272">3272</span>
<span id="L3273" rel="#L3273">3273</span>
<span id="L3274" rel="#L3274">3274</span>
<span id="L3275" rel="#L3275">3275</span>
<span id="L3276" rel="#L3276">3276</span>
<span id="L3277" rel="#L3277">3277</span>
<span id="L3278" rel="#L3278">3278</span>
<span id="L3279" rel="#L3279">3279</span>
<span id="L3280" rel="#L3280">3280</span>
<span id="L3281" rel="#L3281">3281</span>
<span id="L3282" rel="#L3282">3282</span>
<span id="L3283" rel="#L3283">3283</span>
<span id="L3284" rel="#L3284">3284</span>
<span id="L3285" rel="#L3285">3285</span>
<span id="L3286" rel="#L3286">3286</span>
<span id="L3287" rel="#L3287">3287</span>
<span id="L3288" rel="#L3288">3288</span>
<span id="L3289" rel="#L3289">3289</span>
<span id="L3290" rel="#L3290">3290</span>
<span id="L3291" rel="#L3291">3291</span>
<span id="L3292" rel="#L3292">3292</span>
<span id="L3293" rel="#L3293">3293</span>
<span id="L3294" rel="#L3294">3294</span>
<span id="L3295" rel="#L3295">3295</span>
<span id="L3296" rel="#L3296">3296</span>
<span id="L3297" rel="#L3297">3297</span>
<span id="L3298" rel="#L3298">3298</span>
<span id="L3299" rel="#L3299">3299</span>
<span id="L3300" rel="#L3300">3300</span>
<span id="L3301" rel="#L3301">3301</span>
<span id="L3302" rel="#L3302">3302</span>
<span id="L3303" rel="#L3303">3303</span>
<span id="L3304" rel="#L3304">3304</span>
<span id="L3305" rel="#L3305">3305</span>
<span id="L3306" rel="#L3306">3306</span>
<span id="L3307" rel="#L3307">3307</span>
<span id="L3308" rel="#L3308">3308</span>
<span id="L3309" rel="#L3309">3309</span>
<span id="L3310" rel="#L3310">3310</span>
<span id="L3311" rel="#L3311">3311</span>
<span id="L3312" rel="#L3312">3312</span>
<span id="L3313" rel="#L3313">3313</span>
<span id="L3314" rel="#L3314">3314</span>
<span id="L3315" rel="#L3315">3315</span>
<span id="L3316" rel="#L3316">3316</span>
<span id="L3317" rel="#L3317">3317</span>
<span id="L3318" rel="#L3318">3318</span>
<span id="L3319" rel="#L3319">3319</span>
<span id="L3320" rel="#L3320">3320</span>
<span id="L3321" rel="#L3321">3321</span>
<span id="L3322" rel="#L3322">3322</span>
<span id="L3323" rel="#L3323">3323</span>
<span id="L3324" rel="#L3324">3324</span>
<span id="L3325" rel="#L3325">3325</span>
<span id="L3326" rel="#L3326">3326</span>
<span id="L3327" rel="#L3327">3327</span>
<span id="L3328" rel="#L3328">3328</span>
<span id="L3329" rel="#L3329">3329</span>
<span id="L3330" rel="#L3330">3330</span>
<span id="L3331" rel="#L3331">3331</span>
<span id="L3332" rel="#L3332">3332</span>
<span id="L3333" rel="#L3333">3333</span>
<span id="L3334" rel="#L3334">3334</span>
<span id="L3335" rel="#L3335">3335</span>
<span id="L3336" rel="#L3336">3336</span>
<span id="L3337" rel="#L3337">3337</span>
<span id="L3338" rel="#L3338">3338</span>
<span id="L3339" rel="#L3339">3339</span>
<span id="L3340" rel="#L3340">3340</span>
<span id="L3341" rel="#L3341">3341</span>
<span id="L3342" rel="#L3342">3342</span>
<span id="L3343" rel="#L3343">3343</span>
<span id="L3344" rel="#L3344">3344</span>
<span id="L3345" rel="#L3345">3345</span>
<span id="L3346" rel="#L3346">3346</span>
<span id="L3347" rel="#L3347">3347</span>
<span id="L3348" rel="#L3348">3348</span>
<span id="L3349" rel="#L3349">3349</span>
<span id="L3350" rel="#L3350">3350</span>
<span id="L3351" rel="#L3351">3351</span>
<span id="L3352" rel="#L3352">3352</span>
<span id="L3353" rel="#L3353">3353</span>
<span id="L3354" rel="#L3354">3354</span>
<span id="L3355" rel="#L3355">3355</span>
<span id="L3356" rel="#L3356">3356</span>
<span id="L3357" rel="#L3357">3357</span>
<span id="L3358" rel="#L3358">3358</span>
<span id="L3359" rel="#L3359">3359</span>
<span id="L3360" rel="#L3360">3360</span>
<span id="L3361" rel="#L3361">3361</span>
<span id="L3362" rel="#L3362">3362</span>
<span id="L3363" rel="#L3363">3363</span>
<span id="L3364" rel="#L3364">3364</span>
<span id="L3365" rel="#L3365">3365</span>
<span id="L3366" rel="#L3366">3366</span>
<span id="L3367" rel="#L3367">3367</span>
<span id="L3368" rel="#L3368">3368</span>
<span id="L3369" rel="#L3369">3369</span>
<span id="L3370" rel="#L3370">3370</span>
<span id="L3371" rel="#L3371">3371</span>
<span id="L3372" rel="#L3372">3372</span>
<span id="L3373" rel="#L3373">3373</span>
<span id="L3374" rel="#L3374">3374</span>
<span id="L3375" rel="#L3375">3375</span>
<span id="L3376" rel="#L3376">3376</span>
<span id="L3377" rel="#L3377">3377</span>
<span id="L3378" rel="#L3378">3378</span>
<span id="L3379" rel="#L3379">3379</span>
<span id="L3380" rel="#L3380">3380</span>
<span id="L3381" rel="#L3381">3381</span>
<span id="L3382" rel="#L3382">3382</span>
<span id="L3383" rel="#L3383">3383</span>
<span id="L3384" rel="#L3384">3384</span>
<span id="L3385" rel="#L3385">3385</span>
<span id="L3386" rel="#L3386">3386</span>
<span id="L3387" rel="#L3387">3387</span>
<span id="L3388" rel="#L3388">3388</span>
<span id="L3389" rel="#L3389">3389</span>
<span id="L3390" rel="#L3390">3390</span>
<span id="L3391" rel="#L3391">3391</span>
<span id="L3392" rel="#L3392">3392</span>
<span id="L3393" rel="#L3393">3393</span>
<span id="L3394" rel="#L3394">3394</span>
<span id="L3395" rel="#L3395">3395</span>
<span id="L3396" rel="#L3396">3396</span>
<span id="L3397" rel="#L3397">3397</span>
<span id="L3398" rel="#L3398">3398</span>
<span id="L3399" rel="#L3399">3399</span>
<span id="L3400" rel="#L3400">3400</span>
<span id="L3401" rel="#L3401">3401</span>
<span id="L3402" rel="#L3402">3402</span>
<span id="L3403" rel="#L3403">3403</span>
<span id="L3404" rel="#L3404">3404</span>
<span id="L3405" rel="#L3405">3405</span>
<span id="L3406" rel="#L3406">3406</span>
<span id="L3407" rel="#L3407">3407</span>
<span id="L3408" rel="#L3408">3408</span>
<span id="L3409" rel="#L3409">3409</span>
<span id="L3410" rel="#L3410">3410</span>
<span id="L3411" rel="#L3411">3411</span>
<span id="L3412" rel="#L3412">3412</span>
<span id="L3413" rel="#L3413">3413</span>
<span id="L3414" rel="#L3414">3414</span>
<span id="L3415" rel="#L3415">3415</span>
<span id="L3416" rel="#L3416">3416</span>
<span id="L3417" rel="#L3417">3417</span>
<span id="L3418" rel="#L3418">3418</span>
<span id="L3419" rel="#L3419">3419</span>
<span id="L3420" rel="#L3420">3420</span>
<span id="L3421" rel="#L3421">3421</span>
<span id="L3422" rel="#L3422">3422</span>
<span id="L3423" rel="#L3423">3423</span>
<span id="L3424" rel="#L3424">3424</span>
<span id="L3425" rel="#L3425">3425</span>
<span id="L3426" rel="#L3426">3426</span>
<span id="L3427" rel="#L3427">3427</span>
<span id="L3428" rel="#L3428">3428</span>
<span id="L3429" rel="#L3429">3429</span>
<span id="L3430" rel="#L3430">3430</span>
<span id="L3431" rel="#L3431">3431</span>
<span id="L3432" rel="#L3432">3432</span>
<span id="L3433" rel="#L3433">3433</span>
<span id="L3434" rel="#L3434">3434</span>
<span id="L3435" rel="#L3435">3435</span>
<span id="L3436" rel="#L3436">3436</span>
<span id="L3437" rel="#L3437">3437</span>
<span id="L3438" rel="#L3438">3438</span>
<span id="L3439" rel="#L3439">3439</span>
<span id="L3440" rel="#L3440">3440</span>
<span id="L3441" rel="#L3441">3441</span>
<span id="L3442" rel="#L3442">3442</span>
<span id="L3443" rel="#L3443">3443</span>
<span id="L3444" rel="#L3444">3444</span>
<span id="L3445" rel="#L3445">3445</span>
<span id="L3446" rel="#L3446">3446</span>
<span id="L3447" rel="#L3447">3447</span>
<span id="L3448" rel="#L3448">3448</span>
<span id="L3449" rel="#L3449">3449</span>
<span id="L3450" rel="#L3450">3450</span>
<span id="L3451" rel="#L3451">3451</span>
<span id="L3452" rel="#L3452">3452</span>
<span id="L3453" rel="#L3453">3453</span>
<span id="L3454" rel="#L3454">3454</span>
<span id="L3455" rel="#L3455">3455</span>
<span id="L3456" rel="#L3456">3456</span>
<span id="L3457" rel="#L3457">3457</span>
<span id="L3458" rel="#L3458">3458</span>
<span id="L3459" rel="#L3459">3459</span>
<span id="L3460" rel="#L3460">3460</span>
<span id="L3461" rel="#L3461">3461</span>
<span id="L3462" rel="#L3462">3462</span>
<span id="L3463" rel="#L3463">3463</span>
<span id="L3464" rel="#L3464">3464</span>
<span id="L3465" rel="#L3465">3465</span>
<span id="L3466" rel="#L3466">3466</span>
<span id="L3467" rel="#L3467">3467</span>
<span id="L3468" rel="#L3468">3468</span>
<span id="L3469" rel="#L3469">3469</span>
<span id="L3470" rel="#L3470">3470</span>
<span id="L3471" rel="#L3471">3471</span>
<span id="L3472" rel="#L3472">3472</span>
<span id="L3473" rel="#L3473">3473</span>
<span id="L3474" rel="#L3474">3474</span>
<span id="L3475" rel="#L3475">3475</span>
<span id="L3476" rel="#L3476">3476</span>
<span id="L3477" rel="#L3477">3477</span>
<span id="L3478" rel="#L3478">3478</span>
<span id="L3479" rel="#L3479">3479</span>
<span id="L3480" rel="#L3480">3480</span>
<span id="L3481" rel="#L3481">3481</span>
<span id="L3482" rel="#L3482">3482</span>
<span id="L3483" rel="#L3483">3483</span>
<span id="L3484" rel="#L3484">3484</span>
<span id="L3485" rel="#L3485">3485</span>
<span id="L3486" rel="#L3486">3486</span>
<span id="L3487" rel="#L3487">3487</span>
<span id="L3488" rel="#L3488">3488</span>
<span id="L3489" rel="#L3489">3489</span>
<span id="L3490" rel="#L3490">3490</span>
<span id="L3491" rel="#L3491">3491</span>
<span id="L3492" rel="#L3492">3492</span>
<span id="L3493" rel="#L3493">3493</span>
<span id="L3494" rel="#L3494">3494</span>
<span id="L3495" rel="#L3495">3495</span>
<span id="L3496" rel="#L3496">3496</span>
<span id="L3497" rel="#L3497">3497</span>
<span id="L3498" rel="#L3498">3498</span>
<span id="L3499" rel="#L3499">3499</span>
<span id="L3500" rel="#L3500">3500</span>
<span id="L3501" rel="#L3501">3501</span>
<span id="L3502" rel="#L3502">3502</span>
<span id="L3503" rel="#L3503">3503</span>
<span id="L3504" rel="#L3504">3504</span>
<span id="L3505" rel="#L3505">3505</span>
<span id="L3506" rel="#L3506">3506</span>
<span id="L3507" rel="#L3507">3507</span>
<span id="L3508" rel="#L3508">3508</span>
<span id="L3509" rel="#L3509">3509</span>
<span id="L3510" rel="#L3510">3510</span>
<span id="L3511" rel="#L3511">3511</span>
<span id="L3512" rel="#L3512">3512</span>
<span id="L3513" rel="#L3513">3513</span>
<span id="L3514" rel="#L3514">3514</span>
<span id="L3515" rel="#L3515">3515</span>
<span id="L3516" rel="#L3516">3516</span>
<span id="L3517" rel="#L3517">3517</span>
<span id="L3518" rel="#L3518">3518</span>
<span id="L3519" rel="#L3519">3519</span>
<span id="L3520" rel="#L3520">3520</span>
<span id="L3521" rel="#L3521">3521</span>
<span id="L3522" rel="#L3522">3522</span>
<span id="L3523" rel="#L3523">3523</span>
<span id="L3524" rel="#L3524">3524</span>
<span id="L3525" rel="#L3525">3525</span>
<span id="L3526" rel="#L3526">3526</span>
<span id="L3527" rel="#L3527">3527</span>
<span id="L3528" rel="#L3528">3528</span>
<span id="L3529" rel="#L3529">3529</span>
<span id="L3530" rel="#L3530">3530</span>
<span id="L3531" rel="#L3531">3531</span>
<span id="L3532" rel="#L3532">3532</span>
<span id="L3533" rel="#L3533">3533</span>
<span id="L3534" rel="#L3534">3534</span>
<span id="L3535" rel="#L3535">3535</span>
<span id="L3536" rel="#L3536">3536</span>
<span id="L3537" rel="#L3537">3537</span>
<span id="L3538" rel="#L3538">3538</span>
<span id="L3539" rel="#L3539">3539</span>
<span id="L3540" rel="#L3540">3540</span>
<span id="L3541" rel="#L3541">3541</span>
<span id="L3542" rel="#L3542">3542</span>
<span id="L3543" rel="#L3543">3543</span>
<span id="L3544" rel="#L3544">3544</span>
<span id="L3545" rel="#L3545">3545</span>
<span id="L3546" rel="#L3546">3546</span>
<span id="L3547" rel="#L3547">3547</span>
<span id="L3548" rel="#L3548">3548</span>
<span id="L3549" rel="#L3549">3549</span>
<span id="L3550" rel="#L3550">3550</span>
<span id="L3551" rel="#L3551">3551</span>
<span id="L3552" rel="#L3552">3552</span>
<span id="L3553" rel="#L3553">3553</span>
<span id="L3554" rel="#L3554">3554</span>
<span id="L3555" rel="#L3555">3555</span>
<span id="L3556" rel="#L3556">3556</span>
<span id="L3557" rel="#L3557">3557</span>
<span id="L3558" rel="#L3558">3558</span>
<span id="L3559" rel="#L3559">3559</span>
<span id="L3560" rel="#L3560">3560</span>
<span id="L3561" rel="#L3561">3561</span>
<span id="L3562" rel="#L3562">3562</span>
<span id="L3563" rel="#L3563">3563</span>
<span id="L3564" rel="#L3564">3564</span>
<span id="L3565" rel="#L3565">3565</span>
<span id="L3566" rel="#L3566">3566</span>
<span id="L3567" rel="#L3567">3567</span>
<span id="L3568" rel="#L3568">3568</span>
<span id="L3569" rel="#L3569">3569</span>
<span id="L3570" rel="#L3570">3570</span>
<span id="L3571" rel="#L3571">3571</span>
<span id="L3572" rel="#L3572">3572</span>
<span id="L3573" rel="#L3573">3573</span>
<span id="L3574" rel="#L3574">3574</span>
<span id="L3575" rel="#L3575">3575</span>
<span id="L3576" rel="#L3576">3576</span>
<span id="L3577" rel="#L3577">3577</span>
<span id="L3578" rel="#L3578">3578</span>
<span id="L3579" rel="#L3579">3579</span>
<span id="L3580" rel="#L3580">3580</span>
<span id="L3581" rel="#L3581">3581</span>
<span id="L3582" rel="#L3582">3582</span>
<span id="L3583" rel="#L3583">3583</span>
<span id="L3584" rel="#L3584">3584</span>
<span id="L3585" rel="#L3585">3585</span>
<span id="L3586" rel="#L3586">3586</span>
<span id="L3587" rel="#L3587">3587</span>
<span id="L3588" rel="#L3588">3588</span>
<span id="L3589" rel="#L3589">3589</span>
<span id="L3590" rel="#L3590">3590</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="o">!</span><span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">context</span><span class="p">,</span> <span class="nx">definition</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">require</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">exports</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">module</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">definition</span><span class="p">();</span></div><div class='line' id='LC4'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span>  <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC5'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">define</span><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC6'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">definition</span><span class="p">();</span></div><div class='line' id='LC7'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC8'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">context</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">definition</span><span class="p">();</span></div><div class='line' id='LC10'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC11'><span class="p">}(</span><span class="s1">&#39;chai&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC12'><br/></div><div class='line' id='LC13'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">require</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">path</span> <span class="o">=</span> <span class="nx">require</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">p</span><span class="p">)</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">mod</span> <span class="o">=</span> <span class="nx">require</span><span class="p">.</span><span class="nx">modules</span><span class="p">[</span><span class="nx">path</span><span class="p">];</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">mod</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;failed to require &quot;&#39;</span> <span class="o">+</span> <span class="nx">p</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">);</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">mod</span><span class="p">.</span><span class="nx">exports</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">mod</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">mod</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">mod</span><span class="p">.</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">mod</span><span class="p">,</span> <span class="nx">mod</span><span class="p">.</span><span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">.</span><span class="nx">relative</span><span class="p">(</span><span class="nx">path</span><span class="p">));</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">mod</span><span class="p">.</span><span class="nx">exports</span><span class="p">;</span></div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">modules</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">resolve</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">orig</span> <span class="o">=</span> <span class="nx">path</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">reg</span> <span class="o">=</span> <span class="nx">path</span> <span class="o">+</span> <span class="s1">&#39;.js&#39;</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">path</span> <span class="o">+</span> <span class="s1">&#39;/index.js&#39;</span><span class="p">;</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">require</span><span class="p">.</span><span class="nx">modules</span><span class="p">[</span><span class="nx">reg</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">reg</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">||</span> <span class="nx">require</span><span class="p">.</span><span class="nx">modules</span><span class="p">[</span><span class="nx">index</span><span class="p">]</span> <span class="o">&amp;&amp;</span> <span class="nx">index</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">||</span> <span class="nx">orig</span><span class="p">;</span></div><div class='line' id='LC33'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">path</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">modules</span><span class="p">[</span><span class="nx">path</span><span class="p">]</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">;</span></div><div class='line' id='LC37'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">relative</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">parent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">p</span><span class="p">){</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;.&#39;</span> <span class="o">!=</span> <span class="nx">p</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="k">return</span> <span class="nx">require</span><span class="p">(</span><span class="nx">p</span><span class="p">);</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">path</span> <span class="o">=</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">)</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">segs</span> <span class="o">=</span> <span class="nx">p</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">);</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">path</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">segs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">seg</span> <span class="o">=</span> <span class="nx">segs</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;..&#39;</span> <span class="o">==</span> <span class="nx">seg</span><span class="p">)</span> <span class="nx">path</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;.&#39;</span> <span class="o">!=</span> <span class="nx">seg</span><span class="p">)</span> <span class="nx">path</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">seg</span><span class="p">);</span></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">require</span><span class="p">(</span><span class="nx">path</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;/&#39;</span><span class="p">));</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">alias</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">from</span><span class="p">,</span> <span class="nx">to</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fn</span> <span class="o">=</span> <span class="nx">require</span><span class="p">.</span><span class="nx">modules</span><span class="p">[</span><span class="nx">from</span><span class="p">];</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">modules</span><span class="p">[</span><span class="nx">to</span><span class="p">]</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">;</span></div><div class='line' id='LC60'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC65'><span class="cm">     * chai</span></div><div class='line' id='LC66'><span class="cm">     * Copyright(c) 2011-2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC67'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC68'><span class="cm">     */</span></div><div class='line' id='LC69'><br/></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">used</span> <span class="o">=</span> <span class="p">[]</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">exports</span> <span class="o">=</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC74'><span class="cm">     * Chai version</span></div><div class='line' id='LC75'><span class="cm">     */</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">version</span> <span class="o">=</span> <span class="s1">&#39;1.2.0&#39;</span><span class="p">;</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC80'><span class="cm">     * Primary `Assertion` prototype</span></div><div class='line' id='LC81'><span class="cm">     */</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">Assertion</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./chai/assertion&#39;</span><span class="p">);</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC86'><span class="cm">     * Assertion Error</span></div><div class='line' id='LC87'><span class="cm">     */</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">AssertionError</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./chai/browser/error&#39;</span><span class="p">);</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC92'><span class="cm">     * Utils for plugins (not exported)</span></div><div class='line' id='LC93'><span class="cm">     */</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">util</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./chai/utils&#39;</span><span class="p">);</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC98'><span class="cm">     * # .use(function)</span></div><div class='line' id='LC99'><span class="cm">     *</span></div><div class='line' id='LC100'><span class="cm">     * Provides a way to extend the internals of Chai</span></div><div class='line' id='LC101'><span class="cm">     *</span></div><div class='line' id='LC102'><span class="cm">     * @param {Function}</span></div><div class='line' id='LC103'><span class="cm">     * @returns {this} for chaining</span></div><div class='line' id='LC104'><span class="cm">     * @api public</span></div><div class='line' id='LC105'><span class="cm">     */</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">use</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!~</span><span class="nx">used</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">fn</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fn</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">util</span><span class="p">);</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">used</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC115'><br/></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC117'><span class="cm">     * Core Assertions</span></div><div class='line' id='LC118'><span class="cm">     */</span></div><div class='line' id='LC119'><br/></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">core</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./chai/core/assertions&#39;</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">core</span><span class="p">);</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC124'><span class="cm">     * Expect interface</span></div><div class='line' id='LC125'><span class="cm">     */</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">expect</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./chai/interface/expect&#39;</span><span class="p">);</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">expect</span><span class="p">);</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC131'><span class="cm">     * Should interface</span></div><div class='line' id='LC132'><span class="cm">     */</span></div><div class='line' id='LC133'><br/></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">should</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./chai/interface/should&#39;</span><span class="p">);</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">should</span><span class="p">);</span></div><div class='line' id='LC136'><br/></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC138'><span class="cm">     * Assert interface</span></div><div class='line' id='LC139'><span class="cm">     */</span></div><div class='line' id='LC140'><br/></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">assert</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./chai/interface/assert&#39;</span><span class="p">);</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">use</span><span class="p">(</span><span class="nx">assert</span><span class="p">);</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai.js</span></div><div class='line' id='LC145'><br/></div><div class='line' id='LC146'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/assertion.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC148'><span class="cm">     * chai</span></div><div class='line' id='LC149'><span class="cm">     * http://chaijs.com</span></div><div class='line' id='LC150'><span class="cm">     * Copyright(c) 2011-2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC151'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC152'><span class="cm">     */</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC155'><span class="cm">     * Module dependencies.</span></div><div class='line' id='LC156'><span class="cm">     */</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">AssertionError</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./browser/error&#39;</span><span class="p">)</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">util</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./utils&#39;</span><span class="p">)</span></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">flag</span> <span class="o">=</span> <span class="nx">util</span><span class="p">.</span><span class="nx">flag</span><span class="p">;</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC163'><span class="cm">     * Module export.</span></div><div class='line' id='LC164'><span class="cm">     */</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">Assertion</span><span class="p">;</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC170'><span class="cm">     * Assertion Constructor</span></div><div class='line' id='LC171'><span class="cm">     *</span></div><div class='line' id='LC172'><span class="cm">     * Creates object for chaining.</span></div><div class='line' id='LC173'><span class="cm">     *</span></div><div class='line' id='LC174'><span class="cm">     * @api private</span></div><div class='line' id='LC175'><span class="cm">     */</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">Assertion</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">msg</span><span class="p">,</span> <span class="nx">stack</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;ssfi&#39;</span><span class="p">,</span> <span class="nx">stack</span> <span class="o">||</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">callee</span><span class="p">);</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;message&#39;</span><span class="p">,</span> <span class="nx">msg</span><span class="p">);</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC184'><span class="cm">      * ### Assertion.includeStack</span></div><div class='line' id='LC185'><span class="cm">      *</span></div><div class='line' id='LC186'><span class="cm">      * User configurable property, influences whether stack trace</span></div><div class='line' id='LC187'><span class="cm">      * is included in Assertion error message. Default of false</span></div><div class='line' id='LC188'><span class="cm">      * suppresses stack trace in the error message</span></div><div class='line' id='LC189'><span class="cm">      *</span></div><div class='line' id='LC190'><span class="cm">      *     Assertion.includeStack = true;  // enable stack on error</span></div><div class='line' id='LC191'><span class="cm">      *</span></div><div class='line' id='LC192'><span class="cm">      * @api public</span></div><div class='line' id='LC193'><span class="cm">      */</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">includeStack</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">util</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC200'><br/></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">util</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC204'><br/></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addChainableMethod</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">,</span> <span class="nx">chainingBehavior</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">util</span><span class="p">.</span><span class="nx">addChainableMethod</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">,</span> <span class="nx">chainingBehavior</span><span class="p">);</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">overwriteProperty</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">util</span><span class="p">.</span><span class="nx">overwriteProperty</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">overwriteMethod</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">util</span><span class="p">.</span><span class="nx">overwriteMethod</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC216'><br/></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC218'><span class="cm">     * ### .assert(expression, message, negateMessage, expected, actual)</span></div><div class='line' id='LC219'><span class="cm">     *</span></div><div class='line' id='LC220'><span class="cm">     * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn&#39;t pass.</span></div><div class='line' id='LC221'><span class="cm">     *</span></div><div class='line' id='LC222'><span class="cm">     * @name assert</span></div><div class='line' id='LC223'><span class="cm">     * @param {Philosophical} expression to be tested</span></div><div class='line' id='LC224'><span class="cm">     * @param {String} message to display if fails</span></div><div class='line' id='LC225'><span class="cm">     * @param {String} negatedMessage to display if negated expression fails</span></div><div class='line' id='LC226'><span class="cm">     * @param {Mixed} expected value (remember to check for negation)</span></div><div class='line' id='LC227'><span class="cm">     * @param {Mixed} actual (optional) will default to `this.obj`</span></div><div class='line' id='LC228'><span class="cm">     * @api private</span></div><div class='line' id='LC229'><span class="cm">     */</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">assert</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">expr</span><span class="p">,</span> <span class="nx">msg</span><span class="p">,</span> <span class="nx">negateMsg</span><span class="p">,</span> <span class="nx">expected</span><span class="p">,</span> <span class="nx">_actual</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ok</span> <span class="o">=</span> <span class="nx">util</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">ok</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">msg</span> <span class="o">=</span> <span class="nx">util</span><span class="p">.</span><span class="nx">getMessage</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">)</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">actual</span> <span class="o">=</span> <span class="nx">util</span><span class="p">.</span><span class="nx">getActual</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nx">AssertionError</span><span class="p">({</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span><span class="o">:</span> <span class="nx">msg</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">actual</span><span class="o">:</span> <span class="nx">actual</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">expected</span><span class="o">:</span> <span class="nx">expected</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">stackStartFunction</span><span class="o">:</span> <span class="p">(</span><span class="nx">Assertion</span><span class="p">.</span><span class="nx">includeStack</span><span class="p">)</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">assert</span> <span class="o">:</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;ssfi&#39;</span><span class="p">)</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC247'><span class="cm">     * ### ._obj</span></div><div class='line' id='LC248'><span class="cm">     *</span></div><div class='line' id='LC249'><span class="cm">     * Quick reference to stored `actual` value for plugin developers.</span></div><div class='line' id='LC250'><span class="cm">     *</span></div><div class='line' id='LC251'><span class="cm">     * @api private</span></div><div class='line' id='LC252'><span class="cm">     */</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">Assertion</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="s1">&#39;_obj&#39;</span><span class="p">,</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span> <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">set</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">,</span> <span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/assertion.js</span></div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/browser/error.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC267'><span class="cm">     * chai</span></div><div class='line' id='LC268'><span class="cm">     * Copyright(c) 2011-2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC269'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC270'><span class="cm">     */</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">AssertionError</span><span class="p">;</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">AssertionError</span> <span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="nx">options</span> <span class="o">||</span> <span class="p">{};</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">message</span><span class="p">;</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">actual</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">actual</span><span class="p">;</span></div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">expected</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">expected</span><span class="p">;</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">operator</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">operator</span><span class="p">;</span></div><div class='line' id='LC280'><br/></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">stackStartFunction</span> <span class="o">&amp;&amp;</span> <span class="nb">Error</span><span class="p">.</span><span class="nx">captureStackTrace</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">stackStartFunction</span> <span class="o">=</span> <span class="nx">options</span><span class="p">.</span><span class="nx">stackStartFunction</span><span class="p">;</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Error</span><span class="p">.</span><span class="nx">captureStackTrace</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">stackStartFunction</span><span class="p">);</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">AssertionError</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="nb">Error</span><span class="p">.</span><span class="nx">prototype</span><span class="p">);</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">AssertionError</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="s1">&#39;AssertionError&#39;</span><span class="p">;</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">AssertionError</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="o">=</span> <span class="nx">AssertionError</span><span class="p">;</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">AssertionError</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">message</span><span class="p">;</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/browser/error.js</span></div><div class='line' id='LC296'><br/></div><div class='line' id='LC297'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/core/assertions.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC299'><span class="cm">     * chai</span></div><div class='line' id='LC300'><span class="cm">     * http://chaijs.com</span></div><div class='line' id='LC301'><span class="cm">     * Copyright(c) 2011-2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC302'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC303'><span class="cm">     */</span></div><div class='line' id='LC304'><br/></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">chai</span><span class="p">,</span> <span class="nx">_</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Assertion</span> <span class="o">=</span> <span class="nx">chai</span><span class="p">.</span><span class="nx">Assertion</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">toString</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">flag</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">flag</span><span class="p">;</span></div><div class='line' id='LC309'><br/></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC311'><span class="cm">       * ### Language Chains</span></div><div class='line' id='LC312'><span class="cm">       *</span></div><div class='line' id='LC313'><span class="cm">       * The following are provide as chainable getters to</span></div><div class='line' id='LC314'><span class="cm">       * improve the readability of your assertions. They</span></div><div class='line' id='LC315'><span class="cm">       * do not provide an testing capability unless they</span></div><div class='line' id='LC316'><span class="cm">       * have been overwritten by a plugin.</span></div><div class='line' id='LC317'><span class="cm">       *</span></div><div class='line' id='LC318'><span class="cm">       * **Chains**</span></div><div class='line' id='LC319'><span class="cm">       *</span></div><div class='line' id='LC320'><span class="cm">       * - to</span></div><div class='line' id='LC321'><span class="cm">       * - be</span></div><div class='line' id='LC322'><span class="cm">       * - been</span></div><div class='line' id='LC323'><span class="cm">       * - is</span></div><div class='line' id='LC324'><span class="cm">       * - that</span></div><div class='line' id='LC325'><span class="cm">       * - and</span></div><div class='line' id='LC326'><span class="cm">       * - have</span></div><div class='line' id='LC327'><span class="cm">       * - with</span></div><div class='line' id='LC328'><span class="cm">       *</span></div><div class='line' id='LC329'><span class="cm">       * @name language chains</span></div><div class='line' id='LC330'><span class="cm">       * @api public</span></div><div class='line' id='LC331'><span class="cm">       */</span></div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span> <span class="s1">&#39;to&#39;</span><span class="p">,</span> <span class="s1">&#39;be&#39;</span><span class="p">,</span> <span class="s1">&#39;been&#39;</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;is&#39;</span><span class="p">,</span> <span class="s1">&#39;and&#39;</span><span class="p">,</span> <span class="s1">&#39;have&#39;</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;with&#39;</span><span class="p">,</span> <span class="s1">&#39;that&#39;</span> <span class="p">].</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">chain</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="nx">chain</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC340'><br/></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC342'><span class="cm">       * ### .not</span></div><div class='line' id='LC343'><span class="cm">       *</span></div><div class='line' id='LC344'><span class="cm">       * Negates any of assertions following in the chain.</span></div><div class='line' id='LC345'><span class="cm">       *</span></div><div class='line' id='LC346'><span class="cm">       *     expect(foo).to.not.equal(&#39;bar&#39;);</span></div><div class='line' id='LC347'><span class="cm">       *     expect(goodFn).to.not.throw(Error);</span></div><div class='line' id='LC348'><span class="cm">       *     expect({ foo: &#39;baz&#39; }).to.have.property(&#39;foo&#39;)</span></div><div class='line' id='LC349'><span class="cm">       *       .and.not.equal(&#39;bar&#39;);</span></div><div class='line' id='LC350'><span class="cm">       *</span></div><div class='line' id='LC351'><span class="cm">       * @name not</span></div><div class='line' id='LC352'><span class="cm">       * @api public</span></div><div class='line' id='LC353'><span class="cm">       */</span></div><div class='line' id='LC354'><br/></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;not&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;negate&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC360'><span class="cm">       * ### .deep</span></div><div class='line' id='LC361'><span class="cm">       *</span></div><div class='line' id='LC362'><span class="cm">       * Sets the `deep` flag, later used by the `equal` and</span></div><div class='line' id='LC363'><span class="cm">       * `property` assertions.</span></div><div class='line' id='LC364'><span class="cm">       *</span></div><div class='line' id='LC365'><span class="cm">       *     expect(foo).to.deep.equal({ bar: &#39;baz&#39; });</span></div><div class='line' id='LC366'><span class="cm">       *     expect({ foo: { bar: { baz: &#39;quux&#39; } } })</span></div><div class='line' id='LC367'><span class="cm">       *       .to.have.deep.property(&#39;foo.bar.baz&#39;, &#39;quux&#39;);</span></div><div class='line' id='LC368'><span class="cm">       *</span></div><div class='line' id='LC369'><span class="cm">       * @name deep</span></div><div class='line' id='LC370'><span class="cm">       * @api public</span></div><div class='line' id='LC371'><span class="cm">       */</span></div><div class='line' id='LC372'><br/></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;deep&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;deep&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC376'><br/></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC378'><span class="cm">       * ### .a(type)</span></div><div class='line' id='LC379'><span class="cm">       *</span></div><div class='line' id='LC380'><span class="cm">       * The `a` and `an` assertions are aliases that can be</span></div><div class='line' id='LC381'><span class="cm">       * used either as language chains or to assert a value&#39;s</span></div><div class='line' id='LC382'><span class="cm">       * type (as revealed by `Object.prototype.toString`).</span></div><div class='line' id='LC383'><span class="cm">       *</span></div><div class='line' id='LC384'><span class="cm">       *     // typeof</span></div><div class='line' id='LC385'><span class="cm">       *     expect(&#39;test&#39;).to.be.a(&#39;string&#39;);</span></div><div class='line' id='LC386'><span class="cm">       *     expect({ foo: &#39;bar&#39; }).to.be.an(&#39;object&#39;);</span></div><div class='line' id='LC387'><span class="cm">       *     expect(null).to.be.a(&#39;null&#39;);</span></div><div class='line' id='LC388'><span class="cm">       *     expect(undefined).to.be.an(&#39;undefined&#39;);</span></div><div class='line' id='LC389'><span class="cm">       *</span></div><div class='line' id='LC390'><span class="cm">       *     // language chain</span></div><div class='line' id='LC391'><span class="cm">       *     expect(foo).to.be.an.instanceof(Foo);</span></div><div class='line' id='LC392'><span class="cm">       *</span></div><div class='line' id='LC393'><span class="cm">       * @name a</span></div><div class='line' id='LC394'><span class="cm">       * @alias an</span></div><div class='line' id='LC395'><span class="cm">       * @param {String} type</span></div><div class='line' id='LC396'><span class="cm">       * @api public</span></div><div class='line' id='LC397'><span class="cm">       */</span></div><div class='line' id='LC398'><br/></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">an</span><span class="p">(</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">klassStart</span> <span class="o">=</span> <span class="nx">type</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">toUpperCase</span><span class="p">()</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">klass</span> <span class="o">=</span> <span class="nx">klassStart</span> <span class="o">+</span> <span class="nx">type</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span></div><div class='line' id='LC403'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">article</span> <span class="o">=</span> <span class="o">~</span><span class="p">[</span> <span class="s1">&#39;A&#39;</span><span class="p">,</span> <span class="s1">&#39;E&#39;</span><span class="p">,</span> <span class="s1">&#39;I&#39;</span><span class="p">,</span> <span class="s1">&#39;O&#39;</span><span class="p">,</span> <span class="s1">&#39;U&#39;</span> <span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">klassStart</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;an &#39;</span> <span class="o">:</span> <span class="s1">&#39;a &#39;</span><span class="p">;</span></div><div class='line' id='LC404'><br/></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;[object &#39;</span> <span class="o">+</span> <span class="nx">klass</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span> <span class="o">===</span> <span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be &#39;</span> <span class="o">+</span> <span class="nx">article</span> <span class="o">+</span> <span class="nx">type</span></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} not to be &#39;</span> <span class="o">+</span> <span class="nx">article</span> <span class="o">+</span> <span class="nx">type</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC411'><br/></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addChainableMethod</span><span class="p">(</span><span class="s1">&#39;an&#39;</span><span class="p">,</span> <span class="nx">an</span><span class="p">);</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addChainableMethod</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">,</span> <span class="nx">an</span><span class="p">);</span></div><div class='line' id='LC414'><br/></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC416'><span class="cm">       * ### .include(value)</span></div><div class='line' id='LC417'><span class="cm">       *</span></div><div class='line' id='LC418'><span class="cm">       * The `include` and `contain` assertions can be used as either property</span></div><div class='line' id='LC419'><span class="cm">       * based language chains or as methods to assert the inclusion of an object</span></div><div class='line' id='LC420'><span class="cm">       * in an array or a substring in a string. When used as language chains,</span></div><div class='line' id='LC421'><span class="cm">       * they toggle the `contain` flag for the `keys` assertion.</span></div><div class='line' id='LC422'><span class="cm">       *</span></div><div class='line' id='LC423'><span class="cm">       *     expect([1,2,3]).to.include(2);</span></div><div class='line' id='LC424'><span class="cm">       *     expect(&#39;foobar&#39;).to.contain(&#39;foo&#39;);</span></div><div class='line' id='LC425'><span class="cm">       *     expect({ foo: &#39;bar&#39;, hello: &#39;universe&#39; }).to.include.keys(&#39;foo&#39;);</span></div><div class='line' id='LC426'><span class="cm">       *</span></div><div class='line' id='LC427'><span class="cm">       * @name include</span></div><div class='line' id='LC428'><span class="cm">       * @alias contain</span></div><div class='line' id='LC429'><span class="cm">       * @param {Object|String|Number} obj</span></div><div class='line' id='LC430'><span class="cm">       * @api public</span></div><div class='line' id='LC431'><span class="cm">       */</span></div><div class='line' id='LC432'><br/></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">includeChainingBehavior</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;contains&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC436'><br/></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">include</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">~</span><span class="nx">obj</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to include &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span></div><div class='line' id='LC442'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not include &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">val</span><span class="p">));</span></div><div class='line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC444'><br/></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addChainableMethod</span><span class="p">(</span><span class="s1">&#39;include&#39;</span><span class="p">,</span> <span class="nx">include</span><span class="p">,</span> <span class="nx">includeChainingBehavior</span><span class="p">);</span></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addChainableMethod</span><span class="p">(</span><span class="s1">&#39;contain&#39;</span><span class="p">,</span> <span class="nx">include</span><span class="p">,</span> <span class="nx">includeChainingBehavior</span><span class="p">);</span></div><div class='line' id='LC447'><br/></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC449'><span class="cm">       * ### .ok</span></div><div class='line' id='LC450'><span class="cm">       *</span></div><div class='line' id='LC451'><span class="cm">       * Asserts that the target is truthy.</span></div><div class='line' id='LC452'><span class="cm">       *</span></div><div class='line' id='LC453'><span class="cm">       *     expect(&#39;everthing&#39;).to.be.ok;</span></div><div class='line' id='LC454'><span class="cm">       *     expect(1).to.be.ok;</span></div><div class='line' id='LC455'><span class="cm">       *     expect(false).to.not.be.ok;</span></div><div class='line' id='LC456'><span class="cm">       *     expect(undefined).to.not.be.ok;</span></div><div class='line' id='LC457'><span class="cm">       *     expect(null).to.not.be.ok;</span></div><div class='line' id='LC458'><span class="cm">       *</span></div><div class='line' id='LC459'><span class="cm">       * @name ok</span></div><div class='line' id='LC460'><span class="cm">       * @api public</span></div><div class='line' id='LC461'><span class="cm">       */</span></div><div class='line' id='LC462'><br/></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;ok&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be truthy&#39;</span></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be falsy&#39;</span><span class="p">);</span></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC469'><br/></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC471'><span class="cm">       * ### .true</span></div><div class='line' id='LC472'><span class="cm">       *</span></div><div class='line' id='LC473'><span class="cm">       * Asserts that the target is `true`.</span></div><div class='line' id='LC474'><span class="cm">       *</span></div><div class='line' id='LC475'><span class="cm">       *     expect(true).to.be.true;</span></div><div class='line' id='LC476'><span class="cm">       *     expect(1).to.not.be.true;</span></div><div class='line' id='LC477'><span class="cm">       *</span></div><div class='line' id='LC478'><span class="cm">       * @name true</span></div><div class='line' id='LC479'><span class="cm">       * @api public</span></div><div class='line' id='LC480'><span class="cm">       */</span></div><div class='line' id='LC481'><br/></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;true&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">true</span> <span class="o">===</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be true&#39;</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be false&#39;</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">negate</span> <span class="o">?</span> <span class="kc">false</span> <span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC490'><br/></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC492'><span class="cm">       * ### .false</span></div><div class='line' id='LC493'><span class="cm">       *</span></div><div class='line' id='LC494'><span class="cm">       * Asserts that the target is `false`.</span></div><div class='line' id='LC495'><span class="cm">       *</span></div><div class='line' id='LC496'><span class="cm">       *     expect(false).to.be.false;</span></div><div class='line' id='LC497'><span class="cm">       *     expect(0).to.not.be.false;</span></div><div class='line' id='LC498'><span class="cm">       *</span></div><div class='line' id='LC499'><span class="cm">       * @name false</span></div><div class='line' id='LC500'><span class="cm">       * @api public</span></div><div class='line' id='LC501'><span class="cm">       */</span></div><div class='line' id='LC502'><br/></div><div class='line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;false&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">false</span> <span class="o">===</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be false&#39;</span></div><div class='line' id='LC507'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be true&#39;</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">negate</span> <span class="o">?</span> <span class="kc">true</span> <span class="o">:</span> <span class="kc">false</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC511'><br/></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC513'><span class="cm">       * ### .null</span></div><div class='line' id='LC514'><span class="cm">       *</span></div><div class='line' id='LC515'><span class="cm">       * Asserts that the target is `null`.</span></div><div class='line' id='LC516'><span class="cm">       *</span></div><div class='line' id='LC517'><span class="cm">       *     expect(null).to.be.null;</span></div><div class='line' id='LC518'><span class="cm">       *     expect(undefined).not.to.be.null;</span></div><div class='line' id='LC519'><span class="cm">       *</span></div><div class='line' id='LC520'><span class="cm">       * @name null</span></div><div class='line' id='LC521'><span class="cm">       * @api public</span></div><div class='line' id='LC522'><span class="cm">       */</span></div><div class='line' id='LC523'><br/></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;null&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">null</span> <span class="o">===</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be null&#39;</span></div><div class='line' id='LC528'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} not to be null&#39;</span></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC531'><br/></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC533'><span class="cm">       * ### .undefined</span></div><div class='line' id='LC534'><span class="cm">       *</span></div><div class='line' id='LC535'><span class="cm">       * Asserts that the target is `undefined`.</span></div><div class='line' id='LC536'><span class="cm">       *</span></div><div class='line' id='LC537'><span class="cm">       *      expect(undefined).to.be.undefined;</span></div><div class='line' id='LC538'><span class="cm">       *      expect(null).to.not.be.undefined;</span></div><div class='line' id='LC539'><span class="cm">       *</span></div><div class='line' id='LC540'><span class="cm">       * @name undefined</span></div><div class='line' id='LC541'><span class="cm">       * @api public</span></div><div class='line' id='LC542'><span class="cm">       */</span></div><div class='line' id='LC543'><br/></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;undefined&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">undefined</span> <span class="o">===</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be undefined&#39;</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} not to be undefined&#39;</span></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC551'><br/></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC553'><span class="cm">       * ### .exist</span></div><div class='line' id='LC554'><span class="cm">       *</span></div><div class='line' id='LC555'><span class="cm">       * Asserts that the target is neither `null` nor `undefined`.</span></div><div class='line' id='LC556'><span class="cm">       *</span></div><div class='line' id='LC557'><span class="cm">       *     var foo = &#39;hi&#39;</span></div><div class='line' id='LC558'><span class="cm">       *       , bar = null</span></div><div class='line' id='LC559'><span class="cm">       *       , baz;</span></div><div class='line' id='LC560'><span class="cm">       *</span></div><div class='line' id='LC561'><span class="cm">       *     expect(foo).to.exist;</span></div><div class='line' id='LC562'><span class="cm">       *     expect(bar).to.not.exist;</span></div><div class='line' id='LC563'><span class="cm">       *     expect(baz).to.not.exist;</span></div><div class='line' id='LC564'><span class="cm">       *</span></div><div class='line' id='LC565'><span class="cm">       * @name exist</span></div><div class='line' id='LC566'><span class="cm">       * @api public</span></div><div class='line' id='LC567'><span class="cm">       */</span></div><div class='line' id='LC568'><br/></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;exist&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">null</span> <span class="o">!=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to exist&#39;</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not exist&#39;</span></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC576'><br/></div><div class='line' id='LC577'><br/></div><div class='line' id='LC578'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC579'><span class="cm">       * ### .empty</span></div><div class='line' id='LC580'><span class="cm">       *</span></div><div class='line' id='LC581'><span class="cm">       * Asserts that the target&#39;s length is `0`. For arrays, it checks</span></div><div class='line' id='LC582'><span class="cm">       * the `length` property. For objects, it gets the count of</span></div><div class='line' id='LC583'><span class="cm">       * enumerable keys.</span></div><div class='line' id='LC584'><span class="cm">       *</span></div><div class='line' id='LC585'><span class="cm">       *     expect([]).to.be.empty;</span></div><div class='line' id='LC586'><span class="cm">       *     expect(&#39;&#39;).to.be.empty;</span></div><div class='line' id='LC587'><span class="cm">       *     expect({}).to.be.empty;</span></div><div class='line' id='LC588'><span class="cm">       *</span></div><div class='line' id='LC589'><span class="cm">       * @name empty</span></div><div class='line' id='LC590'><span class="cm">       * @api public</span></div><div class='line' id='LC591'><span class="cm">       */</span></div><div class='line' id='LC592'><br/></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;empty&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">expected</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC596'><br/></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;string&#39;</span> <span class="o">===</span> <span class="k">typeof</span> <span class="nx">object</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC598'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">expected</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC599'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">obj</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC600'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">expected</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC601'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC602'><br/></div><div class='line' id='LC603'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">!</span><span class="nx">expected</span></div><div class='line' id='LC605'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be empty&#39;</span></div><div class='line' id='LC606'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} not to be empty&#39;</span></div><div class='line' id='LC607'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC608'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC609'><br/></div><div class='line' id='LC610'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC611'><span class="cm">       * ### .arguments</span></div><div class='line' id='LC612'><span class="cm">       *</span></div><div class='line' id='LC613'><span class="cm">       * Asserts that the target is an arguments object.</span></div><div class='line' id='LC614'><span class="cm">       *</span></div><div class='line' id='LC615'><span class="cm">       *     function test () {</span></div><div class='line' id='LC616'><span class="cm">       *       expect(arguments).to.be.arguments;</span></div><div class='line' id='LC617'><span class="cm">       *     }</span></div><div class='line' id='LC618'><span class="cm">       *</span></div><div class='line' id='LC619'><span class="cm">       * @name arguments</span></div><div class='line' id='LC620'><span class="cm">       * @alias Arguments</span></div><div class='line' id='LC621'><span class="cm">       * @api public</span></div><div class='line' id='LC622'><span class="cm">       */</span></div><div class='line' id='LC623'><br/></div><div class='line' id='LC624'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">checkArguments</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC625'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC626'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">type</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC627'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;[object Arguments]&#39;</span> <span class="o">===</span> <span class="nx">type</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be arguments but got &#39;</span> <span class="o">+</span> <span class="nx">type</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not be arguments&#39;</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC632'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC633'><br/></div><div class='line' id='LC634'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;arguments&#39;</span><span class="p">,</span> <span class="nx">checkArguments</span><span class="p">);</span></div><div class='line' id='LC635'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;Arguments&#39;</span><span class="p">,</span> <span class="nx">checkArguments</span><span class="p">);</span></div><div class='line' id='LC636'><br/></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC638'><span class="cm">       * ### .equal(value)</span></div><div class='line' id='LC639'><span class="cm">       *</span></div><div class='line' id='LC640'><span class="cm">       * Asserts that the target is strictly equal (`===`) to `value`.</span></div><div class='line' id='LC641'><span class="cm">       * Alternately, if the `deep` flag is set, asserts that</span></div><div class='line' id='LC642'><span class="cm">       * the target is deeply equal to `value`.</span></div><div class='line' id='LC643'><span class="cm">       *</span></div><div class='line' id='LC644'><span class="cm">       *     expect(&#39;hello&#39;).to.equal(&#39;hello&#39;);</span></div><div class='line' id='LC645'><span class="cm">       *     expect(42).to.equal(42);</span></div><div class='line' id='LC646'><span class="cm">       *     expect(1).to.not.equal(true);</span></div><div class='line' id='LC647'><span class="cm">       *     expect({ foo: &#39;bar&#39; }).to.not.equal({ foo: &#39;bar&#39; });</span></div><div class='line' id='LC648'><span class="cm">       *     expect({ foo: &#39;bar&#39; }).to.deep.equal({ foo: &#39;bar&#39; });</span></div><div class='line' id='LC649'><span class="cm">       *</span></div><div class='line' id='LC650'><span class="cm">       * @name equal</span></div><div class='line' id='LC651'><span class="cm">       * @alias equals</span></div><div class='line' id='LC652'><span class="cm">       * @alias eq</span></div><div class='line' id='LC653'><span class="cm">       * @alias deep.equal</span></div><div class='line' id='LC654'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC655'><span class="cm">       * @api public</span></div><div class='line' id='LC656'><span class="cm">       */</span></div><div class='line' id='LC657'><br/></div><div class='line' id='LC658'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">assertEqual</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC659'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC660'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;deep&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">eql</span><span class="p">(</span><span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">val</span> <span class="o">===</span> <span class="nx">obj</span></div><div class='line' id='LC665'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to equal #{exp}&#39;</span></div><div class='line' id='LC666'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not equal #{exp}&#39;</span></div><div class='line' id='LC667'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">val</span></div><div class='line' id='LC668'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC669'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC670'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC671'><br/></div><div class='line' id='LC672'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;equal&#39;</span><span class="p">,</span> <span class="nx">assertEqual</span><span class="p">);</span></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;equals&#39;</span><span class="p">,</span> <span class="nx">assertEqual</span><span class="p">);</span></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;eq&#39;</span><span class="p">,</span> <span class="nx">assertEqual</span><span class="p">);</span></div><div class='line' id='LC675'><br/></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC677'><span class="cm">       * ### .eql(value)</span></div><div class='line' id='LC678'><span class="cm">       *</span></div><div class='line' id='LC679'><span class="cm">       * Asserts that the target is deeply equal to `value`.</span></div><div class='line' id='LC680'><span class="cm">       *</span></div><div class='line' id='LC681'><span class="cm">       *     expect({ foo: &#39;bar&#39; }).to.eql({ foo: &#39;bar&#39; });</span></div><div class='line' id='LC682'><span class="cm">       *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);</span></div><div class='line' id='LC683'><span class="cm">       *</span></div><div class='line' id='LC684'><span class="cm">       * @name eql</span></div><div class='line' id='LC685'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC686'><span class="cm">       * @api public</span></div><div class='line' id='LC687'><span class="cm">       */</span></div><div class='line' id='LC688'><br/></div><div class='line' id='LC689'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;eql&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC690'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_</span><span class="p">.</span><span class="nx">eql</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">))</span></div><div class='line' id='LC692'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to deeply equal #{exp}&#39;</span></div><div class='line' id='LC693'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not deeply equal #{exp}&#39;</span></div><div class='line' id='LC694'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">obj</span></div><div class='line' id='LC695'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC696'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC697'><br/></div><div class='line' id='LC698'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC699'><span class="cm">       * ### .above(value)</span></div><div class='line' id='LC700'><span class="cm">       *</span></div><div class='line' id='LC701'><span class="cm">       * Asserts that the target is greater than `value`.</span></div><div class='line' id='LC702'><span class="cm">       *</span></div><div class='line' id='LC703'><span class="cm">       *     expect(10).to.be.above(5);</span></div><div class='line' id='LC704'><span class="cm">       *</span></div><div class='line' id='LC705'><span class="cm">       * Can also be used in conjunction with `length` to</span></div><div class='line' id='LC706'><span class="cm">       * assert a minimum length. The benefit being a</span></div><div class='line' id='LC707'><span class="cm">       * more informative error message than if the length</span></div><div class='line' id='LC708'><span class="cm">       * was supplied directly.</span></div><div class='line' id='LC709'><span class="cm">       *</span></div><div class='line' id='LC710'><span class="cm">       *     expect(&#39;foo&#39;).to.have.length.above(2);</span></div><div class='line' id='LC711'><span class="cm">       *     expect([ 1, 2, 3 ]).to.have.length.above(2);</span></div><div class='line' id='LC712'><span class="cm">       *</span></div><div class='line' id='LC713'><span class="cm">       * @name above</span></div><div class='line' id='LC714'><span class="cm">       * @alias gt</span></div><div class='line' id='LC715'><span class="cm">       * @alias greaterThan</span></div><div class='line' id='LC716'><span class="cm">       * @param {Number} value</span></div><div class='line' id='LC717'><span class="cm">       * @api public</span></div><div class='line' id='LC718'><span class="cm">       */</span></div><div class='line' id='LC719'><br/></div><div class='line' id='LC720'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">assertAbove</span> <span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC721'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC722'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;doLength&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC723'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="s1">&#39;length&#39;</span><span class="p">);</span></div><div class='line' id='LC724'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC725'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC726'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">len</span> <span class="o">&gt;</span> <span class="nx">n</span></div><div class='line' id='LC727'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to have a length above #{exp} but got #{act}&#39;</span></div><div class='line' id='LC728'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not have a length above #{exp}&#39;</span></div><div class='line' id='LC729'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">n</span></div><div class='line' id='LC730'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">len</span></div><div class='line' id='LC731'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC732'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC733'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC734'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span> <span class="o">&gt;</span> <span class="nx">n</span></div><div class='line' id='LC735'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be above &#39;</span> <span class="o">+</span> <span class="nx">n</span></div><div class='line' id='LC736'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be below &#39;</span> <span class="o">+</span> <span class="nx">n</span></div><div class='line' id='LC737'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC738'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC739'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC740'><br/></div><div class='line' id='LC741'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;above&#39;</span><span class="p">,</span> <span class="nx">assertAbove</span><span class="p">);</span></div><div class='line' id='LC742'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;gt&#39;</span><span class="p">,</span> <span class="nx">assertAbove</span><span class="p">);</span></div><div class='line' id='LC743'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;greaterThan&#39;</span><span class="p">,</span> <span class="nx">assertAbove</span><span class="p">);</span></div><div class='line' id='LC744'><br/></div><div class='line' id='LC745'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC746'><span class="cm">       * ### .below(value)</span></div><div class='line' id='LC747'><span class="cm">       *</span></div><div class='line' id='LC748'><span class="cm">       * Asserts that the target is less than `value`.</span></div><div class='line' id='LC749'><span class="cm">       *</span></div><div class='line' id='LC750'><span class="cm">       *     expect(5).to.be.below(10);</span></div><div class='line' id='LC751'><span class="cm">       *</span></div><div class='line' id='LC752'><span class="cm">       * Can also be used in conjunction with `length` to</span></div><div class='line' id='LC753'><span class="cm">       * assert a maximum length. The benefit being a</span></div><div class='line' id='LC754'><span class="cm">       * more informative error message than if the length</span></div><div class='line' id='LC755'><span class="cm">       * was supplied directly.</span></div><div class='line' id='LC756'><span class="cm">       *</span></div><div class='line' id='LC757'><span class="cm">       *     expect(&#39;foo&#39;).to.have.length.below(4);</span></div><div class='line' id='LC758'><span class="cm">       *     expect([ 1, 2, 3 ]).to.have.length.below(4);</span></div><div class='line' id='LC759'><span class="cm">       *</span></div><div class='line' id='LC760'><span class="cm">       * @name below</span></div><div class='line' id='LC761'><span class="cm">       * @alias lt</span></div><div class='line' id='LC762'><span class="cm">       * @alias lessThan</span></div><div class='line' id='LC763'><span class="cm">       * @param {Number} value</span></div><div class='line' id='LC764'><span class="cm">       * @api public</span></div><div class='line' id='LC765'><span class="cm">       */</span></div><div class='line' id='LC766'><br/></div><div class='line' id='LC767'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">assertBelow</span> <span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC769'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;doLength&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC770'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="s1">&#39;length&#39;</span><span class="p">);</span></div><div class='line' id='LC771'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC773'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">len</span> <span class="o">&lt;</span> <span class="nx">n</span></div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to have a length below #{exp} but got #{act}&#39;</span></div><div class='line' id='LC775'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not have a length below #{exp}&#39;</span></div><div class='line' id='LC776'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">n</span></div><div class='line' id='LC777'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">len</span></div><div class='line' id='LC778'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC779'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC780'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC781'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span> <span class="o">&lt;</span> <span class="nx">n</span></div><div class='line' id='LC782'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be below &#39;</span> <span class="o">+</span> <span class="nx">n</span></div><div class='line' id='LC783'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be above &#39;</span> <span class="o">+</span> <span class="nx">n</span></div><div class='line' id='LC784'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC785'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC786'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC787'><br/></div><div class='line' id='LC788'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;below&#39;</span><span class="p">,</span> <span class="nx">assertBelow</span><span class="p">);</span></div><div class='line' id='LC789'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;lt&#39;</span><span class="p">,</span> <span class="nx">assertBelow</span><span class="p">);</span></div><div class='line' id='LC790'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;lessThan&#39;</span><span class="p">,</span> <span class="nx">assertBelow</span><span class="p">);</span></div><div class='line' id='LC791'><br/></div><div class='line' id='LC792'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC793'><span class="cm">       * ### .within(start, finish)</span></div><div class='line' id='LC794'><span class="cm">       *</span></div><div class='line' id='LC795'><span class="cm">       * Asserts that the target is within a range.</span></div><div class='line' id='LC796'><span class="cm">       *</span></div><div class='line' id='LC797'><span class="cm">       *     expect(7).to.be.within(5,10);</span></div><div class='line' id='LC798'><span class="cm">       *</span></div><div class='line' id='LC799'><span class="cm">       * Can also be used in conjunction with `length` to</span></div><div class='line' id='LC800'><span class="cm">       * assert a length range. The benefit being a</span></div><div class='line' id='LC801'><span class="cm">       * more informative error message than if the length</span></div><div class='line' id='LC802'><span class="cm">       * was supplied directly.</span></div><div class='line' id='LC803'><span class="cm">       *</span></div><div class='line' id='LC804'><span class="cm">       *     expect(&#39;foo&#39;).to.have.length.within(2,4);</span></div><div class='line' id='LC805'><span class="cm">       *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);</span></div><div class='line' id='LC806'><span class="cm">       *</span></div><div class='line' id='LC807'><span class="cm">       * @name within</span></div><div class='line' id='LC808'><span class="cm">       * @param {Number} start lowerbound inclusive</span></div><div class='line' id='LC809'><span class="cm">       * @param {Number} finish upperbound inclusive</span></div><div class='line' id='LC810'><span class="cm">       * @api public</span></div><div class='line' id='LC811'><span class="cm">       */</span></div><div class='line' id='LC812'><br/></div><div class='line' id='LC813'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;within&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">start</span><span class="p">,</span> <span class="nx">finish</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC814'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC815'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">range</span> <span class="o">=</span> <span class="nx">start</span> <span class="o">+</span> <span class="s1">&#39;..&#39;</span> <span class="o">+</span> <span class="nx">finish</span><span class="p">;</span></div><div class='line' id='LC816'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;doLength&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC817'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="s1">&#39;length&#39;</span><span class="p">);</span></div><div class='line' id='LC818'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC819'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC820'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">len</span> <span class="o">&gt;=</span> <span class="nx">start</span> <span class="o">&amp;&amp;</span> <span class="nx">len</span> <span class="o">&lt;=</span> <span class="nx">finish</span></div><div class='line' id='LC821'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to have a length within &#39;</span> <span class="o">+</span> <span class="nx">range</span></div><div class='line' id='LC822'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not have a length within &#39;</span> <span class="o">+</span> <span class="nx">range</span></div><div class='line' id='LC823'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC824'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC825'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC826'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span> <span class="o">&gt;=</span> <span class="nx">start</span> <span class="o">&amp;&amp;</span> <span class="nx">obj</span> <span class="o">&lt;=</span> <span class="nx">finish</span></div><div class='line' id='LC827'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be within &#39;</span> <span class="o">+</span> <span class="nx">range</span></div><div class='line' id='LC828'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not be within &#39;</span> <span class="o">+</span> <span class="nx">range</span></div><div class='line' id='LC829'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC830'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC831'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC832'><br/></div><div class='line' id='LC833'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC834'><span class="cm">       * ### .instanceof(constructor)</span></div><div class='line' id='LC835'><span class="cm">       *</span></div><div class='line' id='LC836'><span class="cm">       * Asserts that the target is an instance of `constructor`.</span></div><div class='line' id='LC837'><span class="cm">       *</span></div><div class='line' id='LC838'><span class="cm">       *     var Tea = function (name) { this.name = name; }</span></div><div class='line' id='LC839'><span class="cm">       *       , Chai = new Tea(&#39;chai&#39;);</span></div><div class='line' id='LC840'><span class="cm">       *</span></div><div class='line' id='LC841'><span class="cm">       *     expect(Chai).to.be.an.instanceof(Tea);</span></div><div class='line' id='LC842'><span class="cm">       *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);</span></div><div class='line' id='LC843'><span class="cm">       *</span></div><div class='line' id='LC844'><span class="cm">       * @name instanceof</span></div><div class='line' id='LC845'><span class="cm">       * @param {Constructor} constructor</span></div><div class='line' id='LC846'><span class="cm">       * @alias instanceOf</span></div><div class='line' id='LC847'><span class="cm">       * @api public</span></div><div class='line' id='LC848'><span class="cm">       */</span></div><div class='line' id='LC849'><br/></div><div class='line' id='LC850'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">assertInstanceOf</span> <span class="p">(</span><span class="nx">constructor</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC851'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">getName</span><span class="p">(</span><span class="nx">constructor</span><span class="p">);</span></div><div class='line' id='LC852'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC853'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="k">instanceof</span> <span class="nx">constructor</span></div><div class='line' id='LC854'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be an instance of &#39;</span> <span class="o">+</span> <span class="nx">name</span></div><div class='line' id='LC855'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not be an instance of &#39;</span> <span class="o">+</span> <span class="nx">name</span></div><div class='line' id='LC856'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC857'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC858'><br/></div><div class='line' id='LC859'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;instanceof&#39;</span><span class="p">,</span> <span class="nx">assertInstanceOf</span><span class="p">);</span></div><div class='line' id='LC860'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;instanceOf&#39;</span><span class="p">,</span> <span class="nx">assertInstanceOf</span><span class="p">);</span></div><div class='line' id='LC861'><br/></div><div class='line' id='LC862'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC863'><span class="cm">       * ### .property(name, [value])</span></div><div class='line' id='LC864'><span class="cm">       *</span></div><div class='line' id='LC865'><span class="cm">       * Asserts that the target has a property `name`, optionally asserting that</span></div><div class='line' id='LC866'><span class="cm">       * the value of that property is strictly equal to  `value`.</span></div><div class='line' id='LC867'><span class="cm">       * If the `deep` flag is set, you can use dot- and bracket-notation for deep</span></div><div class='line' id='LC868'><span class="cm">       * references into objects and arrays.</span></div><div class='line' id='LC869'><span class="cm">       *</span></div><div class='line' id='LC870'><span class="cm">       *     // simple referencing</span></div><div class='line' id='LC871'><span class="cm">       *     var obj = { foo: &#39;bar&#39; };</span></div><div class='line' id='LC872'><span class="cm">       *     expect(obj).to.have.property(&#39;foo&#39;);</span></div><div class='line' id='LC873'><span class="cm">       *     expect(obj).to.have.property(&#39;foo&#39;, &#39;bar&#39;);</span></div><div class='line' id='LC874'><span class="cm">       *</span></div><div class='line' id='LC875'><span class="cm">       *     // deep referencing</span></div><div class='line' id='LC876'><span class="cm">       *     var deepObj = {</span></div><div class='line' id='LC877'><span class="cm">       *         green: { tea: &#39;matcha&#39; }</span></div><div class='line' id='LC878'><span class="cm">       *       , teas: [ &#39;chai&#39;, &#39;matcha&#39;, { tea: &#39;konacha&#39; } ]</span></div><div class='line' id='LC879'><span class="cm">       *     };</span></div><div class='line' id='LC880'><br/></div><div class='line' id='LC881'><span class="cm">       *     expect(deepObj).to.have.deep.property(&#39;green.tea&#39;, &#39;matcha&#39;);</span></div><div class='line' id='LC882'><span class="cm">       *     expect(deepObj).to.have.deep.property(&#39;teas[1]&#39;, &#39;matcha&#39;);</span></div><div class='line' id='LC883'><span class="cm">       *     expect(deepObj).to.have.deep.property(&#39;teas[2].tea&#39;, &#39;konacha&#39;);</span></div><div class='line' id='LC884'><span class="cm">       *</span></div><div class='line' id='LC885'><span class="cm">       * You can also use an array as the starting point of a `deep.property`</span></div><div class='line' id='LC886'><span class="cm">       * assertion, or traverse nested arrays.</span></div><div class='line' id='LC887'><span class="cm">       *</span></div><div class='line' id='LC888'><span class="cm">       *     var arr = [</span></div><div class='line' id='LC889'><span class="cm">       *         [ &#39;chai&#39;, &#39;matcha&#39;, &#39;konacha&#39; ]</span></div><div class='line' id='LC890'><span class="cm">       *       , [ { tea: &#39;chai&#39; }</span></div><div class='line' id='LC891'><span class="cm">       *         , { tea: &#39;matcha&#39; }</span></div><div class='line' id='LC892'><span class="cm">       *         , { tea: &#39;konacha&#39; } ]</span></div><div class='line' id='LC893'><span class="cm">       *     ];</span></div><div class='line' id='LC894'><span class="cm">       *</span></div><div class='line' id='LC895'><span class="cm">       *     expect(arr).to.have.deep.property(&#39;[0][1]&#39;, &#39;matcha&#39;);</span></div><div class='line' id='LC896'><span class="cm">       *     expect(arr).to.have.deep.property(&#39;[1][2].tea&#39;, &#39;konacha&#39;);</span></div><div class='line' id='LC897'><span class="cm">       *</span></div><div class='line' id='LC898'><span class="cm">       * Furthermore, `property` changes the subject of the assertion</span></div><div class='line' id='LC899'><span class="cm">       * to be the value of that property from the original object. This</span></div><div class='line' id='LC900'><span class="cm">       * permits for further chainable assertions on that property.</span></div><div class='line' id='LC901'><span class="cm">       *</span></div><div class='line' id='LC902'><span class="cm">       *     expect(obj).to.have.property(&#39;foo&#39;)</span></div><div class='line' id='LC903'><span class="cm">       *       .that.is.a(&#39;string&#39;);</span></div><div class='line' id='LC904'><span class="cm">       *     expect(deepObj).to.have.property(&#39;green&#39;)</span></div><div class='line' id='LC905'><span class="cm">       *       .that.is.an(&#39;object&#39;)</span></div><div class='line' id='LC906'><span class="cm">       *       .that.deep.equals({ tea: &#39;matcha&#39; });</span></div><div class='line' id='LC907'><span class="cm">       *     expect(deepObj).to.have.property(&#39;teas&#39;)</span></div><div class='line' id='LC908'><span class="cm">       *       .that.is.an(&#39;array&#39;)</span></div><div class='line' id='LC909'><span class="cm">       *       .with.deep.property(&#39;[2]&#39;)</span></div><div class='line' id='LC910'><span class="cm">       *         .that.deep.equals({ tea: &#39;konacha&#39; });</span></div><div class='line' id='LC911'><span class="cm">       *</span></div><div class='line' id='LC912'><span class="cm">       * @name property</span></div><div class='line' id='LC913'><span class="cm">       * @alias deep.property</span></div><div class='line' id='LC914'><span class="cm">       * @param {String} name</span></div><div class='line' id='LC915'><span class="cm">       * @param {Mixed} value (optional)</span></div><div class='line' id='LC916'><span class="cm">       * @returns value of property for chaining</span></div><div class='line' id='LC917'><span class="cm">       * @api public</span></div><div class='line' id='LC918'><span class="cm">       */</span></div><div class='line' id='LC919'><br/></div><div class='line' id='LC920'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;property&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC921'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">descriptor</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;deep&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;deep property &#39;</span> <span class="o">:</span> <span class="s1">&#39;property &#39;</span></div><div class='line' id='LC922'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">negate</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;negate&#39;</span><span class="p">)</span></div><div class='line' id='LC923'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC924'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;deep&#39;</span><span class="p">)</span></div><div class='line' id='LC925'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">getPathValue</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)</span></div><div class='line' id='LC926'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC927'><br/></div><div class='line' id='LC928'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">negate</span> <span class="o">&amp;&amp;</span> <span class="kc">undefined</span> <span class="o">!==</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC929'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="kc">undefined</span> <span class="o">===</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC930'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; has no &#39;</span> <span class="o">+</span> <span class="nx">descriptor</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">name</span><span class="p">));</span></div><div class='line' id='LC931'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC932'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC933'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC934'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">undefined</span> <span class="o">!==</span> <span class="nx">value</span></div><div class='line' id='LC935'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to have a &#39;</span> <span class="o">+</span> <span class="nx">descriptor</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span></div><div class='line' id='LC936'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not have &#39;</span> <span class="o">+</span> <span class="nx">descriptor</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">name</span><span class="p">));</span></div><div class='line' id='LC937'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC938'><br/></div><div class='line' id='LC939'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="kc">undefined</span> <span class="o">!==</span> <span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC940'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC941'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">val</span> <span class="o">===</span> <span class="nx">value</span></div><div class='line' id='LC942'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to have a &#39;</span> <span class="o">+</span> <span class="nx">descriptor</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; of #{exp}, but got #{act}&#39;</span></div><div class='line' id='LC943'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not have a &#39;</span> <span class="o">+</span> <span class="nx">descriptor</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; of #{act}&#39;</span></div><div class='line' id='LC944'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">val</span></div><div class='line' id='LC945'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">value</span></div><div class='line' id='LC946'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC947'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC948'><br/></div><div class='line' id='LC949'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC950'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC951'><br/></div><div class='line' id='LC952'><br/></div><div class='line' id='LC953'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC954'><span class="cm">       * ### .ownProperty(name)</span></div><div class='line' id='LC955'><span class="cm">       *</span></div><div class='line' id='LC956'><span class="cm">       * Asserts that the target has an own property `name`.</span></div><div class='line' id='LC957'><span class="cm">       *</span></div><div class='line' id='LC958'><span class="cm">       *     expect(&#39;test&#39;).to.have.ownProperty(&#39;length&#39;);</span></div><div class='line' id='LC959'><span class="cm">       *</span></div><div class='line' id='LC960'><span class="cm">       * @name ownProperty</span></div><div class='line' id='LC961'><span class="cm">       * @alias haveOwnProperty</span></div><div class='line' id='LC962'><span class="cm">       * @param {String} name</span></div><div class='line' id='LC963'><span class="cm">       * @api public</span></div><div class='line' id='LC964'><span class="cm">       */</span></div><div class='line' id='LC965'><br/></div><div class='line' id='LC966'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">assertOwnProperty</span> <span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC967'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC968'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC969'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span></div><div class='line' id='LC970'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to have own property &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span></div><div class='line' id='LC971'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not have own property &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span></div><div class='line' id='LC972'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC973'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC974'><br/></div><div class='line' id='LC975'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;ownProperty&#39;</span><span class="p">,</span> <span class="nx">assertOwnProperty</span><span class="p">);</span></div><div class='line' id='LC976'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;haveOwnProperty&#39;</span><span class="p">,</span> <span class="nx">assertOwnProperty</span><span class="p">);</span></div><div class='line' id='LC977'><br/></div><div class='line' id='LC978'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC979'><span class="cm">       * ### .length(value)</span></div><div class='line' id='LC980'><span class="cm">       *</span></div><div class='line' id='LC981'><span class="cm">       * Asserts that the target&#39;s `length` property has</span></div><div class='line' id='LC982'><span class="cm">       * the expected value.</span></div><div class='line' id='LC983'><span class="cm">       *</span></div><div class='line' id='LC984'><span class="cm">       *     expect([ 1, 2, 3]).to.have.length(3);</span></div><div class='line' id='LC985'><span class="cm">       *     expect(&#39;foobar&#39;).to.have.length(6);</span></div><div class='line' id='LC986'><span class="cm">       *</span></div><div class='line' id='LC987'><span class="cm">       * Can also be used as a chain precursor to a value</span></div><div class='line' id='LC988'><span class="cm">       * comparison for the length property.</span></div><div class='line' id='LC989'><span class="cm">       *</span></div><div class='line' id='LC990'><span class="cm">       *     expect(&#39;foo&#39;).to.have.length.above(2);</span></div><div class='line' id='LC991'><span class="cm">       *     expect([ 1, 2, 3 ]).to.have.length.above(2);</span></div><div class='line' id='LC992'><span class="cm">       *     expect(&#39;foo&#39;).to.have.length.below(4);</span></div><div class='line' id='LC993'><span class="cm">       *     expect([ 1, 2, 3 ]).to.have.length.below(4);</span></div><div class='line' id='LC994'><span class="cm">       *     expect(&#39;foo&#39;).to.have.length.within(2,4);</span></div><div class='line' id='LC995'><span class="cm">       *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);</span></div><div class='line' id='LC996'><span class="cm">       *</span></div><div class='line' id='LC997'><span class="cm">       * @name length</span></div><div class='line' id='LC998'><span class="cm">       * @alias lengthOf</span></div><div class='line' id='LC999'><span class="cm">       * @param {Number} length</span></div><div class='line' id='LC1000'><span class="cm">       * @api public</span></div><div class='line' id='LC1001'><span class="cm">       */</span></div><div class='line' id='LC1002'><br/></div><div class='line' id='LC1003'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">assertLengthChain</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1004'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;doLength&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1005'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1006'><br/></div><div class='line' id='LC1007'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">assertLength</span> <span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1008'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC1009'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="s1">&#39;length&#39;</span><span class="p">);</span></div><div class='line' id='LC1010'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1011'><br/></div><div class='line' id='LC1012'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1013'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">len</span> <span class="o">==</span> <span class="nx">n</span></div><div class='line' id='LC1014'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to have a length of #{exp} but got #{act}&#39;</span></div><div class='line' id='LC1015'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not have a length of #{act}&#39;</span></div><div class='line' id='LC1016'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">n</span></div><div class='line' id='LC1017'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">len</span></div><div class='line' id='LC1018'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1019'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1020'><br/></div><div class='line' id='LC1021'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addChainableMethod</span><span class="p">(</span><span class="s1">&#39;length&#39;</span><span class="p">,</span> <span class="nx">assertLength</span><span class="p">,</span> <span class="nx">assertLengthChain</span><span class="p">);</span></div><div class='line' id='LC1022'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;lengthOf&#39;</span><span class="p">,</span> <span class="nx">assertLength</span><span class="p">,</span> <span class="nx">assertLengthChain</span><span class="p">);</span></div><div class='line' id='LC1023'><br/></div><div class='line' id='LC1024'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1025'><span class="cm">       * ### .match(regexp)</span></div><div class='line' id='LC1026'><span class="cm">       *</span></div><div class='line' id='LC1027'><span class="cm">       * Asserts that the target matches a regular expression.</span></div><div class='line' id='LC1028'><span class="cm">       *</span></div><div class='line' id='LC1029'><span class="cm">       *     expect(&#39;foobar&#39;).to.match(/^foo/);</span></div><div class='line' id='LC1030'><span class="cm">       *</span></div><div class='line' id='LC1031'><span class="cm">       * @name match</span></div><div class='line' id='LC1032'><span class="cm">       * @param {RegExp} RegularExpression</span></div><div class='line' id='LC1033'><span class="cm">       * @api public</span></div><div class='line' id='LC1034'><span class="cm">       */</span></div><div class='line' id='LC1035'><br/></div><div class='line' id='LC1036'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;match&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">re</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1037'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC1038'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1039'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">re</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span></div><div class='line' id='LC1040'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to match &#39;</span> <span class="o">+</span> <span class="nx">re</span></div><div class='line' id='LC1041'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} not to match &#39;</span> <span class="o">+</span> <span class="nx">re</span></div><div class='line' id='LC1042'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1043'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1044'><br/></div><div class='line' id='LC1045'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1046'><span class="cm">       * ### .string(string)</span></div><div class='line' id='LC1047'><span class="cm">       *</span></div><div class='line' id='LC1048'><span class="cm">       * Asserts that the string target contains another string.</span></div><div class='line' id='LC1049'><span class="cm">       *</span></div><div class='line' id='LC1050'><span class="cm">       *     expect(&#39;foobar&#39;).to.have.string(&#39;bar&#39;);</span></div><div class='line' id='LC1051'><span class="cm">       *</span></div><div class='line' id='LC1052'><span class="cm">       * @name string</span></div><div class='line' id='LC1053'><span class="cm">       * @param {String} string</span></div><div class='line' id='LC1054'><span class="cm">       * @api public</span></div><div class='line' id='LC1055'><span class="cm">       */</span></div><div class='line' id='LC1056'><br/></div><div class='line' id='LC1057'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;string&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1058'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC1059'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">is</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;string&#39;</span><span class="p">);</span></div><div class='line' id='LC1060'><br/></div><div class='line' id='LC1061'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1062'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">~</span><span class="nx">obj</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span></div><div class='line' id='LC1063'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to contain &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span></div><div class='line' id='LC1064'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not contain &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span></div><div class='line' id='LC1065'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1066'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1067'><br/></div><div class='line' id='LC1068'><br/></div><div class='line' id='LC1069'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1070'><span class="cm">       * ### .keys(key1, [key2], [...])</span></div><div class='line' id='LC1071'><span class="cm">       *</span></div><div class='line' id='LC1072'><span class="cm">       * Asserts that the target has exactly the given keys, or</span></div><div class='line' id='LC1073'><span class="cm">       * asserts the inclusion of some keys when using the</span></div><div class='line' id='LC1074'><span class="cm">       * `include` or `contain` modifiers.</span></div><div class='line' id='LC1075'><span class="cm">       *</span></div><div class='line' id='LC1076'><span class="cm">       *     expect({ foo: 1, bar: 2 }).to.have.keys([&#39;foo&#39;, &#39;bar&#39;]);</span></div><div class='line' id='LC1077'><span class="cm">       *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys(&#39;foo&#39;, &#39;bar&#39;);</span></div><div class='line' id='LC1078'><span class="cm">       *</span></div><div class='line' id='LC1079'><span class="cm">       * @name keys</span></div><div class='line' id='LC1080'><span class="cm">       * @alias key</span></div><div class='line' id='LC1081'><span class="cm">       * @param {String...|Array} keys</span></div><div class='line' id='LC1082'><span class="cm">       * @api public</span></div><div class='line' id='LC1083'><span class="cm">       */</span></div><div class='line' id='LC1084'><br/></div><div class='line' id='LC1085'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">assertKeys</span> <span class="p">(</span><span class="nx">keys</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1086'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC1087'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">str</span></div><div class='line' id='LC1088'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">ok</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1089'><br/></div><div class='line' id='LC1090'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">keys</span> <span class="o">=</span> <span class="nx">keys</span> <span class="k">instanceof</span> <span class="nb">Array</span></div><div class='line' id='LC1091'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nx">keys</span></div><div class='line' id='LC1092'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC1093'><br/></div><div class='line' id='LC1094'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;keys required&#39;</span><span class="p">);</span></div><div class='line' id='LC1095'><br/></div><div class='line' id='LC1096'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">actual</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span></div><div class='line' id='LC1097'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">len</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1098'><br/></div><div class='line' id='LC1099'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Inclusion</span></div><div class='line' id='LC1100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ok</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">every</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC1101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">~</span><span class="nx">actual</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC1102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1103'><br/></div><div class='line' id='LC1104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Strict</span></div><div class='line' id='LC1105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;negate&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;contains&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ok</span> <span class="o">=</span> <span class="nx">ok</span> <span class="o">&amp;&amp;</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="nx">actual</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1108'><br/></div><div class='line' id='LC1109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Key string</span></div><div class='line' id='LC1110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">len</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">keys</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">){</span></div><div class='line' id='LC1112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC1113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">last</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC1115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;, &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;, and &#39;</span> <span class="o">+</span> <span class="nx">last</span><span class="p">;</span></div><div class='line' id='LC1116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">keys</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC1118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1119'><br/></div><div class='line' id='LC1120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Form</span></div><div class='line' id='LC1121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="p">(</span><span class="nx">len</span> <span class="o">&gt;</span> <span class="mi">1</span> <span class="o">?</span> <span class="s1">&#39;keys &#39;</span> <span class="o">:</span> <span class="s1">&#39;key &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC1122'><br/></div><div class='line' id='LC1123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Have / include</span></div><div class='line' id='LC1124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="p">(</span><span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;contains&#39;</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;contain &#39;</span> <span class="o">:</span> <span class="s1">&#39;have &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC1125'><br/></div><div class='line' id='LC1126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Assertion</span></div><div class='line' id='LC1127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ok</span></div><div class='line' id='LC1129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to &#39;</span> <span class="o">+</span> <span class="nx">str</span></div><div class='line' id='LC1130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not &#39;</span> <span class="o">+</span> <span class="nx">str</span></div><div class='line' id='LC1131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1133'><br/></div><div class='line' id='LC1134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;keys&#39;</span><span class="p">,</span> <span class="nx">assertKeys</span><span class="p">);</span></div><div class='line' id='LC1135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;key&#39;</span><span class="p">,</span> <span class="nx">assertKeys</span><span class="p">);</span></div><div class='line' id='LC1136'><br/></div><div class='line' id='LC1137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1138'><span class="cm">       * ### .throw(constructor)</span></div><div class='line' id='LC1139'><span class="cm">       *</span></div><div class='line' id='LC1140'><span class="cm">       * Asserts that the function target will throw a specific error, or specific type of error</span></div><div class='line' id='LC1141'><span class="cm">       * (as determined using `instanceof`), optionally with a RegExp or string inclusion test</span></div><div class='line' id='LC1142'><span class="cm">       * for the error&#39;s message.</span></div><div class='line' id='LC1143'><span class="cm">       *</span></div><div class='line' id='LC1144'><span class="cm">       *     var err = new ReferenceError(&#39;This is a bad function.&#39;);</span></div><div class='line' id='LC1145'><span class="cm">       *     var fn = function () { throw err; }</span></div><div class='line' id='LC1146'><span class="cm">       *     expect(fn).to.throw(ReferenceError);</span></div><div class='line' id='LC1147'><span class="cm">       *     expect(fn).to.throw(Error);</span></div><div class='line' id='LC1148'><span class="cm">       *     expect(fn).to.throw(/bad function/);</span></div><div class='line' id='LC1149'><span class="cm">       *     expect(fn).to.not.throw(&#39;good function&#39;);</span></div><div class='line' id='LC1150'><span class="cm">       *     expect(fn).to.throw(ReferenceError, /bad function/);</span></div><div class='line' id='LC1151'><span class="cm">       *     expect(fn).to.throw(err);</span></div><div class='line' id='LC1152'><span class="cm">       *     expect(fn).to.not.throw(new RangeError(&#39;Out of range.&#39;));</span></div><div class='line' id='LC1153'><span class="cm">       *</span></div><div class='line' id='LC1154'><span class="cm">       * Please note that when a throw expectation is negated, it will check each</span></div><div class='line' id='LC1155'><span class="cm">       * parameter independently, starting with error constructor type. The appropriate way</span></div><div class='line' id='LC1156'><span class="cm">       * to check for the existence of a type of error but for a message that does not match</span></div><div class='line' id='LC1157'><span class="cm">       * is to use `and`.</span></div><div class='line' id='LC1158'><span class="cm">       *</span></div><div class='line' id='LC1159'><span class="cm">       *     expect(fn).to.throw(ReferenceError)</span></div><div class='line' id='LC1160'><span class="cm">       *        .and.not.throw(/good function/);</span></div><div class='line' id='LC1161'><span class="cm">       *</span></div><div class='line' id='LC1162'><span class="cm">       * @name throw</span></div><div class='line' id='LC1163'><span class="cm">       * @alias throws</span></div><div class='line' id='LC1164'><span class="cm">       * @alias Throw</span></div><div class='line' id='LC1165'><span class="cm">       * @param {ErrorConstructor} constructor</span></div><div class='line' id='LC1166'><span class="cm">       * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types</span></div><div class='line' id='LC1167'><span class="cm">       * @api public</span></div><div class='line' id='LC1168'><span class="cm">       */</span></div><div class='line' id='LC1169'><br/></div><div class='line' id='LC1170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">assertThrows</span> <span class="p">(</span><span class="nx">constructor</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC1172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">).</span><span class="nx">is</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;function&#39;</span><span class="p">);</span></div><div class='line' id='LC1173'><br/></div><div class='line' id='LC1174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">thrown</span> <span class="o">=</span> <span class="kc">false</span></div><div class='line' id='LC1175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">desiredError</span> <span class="o">=</span> <span class="kc">null</span></div><div class='line' id='LC1176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">name</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1177'><br/></div><div class='line' id='LC1178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">msg</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">constructor</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">constructor</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">constructor</span> <span class="k">instanceof</span> <span class="nb">RegExp</span> <span class="o">||</span> <span class="s1">&#39;string&#39;</span> <span class="o">===</span> <span class="k">typeof</span> <span class="nx">constructor</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">msg</span> <span class="o">=</span> <span class="nx">constructor</span><span class="p">;</span></div><div class='line' id='LC1183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">constructor</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">constructor</span> <span class="o">&amp;&amp;</span> <span class="nx">constructor</span> <span class="k">instanceof</span> <span class="nb">Error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">desiredError</span> <span class="o">=</span> <span class="nx">constructor</span><span class="p">;</span></div><div class='line' id='LC1186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">constructor</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">msg</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">constructor</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span> <span class="o">=</span> <span class="p">(</span><span class="k">new</span> <span class="nx">constructor</span><span class="p">()).</span><span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC1190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">constructor</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1193'><br/></div><div class='line' id='LC1194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC1195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">();</span></div><div class='line' id='LC1196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// first, check desired error</span></div><div class='line' id='LC1198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">desiredError</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">err</span> <span class="o">===</span> <span class="nx">desiredError</span></div><div class='line' id='LC1201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to throw &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">desiredError</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; but &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; was thrown&#39;</span></div><div class='line' id='LC1202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not throw &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">desiredError</span><span class="p">)</span></div><div class='line' id='LC1203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// next, check constructor</span></div><div class='line' id='LC1207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">constructor</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">err</span> <span class="k">instanceof</span> <span class="nx">constructor</span></div><div class='line' id='LC1210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to throw &#39;</span> <span class="o">+</span> <span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39; but a &#39;</span> <span class="o">+</span> <span class="nx">err</span><span class="p">.</span><span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39; was thrown&#39;</span></div><div class='line' id='LC1211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not throw &#39;</span> <span class="o">+</span> <span class="nx">name</span> <span class="p">);</span></div><div class='line' id='LC1212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">msg</span><span class="p">)</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// next, check message</span></div><div class='line' id='LC1215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">.</span><span class="nx">message</span> <span class="o">&amp;&amp;</span> <span class="nx">msg</span> <span class="o">&amp;&amp;</span> <span class="nx">msg</span> <span class="k">instanceof</span> <span class="nb">RegExp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">msg</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">err</span><span class="p">.</span><span class="nx">message</span><span class="p">)</span></div><div class='line' id='LC1218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to throw error matching &#39;</span> <span class="o">+</span> <span class="nx">msg</span> <span class="o">+</span> <span class="s1">&#39; but got &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">err</span><span class="p">.</span><span class="nx">message</span><span class="p">)</span></div><div class='line' id='LC1219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to throw error not matching &#39;</span> <span class="o">+</span> <span class="nx">msg</span></div><div class='line' id='LC1220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">.</span><span class="nx">message</span> <span class="o">&amp;&amp;</span> <span class="nx">msg</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;string&#39;</span> <span class="o">===</span> <span class="k">typeof</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1224'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">~</span><span class="nx">err</span><span class="p">.</span><span class="nx">message</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">msg</span><span class="p">)</span></div><div class='line' id='LC1225'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to throw error including #{exp} but got #{act}&#39;</span></div><div class='line' id='LC1226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to throw error not including #{act}&#39;</span></div><div class='line' id='LC1227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">msg</span></div><div class='line' id='LC1228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">err</span><span class="p">.</span><span class="nx">message</span></div><div class='line' id='LC1229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">thrown</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1235'><br/></div><div class='line' id='LC1236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">expectedThrown</span> <span class="o">=</span> <span class="nx">name</span> <span class="o">?</span> <span class="nx">name</span> <span class="o">:</span> <span class="nx">desiredError</span> <span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">desiredError</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;an error&#39;</span><span class="p">;</span></div><div class='line' id='LC1237'><br/></div><div class='line' id='LC1238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">thrown</span> <span class="o">===</span> <span class="kc">true</span></div><div class='line' id='LC1240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to throw &#39;</span> <span class="o">+</span> <span class="nx">expectedThrown</span></div><div class='line' id='LC1241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not throw &#39;</span> <span class="o">+</span> <span class="nx">expectedThrown</span></div><div class='line' id='LC1242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1244'><br/></div><div class='line' id='LC1245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;throw&#39;</span><span class="p">,</span> <span class="nx">assertThrows</span><span class="p">);</span></div><div class='line' id='LC1246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;throws&#39;</span><span class="p">,</span> <span class="nx">assertThrows</span><span class="p">);</span></div><div class='line' id='LC1247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;Throw&#39;</span><span class="p">,</span> <span class="nx">assertThrows</span><span class="p">);</span></div><div class='line' id='LC1248'><br/></div><div class='line' id='LC1249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1250'><span class="cm">       * ### .respondTo(method)</span></div><div class='line' id='LC1251'><span class="cm">       *</span></div><div class='line' id='LC1252'><span class="cm">       * Asserts that the object or class target will respond to a method.</span></div><div class='line' id='LC1253'><span class="cm">       *</span></div><div class='line' id='LC1254'><span class="cm">       *     Klass.prototype.bar = function(){};</span></div><div class='line' id='LC1255'><span class="cm">       *     expect(Klass).to.respondTo(&#39;bar&#39;);</span></div><div class='line' id='LC1256'><span class="cm">       *     expect(obj).to.respondTo(&#39;bar&#39;);</span></div><div class='line' id='LC1257'><span class="cm">       *</span></div><div class='line' id='LC1258'><span class="cm">       * To check if a constructor will respond to a static function,</span></div><div class='line' id='LC1259'><span class="cm">       * set the `itself` flag.</span></div><div class='line' id='LC1260'><span class="cm">       *</span></div><div class='line' id='LC1261'><span class="cm">       *    Klass.baz = function(){};</span></div><div class='line' id='LC1262'><span class="cm">       *    expect(Klass).itself.to.respondTo(&#39;baz&#39;);</span></div><div class='line' id='LC1263'><span class="cm">       *</span></div><div class='line' id='LC1264'><span class="cm">       * @name respondTo</span></div><div class='line' id='LC1265'><span class="cm">       * @param {String} method</span></div><div class='line' id='LC1266'><span class="cm">       * @api public</span></div><div class='line' id='LC1267'><span class="cm">       */</span></div><div class='line' id='LC1268'><br/></div><div class='line' id='LC1269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;respondTo&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC1271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">itself</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;itself&#39;</span><span class="p">)</span></div><div class='line' id='LC1272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">context</span> <span class="o">=</span> <span class="p">(</span><span class="s1">&#39;function&#39;</span> <span class="o">===</span> <span class="k">typeof</span> <span class="nx">obj</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">itself</span><span class="p">)</span></div><div class='line' id='LC1273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">prototype</span><span class="p">[</span><span class="nx">method</span><span class="p">]</span></div><div class='line' id='LC1274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">method</span><span class="p">];</span></div><div class='line' id='LC1275'><br/></div><div class='line' id='LC1276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;function&#39;</span> <span class="o">===</span> <span class="k">typeof</span> <span class="nx">context</span></div><div class='line' id='LC1278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to respond to &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span></div><div class='line' id='LC1279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not respond to &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span></div><div class='line' id='LC1280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1282'><br/></div><div class='line' id='LC1283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1284'><span class="cm">       * ### .itself</span></div><div class='line' id='LC1285'><span class="cm">       *</span></div><div class='line' id='LC1286'><span class="cm">       * Sets the `itself` flag, later used by the `respondTo` assertion.</span></div><div class='line' id='LC1287'><span class="cm">       *</span></div><div class='line' id='LC1288'><span class="cm">       *    function Foo() {}</span></div><div class='line' id='LC1289'><span class="cm">       *    Foo.bar = function() {}</span></div><div class='line' id='LC1290'><span class="cm">       *    Foo.prototype.baz = function() {}</span></div><div class='line' id='LC1291'><span class="cm">       *</span></div><div class='line' id='LC1292'><span class="cm">       *    expect(Foo).itself.to.respondTo(&#39;bar&#39;);</span></div><div class='line' id='LC1293'><span class="cm">       *    expect(Foo).itself.not.to.respondTo(&#39;baz&#39;);</span></div><div class='line' id='LC1294'><span class="cm">       *</span></div><div class='line' id='LC1295'><span class="cm">       * @name itself</span></div><div class='line' id='LC1296'><span class="cm">       * @api public</span></div><div class='line' id='LC1297'><span class="cm">       */</span></div><div class='line' id='LC1298'><br/></div><div class='line' id='LC1299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addProperty</span><span class="p">(</span><span class="s1">&#39;itself&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;itself&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC1301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1302'><br/></div><div class='line' id='LC1303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1304'><span class="cm">       * ### .satisfy(method)</span></div><div class='line' id='LC1305'><span class="cm">       *</span></div><div class='line' id='LC1306'><span class="cm">       * Asserts that the target passes a given truth test.</span></div><div class='line' id='LC1307'><span class="cm">       *</span></div><div class='line' id='LC1308'><span class="cm">       *     expect(1).to.satisfy(function(num) { return num &gt; 0; });</span></div><div class='line' id='LC1309'><span class="cm">       *</span></div><div class='line' id='LC1310'><span class="cm">       * @name satisfy</span></div><div class='line' id='LC1311'><span class="cm">       * @param {Function} matcher</span></div><div class='line' id='LC1312'><span class="cm">       * @api public</span></div><div class='line' id='LC1313'><span class="cm">       */</span></div><div class='line' id='LC1314'><br/></div><div class='line' id='LC1315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;satisfy&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">matcher</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC1317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">matcher</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span></div><div class='line' id='LC1319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to satisfy &#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">matcher</span><span class="p">)</span></div><div class='line' id='LC1320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not satisfy&#39;</span> <span class="o">+</span> <span class="nx">_</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">matcher</span><span class="p">)</span></div><div class='line' id='LC1321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">negate</span> <span class="o">?</span> <span class="kc">false</span> <span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC1322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">matcher</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span></div><div class='line' id='LC1323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1325'><br/></div><div class='line' id='LC1326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1327'><span class="cm">       * ### .closeTo(expected, delta)</span></div><div class='line' id='LC1328'><span class="cm">       *</span></div><div class='line' id='LC1329'><span class="cm">       * Asserts that the target is equal `expected`, to within a +/- `delta` range.</span></div><div class='line' id='LC1330'><span class="cm">       *</span></div><div class='line' id='LC1331'><span class="cm">       *     expect(1.5).to.be.closeTo(1, 0.5);</span></div><div class='line' id='LC1332'><span class="cm">       *</span></div><div class='line' id='LC1333'><span class="cm">       * @name closeTo</span></div><div class='line' id='LC1334'><span class="cm">       * @param {Number} expected</span></div><div class='line' id='LC1335'><span class="cm">       * @param {Number} delta</span></div><div class='line' id='LC1336'><span class="cm">       * @api public</span></div><div class='line' id='LC1337'><span class="cm">       */</span></div><div class='line' id='LC1338'><br/></div><div class='line' id='LC1339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">Assertion</span><span class="p">.</span><span class="nx">addMethod</span><span class="p">(</span><span class="s1">&#39;closeTo&#39;</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">expected</span><span class="p">,</span> <span class="nx">delta</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC1341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Math</span><span class="p">.</span><span class="nx">abs</span><span class="p">(</span><span class="nx">obj</span> <span class="o">-</span> <span class="nx">expected</span><span class="p">)</span> <span class="o">&lt;=</span> <span class="nx">delta</span></div><div class='line' id='LC1343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to be close to &#39;</span> <span class="o">+</span> <span class="nx">expected</span> <span class="o">+</span> <span class="s1">&#39; +/- &#39;</span> <span class="o">+</span> <span class="nx">delta</span></div><div class='line' id='LC1344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} not to be close to &#39;</span> <span class="o">+</span> <span class="nx">expected</span> <span class="o">+</span> <span class="s1">&#39; +/- &#39;</span> <span class="o">+</span> <span class="nx">delta</span></div><div class='line' id='LC1345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1347'><br/></div><div class='line' id='LC1348'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1349'><br/></div><div class='line' id='LC1350'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/core/assertions.js</span></div><div class='line' id='LC1351'><br/></div><div class='line' id='LC1352'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/interface/assert.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC1353'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC1354'><span class="cm">     * chai</span></div><div class='line' id='LC1355'><span class="cm">     * Copyright(c) 2011-2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC1356'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC1357'><span class="cm">     */</span></div><div class='line' id='LC1358'><br/></div><div class='line' id='LC1359'><br/></div><div class='line' id='LC1360'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">chai</span><span class="p">,</span> <span class="nx">util</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1361'><br/></div><div class='line' id='LC1362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC1363'><span class="cm">       * Chai dependencies.</span></div><div class='line' id='LC1364'><span class="cm">       */</span></div><div class='line' id='LC1365'><br/></div><div class='line' id='LC1366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Assertion</span> <span class="o">=</span> <span class="nx">chai</span><span class="p">.</span><span class="nx">Assertion</span></div><div class='line' id='LC1367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">flag</span> <span class="o">=</span> <span class="nx">util</span><span class="p">.</span><span class="nx">flag</span><span class="p">;</span></div><div class='line' id='LC1368'><br/></div><div class='line' id='LC1369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC1370'><span class="cm">       * Module export.</span></div><div class='line' id='LC1371'><span class="cm">       */</span></div><div class='line' id='LC1372'><br/></div><div class='line' id='LC1373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1374'><span class="cm">       * ### assert(expression, message)</span></div><div class='line' id='LC1375'><span class="cm">       *</span></div><div class='line' id='LC1376'><span class="cm">       * Write your own test expressions.</span></div><div class='line' id='LC1377'><span class="cm">       *</span></div><div class='line' id='LC1378'><span class="cm">       *     assert(&#39;foo&#39; !== &#39;bar&#39;, &#39;foo is not bar&#39;);</span></div><div class='line' id='LC1379'><span class="cm">       *     assert(Array.isArray([]), &#39;empty arrays are arrays&#39;);</span></div><div class='line' id='LC1380'><span class="cm">       *</span></div><div class='line' id='LC1381'><span class="cm">       * @param {Mixed} expression to test for truthiness</span></div><div class='line' id='LC1382'><span class="cm">       * @param {String} message to display on error</span></div><div class='line' id='LC1383'><span class="cm">       * @name assert</span></div><div class='line' id='LC1384'><span class="cm">       * @api public</span></div><div class='line' id='LC1385'><span class="cm">       */</span></div><div class='line' id='LC1386'><br/></div><div class='line' id='LC1387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">assert</span> <span class="o">=</span> <span class="nx">chai</span><span class="p">.</span><span class="nx">assert</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">express</span><span class="p">,</span> <span class="nx">errmsg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">test</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC1389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">test</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">express</span></div><div class='line' id='LC1391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">errmsg</span></div><div class='line' id='LC1392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;[ negation message unavailable ]&#39;</span></div><div class='line' id='LC1393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1395'><br/></div><div class='line' id='LC1396'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1397'><span class="cm">       * ### .fail(actual, expected, [message], [operator])</span></div><div class='line' id='LC1398'><span class="cm">       *</span></div><div class='line' id='LC1399'><span class="cm">       * Throw a failure. Node.js `assert` module-compatible.</span></div><div class='line' id='LC1400'><span class="cm">       *</span></div><div class='line' id='LC1401'><span class="cm">       * @name fail</span></div><div class='line' id='LC1402'><span class="cm">       * @param {Mixed} actual</span></div><div class='line' id='LC1403'><span class="cm">       * @param {Mixed} expected</span></div><div class='line' id='LC1404'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1405'><span class="cm">       * @param {String} operator</span></div><div class='line' id='LC1406'><span class="cm">       * @api public</span></div><div class='line' id='LC1407'><span class="cm">       */</span></div><div class='line' id='LC1408'><br/></div><div class='line' id='LC1409'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">fail</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">actual</span><span class="p">,</span> <span class="nx">expected</span><span class="p">,</span> <span class="nx">message</span><span class="p">,</span> <span class="nx">operator</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nx">chai</span><span class="p">.</span><span class="nx">AssertionError</span><span class="p">({</span></div><div class='line' id='LC1411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">actual</span><span class="o">:</span> <span class="nx">actual</span></div><div class='line' id='LC1412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">expected</span><span class="o">:</span> <span class="nx">expected</span></div><div class='line' id='LC1413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">message</span><span class="o">:</span> <span class="nx">message</span></div><div class='line' id='LC1414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">operator</span><span class="o">:</span> <span class="nx">operator</span></div><div class='line' id='LC1415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">stackStartFunction</span><span class="o">:</span> <span class="nx">assert</span><span class="p">.</span><span class="nx">fail</span></div><div class='line' id='LC1416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1417'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1418'><br/></div><div class='line' id='LC1419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1420'><span class="cm">       * ### .ok(object, [message])</span></div><div class='line' id='LC1421'><span class="cm">       *</span></div><div class='line' id='LC1422'><span class="cm">       * Asserts that `object` is truthy.</span></div><div class='line' id='LC1423'><span class="cm">       *</span></div><div class='line' id='LC1424'><span class="cm">       *     assert.ok(&#39;everything&#39;, &#39;everything is ok&#39;);</span></div><div class='line' id='LC1425'><span class="cm">       *     assert.ok(false, &#39;this will fail&#39;);</span></div><div class='line' id='LC1426'><span class="cm">       *</span></div><div class='line' id='LC1427'><span class="cm">       * @name ok</span></div><div class='line' id='LC1428'><span class="cm">       * @param {Mixed} object to test</span></div><div class='line' id='LC1429'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1430'><span class="cm">       * @api public</span></div><div class='line' id='LC1431'><span class="cm">       */</span></div><div class='line' id='LC1432'><br/></div><div class='line' id='LC1433'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">ok</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1434'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">is</span><span class="p">.</span><span class="nx">ok</span><span class="p">;</span></div><div class='line' id='LC1435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1436'><br/></div><div class='line' id='LC1437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1438'><span class="cm">       * ### .equal(actual, expected, [message])</span></div><div class='line' id='LC1439'><span class="cm">       *</span></div><div class='line' id='LC1440'><span class="cm">       * Asserts non-strict equality (`==`) of `actual` and `expected`.</span></div><div class='line' id='LC1441'><span class="cm">       *</span></div><div class='line' id='LC1442'><span class="cm">       *     assert.equal(3, &#39;3&#39;, &#39;== coerces values to strings&#39;);</span></div><div class='line' id='LC1443'><span class="cm">       *</span></div><div class='line' id='LC1444'><span class="cm">       * @name equal</span></div><div class='line' id='LC1445'><span class="cm">       * @param {Mixed} actual</span></div><div class='line' id='LC1446'><span class="cm">       * @param {Mixed} expected</span></div><div class='line' id='LC1447'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1448'><span class="cm">       * @api public</span></div><div class='line' id='LC1449'><span class="cm">       */</span></div><div class='line' id='LC1450'><br/></div><div class='line' id='LC1451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">equal</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">exp</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">test</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">msg</span><span class="p">);</span></div><div class='line' id='LC1453'><br/></div><div class='line' id='LC1454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">test</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1455'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exp</span> <span class="o">==</span> <span class="nx">flag</span><span class="p">(</span><span class="nx">test</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC1456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to equal #{exp}&#39;</span></div><div class='line' id='LC1457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not equal #{act}&#39;</span></div><div class='line' id='LC1458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">exp</span></div><div class='line' id='LC1459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">act</span></div><div class='line' id='LC1460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1462'><br/></div><div class='line' id='LC1463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1464'><span class="cm">       * ### .notEqual(actual, expected, [message])</span></div><div class='line' id='LC1465'><span class="cm">       *</span></div><div class='line' id='LC1466'><span class="cm">       * Asserts non-strict inequality (`!=`) of `actual` and `expected`.</span></div><div class='line' id='LC1467'><span class="cm">       *</span></div><div class='line' id='LC1468'><span class="cm">       *     assert.notEqual(3, 4, &#39;these numbers are not equal&#39;);</span></div><div class='line' id='LC1469'><span class="cm">       *</span></div><div class='line' id='LC1470'><span class="cm">       * @name notEqual</span></div><div class='line' id='LC1471'><span class="cm">       * @param {Mixed} actual</span></div><div class='line' id='LC1472'><span class="cm">       * @param {Mixed} expected</span></div><div class='line' id='LC1473'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1474'><span class="cm">       * @api public</span></div><div class='line' id='LC1475'><span class="cm">       */</span></div><div class='line' id='LC1476'><br/></div><div class='line' id='LC1477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">notEqual</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">exp</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">test</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">msg</span><span class="p">);</span></div><div class='line' id='LC1479'><br/></div><div class='line' id='LC1480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">test</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC1481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exp</span> <span class="o">!=</span> <span class="nx">flag</span><span class="p">(</span><span class="nx">test</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC1482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to not equal #{exp}&#39;</span></div><div class='line' id='LC1483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected #{this} to equal #{act}&#39;</span></div><div class='line' id='LC1484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">exp</span></div><div class='line' id='LC1485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">act</span></div><div class='line' id='LC1486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC1487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1488'><br/></div><div class='line' id='LC1489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1490'><span class="cm">       * ### .strictEqual(actual, expected, [message])</span></div><div class='line' id='LC1491'><span class="cm">       *</span></div><div class='line' id='LC1492'><span class="cm">       * Asserts strict equality (`===`) of `actual` and `expected`.</span></div><div class='line' id='LC1493'><span class="cm">       *</span></div><div class='line' id='LC1494'><span class="cm">       *     assert.strictEqual(true, true, &#39;these booleans are strictly equal&#39;);</span></div><div class='line' id='LC1495'><span class="cm">       *</span></div><div class='line' id='LC1496'><span class="cm">       * @name strictEqual</span></div><div class='line' id='LC1497'><span class="cm">       * @param {Mixed} actual</span></div><div class='line' id='LC1498'><span class="cm">       * @param {Mixed} expected</span></div><div class='line' id='LC1499'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1500'><span class="cm">       * @api public</span></div><div class='line' id='LC1501'><span class="cm">       */</span></div><div class='line' id='LC1502'><br/></div><div class='line' id='LC1503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">strictEqual</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">exp</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1504'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">equal</span><span class="p">(</span><span class="nx">exp</span><span class="p">);</span></div><div class='line' id='LC1505'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1506'><br/></div><div class='line' id='LC1507'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1508'><span class="cm">       * ### .notStrictEqual(actual, expected, [message])</span></div><div class='line' id='LC1509'><span class="cm">       *</span></div><div class='line' id='LC1510'><span class="cm">       * Asserts strict inequality (`!==`) of `actual` and `expected`.</span></div><div class='line' id='LC1511'><span class="cm">       *</span></div><div class='line' id='LC1512'><span class="cm">       *     assert.notStrictEqual(3, &#39;3&#39;, &#39;no coercion for strict equality&#39;);</span></div><div class='line' id='LC1513'><span class="cm">       *</span></div><div class='line' id='LC1514'><span class="cm">       * @name notStrictEqual</span></div><div class='line' id='LC1515'><span class="cm">       * @param {Mixed} actual</span></div><div class='line' id='LC1516'><span class="cm">       * @param {Mixed} expected</span></div><div class='line' id='LC1517'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1518'><span class="cm">       * @api public</span></div><div class='line' id='LC1519'><span class="cm">       */</span></div><div class='line' id='LC1520'><br/></div><div class='line' id='LC1521'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">notStrictEqual</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">exp</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">equal</span><span class="p">(</span><span class="nx">exp</span><span class="p">);</span></div><div class='line' id='LC1523'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1524'><br/></div><div class='line' id='LC1525'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1526'><span class="cm">       * ### .deepEqual(actual, expected, [message])</span></div><div class='line' id='LC1527'><span class="cm">       *</span></div><div class='line' id='LC1528'><span class="cm">       * Asserts that `actual` is deeply equal to `expected`.</span></div><div class='line' id='LC1529'><span class="cm">       *</span></div><div class='line' id='LC1530'><span class="cm">       *     assert.deepEqual({ tea: &#39;green&#39; }, { tea: &#39;green&#39; });</span></div><div class='line' id='LC1531'><span class="cm">       *</span></div><div class='line' id='LC1532'><span class="cm">       * @name deepEqual</span></div><div class='line' id='LC1533'><span class="cm">       * @param {Mixed} actual</span></div><div class='line' id='LC1534'><span class="cm">       * @param {Mixed} expected</span></div><div class='line' id='LC1535'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1536'><span class="cm">       * @api public</span></div><div class='line' id='LC1537'><span class="cm">       */</span></div><div class='line' id='LC1538'><br/></div><div class='line' id='LC1539'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">deepEqual</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">exp</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1540'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">eql</span><span class="p">(</span><span class="nx">exp</span><span class="p">);</span></div><div class='line' id='LC1541'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1542'><br/></div><div class='line' id='LC1543'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1544'><span class="cm">       * ### .notDeepEqual(actual, expected, [message])</span></div><div class='line' id='LC1545'><span class="cm">       *</span></div><div class='line' id='LC1546'><span class="cm">       * Assert that `actual` is not deeply equal to `expected`.</span></div><div class='line' id='LC1547'><span class="cm">       *</span></div><div class='line' id='LC1548'><span class="cm">       *     assert.notDeepEqual({ tea: &#39;green&#39; }, { tea: &#39;jasmine&#39; });</span></div><div class='line' id='LC1549'><span class="cm">       *</span></div><div class='line' id='LC1550'><span class="cm">       * @name notDeepEqual</span></div><div class='line' id='LC1551'><span class="cm">       * @param {Mixed} actual</span></div><div class='line' id='LC1552'><span class="cm">       * @param {Mixed} expected</span></div><div class='line' id='LC1553'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1554'><span class="cm">       * @api public</span></div><div class='line' id='LC1555'><span class="cm">       */</span></div><div class='line' id='LC1556'><br/></div><div class='line' id='LC1557'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">notDeepEqual</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">exp</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1558'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">eql</span><span class="p">(</span><span class="nx">exp</span><span class="p">);</span></div><div class='line' id='LC1559'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1560'><br/></div><div class='line' id='LC1561'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1562'><span class="cm">       * ### .isTrue(value, [message])</span></div><div class='line' id='LC1563'><span class="cm">       *</span></div><div class='line' id='LC1564'><span class="cm">       * Asserts that `value` is true.</span></div><div class='line' id='LC1565'><span class="cm">       *</span></div><div class='line' id='LC1566'><span class="cm">       *     var teaServed = true;</span></div><div class='line' id='LC1567'><span class="cm">       *     assert.isTrue(teaServed, &#39;the tea has been served&#39;);</span></div><div class='line' id='LC1568'><span class="cm">       *</span></div><div class='line' id='LC1569'><span class="cm">       * @name isTrue</span></div><div class='line' id='LC1570'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1571'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1572'><span class="cm">       * @api public</span></div><div class='line' id='LC1573'><span class="cm">       */</span></div><div class='line' id='LC1574'><br/></div><div class='line' id='LC1575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isTrue</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">is</span><span class="p">[</span><span class="s1">&#39;true&#39;</span><span class="p">];</span></div><div class='line' id='LC1577'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1578'><br/></div><div class='line' id='LC1579'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1580'><span class="cm">       * ### .isFalse(value, [message])</span></div><div class='line' id='LC1581'><span class="cm">       *</span></div><div class='line' id='LC1582'><span class="cm">       * Asserts that `value` is false.</span></div><div class='line' id='LC1583'><span class="cm">       *</span></div><div class='line' id='LC1584'><span class="cm">       *     var teaServed = false;</span></div><div class='line' id='LC1585'><span class="cm">       *     assert.isFalse(teaServed, &#39;no tea yet? hmm...&#39;);</span></div><div class='line' id='LC1586'><span class="cm">       *</span></div><div class='line' id='LC1587'><span class="cm">       * @name isFalse</span></div><div class='line' id='LC1588'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1589'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1590'><span class="cm">       * @api public</span></div><div class='line' id='LC1591'><span class="cm">       */</span></div><div class='line' id='LC1592'><br/></div><div class='line' id='LC1593'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isFalse</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1594'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">is</span><span class="p">[</span><span class="s1">&#39;false&#39;</span><span class="p">];</span></div><div class='line' id='LC1595'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1596'><br/></div><div class='line' id='LC1597'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1598'><span class="cm">       * ### .isNull(value, [message])</span></div><div class='line' id='LC1599'><span class="cm">       *</span></div><div class='line' id='LC1600'><span class="cm">       * Asserts that `value` is null.</span></div><div class='line' id='LC1601'><span class="cm">       *</span></div><div class='line' id='LC1602'><span class="cm">       *     assert.isNull(err, &#39;there was no error&#39;);</span></div><div class='line' id='LC1603'><span class="cm">       *</span></div><div class='line' id='LC1604'><span class="cm">       * @name isNull</span></div><div class='line' id='LC1605'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1606'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1607'><span class="cm">       * @api public</span></div><div class='line' id='LC1608'><span class="cm">       */</span></div><div class='line' id='LC1609'><br/></div><div class='line' id='LC1610'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isNull</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1611'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">equal</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC1612'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1613'><br/></div><div class='line' id='LC1614'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1615'><span class="cm">       * ### .isNotNull(value, [message])</span></div><div class='line' id='LC1616'><span class="cm">       *</span></div><div class='line' id='LC1617'><span class="cm">       * Asserts that `value` is not null.</span></div><div class='line' id='LC1618'><span class="cm">       *</span></div><div class='line' id='LC1619'><span class="cm">       *     var tea = &#39;tasty chai&#39;;</span></div><div class='line' id='LC1620'><span class="cm">       *     assert.isNotNull(tea, &#39;great, time for tea!&#39;);</span></div><div class='line' id='LC1621'><span class="cm">       *</span></div><div class='line' id='LC1622'><span class="cm">       * @name isNotNull</span></div><div class='line' id='LC1623'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1624'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1625'><span class="cm">       * @api public</span></div><div class='line' id='LC1626'><span class="cm">       */</span></div><div class='line' id='LC1627'><br/></div><div class='line' id='LC1628'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isNotNull</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1629'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">equal</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC1630'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1631'><br/></div><div class='line' id='LC1632'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1633'><span class="cm">       * ### .isUndefined(value, [message])</span></div><div class='line' id='LC1634'><span class="cm">       *</span></div><div class='line' id='LC1635'><span class="cm">       * Asserts that `value` is `undefined`.</span></div><div class='line' id='LC1636'><span class="cm">       *</span></div><div class='line' id='LC1637'><span class="cm">       *     var tea;</span></div><div class='line' id='LC1638'><span class="cm">       *     assert.isUndefined(tea, &#39;no tea defined&#39;);</span></div><div class='line' id='LC1639'><span class="cm">       *</span></div><div class='line' id='LC1640'><span class="cm">       * @name isUndefined</span></div><div class='line' id='LC1641'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1642'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1643'><span class="cm">       * @api public</span></div><div class='line' id='LC1644'><span class="cm">       */</span></div><div class='line' id='LC1645'><br/></div><div class='line' id='LC1646'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isUndefined</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1647'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">equal</span><span class="p">(</span><span class="kc">undefined</span><span class="p">);</span></div><div class='line' id='LC1648'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1649'><br/></div><div class='line' id='LC1650'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1651'><span class="cm">       * ### .isDefined(value, [message])</span></div><div class='line' id='LC1652'><span class="cm">       *</span></div><div class='line' id='LC1653'><span class="cm">       * Asserts that `value` is not `undefined`.</span></div><div class='line' id='LC1654'><span class="cm">       *</span></div><div class='line' id='LC1655'><span class="cm">       *     var tea = &#39;cup of chai&#39;;</span></div><div class='line' id='LC1656'><span class="cm">       *     assert.isDefined(tea, &#39;tea has been defined&#39;);</span></div><div class='line' id='LC1657'><span class="cm">       *</span></div><div class='line' id='LC1658'><span class="cm">       * @name isUndefined</span></div><div class='line' id='LC1659'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1660'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1661'><span class="cm">       * @api public</span></div><div class='line' id='LC1662'><span class="cm">       */</span></div><div class='line' id='LC1663'><br/></div><div class='line' id='LC1664'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isDefined</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1665'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">equal</span><span class="p">(</span><span class="kc">undefined</span><span class="p">);</span></div><div class='line' id='LC1666'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1667'><br/></div><div class='line' id='LC1668'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1669'><span class="cm">       * ### .isFunction(value, [message])</span></div><div class='line' id='LC1670'><span class="cm">       *</span></div><div class='line' id='LC1671'><span class="cm">       * Asserts that `value` is a function.</span></div><div class='line' id='LC1672'><span class="cm">       *</span></div><div class='line' id='LC1673'><span class="cm">       *     function serveTea() { return &#39;cup of tea&#39;; };</span></div><div class='line' id='LC1674'><span class="cm">       *     assert.isFunction(serveTea, &#39;great, we can have tea now&#39;);</span></div><div class='line' id='LC1675'><span class="cm">       *</span></div><div class='line' id='LC1676'><span class="cm">       * @name isFunction</span></div><div class='line' id='LC1677'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1678'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1679'><span class="cm">       * @api public</span></div><div class='line' id='LC1680'><span class="cm">       */</span></div><div class='line' id='LC1681'><br/></div><div class='line' id='LC1682'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isFunction</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1683'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;function&#39;</span><span class="p">);</span></div><div class='line' id='LC1684'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1685'><br/></div><div class='line' id='LC1686'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1687'><span class="cm">       * ### .isNotFunction(value, [message])</span></div><div class='line' id='LC1688'><span class="cm">       *</span></div><div class='line' id='LC1689'><span class="cm">       * Asserts that `value` is _not_ a function.</span></div><div class='line' id='LC1690'><span class="cm">       *</span></div><div class='line' id='LC1691'><span class="cm">       *     var serveTea = [ &#39;heat&#39;, &#39;pour&#39;, &#39;sip&#39; ];</span></div><div class='line' id='LC1692'><span class="cm">       *     assert.isNotFunction(serveTea, &#39;great, we have listed the steps&#39;);</span></div><div class='line' id='LC1693'><span class="cm">       *</span></div><div class='line' id='LC1694'><span class="cm">       * @name isNotFunction</span></div><div class='line' id='LC1695'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1696'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1697'><span class="cm">       * @api public</span></div><div class='line' id='LC1698'><span class="cm">       */</span></div><div class='line' id='LC1699'><br/></div><div class='line' id='LC1700'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isNotFunction</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1701'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;function&#39;</span><span class="p">);</span></div><div class='line' id='LC1702'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1703'><br/></div><div class='line' id='LC1704'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1705'><span class="cm">       * ### .isObject(value, [message])</span></div><div class='line' id='LC1706'><span class="cm">       *</span></div><div class='line' id='LC1707'><span class="cm">       * Asserts that `value` is an object (as revealed by</span></div><div class='line' id='LC1708'><span class="cm">       * `Object.prototype.toString`).</span></div><div class='line' id='LC1709'><span class="cm">       *</span></div><div class='line' id='LC1710'><span class="cm">       *     var selection = { name: &#39;Chai&#39;, serve: &#39;with spices&#39; };</span></div><div class='line' id='LC1711'><span class="cm">       *     assert.isObject(selection, &#39;tea selection is an object&#39;);</span></div><div class='line' id='LC1712'><span class="cm">       *</span></div><div class='line' id='LC1713'><span class="cm">       * @name isObject</span></div><div class='line' id='LC1714'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1715'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1716'><span class="cm">       * @api public</span></div><div class='line' id='LC1717'><span class="cm">       */</span></div><div class='line' id='LC1718'><br/></div><div class='line' id='LC1719'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isObject</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1720'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC1721'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1722'><br/></div><div class='line' id='LC1723'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1724'><span class="cm">       * ### .isNotObject(value, [message])</span></div><div class='line' id='LC1725'><span class="cm">       *</span></div><div class='line' id='LC1726'><span class="cm">       * Asserts that `value` is _not_ an object.</span></div><div class='line' id='LC1727'><span class="cm">       *</span></div><div class='line' id='LC1728'><span class="cm">       *     var selection = &#39;chai&#39;</span></div><div class='line' id='LC1729'><span class="cm">       *     assert.isObject(selection, &#39;tea selection is not an object&#39;);</span></div><div class='line' id='LC1730'><span class="cm">       *     assert.isObject(null, &#39;null is not an object&#39;);</span></div><div class='line' id='LC1731'><span class="cm">       *</span></div><div class='line' id='LC1732'><span class="cm">       * @name isNotObject</span></div><div class='line' id='LC1733'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1734'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1735'><span class="cm">       * @api public</span></div><div class='line' id='LC1736'><span class="cm">       */</span></div><div class='line' id='LC1737'><br/></div><div class='line' id='LC1738'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isNotObject</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1739'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;object&#39;</span><span class="p">);</span></div><div class='line' id='LC1740'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1741'><br/></div><div class='line' id='LC1742'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1743'><span class="cm">       * ### .isArray(value, [message])</span></div><div class='line' id='LC1744'><span class="cm">       *</span></div><div class='line' id='LC1745'><span class="cm">       * Asserts that `value` is an array.</span></div><div class='line' id='LC1746'><span class="cm">       *</span></div><div class='line' id='LC1747'><span class="cm">       *     var menu = [ &#39;green&#39;, &#39;chai&#39;, &#39;oolong&#39; ];</span></div><div class='line' id='LC1748'><span class="cm">       *     assert.isArray(menu, &#39;what kind of tea do we want?&#39;);</span></div><div class='line' id='LC1749'><span class="cm">       *</span></div><div class='line' id='LC1750'><span class="cm">       * @name isArray</span></div><div class='line' id='LC1751'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1752'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1753'><span class="cm">       * @api public</span></div><div class='line' id='LC1754'><span class="cm">       */</span></div><div class='line' id='LC1755'><br/></div><div class='line' id='LC1756'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isArray</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1757'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">an</span><span class="p">(</span><span class="s1">&#39;array&#39;</span><span class="p">);</span></div><div class='line' id='LC1758'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1759'><br/></div><div class='line' id='LC1760'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1761'><span class="cm">       * ### .isNotArray(value, [message])</span></div><div class='line' id='LC1762'><span class="cm">       *</span></div><div class='line' id='LC1763'><span class="cm">       * Asserts that `value` is _not_ an array.</span></div><div class='line' id='LC1764'><span class="cm">       *</span></div><div class='line' id='LC1765'><span class="cm">       *     var menu = &#39;green|chai|oolong&#39;;</span></div><div class='line' id='LC1766'><span class="cm">       *     assert.isNotArray(menu, &#39;what kind of tea do we want?&#39;);</span></div><div class='line' id='LC1767'><span class="cm">       *</span></div><div class='line' id='LC1768'><span class="cm">       * @name isNotArray</span></div><div class='line' id='LC1769'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1770'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1771'><span class="cm">       * @api public</span></div><div class='line' id='LC1772'><span class="cm">       */</span></div><div class='line' id='LC1773'><br/></div><div class='line' id='LC1774'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isNotArray</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1775'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">an</span><span class="p">(</span><span class="s1">&#39;array&#39;</span><span class="p">);</span></div><div class='line' id='LC1776'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1777'><br/></div><div class='line' id='LC1778'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1779'><span class="cm">       * ### .isString(value, [message])</span></div><div class='line' id='LC1780'><span class="cm">       *</span></div><div class='line' id='LC1781'><span class="cm">       * Asserts that `value` is a string.</span></div><div class='line' id='LC1782'><span class="cm">       *</span></div><div class='line' id='LC1783'><span class="cm">       *     var teaOrder = &#39;chai&#39;;</span></div><div class='line' id='LC1784'><span class="cm">       *     assert.isString(teaOrder, &#39;order placed&#39;);</span></div><div class='line' id='LC1785'><span class="cm">       *</span></div><div class='line' id='LC1786'><span class="cm">       * @name isString</span></div><div class='line' id='LC1787'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1788'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1789'><span class="cm">       * @api public</span></div><div class='line' id='LC1790'><span class="cm">       */</span></div><div class='line' id='LC1791'><br/></div><div class='line' id='LC1792'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isString</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1793'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;string&#39;</span><span class="p">);</span></div><div class='line' id='LC1794'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1795'><br/></div><div class='line' id='LC1796'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1797'><span class="cm">       * ### .isNotString(value, [message])</span></div><div class='line' id='LC1798'><span class="cm">       *</span></div><div class='line' id='LC1799'><span class="cm">       * Asserts that `value` is _not_ a string.</span></div><div class='line' id='LC1800'><span class="cm">       *</span></div><div class='line' id='LC1801'><span class="cm">       *     var teaOrder = 4;</span></div><div class='line' id='LC1802'><span class="cm">       *     assert.isNotString(teaOrder, &#39;order placed&#39;);</span></div><div class='line' id='LC1803'><span class="cm">       *</span></div><div class='line' id='LC1804'><span class="cm">       * @name isNotString</span></div><div class='line' id='LC1805'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1806'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1807'><span class="cm">       * @api public</span></div><div class='line' id='LC1808'><span class="cm">       */</span></div><div class='line' id='LC1809'><br/></div><div class='line' id='LC1810'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isNotString</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1811'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;string&#39;</span><span class="p">);</span></div><div class='line' id='LC1812'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1813'><br/></div><div class='line' id='LC1814'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1815'><span class="cm">       * ### .isNumber(value, [message])</span></div><div class='line' id='LC1816'><span class="cm">       *</span></div><div class='line' id='LC1817'><span class="cm">       * Asserts that `value` is a number.</span></div><div class='line' id='LC1818'><span class="cm">       *</span></div><div class='line' id='LC1819'><span class="cm">       *     var cups = 2;</span></div><div class='line' id='LC1820'><span class="cm">       *     assert.isNumber(cups, &#39;how many cups&#39;);</span></div><div class='line' id='LC1821'><span class="cm">       *</span></div><div class='line' id='LC1822'><span class="cm">       * @name isNumber</span></div><div class='line' id='LC1823'><span class="cm">       * @param {Number} value</span></div><div class='line' id='LC1824'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1825'><span class="cm">       * @api public</span></div><div class='line' id='LC1826'><span class="cm">       */</span></div><div class='line' id='LC1827'><br/></div><div class='line' id='LC1828'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isNumber</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1829'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;number&#39;</span><span class="p">);</span></div><div class='line' id='LC1830'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1831'><br/></div><div class='line' id='LC1832'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1833'><span class="cm">       * ### .isNotNumber(value, [message])</span></div><div class='line' id='LC1834'><span class="cm">       *</span></div><div class='line' id='LC1835'><span class="cm">       * Asserts that `value` is _not_ a number.</span></div><div class='line' id='LC1836'><span class="cm">       *</span></div><div class='line' id='LC1837'><span class="cm">       *     var cups = &#39;2 cups please&#39;;</span></div><div class='line' id='LC1838'><span class="cm">       *     assert.isNotNumber(cups, &#39;how many cups&#39;);</span></div><div class='line' id='LC1839'><span class="cm">       *</span></div><div class='line' id='LC1840'><span class="cm">       * @name isNotNumber</span></div><div class='line' id='LC1841'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1842'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1843'><span class="cm">       * @api public</span></div><div class='line' id='LC1844'><span class="cm">       */</span></div><div class='line' id='LC1845'><br/></div><div class='line' id='LC1846'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isNotNumber</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1847'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;number&#39;</span><span class="p">);</span></div><div class='line' id='LC1848'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1849'><br/></div><div class='line' id='LC1850'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1851'><span class="cm">       * ### .isBoolean(value, [message])</span></div><div class='line' id='LC1852'><span class="cm">       *</span></div><div class='line' id='LC1853'><span class="cm">       * Asserts that `value` is a boolean.</span></div><div class='line' id='LC1854'><span class="cm">       *</span></div><div class='line' id='LC1855'><span class="cm">       *     var teaReady = true</span></div><div class='line' id='LC1856'><span class="cm">       *       , teaServed = false;</span></div><div class='line' id='LC1857'><span class="cm">       *</span></div><div class='line' id='LC1858'><span class="cm">       *     assert.isBoolean(teaReady, &#39;is the tea ready&#39;);</span></div><div class='line' id='LC1859'><span class="cm">       *     assert.isBoolean(teaServed, &#39;has tea been served&#39;);</span></div><div class='line' id='LC1860'><span class="cm">       *</span></div><div class='line' id='LC1861'><span class="cm">       * @name isBoolean</span></div><div class='line' id='LC1862'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1863'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1864'><span class="cm">       * @api public</span></div><div class='line' id='LC1865'><span class="cm">       */</span></div><div class='line' id='LC1866'><br/></div><div class='line' id='LC1867'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isBoolean</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1868'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;boolean&#39;</span><span class="p">);</span></div><div class='line' id='LC1869'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1870'><br/></div><div class='line' id='LC1871'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1872'><span class="cm">       * ### .isNotBoolean(value, [message])</span></div><div class='line' id='LC1873'><span class="cm">       *</span></div><div class='line' id='LC1874'><span class="cm">       * Asserts that `value` is _not_ a boolean.</span></div><div class='line' id='LC1875'><span class="cm">       *</span></div><div class='line' id='LC1876'><span class="cm">       *     var teaReady = &#39;yep&#39;</span></div><div class='line' id='LC1877'><span class="cm">       *       , teaServed = &#39;nope&#39;;</span></div><div class='line' id='LC1878'><span class="cm">       *</span></div><div class='line' id='LC1879'><span class="cm">       *     assert.isNotBoolean(teaReady, &#39;is the tea ready&#39;);</span></div><div class='line' id='LC1880'><span class="cm">       *     assert.isNotBoolean(teaServed, &#39;has tea been served&#39;);</span></div><div class='line' id='LC1881'><span class="cm">       *</span></div><div class='line' id='LC1882'><span class="cm">       * @name isNotBoolean</span></div><div class='line' id='LC1883'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1884'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1885'><span class="cm">       * @api public</span></div><div class='line' id='LC1886'><span class="cm">       */</span></div><div class='line' id='LC1887'><br/></div><div class='line' id='LC1888'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">isNotBoolean</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1889'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="s1">&#39;boolean&#39;</span><span class="p">);</span></div><div class='line' id='LC1890'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1891'><br/></div><div class='line' id='LC1892'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1893'><span class="cm">       * ### .typeOf(value, name, [message])</span></div><div class='line' id='LC1894'><span class="cm">       *</span></div><div class='line' id='LC1895'><span class="cm">       * Asserts that `value`&#39;s type is `name`, as determined by</span></div><div class='line' id='LC1896'><span class="cm">       * `Object.prototype.toString`.</span></div><div class='line' id='LC1897'><span class="cm">       *</span></div><div class='line' id='LC1898'><span class="cm">       *     assert.typeOf({ tea: &#39;chai&#39; }, &#39;object&#39;, &#39;we have an object&#39;);</span></div><div class='line' id='LC1899'><span class="cm">       *     assert.typeOf([&#39;chai&#39;, &#39;jasmine&#39;], &#39;array&#39;, &#39;we have an array&#39;);</span></div><div class='line' id='LC1900'><span class="cm">       *     assert.typeOf(&#39;tea&#39;, &#39;string&#39;, &#39;we have a string&#39;);</span></div><div class='line' id='LC1901'><span class="cm">       *     assert.typeOf(/tea/, &#39;regexp&#39;, &#39;we have a regular expression&#39;);</span></div><div class='line' id='LC1902'><span class="cm">       *     assert.typeOf(null, &#39;null&#39;, &#39;we have a null&#39;);</span></div><div class='line' id='LC1903'><span class="cm">       *     assert.typeOf(undefined, &#39;undefined&#39;, &#39;we have an undefined&#39;);</span></div><div class='line' id='LC1904'><span class="cm">       *</span></div><div class='line' id='LC1905'><span class="cm">       * @name typeOf</span></div><div class='line' id='LC1906'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1907'><span class="cm">       * @param {String} name</span></div><div class='line' id='LC1908'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1909'><span class="cm">       * @api public</span></div><div class='line' id='LC1910'><span class="cm">       */</span></div><div class='line' id='LC1911'><br/></div><div class='line' id='LC1912'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">typeOf</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1913'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC1914'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1915'><br/></div><div class='line' id='LC1916'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1917'><span class="cm">       * ### .notTypeOf(value, name, [message])</span></div><div class='line' id='LC1918'><span class="cm">       *</span></div><div class='line' id='LC1919'><span class="cm">       * Asserts that `value`&#39;s type is _not_ `name`, as determined by</span></div><div class='line' id='LC1920'><span class="cm">       * `Object.prototype.toString`.</span></div><div class='line' id='LC1921'><span class="cm">       *</span></div><div class='line' id='LC1922'><span class="cm">       *     assert.notTypeOf(&#39;tea&#39;, &#39;number&#39;, &#39;strings are not numbers&#39;);</span></div><div class='line' id='LC1923'><span class="cm">       *</span></div><div class='line' id='LC1924'><span class="cm">       * @name notTypeOf</span></div><div class='line' id='LC1925'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC1926'><span class="cm">       * @param {String} typeof name</span></div><div class='line' id='LC1927'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1928'><span class="cm">       * @api public</span></div><div class='line' id='LC1929'><span class="cm">       */</span></div><div class='line' id='LC1930'><br/></div><div class='line' id='LC1931'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">notTypeOf</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1932'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">a</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC1933'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1934'><br/></div><div class='line' id='LC1935'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1936'><span class="cm">       * ### .instanceOf(object, constructor, [message])</span></div><div class='line' id='LC1937'><span class="cm">       *</span></div><div class='line' id='LC1938'><span class="cm">       * Asserts that `value` is an instance of `constructor`.</span></div><div class='line' id='LC1939'><span class="cm">       *</span></div><div class='line' id='LC1940'><span class="cm">       *     var Tea = function (name) { this.name = name; }</span></div><div class='line' id='LC1941'><span class="cm">       *       , chai = new Tea(&#39;chai&#39;);</span></div><div class='line' id='LC1942'><span class="cm">       *</span></div><div class='line' id='LC1943'><span class="cm">       *     assert.instanceOf(chai, Tea, &#39;chai is an instance of tea&#39;);</span></div><div class='line' id='LC1944'><span class="cm">       *</span></div><div class='line' id='LC1945'><span class="cm">       * @name instanceOf</span></div><div class='line' id='LC1946'><span class="cm">       * @param {Object} object</span></div><div class='line' id='LC1947'><span class="cm">       * @param {Constructor} constructor</span></div><div class='line' id='LC1948'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1949'><span class="cm">       * @api public</span></div><div class='line' id='LC1950'><span class="cm">       */</span></div><div class='line' id='LC1951'><br/></div><div class='line' id='LC1952'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">instanceOf</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1953'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">instanceOf</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC1954'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1955'><br/></div><div class='line' id='LC1956'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1957'><span class="cm">       * ### .notInstanceOf(object, constructor, [message])</span></div><div class='line' id='LC1958'><span class="cm">       *</span></div><div class='line' id='LC1959'><span class="cm">       * Asserts `value` is not an instance of `constructor`.</span></div><div class='line' id='LC1960'><span class="cm">       *</span></div><div class='line' id='LC1961'><span class="cm">       *     var Tea = function (name) { this.name = name; }</span></div><div class='line' id='LC1962'><span class="cm">       *       , chai = new String(&#39;chai&#39;);</span></div><div class='line' id='LC1963'><span class="cm">       *</span></div><div class='line' id='LC1964'><span class="cm">       *     assert.notInstanceOf(chai, Tea, &#39;chai is not an instance of tea&#39;);</span></div><div class='line' id='LC1965'><span class="cm">       *</span></div><div class='line' id='LC1966'><span class="cm">       * @name notInstanceOf</span></div><div class='line' id='LC1967'><span class="cm">       * @param {Object} object</span></div><div class='line' id='LC1968'><span class="cm">       * @param {Constructor} constructor</span></div><div class='line' id='LC1969'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1970'><span class="cm">       * @api public</span></div><div class='line' id='LC1971'><span class="cm">       */</span></div><div class='line' id='LC1972'><br/></div><div class='line' id='LC1973'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">notInstanceOf</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1974'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">instanceOf</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC1975'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1976'><br/></div><div class='line' id='LC1977'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1978'><span class="cm">       * ### .include(haystack, needle, [message])</span></div><div class='line' id='LC1979'><span class="cm">       *</span></div><div class='line' id='LC1980'><span class="cm">       * Asserts that `haystack` includes `needle`. Works</span></div><div class='line' id='LC1981'><span class="cm">       * for strings and arrays.</span></div><div class='line' id='LC1982'><span class="cm">       *</span></div><div class='line' id='LC1983'><span class="cm">       *     assert.include(&#39;foobar&#39;, &#39;bar&#39;, &#39;foobar contains string &quot;bar&quot;&#39;);</span></div><div class='line' id='LC1984'><span class="cm">       *     assert.include([ 1, 2, 3 ], 3, &#39;array contains value&#39;);</span></div><div class='line' id='LC1985'><span class="cm">       *</span></div><div class='line' id='LC1986'><span class="cm">       * @name include</span></div><div class='line' id='LC1987'><span class="cm">       * @param {Array|String} haystack</span></div><div class='line' id='LC1988'><span class="cm">       * @param {Mixed} needle</span></div><div class='line' id='LC1989'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC1990'><span class="cm">       * @api public</span></div><div class='line' id='LC1991'><span class="cm">       */</span></div><div class='line' id='LC1992'><br/></div><div class='line' id='LC1993'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">include</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">exp</span><span class="p">,</span> <span class="nx">inc</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1994'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">exp</span><span class="p">,</span> <span class="nx">msg</span><span class="p">);</span></div><div class='line' id='LC1995'><br/></div><div class='line' id='LC1996'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">exp</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1997'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">to</span><span class="p">.</span><span class="nx">include</span><span class="p">(</span><span class="nx">inc</span><span class="p">);</span></div><div class='line' id='LC1998'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;string&#39;</span> <span class="o">===</span> <span class="k">typeof</span> <span class="nx">exp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1999'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">to</span><span class="p">.</span><span class="nx">contain</span><span class="p">.</span><span class="nx">string</span><span class="p">(</span><span class="nx">inc</span><span class="p">);</span></div><div class='line' id='LC2000'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2001'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2002'><br/></div><div class='line' id='LC2003'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2004'><span class="cm">       * ### .match(value, regexp, [message])</span></div><div class='line' id='LC2005'><span class="cm">       *</span></div><div class='line' id='LC2006'><span class="cm">       * Asserts that `value` matches the regular expression `regexp`.</span></div><div class='line' id='LC2007'><span class="cm">       *</span></div><div class='line' id='LC2008'><span class="cm">       *     assert.match(&#39;foobar&#39;, /^foo/, &#39;regexp matches&#39;);</span></div><div class='line' id='LC2009'><span class="cm">       *</span></div><div class='line' id='LC2010'><span class="cm">       * @name match</span></div><div class='line' id='LC2011'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC2012'><span class="cm">       * @param {RegExp} regexp</span></div><div class='line' id='LC2013'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2014'><span class="cm">       * @api public</span></div><div class='line' id='LC2015'><span class="cm">       */</span></div><div class='line' id='LC2016'><br/></div><div class='line' id='LC2017'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">match</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">exp</span><span class="p">,</span> <span class="nx">re</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2018'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">exp</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">re</span><span class="p">);</span></div><div class='line' id='LC2019'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2020'><br/></div><div class='line' id='LC2021'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2022'><span class="cm">       * ### .notMatch(value, regexp, [message])</span></div><div class='line' id='LC2023'><span class="cm">       *</span></div><div class='line' id='LC2024'><span class="cm">       * Asserts that `value` does not match the regular expression `regexp`.</span></div><div class='line' id='LC2025'><span class="cm">       *</span></div><div class='line' id='LC2026'><span class="cm">       *     assert.notMatch(&#39;foobar&#39;, /^foo/, &#39;regexp does not match&#39;);</span></div><div class='line' id='LC2027'><span class="cm">       *</span></div><div class='line' id='LC2028'><span class="cm">       * @name notMatch</span></div><div class='line' id='LC2029'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC2030'><span class="cm">       * @param {RegExp} regexp</span></div><div class='line' id='LC2031'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2032'><span class="cm">       * @api public</span></div><div class='line' id='LC2033'><span class="cm">       */</span></div><div class='line' id='LC2034'><br/></div><div class='line' id='LC2035'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">notMatch</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">exp</span><span class="p">,</span> <span class="nx">re</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2036'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">exp</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">re</span><span class="p">);</span></div><div class='line' id='LC2037'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2038'><br/></div><div class='line' id='LC2039'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2040'><span class="cm">       * ### .property(object, property, [message])</span></div><div class='line' id='LC2041'><span class="cm">       *</span></div><div class='line' id='LC2042'><span class="cm">       * Asserts that `object` has a property named by `property`.</span></div><div class='line' id='LC2043'><span class="cm">       *</span></div><div class='line' id='LC2044'><span class="cm">       *     assert.property({ tea: { green: &#39;matcha&#39; }}, &#39;tea&#39;);</span></div><div class='line' id='LC2045'><span class="cm">       *</span></div><div class='line' id='LC2046'><span class="cm">       * @name property</span></div><div class='line' id='LC2047'><span class="cm">       * @param {Object} object</span></div><div class='line' id='LC2048'><span class="cm">       * @param {String} property</span></div><div class='line' id='LC2049'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2050'><span class="cm">       * @api public</span></div><div class='line' id='LC2051'><span class="cm">       */</span></div><div class='line' id='LC2052'><br/></div><div class='line' id='LC2053'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">property</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">prop</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2054'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="nx">prop</span><span class="p">);</span></div><div class='line' id='LC2055'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2056'><br/></div><div class='line' id='LC2057'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2058'><span class="cm">       * ### .notProperty(object, property, [message])</span></div><div class='line' id='LC2059'><span class="cm">       *</span></div><div class='line' id='LC2060'><span class="cm">       * Asserts that `object` does _not_ have a property named by `property`.</span></div><div class='line' id='LC2061'><span class="cm">       *</span></div><div class='line' id='LC2062'><span class="cm">       *     assert.notProperty({ tea: { green: &#39;matcha&#39; }}, &#39;coffee&#39;);</span></div><div class='line' id='LC2063'><span class="cm">       *</span></div><div class='line' id='LC2064'><span class="cm">       * @name notProperty</span></div><div class='line' id='LC2065'><span class="cm">       * @param {Object} object</span></div><div class='line' id='LC2066'><span class="cm">       * @param {String} property</span></div><div class='line' id='LC2067'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2068'><span class="cm">       * @api public</span></div><div class='line' id='LC2069'><span class="cm">       */</span></div><div class='line' id='LC2070'><br/></div><div class='line' id='LC2071'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">notProperty</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">prop</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2072'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="nx">prop</span><span class="p">);</span></div><div class='line' id='LC2073'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2074'><br/></div><div class='line' id='LC2075'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2076'><span class="cm">       * ### .deepProperty(object, property, [message])</span></div><div class='line' id='LC2077'><span class="cm">       *</span></div><div class='line' id='LC2078'><span class="cm">       * Asserts that `object` has a property named by `property`, which can be a</span></div><div class='line' id='LC2079'><span class="cm">       * string using dot- and bracket-notation for deep reference.</span></div><div class='line' id='LC2080'><span class="cm">       *</span></div><div class='line' id='LC2081'><span class="cm">       *     assert.deepProperty({ tea: { green: &#39;matcha&#39; }}, &#39;tea.green&#39;);</span></div><div class='line' id='LC2082'><span class="cm">       *</span></div><div class='line' id='LC2083'><span class="cm">       * @name deepProperty</span></div><div class='line' id='LC2084'><span class="cm">       * @param {Object} object</span></div><div class='line' id='LC2085'><span class="cm">       * @param {String} property</span></div><div class='line' id='LC2086'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2087'><span class="cm">       * @api public</span></div><div class='line' id='LC2088'><span class="cm">       */</span></div><div class='line' id='LC2089'><br/></div><div class='line' id='LC2090'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">deepProperty</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">prop</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2091'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">deep</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="nx">prop</span><span class="p">);</span></div><div class='line' id='LC2092'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2093'><br/></div><div class='line' id='LC2094'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2095'><span class="cm">       * ### .notDeepProperty(object, property, [message])</span></div><div class='line' id='LC2096'><span class="cm">       *</span></div><div class='line' id='LC2097'><span class="cm">       * Asserts that `object` does _not_ have a property named by `property`, which</span></div><div class='line' id='LC2098'><span class="cm">       * can be a string using dot- and bracket-notation for deep reference.</span></div><div class='line' id='LC2099'><span class="cm">       *</span></div><div class='line' id='LC2100'><span class="cm">       *     assert.notDeepProperty({ tea: { green: &#39;matcha&#39; }}, &#39;tea.oolong&#39;);</span></div><div class='line' id='LC2101'><span class="cm">       *</span></div><div class='line' id='LC2102'><span class="cm">       * @name notDeepProperty</span></div><div class='line' id='LC2103'><span class="cm">       * @param {Object} object</span></div><div class='line' id='LC2104'><span class="cm">       * @param {String} property</span></div><div class='line' id='LC2105'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2106'><span class="cm">       * @api public</span></div><div class='line' id='LC2107'><span class="cm">       */</span></div><div class='line' id='LC2108'><br/></div><div class='line' id='LC2109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">notDeepProperty</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">prop</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">deep</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="nx">prop</span><span class="p">);</span></div><div class='line' id='LC2111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2112'><br/></div><div class='line' id='LC2113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2114'><span class="cm">       * ### .propertyVal(object, property, value, [message])</span></div><div class='line' id='LC2115'><span class="cm">       *</span></div><div class='line' id='LC2116'><span class="cm">       * Asserts that `object` has a property named by `property` with value given</span></div><div class='line' id='LC2117'><span class="cm">       * by `value`.</span></div><div class='line' id='LC2118'><span class="cm">       *</span></div><div class='line' id='LC2119'><span class="cm">       *     assert.propertyVal({ tea: &#39;is good&#39; }, &#39;tea&#39;, &#39;is good&#39;);</span></div><div class='line' id='LC2120'><span class="cm">       *</span></div><div class='line' id='LC2121'><span class="cm">       * @name propertyVal</span></div><div class='line' id='LC2122'><span class="cm">       * @param {Object} object</span></div><div class='line' id='LC2123'><span class="cm">       * @param {String} property</span></div><div class='line' id='LC2124'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC2125'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2126'><span class="cm">       * @api public</span></div><div class='line' id='LC2127'><span class="cm">       */</span></div><div class='line' id='LC2128'><br/></div><div class='line' id='LC2129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">propertyVal</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">prop</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="nx">prop</span><span class="p">,</span> <span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC2131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2132'><br/></div><div class='line' id='LC2133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2134'><span class="cm">       * ### .propertyNotVal(object, property, value, [message])</span></div><div class='line' id='LC2135'><span class="cm">       *</span></div><div class='line' id='LC2136'><span class="cm">       * Asserts that `object` has a property named by `property`, but with a value</span></div><div class='line' id='LC2137'><span class="cm">       * different from that given by `value`.</span></div><div class='line' id='LC2138'><span class="cm">       *</span></div><div class='line' id='LC2139'><span class="cm">       *     assert.propertyNotVal({ tea: &#39;is good&#39; }, &#39;tea&#39;, &#39;is bad&#39;);</span></div><div class='line' id='LC2140'><span class="cm">       *</span></div><div class='line' id='LC2141'><span class="cm">       * @name propertyNotVal</span></div><div class='line' id='LC2142'><span class="cm">       * @param {Object} object</span></div><div class='line' id='LC2143'><span class="cm">       * @param {String} property</span></div><div class='line' id='LC2144'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC2145'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2146'><span class="cm">       * @api public</span></div><div class='line' id='LC2147'><span class="cm">       */</span></div><div class='line' id='LC2148'><br/></div><div class='line' id='LC2149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">propertyNotVal</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">prop</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="nx">prop</span><span class="p">,</span> <span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC2151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2152'><br/></div><div class='line' id='LC2153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2154'><span class="cm">       * ### .deepPropertyVal(object, property, value, [message])</span></div><div class='line' id='LC2155'><span class="cm">       *</span></div><div class='line' id='LC2156'><span class="cm">       * Asserts that `object` has a property named by `property` with value given</span></div><div class='line' id='LC2157'><span class="cm">       * by `value`. `property` can use dot- and bracket-notation for deep</span></div><div class='line' id='LC2158'><span class="cm">       * reference.</span></div><div class='line' id='LC2159'><span class="cm">       *</span></div><div class='line' id='LC2160'><span class="cm">       *     assert.deepPropertyVal({ tea: { green: &#39;matcha&#39; }}, &#39;tea.green&#39;, &#39;matcha&#39;);</span></div><div class='line' id='LC2161'><span class="cm">       *</span></div><div class='line' id='LC2162'><span class="cm">       * @name deepPropertyVal</span></div><div class='line' id='LC2163'><span class="cm">       * @param {Object} object</span></div><div class='line' id='LC2164'><span class="cm">       * @param {String} property</span></div><div class='line' id='LC2165'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC2166'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2167'><span class="cm">       * @api public</span></div><div class='line' id='LC2168'><span class="cm">       */</span></div><div class='line' id='LC2169'><br/></div><div class='line' id='LC2170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">deepPropertyVal</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">prop</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">deep</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="nx">prop</span><span class="p">,</span> <span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC2172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2173'><br/></div><div class='line' id='LC2174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2175'><span class="cm">       * ### .deepPropertyNotVal(object, property, value, [message])</span></div><div class='line' id='LC2176'><span class="cm">       *</span></div><div class='line' id='LC2177'><span class="cm">       * Asserts that `object` has a property named by `property`, but with a value</span></div><div class='line' id='LC2178'><span class="cm">       * different from that given by `value`. `property` can use dot- and</span></div><div class='line' id='LC2179'><span class="cm">       * bracket-notation for deep reference.</span></div><div class='line' id='LC2180'><span class="cm">       *</span></div><div class='line' id='LC2181'><span class="cm">       *     assert.deepPropertyNotVal({ tea: { green: &#39;matcha&#39; }}, &#39;tea.green&#39;, &#39;konacha&#39;);</span></div><div class='line' id='LC2182'><span class="cm">       *</span></div><div class='line' id='LC2183'><span class="cm">       * @name deepPropertyNotVal</span></div><div class='line' id='LC2184'><span class="cm">       * @param {Object} object</span></div><div class='line' id='LC2185'><span class="cm">       * @param {String} property</span></div><div class='line' id='LC2186'><span class="cm">       * @param {Mixed} value</span></div><div class='line' id='LC2187'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2188'><span class="cm">       * @api public</span></div><div class='line' id='LC2189'><span class="cm">       */</span></div><div class='line' id='LC2190'><br/></div><div class='line' id='LC2191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">deepPropertyNotVal</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">prop</span><span class="p">,</span> <span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">deep</span><span class="p">.</span><span class="nx">property</span><span class="p">(</span><span class="nx">prop</span><span class="p">,</span> <span class="nx">val</span><span class="p">);</span></div><div class='line' id='LC2193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2194'><br/></div><div class='line' id='LC2195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2196'><span class="cm">       * ### .lengthOf(object, length, [message])</span></div><div class='line' id='LC2197'><span class="cm">       *</span></div><div class='line' id='LC2198'><span class="cm">       * Asserts that `object` has a `length` property with the expected value.</span></div><div class='line' id='LC2199'><span class="cm">       *</span></div><div class='line' id='LC2200'><span class="cm">       *     assert.lengthOf([1,2,3], 3, &#39;array has length of 3&#39;);</span></div><div class='line' id='LC2201'><span class="cm">       *     assert.lengthOf(&#39;foobar&#39;, 5, &#39;string has length of 6&#39;);</span></div><div class='line' id='LC2202'><span class="cm">       *</span></div><div class='line' id='LC2203'><span class="cm">       * @name lengthOf</span></div><div class='line' id='LC2204'><span class="cm">       * @param {Mixed} object</span></div><div class='line' id='LC2205'><span class="cm">       * @param {Number} length</span></div><div class='line' id='LC2206'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2207'><span class="cm">       * @api public</span></div><div class='line' id='LC2208'><span class="cm">       */</span></div><div class='line' id='LC2209'><br/></div><div class='line' id='LC2210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">lengthOf</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">exp</span><span class="p">,</span> <span class="nx">len</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">exp</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">have</span><span class="p">.</span><span class="nx">length</span><span class="p">(</span><span class="nx">len</span><span class="p">);</span></div><div class='line' id='LC2212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2213'><br/></div><div class='line' id='LC2214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2215'><span class="cm">       * ### .throws(function, [constructor/regexp], [message])</span></div><div class='line' id='LC2216'><span class="cm">       *</span></div><div class='line' id='LC2217'><span class="cm">       * Asserts that `function` will throw an error that is an instance of</span></div><div class='line' id='LC2218'><span class="cm">       * `constructor`, or alternately that it will throw an error with message</span></div><div class='line' id='LC2219'><span class="cm">       * matching `regexp`.</span></div><div class='line' id='LC2220'><span class="cm">       *</span></div><div class='line' id='LC2221'><span class="cm">       *     assert.throw(fn, ReferenceError, &#39;function throws a reference error&#39;);</span></div><div class='line' id='LC2222'><span class="cm">       *</span></div><div class='line' id='LC2223'><span class="cm">       * @name throws</span></div><div class='line' id='LC2224'><span class="cm">       * @alias throw</span></div><div class='line' id='LC2225'><span class="cm">       * @alias Throw</span></div><div class='line' id='LC2226'><span class="cm">       * @param {Function} function</span></div><div class='line' id='LC2227'><span class="cm">       * @param {ErrorConstructor} constructor</span></div><div class='line' id='LC2228'><span class="cm">       * @param {RegExp} regexp</span></div><div class='line' id='LC2229'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2230'><span class="cm">       * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types</span></div><div class='line' id='LC2231'><span class="cm">       * @api public</span></div><div class='line' id='LC2232'><span class="cm">       */</span></div><div class='line' id='LC2233'><br/></div><div class='line' id='LC2234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">Throw</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;string&#39;</span> <span class="o">===</span> <span class="k">typeof</span> <span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">msg</span> <span class="o">=</span> <span class="nx">type</span><span class="p">;</span></div><div class='line' id='LC2237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC2238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2239'><br/></div><div class='line' id='LC2240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">Throw</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC2241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2242'><br/></div><div class='line' id='LC2243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2244'><span class="cm">       * ### .doesNotThrow(function, [constructor/regexp], [message])</span></div><div class='line' id='LC2245'><span class="cm">       *</span></div><div class='line' id='LC2246'><span class="cm">       * Asserts that `function` will _not_ throw an error that is an instance of</span></div><div class='line' id='LC2247'><span class="cm">       * `constructor`, or alternately that it will not throw an error with message</span></div><div class='line' id='LC2248'><span class="cm">       * matching `regexp`.</span></div><div class='line' id='LC2249'><span class="cm">       *</span></div><div class='line' id='LC2250'><span class="cm">       *     assert.doesNotThrow(fn, Error, &#39;function does not throw&#39;);</span></div><div class='line' id='LC2251'><span class="cm">       *</span></div><div class='line' id='LC2252'><span class="cm">       * @name doesNotThrow</span></div><div class='line' id='LC2253'><span class="cm">       * @param {Function} function</span></div><div class='line' id='LC2254'><span class="cm">       * @param {ErrorConstructor} constructor</span></div><div class='line' id='LC2255'><span class="cm">       * @param {RegExp} regexp</span></div><div class='line' id='LC2256'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2257'><span class="cm">       * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types</span></div><div class='line' id='LC2258'><span class="cm">       * @api public</span></div><div class='line' id='LC2259'><span class="cm">       */</span></div><div class='line' id='LC2260'><br/></div><div class='line' id='LC2261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">doesNotThrow</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;string&#39;</span> <span class="o">===</span> <span class="k">typeof</span> <span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">msg</span> <span class="o">=</span> <span class="nx">type</span><span class="p">;</span></div><div class='line' id='LC2264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">type</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC2265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2266'><br/></div><div class='line' id='LC2267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">Throw</span><span class="p">(</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC2268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2269'><br/></div><div class='line' id='LC2270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2271'><span class="cm">       * ### .operator(val1, operator, val2, [message])</span></div><div class='line' id='LC2272'><span class="cm">       *</span></div><div class='line' id='LC2273'><span class="cm">       * Compares two values using `operator`.</span></div><div class='line' id='LC2274'><span class="cm">       *</span></div><div class='line' id='LC2275'><span class="cm">       *     assert.operator(1, &#39;&lt;&#39;, 2, &#39;everything is ok&#39;);</span></div><div class='line' id='LC2276'><span class="cm">       *     assert.operator(1, &#39;&gt;&#39;, 2, &#39;this will fail&#39;);</span></div><div class='line' id='LC2277'><span class="cm">       *</span></div><div class='line' id='LC2278'><span class="cm">       * @name operator</span></div><div class='line' id='LC2279'><span class="cm">       * @param {Mixed} val1</span></div><div class='line' id='LC2280'><span class="cm">       * @param {String} operator</span></div><div class='line' id='LC2281'><span class="cm">       * @param {Mixed} val2</span></div><div class='line' id='LC2282'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2283'><span class="cm">       * @api public</span></div><div class='line' id='LC2284'><span class="cm">       */</span></div><div class='line' id='LC2285'><br/></div><div class='line' id='LC2286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">operator</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">operator</span><span class="p">,</span> <span class="nx">val2</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!~</span><span class="p">[</span><span class="s1">&#39;==&#39;</span><span class="p">,</span> <span class="s1">&#39;===&#39;</span><span class="p">,</span> <span class="s1">&#39;&gt;&#39;</span><span class="p">,</span> <span class="s1">&#39;&gt;=&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;&#39;</span><span class="p">,</span> <span class="s1">&#39;&lt;=&#39;</span><span class="p">,</span> <span class="s1">&#39;!=&#39;</span><span class="p">,</span> <span class="s1">&#39;!==&#39;</span><span class="p">].</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">operator</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC2288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Invalid operator &quot;&#39;</span> <span class="o">+</span> <span class="nx">operator</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">);</span></div><div class='line' id='LC2289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">test</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nb">eval</span><span class="p">(</span><span class="nx">val</span> <span class="o">+</span> <span class="nx">operator</span> <span class="o">+</span> <span class="nx">val2</span><span class="p">),</span> <span class="nx">msg</span><span class="p">);</span></div><div class='line' id='LC2291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">test</span><span class="p">.</span><span class="nx">assert</span><span class="p">(</span></div><div class='line' id='LC2292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kc">true</span> <span class="o">===</span> <span class="nx">flag</span><span class="p">(</span><span class="nx">test</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC2293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected &#39;</span> <span class="o">+</span> <span class="nx">util</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; to be &#39;</span> <span class="o">+</span> <span class="nx">operator</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">util</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">val2</span><span class="p">)</span></div><div class='line' id='LC2294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="s1">&#39;expected &#39;</span> <span class="o">+</span> <span class="nx">util</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; to not be &#39;</span> <span class="o">+</span> <span class="nx">operator</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">util</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">val2</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC2295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2296'><br/></div><div class='line' id='LC2297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2298'><span class="cm">       * ### .closeTo(actual, expected, delta, [message])</span></div><div class='line' id='LC2299'><span class="cm">       *</span></div><div class='line' id='LC2300'><span class="cm">       * Asserts that the target is equal `expected`, to within a +/- `delta` range.</span></div><div class='line' id='LC2301'><span class="cm">       *</span></div><div class='line' id='LC2302'><span class="cm">       *     assert.closeTo(1.5, 1, 0.5, &#39;numbers are close&#39;);</span></div><div class='line' id='LC2303'><span class="cm">       *</span></div><div class='line' id='LC2304'><span class="cm">       * @name closeTo</span></div><div class='line' id='LC2305'><span class="cm">       * @param {Number} actual</span></div><div class='line' id='LC2306'><span class="cm">       * @param {Number} expected</span></div><div class='line' id='LC2307'><span class="cm">       * @param {Number} delta</span></div><div class='line' id='LC2308'><span class="cm">       * @param {String} message</span></div><div class='line' id='LC2309'><span class="cm">       * @api public</span></div><div class='line' id='LC2310'><span class="cm">       */</span></div><div class='line' id='LC2311'><br/></div><div class='line' id='LC2312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">closeTo</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">exp</span><span class="p">,</span> <span class="nx">delta</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">act</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">closeTo</span><span class="p">(</span><span class="nx">exp</span><span class="p">,</span> <span class="nx">delta</span><span class="p">);</span></div><div class='line' id='LC2314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2315'><br/></div><div class='line' id='LC2316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2317'><span class="cm">       * Undocumented / untested</span></div><div class='line' id='LC2318'><span class="cm">       */</span></div><div class='line' id='LC2319'><br/></div><div class='line' id='LC2320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">.</span><span class="nx">ifError</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">msg</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">be</span><span class="p">.</span><span class="nx">ok</span><span class="p">;</span></div><div class='line' id='LC2322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2323'><br/></div><div class='line' id='LC2324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2325'><span class="cm">       * Aliases.</span></div><div class='line' id='LC2326'><span class="cm">       */</span></div><div class='line' id='LC2327'><br/></div><div class='line' id='LC2328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="kd">function</span> <span class="nx">alias</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">as</span><span class="p">){</span></div><div class='line' id='LC2329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">assert</span><span class="p">[</span><span class="nx">as</span><span class="p">]</span> <span class="o">=</span> <span class="nx">assert</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC2330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">alias</span><span class="p">;</span></div><div class='line' id='LC2331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC2332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;Throw&#39;</span><span class="p">,</span> <span class="s1">&#39;throw&#39;</span><span class="p">)</span></div><div class='line' id='LC2333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;Throw&#39;</span><span class="p">,</span> <span class="s1">&#39;throws&#39;</span><span class="p">);</span></div><div class='line' id='LC2334'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2335'><br/></div><div class='line' id='LC2336'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/interface/assert.js</span></div><div class='line' id='LC2337'><br/></div><div class='line' id='LC2338'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/interface/expect.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2339'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2340'><span class="cm">     * chai</span></div><div class='line' id='LC2341'><span class="cm">     * Copyright(c) 2011-2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC2342'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC2343'><span class="cm">     */</span></div><div class='line' id='LC2344'><br/></div><div class='line' id='LC2345'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">chai</span><span class="p">,</span> <span class="nx">util</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chai</span><span class="p">.</span><span class="nx">expect</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">message</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">chai</span><span class="p">.</span><span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC2348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2349'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2350'><br/></div><div class='line' id='LC2351'><br/></div><div class='line' id='LC2352'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/interface/expect.js</span></div><div class='line' id='LC2353'><br/></div><div class='line' id='LC2354'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/interface/should.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2355'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2356'><span class="cm">     * chai</span></div><div class='line' id='LC2357'><span class="cm">     * Copyright(c) 2011-2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC2358'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC2359'><span class="cm">     */</span></div><div class='line' id='LC2360'><br/></div><div class='line' id='LC2361'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">chai</span><span class="p">,</span> <span class="nx">util</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Assertion</span> <span class="o">=</span> <span class="nx">chai</span><span class="p">.</span><span class="nx">Assertion</span><span class="p">;</span></div><div class='line' id='LC2363'><br/></div><div class='line' id='LC2364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">loadShould</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// modify Object.prototype to have `should`</span></div><div class='line' id='LC2366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="s1">&#39;should&#39;</span><span class="p">,</span></div><div class='line' id='LC2367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span> <span class="nx">set</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{}</span></div><div class='line' id='LC2368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC2369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">this</span> <span class="k">instanceof</span> <span class="nb">String</span> <span class="o">||</span> <span class="k">this</span> <span class="k">instanceof</span> <span class="nb">Number</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">constructor</span><span class="p">(</span><span class="k">this</span><span class="p">));</span></div><div class='line' id='LC2371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span> <span class="k">instanceof</span> <span class="nb">Boolean</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="k">this</span> <span class="o">==</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC2373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC2375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">configurable</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC2377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2378'><br/></div><div class='line' id='LC2379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">should</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC2380'><br/></div><div class='line' id='LC2381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">should</span><span class="p">.</span><span class="nx">equal</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val1</span><span class="p">,</span> <span class="nx">val2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val1</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">equal</span><span class="p">(</span><span class="nx">val2</span><span class="p">);</span></div><div class='line' id='LC2383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2384'><br/></div><div class='line' id='LC2385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">should</span><span class="p">.</span><span class="nx">Throw</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">errt</span><span class="p">,</span> <span class="nx">errs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">Throw</span><span class="p">(</span><span class="nx">errt</span><span class="p">,</span> <span class="nx">errs</span><span class="p">);</span></div><div class='line' id='LC2387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2388'><br/></div><div class='line' id='LC2389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">should</span><span class="p">.</span><span class="nx">exist</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">exist</span><span class="p">;</span></div><div class='line' id='LC2391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2392'><br/></div><div class='line' id='LC2393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// negation</span></div><div class='line' id='LC2394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">should</span><span class="p">.</span><span class="nx">not</span> <span class="o">=</span> <span class="p">{}</span></div><div class='line' id='LC2395'><br/></div><div class='line' id='LC2396'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">should</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">equal</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val1</span><span class="p">,</span> <span class="nx">val2</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2397'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val1</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">equal</span><span class="p">(</span><span class="nx">val2</span><span class="p">);</span></div><div class='line' id='LC2398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2399'><br/></div><div class='line' id='LC2400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">should</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">Throw</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">errt</span><span class="p">,</span> <span class="nx">errs</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">Throw</span><span class="p">(</span><span class="nx">errt</span><span class="p">,</span> <span class="nx">errs</span><span class="p">);</span></div><div class='line' id='LC2402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2403'><br/></div><div class='line' id='LC2404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">should</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">exist</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">val</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nx">Assertion</span><span class="p">(</span><span class="nx">val</span><span class="p">).</span><span class="nx">to</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">exist</span><span class="p">;</span></div><div class='line' id='LC2406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2407'><br/></div><div class='line' id='LC2408'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">should</span><span class="p">[</span><span class="s1">&#39;throw&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">should</span><span class="p">[</span><span class="s1">&#39;Throw&#39;</span><span class="p">];</span></div><div class='line' id='LC2409'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">should</span><span class="p">.</span><span class="nx">not</span><span class="p">[</span><span class="s1">&#39;throw&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">should</span><span class="p">.</span><span class="nx">not</span><span class="p">[</span><span class="s1">&#39;Throw&#39;</span><span class="p">];</span></div><div class='line' id='LC2410'><br/></div><div class='line' id='LC2411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">should</span><span class="p">;</span></div><div class='line' id='LC2412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2413'><br/></div><div class='line' id='LC2414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chai</span><span class="p">.</span><span class="nx">should</span> <span class="o">=</span> <span class="nx">loadShould</span><span class="p">;</span></div><div class='line' id='LC2415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chai</span><span class="p">.</span><span class="nx">Should</span> <span class="o">=</span> <span class="nx">loadShould</span><span class="p">;</span></div><div class='line' id='LC2416'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2417'><br/></div><div class='line' id='LC2418'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/interface/should.js</span></div><div class='line' id='LC2419'><br/></div><div class='line' id='LC2420'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/addChainableMethod.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2421'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2422'><span class="cm">     * Chai - addChainingMethod utility</span></div><div class='line' id='LC2423'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC2424'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC2425'><span class="cm">     */</span></div><div class='line' id='LC2426'><br/></div><div class='line' id='LC2427'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2428'><span class="cm">     * Module dependencies</span></div><div class='line' id='LC2429'><span class="cm">     */</span></div><div class='line' id='LC2430'><br/></div><div class='line' id='LC2431'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">transferFlags</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./transferFlags&#39;</span><span class="p">);</span></div><div class='line' id='LC2432'><br/></div><div class='line' id='LC2433'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2434'><span class="cm">     * ### addChainableMethod (ctx, name, method, chainingBehavior)</span></div><div class='line' id='LC2435'><span class="cm">     *</span></div><div class='line' id='LC2436'><span class="cm">     * Adds a method to an object, such that the method can also be chained.</span></div><div class='line' id='LC2437'><span class="cm">     *</span></div><div class='line' id='LC2438'><span class="cm">     *     utils.addChainableMethod(chai.Assertion.prototype, &#39;foo&#39;, function (str) {</span></div><div class='line' id='LC2439'><span class="cm">     *       var obj = utils.flag(this, &#39;object&#39;);</span></div><div class='line' id='LC2440'><span class="cm">     *       new chai.Assertion(obj).to.be.equal(str);</span></div><div class='line' id='LC2441'><span class="cm">     *     });</span></div><div class='line' id='LC2442'><span class="cm">     *</span></div><div class='line' id='LC2443'><span class="cm">     * Can also be accessed directly from `chai.Assertion`.</span></div><div class='line' id='LC2444'><span class="cm">     *</span></div><div class='line' id='LC2445'><span class="cm">     *     chai.Assertion.addChainableMethod(&#39;foo&#39;, fn, chainingBehavior);</span></div><div class='line' id='LC2446'><span class="cm">     *</span></div><div class='line' id='LC2447'><span class="cm">     * The result can then be used as both a method assertion, executing both `method` and</span></div><div class='line' id='LC2448'><span class="cm">     * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.</span></div><div class='line' id='LC2449'><span class="cm">     *</span></div><div class='line' id='LC2450'><span class="cm">     *     expect(fooStr).to.be.foo(&#39;bar&#39;);</span></div><div class='line' id='LC2451'><span class="cm">     *     expect(fooStr).to.be.foo.equal(&#39;foo&#39;);</span></div><div class='line' id='LC2452'><span class="cm">     *</span></div><div class='line' id='LC2453'><span class="cm">     * @param {Object} ctx object to which the method is added</span></div><div class='line' id='LC2454'><span class="cm">     * @param {String} name of method to add</span></div><div class='line' id='LC2455'><span class="cm">     * @param {Function} method function to be used for `name`, when called</span></div><div class='line' id='LC2456'><span class="cm">     * @param {Function} chainingBehavior function to be called every time the property is accessed</span></div><div class='line' id='LC2457'><span class="cm">     * @name addChainableMethod</span></div><div class='line' id='LC2458'><span class="cm">     * @api public</span></div><div class='line' id='LC2459'><span class="cm">     */</span></div><div class='line' id='LC2460'><br/></div><div class='line' id='LC2461'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">method</span><span class="p">,</span> <span class="nx">chainingBehavior</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">chainingBehavior</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span></div><div class='line' id='LC2463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chainingBehavior</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="p">};</span></div><div class='line' id='LC2464'><br/></div><div class='line' id='LC2465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span></div><div class='line' id='LC2466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span> <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chainingBehavior</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC2468'><br/></div><div class='line' id='LC2469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">assert</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">method</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC2471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="k">this</span> <span class="o">:</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC2472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2473'><br/></div><div class='line' id='LC2474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Re-enumerate every time to better accomodate plugins.</span></div><div class='line' id='LC2475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">asserterNames</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">getOwnPropertyNames</span><span class="p">(</span><span class="nx">ctx</span><span class="p">);</span></div><div class='line' id='LC2476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">asserterNames</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">asserterName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pd</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">getOwnPropertyDescriptor</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">asserterName</span><span class="p">)</span></div><div class='line' id='LC2478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">functionProtoPD</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">getOwnPropertyDescriptor</span><span class="p">(</span><span class="nb">Function</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span> <span class="nx">asserterName</span><span class="p">);</span></div><div class='line' id='LC2479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Avoid trying to overwrite things that we can&#39;t, like `length` and `arguments`.</span></div><div class='line' id='LC2480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">functionProtoPD</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">functionProtoPD</span><span class="p">.</span><span class="nx">configurable</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span></div><div class='line' id='LC2481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">asserterName</span> <span class="o">===</span> <span class="s1">&#39;arguments&#39;</span><span class="p">)</span> <span class="k">return</span><span class="p">;</span> <span class="c1">// @see chaijs/chai/issues/69</span></div><div class='line' id='LC2482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">assert</span><span class="p">,</span> <span class="nx">asserterName</span><span class="p">,</span> <span class="nx">pd</span><span class="p">);</span></div><div class='line' id='LC2483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2484'><br/></div><div class='line' id='LC2485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transferFlags</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">assert</span><span class="p">);</span></div><div class='line' id='LC2486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">assert</span><span class="p">;</span></div><div class='line' id='LC2487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2488'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">configurable</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC2489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2490'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2491'><br/></div><div class='line' id='LC2492'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/addChainableMethod.js</span></div><div class='line' id='LC2493'><br/></div><div class='line' id='LC2494'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/addMethod.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2495'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2496'><span class="cm">     * Chai - addMethod utility</span></div><div class='line' id='LC2497'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC2498'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC2499'><span class="cm">     */</span></div><div class='line' id='LC2500'><br/></div><div class='line' id='LC2501'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2502'><span class="cm">     * ### .addMethod (ctx, name, method)</span></div><div class='line' id='LC2503'><span class="cm">     *</span></div><div class='line' id='LC2504'><span class="cm">     * Adds a method to the prototype of an object.</span></div><div class='line' id='LC2505'><span class="cm">     *</span></div><div class='line' id='LC2506'><span class="cm">     *     utils.addMethod(chai.Assertion.prototype, &#39;foo&#39;, function (str) {</span></div><div class='line' id='LC2507'><span class="cm">     *       var obj = utils.flag(this, &#39;object&#39;);</span></div><div class='line' id='LC2508'><span class="cm">     *       new chai.Assertion(obj).to.be.equal(str);</span></div><div class='line' id='LC2509'><span class="cm">     *     });</span></div><div class='line' id='LC2510'><span class="cm">     *</span></div><div class='line' id='LC2511'><span class="cm">     * Can also be accessed directly from `chai.Assertion`.</span></div><div class='line' id='LC2512'><span class="cm">     *</span></div><div class='line' id='LC2513'><span class="cm">     *     chai.Assertion.addMethod(&#39;foo&#39;, fn);</span></div><div class='line' id='LC2514'><span class="cm">     *</span></div><div class='line' id='LC2515'><span class="cm">     * Then can be used as any other assertion.</span></div><div class='line' id='LC2516'><span class="cm">     *</span></div><div class='line' id='LC2517'><span class="cm">     *     expect(fooStr).to.be.foo(&#39;bar&#39;);</span></div><div class='line' id='LC2518'><span class="cm">     *</span></div><div class='line' id='LC2519'><span class="cm">     * @param {Object} ctx object to which the method is added</span></div><div class='line' id='LC2520'><span class="cm">     * @param {String} name of method to add</span></div><div class='line' id='LC2521'><span class="cm">     * @param {Function} method function to be used for name</span></div><div class='line' id='LC2522'><span class="cm">     * @name addMethod</span></div><div class='line' id='LC2523'><span class="cm">     * @api public</span></div><div class='line' id='LC2524'><span class="cm">     */</span></div><div class='line' id='LC2525'><br/></div><div class='line' id='LC2526'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2527'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2528'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">method</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC2529'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="k">this</span> <span class="o">:</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC2530'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2531'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2532'><br/></div><div class='line' id='LC2533'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/addMethod.js</span></div><div class='line' id='LC2534'><br/></div><div class='line' id='LC2535'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/addProperty.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2536'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2537'><span class="cm">     * Chai - addProperty utility</span></div><div class='line' id='LC2538'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC2539'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC2540'><span class="cm">     */</span></div><div class='line' id='LC2541'><br/></div><div class='line' id='LC2542'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2543'><span class="cm">     * ### addProperty (ctx, name, getter)</span></div><div class='line' id='LC2544'><span class="cm">     *</span></div><div class='line' id='LC2545'><span class="cm">     * Adds a property to the prototype of an object.</span></div><div class='line' id='LC2546'><span class="cm">     *</span></div><div class='line' id='LC2547'><span class="cm">     *     utils.addProperty(chai.Assertion.prototype, &#39;foo&#39;, function () {</span></div><div class='line' id='LC2548'><span class="cm">     *       var obj = utils.flag(this, &#39;object&#39;);</span></div><div class='line' id='LC2549'><span class="cm">     *       new chai.Assertion(obj).to.be.instanceof(Foo);</span></div><div class='line' id='LC2550'><span class="cm">     *     });</span></div><div class='line' id='LC2551'><span class="cm">     *</span></div><div class='line' id='LC2552'><span class="cm">     * Can also be accessed directly from `chai.Assertion`.</span></div><div class='line' id='LC2553'><span class="cm">     *</span></div><div class='line' id='LC2554'><span class="cm">     *     chai.Assertion.addProperty(&#39;foo&#39;, fn);</span></div><div class='line' id='LC2555'><span class="cm">     *</span></div><div class='line' id='LC2556'><span class="cm">     * Then can be used as any other assertion.</span></div><div class='line' id='LC2557'><span class="cm">     *</span></div><div class='line' id='LC2558'><span class="cm">     *     expect(myFoo).to.be.foo;</span></div><div class='line' id='LC2559'><span class="cm">     *</span></div><div class='line' id='LC2560'><span class="cm">     * @param {Object} ctx object to which the property is added</span></div><div class='line' id='LC2561'><span class="cm">     * @param {String} name of property to add</span></div><div class='line' id='LC2562'><span class="cm">     * @param {Function} getter function to be used for name</span></div><div class='line' id='LC2563'><span class="cm">     * @name addProperty</span></div><div class='line' id='LC2564'><span class="cm">     * @api public</span></div><div class='line' id='LC2565'><span class="cm">     */</span></div><div class='line' id='LC2566'><br/></div><div class='line' id='LC2567'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">getter</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2568'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span></div><div class='line' id='LC2569'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span> <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2570'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">getter</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC2571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="k">this</span> <span class="o">:</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC2572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">configurable</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC2574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2575'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2576'><br/></div><div class='line' id='LC2577'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/addProperty.js</span></div><div class='line' id='LC2578'><br/></div><div class='line' id='LC2579'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/eql.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2580'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// This is directly from Node.js assert</span></div><div class='line' id='LC2581'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/assert.js</span></div><div class='line' id='LC2582'><br/></div><div class='line' id='LC2583'><br/></div><div class='line' id='LC2584'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">_deepEqual</span><span class="p">;</span></div><div class='line' id='LC2585'><br/></div><div class='line' id='LC2586'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// For browser implementation</span></div><div class='line' id='LC2587'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">Buffer</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2588'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">Buffer</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC2589'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isBuffer</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2590'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2591'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2592'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2593'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2594'><br/></div><div class='line' id='LC2595'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">_deepEqual</span><span class="p">(</span><span class="nx">actual</span><span class="p">,</span> <span class="nx">expected</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2596'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// 7.1. All identical values are equivalent, as determined by ===.</span></div><div class='line' id='LC2597'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">actual</span> <span class="o">===</span> <span class="nx">expected</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2598'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC2599'><br/></div><div class='line' id='LC2600'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">Buffer</span><span class="p">.</span><span class="nx">isBuffer</span><span class="p">(</span><span class="nx">actual</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">Buffer</span><span class="p">.</span><span class="nx">isBuffer</span><span class="p">(</span><span class="nx">expected</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC2601'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">actual</span><span class="p">.</span><span class="nx">length</span> <span class="o">!=</span> <span class="nx">expected</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2602'><br/></div><div class='line' id='LC2603'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">actual</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2604'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">actual</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">!==</span> <span class="nx">expected</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2605'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2606'><br/></div><div class='line' id='LC2607'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC2608'><br/></div><div class='line' id='LC2609'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// 7.2. If the expected value is a Date object, the actual value is</span></div><div class='line' id='LC2610'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// equivalent if it is also a Date object that refers to the same time.</span></div><div class='line' id='LC2611'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">actual</span> <span class="k">instanceof</span> <span class="nb">Date</span> <span class="o">&amp;&amp;</span> <span class="nx">expected</span> <span class="k">instanceof</span> <span class="nb">Date</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2612'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">actual</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">===</span> <span class="nx">expected</span><span class="p">.</span><span class="nx">getTime</span><span class="p">();</span></div><div class='line' id='LC2613'><br/></div><div class='line' id='LC2614'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// 7.3. Other pairs that do not both pass typeof value == &#39;object&#39;,</span></div><div class='line' id='LC2615'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// equivalence is determined by ==.</span></div><div class='line' id='LC2616'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">actual</span> <span class="o">!=</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">expected</span> <span class="o">!=</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2617'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">actual</span> <span class="o">===</span> <span class="nx">expected</span><span class="p">;</span></div><div class='line' id='LC2618'><br/></div><div class='line' id='LC2619'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// 7.4. For all other Object pairs, including Array objects, equivalence is</span></div><div class='line' id='LC2620'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// determined by having the same number of owned properties (as verified</span></div><div class='line' id='LC2621'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// with Object.prototype.hasOwnProperty.call), the same set of keys</span></div><div class='line' id='LC2622'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// (although not necessarily the same order), equivalent values for every</span></div><div class='line' id='LC2623'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// corresponding key, and an identical &#39;prototype&#39; property. Note: this</span></div><div class='line' id='LC2624'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// accounts for both named and indexed properties on Arrays.</span></div><div class='line' id='LC2625'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC2626'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">objEquiv</span><span class="p">(</span><span class="nx">actual</span><span class="p">,</span> <span class="nx">expected</span><span class="p">);</span></div><div class='line' id='LC2627'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2628'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2629'><br/></div><div class='line' id='LC2630'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isUndefinedOrNull</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2631'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span> <span class="o">===</span> <span class="kc">null</span> <span class="o">||</span> <span class="nx">value</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC2632'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2633'><br/></div><div class='line' id='LC2634'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isArguments</span><span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2635'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Arguments]&#39;</span><span class="p">;</span></div><div class='line' id='LC2636'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2637'><br/></div><div class='line' id='LC2638'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">objEquiv</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2639'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isUndefinedOrNull</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="o">||</span> <span class="nx">isUndefinedOrNull</span><span class="p">(</span><span class="nx">b</span><span class="p">))</span></div><div class='line' id='LC2640'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2641'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// an identical &#39;prototype&#39; property.</span></div><div class='line' id='LC2642'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">!==</span> <span class="nx">b</span><span class="p">.</span><span class="nx">prototype</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2643'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//~~~I&#39;ve managed to break Object.keys through screwy arguments passing.</span></div><div class='line' id='LC2644'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   Converting to array solves the problem.</span></div><div class='line' id='LC2645'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isArguments</span><span class="p">(</span><span class="nx">a</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC2646'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isArguments</span><span class="p">(</span><span class="nx">b</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC2647'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2648'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2649'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">a</span> <span class="o">=</span> <span class="nx">pSlice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC2650'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">b</span> <span class="o">=</span> <span class="nx">pSlice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC2651'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_deepEqual</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">);</span></div><div class='line' id='LC2652'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2653'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC2654'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ka</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span></div><div class='line' id='LC2655'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">kb</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">b</span><span class="p">),</span></div><div class='line' id='LC2656'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key</span><span class="p">,</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC2657'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span><span class="c1">//happens when one is a string literal and the other isn&#39;t</span></div><div class='line' id='LC2658'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2659'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2660'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// having the same number of owned properties (keys incorporates</span></div><div class='line' id='LC2661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// hasOwnProperty)</span></div><div class='line' id='LC2662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ka</span><span class="p">.</span><span class="nx">length</span> <span class="o">!=</span> <span class="nx">kb</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span></div><div class='line' id='LC2663'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2664'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//the same set of keys (although not necessarily the same order),</span></div><div class='line' id='LC2665'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ka</span><span class="p">.</span><span class="nx">sort</span><span class="p">();</span></div><div class='line' id='LC2666'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">kb</span><span class="p">.</span><span class="nx">sort</span><span class="p">();</span></div><div class='line' id='LC2667'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//~~~cheap key test</span></div><div class='line' id='LC2668'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="nx">ka</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2669'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ka</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">!=</span> <span class="nx">kb</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span></div><div class='line' id='LC2670'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2671'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2672'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//equivalent values for every corresponding key, and</span></div><div class='line' id='LC2673'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//~~~possibly expensive deep test</span></div><div class='line' id='LC2674'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="nx">ka</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2675'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key</span> <span class="o">=</span> <span class="nx">ka</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC2676'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">_deepEqual</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">b</span><span class="p">[</span><span class="nx">key</span><span class="p">]))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC2677'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2678'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC2679'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2680'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/eql.js</span></div><div class='line' id='LC2681'><br/></div><div class='line' id='LC2682'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/flag.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2683'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2684'><span class="cm">     * Chai - flag utility</span></div><div class='line' id='LC2685'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC2686'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC2687'><span class="cm">     */</span></div><div class='line' id='LC2688'><br/></div><div class='line' id='LC2689'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2690'><span class="cm">     * ### flag(object ,key, [value])</span></div><div class='line' id='LC2691'><span class="cm">     *</span></div><div class='line' id='LC2692'><span class="cm">     * Get or set a flag value on an object. If a</span></div><div class='line' id='LC2693'><span class="cm">     * value is provided it will be set, else it will</span></div><div class='line' id='LC2694'><span class="cm">     * return the currently set value or `undefined` if</span></div><div class='line' id='LC2695'><span class="cm">     * the value is not set.</span></div><div class='line' id='LC2696'><span class="cm">     *</span></div><div class='line' id='LC2697'><span class="cm">     *     utils.flag(this, &#39;foo&#39;, &#39;bar&#39;); // setter</span></div><div class='line' id='LC2698'><span class="cm">     *     utils.flag(this, &#39;foo&#39;); // getter, returns `bar`</span></div><div class='line' id='LC2699'><span class="cm">     *</span></div><div class='line' id='LC2700'><span class="cm">     * @param {Object} object (constructed Assertion</span></div><div class='line' id='LC2701'><span class="cm">     * @param {String} key</span></div><div class='line' id='LC2702'><span class="cm">     * @param {Mixed} value (optional)</span></div><div class='line' id='LC2703'><span class="cm">     * @name flag</span></div><div class='line' id='LC2704'><span class="cm">     * @api private</span></div><div class='line' id='LC2705'><span class="cm">     */</span></div><div class='line' id='LC2706'><br/></div><div class='line' id='LC2707'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2708'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">flags</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">__flags</span> <span class="o">||</span> <span class="p">(</span><span class="nx">obj</span><span class="p">.</span><span class="nx">__flags</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="kc">null</span><span class="p">));</span></div><div class='line' id='LC2709'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">3</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2710'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">flags</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC2711'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC2712'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">flags</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC2713'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2714'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2715'><br/></div><div class='line' id='LC2716'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/flag.js</span></div><div class='line' id='LC2717'><br/></div><div class='line' id='LC2718'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/getActual.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2719'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2720'><span class="cm">     * Chai - getActual utility</span></div><div class='line' id='LC2721'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC2722'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC2723'><span class="cm">     */</span></div><div class='line' id='LC2724'><br/></div><div class='line' id='LC2725'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2726'><span class="cm">     * # getActual(object, [actual])</span></div><div class='line' id='LC2727'><span class="cm">     *</span></div><div class='line' id='LC2728'><span class="cm">     * Returns the `actual` value for an Assertion</span></div><div class='line' id='LC2729'><span class="cm">     *</span></div><div class='line' id='LC2730'><span class="cm">     * @param {Object} object (constructed Assertion)</span></div><div class='line' id='LC2731'><span class="cm">     * @param {Arguments} chai.Assertion.prototype.assert arguments</span></div><div class='line' id='LC2732'><span class="cm">     */</span></div><div class='line' id='LC2733'><br/></div><div class='line' id='LC2734'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2735'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">actual</span> <span class="o">=</span> <span class="nx">args</span><span class="p">[</span><span class="mi">4</span><span class="p">];</span></div><div class='line' id='LC2736'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">!==</span> <span class="nx">actual</span> <span class="o">?</span> <span class="nx">actual</span> <span class="o">:</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">_obj</span><span class="p">;</span></div><div class='line' id='LC2737'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2738'><br/></div><div class='line' id='LC2739'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/getActual.js</span></div><div class='line' id='LC2740'><br/></div><div class='line' id='LC2741'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/getMessage.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2742'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2743'><span class="cm">     * Chai - message composition utility</span></div><div class='line' id='LC2744'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC2745'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC2746'><span class="cm">     */</span></div><div class='line' id='LC2747'><br/></div><div class='line' id='LC2748'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2749'><span class="cm">     * Module dependancies</span></div><div class='line' id='LC2750'><span class="cm">     */</span></div><div class='line' id='LC2751'><br/></div><div class='line' id='LC2752'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">flag</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./flag&#39;</span><span class="p">)</span></div><div class='line' id='LC2753'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">getActual</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./getActual&#39;</span><span class="p">)</span></div><div class='line' id='LC2754'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">inspect</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./inspect&#39;</span><span class="p">)</span></div><div class='line' id='LC2755'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">objDisplay</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./objDisplay&#39;</span><span class="p">);</span></div><div class='line' id='LC2756'><br/></div><div class='line' id='LC2757'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2758'><span class="cm">     * ### .getMessage(object, message, negateMessage)</span></div><div class='line' id='LC2759'><span class="cm">     *</span></div><div class='line' id='LC2760'><span class="cm">     * Construct the error message based on flags</span></div><div class='line' id='LC2761'><span class="cm">     * and template tags. Template tags will return</span></div><div class='line' id='LC2762'><span class="cm">     * a stringified inspection of the object referenced.</span></div><div class='line' id='LC2763'><span class="cm">     *</span></div><div class='line' id='LC2764'><span class="cm">     * Messsage template tags:</span></div><div class='line' id='LC2765'><span class="cm">     * - `#{this}` current asserted object</span></div><div class='line' id='LC2766'><span class="cm">     * - `#{act}` actual value</span></div><div class='line' id='LC2767'><span class="cm">     * - `#{exp}` expected value</span></div><div class='line' id='LC2768'><span class="cm">     *</span></div><div class='line' id='LC2769'><span class="cm">     * @param {Object} object (constructed Assertion)</span></div><div class='line' id='LC2770'><span class="cm">     * @param {Arguments} chai.Assertion.prototype.assert arguments</span></div><div class='line' id='LC2771'><span class="cm">     * @name getMessage</span></div><div class='line' id='LC2772'><span class="cm">     * @api public</span></div><div class='line' id='LC2773'><span class="cm">     */</span></div><div class='line' id='LC2774'><br/></div><div class='line' id='LC2775'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2776'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">negate</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;negate&#39;</span><span class="p">)</span></div><div class='line' id='LC2777'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">val</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span></div><div class='line' id='LC2778'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">expected</span> <span class="o">=</span> <span class="nx">args</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span></div><div class='line' id='LC2779'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">actual</span> <span class="o">=</span> <span class="nx">getActual</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span></div><div class='line' id='LC2780'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">msg</span> <span class="o">=</span> <span class="nx">negate</span> <span class="o">?</span> <span class="nx">args</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span> <span class="o">:</span> <span class="nx">args</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span></div><div class='line' id='LC2781'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">flagMsg</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;message&#39;</span><span class="p">);</span></div><div class='line' id='LC2782'><br/></div><div class='line' id='LC2783'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">msg</span> <span class="o">=</span> <span class="nx">msg</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC2784'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">msg</span> <span class="o">=</span> <span class="nx">msg</span></div><div class='line' id='LC2785'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/#{this}/g</span><span class="p">,</span> <span class="nx">objDisplay</span><span class="p">(</span><span class="nx">val</span><span class="p">))</span></div><div class='line' id='LC2786'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/#{act}/g</span><span class="p">,</span> <span class="nx">objDisplay</span><span class="p">(</span><span class="nx">actual</span><span class="p">))</span></div><div class='line' id='LC2787'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/#{exp}/g</span><span class="p">,</span> <span class="nx">objDisplay</span><span class="p">(</span><span class="nx">expected</span><span class="p">));</span></div><div class='line' id='LC2788'><br/></div><div class='line' id='LC2789'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">flagMsg</span> <span class="o">?</span> <span class="nx">flagMsg</span> <span class="o">+</span> <span class="s1">&#39;: &#39;</span> <span class="o">+</span> <span class="nx">msg</span> <span class="o">:</span> <span class="nx">msg</span><span class="p">;</span></div><div class='line' id='LC2790'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2791'><br/></div><div class='line' id='LC2792'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/getMessage.js</span></div><div class='line' id='LC2793'><br/></div><div class='line' id='LC2794'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/getName.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2795'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2796'><span class="cm">     * Chai - getName utility</span></div><div class='line' id='LC2797'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC2798'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC2799'><span class="cm">     */</span></div><div class='line' id='LC2800'><br/></div><div class='line' id='LC2801'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2802'><span class="cm">     * # getName(func)</span></div><div class='line' id='LC2803'><span class="cm">     *</span></div><div class='line' id='LC2804'><span class="cm">     * Gets the name of a function, in a cross-browser way.</span></div><div class='line' id='LC2805'><span class="cm">     *</span></div><div class='line' id='LC2806'><span class="cm">     * @param {Function} a function (usually a constructor)</span></div><div class='line' id='LC2807'><span class="cm">     */</span></div><div class='line' id='LC2808'><br/></div><div class='line' id='LC2809'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">func</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2810'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">func</span><span class="p">.</span><span class="nx">name</span><span class="p">)</span> <span class="k">return</span> <span class="nx">func</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC2811'><br/></div><div class='line' id='LC2812'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="sr">/^\s?function ([^(]*)\(/</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">func</span><span class="p">);</span></div><div class='line' id='LC2813'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">match</span> <span class="o">&amp;&amp;</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">?</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC2814'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2815'><br/></div><div class='line' id='LC2816'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/getName.js</span></div><div class='line' id='LC2817'><br/></div><div class='line' id='LC2818'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/getPathValue.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2819'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2820'><span class="cm">     * Chai - getPathValue utility</span></div><div class='line' id='LC2821'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC2822'><span class="cm">     * @see https://github.com/logicalparadox/filtr</span></div><div class='line' id='LC2823'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC2824'><span class="cm">     */</span></div><div class='line' id='LC2825'><br/></div><div class='line' id='LC2826'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2827'><span class="cm">     * ### .getPathValue(path, object)</span></div><div class='line' id='LC2828'><span class="cm">     *</span></div><div class='line' id='LC2829'><span class="cm">     * This allows the retrieval of values in an</span></div><div class='line' id='LC2830'><span class="cm">     * object given a string path.</span></div><div class='line' id='LC2831'><span class="cm">     *</span></div><div class='line' id='LC2832'><span class="cm">     *     var obj = {</span></div><div class='line' id='LC2833'><span class="cm">     *         prop1: {</span></div><div class='line' id='LC2834'><span class="cm">     *             arr: [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span></div><div class='line' id='LC2835'><span class="cm">     *           , str: &#39;Hello&#39;</span></div><div class='line' id='LC2836'><span class="cm">     *         }</span></div><div class='line' id='LC2837'><span class="cm">     *       , prop2: {</span></div><div class='line' id='LC2838'><span class="cm">     *             arr: [ { nested: &#39;Universe&#39; } ]</span></div><div class='line' id='LC2839'><span class="cm">     *           , str: &#39;Hello again!&#39;</span></div><div class='line' id='LC2840'><span class="cm">     *         }</span></div><div class='line' id='LC2841'><span class="cm">     *     }</span></div><div class='line' id='LC2842'><span class="cm">     *</span></div><div class='line' id='LC2843'><span class="cm">     * The following would be the results.</span></div><div class='line' id='LC2844'><span class="cm">     *</span></div><div class='line' id='LC2845'><span class="cm">     *     getPathValue(&#39;prop1.str&#39;, obj); // Hello</span></div><div class='line' id='LC2846'><span class="cm">     *     getPathValue(&#39;prop1.att[2]&#39;, obj); // b</span></div><div class='line' id='LC2847'><span class="cm">     *     getPathValue(&#39;prop2.arr[0].nested&#39;, obj); // Universe</span></div><div class='line' id='LC2848'><span class="cm">     *</span></div><div class='line' id='LC2849'><span class="cm">     * @param {String} path</span></div><div class='line' id='LC2850'><span class="cm">     * @param {Object} object</span></div><div class='line' id='LC2851'><span class="cm">     * @returns {Object} value or `undefined`</span></div><div class='line' id='LC2852'><span class="cm">     * @name getPathValue</span></div><div class='line' id='LC2853'><span class="cm">     * @api public</span></div><div class='line' id='LC2854'><span class="cm">     */</span></div><div class='line' id='LC2855'><br/></div><div class='line' id='LC2856'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">getPathValue</span> <span class="o">=</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">path</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2857'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">parsed</span> <span class="o">=</span> <span class="nx">parsePath</span><span class="p">(</span><span class="nx">path</span><span class="p">);</span></div><div class='line' id='LC2858'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">_getPathValue</span><span class="p">(</span><span class="nx">parsed</span><span class="p">,</span> <span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC2859'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2860'><br/></div><div class='line' id='LC2861'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2862'><span class="cm">     * ## parsePath(path)</span></div><div class='line' id='LC2863'><span class="cm">     *</span></div><div class='line' id='LC2864'><span class="cm">     * Helper function used to parse string object</span></div><div class='line' id='LC2865'><span class="cm">     * paths. Use in conjunction with `_getPathValue`.</span></div><div class='line' id='LC2866'><span class="cm">     *</span></div><div class='line' id='LC2867'><span class="cm">     *      var parsed = parsePath(&#39;myobject.property.subprop&#39;);</span></div><div class='line' id='LC2868'><span class="cm">     *</span></div><div class='line' id='LC2869'><span class="cm">     * ### Paths:</span></div><div class='line' id='LC2870'><span class="cm">     *</span></div><div class='line' id='LC2871'><span class="cm">     * * Can be as near infinitely deep and nested</span></div><div class='line' id='LC2872'><span class="cm">     * * Arrays are also valid using the formal `myobject.document[3].property`.</span></div><div class='line' id='LC2873'><span class="cm">     *</span></div><div class='line' id='LC2874'><span class="cm">     * @param {String} path</span></div><div class='line' id='LC2875'><span class="cm">     * @returns {Object} parsed</span></div><div class='line' id='LC2876'><span class="cm">     * @api private</span></div><div class='line' id='LC2877'><span class="cm">     */</span></div><div class='line' id='LC2878'><br/></div><div class='line' id='LC2879'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">parsePath</span> <span class="p">(</span><span class="nx">path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2880'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">path</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\[/g</span><span class="p">,</span> <span class="s1">&#39;.[&#39;</span><span class="p">)</span></div><div class='line' id='LC2881'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">parts</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/(\\\.|[^.]+?)+/g</span><span class="p">);</span></div><div class='line' id='LC2882'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">parts</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2883'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">re</span> <span class="o">=</span> <span class="sr">/\[(\d+)\]$/</span></div><div class='line' id='LC2884'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">mArr</span> <span class="o">=</span> <span class="nx">re</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span></div><div class='line' id='LC2885'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">mArr</span><span class="p">)</span> <span class="k">return</span> <span class="p">{</span> <span class="nx">i</span><span class="o">:</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nx">mArr</span><span class="p">[</span><span class="mi">1</span><span class="p">])</span> <span class="p">};</span></div><div class='line' id='LC2886'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">return</span> <span class="p">{</span> <span class="nx">p</span><span class="o">:</span> <span class="nx">value</span> <span class="p">};</span></div><div class='line' id='LC2887'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2888'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2889'><br/></div><div class='line' id='LC2890'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2891'><span class="cm">     * ## _getPathValue(parsed, obj)</span></div><div class='line' id='LC2892'><span class="cm">     *</span></div><div class='line' id='LC2893'><span class="cm">     * Helper companion function for `.parsePath` that returns</span></div><div class='line' id='LC2894'><span class="cm">     * the value located at the parsed address.</span></div><div class='line' id='LC2895'><span class="cm">     *</span></div><div class='line' id='LC2896'><span class="cm">     *      var value = getPathValue(parsed, obj);</span></div><div class='line' id='LC2897'><span class="cm">     *</span></div><div class='line' id='LC2898'><span class="cm">     * @param {Object} parsed definition from `parsePath`.</span></div><div class='line' id='LC2899'><span class="cm">     * @param {Object} object to search against</span></div><div class='line' id='LC2900'><span class="cm">     * @returns {Object|Undefined} value</span></div><div class='line' id='LC2901'><span class="cm">     * @api private</span></div><div class='line' id='LC2902'><span class="cm">     */</span></div><div class='line' id='LC2903'><br/></div><div class='line' id='LC2904'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">_getPathValue</span> <span class="p">(</span><span class="nx">parsed</span><span class="p">,</span> <span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2905'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tmp</span> <span class="o">=</span> <span class="nx">obj</span></div><div class='line' id='LC2906'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">res</span><span class="p">;</span></div><div class='line' id='LC2907'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">parsed</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2908'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">part</span> <span class="o">=</span> <span class="nx">parsed</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC2909'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">tmp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2910'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;undefined&#39;</span> <span class="o">!==</span> <span class="k">typeof</span> <span class="nx">part</span><span class="p">.</span><span class="nx">p</span><span class="p">)</span></div><div class='line' id='LC2911'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tmp</span> <span class="o">=</span> <span class="nx">tmp</span><span class="p">[</span><span class="nx">part</span><span class="p">.</span><span class="nx">p</span><span class="p">];</span></div><div class='line' id='LC2912'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="s1">&#39;undefined&#39;</span> <span class="o">!==</span> <span class="k">typeof</span> <span class="nx">part</span><span class="p">.</span><span class="nx">i</span><span class="p">)</span></div><div class='line' id='LC2913'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tmp</span> <span class="o">=</span> <span class="nx">tmp</span><span class="p">[</span><span class="nx">part</span><span class="p">.</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC2914'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">i</span> <span class="o">==</span> <span class="p">(</span><span class="nx">l</span> <span class="o">-</span> <span class="mi">1</span><span class="p">))</span> <span class="nx">res</span> <span class="o">=</span> <span class="nx">tmp</span><span class="p">;</span></div><div class='line' id='LC2915'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC2916'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC2917'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2918'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2919'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">res</span><span class="p">;</span></div><div class='line' id='LC2920'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2921'><br/></div><div class='line' id='LC2922'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/getPathValue.js</span></div><div class='line' id='LC2923'><br/></div><div class='line' id='LC2924'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/index.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC2925'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2926'><span class="cm">     * chai</span></div><div class='line' id='LC2927'><span class="cm">     * Copyright(c) 2011 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC2928'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC2929'><span class="cm">     */</span></div><div class='line' id='LC2930'><br/></div><div class='line' id='LC2931'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2932'><span class="cm">     * Main exports</span></div><div class='line' id='LC2933'><span class="cm">     */</span></div><div class='line' id='LC2934'><br/></div><div class='line' id='LC2935'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">exports</span> <span class="o">=</span> <span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC2936'><br/></div><div class='line' id='LC2937'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2938'><span class="cm">     * test utility</span></div><div class='line' id='LC2939'><span class="cm">     */</span></div><div class='line' id='LC2940'><br/></div><div class='line' id='LC2941'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">test</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./test&#39;</span><span class="p">);</span></div><div class='line' id='LC2942'><br/></div><div class='line' id='LC2943'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2944'><span class="cm">     * message utility</span></div><div class='line' id='LC2945'><span class="cm">     */</span></div><div class='line' id='LC2946'><br/></div><div class='line' id='LC2947'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">getMessage</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./getMessage&#39;</span><span class="p">);</span></div><div class='line' id='LC2948'><br/></div><div class='line' id='LC2949'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2950'><span class="cm">     * actual utility</span></div><div class='line' id='LC2951'><span class="cm">     */</span></div><div class='line' id='LC2952'><br/></div><div class='line' id='LC2953'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">getActual</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./getActual&#39;</span><span class="p">);</span></div><div class='line' id='LC2954'><br/></div><div class='line' id='LC2955'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2956'><span class="cm">     * Inspect util</span></div><div class='line' id='LC2957'><span class="cm">     */</span></div><div class='line' id='LC2958'><br/></div><div class='line' id='LC2959'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">inspect</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./inspect&#39;</span><span class="p">);</span></div><div class='line' id='LC2960'><br/></div><div class='line' id='LC2961'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2962'><span class="cm">     * Object Display util</span></div><div class='line' id='LC2963'><span class="cm">     */</span></div><div class='line' id='LC2964'><br/></div><div class='line' id='LC2965'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">objDisplay</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./objDisplay&#39;</span><span class="p">);</span></div><div class='line' id='LC2966'><br/></div><div class='line' id='LC2967'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2968'><span class="cm">     * Flag utility</span></div><div class='line' id='LC2969'><span class="cm">     */</span></div><div class='line' id='LC2970'><br/></div><div class='line' id='LC2971'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">flag</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./flag&#39;</span><span class="p">);</span></div><div class='line' id='LC2972'><br/></div><div class='line' id='LC2973'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2974'><span class="cm">     * Flag transferring utility</span></div><div class='line' id='LC2975'><span class="cm">     */</span></div><div class='line' id='LC2976'><br/></div><div class='line' id='LC2977'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">transferFlags</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./transferFlags&#39;</span><span class="p">);</span></div><div class='line' id='LC2978'><br/></div><div class='line' id='LC2979'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2980'><span class="cm">     * Deep equal utility</span></div><div class='line' id='LC2981'><span class="cm">     */</span></div><div class='line' id='LC2982'><br/></div><div class='line' id='LC2983'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">eql</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./eql&#39;</span><span class="p">);</span></div><div class='line' id='LC2984'><br/></div><div class='line' id='LC2985'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2986'><span class="cm">     * Deep path value</span></div><div class='line' id='LC2987'><span class="cm">     */</span></div><div class='line' id='LC2988'><br/></div><div class='line' id='LC2989'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">getPathValue</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./getPathValue&#39;</span><span class="p">);</span></div><div class='line' id='LC2990'><br/></div><div class='line' id='LC2991'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2992'><span class="cm">     * Function name</span></div><div class='line' id='LC2993'><span class="cm">     */</span></div><div class='line' id='LC2994'><br/></div><div class='line' id='LC2995'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">getName</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./getName&#39;</span><span class="p">);</span></div><div class='line' id='LC2996'><br/></div><div class='line' id='LC2997'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC2998'><span class="cm">     * add Property</span></div><div class='line' id='LC2999'><span class="cm">     */</span></div><div class='line' id='LC3000'><br/></div><div class='line' id='LC3001'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">addProperty</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./addProperty&#39;</span><span class="p">);</span></div><div class='line' id='LC3002'><br/></div><div class='line' id='LC3003'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC3004'><span class="cm">     * add Method</span></div><div class='line' id='LC3005'><span class="cm">     */</span></div><div class='line' id='LC3006'><br/></div><div class='line' id='LC3007'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">addMethod</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./addMethod&#39;</span><span class="p">);</span></div><div class='line' id='LC3008'><br/></div><div class='line' id='LC3009'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC3010'><span class="cm">     * overwrite Property</span></div><div class='line' id='LC3011'><span class="cm">     */</span></div><div class='line' id='LC3012'><br/></div><div class='line' id='LC3013'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">overwriteProperty</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./overwriteProperty&#39;</span><span class="p">);</span></div><div class='line' id='LC3014'><br/></div><div class='line' id='LC3015'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC3016'><span class="cm">     * overwrite Method</span></div><div class='line' id='LC3017'><span class="cm">     */</span></div><div class='line' id='LC3018'><br/></div><div class='line' id='LC3019'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">overwriteMethod</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./overwriteMethod&#39;</span><span class="p">);</span></div><div class='line' id='LC3020'><br/></div><div class='line' id='LC3021'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC3022'><span class="cm">     * Add a chainable method</span></div><div class='line' id='LC3023'><span class="cm">     */</span></div><div class='line' id='LC3024'><br/></div><div class='line' id='LC3025'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exports</span><span class="p">.</span><span class="nx">addChainableMethod</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./addChainableMethod&#39;</span><span class="p">);</span></div><div class='line' id='LC3026'><br/></div><div class='line' id='LC3027'><br/></div><div class='line' id='LC3028'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/index.js</span></div><div class='line' id='LC3029'><br/></div><div class='line' id='LC3030'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/inspect.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC3031'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// This is (almost) directly from Node.js utils</span></div><div class='line' id='LC3032'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js</span></div><div class='line' id='LC3033'><br/></div><div class='line' id='LC3034'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">getName</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./getName&#39;</span><span class="p">);</span></div><div class='line' id='LC3035'><br/></div><div class='line' id='LC3036'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">inspect</span><span class="p">;</span></div><div class='line' id='LC3037'><br/></div><div class='line' id='LC3038'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC3039'><span class="cm">     * Echos the value of a value. Trys to print the value out</span></div><div class='line' id='LC3040'><span class="cm">     * in the best way possible given the different types.</span></div><div class='line' id='LC3041'><span class="cm">     *</span></div><div class='line' id='LC3042'><span class="cm">     * @param {Object} obj The object to print out.</span></div><div class='line' id='LC3043'><span class="cm">     * @param {Boolean} showHidden Flag that shows hidden (not enumerable)</span></div><div class='line' id='LC3044'><span class="cm">     *    properties of objects.</span></div><div class='line' id='LC3045'><span class="cm">     * @param {Number} depth Depth in which to descend in object. Default is 2.</span></div><div class='line' id='LC3046'><span class="cm">     * @param {Boolean} colors Flag to turn on ANSI escape codes to color the</span></div><div class='line' id='LC3047'><span class="cm">     *    output. Default is false (no coloring).</span></div><div class='line' id='LC3048'><span class="cm">     */</span></div><div class='line' id='LC3049'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">inspect</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">showHidden</span><span class="p">,</span> <span class="nx">depth</span><span class="p">,</span> <span class="nx">colors</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3050'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ctx</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC3051'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">showHidden</span><span class="o">:</span> <span class="nx">showHidden</span><span class="p">,</span></div><div class='line' id='LC3052'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">seen</span><span class="o">:</span> <span class="p">[],</span></div><div class='line' id='LC3053'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stylize</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="nx">str</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC3054'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC3055'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">formatValue</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">obj</span><span class="p">,</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">depth</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span> <span class="o">?</span> <span class="mi">2</span> <span class="o">:</span> <span class="nx">depth</span><span class="p">));</span></div><div class='line' id='LC3056'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3057'><br/></div><div class='line' id='LC3058'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// https://gist.github.com/1044128/</span></div><div class='line' id='LC3059'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">getOuterHTML</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3060'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;outerHTML&#39;</span> <span class="k">in</span> <span class="nx">element</span><span class="p">)</span> <span class="k">return</span> <span class="nx">element</span><span class="p">.</span><span class="nx">outerHTML</span><span class="p">;</span></div><div class='line' id='LC3061'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ns</span> <span class="o">=</span> <span class="s2">&quot;http://www.w3.org/1999/xhtml&quot;</span><span class="p">;</span></div><div class='line' id='LC3062'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">container</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElementNS</span><span class="p">(</span><span class="nx">ns</span><span class="p">,</span> <span class="s1">&#39;_&#39;</span><span class="p">);</span></div><div class='line' id='LC3063'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">elemProto</span> <span class="o">=</span> <span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">HTMLElement</span> <span class="o">||</span> <span class="nb">window</span><span class="p">.</span><span class="nx">Element</span><span class="p">).</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC3064'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xmlSerializer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLSerializer</span><span class="p">();</span></div><div class='line' id='LC3065'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">html</span><span class="p">;</span></div><div class='line' id='LC3066'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">xmlVersion</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3067'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">xmlSerializer</span><span class="p">.</span><span class="nx">serializeToString</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC3068'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3069'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">element</span><span class="p">.</span><span class="nx">cloneNode</span><span class="p">(</span><span class="kc">false</span><span class="p">));</span></div><div class='line' id='LC3070'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">html</span> <span class="o">=</span> <span class="nx">container</span><span class="p">.</span><span class="nx">innerHTML</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="s1">&#39;&gt;&lt;&#39;</span><span class="p">,</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">+</span> <span class="nx">element</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">+</span> <span class="s1">&#39;&lt;&#39;</span><span class="p">);</span></div><div class='line' id='LC3071'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">container</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC3072'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">html</span><span class="p">;</span></div><div class='line' id='LC3073'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3074'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC3075'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC3076'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Returns true if object is a DOM element.</span></div><div class='line' id='LC3077'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">isDOMElement</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3078'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">HTMLElement</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3079'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">object</span> <span class="k">instanceof</span> <span class="nx">HTMLElement</span><span class="p">;</span></div><div class='line' id='LC3080'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3081'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">object</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC3082'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">typeof</span> <span class="nx">object</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC3083'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">object</span><span class="p">.</span><span class="nx">nodeType</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC3084'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">typeof</span> <span class="nx">object</span><span class="p">.</span><span class="nx">nodeName</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">;</span></div><div class='line' id='LC3085'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3086'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC3087'><br/></div><div class='line' id='LC3088'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">formatValue</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">recurseTimes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3089'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Provide a hook for user-specified inspect functions.</span></div><div class='line' id='LC3090'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Check that value is an object with an inspect function on it</span></div><div class='line' id='LC3091'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">value</span><span class="p">.</span><span class="nx">inspect</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC3092'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Filter out the util module, it&#39;s inspect function is special</span></div><div class='line' id='LC3093'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">inspect</span> <span class="o">!==</span> <span class="nx">exports</span><span class="p">.</span><span class="nx">inspect</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC3094'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Also filter out any prototype objects using the circular check.</span></div><div class='line' id='LC3095'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">!</span><span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">constructor</span> <span class="o">&amp;&amp;</span> <span class="nx">value</span><span class="p">.</span><span class="nx">constructor</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">===</span> <span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3096'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">value</span><span class="p">.</span><span class="nx">inspect</span><span class="p">(</span><span class="nx">recurseTimes</span><span class="p">);</span></div><div class='line' id='LC3097'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3098'><br/></div><div class='line' id='LC3099'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Primitive types cannot have properties</span></div><div class='line' id='LC3100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">primitive</span> <span class="o">=</span> <span class="nx">formatPrimitive</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC3101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">primitive</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3102'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">primitive</span><span class="p">;</span></div><div class='line' id='LC3103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3104'><br/></div><div class='line' id='LC3105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If it&#39;s DOM elem, get outer HTML.</span></div><div class='line' id='LC3106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isDOMElement</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">getOuterHTML</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC3108'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3109'><br/></div><div class='line' id='LC3110'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Look up the keys of the object.</span></div><div class='line' id='LC3111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">visibleKeys</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC3112'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">showHidden</span> <span class="o">?</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">getOwnPropertyNames</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">:</span> <span class="nx">visibleKeys</span><span class="p">;</span></div><div class='line' id='LC3113'><br/></div><div class='line' id='LC3114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Some type of object without properties can be shortcutted.</span></div><div class='line' id='LC3115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// In IE, errors have a single `stack` property, or if they are vanilla `Error`,</span></div><div class='line' id='LC3116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// a `stack` plus `description` property; ignore those for consistency.</span></div><div class='line' id='LC3117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">||</span> <span class="p">(</span><span class="nx">isError</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="p">(</span></div><div class='line' id='LC3118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="nx">keys</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;stack&#39;</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC3119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">2</span> <span class="o">&amp;&amp;</span> <span class="nx">keys</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;description&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">keys</span><span class="p">[</span><span class="mi">1</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;stack&#39;</span><span class="p">)</span></div><div class='line' id='LC3120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC3121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">getName</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC3123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">nameSuffix</span> <span class="o">=</span> <span class="nx">name</span> <span class="o">?</span> <span class="s1">&#39;: &#39;</span> <span class="o">+</span> <span class="nx">name</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC3124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="s1">&#39;[Function&#39;</span> <span class="o">+</span> <span class="nx">nameSuffix</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">,</span> <span class="s1">&#39;special&#39;</span><span class="p">);</span></div><div class='line' id='LC3125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isRegExp</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">),</span> <span class="s1">&#39;regexp&#39;</span><span class="p">);</span></div><div class='line' id='LC3128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isDate</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="nb">Date</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toUTCString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">),</span> <span class="s1">&#39;date&#39;</span><span class="p">);</span></div><div class='line' id='LC3131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isError</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">formatError</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC3134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3136'><br/></div><div class='line' id='LC3137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">base</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nx">array</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span> <span class="nx">braces</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;{&#39;</span><span class="p">,</span> <span class="s1">&#39;}&#39;</span><span class="p">];</span></div><div class='line' id='LC3138'><br/></div><div class='line' id='LC3139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Make Array say that they are Array</span></div><div class='line' id='LC3140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">array</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC3142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">braces</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;[&#39;</span><span class="p">,</span> <span class="s1">&#39;]&#39;</span><span class="p">];</span></div><div class='line' id='LC3143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3144'><br/></div><div class='line' id='LC3145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Make functions say that they are functions</span></div><div class='line' id='LC3146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">name</span> <span class="o">=</span> <span class="nx">getName</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC3148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">nameSuffix</span> <span class="o">=</span> <span class="nx">name</span> <span class="o">?</span> <span class="s1">&#39;: &#39;</span> <span class="o">+</span> <span class="nx">name</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC3149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">base</span> <span class="o">=</span> <span class="s1">&#39; [Function&#39;</span> <span class="o">+</span> <span class="nx">nameSuffix</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">;</span></div><div class='line' id='LC3150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3151'><br/></div><div class='line' id='LC3152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Make RegExps say that they are RegExps</span></div><div class='line' id='LC3153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isRegExp</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">base</span> <span class="o">=</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nb">RegExp</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC3155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3156'><br/></div><div class='line' id='LC3157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Make dates with properties first say the date</span></div><div class='line' id='LC3158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isDate</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">base</span> <span class="o">=</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toUTCString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC3160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3161'><br/></div><div class='line' id='LC3162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Make error with message first say the error</span></div><div class='line' id='LC3163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isError</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">formatError</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC3165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3166'><br/></div><div class='line' id='LC3167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">keys</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nx">array</span> <span class="o">||</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">0</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">braces</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="nx">base</span> <span class="o">+</span> <span class="nx">braces</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC3169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3170'><br/></div><div class='line' id='LC3171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">recurseTimes</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">isRegExp</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">),</span> <span class="s1">&#39;regexp&#39;</span><span class="p">);</span></div><div class='line' id='LC3174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="s1">&#39;[Object]&#39;</span><span class="p">,</span> <span class="s1">&#39;special&#39;</span><span class="p">);</span></div><div class='line' id='LC3176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3178'><br/></div><div class='line' id='LC3179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">seen</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC3180'><br/></div><div class='line' id='LC3181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">output</span><span class="p">;</span></div><div class='line' id='LC3182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span> <span class="o">=</span> <span class="nx">formatArray</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">recurseTimes</span><span class="p">,</span> <span class="nx">visibleKeys</span><span class="p">,</span> <span class="nx">keys</span><span class="p">);</span></div><div class='line' id='LC3184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">formatProperty</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">recurseTimes</span><span class="p">,</span> <span class="nx">visibleKeys</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">array</span><span class="p">);</span></div><div class='line' id='LC3187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC3188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3189'><br/></div><div class='line' id='LC3190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">.</span><span class="nx">seen</span><span class="p">.</span><span class="nx">pop</span><span class="p">();</span></div><div class='line' id='LC3191'><br/></div><div class='line' id='LC3192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">reduceToSingleString</span><span class="p">(</span><span class="nx">output</span><span class="p">,</span> <span class="nx">base</span><span class="p">,</span> <span class="nx">braces</span><span class="p">);</span></div><div class='line' id='LC3193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3194'><br/></div><div class='line' id='LC3195'><br/></div><div class='line' id='LC3196'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">formatPrimitive</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;undefined&#39;</span><span class="o">:</span></div><div class='line' id='LC3199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="s1">&#39;undefined&#39;</span><span class="p">,</span> <span class="s1">&#39;undefined&#39;</span><span class="p">);</span></div><div class='line' id='LC3200'><br/></div><div class='line' id='LC3201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;string&#39;</span><span class="o">:</span></div><div class='line' id='LC3202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">simple</span> <span class="o">=</span> <span class="s1">&#39;\&#39;&#39;</span> <span class="o">+</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">value</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/^&quot;|&quot;$/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)</span></div><div class='line' id='LC3203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&#39;/g</span><span class="p">,</span> <span class="s2">&quot;\\&#39;&quot;</span><span class="p">)</span></div><div class='line' id='LC3204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\&quot;/g</span><span class="p">,</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC3205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="nx">simple</span><span class="p">,</span> <span class="s1">&#39;string&#39;</span><span class="p">);</span></div><div class='line' id='LC3206'><br/></div><div class='line' id='LC3207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;number&#39;</span><span class="o">:</span></div><div class='line' id='LC3208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">,</span> <span class="s1">&#39;number&#39;</span><span class="p">);</span></div><div class='line' id='LC3209'><br/></div><div class='line' id='LC3210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;boolean&#39;</span><span class="o">:</span></div><div class='line' id='LC3211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">,</span> <span class="s1">&#39;boolean&#39;</span><span class="p">);</span></div><div class='line' id='LC3212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// For some reason typeof null is &quot;object&quot;, so special case here.</span></div><div class='line' id='LC3214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="s1">&#39;null&#39;</span><span class="p">,</span> <span class="s1">&#39;null&#39;</span><span class="p">);</span></div><div class='line' id='LC3216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3217'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3218'><br/></div><div class='line' id='LC3219'><br/></div><div class='line' id='LC3220'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">formatError</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;[&#39;</span> <span class="o">+</span> <span class="nb">Error</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">;</span></div><div class='line' id='LC3222'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3223'><br/></div><div class='line' id='LC3224'><br/></div><div class='line' id='LC3225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">formatArray</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">recurseTimes</span><span class="p">,</span> <span class="nx">visibleKeys</span><span class="p">,</span> <span class="nx">keys</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3226'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">output</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC3227'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">l</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">;</span> <span class="o">++</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nb">String</span><span class="p">(</span><span class="nx">i</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC3229'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">formatProperty</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">recurseTimes</span><span class="p">,</span> <span class="nx">visibleKeys</span><span class="p">,</span></div><div class='line' id='LC3230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">String</span><span class="p">(</span><span class="nx">i</span><span class="p">),</span> <span class="kc">true</span><span class="p">));</span></div><div class='line' id='LC3231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC3233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">keys</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">key</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^\d+$/</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">formatProperty</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">recurseTimes</span><span class="p">,</span> <span class="nx">visibleKeys</span><span class="p">,</span></div><div class='line' id='LC3238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">key</span><span class="p">,</span> <span class="kc">true</span><span class="p">));</span></div><div class='line' id='LC3239'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC3241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">output</span><span class="p">;</span></div><div class='line' id='LC3242'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3243'><br/></div><div class='line' id='LC3244'><br/></div><div class='line' id='LC3245'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">formatProperty</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">value</span><span class="p">,</span> <span class="nx">recurseTimes</span><span class="p">,</span> <span class="nx">visibleKeys</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC3247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">__lookupGetter__</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">__lookupGetter__</span><span class="p">(</span><span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">__lookupSetter__</span><span class="p">(</span><span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="s1">&#39;[Getter/Setter]&#39;</span><span class="p">,</span> <span class="s1">&#39;special&#39;</span><span class="p">);</span></div><div class='line' id='LC3251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="s1">&#39;[Getter]&#39;</span><span class="p">,</span> <span class="s1">&#39;special&#39;</span><span class="p">);</span></div><div class='line' id='LC3253'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span><span class="p">.</span><span class="nx">__lookupSetter__</span><span class="p">(</span><span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="s1">&#39;[Setter]&#39;</span><span class="p">,</span> <span class="s1">&#39;special&#39;</span><span class="p">);</span></div><div class='line' id='LC3257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">visibleKeys</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span> <span class="o">=</span> <span class="s1">&#39;[&#39;</span> <span class="o">+</span> <span class="nx">key</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">;</span></div><div class='line' id='LC3262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">ctx</span><span class="p">.</span><span class="nx">seen</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">value</span><span class="p">[</span><span class="nx">key</span><span class="p">])</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">recurseTimes</span> <span class="o">===</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">formatValue</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">value</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC3267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">formatValue</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">value</span><span class="p">[</span><span class="nx">key</span><span class="p">],</span> <span class="nx">recurseTimes</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC3269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;\n&#39;</span><span class="p">)</span> <span class="o">&gt;</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;\n&#39;</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">line</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;  &#39;</span> <span class="o">+</span> <span class="nx">line</span><span class="p">;</span></div><div class='line' id='LC3274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;\n&#39;</span><span class="p">).</span><span class="nx">substr</span><span class="p">(</span><span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC3275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="s1">&#39;\n&#39;</span> <span class="o">+</span> <span class="nx">str</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s1">&#39;\n&#39;</span><span class="p">).</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">line</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;   &#39;</span> <span class="o">+</span> <span class="nx">line</span><span class="p">;</span></div><div class='line' id='LC3278'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}).</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;\n&#39;</span><span class="p">);</span></div><div class='line' id='LC3279'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3280'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3281'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">str</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="s1">&#39;[Circular]&#39;</span><span class="p">,</span> <span class="s1">&#39;special&#39;</span><span class="p">);</span></div><div class='line' id='LC3283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">name</span> <span class="o">===</span> <span class="s1">&#39;undefined&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">array</span> <span class="o">&amp;&amp;</span> <span class="nx">key</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^\d+$/</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC3288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC3290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^&quot;([a-zA-Z_][a-zA-Z_0-9]*)&quot;$/</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span> <span class="o">=</span> <span class="nx">name</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nx">name</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC3292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="s1">&#39;name&#39;</span><span class="p">);</span></div><div class='line' id='LC3293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span> <span class="o">=</span> <span class="nx">name</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&#39;/g</span><span class="p">,</span> <span class="s2">&quot;\\&#39;&quot;</span><span class="p">)</span></div><div class='line' id='LC3295'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\&quot;/g</span><span class="p">,</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">)</span></div><div class='line' id='LC3296'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(^&quot;|&quot;$)/g</span><span class="p">,</span> <span class="s2">&quot;&#39;&quot;</span><span class="p">);</span></div><div class='line' id='LC3297'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">stylize</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="s1">&#39;string&#39;</span><span class="p">);</span></div><div class='line' id='LC3298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3300'><br/></div><div class='line' id='LC3301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39;: &#39;</span> <span class="o">+</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC3302'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3303'><br/></div><div class='line' id='LC3304'><br/></div><div class='line' id='LC3305'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">reduceToSingleString</span><span class="p">(</span><span class="nx">output</span><span class="p">,</span> <span class="nx">base</span><span class="p">,</span> <span class="nx">braces</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">numLinesEst</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC3307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">output</span><span class="p">.</span><span class="nx">reduce</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">prev</span><span class="p">,</span> <span class="nx">cur</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">numLinesEst</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC3309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cur</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s1">&#39;\n&#39;</span><span class="p">)</span> <span class="o">&gt;=</span> <span class="mi">0</span><span class="p">)</span> <span class="nx">numLinesEst</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC3310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">prev</span> <span class="o">+</span> <span class="nx">cur</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC3311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC3312'><br/></div><div class='line' id='LC3313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">60</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">braces</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span></div><div class='line' id='LC3315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">base</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span> <span class="o">?</span> <span class="s1">&#39;&#39;</span> <span class="o">:</span> <span class="nx">base</span> <span class="o">+</span> <span class="s1">&#39;\n &#39;</span><span class="p">)</span> <span class="o">+</span></div><div class='line' id='LC3316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39; &#39;</span> <span class="o">+</span></div><div class='line' id='LC3317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,\n  &#39;</span><span class="p">)</span> <span class="o">+</span></div><div class='line' id='LC3318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39; &#39;</span> <span class="o">+</span></div><div class='line' id='LC3319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">braces</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC3320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3321'><br/></div><div class='line' id='LC3322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">braces</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">+</span> <span class="nx">base</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">output</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;, &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">braces</span><span class="p">[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC3323'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3324'><br/></div><div class='line' id='LC3325'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isArray</span><span class="p">(</span><span class="nx">ar</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">ar</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC3327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="k">typeof</span> <span class="nx">ar</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">objectToString</span><span class="p">(</span><span class="nx">ar</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">);</span></div><div class='line' id='LC3328'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3329'><br/></div><div class='line' id='LC3330'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isRegExp</span><span class="p">(</span><span class="nx">re</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span> <span class="nx">re</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">objectToString</span><span class="p">(</span><span class="nx">re</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;[object RegExp]&#39;</span><span class="p">;</span></div><div class='line' id='LC3332'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3333'><br/></div><div class='line' id='LC3334'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isDate</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span> <span class="nx">d</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">objectToString</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;[object Date]&#39;</span><span class="p">;</span></div><div class='line' id='LC3336'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3337'><br/></div><div class='line' id='LC3338'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">isError</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span> <span class="nx">e</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">objectToString</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;[object Error]&#39;</span><span class="p">;</span></div><div class='line' id='LC3340'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3341'><br/></div><div class='line' id='LC3342'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">objectToString</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">o</span><span class="p">);</span></div><div class='line' id='LC3344'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3345'><br/></div><div class='line' id='LC3346'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/inspect.js</span></div><div class='line' id='LC3347'><br/></div><div class='line' id='LC3348'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/objDisplay.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC3349'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC3350'><span class="cm">     * Chai - flag utility</span></div><div class='line' id='LC3351'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC3352'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC3353'><span class="cm">     */</span></div><div class='line' id='LC3354'><br/></div><div class='line' id='LC3355'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC3356'><span class="cm">     * Module dependancies</span></div><div class='line' id='LC3357'><span class="cm">     */</span></div><div class='line' id='LC3358'><br/></div><div class='line' id='LC3359'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">inspect</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./inspect&#39;</span><span class="p">);</span></div><div class='line' id='LC3360'><br/></div><div class='line' id='LC3361'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC3362'><span class="cm">     * ### .objDisplay (object)</span></div><div class='line' id='LC3363'><span class="cm">     *</span></div><div class='line' id='LC3364'><span class="cm">     * Determines if an object or an array matches</span></div><div class='line' id='LC3365'><span class="cm">     * criteria to be inspected in-line for error</span></div><div class='line' id='LC3366'><span class="cm">     * messages or should be truncated.</span></div><div class='line' id='LC3367'><span class="cm">     *</span></div><div class='line' id='LC3368'><span class="cm">     * @param {Mixed} javascript object to inspect</span></div><div class='line' id='LC3369'><span class="cm">     * @name objDisplay</span></div><div class='line' id='LC3370'><span class="cm">     * @api public</span></div><div class='line' id='LC3371'><span class="cm">     */</span></div><div class='line' id='LC3372'><br/></div><div class='line' id='LC3373'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">inspect</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span></div><div class='line' id='LC3375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">type</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">obj</span><span class="p">);</span></div><div class='line' id='LC3376'><br/></div><div class='line' id='LC3377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">str</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;=</span> <span class="mi">40</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;[ Array(&#39;</span> <span class="o">+</span> <span class="nx">obj</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="s1">&#39;) ]&#39;</span><span class="p">;</span></div><div class='line' id='LC3380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;[object Object]&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">keys</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">keys</span><span class="p">(</span><span class="nx">obj</span><span class="p">)</span></div><div class='line' id='LC3382'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">kstr</span> <span class="o">=</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">2</span></div><div class='line' id='LC3383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;, &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;, ...&#39;</span></div><div class='line' id='LC3384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nx">keys</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;, &#39;</span><span class="p">);</span></div><div class='line' id='LC3385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;{ Object (&#39;</span> <span class="o">+</span> <span class="nx">kstr</span> <span class="o">+</span> <span class="s1">&#39;) }&#39;</span><span class="p">;</span></div><div class='line' id='LC3386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC3388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3389'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC3390'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">;</span></div><div class='line' id='LC3391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3392'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC3393'><br/></div><div class='line' id='LC3394'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/objDisplay.js</span></div><div class='line' id='LC3395'><br/></div><div class='line' id='LC3396'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/overwriteMethod.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC3397'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC3398'><span class="cm">     * Chai - overwriteMethod utility</span></div><div class='line' id='LC3399'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC3400'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC3401'><span class="cm">     */</span></div><div class='line' id='LC3402'><br/></div><div class='line' id='LC3403'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC3404'><span class="cm">     * ### overwriteMethod (ctx, name, fn)</span></div><div class='line' id='LC3405'><span class="cm">     *</span></div><div class='line' id='LC3406'><span class="cm">     * Overwites an already existing method and provides</span></div><div class='line' id='LC3407'><span class="cm">     * access to previous function. Must return function</span></div><div class='line' id='LC3408'><span class="cm">     * to be used for name.</span></div><div class='line' id='LC3409'><span class="cm">     *</span></div><div class='line' id='LC3410'><span class="cm">     *     utils.overwriteMethod(chai.Assertion.prototype, &#39;equal&#39;, function (_super) {</span></div><div class='line' id='LC3411'><span class="cm">     *       return function (str) {</span></div><div class='line' id='LC3412'><span class="cm">     *         var obj = utils.flag(this, &#39;object&#39;);</span></div><div class='line' id='LC3413'><span class="cm">     *         if (obj instanceof Foo) {</span></div><div class='line' id='LC3414'><span class="cm">     *           new chai.Assertion(obj.value).to.equal(str);</span></div><div class='line' id='LC3415'><span class="cm">     *         } else {</span></div><div class='line' id='LC3416'><span class="cm">     *           _super.apply(this, arguments);</span></div><div class='line' id='LC3417'><span class="cm">     *         }</span></div><div class='line' id='LC3418'><span class="cm">     *       }</span></div><div class='line' id='LC3419'><span class="cm">     *     });</span></div><div class='line' id='LC3420'><span class="cm">     *</span></div><div class='line' id='LC3421'><span class="cm">     * Can also be accessed directly from `chai.Assertion`.</span></div><div class='line' id='LC3422'><span class="cm">     *</span></div><div class='line' id='LC3423'><span class="cm">     *     chai.Assertion.overwriteMethod(&#39;foo&#39;, fn);</span></div><div class='line' id='LC3424'><span class="cm">     *</span></div><div class='line' id='LC3425'><span class="cm">     * Then can be used as any other assertion.</span></div><div class='line' id='LC3426'><span class="cm">     *</span></div><div class='line' id='LC3427'><span class="cm">     *     expect(myFoo).to.equal(&#39;bar&#39;);</span></div><div class='line' id='LC3428'><span class="cm">     *</span></div><div class='line' id='LC3429'><span class="cm">     * @param {Object} ctx object whose method is to be overwritten</span></div><div class='line' id='LC3430'><span class="cm">     * @param {String} name of method to overwrite</span></div><div class='line' id='LC3431'><span class="cm">     * @param {Function} method function that returns a function to be used for name</span></div><div class='line' id='LC3432'><span class="cm">     * @name overwriteMethod</span></div><div class='line' id='LC3433'><span class="cm">     * @api public</span></div><div class='line' id='LC3434'><span class="cm">     */</span></div><div class='line' id='LC3435'><br/></div><div class='line' id='LC3436'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_method</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span></div><div class='line' id='LC3438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">_super</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span> <span class="k">return</span> <span class="k">this</span><span class="p">;</span> <span class="p">};</span></div><div class='line' id='LC3439'><br/></div><div class='line' id='LC3440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_method</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;function&#39;</span> <span class="o">===</span> <span class="k">typeof</span> <span class="nx">_method</span><span class="p">)</span></div><div class='line' id='LC3441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_super</span> <span class="o">=</span> <span class="nx">_method</span><span class="p">;</span></div><div class='line' id='LC3442'><br/></div><div class='line' id='LC3443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ctx</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC3444'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">method</span><span class="p">(</span><span class="nx">_super</span><span class="p">).</span><span class="nx">apply</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC3445'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="k">this</span> <span class="o">:</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC3446'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3447'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC3448'><br/></div><div class='line' id='LC3449'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/overwriteMethod.js</span></div><div class='line' id='LC3450'><br/></div><div class='line' id='LC3451'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/overwriteProperty.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC3452'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC3453'><span class="cm">     * Chai - overwriteProperty utility</span></div><div class='line' id='LC3454'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC3455'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC3456'><span class="cm">     */</span></div><div class='line' id='LC3457'><br/></div><div class='line' id='LC3458'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC3459'><span class="cm">     * ### overwriteProperty (ctx, name, fn)</span></div><div class='line' id='LC3460'><span class="cm">     *</span></div><div class='line' id='LC3461'><span class="cm">     * Overwites an already existing property getter and provides</span></div><div class='line' id='LC3462'><span class="cm">     * access to previous value. Must return function to use as getter.</span></div><div class='line' id='LC3463'><span class="cm">     *</span></div><div class='line' id='LC3464'><span class="cm">     *     utils.overwriteProperty(chai.Assertion.prototype, &#39;ok&#39;, function (_super) {</span></div><div class='line' id='LC3465'><span class="cm">     *       return function () {</span></div><div class='line' id='LC3466'><span class="cm">     *         var obj = utils.flag(this, &#39;object&#39;);</span></div><div class='line' id='LC3467'><span class="cm">     *         if (obj instanceof Foo) {</span></div><div class='line' id='LC3468'><span class="cm">     *           new chai.Assertion(obj.name).to.equal(&#39;bar&#39;);</span></div><div class='line' id='LC3469'><span class="cm">     *         } else {</span></div><div class='line' id='LC3470'><span class="cm">     *           _super.call(this);</span></div><div class='line' id='LC3471'><span class="cm">     *         }</span></div><div class='line' id='LC3472'><span class="cm">     *       }</span></div><div class='line' id='LC3473'><span class="cm">     *     });</span></div><div class='line' id='LC3474'><span class="cm">     *</span></div><div class='line' id='LC3475'><span class="cm">     *</span></div><div class='line' id='LC3476'><span class="cm">     * Can also be accessed directly from `chai.Assertion`.</span></div><div class='line' id='LC3477'><span class="cm">     *</span></div><div class='line' id='LC3478'><span class="cm">     *     chai.Assertion.overwriteProperty(&#39;foo&#39;, fn);</span></div><div class='line' id='LC3479'><span class="cm">     *</span></div><div class='line' id='LC3480'><span class="cm">     * Then can be used as any other assertion.</span></div><div class='line' id='LC3481'><span class="cm">     *</span></div><div class='line' id='LC3482'><span class="cm">     *     expect(myFoo).to.be.ok;</span></div><div class='line' id='LC3483'><span class="cm">     *</span></div><div class='line' id='LC3484'><span class="cm">     * @param {Object} ctx object whose property is to be overwritten</span></div><div class='line' id='LC3485'><span class="cm">     * @param {String} name of property to overwrite</span></div><div class='line' id='LC3486'><span class="cm">     * @param {Function} getter function that returns a getter function to be used for name</span></div><div class='line' id='LC3487'><span class="cm">     * @name overwriteProperty</span></div><div class='line' id='LC3488'><span class="cm">     * @api public</span></div><div class='line' id='LC3489'><span class="cm">     */</span></div><div class='line' id='LC3490'><br/></div><div class='line' id='LC3491'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">getter</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">_get</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">getOwnPropertyDescriptor</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">name</span><span class="p">)</span></div><div class='line' id='LC3493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">_super</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{};</span></div><div class='line' id='LC3494'><br/></div><div class='line' id='LC3495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">_get</span> <span class="o">&amp;&amp;</span> <span class="s1">&#39;function&#39;</span> <span class="o">===</span> <span class="k">typeof</span> <span class="nx">_get</span><span class="p">.</span><span class="nx">get</span><span class="p">)</span></div><div class='line' id='LC3496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">_super</span> <span class="o">=</span> <span class="nx">_get</span><span class="p">.</span><span class="nx">get</span></div><div class='line' id='LC3497'><br/></div><div class='line' id='LC3498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">ctx</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span></div><div class='line' id='LC3499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span> <span class="nx">get</span><span class="o">:</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC3500'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">getter</span><span class="p">(</span><span class="nx">_super</span><span class="p">).</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></div><div class='line' id='LC3501'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">?</span> <span class="k">this</span> <span class="o">:</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC3502'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">configurable</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC3504'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC3505'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC3506'><br/></div><div class='line' id='LC3507'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/overwriteProperty.js</span></div><div class='line' id='LC3508'><br/></div><div class='line' id='LC3509'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/test.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC3510'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC3511'><span class="cm">     * Chai - test utility</span></div><div class='line' id='LC3512'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC3513'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC3514'><span class="cm">     */</span></div><div class='line' id='LC3515'><br/></div><div class='line' id='LC3516'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC3517'><span class="cm">     * Module dependancies</span></div><div class='line' id='LC3518'><span class="cm">     */</span></div><div class='line' id='LC3519'><br/></div><div class='line' id='LC3520'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">flag</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;./flag&#39;</span><span class="p">);</span></div><div class='line' id='LC3521'><br/></div><div class='line' id='LC3522'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC3523'><span class="cm">     * # test(object, expression)</span></div><div class='line' id='LC3524'><span class="cm">     *</span></div><div class='line' id='LC3525'><span class="cm">     * Test and object for expression.</span></div><div class='line' id='LC3526'><span class="cm">     *</span></div><div class='line' id='LC3527'><span class="cm">     * @param {Object} object (constructed Assertion)</span></div><div class='line' id='LC3528'><span class="cm">     * @param {Arguments} chai.Assertion.prototype.assert arguments</span></div><div class='line' id='LC3529'><span class="cm">     */</span></div><div class='line' id='LC3530'><br/></div><div class='line' id='LC3531'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">args</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">negate</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="s1">&#39;negate&#39;</span><span class="p">)</span></div><div class='line' id='LC3533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">,</span> <span class="nx">expr</span> <span class="o">=</span> <span class="nx">args</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC3534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">negate</span> <span class="o">?</span> <span class="o">!</span><span class="nx">expr</span> <span class="o">:</span> <span class="nx">expr</span><span class="p">;</span></div><div class='line' id='LC3535'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC3536'><br/></div><div class='line' id='LC3537'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/test.js</span></div><div class='line' id='LC3538'><br/></div><div class='line' id='LC3539'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">register</span><span class="p">(</span><span class="s2">&quot;chai/utils/transferFlags.js&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="nx">exports</span><span class="p">,</span> <span class="nx">require</span><span class="p">){</span></div><div class='line' id='LC3540'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/*!</span></div><div class='line' id='LC3541'><span class="cm">     * Chai - transferFlags utility</span></div><div class='line' id='LC3542'><span class="cm">     * Copyright(c) 2012 Jake Luer &lt;jake@alogicalparadox.com&gt;</span></div><div class='line' id='LC3543'><span class="cm">     * MIT Licensed</span></div><div class='line' id='LC3544'><span class="cm">     */</span></div><div class='line' id='LC3545'><br/></div><div class='line' id='LC3546'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC3547'><span class="cm">     * ### transferFlags(assertion, object, includeAll = true)</span></div><div class='line' id='LC3548'><span class="cm">     *</span></div><div class='line' id='LC3549'><span class="cm">     * Transfer all the flags for `assertion` to `object`. If</span></div><div class='line' id='LC3550'><span class="cm">     * `includeAll` is set to `false`, then the base Chai</span></div><div class='line' id='LC3551'><span class="cm">     * assertion flags (namely `object`, `ssfi`, and `message`)</span></div><div class='line' id='LC3552'><span class="cm">     * will not be transferred.</span></div><div class='line' id='LC3553'><span class="cm">     *</span></div><div class='line' id='LC3554'><span class="cm">     *</span></div><div class='line' id='LC3555'><span class="cm">     *     var newAssertion = new Assertion();</span></div><div class='line' id='LC3556'><span class="cm">     *     utils.transferFlags(assertion, newAssertion);</span></div><div class='line' id='LC3557'><span class="cm">     *</span></div><div class='line' id='LC3558'><span class="cm">     *     var anotherAsseriton = new Assertion(myObj);</span></div><div class='line' id='LC3559'><span class="cm">     *     utils.transferFlags(assertion, anotherAssertion, false);</span></div><div class='line' id='LC3560'><span class="cm">     *</span></div><div class='line' id='LC3561'><span class="cm">     * @param {Assertion} assertion the assertion to transfer the flags from</span></div><div class='line' id='LC3562'><span class="cm">     * @param {Object} object the object to transfer the flags too; usually a new assertion</span></div><div class='line' id='LC3563'><span class="cm">     * @param {Boolean} includeAll</span></div><div class='line' id='LC3564'><span class="cm">     * @name getAllFlags</span></div><div class='line' id='LC3565'><span class="cm">     * @api private</span></div><div class='line' id='LC3566'><span class="cm">     */</span></div><div class='line' id='LC3567'><br/></div><div class='line' id='LC3568'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">assertion</span><span class="p">,</span> <span class="nx">object</span><span class="p">,</span> <span class="nx">includeAll</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3569'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">flags</span> <span class="o">=</span> <span class="nx">assertion</span><span class="p">.</span><span class="nx">__flags</span> <span class="o">||</span> <span class="p">(</span><span class="nx">assertion</span><span class="p">.</span><span class="nx">__flags</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="kc">null</span><span class="p">));</span></div><div class='line' id='LC3570'><br/></div><div class='line' id='LC3571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">object</span><span class="p">.</span><span class="nx">__flags</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">object</span><span class="p">.</span><span class="nx">__flags</span> <span class="o">=</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">create</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC3573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3574'><br/></div><div class='line' id='LC3575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">includeAll</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">3</span> <span class="o">?</span> <span class="nx">includeAll</span> <span class="o">:</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC3576'><br/></div><div class='line' id='LC3577'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">flag</span> <span class="k">in</span> <span class="nx">flags</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC3578'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">includeAll</span> <span class="o">||</span></div><div class='line' id='LC3579'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">flag</span> <span class="o">!==</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">flag</span> <span class="o">!==</span> <span class="s1">&#39;ssfi&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">flag</span> <span class="o">!=</span> <span class="s1">&#39;message&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC3580'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">object</span><span class="p">.</span><span class="nx">__flags</span><span class="p">[</span><span class="nx">flag</span><span class="p">]</span> <span class="o">=</span> <span class="nx">flags</span><span class="p">[</span><span class="nx">flag</span><span class="p">];</span></div><div class='line' id='LC3581'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3582'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC3583'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC3584'><br/></div><div class='line' id='LC3585'>&nbsp;&nbsp;<span class="p">});</span> <span class="c1">// module: chai/utils/transferFlags.js</span></div><div class='line' id='LC3586'><br/></div><div class='line' id='LC3587'>&nbsp;&nbsp;<span class="nx">require</span><span class="p">.</span><span class="nx">alias</span><span class="p">(</span><span class="s2">&quot;./chai.js&quot;</span><span class="p">,</span> <span class="s2">&quot;chai&quot;</span><span class="p">);</span></div><div class='line' id='LC3588'><br/></div><div class='line' id='LC3589'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;chai&#39;</span><span class="p">);</span></div><div class='line' id='LC3590'><span class="p">});</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.36514s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-c044173f1e759e8299dbe414ec8ed23e4405bdc5.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-74e851f4000749a3230468d50d3efc5a58a388e4.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

