// Ads-Blocking Proxy Auto-Configuration (PAC) File
// Author: Gorstak
// Modified to block URLs containing "xss" and updated blacklist

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
    // Check YouTube ad domains - route to blackhole (non-existent proxy)
    if (shExpMatch(host, "*googlevideo.com") ||
        shExpMatch(host, "*googlesyndication.com") ||
        shExpMatch(host, "*doubleclick.net") ||
        shExpMatch(host, "*googleadservices.com") ||
        shExpMatch(host, "*adservice.google.*") ||
        shExpMatch(host, "*ads.youtube.com") ||
        shExpMatch(host, "*video-stats.l.google.com") ||
        shExpMatch(host, "s.youtube.com") ||
        shExpMatch(host, "*.ad.*.googlevideo.com") ||
        shExpMatch(host, "*.ads.*.googlevideo.com")) {
        
        // Check if this is actually a YouTube video (not an ad)
        // Regular YouTube videos from googlevideo.com should be allowed
        var isVideoPlayback = url.indexOf("/videoplayback") !== -1;
        var hasAdParams = false;
        
        if (isVideoPlayback) {
            // Check for ad-related parameters in video URLs
            var adParams = ["&oad=", "&ctier=", "&of=", "adformat", "ad_type", "ad_break", "&ad="];
            for (var yt = 0; yt < adParams.length; yt++) {
                if (url.indexOf(adParams[yt]) !== -1) {
                    hasAdParams = true;
                    break;
                }
            }
            // Block if it has ad params, otherwise allow (it's a regular video)
            if (hasAdParams) {
                if (debug) alert("Blocked YouTube ad video: " + url);
                return blackhole;
            }
        } else {
            // Not a video playback URL, block it (likely an ad request)
            if (debug) alert("Blocked YouTube ad domain: " + host);
            return blackhole;
        }
    }
    
    // YouTube ad API endpoints and tracking paths
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
        (url.indexOf("youtube.com/watch?") !== -1 && url.indexOf("&adformat=") !== -1) ||
        (url.indexOf("youtube.com/embed/") !== -1 && url.indexOf("&adformat=") !== -1) ||
        (url.indexOf("youtube.com/live_chat") !== -1 && url.indexOf("&adformat=") !== -1)) {
        
        if (debug) alert("Blocked YouTube ad endpoint: " + url);
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
