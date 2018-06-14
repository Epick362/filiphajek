<!DOCTYPE html>
    <head>
        <title>Filip Hajek - Freelance Web developer/designer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192">
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="/manifest.json">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <meta property="og:url" content="https://filiphajek.com/">
        <meta property="og:title" content="Filip Hajek | Web developer">
        <meta property="og:description" content="Freelance web developer">
        <meta property="og:site_name" content="Filip Hajek">
        <meta property="og:image" content="https://filiphajek.com/apple-touch-icon-180x180.png">
        <meta property="og:type" content="website">
        <meta property="og:locale" content="en_US">

        <link rel="stylesheet" href="{{ url('build/vendor.min.css') }}">
        <link rel="stylesheet" href="{{ url('build/app.css') }}">
        <base href="/" />
    </head>
    <body ng-app="app" ng-cloak>
        <nav class="navbar navbar-dark navbar-fixed-top" ng-class="(!$state.is('index') || forceOpaque || !navCollapsed) ? 'bg-inverse' : 'bg-transparent'">
            <div class="container">
                <button class="navbar-toggler hidden-sm-up" type="button" ng-init="navCollapsed = true" ng-click="navCollapsed = !navCollapsed">
                    &#9776;
                </button>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-toggleable-xs" collapse="navCollapsed">
                    <a class="navbar-brand" href="/">
                        Filip Hajek
                    </a>

                    <ul class="nav navbar-nav">
                        <li class="nav-item"><a class="nav-link" ui-sref="projects">@{{ 'PROJECTS' | translate }}</a></li>
                        <li class="nav-item"><a class="nav-link" ui-sref="contact">@{{ 'CONTACT' | translate }}</a></li>

                        <li class="nav-item" ng-if="authenticated">
                            <a class="nav-link" ui-sref="index">
                                <i class="fa fa-user"></i> @{{currentUser.name}}
                            </a>
                        </li>
                        <li class="nav-item" ng-if="authenticated">
                            <logout></logout>
                        </li>
                    </ul>

                    <language-picker></language-picker>
                </div>
            </div>
        </nav>

        <div ui-view></div>

        <div class="footer-margin"></div>
        <footer>
            <div class="container">
                &copy; {{ date('Y') }} Filiphajek.com

                <div class="pull-right">
                    <ul class="list-unstyled list-inline list-social">
                        <li class="list-inline-item"><a href="https://github.com/Epick362"><i class="fa fa-github"></i> Github</a></li>
                        <li class="list-inline-item"><a href="https://www.facebook.com/filiphajekwebdev/"><i class="fa fa-facebook"></i> Facebook</a></li>
                    </ul>
                </div>
            </div>
        </footer>

        <script type="text/javascript" src="{{ url('build/vendor.min.js') }}"></script>
        <script type="text/javascript" src="{{ url('build/app.min.js') }}"></script>

        @if (app('env') == 'local')
<script id="__bs_script__">//<![CDATA[
document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.2.12.3.js'><\/script>".replace("HOST", location.hostname));
//]]></script>
        @endif
    </body>
</html>
