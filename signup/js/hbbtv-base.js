/*
 * Common JavaScript library for HbbTV sites of ProSiebenSat.1 Digital
 */

/* jshint strict: false */
/* global KeyEvent: false */
/* global Channel: false */

/*
 * Compatibility fixes
 */

// Samsung 2011/2012 does not use OIPF collection template but arrays
Array.prototype.item = function(idx) {
  return this[idx];
};

/*
 * The global HbbTV object
 */
var HbbTV;

HbbTV = {

	/**
	 * Enable debugging on TV sets
	 */
	debug: false,

	/**
	 * Define minimum number of debug lines for scrolling
	 */
    minDebugLines: 20,

    /**
	 * Define maximum number of debug lines for scrolling
	 */
    maxDebugLines: 25,

	/**
	 * Show the debugLayer for X milli seconds
	 */
	debugLayerDuration: 5000,

	/**
	 * Additional logging to console if not null
	 */
	console: null,

    /**
     * If the app is in hidden state
     */
    hidden: false,

	/**
	 * CSS class for a fullscreen video/broadcast object
	 */
	fullscreenClass: 'fullscreen',

	/**
	 * The oipfApp object
	 */
	app: undefined,

	/**
	 * The HbbTV Keyset class
	 */
	keyset: undefined,

	/**
	 * Reference to current video/broadcast object
	 */
	broadcast: undefined,

    /**
     * The container div for the video/broadcast object
     */
	broadcastContainer: undefined,

	/**
     * The default keyset handled by the HbbTV app.
     * Color and Nav keys.
     */
   defaultKeyset: 0x1+0x2+0x4+0x8+0x10,

	/**
	 * Default settings for each channels
	 */
	defaults: {
		P7: {
			homeUrl: 'http://hbbtv.prosieben.de/service/redbutton_p7.php',
			startBarUrl: 'http://hbbtv.prosieben.de/portal/startbar',
			tvScrenFallbackImg: 'img/p7_tvscreen_fallback.jpg'
		},
		S1: {
			homeUrl: 'http://hbbtv.sat1.de/service/redbutton_s1.php',
			startBarUrl: 'http://hbbtv.sat1.de/portal/startbar',
			tvScrenFallbackImg: 'img/s1_tvscreen_fallback.jpg'
		},
		K1: {
			homeUrl: 'http://hbbtv.kabeleins.de/service/redbutton_k1.php',
			startBarUrl: 'http://hbbtv.kabeleins.de/portal/startbar',
			tvScrenFallbackImg: 'img/k1_tvscreen_fallback.jpg'
		},
		SIXX: {
			homeUrl: 'http://hbbtv.sixx.de/service/redbutton_sixx.php',
			startBarUrl: 'http://hbbtv.sixx.de/portal/startbar',
			tvScrenFallbackImg: 'img/sixx_tvscreen_fallback.jpg'
		}
	},

    /**
     * DVB Triplets
     */
    triplets: {
        'proSiebenDeSd'     : {def: 'P7',   name: 'ProSieben',          onid: 1,   tsid: 1107, sid: 17501},
        'satEinsDeSd'       : {def: 'S1',   name: 'SAT.1',              onid: 1,   tsid: 1107, sid: 17500},
        'kabelEinsDeSd'     : {def: 'K1',   name: 'kabel eins',         onid: 1,   tsid: 1107, sid: 17502},
        'sixxDeSd'          : {def: 'SIXX', name: 'SIXX',               onid: 133, tsid: 5,    sid: 776},
        'satEinsDeHd'       : {def: 'S1',   name: 'SAT.1 HD',           onid: 1,   tsid: 1017, sid: 61300},
        'proSiebenDeHd'     : {def: 'P7',   name: 'ProSieben HD',       onid: 1,   tsid: 1017, sid: 61301},
        'kabelEinsDeHd'     : {def: 'K1',   name: 'kabel eins HD',      onid: 1,   tsid: 1017, sid: 61302},
        'sixxDeHd'          : {def: 'SIXX', name: 'SIXX HD',            onid: 1,   tsid: 1017, sid: 61303},
        'satEinsBayernSd'   : {def: 'S1',   name: 'SAT.1 Bayern',       onid: 1,   tsid: 1107, sid: 17507},
        'satEinsNrwSd'      : {def: 'S1',   name: 'SAT.1 NRW',          onid: 1,   tsid: 1107, sid: 17508},
        'satEinsRpHessenSd' : {def: 'S1',   name: 'SAT.1 RhlPf/Hessen', onid: 1,   tsid: 1082, sid: 20010},
        'satEinsRpNsSd'     : {def: 'S1',   name: 'SAT.1 RhlPf/Nord',   onid: 1,   tsid: 1082, sid: 20009},
        'satEinsRpShSd'     : {def: 'S1',   name: 'SAT.1 RhlPf/Süd',    onid: 1,   tsid: 1082, sid: 20008}
    },

    /**
     * Keycodes
     */
    VK_RED     : 403,
    VK_GREEN   : 404,
    VK_YELLOW  : 405,
    VK_BLUE    : 406,

    VK_LEFT    : 37,
    VK_UP      : 38,
    VK_RIGHT   : 39,
    VK_DOWN    : 40,
    VK_ENTER   : 13,

    VK_0       : 48,
    VK_1       : 49,
    VK_2       : 50,
    VK_3       : 51,
    VK_4       : 52,
    VK_5       : 53,
    VK_6       : 54,
    VK_7       : 55,
    VK_8       : 56,
    VK_9       : 57,

    VK_PLAY    : 415,
    VK_PAUSE   : 19,
    VK_STOP    : 413,
    VK_FAST_FWD: 417,
    VK_REWIND  : 412,

    VK_BACK    : 461,
    VK_TELETEXT: 459,

	/**
	 * Initialize the app for a given channel
	 * @param channel
	 */
	init: function(channel) {

        // Copy KeyEvent constants in case they differ from the standard
        if(KeyEvent) {
            if(KeyEvent.VK_RED) {
                this.VK_RED     = KeyEvent.VK_RED;
                this.VK_GREEN   = KeyEvent.VK_GREEN;
                this.VK_YELLOW  = KeyEvent.VK_YELLOW;
                this.VK_BLUE    = KeyEvent.VK_BLUE;
            }
            if(KeyEvent.VK_LEFT) {
                this.VK_LEFT    = KeyEvent.VK_LEFT;
                this.VK_UP      = KeyEvent.VK_UP;
                this.VK_RIGHT   = KeyEvent.VK_RIGHT;
                this.VK_DOWN    = KeyEvent.VK_DOWN;
            }
            if(KeyEvent.VK_ENTER) {
                this.VK_ENTER   = KeyEvent.VK_ENTER;
            }
            if(KeyEvent.VK_0 ) {
                this.VK_0       = KeyEvent.VK_0;
                this.VK_1       = KeyEvent.VK_1;
                this.VK_2       = KeyEvent.VK_2;
                this.VK_3       = KeyEvent.VK_3;
                this.VK_4       = KeyEvent.VK_4;
                this.VK_5       = KeyEvent.VK_5;
                this.VK_6       = KeyEvent.VK_6;
                this.VK_7       = KeyEvent.VK_7;
                this.VK_8       = KeyEvent.VK_8;
                this.VK_9       = KeyEvent.VK_9;
            }
            if(KeyEvent.VK_PLAY ) {
                this.VK_PLAY    = KeyEvent.VK_PLAY;
                this.VK_PAUSE   = KeyEvent.VK_PAUSE;
                this.VK_STOP    = KeyEvent.VK_STOP;
                this.VK_FAST_FWD= KeyEvent.VK_FAST_FWD;
                this.VK_REWIND  = KeyEvent.VK_REWIND;
            }
            if(KeyEvent.VK_BACK) {
                this.VK_BACK    = KeyEvent.VK_BACK;
            }
            if(KeyEvent.VK_TELETEXT) {
                this.VK_TELETEXT= KeyEvent.VK_TELETEXT;
            }
        }

		try {
			// Copy channel default configs to global config
			if(this.defaults.hasOwnProperty(channel)) {
				for(var prop in this.defaults[channel]) {
                    if(this.defaults[channel].hasOwnProperty(prop)) {
                        this[prop] = this.defaults[channel][prop];
                    }
				}
			}
			// Initialize the HbbTV app
			var appMan = document.getElementById('oipfAppMan');
			var oipfConfig = document.getElementById('oipfConfig') || {};
			if (appMan && appMan.getOwnerApplication) {
				this.app = appMan.getOwnerApplication(document);
			} else { // VideoWeb
				// Mock app object for VideoWeb
				this.app = {};
				this.app.show = function() {
					// Ugly workaround to reinitialize the video/broadcast object for VideoWeb
					if(HbbTV.broadcastContainer) {
						HbbTV.broadcastContainer.innerHTML = HbbTV.broadcastContainer.innerHTML.toString();
						if(HbbTV.broadcastContainer.hasChildNodes) {
							HbbTV.broadcast = HbbTV.broadcastContainer.childNodes[0];
							if(HbbTV.broadcast.bindToCurrentChannel) {
                                HbbTV.broadcast.bindToCurrentChannel();
                            }
						}
					}
				};
			}
			if (!this.app.privateData) {
				this.app.privateData = {};
            }
            // Try HbbTV 1.1.1 or HbbTV 0.5
            this.keyset = this.app.privateData.keyset || oipfConfig.keyset || {};
            if(typeof(this.keyset.setValue) === 'undefined') {
                this.keyset.setValue = function(val) {
                    this.value = val;
                };
            }
            // color + nav
            this.keyset.setValue(this.defaultKeyset);
            this.log('hbbtv-base.js v.4 initialized');
		} catch (err) {
			this.log('init: ' + err.message);
		}
	},

    getDvbUrl: function(id) {
        // 'proSiebenDeSd'     : {def: 'P7',   name: 'ProSieben',          onid: 1,   tsid: 1107, sid: 17501},
        var tr = this.triplets[id];
        if(tr) {
            return "dvb://"+tr.onid.toString(16)+"."+tr.tsid.toString(16)+"."+tr.sid.toString(16)+".71/"+id;
        }
        return null;
    },

    detectChannel: function() {
        var i, c, t;
        if(this.broadcast && this.broadcast.currentChannel) {
            c = this.broadcast.currentChannel;
            for(i in this.triplets) {
                if(this.triplets.hasOwnProperty(i)) {
                    t = this.triplets[i];
                    if(c.onid === t.onid && c.tsid === t.tsid && c.sid === t.sid) {
                        return t;
                    }
                }
            }
        } else {
            this.log('No channel objcet!');
        }
    },

    switchChannel: function(id) {
        var c, t = this.triplets[id];
        if(HbbTV.broadcast) {
            try {
				c = HbbTV.broadcast.getChannelConfig().channelList.getChannelByTriplet(t.onid, t.tsid, t.sid);
			} catch(e) {
                this.log(e);
            }
            try {
				c = HbbTV.broadcast.createChannelObject(Channel.ID_DVB_S || 0, t.onid, t.tsid, t.sid);
			} catch(e) {
                this.log(e);
            }
            if(c) {
                HbbTV.broadcast.setChannel(c, true);
                return c;
            }
        }
    },

	/**
	 * Show the application and capture the keyboad events.
	 */
	show : function() {
		try {
			if(this.app.show) {
                this.app.show();
            }
			if(this.app.activate) {
                this.app.activate();
            }
			if(this.app.activateInput) {
                this.app.activateInput();
            }
			this.keyset.setValue(this.defaultKeyset);
            this.hidden = false;
		} catch(err){
			this.log('show: ' + err.message);
		}
	},

	/**
	 * Hide the application and stop capturing the keyboad events.
	 */
	hide : function() {
		try {
			if(this.app.hide) {
                this.app.hide();
            }
			this.keyset.setValue(this.keyset.RED);
            this.hidden = true;
		} catch(err){
			this.log('hide: ' + err.message);
		}
	},

	/**
	 * Inserts the video/broadcast object to container with id=parentEl and shows the current chanel in that object.
	 * @param parentEl container id
	 * @param broadcastElId Id vo the new video/broadcast object
	 */
	startBroadcast : function(parentEl, broadcastElId) {
        var vb;
		try {
			this.broadcastContainer = document.getElementById(parentEl);
			if (!this.broadcastContainer) {
				return;
            }
            while (this.broadcastContainer.firstChild) {
                this.broadcastContainer.removeChild(this.broadcastContainer.firstChild);
            }
            vb = document.createElement('object');
            vb.setAttribute('id', broadcastElId);
            vb.setAttribute('type', 'video/broadcast');
            // Mock OIPF methods in case they are not defined
			if(typeof(vb.setFullScreen) === 'undefined') {
                vb.setFullScreen = function(){};
            }
            if(typeof(vb.getComponents) === 'undefined') {
                vb.getComponents = function(type) {
                    // Simulate standard transport stream components if none are defined
                    switch(type) {
                        case 0:return [{'type': 0, 'encoding': 'MPEG2_SD_25', 'aspectRatio': 1.78}];
                        case 1:return [{'type': 1, 'encoding': 'AC3', 'language': 'deu', 'audioDescription': false, 'audioChannels': 2}];
                        case 2:return [{'type': 2, 'encoding': ''}];
                    }
                };
            }
            vb.addEventListener('ChannelChangeError', function(e) {HbbTV.log('ChannelChangeError');HbbTV.log(e);}, false);
            vb.addEventListener('ChannelChangeSucceeded', function(e) {HbbTV.log('ChannelChangeSucceeded');HbbTV.log(e);}, false);
            vb.addEventListener('PlayStateChange', function(e) {HbbTV.log('PlayStateChange');HbbTV.log(e);}, false);
            this.broadcastContainer.appendChild(vb);
            this.broadcast = vb;
			this.broadcastElementId = broadcastElId;
			setTimeout(function(){
                try {
                    if(HbbTV.broadcast.bindToCurrentChannel) {
                        HbbTV.broadcast.bindToCurrentChannel();
                    }
                } catch(e) {
                    HbbTV.log(e);
                    HbbTV.broadcastContainer.style.backgroundImage = 'url("' + HbbTV.tvScrenFallbackImg + '")';
                }
			}, 200);
		} catch(err){
			this.log('startBroadcast:' + err.message);
		}
	},

	/**
	 * Removes  the video/broadcast object from container.
	 */
	stopBroadcast : function () {
    'use strict';
		try {
			if (!this.broadcast) {
                return;
            }
            if(this.broadcast.release) {
                this.broadcast.release();
            }
            if (this.broadcastContainer) {
                this.broadcastContainer.removeChild(this.broadcast);
            }
            this.broadcast = undefined;
		} catch(err) {
            this.log('stopBroadcast: ' + err.message);
		}
	},

	/**
	 * Checks if the fullscreen calls is set to the video/broadcast object
	 * @returns full screen status
	 */
	isFullScreen: function() {
		try {
			return new RegExp('(?:^|\\s+)' + this.fullscreenClass + '(?:\\s+|$)').test(this.broadcast.className);
		} catch(err){
			this.log('isFullScreen: ' + err.message);
		}
	},

	/**
	 * Switch fullscreen mode on and off. This is different from hide/show because the configured keyset is still active
     * and HTML-Layer could be displayed on the screen.
	 * @param on Switch foll screen on or off
	 */
	setFullScreen : function(on) {
		try {
			if (on) {
				this.hide();
				if(!this.isFullScreen()) {
					this.broadcast.className = [this.broadcast, this.fullscreenClass].join(' ').replace(/^\s*|\s*$/g, '');
                }
				this.broadcast.setFullScreen(true);
			}
			else {
				if(this.isFullScreen()) {
					var curClasses = this.broadcast.className;
					var re = new RegExp('(?:^|\\s+)' + this.fullscreenClass + '(?:\\s+|$)', 'g');
					this.broadcast.className = curClasses.replace(re, ' ').replace(/^\s*|\s*$/g, '');
				}
				this.broadcast.setFullScreen(false);
				this.show();
			}
		} catch(err){
			this.log('setFullScreen: ' + err.message);
		}
	},

	/**
     * Returns a timestamp string
     */
	timestamp: function () {
        return (new Date()).toTimeString().substring(0, 8);
    },

    /**
     * Nuber of lines in debug window
     */
    debugLines: 0,

    /**
     * Time when debug window will hide
     */
    debugTimeout: 0,

	/**
	 * Log into a div layer for STBs/TV sets
     * @param message The log message
	 */
	log: function(message) {
		if(this.debug) {
            if(this.console && this.console.log) {
                this.console.log(message);
            }
			// Show debug layer for 10 seconds
			var hideDebug, debug = document.getElementById('debug');
			if(this.debugLayerDuration > 0) {
                if(this.debugTimeout === 0) {

                    /**
                     * Hides debug window if now < this.debugTimeout
                     */
                    hideDebug = function() {
                        var now = (new Date()).getTime();
                        if(HbbTV.debugTimeout > now + 100) {
                            window.setTimeout(hideDebug, HbbTV.debugTimeout - now);
                        } else {
                            debug.style.display = 'none';
                            HbbTV.debugTimeout = 0;
                        }
                    };

                    this.debugTimeout = (new Date()).getTime() + this.debugLayerDuration;
                    debug.style.display = 'block';
                    hideDebug();
                }
			} else {
                return;
			}
            // Remove log lines if necessary
            if(this.debugLines >= this.maxDebugLines) {
                while(this.debugLines > this.minDebugLines) {
                    debug.removeChild(debug.firstChild.nextSibling);
                    this.debugLines--;
                }
            }
			// Append a log line
            var tstamp = this.timestamp();
			var content = document.createTextNode(tstamp + ' - ' + message);
			var line = document.createElement('p');
			line.appendChild(content);
			debug.appendChild(line);
            this.debugLines++;
		}
	},

    remoteDebug: function() {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        // Alternative debugging tools
        // * Console-IO: http://hbbtv-origin.prosieben.de:8082/console.io.js
        // * Weinre:     http://hbbtv-origin.prosieben.de:8080/target/target-script-min.js#anonymous
        // * JSConsole:  http://hbbtv-origin.prosieben.de:8080/remote.js?xxx
        var src = "http://hbbtv-origin.prosieben.de:8080/remote.js?xxx";
        script.setAttribute('src', src);
        document.body.appendChild(script);
    }

};
