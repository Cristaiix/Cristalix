function HeadLanding(){document.getElementById("body").classList.add('headerlanding');}
function Head(){document.getElementById('PageStyles').innerHTML+=`
    @font-face {
        font-family: 'minecraft text';
        font-style: normal;
        font-weight: normal;
        src: local('minecraft text'),
            url('/content/fonts/minecraft.ttf') format('truetype');
    }   
    /*root*/
    :root {
        /* scale interface */
        --scale: 19px;
        --block: 71.578rem;
        --headpadding: 10rem;

        /* fonts */
        --text-lite: 0.632rem;      /* 14px */
        --text: 0.947rem;           /* 18px */
        --h3: 1.157rem;             /* 22px */
        --h2: 1.684rem;             /* 32px */
        --h1: 3.157rem;             /* 60px */

        /* Nutral */
        --graphite: #191919;
        --light-gray: #363636;
        --sun-gray: #7A7A7A;
        --gray: #aeaeae;
        --white: #ffffff;
        --black: #000000;

        /* blue */
        --blue: #286FD8;
        --blue-middle: #1d59b5;
        --blue-dark: #144693;

        /* red */
        --red: #BA3232;
        --red-middle: #882020;
        --red-dark: #551212;
        /* green */
        --green: #1FA344;
        --green-middle: #167531;
        --green-dark: #0E431D;

        /* orange */
        --orange: #D06400;
        --orange-middle: #9E4C00;
        --orange-dark: #683200;
        /* yellow */
        --yellow: #E3A400;
        --yellow-middle: #A77800;
        --yellow-dark: #6D4F00;
    }
    *::selection {
        color: var(--black);
        background-color: var(--white);
     }
    /*presets*/
    html {
        font-family: 'Montserrat', sans-serif;
        scrollbar-width: thin;
        padding: 0;
        width: 100%;
        height: 100%;
        font-size: var(--scale);
        color: var(--white);
    }
    body {
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-y: none;
        text-decoration: none;
        background-color: var(--graphite);

    }
    svg, path{
        fill: inherit;
    }
    * {
        outline: none;
        outline-offset: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        color: var(--white);
        overflow-x: none;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        scroll-behavior: smooth;
        font-family: 'Montserrat', sans-serif;
    }
    *:focus {
        outline: none;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
    }
    *:hover {
        outline: none;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
    }
    *:active {
        outline: none;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
    }
    div {
        user-select: none;
    }
    text, h1, h2, h3, a, p, img {
        user-select: text;
    }
    /* scroll */
    *::-webkit-scrollbar {
        width: 0.421rem;
        height:0.421rem;
    }
    *::-webkit-scrollbar-track {
        border-radius:0.421rem;
        margin-top:0.316rem;
        margin-bottom:0.316rem;
    }
    *::-webkit-scrollbar-thumb {
        height: 2.947rem;
        border-radius: 0;
        background-clip: content-box;
        background-color: rgb(255 255 255 / 33%);
    }
    *::-webkit-scrollbar-thumb:hover {
        background-color: rgb(255 255 255 / 66%);
    }
    *::-webkit-scrollbar-corner{
        background-color: var(--graphite);
        width: 0rem;
        height: 0rem;
    }
    /* mini scroll */
    .mini-scroll::-webkit-scrollbar {
        width: 0.526rem;
        height:0.526rem;
    }
    .mini-scroll::-webkit-scrollbar-track {
        border-radius: 0.421rem;
        margin-top:0.316rem;
        margin-bottom:0.316rem;
    }
    .mini-scroll::-webkit-scrollbar-thumb {
        height: 2.947rem;
        width: 2.947rem;
        border-radius: 0;
        border-left: 0.421rem solid rgb(0 0 0 / 0%);
        background-clip: content-box;
        background-color: rgb(255 255 255 / 33%);
    }
    .mini-scroll::-webkit-scrollbar-thumb:hover {
        background-color: rgb(255 255 255 / 66%);
    }
    .mini-scroll::-webkit-scrollbar-corner{
        background-color: var(--graphite);
        width: 0rem;
        height: 0rem;
    }
    /* texts */
    .h1, h1 {
        font-size: var(--h1);
        user-select: text;
        font-weight: 600;
        line-height: 120%;
    }
    .h2, h2 {
        font-size: var(--h2);
        user-select: text;
        font-weight: 600;
        line-height: 130%;
    }
    .h3, h3 {
        font-size: var(--h3);
        user-select: text;
        font-weight: 600;
        line-height: 160%;
    }
    .text, text {
        font-size: var(--text);
        user-select: text;
        font-weight: 500;
        line-height: 180%;
    }
    .link, .link:visited, .text:visited{
        transition: 0.1s ease-in-out;
        color: var(--blue);
        user-select: text;
        cursor: pointer;
    }
    .link:hover, .link:visited:hover{
        color: var(--blue-middle);
    }
    .link:active, .link:visited:active{
        color: var(--blue-dark);
    }
    /* markers */
        .marker-accent{
            color: var(--blue);
        }
        .marker-sec{
            color: var(--sun-gray);
        }
        .marker-sec{
            color: var(--sun-gray);
        }

    code, .code{
        padding: 1.2632rem;
        border: 1px var(--gray);
        box-sizing: border-box;
    }
    /* header */
    header{
        position: fixed;
        top: 0rem;
        width: 100%;
        z-index: 1000;
    }
    .header{
        display: flex;
        justify-content: space-between;
        width: var(--block);
        margin: auto;
        height: 3.684rem;
        margin-top: 0.842rem;
        padding: 0rem 1.263rem;
        border-radius: 0.842rem;
        backdrop-filter: blur(1.6842rem);
        -webkit-backdrop-filter: blur(1.6842rem);
        -moz-backdrop-filter: blur(1.6842rem);
    }
    .header-nav{
        display: flex;
        align-items: center;
        gap: 2.105rem;

    }
    .header-link{
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        justify-content: center;
        color: var(--white);
    }
    .header-link:hover{
        opacity: 0.7;
    }
    .header-link-active span, .header-link-active:hover span, .header-link-active:active span{
        display: block;
        width: 59%;
        position: absolute;
        height: 0.157rem;
        border-radius: 0.315rem;
        background-color: var(--white);
        top: 3.368rem;
    }
    .header-link span{
        animation: header 0.4s cubic-bezier(0, 0.05, 0, 1.62);
        width: 59%;
        animation-fill-mode: forwards;
    }
    @keyframes header{
        0%{
            width: 0.157rem;
        }
        100%{
            width: 59%;
        }
    }
    .logo{
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        fill: var(--white);
    }
    .logo:hover{
        opacity: 0.7;
    }
    .logo svg{
        aspect-ratio: 1000 / 160;
        width: auto;
        height: 1.315rem;
    }
    .header-blur .header{
        transition: 0.23s ease-in-out;
        background-color: rgba(25, 25, 25, 0.611);
        backdrop-filter: blur(1.6842rem);
        -webkit-backdrop-filter: blur(1.6842rem);
        -moz-backdrop-filter: blur(1.6842rem);
    }
    #boxheader{
        transition: 0.5s;
    }
    .header-hidden{
        transition: 0.5s;
        top: -5.263rem;
    }
    .home-banner .button{
        font-size: 1.263rem;
        height: auto;
    }
    /* main */
    main{
        width: 100%;
        height: auto;
    }
    /* footer */
    footer{
        width: var(--block);
        margin: auto;
        margin-top: 7rem;
        padding-bottom: 2.105rem;
        display: flex;
        justify-content: space-between;
        height: 4.210rem;
    }
    footer .text{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 0.736rem;
        line-height: 0.894rem;
    }
    .footer-corp{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
    }
    footer  .footer-header{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 0.947rem;
        line-height: 1.157rem;
    }
    footer .payment-processing{
        text-align: right;
        line-height: 160%;
    }
    .footer-info{
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }
    .footer-politics{
        display: flex;
        gap: 2.105rem;
    }

    .footer-politics .link{
        color: var(--gray);
    }
    /*cookie*/
    .block-cookie{
        width: 100%;
        height: auto;
        position: fixed;
        bottom: 1.578rem;
        pointer-events: none;
    }
    .cookie{
        display: flex;
        background: var(--graphite);
        box-sizing: border-box;
        border: solid 1px var(--light-gray);
        z-index: 100;
        width: max-content;
        height: auto;
        padding: 1.052rem;
        align-items: center;
        gap: 1.578rem;
        margin: auto;
        border-radius: 0.578rem;
        pointer-events: visible;
    }
    .cookie text{
        width: 24rem;
    }
    .btn-link, .btn-drop{
        width: 0.842rem;
        height: 0.842rem;
        fill: var(--white);
        display: flex;
    }
    .block-support{
        margin-top: 8.4211rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 8.4211rem;
    }
    .block-support h1{
        margin-bottom: 2.105rem;
    }
    .sub-card-icon{
        aspect-ratio: 1 / 1;
        width: 1rem;
        height: 1rem;
    }
    /* modal-block */
    .block-modal{
        top: -1px;
        width: 100%;
        height: 0%;
        position: fixed;
        display: none;
        overflow: auto;
        z-index: 1001;
        background-color: rgb(25 25 25 / 0%);
        align-items: center;
        justify-content: center;
    }
    .block-modal-active{
        animation: modal 0.3s forwards;
        transition: 0.3s;
        top: 0px;
        display: flex;
        width: 100%;
        height: 100%;
        background-color: rgb(25 25 25 / 95%);
    }
    @keyframes modal{
        0%{
            display: none;
            height: 0%;
            background-color: rgb(25 25 25 / 0%);
        }
        1%{
            display: flex;
            height: 0%;
            background-color: rgb(25 25 25 / 0%);
        }
        100%{
            display: flex;
            height: 100%;
            background-color: rgb(25 25 25 / 95%);
        }
    }
    .modal{
        display: none;
        flex-direction: column;
        gap: 1.052rem;
        width: 23.684rem;
        height: max-content;
        padding: 2.105rem;
        background-color: var(--graphite);
        border: solid 1px var(--light-gray);
        border-radius: 0.578rem;
    }
    .modal .h3{
        width: 100%;
        text-align: center;
    }
    .modal-group-btn .button, .modal-group-btn button{
        width: 100%;
    }
    .modal-group-btn .button-red{
        width: max-content;
    }
    .modal-active{
        display: flex;
    }
    .modal-group-btn{
        margin-top: 0.8421rem;
        display: flex;
        width: 100%;
        height: max-content;
        gap: 1.052rem;
    }
    .modal-em-top{
        margin-top: 0.8421rem;
    }
    .modal-em-bottom{
        margin-bottom: 0.8421rem;
    }
    /* theme switcher*/
    .theme-switch{
        width: 2.631rem;
        height: 1.263rem;
        border-radius: 0.842rem;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0rem 0.210rem;
        cursor: pointer;
    }
    .theme-switch span{
        width: 0.736rem;
        height: 0.736rem;
        border-radius: 0.789rem;
        background-position: center center;
        background-size: cover;
    }
    .theme-switch:hover span{
        opacity: 0.7;
        transform: scale(1.1);
    }
    .mobile-nav{
        width: 100%;
        position: fixed;
        height: 5.263rem;
        bottom: 0rem;
        background-color: var(--graphite);
        display: none;
        z-index: 1000;
        border-top:solid 1px var(--light-gray);
        padding: 0rem 3%;
        box-sizing: border-box;
    }
    .btn-nav{
        width: 25%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        justify-content: center;
        color: var(--white);
    }
    .nav-icon{
        fill: var(--white);
        transition: 0.2s;
        width: 1.747rem;
        height: 1.747rem;
        margin-bottom: 0.894rem;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .btn-nav text{
        font-weight: 500;
        font-size: 0.736rem;
        line-height: 100%;
    }
    .btn-nav-active .nav-icon{
        transition: 0.2s;
        animation: navicon 0.6s cubic-bezier(0.49, 2.05, 0.62, 0.71);
        animation-fill-mode: forwards;
        will-change: transform, scale;
    }
    .btn-menu .nav-icon{
        transition: 0.6s cubic-bezier(0.49, 2.05, 0.62, 0.71);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .btn-menu .nav-icon > svg{
        position: absolute;
    }
    .btn-menu:active .nav-icon{
        transition: 0.3s cubic-bezier(0.4, 0.96, 0.54, 0.97);
        transform: scale(1.2);
    }
    .btn-menu .nav-icon > svg:nth-child(1){
        transition: 0.3s cubic-bezier(0.4, 0.96, 0.54, 0.97);
        transform: rotate(0deg);
        opacity: 1;
    }
    .btn-menu-active .nav-icon > svg:nth-child(1){
        transition: 0.3s cubic-bezier(0.4, 0.96, 0.54, 0.97);
        transform: rotate(90deg);
        opacity: 0;
    }
    .btn-menu .nav-icon > svg:nth-child(2){
        transition: 0.3s cubic-bezier(0.4, 0.96, 0.54, 0.97);
        transform: rotate(-90deg);
        opacity: 0;
    }
    .btn-menu-active .nav-icon > svg:nth-child(2){
        transition: 0.3s cubic-bezier(0.4, 0.96, 0.54, 0.97);
        transform: rotate(0deg);
        opacity: 1;
    }

    @keyframes navicon{
        0%{
            transform: scale(1);
        }
        40%{
            transform: scale(1.2);
        }
        100%{
            transform: scale(1.0);
        }
    }


    .block-mobile-nav{
        transition: 0.2s cubic-bezier(0, 0.59, 0.2, 1.04);
        width: 100%;
        position: fixed;
        bottom: 5.157rem;
        z-index: 800;
        height: 0rem;
        visibility: hidden;
        background-color: var(--graphite);
        opacity: 0;
        will-change: transform, opacity, visibility;
    }


    .box-mobile-nav h1{
        margin-top: var(--headpadding);
    }

    .box-mobile-nav{
        width: var(--block);
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .list-mobile-nav{
        width: 100%;
        min-height: auto;
        max-height: 80%;
        gap: 1.052rem;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 3.157rem;
    }

    .btn-nav-menu{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.052rem;
        border: solid 1px var(--light-gray);
        border-radius: 0.263rem;
        font-size: 1rem;
        width: 100%;
        cursor: pointer;
        color: var(--white);
        height: 4rem;
    }
    .btn-nav-menu-half{
        width: calc(50% - 0.526rem);
    }
    .btn-nav-menu:hover{
        opacity: 0.6;
    }

    .box-balance-pref{
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-template-rows: 1fr;
        justify-content: space-between;
    }

    #next-group{
        text-align: right;
    }

    .icon-cristaliki{
        width: 1rem;
        height: 1rem;
        background: url('/content/icons/cristal.svg');
        background-size: cover; 
    }

    /* notes */

    #notes {
        margin-top: 60px;
        position: fixed;
        top: 2rem;
        width: 100%;
        cursor: default;
        transition: height 0.45s ease-in-out;
        pointer-events: none;
        z-index: 100000000;
    }

    #notes .note-item {
        border-radius: 7px;
        max-height: 12em;
        opacity: 1;
        will-change: opacity, transform;
        transition: all 0.2s linear;
        backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -ms-backface-visibility: hidden;
        width: 31.5789rem;
        max-width: 42.1053rem;
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        z-index: 2;
        pointer-events: auto;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-flex;
        display: -ms-flex;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-line-pack: start;
        align-content: flex-start;
        -ms-flex-align: start;
        -moz-align-items: flex-start;
        align-items: flex-start;
        -ms-flex-line-pack: start;
        align-content: flex-start;
        font: inherit;
        line-height: 1.25em;
        color: white;
        margin: 0 auto 1em auto;
        transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        padding: 0.75em 1em;
    }



    @media all and (max-width: 40em) {
        #notes .note-item {
            width: 75%;
            max-width: none;
        }
    }

    #notes .note-item[data-show=false] {
        pointer-events: none;
        opacity: 0 !important;
        max-height: 0 !important;
        margin-bottom: 0 !important;
    }

    #notes .note-item[data-type=info] {
        background-color: var(--blue);
        color: #fff;
    }

    #notes .note-item[data-type=warn] {
        background-color: var(--orange);
        color: #fff;
        animation: shake 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }

    #notes .note-item[data-type=error] {
        background-color: var(--red);
        color: #fff;
        animation: shake 0.54s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }

    #notes .note-item[data-type=success] {
        background-color: var(--green);
        color: #fff;
    }

    #notes .note-item .note-item-text {
        flex: auto;
        -moz-flex: auto;
        -ms-flex: auto;
        padding-right: 0.5em;
        max-width: calc(100% - 1.25em);
        max-width: -webkit-calc(100% - 1.25em);
        color: white;
    }

    #notes .note-item .note-item-btn {
        width: 1.25em;
        height: 1.25em;
        cursor: pointer;
        background: url('/content/icons/nav-menu-active.svg') no-repeat 0 0/contain;
        transition: opacity 0.2s;
        -webkit-transition: opacity 0.2s;
        border: solid 0px;
        outline: none;
        padding: 0;
    }

    #notes .note-item .note-item-btn:hover {
        opacity: 0.6;
    }

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
            -ms-transform: translate3d(-1px, 0, 0);
        }
        20%,
        80% {
            transform: translate3d(2px, 0 0);
            -ms-transform: translate3d(2px, 0, 0);
        }
        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
            -ms-transform: translate3d(-4px, 0, 0);
        }
        40%,
        60% {
            transform: translate3d(4px, 0, 0);
            -ms-transform: translate3d(4px, 0, 0);
        }
    }

    @-webkit-keyframes shake {
        10%,
        90% {
            -webkit-transform: translate3d(-1px, 0, 0);
        }
        20%,
        80% {
            -webkit-transform: translate3d(2px, 0, 0);
        }
        30%,
        50%,
        70% {
            -webkit-transform: translate3d(-4px, 0, 0);
        }
        40%,
        60% {
            -webkit-transform: translate3d(4px, 0, 0);
        }
    }

    .userlang{
        padding: 0.15rem 0rem;
        width: 2rem;
        font-size: 0.8421rem;
        border: 0px;
        display: flex;
        align-items: center;
        align-content: center;
    }
    .userlang select{
        background: rgb(255 0 0 / 0%);
        outline: unset;
        border: 0;
        font-size: 0.7211rem;
        width: 100%;
        text-align: center;
    }
    .userlang option{
        background: var(--graphite);
    }
    .userlang option:hover{
        background: var(--blue);
    }
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    .user-avatar{
        box-shadow: rgb(255 255 255 / 45%) 0 0 0 1px;
        image-rendering: pixelated;
        background-position: 14.4% 14.4%;
        background-size: 820%;
        overflow: hidden;
    }
    .user-avatar .user-avatar-up{
        image-rendering: pixelated;
        width: 100%;
        height: 100%;
        background-position: 71.5% 14.5%;
        background-size: 820%;
    }
    .header-link .user-avatar{
        border-radius: 0.1579rem;
        width: 1.6842rem;
        height: 1.6842rem;
    }
    `}
function Button(){document.getElementById('PageStyles').innerHTML+=`
    /* button */
    .button, button {
        transition: 0.1s cubic-bezier(0.54, 3.11, 0.6, 0.47);
        user-select: none;
        font-size: 0.947rem;
        font-weight: 500;
        background: var(--blue);
        border: solid 0px var(--blue);
        color: #fff;
        border-radius: 0.263rem;
        box-sizing: border-box;
        padding: 0.684rem 1.315rem 0.684rem 1.315rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        width: max-content;
        height: 2.5263rem;
        line-height: 124%;
        fill: #fff;
    }

    .button:hover, button:hover {
        background: var(--blue-middle);
        border: solid 0px var(--blue-middle);
        transform: scale(1.03);
    }

    .button:active, button:active {
        background: var(--blue-dark);
        border: solid 0px var(--blue-dark);
        transform: scale(0.98);
    }

    .button-sec, .button-sec:hover, .button-sec:active {
        color: var(--blue-dark);
        fill: var(--blue-dark);
        background: var(--white);
        border: solid 0px var(--white);
    }

    .button-sec:hover {
        opacity: 0.7;
    }

    .button-sec:active {
        opacity: 0.6;
    }

    .button-green{
        background: var(--green);
        border: solid 0px var(--green);
    }

    .button-green:hover{
        background: var(--green-middle);
        border: solid 0px var(--green-middle);
    }

    .button-green:active{
        background: var(--green-dark);
        border: solid 0px var(--green-dark);
    }

    .button-red{
        background: var(--red);
        border: solid 0px var(--red);
    }

    .button-red:hover{
        background: var(--red-middle);
        border: solid 0px var(--red-middle);
    }

    .button-red:active{
        background: var(--red-dark);
        border: solid 0px var(--red-dark);
    }

    .button-disabled, .button-disabled:hover, .button-disabled:active,
    button:disabled, button:disabled:hover, button:disabled:active{
        background: var(--light-gray);
        border: solid 0px var(--light-gray);
        color: #626262;
        opacity: 1;
        transform: scale(1);
        fill: #626262;
    }
    /* button icons */

    .button-icon{
        padding: 0;
        min-width: 2.5263rem;
        max-width: 2.5263rem;
        align-items: center;

    }
    .button-icon svg{
        width: 1.0526rem;
        height: auto;
    }

    `;};function Dropdown(){document.getElementById('PageStyles').innerHTML+=`
    .select {
        position: relative;
        width: 100%;
      }

    .select__toggle {
        cursor: pointer;
        border-radius: 0.3684rem;
        padding: 0.684rem 1rem;
        line-height: 124%;
        height: 2.5263rem;
        border: solid 1px var(--light-gray);
        background-color: var(--graphite);
        color: var(--white);
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        gap: 1.6842rem;
    }

    .select__toggle:hover {
        transition: .1s cubic-bezier(.54,3.11,.6,.47);
        background-color: var(--blue);
        border: solid 1px var(--blue);
        transform: scale(1.01);
        color: var(--white);
    }

    .select__toggle:active {
        transition: .1s cubic-bezier(.54,3.11,.6,.47);
        background-color: var(--blue-middle);
        border: solid 1px var(--blue-middle);
        transform: scale(.98) translateY(0.2105rem);
    }

    .select__toggle::after {
        transition: 0.13s cubic-bezier(0.32, 2.04, 0.73, 0.69);
        content: '';
        width: 0.75rem;
        height: 0.75rem;
        flex-shrink: 0;
        margin-left: 1rem;
        background-size: cover;
        background-image: url('/content/icons/drop.svg');
        transform: rotate(0deg);
    }

    .select__toggle:focus {
        outline: none;
    }

    .select_show .select__toggle::after {
        transform: rotate(180deg);
    }

    .select__dropdown {
        transition: .1s cubic-bezier(.54,3.11,.6,.47);
        opacity: 0;
        visibility: hidden;
        border-radius: 0.3684rem;
        position: absolute;
        display: block;
        width: 100%;
        min-height: -webkit-max-content;
        min-height: -moz-max-content;
        min-height: max-content;
        max-height: 20rem;
        margin-top: 1.5789rem;
        background-color: var(--graphite);
        box-sizing: border-box;
        border: solid 1px var(--light-gray);
        transform: scale(.96);
        overflow: overlay;
        z-index: 12;
    }
    .select_show .select__dropdown {
        transition: .1s cubic-bezier(.54,3.11,.6,.47);
        opacity: 1;
        visibility: visible;
        margin-top: 0.6316rem;
        transform: scale(1);
    }

    .select_show .select__backdrop {
        display: block;

    }

    .select__options {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .select__option {
        gap: 0.4211rem;
        display: inline-flex;
        align-items: center;
        width: 100%;
        padding: 0.684rem 0.736rem;
        cursor: pointer;
        background-color: var(--graphite);
        box-sizing: border-box;
    }

    .select__option_selected {
        background-color: var(--blue);
    }


    .select__option:hover {
        background-color: var(--blue);
    }

    .select__option_selected .icon-cristaliki, .select__option:hover .icon-cristaliki{
        filter: grayscale(1) brightness(2.2);
    }

    .select__option:active {
        background-color: var(--blue-middle);
    }


    `;};function Checkbox(){document.getElementById('PageStyles').innerHTML+=`
    .box-checkbox {
        height: auto;
        display: grid;
        cursor: pointer;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }

    .checkbox {
        width: 0px;
        height: 0px;
    }

    .box-checkbox>input {
        z-index: -1;
        opacity: 0;
        position: relative;
        justify-self: center;
        align-self: center;
        width: 0px;
        height: 0px;
      }
    .box-checkbox>span {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    .box-checkbox>span::before {
        transition: 0.2s;
        box-sizing: border-box;
        content: '';
        display: inline-block;
        width: 1.157rem;
        height: 1.157rem;
        flex-shrink: 0;
        flex-grow: 0;
        border: solid 1px var(--light-gray);
        border-radius: 0.263rem;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 0% 0%;
        background-image: url('/content/icons/dot-checkbox.svg');
    }

    .box-checkbox>input:not(:disabled):not(:checked)+span:hover::before {
        border: solid 1px var(--light-gray);
    }

    .box-checkbox>input:not(:disabled):not(:checked)+span:hover::before {
        transition: 0.2s;
        border: solid 1px var(--blue);
        background-size: 20% 20%;
        background-image: url('/content/icons/dot-checkbox.svg');
    }

    .box-checkbox>input:not(:disabled):not(:checked)+span:active::before {
        transition: 0.1s;
        border: solid 1px var(--blue);
        background-size: 35% 35%;
        background-image: url('/content/icons/dot-checkbox.svg');
    }


    .box-checkbox>input:checked+span:hover::before {
        transition: 0.1s;
        border: solid 1px var(--blue);
        background-color: var(--blue);
        background-size: 56% 56%;
        background-image: url('/content/icons/dot-checkbox.svg');
    }

    .box-checkbox>input:not(:disabled):active+span::before {
        border: solid 1px var(--light-gray);
    }

    .box-checkbox>input:focus:not(:checked)+span::before {
        border: solid 1px var(--light-gray);
    }

    .box-checkbox>input:checked+span::before {
        transition: 0.2s;
        border: solid 1px var(--blue-middle);
        background-color: var(--blue-middle);
        background-image: url('/content/icons/dot-checkbox.svg');
        background-size: 43% 43%;
    }
    .box-checkbox>input:checked+span:hover:before {
        transition: 0.1s;
        border: solid 1px var(--blue);
        background-color: var(--blue);
        background-image: url('/content/icons/dot-checkbox.svg');
        background-size: 49% 49%;
    }

    .block-checkbox .text {
        height: auto;
        display: grid;
        font-size: 0.842rem;
        margin-left: 1.052rem;
    }

    .block-checkbox text {
        align-self: center;
    }
    `;};function Input(){document.getElementById('PageStyles').innerHTML+=`
    .box-input {
        transition: 0.2s;
        background: var(--light-gray);
        max-width: 100%;
        height: auto;
        box-sizing: border-box;
        border-radius: 0.263rem;
    }

    .box-input input {

        transition: 0.2s;
        box-sizing: border-box;
        width: 100%;
        background: var(--graphite);
        padding: 0.684rem 0.736rem 0.684rem 0.736rem;
        border: solid 1px var(--light-gray);
        border-radius: 0.263rem;
        display: block;
        font-size: 0.947rem;
        color: var(--white);
    }

    .box-input input:hover {
        transition: 0.2s;
        border: solid 1px var(--sun-gray);
    }

    .box-input input:focus {
        transition: 0.2s;
        border: solid 1px var(--sun-gray);
    }

    .box-input text {
        text-align: left;
        transition: 0.2s;
        display: none;
        font-size: 0.736rem;
        padding: 0.368rem 0.684rem;
    }
    .box-input text:empty {
        display: none;
    }

    .text-view {}

    .input-error text{
        display: block;
    }

    .input-error {
        background:var(--red-dark);
    }

    .input-error input {
        border: solid 1px var(--red-dark);
    }

    .input-error input:hover {
        transition: 0.2s;
        border: solid 1px var(--red);
    }

    .input-error input:focus {
        transition: 0.2s;
        border: solid 1px var(--red);
    }

    .input-accept {
        transition: 0.2s;
        background: var(--green-dark);
    }

    .input-accept input {
        transition: 0.2s;
        border: solid 1px var(--green-dark);
    }

    .input-accept input:hover {
        transition: 0.2s;
        border: solid 1px var(--green);
    }

    .input-accept input:focus {
        transition: 0.2s;
        border: solid 1px var(--green);
    }


    /* autofill */
    .box-input input:-webkit-autofill,
    .box-input input:-webkit-autofill:hover,
    .box-input input:-webkit-autofill:active,
    .box-input input:-webkit-autofill:focus,
    .box-input input:autofill{
        background-color: var(--graphite);
        border: solid 1px var(--light-gray);
        font-size: 0.947rem;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: var(--white);
        transition: background-color 5000s ease-in-out 0s;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.947rem;
        caret-color: var(--white);
    }

    .box-input-active text{
        display: block;
    }

    .code2fa{
        letter-spacing: 0.5rem;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }

    `;};function Accordion(){document.getElementById('PageStyles').innerHTML+=`

    .block-accordion{
        display: flex;
        flex-direction: column;
        margin-top: 1.5789rem;
    }
    .block-accordion h1{
        margin-bottom: 2.105rem;
    }

    .box-accordion{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }
    .accordion, .accordion:hover, .accordion:active{
        transition: 0.2s ease-in-out;
        width: 100%;
        height: auto;
        padding: 0.842rem 0px;
        border-radius: 0px;
        background-color: unset;
        border-top: solid 1px var(--light-gray);
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--white);
        transform: scale(1);
        text-align: left;
    }
    .accordion:hover{
        opacity: 0.7;
        transform: scale(1);
    }

    .box-accordion:hover icon-accord{
        transition: 0.1s cubic-bezier(1, 2.92, 1, -2.26);
        translate(0rem, -0.4211rem);
    }

    .accordion:active{
        opacity: 0.5;
        transform: scale(1);
    }
    .icon-accord{
        transition: 0.2s cubic-bezier(1, -0.84, 0, 1.96);
        transform: rotate(0deg);
        width: 1.157rem;
        height: 1.157rem;
        margin-left: 1rem;
        fill: var(--white);
    }

    .accordion-active .icon-accord{
        transform: rotate(45deg);
    }


    .boxContent{
        transition: 0.08s cubic-bezier(0.79, 0.1, 0.57, 1.08);
        width: 100%;
        min-height: 0rem;
        max-height: 0rem;
        overflow: hidden;
        margin-top: 0;
        margin-bottom: 0;

        transform: rotateX(114deg) translate(0rem, -4rem);

        will-change: transform, opacity;
    }
    .accordion-active ~ .boxContent{
        transition: 0.08s cubic-bezier(0.79, 0.1, 0.57, 1.08);
        min-height: 0rem;
        max-height: 600rem;
        margin-top: 0.4211rem;
        margin-bottom: 1.578rem;

        transform: rotateX(0deg);
        will-change: transform, opacity;
    }

    .acontent{
        display: flex;
        flex-direction: column;
        gap: 1.5789rem;
    }
    .acontent text{
        line-height: 180%;
    }
    .acontent text > img{
        margin-top: 0.526rem;
    }
    `;};function Toggle(){document.getElementById('PageStyles').innerHTML+=`
    .box-toggle{
        width: max-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
        border: solid 1px var(--light-gray);
        height: max-content;
        border-radius: 0.3684rem;
        gap: 0.1579rem;
        padding: 0.1579rem;
        height: 2.5263rem;
        box-sizing: border-box;
    }

    .box-toggle button:empty{
        display: none;
    }

    .box-toggle button{
        height: 100%;
        align-items: center;
        border-radius: 0.2684rem;
        background-color: var(--graphite);
        color: var(--sun-gray);
        width: 100%;
    }
    .box-toggle button:hover{
        background-color: var(--light-gray);
        transform: scale(1);
    }
    .box-toggle button:active{
        background-color: var(--light-gray);
        transform: scale(0.97);
    }
    .box-toggle button:disabled{
        background-color: var(--blue);
        color: white;
    }
    `;};function Balance(){document.getElementById('PageStyles').innerHTML+=`
      .box-balance{
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: auto;
        align-items: center;
    }
    .balance{
        width: auto;
        display: flex;
        gap: 1.2632rem;
    }

    .block-sale{
        margin-bottom: 2.631rem;
    }

    .box-balance-line{
        width: 100%;
        display: flex;
        justify-content: space-between;
        gap: 0.842rem;
        align-items: center;;
    }

    .balance-line-bg{
        width: 100%;
        height: 0.210rem;
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 0.315rem;
    }

    .balance-line{
        width: 40%;
        height: 0.210rem;
        background-color: var(--white);
        border-radius: 0.315rem;
    }

    .balance-line-icon{
        width: 1.736rem;
        height: 1.736rem;
        fill: var(--white);
    }
    `;};const url=window.location.pathname;let urlrg="";function cuturl(str,char){return str.replace(new RegExp(`${char}.*`),'')};urlrg=url.substring(1);urlrg=cuturl(urlrg,'/');if(urlrg==""){HeadLanding()
Head()
Button()
document.getElementById('PageStyles').innerHTML+=`/* page home */


    .block-home-banner{
        display: flex;
        align-items: center;
        width: 100%;
        height: calc(100vh - 6.3158rem);
        background-image: url('https://storage.c7x.dev/one1side/website/bannerlauncher11.jpg');
        background-image: url('https://storage.c7x.dev/one1side/website/bannerlauncher11.webp');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .home-banner{
        display: block;
        width: var(--block);
        margin: auto;
    }
    .home-banner h1{
        width: 43rem;
        margin-bottom: 1.578rem;
    }
    .home-banner text{
        margin-bottom: 2.105rem;
        display: block;
    }

    .btn-group{
        display: flex;
        gap: 0.842rem;
    }

    .home-info{
        width: var(--block);
        height: auto;
        margin: auto;
        display: flex;
        border-top: solid 1px var(--light-gray);
    }
    .block-widgets{
        width: 63%;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        padding-right: 3.1579rem;
        box-sizing: border-box;
    }
    .block-widgets .h3{
        display: flex;
        align-items: center;
        height: 3.684rem;
        width: 100%;
    }
    .widgets{
        display: flex;
        flex-wrap: wrap;
        gap: 1.578rem;
        padding-top: 0.6316rem;
        width: 100%;
    }

    .mini-widget{
        transition: 0.2s cubic-bezier(0.36, 1.19, 0.54, 0.73);
        width: calc(50% - 0.7895rem);
        height: auto;
        display: flex;
        gap: 1.5789rem;
        align-items: center;
        box-sizing: border-box;
        padding: 0.9474rem;
        border-radius: 0.578rem;
        justify-content: space-between;
    }
    
    .mini-widget-half{
        width: max-content !important;
    }

    .box-widget{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

    .mini-widget .btn-link{
        fill: var(--white);
        transition: 0.13s cubic-bezier(0.32, 2.04, 0.73, 0.69);
        transform: rotate(0deg) translate(0rem, 0rem);
        min-width: 0.842rem;
        min-height: 0.842rem;
    }

    .mini-widget:hover .btn-link{
        transition: 0.13s cubic-bezier(0.32, 2.04, 0.73, 0.69);
        transform: rotate(45deg) translate(-0.1053rem, 0.1579rem);
    }

    .mini-widget-max{
        width: 100%;
    }

    .black-widget{
        background-color: #000;
    }
    .black-widget:hover{
        background-color: #000;
    }
    .black-widget:active{
        background-color: #000;
    }

    .tg-widget{
        background-color: #007CBD;
    }
    .tg-widget:hover{
        background-color: #00537e;
    }
    .tg-widget:active{
        background-color: #00324c;
    }

    .vk-widget{
        background-color: #0b5aba;
    }
    .vk-widget:hover{
        background-color: #083873;
    }
    .vk-widget:active{
        background-color: #082d5a;
    }

    .discord-widget{
        background-color: #5865F2;
    }
    .discord-widget:hover{
        background-color: #2f3581;
    }
    .discord-widget:active{
        background-color: #212553;
    }

    .youtube-widget{
        background-color: #940101;
    }
    .youtube-widget:hover{
        background-color: #530707;
    }
    .youtube-widget:active{
        background-color: #390404;
    }

    .c-widget{
        background-color: #2A66BD;
    }
    .c-widget:hover{
        background-color: #275495;
    }
    .c-widget:active{
        background-color: #153562;
    }

    .mini-widget .soc-icon{
        aspect-ratio: 1 / 1;
        height: auto;
        width: 1.7895rem;
    }

    .mini-widget text{
        width: 100%;
        color: #ffffff;
    }

    /* list servers */
    .block-servers-list{
        width: 37%;
    }
    .header-server-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3.684rem;
    }
    .server-list{
        display: flex;
        width: 100%;
        height: auto;
        margin-top: 0.6316rem;
        gap: 1.052rem;
        flex-direction: column;
        overflow: hidden;
    }
    .btn-server-list {
        width: 100%;
        height: auto;
        display: flex;
        cursor: pointer;
        flex-direction: column;
    }

    .server-list-dropdown{
        display: flex;
        width: 100%;
        min-height: 0rem;
        max-height: 1000rem;
        flex-direction: column;
        gap: 1.052rem;
        border-bottom: solid 1px var(--light-gray);

        margin-top: 0rem;
        padding-bottom: 0rem;

    }

    .btn-server-dropdown {
        width: 100%;
        height: auto;
        display: flex;
        cursor: pointer;
        flex-direction: column;
    }
    .btn-server-dropdown .box-btn-server-list{
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: auto 1.8fr 1fr auto;
        grid-template-rows: 1fr;
        align-items: center;
        gap: 1.052rem;
        cursor: pointer;
        margin: 0.2105rem 0rem;
    }

    .btn-server-dropdown .server-list-dropdown{
        transition: 0.3s cubic-bezier(0.36, 1.03, 0.63, 1.03);
        overflow: hidden;
        max-height: 0rem;
        padding: 0px;
        opacity: 0;
        transform: rotateX(114deg) translate(0rem, -30rem);
        margin-top: 0rem;
        padding-bottom: 0rem;

        will-change: transform, opacity;
    }

    .btn-server-dropdown .server-list-dropdown-active{
        transition: 0.1s cubic-bezier(0.04, 0.84, 0.44, 0.79);
        overflow: hidden;
        max-height: 1000rem;

        margin-top: 1.368rem;
        padding-bottom: 1.6842rem;

        opacity: 1;
        transform: rotateX(0deg);

        will-change: transform, opacity;
    }



    .btn-server-list .box-btn-server-list{
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: auto 1.8fr 1fr auto;
        grid-template-rows: 1fr;
        align-items: center;
        gap: 1.052rem;
        cursor: pointer;
        margin: 0.2105rem 0rem;
        color: var(--white);
    }
    .box-btn-server-list picture{
        display: flex;
        width: max-content;
        height: max-content;
    }

    .box-btn-server-list{

    }

    .server-list .btn-server-list:hover{
        opacity: 0.7;
    }
    .btn-server-list:hover .btn-link{
        transform: rotate(45deg) translate(-0.1053rem, 0.1579rem);
    }
    .server-list .btn-server-list:active{
        opacity: 0.5;
    }
    .server-list .server-icon{
        aspect-ratio: 1 / 1;
        width: 2rem;
        height: 2rem;
        border-radius: 0.263rem;
        user-select: none;
    }

    .btn-server-list .mg-server-icon{
        background: var(--light-gray);
    }

    .server-list .server-icon > svg{
        width: 100%;
        height: 100%;
        border-radius: 0.263rem;
        user-select: none;
        fill: var(--white);
    }

    .server-list .server-name{
        user-select: none;
    }
    .server-list .server-online{
        user-select: none;
    }
    .server-list .server-group{
        width: auto;
        height: 2rem;
        display: flex;
        align-items: center;
    }
    .server-group
    .btn-link, .btn-drop{
        transition: 0.13s cubic-bezier(0.32, 2.04, 0.73, 0.69);
        transform: rotate(0deg);
        width: 0.842rem;
        height: 0.842rem;
    }
    .server-group .btn-drop{
        transform: rotate(180deg);
    }


    .server-list .minigames-sv, .server-list .minigames-sv:hover, .server-list .minigames-sv:active{
        opacity: 1;
    }

    .btn-list-active .btn-drop{
        transition: 0.13s ease-in-out;
        transform: rotate(0deg);
    }


    .parsers-news{
        width: 100%;
        height: auto;
        margin-bottom: 1.052rem;
        margin-top: 1.5789rem;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 3.1579rem;
    }

    .parsers-news{

    }

    .box-news{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin-bottom: 2.105rem;
    }

    .box-news img{
        aspect-ratio: 1920 / 800;
        width: 100%;
        height: auto;
        border-radius: 0.3684rem;
    }
    .box-news .h3{
        padding: 1rem 0rem 0.842rem 0rem;
        display: block;
        height: auto;
        box-sizing: border-box;
    }
    .box-news text{
        transition: 0.2s ease-in-out;
        min-height: 0rem;
        max-height: 100rem;
        display: block;
        line-height: 180%;
        overflow: hidden;
    }

    .box-news:active text, .box-news:focus-within text{
        display: block;
        min-height: 0rem;
        max-height: 100rem;
        line-height: 180%;
    }

    .box-news .link{
        padding: 0.842rem 0rem 0rem 0rem;
        display: block;
    }
    .box-news-image{
        width: 100%;
        aspect-ratio: 1920 / 800;
        display: flex;
        overflow: hidden;
    }
    .box-pixelbattle{
        margin-bottom: 1.5789rem;
        display: flex;
        position: relative;
        width: 100%;
        height: 18rem;
        align-items: center;
        justify-content: center;
        border-radius: 0.578rem;
        background-image: url(https://storage.c7x.dev/pixelbattle/current.png);
        box-shadow: inset rgb(0 0 0 / 16%) 0 0 0 20rem;
        background-size: cover;
        box-sizing: border-box;
        border: solid 1px var(--light-gray);
        background-position: center center;
    }
    `;Footer()}
else if(urlrg=="play"){Head()
Button()
Accordion()
document.getElementById('PageStyles').innerHTML+=`/* play */

    .block-play{
        width: var(--block);
        height: auto;
        margin: auto;
        display: flex;
        flex-direction: column;
        margin-top: var(--headpadding);
    }

    .boxs-play{
        margin-top: 6.3158rem;
        display: flex;
        flex-direction: column;
        gap: 6.3158rem;
    }

    .box-play{
        height: 12.631rem;
        display: flex;
        justify-content: space-between;
        height: auto;
    }
    .box-play img{
        width: 12.631rem;
        height: 12.631rem;
    }

    .box-play video{
        animation: playicons 1.2s cubic-bezier(0, 0.05, 0, 1.62);
        animation-fill-mode: forwards;
        opacity: 0;
    }
    @keyframes playicons{
        0%{
            opacity: 0;
            transform: scale(0);
        }
        40%{
            opacity: 1;
        }
        100%{
            transform: scale(1);
            opacity: 1;
        }
    }


    .box-play video{
        width: 12.631rem;
        height: 12.631rem;
    }
    .play-ds{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1.2rem;
        box-sizing: border-box;
    }
    .play-ds text{
        line-height: 160%;
    }
   `;Footer()}
else if(urlrg=="launcher"){Head()
Button()
Accordion()
document.getElementById('PageStyles').innerHTML+=`/* launcher */
    .block-launcher{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: calc(100vh - 10.526rem);
        background-color: #181B30;
        background-image: url('https://storage.c7x.dev/one1side/website/bannerlauncher.png');
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;

    }

    .a-launcher{
        aspect-ratio: 2400 / 1260;
        animation: launcher 1.4s;
        width: 97%;
        border-radius: 0.526rem;
        animation-fill-mode: forwards;
        animation-delay: 1.4s;
        opacity: 0;
    }

    .a-launchericon{
        animation: launchericon 1.7s;
        width: 6.315rem;
        height: 6.315rem;
        border-radius: 0.526rem;
        animation-fill-mode: forwards;
        position: absolute;
    }

    @keyframes launchericon{
        0%{
            transform: scale(1);
        }
        48%{
            transform: scale(1);
        }
        55%{
            transform: scale(1.1);
        }
        58%{
            transform: scale(1.0);
        }
        65%{
            transform: scale(1.13);
        }
        68%{
            transform: scale(1.0);
        }
        90%{
            transform: scale(1.0);
            opacity: 1;
        }
        100%{
            transform: scale(1.6);
            opacity: 0;
        }
    }

    @keyframes launcher{
        0%{
            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0.002, 0, 0, 1, 0, 0, 0, 0, 1) rotate3d(1, 0, 0, 77deg) scale(0.3);
            box-shadow: rgb(110 56 77 / 29%) 0 0rem 0rem 0rem, rgb(71 56 110 / 23%) 0 0rem 0rem 0rem;
            opacity: 0;

        }
        70%{
            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, -0.0002, 0, 0, 1, 0, 0, 0, 0, 1) rotate3d(1, 0, 0, 0deg) scale(1);
            box-shadow: rgba(110, 56, 77, 0.29) 0 -0.105rem 0.263rem 0.052rem, rgba(71, 56, 110, 0.231) 0 0.105rem 0.263rem 0.210rem;
            opacity: 1;
        }
        100%{
            transform: matrix3d(1, 0, 0, 0, 0, 1, 0, -0.0002, 0, 0, 1, 0, 0, 0, 0, 1) rotate3d(1, 0, 0, 0deg) scale(1);
            box-shadow: rgba(110, 56, 77, 0.29) 0 -0.526rem 1.052rem 0.157rem, rgba(71, 56, 110, 0.231) 0 0.578rem 1.052rem 0.842rem;
            opacity: 1;
        }
    }


    .block-downloader{
        width: var(--block);
        height: auto;
        margin: auto;
        padding-top: var(--headpadding);
    }

    .down-java{
        padding: 1.052rem 1.578rem;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        border: solid 1px var(--light-gray);
        box-sizing: border-box;
        border-radius: 0.578rem;
    }

    .box-downloader{
        display: grid;
        grid-template-columns: 40% 60%;
        grid-template-rows: auto;
        grid-template-areas:
        'downloader launcher';
        width: 100%;
        height: auto;
        margin-bottom: 4.7368rem;
    }

    .box-card-downloader{
        grid-area: downloader;
    }
    .box-card-launcher{
        display: flex;
        justify-content: center;
        align-items: center;
        grid-area: launcher;
    }

    .card-down{
        display: flex;
        flex-direction: column;
        gap: 1.578rem;
        margin-bottom: 3.684rem;
    }
    .card-down:last-child{
        margin: 0;
    }

    .card-down-header{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .os-icon{
        height: 3.473rem;
        width: 3.473rem;
        margin-right: 1.578rem;
        fill: var(--white);
    }

    .launcher-down{
        width: 100%;
        height: auto;
    }

    .beta{
        position: relative;
        font-weight: 500;
        top: -0.210rem;
        font-size: 0.578rem;
        line-height: 0.684rem;
        background-color: var(--light-gray);
        color: white;
        padding: 0.315rem 0.684rem;
        display: inline;
        border-radius: 0.368rem;
        margin-left: 0.526rem;
    }`;Footer()}
else if(urlrg=="servers"){Head()
Button()
document.getElementById('PageStyles').innerHTML+=`/* servers */

    .block-servers{
        width: var(--block);
        height: auto;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 2.105rem 1.578rem;
        margin-top: var(--headpadding);
    }
    .block-servers .h1{
        margin-bottom: 5.263rem;
        width: 100%;
    }
    .box-servers{
        transition: 0.2s cubic-bezier(0.48, 0.94, 0.73, 0.96);
        width: calc(50% - 0.789rem);
        height: auto;
    }
    .servers-background{
        transition: 0.2s cubic-bezier(0.48, 0.94, 0.73, 0.96);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 104%;
        width: 100%;
        height: 13.684rem;
        border-radius: 0.3684rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .servers-icon{
        width: 5.263rem;
        height: 5.263rem;
    }

    .box-servers:hover {
        transition: 0.2s cubic-bezier(0.48, 0.94, 0.73, 0.96);
        opacity: 0.7;
    }
    .box-servers:hover .servers-background{
        transition: 0.2s cubic-bezier(0.48, 0.94, 0.73, 0.96);
        background-size: 114%;
    }
    .box-servers .btn-link{
        transition: 0.13s cubic-bezier(0.32, 2.04, 0.73, 0.69);
        transform: rotate(90deg);
    }
    .box-servers:hover .btn-link{
        transition: 0.13s cubic-bezier(0.32, 2.04, 0.73, 0.69);
        transform: rotate(45deg) translate(-0.1053rem, 0.1579rem);
    }

    .box-servers:active{
        transition: 0.2s cubic-bezier(0.48, 0.94, 0.73, 0.96);
        transform: scale(1.03);
        opacity: 0.5;
    }

    .servers-name, .servers-descript{
        display: flex;
        width: 100%;
        height: auto;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.2632rem;
        color: var(--white);
    }
    .servers-descript{
        margin-top: 0.526rem;
    }
    `;Footer()}
else if(urlrg=="donate"){Head()
Button()
Checkbox()
Input()
Balance()
document.getElementById('PageStyles').innerHTML+=`/* donate */

    .block-donate{
        width: var(--block);
        height: auto;
        margin: auto;
        display: flex;
        margin-top: var(--headpadding);
        justify-content: space-between;
    }

    .box-payment-processing{
        gap: 0.8421rem;
        display: flex;
        flex-direction: column;
    }
    .box-payment-processing .block-checkbox{
        margin-top: 0.8421rem;
        margin-bottom: 0.8421rem;
    }
    .box-payment-processing button{
        width: 100%;
    }

    .payment-info{
        display: flex;
        gap: 1.0526rem;
        background: var(--blue);
        padding: 1.2632rem;
        box-sizing: border-box;
        border-radius: 0.5789rem;
        align-items: center;
        border: solid 1px var(--blue-dark);
    }


    .payment-box-line{
        display: flex;
        flex-direction: column;
        gap: 0.9474rem;
    }
    .box-payment{
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    .fix-payment{
        display: flex;
        flex-direction: column;
        gap: 3.1579rem;
        position: sticky;
        top: calc( 50vh - 17rem);
    }

    .box-donate-status .box-balance-pref{
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-template-rows: 1fr;
        justify-content: space-between;
        margin-top: 0rem;
    }

    .payment-info img{
        aspect-ratio: 821 / 1000;
        width: 6rem;
    }
    .box-donate-status{
        width: 74%;
        display: flex;
        flex-direction: column;
        gap: 1.5789rem;
        padding-left: 3.1579rem;
    }

    .donate-status-check{
        display: flex;
        flex-direction: column;
        gap: 3.1579rem;
        position: relative;
    }
    .box-status{
        display: flex;
        flex-direction: column;
        gap: 1.0526rem;
    }
    .status-info{
        line-height: 160%;
        color: var(--sun-gray);
    }
    .status-role{
        display: flex;
        align-items: center;
        gap: 0.8421rem;
        justify-content: space-between;
    }
    .status-role img{
        width: 1.736rem;
        height: 1.736rem;
        opacity: 0.3;
    }

    .status-role-buy img{
        opacity: 1;
    }
    .bg-balance-buy{
        width: auto;
        height: auto;
        background-color: var(--graphite);
        border-radius: 100%;
        box-shadow: var(--graphite) 0 0 0 0.2632rem;
        display: flex;
        fill: var(--white);
    }
    .bg-balance-buy-active{
        opacity: 1;
    }

    .box-bonus{
        display: flex;
        flex-direction: column;
        gap: 1.1579rem;
        padding: 1.2632rem;
        box-sizing: border-box;
        border: solid 1px var(--light-gray);
        border-radius: 0.5789rem;
    }
    .bonus-line{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .bonus-line text{
        display: inline-flex;
        align-items: center;
        gap: 0.4211rem;
    }

    .line-donate-map{
        background: var(--white);
        opacity: 0.3;
        width: 0.21rem;
        height: 90%;
        position: absolute;
        z-index: 11;
        right: 0.78rem;
        z-index: -9;
        bottom: 0.1053rem;
    }

    .select-system{
        display: flex;
        gap: 3.1579rem;
    }

    .block-operators{
        display: flex;
        flex-wrap: wrap;
        gap: 0.8421rem;
        margin-top: 1.5789rem;
        margin-bottom: 0.8421rem;
    }
    .block-operators-vanish{
        display: none;
    }
    .content-operators{
        display: flex;
        gap: 0.4211rem;
        align-items: center;
        width: 48%;
    }

    .content-operators img{
        width: 2rem;
        border-radius: 100%;
        border: solid 1px var(--light-gray);
        box-sizing: border-box;
    }
    `;Footer()}
else if(urlrg=="info"){Head()
Button()
Accordion()
document.getElementById('PageStyles').innerHTML+=`/* page info */

    .block-wiki{
        width: var(--block);
        height: auto;
        margin: auto;
        display: flex;
        margin-top: var(--headpadding);
        justify-content: space-between;
    }
    .block-wiki text, .block-wiki h1, .block-wiki h2, .block-wiki h3, .block-wiki a{
        white-space: pre-line;
    }

    .wiki-content{
        width: 100%;
        padding-right: 3.1579rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 0.8421rem;
    }
    .wiki-content-max{
        padding-right:0rem; 
    }
    .wiki-content img{
        width: 100%;
        height: auto;
    }
    .box-wiki-links{
        width: 30rem;
        display: flex;
        flex-direction: column;
        gap: 3.1579rem;
    }
    .wiki-link,
    .wiki-link:visited{
        width: 100%;
        padding: 0.5263rem 0rem;
        box-sizing: border-box;
        display: flex;
        align-content: center;
        justify-content: space-between;
        cursor: pointer;
        color: var(--white);
        fill: var(--white);
    }
    .wiki-link:hover, .wiki-link:hover:visited{
        opacity: 0.7;
        color: var(--white);
        fill: var(--white);
    }
    .wiki-link:active, .wiki-link:active:visited{
        opacity: 0.5;
        color: var(--white);
        fill: var(--white);
    }
    .links-group h3{
        line-height: 160%;
        padding: 0rem 0rem 0.8421rem 0rem;
    }
    .links-group{
        display: flex;
        flex-direction: column;
    }
    .wiki-link .btn-link{
        transition: 0.13s cubic-bezier(0.32, 2.04, 0.73, 0.69);
        height: 100%;
        height: max-content;
        padding-top: 0.35rem;
        fill: inherit;
    }
    
    .wiki-link:hover .btn-link{
        transition: 0.13s cubic-bezier(0.32, 2.04, 0.73, 0.69);
        transform: rotate(45deg) translate(-0.1053rem, 0.1579rem);
    }
    .wiki-link svg{
        width: 1rem;
        height: 1rem;
    }
    .wiki-links-btn{
        display: none;
        position: fixed;
        bottom: 6.6rem;
        right: 1rem;
        z-index: 600;
    }
    .br{
        margin-bottom: 1.5789rem; 
    }
    .wiki-content h3{
        margin-top: 0.8421rem;
    }
    .wiki-content h2{
        margin-top: 1.5789rem;
    }
    .wiki-content h1{
        margin-top: 4.7368rem;
    }
    .wiki-content h1:nth-child(1){
        margin-top: 0rem;
    }
    .wiki-content img{
        width: 100%;
        height: auto;
        margin-bottom: 1.5789rem;
        border-radius: 0.3684rem;
    }
    .wiki-content .accordion > h3{
        margin-top: 0rem;
    }
    .note-red{
        color: var(--red)
    }
    .box-emoji{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        height: max-content;
        width: 100%;
    }
    .box-emoji img{
        transition: 0.07s;
        image-rendering: pixelated;
        width: 1.9474rem;
        height: 1.9474rem;
        border-radius: 0;
        margin: 0;
        box-shadow: var(--light-gray) 0 0 0 1px;
    }

    .box-images img{
        width: 7.0526rem;
        height: 7.0526rem;
        image-rendering: auto;
    }
    
    .box-emoji img:hover{
        box-shadow: var(--light-gray) 0 0 0 4px;
    }
    .box-emoji img:active{
        transition: 0.03s;
        box-shadow: var(--blue) 0 0 0 5px;
    }
    .copy-emoji{
        background: var(--graphite);
        border: solid 0px var(--graphite);
        font-size: 0px;
    }
    .wiki-si{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.8421rem 2.5263rem;
    }
    .wiki-si-cell{
        display: flex;
        width: max-content;
        flex-direction: column;
        height: max-content;
        flex-wrap: nowrap;
    }
    .si-banner{
        display: flex;
        width: 100%;
        background-size: cover;
        height: 14rem;
        align-items: center;
        justify-content: center;
        border-radius: 0.4737rem;
    }
    .si-banner img{
        width: 8.4211rem;
        height: 8.4211rem;
    }
    
    .si-modlist {
        display: flex;
        gap: 0.8421rem;
        flex-wrap: wrap;
        flex-direction: row;
    }
    
    .si-modlist text{
        display: inline-flex;
        gap: 0.8421rem;
        height: max-content;
        align-items: center;
        width: 49%;
    }

    .si-modlist img{
        width: 1.2632rem;
        height: 1.2632rem;
        margin: 0;
        padding: 0;
        border-radius: 0;
        image-rendering: pixelated;
    }
    .si-modlist text > img{
        margin: 0rem;
    }

    .group-img{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1px;
        overflow: hidden;
        border-radius: 0.578rem;
    }
    .group-img img{
        margin: 0;
        width: calc(50% - 0.5px);
        border-radius: 0rem;
    }
    .box-source{
        position: relative;
        display:flex;
        width: 100%;
        border-radius: 0.578rem;
    }
    .group-img .box-source{
        width: calc(50% - 0.5px);
        border-radius: 0;
    }
    .group-img .box-source img, .box-source img{
        margin: 0;
        position: relative;
        width: 100%;
        height: auto;
    }
    .group-download{
        display: flex;
        position: absolute;
        gap: 0.8421rem;
        bottom:1.2632rem;
        right:1.2632rem;
    }
    .column-career{
        width: 100%;
        height: max-content;
        display: flex;
        padding: 1.0526rem;
        box-sizing: border-box;
        border: solid 1px var(--light-gray);
        flex-direction: column;
        border-radius: 0.4737rem;
        padding-bottom: 0rem;
        gap: 0.5263rem;
    }
    .column-career h2{
        margin-top: 0rem; 
    }
    .box-career{
        gap: 1.0526rem;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-top: 1.0526rem;
    }
    .box-column{
        width: 50%;
        display: flex;
        gap: 1.0526rem;
        flex-direction: column;
    }

    .wiki-si text, .wiki-si h1, .wiki-si h2, .wiki-si h3, .wiki-si a,
    .block-modlist text, .block-modlist h1, .wiki-si h2, .wiki-si h3, .wiki-si a{
        white-space: normal;
    }

    .block-play-sub{
        width: 100%;
        height: auto;
        display: flex;
        gap: 1.5789rem;
        flex-wrap: wrap;
        margin-top: 1.5789rem;
    }
    .box-play{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        width: 100%;
        align-content: center;
        align-items: center;
        justify-content: space-between;
    }
    .box-text-play{
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        width: 100%;
    }

    .box-play video{
        animation: playicons1 1.2s cubic-bezier(0, 0.05, 0, 1.62);
        animation-fill-mode: forwards;
        opacity: 0;
    }
    @keyframes playicons1{
        0%{
            opacity: 0;
            transform: scale(0);
        }
        40%{
            opacity: 1;
        }
        100%{
            transform: scale(1);
            opacity: 1;
        }
    }
    .box-play video{
        width: 12rem;
        height: 12rem;
    }
    .btn-group{
        display: flex;
        width: auto;
        gap: 0.8421rem;
    }

    `;Footer()}
else if(urlrg=="cabinet"){Head()
Button()
Dropdown()
Checkbox()
Input()
Toggle()
Balance()
document.getElementById('PageStyles').innerHTML+=`/* cabinet */

    .cabinet-banner{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        padding: 1.0526rem;
        justify-content: space-between;
        background-size: cover;
        border-radius: 0.5789rem;
        border: solid 1px var(--light-gray);
        box-sizing: border-box;
        gap: 2.1053rem;
    }
    .cabinet-banner span{
        display: flex;
        flex-direction: column;
        color: var(--white);
        gap: 0.4211rem;
    }
    .cabinet-banner text,.cabinet-banner h2{
        color: #fff;
    }
    

    .box-skin-anim{
        display: flex;
        width: 100%;
        gap: 0.8421rem;
    }

    .skin-anim{
        transition: 0.13s else-in;
        display: flex;
        flex-direction: column;
        width: calc( 33.33% - 0.4211rem );
        box-sizing: border-box;
        height: 16rem;
        border-radius: 0.4737rem;
        padding: 0.8421rem;
        border: solid 1px var(--light-gray);
        cursor: pointer;
    }

    .skin-anim:hover{
        border: solid 1px var(--white);
    }

    .skin-anim:active{
        border: solid 1px var(--blue);
    }

    .skin-anim-active, skin-anim-active:hover{
        border: solid 1px var(--blue);
        background-color: var(--blue-dark);
    }

    .anim-view{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        overflow: hidden;
    }

    .block-skin{
        width: 34%;
    }

    .modal-lage{
        width: 44rem;
        flex-direction: row;
        gap: 3.1579rem;
    }

    .modal-lage-v{
        width: 44rem;
        flex-direction: column;
        gap: 1.5789rem;
    }

    .box-modal-lage{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.8421rem;
    }
    .box-modal-lage text{
        line-height: 180%;
        margin-bottom: 1.5789rem;
    }
    .box-modal-qrcode{
        display: flex;
        align-items: flex-start;
        width: 45%;
        height: max-content;
        justify-content: center;
        background: var(--white);
        flex-direction: column;
        padding: 0.4211rem;
        border-radius: 0.4737rem;
        gap: 0.8421rem;
    }
    .box-modal-qrcode text{
        line-height: 140%;
        color: var(--black);
    }

    .box-modal-qrcode img{
        width: 100%;
    }

    .modal-password .link{
        margin-bottom: 0.8421rem;
    }

    .block-session{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 0.8421rem;
    }
    .line-session{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex-direction: column;
    }

    .content-pay-history-date text{
        color: var(--gray);
        margin-bottom: 0.4211rem;
    }

    .content-pay-history-amount text{
        display: inline-flex;
        gap: 0.4211rem;
        align-items: center;
    }

    .content-pay-history-comment{
        width: 100%;
        height: auto;
        line-height: 160%;
    }
    .list-session{
        width: 100%;
        height: 30rem;
        display: flex;
        flex-direction: column;
        gap: 1.5789rem;
        overflow: scroll;
    }

    .block-cc{
        width: var(--block);
        height: auto;
        margin: auto;
        display: flex;
        margin-top: var(--headpadding);
        justify-content: space-between;
    }

    .block-cabinet{
        width: 66%;
        box-sizing: border-box;
        height: auto;
        padding-right: 3.1579rem;

        display: flex;
        flex-direction: column;
        gap: 3.1579rem;
    }
    .box-skin{
        top: calc( 50vh - 17.5rem);
        position: sticky;
        width: 100%;
        box-sizing: border-box;
        height: 35rem;
        gap: 0.8421rem;
        display: flex;
        flex-direction: column;
    }

    .box-cabinet{
        display: flex;
        flex-direction: column;
        gap: 1.2632rem;
    }

    .cabinet-balance{
        width: 100%;
        height: auto;
        padding: 1.0526rem;
        box-sizing: border-box;
        border: solid 1px var(--light-gray);
        border-radius: 0.578rem;
        display: flex;
        flex-direction: column;
        gap: 1.5789rem;
    }


    .box-cabinet-sub{
        gap: 1.5789rem;
    }

    .box-cabinet-sub h2{
        display: flex;
        flex-direction: column;
        gap: 1.5789rem;
    }

    .cabinet-sub{
        display: flex;
        flex-wrap: wrap;
        gap: 1.578rem;
    }

    .priv-group{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        margin-top: 1rem;
    }

    .box-cnn{
        border-radius: 0.4737rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        color: white;
    }
    .cnn{
        display: flex;
        flex-direction: column;
        gap: 0.8421rem;
        width: 100%;
        height: max-content;
        padding: 0.8421rem;
        box-sizing: border-box;
        background-size: cover;
        background-repeat: no-repeat no-repeat;
        color: inherit;
    }
    .cnn text{
        font-family: 'minecraft text';
        color: inherit;
    }


    .sub-card{
        display: flex;
        width: calc(33.33% - 1.0526rem);
        height: 15.263rem;
        box-sizing: border-box;
        border: solid 1px var(--light-gray);
        border-radius: 0.578rem;
        padding: 1.0526rem;
        padding-top: 0.8421rem;
        flex-direction: column;
        justify-content: space-between;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .sub-card .button, .sub-card button{
        width: 100%;
    }

    .box-sub-btn{
        width: 100%;
        height: auto;
        display: flex;
        gap: 0.8421rem;
    }

    .sub-card-two{
        width: calc(66.66% - 0.5263rem);
    }

    .sub-card-bg{
        box-shadow: inset rgb(27 27 27 / 39%) 0 0 0 15rem;
    }

    .sub-card-bg img{
        filter: brightness(8);
    }

    .sub-card-launcher{
        box-shadow: inset rgb(27 27 27 / 39%) 0 0 0 15rem;
    }

    .sub-header{
        display: flex;
        flex-direction: column;
    }

    .sub-header h3{
        margin-bottom: 0.4211rem;
    }

    .sub-header text{
        display: flex;
        flex-wrap: wrap;
        gap: 0.526rem;
        align-items: center;
    }


    .box-security{
        display: flex;
        flex-direction: column;
        gap: 1.5789rem;
    }

    .box-security h2{
        margin-bottom: 0.5263rem;
    }

    .security{
        display: flex;
        border-bottom: solid 1px var(--light-gray);
        padding-bottom: 1.5789rem;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
    }
    .security:last-child{
        padding: 0rem;
        border-bottom: 0rem;
    }

    .security h3{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.315rem;
    }

    .box-toggle{
        width: max-content;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
        border: solid 1px var(--light-gray);
        height: max-content;
        border-radius: 0.3684rem;
        gap: 0.1579rem;
        padding: 0.1579rem;
        height: 2.5263rem;
        box-sizing: border-box;
    }

    .box-toggle button:empty{
        display: none;
    }

    .box-toggle button{
        height: 100%;
        align-items: center;
        border-radius: 0.2684rem;
        background-color: var(--graphite);
        color: var(--sun-gray);
        width: 100%;
    }
    .box-toggle button:hover{
        background-color: var(--light-gray);
        transform: scale(1);
    }
    .box-toggle button:active{
        background-color: var(--light-gray);
        transform: scale(0.97);
    }
    .box-toggle button:disabled{
        background-color: var(--blue);
        color: white;
    }

    .box-skin .box-capsule{
        transform: translate(0px, -0.210rem);
    }

    .balance img{
        width: 1.263rem;
        height: 1.263rem;
    }

    .balance h3{
        gap: 0.4211rem;
        display: flex;
        line-height: 120%;
    }

    .skin-header{
        display: flex;
        height: auto;
        position: absolute;
        right: 0;
        flex-direction: column;
        gap: 0.8421rem;
        align-items: flex-end;
        user-select: none;
        top: 24%;
    }
    .skin-header svg{
        width: 1.6842rem;
        fill: var(--white);
    }
    .skin-header .button-icon, .skin-header .button-icon:hover, .skin-header .button-icon:active{
        background-color: rgba(255, 255, 255, 0);
    }
    .skin-header .button-icon:hover{
        opacity: 0.6;
    }
    .skin{
        width: 100%;
        height: 46vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: 0.5789rem;
    }
    .skin-fix{
        display: none;
        width: 100%;
        height: 59%;
        position: absolute;
        bottom: 0rem;
    }
    .btn-skin{
        width: 100%;
        display: flex;
        gap: 0.8421rem;
        align-items: center;
    }
    .btn-skin button{
        width: 100%;
    }
    .btn-skin .button-icon{
        max-width: max-content;
    }

    #skin_container{
        height: 100%;
        width: auto;
    }

    .tooltip-bottom, .tooltip-top{
        --tooltip-content:none;
    }
    .tooltip-bottom:hover:before, .tooltip-top:hover:before{
        content: var(--tooltip-content);
        position: absolute;
        z-index: 56;
        padding: 0.421rem 0.842rem;
        background-color: var(--white);
        color: var(--black);
        border: solid 1px var(--white);
        font-size: 0.736rem;
        display: inline;
        user-select: none;
        pointer-events: none;
        text-align: center;
        border-radius: 0.368rem;
        max-width: 15.789rem;
    }
    .tooltip-bottom:hover:before{
        transform: translate(0, 2.684rem);
    }
    .tooltip-top:hover:before{
        transform: translate(0, -2.684rem);
    }

    .block-auth{
        width: var(--block);
        height: calc(100vh - 13.368rem);
        min-height: auto;
        max-height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        padding: 6.315rem 0rem;
    }
    .box-auth{
        display: flex;
        flex-direction: column;
        gap: 1.052rem;
        width: 23.684rem;
        height: auto;
        padding: 2.105rem;
        border: solid 1px var(--light-gray);
        border-radius: 0.578rem;
    }
    .box-auth-form{
        display: flex;
        flex-direction: column;
        gap: 1.052rem;
        width: 100%;
        height: auto;
    }
    .nav-auth{
        width: 17.894rem;
        height: auto;
        display: flex;
        gap: 1.578rem;
        margin-bottom: 1.421rem;
        justify-content: center;
    }
    .nav-auth-link{
        position: relative;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .nav-auth-link-active{
        opacity: 0.5;
        cursor: default;
    }

    .auth-button{
        width: auto;
        margin-top: 0.526rem;
    }

    .box-auth .box-toggle{
        width: 100%;
    }

    .forgot-auth{
        width: 100%;
        text-align: center;
        margin-top: 0.526rem;
    }

    .box-auth .box-checkbox>span{
        align-items: flex-start;
    }

    `;Footer()}
else if(urlrg=="register"){Head()
Button()
Checkbox()
Input()
Toggle()
document.getElementById('PageStyles').innerHTML+=`

    .block-auth{
        width: var(--block);
        height: calc(100vh - 13.368rem);
        min-height: auto;
        max-height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        padding: 6.315rem 0rem;
    }
    .box-auth{
        display: flex;
        flex-direction: column;
        gap: 1.052rem;
        width: 23.684rem;
        height: auto;
        padding: 2.105rem;
        border: solid 1px var(--light-gray);
        border-radius: 0.578rem;
    }
    .box-auth-form{
        display: flex;
        flex-direction: column;
        gap: 1.052rem;
        width: 100%;
        height: auto;
    }
    .nav-auth{
        width: 17.894rem;
        height: auto;
        display: flex;
        gap: 1.578rem;
        margin-bottom: 1.421rem;
        justify-content: center;
    }
    .nav-auth-link{
        position: relative;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .nav-auth-link-active{
        opacity: 0.5;
        cursor: default;
    }

    .auth-button{
        width: auto;
        margin-top: 0.526rem;
    }

    .box-auth .box-toggle{
        width: 100%;
    }

    .forgot-auth{
        width: 100%;
        text-align: center;
        margin-top: 0.526rem;
    }

    .box-auth .box-checkbox>span{
        align-items: flex-start;
    }
    `;Footer()}
else if(urlrg=="recovery"){Head()
Button()
Checkbox()
Input()
Toggle()
document.getElementById('PageStyles').innerHTML+=`

    .block-auth{
        width: var(--block);
        height: calc(100vh - 13.368rem);
        min-height: auto;
        max-height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        padding: 6.315rem 0rem;
    }
    .box-auth{
        display: flex;
        flex-direction: column;
        gap: 1.052rem;
        width: 23.684rem;
        height: auto;
        padding: 2.105rem;
        border: solid 1px var(--light-gray);
        border-radius: 0.578rem;
    }
    .box-auth-form{
        display: flex;
        flex-direction: column;
        gap: 1.052rem;
        width: 100%;
        height: auto;
    }
    .nav-auth{
        width: 17.894rem;
        height: auto;
        display: flex;
        gap: 1.578rem;
        margin-bottom: 1.421rem;
        justify-content: center;
    }
    .nav-auth-link{
        position: relative;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .nav-auth-link-active{
        opacity: 0.5;
        cursor: default;
    }

    .auth-button{
        width: auto;
        margin-top: 0.526rem;
    }

    .box-auth .box-toggle{
        width: 100%;
    }

    .forgot-auth{
        width: 100%;
        text-align: center;
        margin-top: 0.526rem;
    }

    .box-auth .box-checkbox>span{
        align-items: flex-start;
    }
    `;Footer()}
else if(urlrg=="changemail"){Head()
Button()
Checkbox()
Input()
Toggle()
document.getElementById('PageStyles').innerHTML+=`

    .block-auth{
        width: var(--block);
        height: calc(100vh - 13.368rem);
        min-height: auto;
        max-height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        padding: 6.315rem 0rem;
    }
    .box-auth{
        display: flex;
        flex-direction: column;
        gap: 1.052rem;
        width: 23.684rem;
        height: auto;
        padding: 2.105rem;
        border: solid 1px var(--light-gray);
        border-radius: 0.578rem;
    }
    .box-auth-form{
        display: flex;
        flex-direction: column;
        gap: 1.052rem;
        width: 100%;
        height: auto;
    }
    .nav-auth{
        width: 17.894rem;
        height: auto;
        display: flex;
        gap: 1.578rem;
        margin-bottom: 1.421rem;
        justify-content: center;
    }
    .nav-auth-link{
        position: relative;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .nav-auth-link-active{
        opacity: 0.5;
        cursor: default;
    }

    .auth-button{
        width: auto;
        margin-top: 0.526rem;
    }

    .box-auth .box-toggle{
        width: 100%;
    }

    .forgot-auth{
        width: 100%;
        text-align: center;
        margin-top: 0.526rem;
    }

    .box-auth .box-checkbox>span{
        align-items: flex-start;
    }
    `;Footer()}
else if(urlrg=="pixelbattle"){Head()
Button()
document.getElementById('PageStyles').innerHTML+=`
    main{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }
    .block-pixelbattle{
        width: 100%;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        image-rendering: pixelated;
    }
    .block-pixelbattle canvas{
        width: 100%;
        height: autp;
    }
    footer{
        display: none;
    }
   `;Footer()}
else{Head()
Button()
document.getElementById('PageStyles').innerHTML+=`10`;Footer()}
function Footer(){document.getElementById('PageStyles').innerHTML+=`
    @media screen and (max-width: 9900px) {
        :root {
            --scale: 0.7vw;
        }
    }

    @media screen and (max-width: 2700px) {
        :root {
            --scale: 19px;
        }
        #skin_container{
            height: 90%;
        }
        .box-skin{
            top: 8rem;
            height: 42rem;
        }
        .fix-payment{
            top: 8rem;
        }
    }
    @media screen and (max-width: 1900px) {
        #skin_container{
            height: 100%;
        }
        .box-skin{
            top: calc( 50vh - 17.5rem);
            height: 35rem;
        }
    }

    @media screen and (max-width: 1430px) {
        :root {
            --scale: 16px;
        }
    }

    @media screen and (max-width: 1370px) {
        :root {
            --scale: 14px;
        }
    }

    @media screen and (max-width: 1230px) {
        :root {
            --scale: 12px;
            --block: 92%;
        }
    }

    @media screen and (max-width: 1130px) {
        :root {
            --scale: 11px;
            --block: 92%;
        }
    }

    @media screen and (max-width: 1000px) {
        :root {
            --scale: 10px;
            --block: 94%;
        }
        .block-play-sub button, .block-play-sub .button{
            width: 100%;
        }
        .block-play-sub btn-group{
            display: flex;
            flex-direction: column;
        }
    }

    @media screen and (max-width: 780px) {
        :root {
            --scale: 3.5vw;
            --block: 92%;
            --headpadding: 1rem;

            /* fonts */
            --text-lite: 0.632rem;      /* 14px */
            --text: 0.9474rem;           /* 18px */
            --h3: 1.0526rem;             /* 22px */
            --h2: 1.3684rem;             /* 32px */
            --h1: 2.6316rem;             /* 60px */
        }

        .box-career{
            flex-direction: column;
        }

        .block-mobile-nav-active{
            visibility: visible;
            width: 100%;
            height: calc(100% - 5.105rem);
            opacity: 1;
            will-change: transform, opacity, visibility;
        }

        .box-servers{
            width: 100%;
        }
        header{
            display: none;
        }
        .block-widgets{
            width: 100%;
            order: 2;
            padding-right: 0rem;
            margin-top: 5rem;
        }
        .block-servers-list{
            width: 100%;
            order: 1;
        }
        .widgets{
            padding-top: 0.526rem;
        }

        .home-info{
            flex-wrap: wrap;
        }

        .home-banner{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
                '.'
                '.'
                '.';
            height: 100%;
        }
        .home-banner .btn-group{
            margin-bottom: 1.578rem;
            flex-wrap: wrap;
        }
        .home-banner .btn-group > .button{
            width: 100%;
            height: max-content;
        }
        .home-banner h1{
            font-size: 2.7rem;
            width: 100%;
            margin-top: var(--headpadding);
        }
        footer{
            margin-top: 8rem;
            gap: 2.105rem;
            flex-wrap: wrap;
            padding-bottom: 20rem;
        }
        .footer-corp{
            justify-content: none;
            height: auto;
            gap: 0.526rem;
        }
        .footer-politics{
            display: flex;
            gap: 1.368rem;
            flex-direction: column;
            margin-top: 1.578rem;
            font-size: 0.947rem;
        }
        .footer-politics .text{
            font-size: 0.947rem;
        }
        .footer-info text{
            font-size: 0.947rem;
        }
        .mobile-nav{
            display: flex;
        }
        footer .payment-processing{
            text-align: left;
            line-height: 160%;
        }
        .block-home-banner{
            background-image: url(https://storage.c7x.dev/one1side/website/bannerlauncher11m.jpg);
            background-image: url(https://storage.c7x.dev/one1side/website/bannerlauncher11m.webp);
            height: calc(100vh - 10rem);
        }
        .button, button{
            padding: 1rem 1.315rem 1rem 1.315rem;
            height: 3.4rem;
        }
        .box-slider{
            height: 3.4rem;
        }
        .servers-background{
            background-size: 128%;
        }
        .box-servers:hover .servers-background{
            background-size: 154%;
        }
        .block-servers{
            margin-bottom: 8rem;
        }
        .accordion, .accordion:hover, .accordion:active{
            padding: 1.578rem 0px;
        }
        .accordion .h3{
            text-align: left;
            line-height: 160%;
        }
        .box-play{
            height: auto;
            display: flex;
            flex-direction: column-reverse;
            margin-top: 4rem;
        }
        .box-play img{
            width: 70%;
            height: auto;
            justify-self: center;
        }
        .box-play picture{
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .box-play video{
            width: 100%;
            height: 16rem;
            display: flex;
            justify-content: center;
        }

        .play-ds{
            padding: 1.578rem 0;
        }
        .box-play .button{
            justify-self: center;
            width: 100%;
        }
        .box-downloader{
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            gap: 0px 0px;
            grid-template-areas:
              'launcher'
              'downloader';
        }
        .down-java{
            flex-direction: column;
            padding: 2.105rem 1.578rem;
        }

        .down-java .button{
            margin-top: 2.631rem;
            width: 100%;
        }
        .card-down{
            align-items: center;
        }
        .box-card-launcher{
            height: 21rem;
            margin-bottom: 2rem;
        }
        .box-card-downloader .button{
            width: 90%;
        }
        .mini-widget{
            padding: 1.1579rem;
            width: 100%;

        }
        .block-cookie{
            bottom: 12rem;
        }
        .cookie text{
            width: auto;
        }
        .cookie{
            padding: 1.0526rem;
            width: 92%;
            flex-direction: column;
        }
        .cookie button{
            width: 100%;
        }

        .block-cc{
            flex-direction: column;
            margin-bottom: 5rem;
        }
        .box-skin{
            top: 0;
            position: static;
            width: 100%;
            margin-bottom: 5rem;
            margin-top: var(--headpadding);
            height: auto;
        }
        .block-skin{
            order: 1;
            width: 100%;
        }
        .skin{
            height: 39rem;
            position: relative;
        }

        .skin-fix{
            display: block;
        }

        .box-balance .button{
            width: 100%;
        }
        .box-balance{
            gap: 1.578rem;
            flex-direction: column;
        }
        .box-balance-pref text{
            font-size: 0.79rem;
        }
        .sub-card,.sub-card-two{
            width: calc(50% - 0.79rem);
        }

        .box-balance-line{
            margin-top: 3.157rem;
        }
        .block-cabinet{
            width: 100%;
            padding-right: 0rem;
            order: 2;
        }

        .security-history .btn-group{
            flex-direction: column;
            width: 100%;
        }
        .security-history button{
            width: 100%;
        }
        .security-history{
            display: flex;
            flex-direction: column;
            gap: 2.052rem;
        }
        .box-auth{
            border: solid 0px var(--light-gray);
        }
        .box-input input{
            padding: 1rem 1.315rem 1rem 1.315rem;
        }
        .balance{
            width: 100%;
            flex-direction: column;
        }
        .box-payment{
            width: 100%;
        }
        .block-donate{
            display: flex;
            flex-wrap: wrap;
            gap: 4.7368rem;
        }

        .select__toggle, .select__option{
            height: 3.4rem;
        }
        .select__dropdown{
            max-height: 21rem;
        }
        .box-donate-status{
            width: 100%;
            padding: 0;
        }
        .server-list .server-icon{
            width: 2.3rem;
            height: 2.3rem;
        }
        .server-list, .btn-server-dropdown .server-list-dropdown-active{
            gap: 1.6842rem;
        }
        .box-toggle{
            height: 3.4rem;
        }
        .button-icon img{
            width: 1.3684rem;
        }
        .skin-header{
            position: static;
            display: flex;
            height: auto;
            gap: 0.8421rem;
            right: unset;
            align-items: flex-end;
            user-select: none;
            justify-content: center;
            flex-direction: row;
            border: solid 1px var(--light-gray);
            border-radius: 0.4737rem;
            margin-top: 0.4211rem;
        }
        .skin-header svg{
            min-width: 1.7684rem;
        }
        .skin-header button{
            padding: 0rem 0rem;
        }
        .btn-skin button{
            width: 100%;
        }
        .status-info{
            width: 90%
        }
        .wiki-content{
            padding-right: 0rem; 
        }
        .wiki-content > .si-banner img{
            margin: 0rem;
        }
        .box-wiki-links{
            display: none; 
            position: fixed;
            top: 0;
            left: 0;
            background: var(--graphite);
            overflow-y: scroll;
            width: 100%;
            box-sizing: border-box;
            padding: var(--headpadding);
            height: 100%;
            align-items: center;
            padding-bottom: 12rem;
            padding-top: 2rem;
            align-items: center;
        }
        .box-wiki-links-active{
            display: flex;
            
        }
        .links-group{
            width: var(--block);
        }
        .wiki-links-btn{
            display: flex;
            position: fixed;
        }
        .btn-nav:active{
            background: var(--light-gray);
            border-radius: 11px;
        }
        
        .sub-card-two-m{
            width: 100%;
        }
        
        .wiki-link, .wiki-link:visited{
            padding: 0.8421rem 0rem;
        }

    }
    .stop-scrolling{
        overflow-y: hidden;
        overflow-x: hidden;
    }

    @media screen and (max-width: 380px) {
        :root {
            --scale: 4vw;
            --block: 92%;
            --headpadding: 1rem;
        }
        .block-home-banner{
            height: max-content;
        }
        .btn-server-list .box-btn-server-list{
            grid-template-columns: auto 1.8fr 1.3fr auto;
        }

 
    `;};