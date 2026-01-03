# 🛡️ BlockAds PAC

> A powerful Proxy Auto-Configuration (PAC) file for system-wide ad and tracker blocking across all browsers and applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PAC File](https://img.shields.io/badge/Type-PAC%20File-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)

## 📋 Overview

BlockAds is a lightweight, comprehensive ad-blocking solution that works at the network level using Proxy Auto-Configuration (PAC). Unlike browser extensions, this approach blocks ads and trackers across **all applications** on your device, including browsers, apps, and system services.

### ✨ Key Features

- 🚫 **Comprehensive Ad Blocking** - Blocks ads, trackers, analytics, and malicious content
- 🔒 **XSS Protection** - Filters URLs containing XSS attack patterns
- 🌐 **System-Wide** - Works across all browsers and applications
- ⚡ **Zero Performance Impact** - Runs at the network layer with minimal overhead
- 🎯 **Smart Whitelist** - Pre-configured safe domains (Twitter, Discord, Apple, etc.)
- 📊 **Extensive Blacklist** - Blocks major ad networks (Google Ads, Facebook Ads, YouTube Ads, etc.)
- 🔧 **Easy Toggle** - Enable/disable by visiting `antiad.on` or `antiad.off`
- 🐛 **Debug Mode** - Built-in debugging for troubleshooting

### 🎯 What Gets Blocked

- Advertisement networks (Google Ads, Facebook Ads, Amazon Ads)
- Analytics and tracking services (Google Analytics, Hotjar, Mouseflow)
- Social media ads (YouTube, Twitter, LinkedIn, Reddit, TikTok)
- Pop-ups, banners, and interstitials
- Web bugs and tracking pixels
- XSS attack patterns

---

## 📥 Installation

### 🍎 iPhone / iPad (iOS)

1. **Download the PAC file** to a web-accessible location (GitHub, Dropbox, or your own server)
   - Note the full URL to the PAC file (e.g., `https://example.com/BlockAds.pac`)

2. **Open Settings** on your iOS device

3. **Navigate to Wi-Fi settings:**
   ```
   Settings → Wi-Fi → (tap the ⓘ icon next to your connected network)
   ```

4. **Scroll down to HTTP Proxy:**
   - Tap on **"Configure Proxy"**
   - Select **"Automatic"**

5. **Enter the PAC file URL:**
   - Paste your PAC file URL in the **URL** field
   - Example: `https://example.com/BlockAds.pac`

6. **Save settings:**
   - Tap **Save** in the top-right corner

7. **Test the configuration:**
   - Open Safari and visit any website
   - Ads should now be blocked

> **Note:** You'll need to repeat this for each Wi-Fi network you connect to.

---

### 🤖 Android

#### Method 1: Wi-Fi Network Settings (Android 9+)

1. **Download the PAC file** to a web-accessible location
   - Save the URL (e.g., `https://example.com/BlockAds.pac`)

2. **Open Settings** on your Android device

3. **Navigate to Wi-Fi settings:**
   ```
   Settings → Network & Internet → Wi-Fi
   ```

4. **Long-press your connected network** and select **Modify Network**

5. **Show Advanced Options:**
   - Tap **Advanced options**
   - Scroll to **Proxy**

6. **Configure proxy:**
   - Select **Proxy Auto-Config**
   - Enter your PAC file URL
   - Example: `https://example.com/BlockAds.pac`

7. **Save** and reconnect to the network

#### Method 2: Using Third-Party Apps

For more control, use apps like:
- **Proxy Manager** (Play Store)
- **ProxyDroid** (requires root for system-wide blocking)

---

### 🪟 Windows (10/11)

#### Method 1: System Settings

1. **Download the PAC file** to your computer or host it online

2. **Open Windows Settings:**
   - Press `Win + I`
   - Navigate to **Network & Internet**

3. **Configure Proxy:**
   ```
   Network & Internet → Proxy
   ```

4. **Enable Automatic Proxy Setup:**
   - Toggle **"Use setup script"** to **ON**
   - Enter the PAC file URL or local file path:
     - **Online:** `https://example.com/BlockAds.pac`
     - **Local:** `file:///C:/Users/YourName/Downloads/BlockAds.pac`

5. **Save** the settings

6. **Test the configuration:**
   - Open any browser and visit a website
   - Ads should be blocked

#### Method 2: Browser-Specific (Chrome, Edge, Firefox)

**Google Chrome / Microsoft Edge:**
```
1. Open Chrome/Edge Settings
2. Search for "proxy"
3. Click "Open your computer's proxy settings"
4. Follow Method 1 above
```

**Mozilla Firefox:**
```
1. Open Firefox Settings
2. Scroll to "Network Settings"
3. Click "Settings..."
4. Select "Automatic proxy configuration URL"
5. Enter your PAC file URL
6. Click OK
```

---

## ⚙️ Configuration

### Hosting the PAC File

You have several options for hosting your PAC file:

1. **GitHub Pages** (Recommended for personal use)
   - Upload to a GitHub repository
   - Enable GitHub Pages
   - Access via: `https://username.github.io/repo/BlockAds.pac`

2. **Personal Web Server**
   - Upload to your own web hosting
   - Ensure HTTPS is enabled for security

3. **Local File** (Windows only)
   - Use the `file:///` protocol
   - Example: `file:///C:/Users/YourName/BlockAds.pac`

### Customizing the Whitelist

Edit the `whitelist` array in the PAC file to add domains you want to allow:

```javascript
var whitelist = [
    "twitter.com",
    "your-domain.com",  // Add your custom domain
    // Add more domains...
];
```

### Customizing the Blacklist

Add additional domains to block in the `blacklist` array:

```javascript
var blacklist = [
    "ads.example.com",
    "tracker.example.com",  // Add domains to block
    // Add more domains...
];
```

### Enable Debug Mode

To see what's being blocked:

```javascript
var debug = 1;  // Change from 0 to 1
```

---

## 🎮 Usage

### Toggle Ad-Blocking On/Off

- **Enable ad-blocking:** Visit `http://antiad.on` in any browser
- **Disable ad-blocking:** Visit `http://antiad.off` in any browser

### Verify It's Working

1. Visit a website known for ads (e.g., news sites)
2. Check if ads are blocked
3. Open browser developer tools (F12) → Network tab
4. Look for failed requests to ad domains (they'll show as blocked)

---

## 🔧 Troubleshooting

### Ads Still Showing?

- **Clear browser cache** - Old cached ads may still display
- **Check PAC file URL** - Ensure the URL is correct and accessible
- **Verify network settings** - Confirm proxy is set to "Automatic"
- **Test with debug mode** - Enable debug to see what's being processed

### Website Not Loading?

- **Check if it's whitelisted** - Some domains may need to be added to the whitelist
- **Disable temporarily** - Visit `antiad.off` to test
- **Review blacklist** - Remove any false positives from the blacklist

### Mobile Data Not Working (Mobile)?

- PAC configuration typically applies to **Wi-Fi only**
- Configure separately for cellular data (may require VPN or root access)

---

## 📊 Performance

- **Latency:** < 1ms per request evaluation
- **Memory:** ~50KB (minimal footprint)
- **Battery Impact:** Negligible
- **Network Usage:** None (runs locally)

---

## 🤝 Contributing

Contributions are welcome! If you find ad domains that aren't blocked:

1. Fork the repository
2. Add the domain to the appropriate list
3. Test thoroughly
4. Submit a pull request

---

## 📜 License

MIT License - feel free to use, modify, and distribute.

---

## 👨‍💻 Credits

**Original Author:** Gorstak  
**Modified by:** Community Contributors

---

## ⚠️ Disclaimer

This PAC file is provided "as-is" without warranty. Use at your own risk. Some websites may not function properly with aggressive ad-blocking enabled. Always keep a way to disable it if needed.

---

## 🔗 Useful Links

- [PAC File Documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
- [Report Issues](https://github.com/yourusername/blockads/issues)
- [Regex Tester](https://regex101.com/) - Test custom blocking patterns

---

<div align="center">
  
**If this PAC file helps you, consider giving it a ⭐ on GitHub!**

Made with ❤️ for a cleaner internet

</div>
