jQuery(function () {
    window.moment.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [à] LT",
            LLLL: "dddd D MMMM YYYY [à] LT",
            llll: "dddd DD MMMM YYYY"
        },
        calendar: {
            sameDay: "[Aujourdhui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "une année",
            yy: "%d années"
        },
        ordinal: function (number) {
            return number + (number === 1 ? "er" : "ème");
        },
        week: {
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });

    window.moment.updateLocale("en", {
        longDateFormat: {
            LTS: "HH:mm:ss",
            LT: "HH:mm",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY [at] LT",
            LLLL: "dddd, MMMM D, YYYY [at] LT",
            llll: "dddd MMMM DD YYYY"
        }
    });

    window.moment.locale(entryPoint_main.CB.Localization.currentCulture);
});