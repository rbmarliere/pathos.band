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
                    <a class="navbar-brand" href="#" v-scroll-to="'#main'" style="font-family: tattegrain; font-size: 36px; letter-spacing: 2px;">
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

        <div id="main">
            <parallax :speed-factor=0.20 :section-height=55>
                <img src="img/pathos.jpg"/>
            </parallax>
        </div>

        <hr/>

        <div id="press" class="container">
        </div>

        <hr/>

        <div id="discography" class="container">
            <div class="row">
                <div class="col-sm-6 text-center">
                    <h1>Elixir</h1>
                    <p>2015</p>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-2" style="padding-left: 0px;  padding-right: 0px;">
                    <img src="img/elixir.png" class="img-responsive">
                </div>
            </div>
        </div>

        <hr/>

        <div id="media" class="container">
http://www.tribunademinas.com.br/pedrada-sonora/
http://oganpazan.com.br/elixir-2015-pathos/
http://doomedandstoned.com/post/126164534683/papapaulsgroovyreviews
http://stonerking1.blogspot.com.br/2015/08/pathos-elixir-brazil-prog-stoners-debut.html

        <photos></photos>

        </div>

        <hr/>

        <div id="about" class="container">
            <p>A Pathos é uma banda de stoner rock progressivo, de Juiz de Fora, Minas Gerais. Formada no início de 2014 por Hugo Moutinho (bateria), JP Vieira (voz), Lucas Guida (baixo) e Ricardo Marliere (guitarra). No segundo semestre de 2014 a banda passou por um árduo processo de composição, gravando seu álbum de estreia nos dias 21 e 22 de fevereiro de 2015, nomeado "Elixir". O disco foi produzido pela banda e por Arthur Damásio de forma independente e lançado em agosto de 2015, obtendo boa aceitação no Brasil e no exterior, sendo lançado, posteriormente, em vinil pelo selo alemão Krauted Mind Records. Após mais de um ano em hiato, ao fim de 2016 a banda retornou aos palcos de Juiz de Fora para participar do Festival Cultural Sangue Novo (mais de 70 artistas inscritos, sendo 20 participantes), ficando em 2° lugar. No início de 2017, Luiz Henrique Andrès (teclado) se integrou à banda.</p>
        </div>

        <hr/>

        <div class="container">
            <div class="row">
                <div class="col-xs-12 text-center pagination-centered">
                    <a style="color: #343434;" target="_tab" href="https://pathos-sound.bandcamp.com/">
                        <icon name="bandcamp" scale="4"></icon>
                    </a>
                    &nbsp; &nbsp;
                    <a style="color: #343434;" target="_tab" href="https://www.facebook.com/pathos.sound/">
                        <icon name="facebook" scale="4"></icon>
                    </a>
                    &nbsp; &nbsp;
                    <a style="color: #343434;" target="_tab" href="https://www.instagram.com/pathos.sound/">
                        <icon name="instagram" scale="4"></icon>
                    </a>
                    &nbsp; &nbsp;
                    <a style="color: #343434;" target="_tab" href="https://www.youtube.com/channel/UCT6Sk9JezXTip94txp0aSfQ">
                        <icon name="youtube" scale="4"></icon>
                    </a>
                </div>
            </div>
        </div>

    </div>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
