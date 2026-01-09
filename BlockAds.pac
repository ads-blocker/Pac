// Ads-Blocking Proxy Auto-Configuration (PAC) File
// Author: Gorstak
// Modified to block URLs containing "xss" and updated blacklist
// YouTube Ad Blocking: Blocks ad requests but may not instantly skip ads
// (PAC files can't inject JavaScript - YouTube will timeout and skip after blocking)

// Configuration Variables
var normal = "DIRECT";              // Default pass-through for non-blocked traffic
var blackhole = "PROXY 127.0.0.1:0"; // Blackhole proxy for blocked traffic (non-existent proxy)
var isEnabled = 1;                  // Toggle for enabling/disabling ad-blocking (1 = enabled)
var debug = 0;                      // Debugging flag (1 = enabled)

// Whitelist: Domains explicitly allowed, bypassing all filters
var whitelist = [
    "twitter.com",
    "x.com",
    "perplexity.ai",
    "mediafire.com",
    "apple.com",
    "schooner.com",
    "citibank.com",
    "ebay.com",
    "yahoo.com",
    "discord.com",
    "click.discord.com",
    "discordapp.com",
    "cdn.discordapp.com",
    "cdn.discord.app",
    "discord.gg",
    "discord.media",
    "discordapp.net",
    "media.discordapp.net",
    "discordstatus.com",
    "dis.gd",
    "discordcdn.com",
    "aliexpress.com",
    "tenor.com",
    "media.tenor.com"
];

// Comprehensive Regular Expression for Ad/Tracking Domains and Subdomains
var adDomainRegex = /^(?:.*[-_.])?(ads?|adv(ert(s|ising)?)?|banners?|track(er|ing|s)?|beacons?|doubleclick|adservice|adnxs|adtech|googleads|gads|adwords|partner|sponsor(ed)?|click(s|bank|tale|through)?|pop(up|under)s?|promo(tion)?|market(ing|er)?|affiliates?|metrics?|stat(s|counter|istics)?|analytics?|pixel(s)?|campaign|traff(ic|iq)|monetize|syndicat(e|ion)|revenue|yield|impress(ion)?s?|conver(sion|t)?|audience|target(ing)?|behavior|profil(e|ing)|telemetry|survey|poll|outbrain|taboola|quantcast|scorecard|omniture|comscore|krux|bluekai|exelate|adform|adroll|rubicon|vungle|inmobi|flurry|mixpanel|heap|amplitude|optimizely|bizible|pardot|hubspot|marketo|eloqua|salesforce|media(math|net)|criteo|appnexus|turn|adbrite|admob|adsonar|adscale|zergnet|revcontent|mgid|nativeads|contentad|displayads|bannerflow|adblade|adcolony|chartbeat|newrelic|pingdom|gauges|kissmetrics|webtrends|tradedesk|bidder|auction|rtb|programmatic|splash|interstitial|overlay)\./i;

// Regular Expression for Ad-Related URL Patterns and XSS Blocking
var adUrlRegex = /(?:\/(?:adcontent|img\/adv|web\-ad|iframead|contentad|ad\/image|video\-ad|stats\/event|xtclicks|adscript|bannerad|googlead|adhandler|adimages|embed\-log|adconfig|tracking\/track|tracker\/track|adrequest|nativead|adman|advertisement|adframe|adcontrol|adoverlay|adserver|adsense|google\-ads|ad\-banner|banner\-ad|campaign\/advertiser|adplacement|adblockdetect|advertising|admanagement|adprovider|adrotation|adtop|adbottom|adleft|adright|admiddle|adlarge|adsmall|admicro|adunit|adcall|adlog|adcount|adserve|adsrv|adsys|adtrack|adview|adwidget|adzone|banner\/adv|google_tag|image\/ads|sidebar\-ads|footer\-ads|top\-ads|bottom\-ads|new\-ads|search\-ads|lazy\-ads|responsive\-ads|dynamic\/ads|external\/ads|mobile\-ads|house\-ads|blog\/ads|online\/ads|pc\/ads|left\-ads|right\-ads|ads\/square|ads\/text|ads\/html|ads\/js|ads\.php|ad\.js|ad\.css|\?affiliate=|\?advertiser=|\&adspace=|\&adserver=|\&adgroupid=|\&adpageurl=|\.adserve|\.ads\d|\.adspace|\.adsense|\.adserver|\.google\-ads|\.banner\-ad|\.ad\-banner|\.adplacement|\.advertising|\.admanagement|\.adprovider|\.adrotation|\.adtop|\.adbottom|\.adleft|\.adright|\.admiddle|\.adlarge|\.adsmall|\.admicro|\.adunit|\.adcall|\.adlog|\.adcount|\.adserve|\.adsrv|\.adsys|\.adtrack|\.adview|\.adwidget|\.adzone|xss))/i;

// Regular Expression for Common Ad Subdomains
var adSubdomainRegex = /^(?:adcreative(s)?|imageserv|media(mgr)?|stats|switch|track(2|er)?|view|ad(s)?\d{0,3}|banner(s)?\d{0,3}|click(s)?\d{0,3}|count(er)?\d{0,3}|servedby\d{0,3}|toolbar\d{0,3}|pageads\d{0,3}|pops\d{0,3}|promos\d{0,3})\./i;

// Regular Expression for Web Bugs and Flash Ads
var adWebBugRegex = /(?:\/(?:1|blank|b|clear|pixel|transp|spacer)\.gif|\.swf)$/i;

// Blacklist: Explicitly blocked domains
var blacklist = [
    "adtago.s3.amazonaws.com",
    "analyticsengine.s3.amazonaws.com",
    "advice-ads.s3.amazonaws.com",
    "affiliationjs.s3.amazonaws.com",
    "advertising-api-eu.amazon.com",
    "ssl.google-analytics.com",
    "fastclick.com",
    "fastclick.net",
    "media.fastclick.net",
    "cdn.fastclick.net",
    "analytics.yahoo.com",
    "global.adserver.yahoo.com",
    "ads.yap.yahoo.com",
    "appmetrica.yandex.com",
    "yandexadexchange.net",
    "analytics.mobile.yandex.net",
    "extmaps-api.yandex.net",
    "adsdk.yandex.ru",
    "appmetrica.yandex.com",
    "hotjar.com",
    "static.hotjar.com",
    "api-hotjar.com",
    "jotjar-analytics.com",
    "mouseflow.com",
    "freshmarketer.com",
    "luckyorange.com",
    "cdn.luckyorange.com",
    "w1.luckyorange.com",
    "upload.luckyorange.com",
    "cs.luckyorange.com",
    "settings.luckyorange.com",
    "stats.wp.com",
    "app.bugsnag.com",
    "api.bugsnag.com",
    "notify.bugsnag.com",
    "sessions.bugsnag.com",
    "browser.sentry-cdn.com",
    "app.getsentry.com",
    "amazonaws.com",
    "amazonaax.com",
    "amazonclix.com",
    "assoc-amazon.com",
    "ads.google.com",
    "pagead2.googlesyndication.com",
    "pagead2.googleadservices.com",
    "amazon-adsystem.com",
    "googleadservices.com",
    "doubleclick.net",
    "ad.doubleclick.net",
    "static.doubleclick.net",
    "m.doubleclick.net",
    "mediavisor.doubleclick.net",
    "googleads.g.doubleclick.net",
    "adclick.g.doubleclick.net",
    "carbonads.net",
    "advertising.amazon.com",
    "advertising.amazon.ca",
    "google-analytics.com",
    "doubleclick.net",
    "doubleclick.com",
    "doubleclick.de",
    "partner.googleadservices.com",
    "googlesyndication.com",
    "google-analytics.com",
    "zedo.com",
    "amazon.ae",
    "amazon.cn",
    "advertising.amazon.co.jp",
    "amazon.co.uk",
    "advertising.amazon.com.au",
    "advertising.amazon.com.mx",
    "advertising.amazon.de",
    "advertising.amazon.es",
    "advertising.amazon.fr",
    "advertising.amazon.in",
    "advertising.amazon.it",
    "advertising.amazon.sa",
    "bingads.microsoft.com",
    "adcash.com",
    "taboola.com",
    "outbrain.com",
    "smartyads.com",
    "popads.net",
    "adpushup.com",
    "trafficforce.com",
    "adsterra.com",
    "creative.ak.fbcdn.net",
    "adbrite.com",
    "exponential.com",
    "quantserve.com",
    "scorecardresearch.com",
    "propellerads.com",
    "admedia.net",
    "admedia.com",
    "bidvertiser.com",
    "undertone.com",
    "web.adblade.com",
    "revenuehits.com",
    "infolinks.com",
    "vibrantmedia.com",
    "ads.yahoosmallbusiness.com",
    "ads.yahoo.com",
    "hilltopads.net",
    "clickadu.com",
    "citysex.com",
    "ad-maven.com",
    "propelmedia.com",
    "enginemediaexchange.com",
    "advertisers.adversense.com",
    "a.adtng.com",
    "ads.facebook.com",
    "an.facebook.com",
    "analytics.facebook.com",
    "pixel.facebook.com",
    "ads.youtube.com",
    "youtube.cleverads.vn",
    "ads-twitter.com",
    "ads-api.twitter.com",
    "advertising.twitter.com",
    "ads.linkedin.com",
    "analytics.pointdrive.linkedin.com",
    "ads.reddit.com",
    "d.reddit.com",
    "rereddit.com",
    "events.redditmedia.com",
    "analytics.tiktok.com",
    "ads.tiktok.com",
    "analytics-sg.tiktok.com",
    "ads-sg.tiktok.com"
];

// Main Proxy Auto-Configuration Function
function FindProxyForURL(url, host) {
    // Convert inputs to lowercase for case-insensitive matching
    host = host.toLowerCase();
    url = url.toLowerCase();

    // Debugging output (if enabled)
    if (debug) {
        alert("Checking...\nURL: " + url + "\nHost: " + host);
    }

    // Toggle ad-blocking on/off via special URLs
    if (host === "antiad.on") {
        isEnabled = 1;
        if (debug) alert("Ad-blocking enabled");
        return blackhole;
    } else if (host === "antiad.off") {
        isEnabled = 0;
        if (debug) alert("Ad-blocking disabled");
        return blackhole;
    }

    // If ad-blocking is disabled, pass all traffic
    if (!isEnabled) {
        return normal;
    }

    // Local network bypass (e.g., LAN, loopback)
    if (isPlainHostName(host) ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "172.16.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "127.*") ||
        dnsDomainIs(host, ".local")) {
        return normal;
    }

    // Whitelist check: Allow explicitly whitelisted domains
    for (var i = 0; i < whitelist.length; i++) {
        if (shExpMatch(host, whitelist[i])) {
            if (debug) alert("Whitelisted: " + host);
            return normal;
        }
    }

    // ===== YouTube Ad Blocking Logic =====
    // Block YouTube ad-serving subdomains immediately (these are always ads)
    // MUST block s.youtube.com - it's a major ad-serving domain
    if (shExpMatch(host, "*googlesyndication.com") ||
        shExpMatch(host, "*doubleclick.net") ||
        shExpMatch(host, "*googleadservices.com") ||
        shExpMatch(host, "*adservice.google.*") ||
        shExpMatch(host, "*ads.youtube.com") ||
        host === "s.youtube.com" ||
        shExpMatch(host, "s.*.youtube.com") ||
        shExpMatch(host, "*.ad.*.googlevideo.com") ||
        shExpMatch(host, "*.ads.*.googlevideo.com")) {
        
        // These domains are exclusively for ads - block everything
        if (debug) alert("Blocked YouTube ad domain: " + host);
        return blackhole;
    }
    
    
    // Check googlevideo.com - need to differentiate between ads and regular videos
    // IMPORTANT: Allow regular videos to load, only block confirmed ads
    if (shExpMatch(host, "*googlevideo.com")) {
        var isVideoPlayback = url.indexOf("/videoplayback") !== -1;
        var hasAdParams = false;
        var isAdDomain = false;
        
        // Check hostname for ad indicators - must be explicit ad subdomains
        // Also check for common ad-serving subdomains
        if (host.indexOf(".ad.") !== -1 || 
            host.indexOf(".ads.") !== -1 || 
            host.indexOf("ad-") !== -1 ||
            host.indexOf("ads-") !== -1 ||
            shExpMatch(host, "*.ad.googlevideo.com") ||
            shExpMatch(host, "*.ads.googlevideo.com") ||
            shExpMatch(host, "rr*.googlevideo.com") && url.indexOf("videoplayback") !== -1 && (url.indexOf("ctier") !== -1 || url.indexOf("oad") !== -1)) {
            isAdDomain = true;
        }
        
        if (isVideoPlayback) {
            // For video playback URLs, check for ad-related parameters more thoroughly
            // Check for both query params and in URL path - EXPANDED LIST
            var adParams = [
                "&oad=", "oad=", "?oad=",
                "&ctier=", "ctier=", "?ctier=",
                "&of=", "of=", "?of=",
                "&adformat=", "adformat=", "?adformat=",
                "&ad_type=", "ad_type=", "?ad_type=",
                "&ad_break=", "ad_break=", "?ad_break=",
                "&ad=", "&adurl=", "&adid=", "?ad=",
                "/ad_", "?ad=",
                "&oadid=", "oadid=",
                "&adpreroll=", "adpreroll=",
                "&admidroll=", "admidroll=",
                "&adpostroll=", "adpostroll=",
                "&ad_slot=", "ad_slot=",
                "&ad_event=", "ad_event=",
                "&adsid=", "adsid=",
                "&adflag=", "adflag=",
                "&adlen=", "adlen=",
                "&adsdata=", "adsdata=",
                "&adparams=", "adparams=",
                "&adsapi=", "adsapi=",
                "&adserver=", "adserver=",
                "&adurl=", "adurl=",
                "&adid=", "adid=",
                "&adver=", "adver=",
                "&adtype=", "adtype=",
                "&adsys=", "adsys="
            ];
            for (var yt = 0; yt < adParams.length; yt++) {
                if (url.indexOf(adParams[yt]) !== -1) {
                    hasAdParams = true;
                    break;
                }
            }
            
            // Check for patterns that indicate ads even without explicit params
            // Some ads use encoded parameters or special patterns
            if (!hasAdParams) {
                // Check URL length - ad URLs are often longer due to ad parameters
                // But be careful - some regular videos also have long URLs
                // Check for multiple suspicious patterns together
                var hasSuspiciousPattern = false;
                
                // Check for multiple "&" separators which might indicate ad params
                var ampCount = 0;
                for (var i = 0; i < url.length; i++) {
                    if (url.charAt(i) === "&") {
                        ampCount++;
                    }
                }
                
                // Check for specific patterns in hostname that might indicate ads
                // r*.googlevideo.com is common for ads when combined with certain patterns
                if (host.indexOf("r") === 0 && host.indexOf(".googlevideo.com") !== -1) {
                    // If URL is very long and has many parameters, might be an ad
                    // But also check if it has standard video parameters like itag, mime, etc.
                    var hasVideoParams = url.indexOf("itag=") !== -1 || url.indexOf("mime=") !== -1 || url.indexOf("expire=") !== -1;
                    if (ampCount > 15 && !hasVideoParams) {
                        // Suspicious - many params but no standard video params
                        hasSuspiciousPattern = true;
                    }
                }
                
                // Don't block based on suspicious patterns alone - too risky
                // Only use this as additional confirmation
            }
            
            // Only block if it's confirmed to be an ad (ad domain OR has ad params)
            if (isAdDomain || hasAdParams) {
                if (debug) alert("Blocked YouTube ad video: " + url);
                return blackhole;
            }
            // Regular video playback - ALLOW through
            return normal;
        } else {
            // Non-videoplayback URLs on googlevideo.com
            // Allow most requests, only block if explicitly ad-related
            if (isAdDomain) {
                // Confirmed ad subdomain - block
                if (debug) alert("Blocked YouTube ad subdomain: " + host);
                return blackhole;
            }
            // Allow other googlevideo.com requests (might be video metadata, thumbnails, etc.)
            // Don't block these as they're needed for video loading
            return normal;
        }
    }
    
    // YouTube Player API - Block only when requesting ad data
    // Be careful not to block regular player API calls needed for video playback
    if (url.indexOf("/youtubei/v1/player") !== -1 || url.indexOf("/innertube") !== -1) {
        // First, check if URL explicitly contains ad-related parameters in the path
        var adPlayerPaths = ["/ad_break", "/atr", "/advertising", "/ad-break", "ad_break", "ad_break/"];
        var isAdPath = false;
        for (var ap = 0; ap < adPlayerPaths.length; ap++) {
            if (url.indexOf(adPlayerPaths[ap]) !== -1) {
                isAdPath = true;
                break;
            }
        }
        
        // Block if URL contains ad-related parameters (in query string or path)
        // EXPANDED LIST to catch more ad patterns
        var adPlayerParams = [
            "adSignalsInfo", "adSlot", "adBreaks", "adTagParameters", "adFormat", 
            "adBreak", "adSlots", "enableAds", "adsConfig", "adSystem", "adClient",
            "adSignals", "adParams", "adRequest", "adResponse", "adData",
            "adBlock", "adBlocker", "adDetect", "adSkip", "adTime",
            "adDuration", "adStart", "adEnd", "adPosition", "adType",
            "adContent", "adCreative", "adCampaign", "adId", "adUrl"
        ];
        var hasAdParams = false;
        for (var p = 0; p < adPlayerParams.length; p++) {
            if (url.indexOf(adPlayerParams[p]) !== -1) {
                hasAdParams = true;
                break;
            }
        }
        
        if (isAdPath || hasAdParams) {
            if (debug) alert("Blocked YouTube player API with ad params: " + url);
            return blackhole;
        }
        
        // Block player API on confirmed ad-related subdomains only
        // CRITICAL: s.youtube.com is always ads - block all requests
        if (host === "s.youtube.com" || 
            host.indexOf("s.youtube.com") !== -1 ||
            host.indexOf(".ad.") !== -1 || 
            host.indexOf(".ads.") !== -1 ||
            host.indexOf("ads.youtube.com") !== -1) {
            if (debug) alert("Blocked YouTube player API on ad domain: " + host);
            return blackhole;
        }
        
        // For youtubei.googleapis.com and www.youtube.com, be more aggressive
        // Block player API calls that might be ad-related (even if we can't see POST body)
        // We can't read POST bodies, so we need to block more conservatively
        // But if the URL shows any ad indicators, block it
        if (host.indexOf("youtubei.googleapis.com") !== -1 || host.indexOf("youtube.com") !== -1) {
            // Block if the path explicitly indicates ads
            if (isAdPath || hasAdParams || url.indexOf("/advertising") !== -1) {
                if (debug) alert("Blocked YouTube API ad endpoint: " + url);
                return blackhole;
            }
            // For player API on www.youtube.com, check if it's likely an ad request
            // (This is tricky because we can't see POST body, but we can check patterns)
            if (host.indexOf("www.youtube.com") !== -1 && url.indexOf("/youtubei/v1/player") !== -1) {
                // Allow it through - regular player API calls are needed
                // The blocking of ad responses will happen via other checks
                return normal;
            }
            // Allow regular player API calls through
            return normal;
        }
        
        // Allow other player API calls (needed for regular video playback)
        return normal;
    }
    
    // YouTube ad API endpoints and tracking paths - Block aggressively
    // These endpoints are always or often ad-related
    // EXPANDED to catch more ad patterns
    if (shExpMatch(url, "*youtube.com/api/stats*") ||
        shExpMatch(url, "*youtube.com/pagead*") ||
        shExpMatch(url, "*youtube.com/ptracking*") ||
        shExpMatch(url, "*youtube.com/get_video_info*") ||
        shExpMatch(url, "*youtube.com/get_video_ads*") ||
        shExpMatch(url, "*youtube.com/advertiser*") ||
        shExpMatch(url, "*youtube.com/ads*") ||
        shExpMatch(url, "*youtube.com/gen_204*") ||
        shExpMatch(url, "*youtube.com/error_204*") ||
        shExpMatch(url, "*youtube.com/service_ajax*") ||
        shExpMatch(url, "*youtube.com/youtubei/v1/player/ad_break*") ||
        shExpMatch(url, "*youtube.com/youtubei/v1/player/atr*") ||
        shExpMatch(url, "*youtube.com/youtubei/v1/log_event*") ||
        shExpMatch(url, "*youtube.com/youtubei/v1/atr*") ||
        shExpMatch(url, "*youtubei.googleapis.com/youtubei/v1/player/ad_break*") ||
        shExpMatch(url, "*youtubei.googleapis.com/youtubei/v1/player/atr*") ||
        shExpMatch(url, "*youtube.com/youtubei/v1/advertising*") ||
        shExpMatch(url, "*youtubei.googleapis.com/youtubei/v1/advertising*") ||
        (host.indexOf("youtube.com") !== -1 && url.indexOf("/innertube") !== -1 && (url.indexOf("ad") !== -1 || url.indexOf("break") !== -1 || url.indexOf("atr") !== -1)) ||
        (host.indexOf("youtubei.googleapis.com") !== -1 && url.indexOf("/innertube") !== -1 && (url.indexOf("ad") !== -1 || url.indexOf("break") !== -1 || url.indexOf("atr") !== -1)) ||
        (url.indexOf("youtube.com/watch?") !== -1 && (url.indexOf("&adformat=") !== -1 || url.indexOf("?adformat=") !== -1 || url.indexOf("&oad=") !== -1 || url.indexOf("?oad=") !== -1)) ||
        (url.indexOf("youtube.com/embed/") !== -1 && (url.indexOf("&adformat=") !== -1 || url.indexOf("?adformat=") !== -1 || url.indexOf("&oad=") !== -1 || url.indexOf("?oad=") !== -1)) ||
        (url.indexOf("youtube.com/live_chat") !== -1 && (url.indexOf("&adformat=") !== -1 || url.indexOf("?adformat=") !== -1 || url.indexOf("&oad=") !== -1 || url.indexOf("?oad=") !== -1)) ||
        (host.indexOf("youtube.com") !== -1 && url.indexOf("/pagead/") !== -1) ||
        (host.indexOf("youtube.com") !== -1 && url.indexOf("/ad_") !== -1) ||
        (host.indexOf("youtube.com") !== -1 && url.indexOf("/ads") !== -1 && url.indexOf("/adsense") === -1) ||
        (host.indexOf("youtube.com") !== -1 && (url.indexOf("/advertise") !== -1 || url.indexOf("/advertising") !== -1)) ||
        (host.indexOf("youtube.com") !== -1 && url.indexOf("/adserver") !== -1) ||
        (host.indexOf("youtube.com") !== -1 && url.indexOf("/adbreak") !== -1) ||
        (host.indexOf("youtube.com") !== -1 && url.indexOf("/adrequest") !== -1) ||
        (host.indexOf("youtube.com") !== -1 && url.indexOf("/adresponse") !== -1) ||
        (host.indexOf("youtube.com") !== -1 && url.indexOf("/adtag") !== -1) ||
        (host.indexOf("youtube.com") !== -1 && url.indexOf("/adinfo") !== -1)) {
        
        if (debug) alert("Blocked YouTube ad endpoint: " + url);
        return blackhole;
    }
    
    // Block YouTube tracking/analytics endpoints that serve ads
    // These are critical - block all tracking endpoints that might serve ads
    if (shExpMatch(host, "*video-stats.l.google.com") ||
        shExpMatch(host, "*s.youtube.com") ||
        host === "s.youtube.com" ||
        (host.indexOf("youtube.com") !== -1 && (url.indexOf("/ptracking") !== -1 || url.indexOf("/pagead") !== -1 || url.indexOf("/gen_204") !== -1 || url.indexOf("/error_204") !== -1)) ||
        (host.indexOf("youtube.com") !== -1 && url.indexOf("/log_event") !== -1) ||
        (host.indexOf("google.com") !== -1 && url.indexOf("/pagead") !== -1) ||
        (host.indexOf("google.com") !== -1 && url.indexOf("/ptracking") !== -1)) {
        
        if (debug) alert("Blocked YouTube ad tracking: " + url);
        return blackhole;
    }
    
    // Block YouTube API endpoints on ad-related domains
    if ((host.indexOf("youtubei.googleapis.com") !== -1 || host.indexOf("googleapis.com") !== -1) &&
        (url.indexOf("/youtubei/v1/") !== -1) &&
        (url.indexOf("ad") !== -1 || url.indexOf("atr") !== -1 || url.indexOf("break") !== -1)) {
        
        if (debug) alert("Blocked YouTube API ad endpoint: " + url);
        return blackhole;
    }
    
    // YouTube ad server subdomains (only if YouTube/Google related)
    if ((shExpMatch(host, "*.ads.*") || shExpMatch(host, "*.ad.*") || shExpMatch(host, "*adserver.*") || shExpMatch(host, "*adsystem.*")) &&
        (host.indexOf("youtube") !== -1 || host.indexOf("google") !== -1 || host.indexOf("googlevideo") !== -1 || host.indexOf("doubleclick") !== -1)) {
        
        if (debug) alert("Blocked YouTube ad subdomain: " + host);
        return blackhole;
    }

    // Ad-blocking and XSS-blocking logic
    if (
        // Match ad-related domains
        adDomainRegex.test(host) ||
        // Match ad-related URL patterns or URLs containing "xss"
        adUrlRegex.test(url) ||
        // Match common ad subdomains
        adSubdomainRegex.test(host) ||
        // Match web bugs and Flash ads
        adWebBugRegex.test(url) ||
        // Match explicitly blacklisted domains
        blacklist.indexOf(host) !== -1
    ) {
        if (debug) alert("Blocked...\nURL: " + url + "\nHost: " + host);
        return blackhole;
    }

    // Default: Pass through all non-matching traffic
    if (debug) alert("Not Blocked...\nURL: " + url + "\nHost: " + host);
    return normal;
}

// Initial load notification (if debugging is enabled)
if (debug) {
    alert("Ad-blocking PAC file loaded, isEnabled = " + isEnabled);

}
