$(document).ready(function(){
	'use strict';
	$('.owl-carousel').owlCarousel({
	    autoplay:true,
	    autoplaySpeed: 800,
	    autoplayTimeout: 8000,
	    autoplayHoverPause:true,
	    loop:true,
	    autoWidth: true
	});
});


angular.module('myApp',
        [
            'ngSanitize',
            'com.2fdevs.videogular',
            'com.2fdevs.videogular.plugins.controls',
            'com.2fdevs.videogular.plugins.poster'
        ]
    )
    .controller('HomeCtrl',
        ['$sce', function ($sce) {
            'use strict';
            this.config = {
                preload: 'none',
                sources: [
                    {src: $sce.trustAsResourceUrl('../videos/astronaut_final.mp4', 'videos/astronaut_final.mp4'), type: 'video/mp4'},
                    {src: $sce.trustAsResourceUrl('../videos/astronaut_final.webm'), type: 'video/webm'},
                    {src: $sce.trustAsResourceUrl('../videos/astronaut_final.ogg'), type: 'video/ogg'}
                ],
                tracks: [
                    {
                        src: '',
                        kind: 'subtitles',
                        srclang: 'en',
                        label: 'English',
                        default: ''
                    }
                ],
                theme: {
                    url: '../bower_components/videogular-themes-default/videogular.css'
                },
                plugins: {
                    poster: '../images/video-still.jpg'
                }
            };
        }]
    );