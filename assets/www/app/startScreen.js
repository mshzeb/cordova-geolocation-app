/*
 * JS for startScreen generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '9e4d469c-1d72-4d49-a000-b640742f81eb';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "startScreen",
    "location": "startScreen.html"
}];

function startScreen_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelabel_51': 'startScreen_mobilelabel_51',
        'mobilebutton_2': 'startScreen_mobilebutton_2',
        'mobilelabel_50': 'startScreen_mobilelabel_50',
        'mobilegrid_38': 'startScreen_mobilegrid_38',
        'mobilegridcell_39': 'startScreen_mobilegridcell_39',
        'mobilelabel_43': 'startScreen_mobilelabel_43',
        'mobilegridcell_40': 'startScreen_mobilegridcell_40',
        'lbl_latitude': 'startScreen_lbl_latitude',
        'mobilegridcell_41': 'startScreen_mobilegridcell_41',
        'mobilelabel_44': 'startScreen_mobilelabel_44',
        'mobilegridcell_42': 'startScreen_mobilegridcell_42',
        'lbl_longitude': 'startScreen_lbl_longitude',
        'mobilelabel_49': 'startScreen_mobilelabel_49',
        'googlemap_47': 'startScreen_googlemap_47',
        'marker_48': 'startScreen_marker_48'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.mappings["startScreen_geolocation1_onsuccess_mapping_0"] = {
        "homeScreen": "startScreen",
        "directions": [

        {
            "from_name": "geolocation1",
            "from_type": "SERVICE_RESPONSE",

            "to_name": "startScreen",
            "to_type": "UI",

            "mappings": [

            {

                "source": "$['data']['coords']['latitude']",
                "target": "$['lbl_latitude:text']"

            },

            {

                "source": "$['data']['coords']['longitude']",
                "target": "$['lbl_longitude:text']"

            },

            {

                "source": "$['data']['coords']['latitude']",
                "target": "$['googlemap_47:latitude']"

            },

            {

                "source": "$['data']['coords']['longitude']",
                "target": "$['googlemap_47:longitude']"

            }

            ]
        }

        ]
    };

    Apperyio.mappings["startScreen_geolocation1_onbeforesend_mapping_0"] = {
        "homeScreen": "startScreen",
        "directions": [

        {

            "to_name": "geolocation1",
            "to_type": "SERVICE_REQUEST",

            "to_default": {
                "data": {
                    "options": {
                        "maximumAge": 3000,
                        "timeout": 5000,
                        "enableHighAccuracy": true,
                        "watchPosition": false
                    }
                }
            },

            "mappings": []
        }

        ]
    };

    Apperyio.datasources = Apperyio.datasources || {};

    window.geolocation1 = Apperyio.datasources.geolocation1 = new Apperyio.DataSource(GeolocationService, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["startScreen_geolocation1_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {

        },
        "onSuccess": function(data) {
            Apperyio.processMappingAction(Apperyio.mappings["startScreen_geolocation1_onsuccess_mapping_0"]);
        },
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });

    Apperyio.CurrentScreen = 'startScreen';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var startScreen_onLoad = function() {
            startScreen_elementsExtraJS();

            startScreen_deviceEvents();
            startScreen_windowEvents();
            startScreen_elementsEvents();
        };

    // screen window events


    function startScreen_windowEvents() {

        $('#startScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function startScreen_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function startScreen_elementsExtraJS() {
        // screen (startScreen) extra code

        /* googlemap_47 */

        $("[name = 'googlemap_47']").wrap("<div/>");
        $("[name = 'googlemap_47']").parent().css("margin-left", $("[name = 'googlemap_47']").css("margin-left"));
        $("[name = 'googlemap_47']").parent().css("margin-right", $("[name = 'googlemap_47']").css("margin-right"));
        $("[name = 'googlemap_47']").css("margin-left", '0');
        $("[name = 'googlemap_47']").css("margin-right", '0');

        var googlemap_47_options = {
            markerSourceName: "googlemap_47_markers",
            latitude: "",
            longitude: "",
            address: "San Francisco, CA",
            zoom: 10,
            showLocationMarker: true
        }

        Apperyio.__registerComponent('googlemap_47', new Apperyio.ApperyMapComponent("googlemap_47", googlemap_47_options));
        $("[name='googlemap_47_markers'] [apperytype='marker']").attr("reRender", "googlemap_47");
        $(":mobile-pagecontainer").off("pagecontainershow.startScreen_mobilecontainer").on("pagecontainershow.startScreen_mobilecontainer", function(event, ui) {
            if (($('#startScreen_googlemap_47', ui.toPage).length > 0) && (Apperyio('googlemap_47') != undefined)) {
                Apperyio('googlemap_47').refresh();
            }
        });

    };

    // screen elements handler


    function startScreen_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#startScreen_mobilecontainer [name="mobilebutton_2"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    try {
                        geolocation1.execute({});
                    } catch (e) {
                        console.error(e);
                        hideSpinner();
                    };

                }
            },
        }, '#startScreen_mobilecontainer [name="mobilebutton_2"]');

    };

    $(document).off("pagebeforeshow", "#startScreen").on("pagebeforeshow", "#startScreen", function(event, ui) {
        Apperyio.CurrentScreen = "startScreen";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    startScreen_onLoad();
};

$(document).off("pagecreate", "#startScreen").on("pagecreate", "#startScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    startScreen_js();
});