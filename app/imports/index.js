import { registrar } from '/imports/lib/ethereum';

if(location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
  Meteor.disconnect();
}

Meteor.startup(function() {
    // SET default language
    if(Cookie.get('TAPi18next')) {
        TAPi18n.setLanguage(Cookie.get('TAPi18next'));
    } else {
        var userLang = navigator.language || navigator.userLanguage,
        availLang = TAPi18n.getLanguages();

        // set default language
        if (_.isObject(availLang) && availLang[userLang]) {
            TAPi18n.setLanguage(userLang);
            // lang = userLang;
        } else if (_.isObject(availLang) && availLang[userLang.substr(0,2)]) {
            TAPi18n.setLanguage(userLang.substr(0,2));
            // lang = userLang.substr(0,2);
        } else {
            TAPi18n.setLanguage('en');
            // lang = 'en';
        }
    }

    // Setup Moment and Numeral i18n support
    Tracker.autorun(function(){
        console.log(TAPi18n);
        if(_.isString(TAPi18n.getLanguage())) {
            moment.locale(TAPi18n.getLanguage().substr(0,2));
            numeral.language(TAPi18n.getLanguage().substr(0,2));
        }
    });

    // add class to the header when scrolling
    $(window).on('scroll', function() {
        var scrollPosition = $(window).scrollTop();
        
        if( scrollPosition > 150 ) {
            $('header').addClass('fixed');
        } else if( scrollPosition > 90 ) {
            $('header').addClass('about-to-be-fixed ');
        } else {
            $('header').removeClass('fixed');
            $('header').removeClass('about-to-be-fixed ');
        }
    })

    // activates when back button is pressed 
    window.onpopstate = function(event) {
        var name = event.currentTarget.location.hash.slice(1)

        if (name !== Session.get('searched')) {
            Session.set('searched', name);
            Session.set('name', name);
            $('#search-input').val(name);
            window.location.hash = '#' + name;    
        }
        
    }
});





