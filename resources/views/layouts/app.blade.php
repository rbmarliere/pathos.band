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
    <style>a{color: #343434;}</style>

    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body data-spy="scroll" data-target=".navigation" style="position: relative;">
    <div id="app">
        <nav class="nav navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header active">
                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a id="logo" class="navbar-brand" href="#" v-scroll-to="'#main'" style="font-family: tattegrain; font-size: 36px; letter-spacing: 2px;">
                        {{ config('app.name') }}
                    </a>
                </div>
                <div class="navigation collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right" role="tablist">
                        <li><a href="#about" v-scroll-to="{ element: '#about', duration: 1 }">About</a></li>
                        <li><a href="#discography" v-scroll-to="{ element: '#discography', duration: 1 }">Discography</a></li>
                        <li><a href="#media" v-scroll-to="{ element: '#media', duration: 1 }">Media</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div id="main">
            <parallax :speed-factor=0.20 :section-height=55>
                <img src="img/pathos.jpg"/>
            </parallax>
            <hr/>
        </div>

        <div id="about" class="container">
            <p>A Pathos é uma banda de stoner rock progressivo, de Juiz de Fora, Minas Gerais. Formada no início de 2014 por Hugo Moutinho (bateria), JP Vieira (voz), Lucas Guida (baixo) e Ricardo Marliere (guitarra). No segundo semestre de 2014 a banda passou por um árduo processo de composição, gravando seu álbum de estreia nos dias 21 e 22 de fevereiro de 2015, nomeado "Elixir". O disco foi produzido pela banda e por Arthur Damásio de forma independente e lançado em agosto de 2015, obtendo boa aceitação no Brasil e no exterior, sendo lançado, posteriormente, em vinil pelo selo alemão Krauted Mind Records. Após mais de um ano em hiato, ao fim de 2016 a banda retornou aos palcos de Juiz de Fora para participar do Festival Cultural Sangue Novo (mais de 70 artistas inscritos, sendo 20 participantes), ficando em 2° lugar. No início de 2017, Luiz Henrique Andrès (teclado) se integrou à banda.</p>
            <hr/>
        </div>

        <div id="discography" class="container">
            <div class="row">
                <div class="col-xs-12 text-center pagination-centered">
                    <h1>Elixir, 2015</h1>
                </div>
            </div>
            <hr/>
            <div class="row">
                <artwork></artwork>
            </div>
            <hr/>
            <div class="row">
                <div class="col-xs-6 text-center pagination-centered">
<iframe style="border: 0; width: 100%; height: 373px;" src="https://bandcamp.com/EmbeddedPlayer/album=1092530120/size=large/bgcol=ffffff/linkcol=0687f5/artwork=none/transparent=true/" seamless><a href="http://pathos-sound.bandcamp.com/album/elixir">Elixir by Pathos</a></iframe>
                </div>
                <div class="col-xs-6 text-right pagination-centered">
                    <p style="font-family: quote; font-size: 15px; letter-spacing: .5px;">
                        <icon name="quote-left"></icon>
                        Peso, distorção, arrojo, apropriação da tradição, tudo na medida certa. FODA-SE quem acha que estamos vivendo momentos de ressaca ou pobreza em nossa música! SAPORRA diz tudo! Essa música resume tudo o que várias outras bandas vem buscando dentro do cenário nacional.
                        <icon name="quote-right"></icon>
                    </p>
                    <p><a href="http://oganpazan.com.br/elixir-2015-pathos/">Danilo Cruz</a></p>

                    <p style="font-family: quote; font-size: 15px; letter-spacing: .5px;">
                        <icon name="quote-left"></icon>
                        Elixir by Pathos more than just riff rock; it has to be called progressive stoner rock. (...) This needs some college music major to do it justice. Somehow calling this “killer” just isn’t enough.
                        <icon name="quote-right"></icon>
                    </p>
                    <p><a href="http://doomedandstoned.com/post/126164534683/papapaulsgroovyreviews">Papa Paul</a></p>

                    <p style="font-family: quote; font-size: 15px; letter-spacing: .5px;">
                        <icon name="quote-left"></icon>
                        Elixir is, on the whole, a stunning album full of little twists and turns that'll have you discovering something new in its grooves every time you play it.
                        <icon name="quote-right"></icon>
                    </p>
                    <p><a href="http://stonerking1.blogspot.com.br/2015/08/pathos-elixir-brazil-prog-stoners-debut.html">FDJ</a></p>
                </div>
            </div>
            <hr/>
        </div>

        <hr/>

        <div id="media" class="container">
            <photos></photos>
            <hr/>
        </div>

        <hr/>

        <div class="container">
            <div class="row">
                <div class="col-xs-12 text-center pagination-centered">
                    <a target="_tab" href="https://pathos-sound.bandcamp.com/">
                        <icon name="bandcamp" scale="4"></icon>
                    </a>
                    &nbsp; &nbsp;
                    <a target="_tab" href="https://www.facebook.com/pathos.sound/">
                        <icon name="facebook" scale="4"></icon>
                    </a>
                    &nbsp; &nbsp;
                    <a target="_tab" href="https://www.instagram.com/pathos.sound/">
                        <icon name="instagram" scale="4"></icon>
                    </a>
                    &nbsp; &nbsp;
                    <a target="_tab" href="https://www.youtube.com/channel/UCT6Sk9JezXTip94txp0aSfQ">
                        <icon name="youtube" scale="4"></icon>
                    </a>
                </div>
            </div>
            <hr/>
        </div>

    </div>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}"></script>
    <script>
    </script>
</body>
</html>
