<!DOCTYPE html>
    <head>
        <title>Bootstrap</title>
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
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="/manifest.json">
        <meta name="msapplication-TileColor" content="#d6a941">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <meta name="theme-color" content="#ffffff">

        <link rel="stylesheet" href="{{ url('build/vendor.min.css') }}">
        <link rel="stylesheet" href="{{ url('build/app.css') }}">
        <base href="/" />
    </head>
    <body ng-app="app" ng-cloak>
        <nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
            <button class="navbar-toggler hidden-sm-up" type="button" ng-init="navCollapsed = true" ng-click="navCollapsed = !navCollapsed">
                &#9776;
            </button>

                <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-toggleable-xs" collapse="navCollapsed">
                <a class="navbar-brand" href="/">
                    Bootstrap
                </a>

                <ul class="nav navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="item">item</a></li>
                </ul>

                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item" ng-if="authenticated">
                        <a class="nav-link" ui-sref="index">
                            <i class="fa fa-user"></i> @{{currentUser.name}}
                        </a>
                    </li>
                    <li class="nav-item" ng-if="authenticated">
                        <logout></logout>
                    </li>
                    <li class="nav-item" ng-if="!authenticated">
                        <a class="nav-link" ui-sref="login">
                            Log In
                        </a>
                    </li>
                    <li class="nav-item" ng-if="!authenticated">
                        <a class="nav-link" ui-sref="register">
                            Sign Up
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container content">
            <ui-view></ui-view>
        </div>

        <script type="text/javascript" src="{{ url('build/vendor.min.js') }}"></script>
        <script type="text/javascript" src="{{ url('build/app.min.js') }}"></script>

        @if (app('env') == 'local')
<script id="__bs_script__">//<![CDATA[
document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.2.12.3.js'><\/script>".replace("HOST", location.hostname));
//]]></script>
        @endif
    </body>
</html>
