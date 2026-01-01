# BlockAds PAC File

A comprehensive Proxy Auto-Configuration (PAC) file designed to block advertisements, tracking scripts, and malicious XSS patterns at the browser level.

## Overview

This PAC file provides network-level ad-blocking by routing unwanted traffic through a blackhole proxy, effectively preventing ads, trackers, and potentially malicious content from loading in your browser. Unlike browser extensions, PAC files operate at the network configuration level and work across all applications that respect system proxy settings.

## Features

- **Comprehensive Ad Blocking**: Blocks ads using multiple detection methods including domain patterns, URL patterns, and explicit blacklists
- **XSS Protection**: Blocks URLs containing "xss" patterns for enhanced security
- **Tracker Blocking**: Prevents analytics, metrics, and tracking beacons from major platforms
- **Whitelist Support**: Maintains a list of trusted domains that bypass all filters
- **Flexible Configuration**: Easy on/off toggle without editing the file
- **Debug Mode**: Built-in debugging for troubleshooting blocked/allowed requests
- **Local Network Bypass**: Automatically allows traffic to local/private networks

### Detection Methods

The PAC file uses multiple regex patterns to identify and block:

1. **Ad Domain Patterns**: Matches common advertising-related subdomains (ads, adv, banners, tracking, etc.)
2. **URL Path Patterns**: Detects ad-related paths like `/adcontent`, `/bannerad`, `/tracking/track`
3. **Ad Subdomains**: Blocks common ad-serving subdomains (ad1, banner2, clicks, etc.)
4. **Web Bugs**: Filters tracking pixels and Flash-based advertisements
5. **Explicit Blacklist**: Blocks known ad networks and tracking services

## Installation

### Method 1: Browser Configuration

#### Chrome/Chromium
1. Go to `Settings` → `System` → `Open your computer's proxy settings`
2. In the network settings, find `Automatic proxy configuration`
3. Set the PAC file URL or local file path
4. Save and restart your browser

#### Firefox
1. Go to `Settings` → `General` → `Network Settings`
2. Select `Automatic proxy configuration URL`
3. Enter the file path: `file:///path/to/BlockAds.pac`
4. Click OK

#### Safari (macOS)
1. Go to `System Preferences` → `Network`
2. Select your network connection → `Advanced`
3. Go to the `Proxies` tab
4. Check `Automatic Proxy Configuration`
5. Enter the file path and click OK

### Method 2: System-Wide Configuration

#### Windows
1. Open `Settings` → `Network & Internet` → `Proxy`
2. Under `Automatic proxy setup`, toggle on `Use setup script`
3. Enter the file path: `file:///C:/path/to/BlockAds.pac`

#### macOS
1. `System Preferences` → `Network` → `Advanced` → `Proxies`
2. Check `Automatic Proxy Configuration`
3. Enter file path: `file:///Users/yourname/path/to/BlockAds.pac`

#### Linux
Varies by distribution and desktop environment. Most browsers allow PAC configuration in their network settings.

## Configuration

### Enabling/Disabling Ad-Blocking

You can toggle ad-blocking without editing the file:

- **Enable**: Navigate to `http://antiad.on` in your browser
- **Disable**: Navigate to `http://antiad.off` in your browser

### Debug Mode

To enable debugging output, edit the PAC file and change:

```javascript
var debug = 0;  // Change to 1 to enable
```

When enabled, you'll see alerts showing which URLs are being checked and blocked.

### Configuration Variables

Located at the top of the PAC file:

```javascript
var normal = "DIRECT";              // Pass-through for allowed traffic
var blackhole = "PROXY 127.0.0.1:3421"; // Blackhole for blocked traffic
var isEnabled = 1;                  // 1 = enabled, 0 = disabled
var debug = 0;                      // 1 = show alerts, 0 = silent
```

## Customization

### Adding to Whitelist

To allow a domain that's being blocked, add it to the `whitelist` array:

```javascript
var whitelist = [
    "twitter.com",
    "yourdomain.com",  // Add your domain here
    // ... other domains
];
```

### Adding to Blacklist

To block additional domains, add them to the `blacklist` array:

```javascript
var blacklist = [
    "adtago.s3.amazonaws.com",
    "unwanted-domain.com",  // Add blocked domain here
    // ... other domains
];
```

### Pre-configured Whitelist

The following domains are whitelisted by default:
- Social: Twitter/X, Discord
- Tools: Perplexity AI, Tenor
- Commerce: Apple, Citibank, eBay, Yahoo, MediaFire, AliExpress

### Pre-configured Blacklist

Blocks major ad networks including:
- Google (Analytics, AdSense, DoubleClick)
- Amazon Advertising
- Yahoo Ads
- Facebook/Meta Ads
- YouTube Ads
- Twitter/LinkedIn/Reddit Ads
- Analytics platforms (Hotjar, Mouseflow, Bugsnag, Sentry)
- Ad networks (Taboola, Outbrain, Propeller, AdSterra)

## How It Works

When your browser requests a URL:

1. **Whitelist Check**: If the domain is whitelisted, allow immediately
2. **Local Network Check**: Allow traffic to local/private networks
3. **Pattern Matching**: Check against regex patterns for ads and tracking
4. **Blacklist Check**: Block if domain is explicitly blacklisted
5. **Default Action**: Allow all other traffic

Blocked traffic is routed to `127.0.0.1:3421` (a non-existent local proxy), effectively preventing the request from completing.

## Performance Considerations

- **Lightweight**: Runs in browser's JavaScript engine with minimal overhead
- **No External Dependencies**: Works entirely offline
- **Efficient Matching**: Uses optimized regex patterns for fast evaluation
- **No Privacy Concerns**: All filtering happens locally on your machine

## Troubleshooting

### Site Not Loading Correctly

1. Enable debug mode to see what's being blocked
2. Check if a required domain is being blocked
3. Add the domain to the whitelist
4. Temporarily disable with `http://antiad.off`

### PAC File Not Working

1. Verify the file path is correct in your proxy settings
2. Check that the file is accessible (not in a protected directory)
3. Restart your browser after configuration changes
4. Some browsers cache PAC files—try clearing cache or using a new profile

### Too Aggressive Blocking

Some sites may break if they rely on ad domains for functionality. Add problematic domains to the whitelist or adjust the regex patterns to be less aggressive.

## Contributing

Contributions are welcome! To suggest improvements:

1. Test your changes thoroughly
2. Document new features or pattern additions
3. Ensure backward compatibility
4. Submit detailed descriptions of what your changes block/allow

## License

This PAC file is provided as-is for personal and educational use. Modify and distribute freely.

## Author

**Gorstak**

Modified to include XSS pattern blocking and updated blacklist.

## Disclaimer

This PAC file is designed to block advertisements and tracking. Some websites may not function correctly with aggressive ad-blocking. Users are responsible for maintaining their own whitelist for sites they trust and need to access fully.

---

**Last Updated**: 2026

**Version**: 1.0
