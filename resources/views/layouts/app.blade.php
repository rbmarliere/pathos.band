<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Pathos') }}</title>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">

    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container" style="">
                <div class="navbar-header">
                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" href="{{ url('/') }}" style="font-family: tattegrain; font-size: 36px; letter-spacing: 2px;">
                        {{ config('app.name') }}
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#" v-scroll-to="'#press'">Press</a></li>
                        <li><a href="#" v-scroll-to="'#discography'">Discography</a></li>
                        <li><a href="#" v-scroll-to="'#media'">Media</a></li>
                        <li><a href="#" v-scroll-to="'#about'">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container-fluid">
            <parallax :speed-factor=0.30>
                <img src="img/pathos.jpg"/>
            </parallax>

        </div>

        <div id="press" class="container">
            <div class="jumbotron">
              <h1>Hello, world!</h1>
              <p>...</p>
              <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
        </div>

        <div id="discography" class="container">
            <div class="jumbotron">
              <h1>Hello, world!</h1>
              <p>...</p>
              <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
        </div>

        <div id="media" class="container">
            media
        </div>

        <div id="about" class="container">
            about
        </div>

        <div class="container">
            <footer class="site-footer footer-light">
                <div class="text-light">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6 text-center">
                                <p class="copyright-text">
                                    pathosound.com Copyright © 2017 by Pathos
                                </p>
                            </div>
                            <div class="col-sm-2 text-right" style="top-margin: 1px;">
                                <a target="_tab" href="https://pathos-sound.bandcamp.com/">
                                    <icon name="bandcamp"></icon>
                                </a>
                                <a target="_tab" href="https://www.facebook.com/pathos.sound/">
                                    <icon name="facebook"></icon>
                                </a>
                                <a target="_tab" href="https://www.instagram.com/pathos.sound/">
                                    <icon name="instagram"></icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    </div>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ mix('js/manifest.js') }}"></script>
    <script src="{{ mix('js/vendor.js') }}"></script>
</body>
</html>
