module("getPlatform()");

test("user agent detection", function() {

  var getPlatform = (function() {
    var reduce = Benchmark.reduce,
        toString = {}.toString,
        compiled = Function('reduce,toString,ua,external,mode,opera',
                   String(Benchmark.getPlatform)
                   .replace(/ua\s*=[^,]+,/,'')
                   .replace(/version\s*=[^,]+,/,'version=opera,')
                   .replace(/window\.external/g,'external')
                   .replace(/doc\.documentMode/g, 'mode') +
                   'return getPlatform()');

    return function(options) {
      // http://www.howtocreate.co.uk/operaStuff/operaObject.html
      var opera = (opera = options.opera) < 7.6 ? null : opera;
      return compiled(reduce, toString, options.ua, options.external, options.mode, opera);
    };
  }());

  var Tests = {
    'Chrome 5.0.375.99 on Windows Server 2003 / XP x64': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.99 Safari/533.4'
    },

    'Firefox 3.0\u03b1 on Mac OS X': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X Mach-O; en-US; rv:1.9a1) Gecko/20061204 Firefox/3.0a1'
    },

    'Firefox 3.0.1\u03b1 on Linux armv7l': {
      'ua': 'Mozilla/5.0 (X11; U; Linux armv7l; en-US; rv:1.9.0.1) Gecko/2009010915 Minefield/3.0.1'
    },

    'Firefox 3.6.11 on Windows XP': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.2.11) Gecko/20101012 Firefox/3.6.11 (.NET CLR 3.5.30729)'
    },

    'Firefox 3.7\u03b1 on Windows XP': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.3a5pre) Gecko/20100418 Minefield/3.7a5pre'
    },

    'Firefox 4.0\u03b2 on Android': {
      'ua': 'Mozilla/5.0 (Android; Linux armv7l; rv:2.0b6pre) Gecko/20100907 Firefox/4.0b6pre Fennec/2.0b1pre'
    },

    'Firefox Mobile 4.0.1 on Linux i686': {
      'ua': 'Mozilla/5.0 (X11; Linux i686 on x86_64; rv:2.0.1) Gecko/20100101 Firefox/4.0.1 Fennec/2.0.1'
    },

    'IE 4.0 on Windows 95': {
      'ua': 'Mozilla/4.0 (compatible; MSIE 4.0; Windows 95)'
    },

    'IE 5.5 on Windows 98': {
      'ua': 'Mozilla/4.0 (compatible;MSIE 5.5; Windows 98)'
    },

    'IE 5.05 on Windows NT': {
      'ua': 'Mozilla/4.0 (compatible; MSIE 5.05; Windows NT 4.0)'
    },

    'IE 6.0 on Windows 2000': {
      'ua': 'Mozilla/4.0 (Windows; MSIE 6.0; Windows NT 5.0)'
    },

    'IE 6.0\u03b2 on Windows ME': {
      'ua': 'Mozilla/4.0 (compatible; MSIE 6.0b; Windows 98; Win 9x 4.90)'
    },

    'IE 8.0 on Windows XP': {
      'ua': 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)'
    },

    'IE 8.0 (running as IE 7.0) on Windows XP': {
      'ua': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; Trident/4.0)',
      'mode': 7
    },

    'IE 9.0 (platform preview running as IE 5.0) on Windows 7': {
      'ua': 'Mozilla/5.0 (compatible; MSIE 5.0; Windows NT 6.1; Trident/5.0)',
      'external': null,
      'mode': 5
    },

    'IE 9.0 (running as IE 8.0) on Windows 7': {
      'ua': 'Mozilla/5.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/5.0)',
      'mode': 8
    },

    'IE 9.0 on Windows Vista': {
      'ua': 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0)'
    },

    'Konqueror 4.4 on Linux 2.6.32': {
      'ua': 'Mozilla/5.0 (compatible; Konqueror/4.4; Linux 2.6.32-22-generic; X11; en_US) KHTML/4.4.3 (like Gecko) Kubuntu'
    },

    'Opera Mobile 10.00 on Linux i686': {
      'ua': 'Opera/9.80 (Linux i686; Opera Mobi/1038; U; en) Presto/2.5.24 Version/10.00'
    },

    'Opera 11.00 on Windows XP': {
      'ua': 'Opera/9.80 (Windows NT 5.1; U; en) Presto/2.6.37 Version/11.00',
      'opera': '11.00'
    },

    'RockMelt 0.8.34.820 on Mac OS X 10.5.8': {
      'ua': 'Mozilla/5.0(Macintosh; U; Intel Mac OS X 10_5_8; en-US)AppleWebKit/534.3(KHTML,like Gecko)RockMelt/0.8.34.820 Chrome/6.0.472.63 Safari/534.3'
    },

    'Safari 1.x on Mac OS X': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X; de-de) AppleWebKit/85.7 (KHTML, like Gecko) Safari/85.5'
    },

    'Safari 2.x on Mac OS': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS; en-en) AppleWebKit/412 (KHTML, like Gecko) Safari/412'
    },

    'Safari 3.0 on iPod iOS': {
      'ua': 'Mozila/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Geckto) Version/3.0 Mobile/3A101a Safari/419.3'
    },

    'Safari 3.x on iPod iOS 2.2.1': {
      'ua': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 2_2_1 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Mobile/5H11a'
    },

    'Safari 3.x on webOS 1.2.9': {
      'ua': 'Mozilla/5.0 (webOS/Palm webOS 1.2.9; U; en-US) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/1.0 Safari/525.27.1 Pixi/1.0'
    },

    'Safari 3.1.1 on Windows Vista': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.1 Safari/525.17'
    },

    'Safari 3.1.1 on iPhone iOS 2.0.1': {
      'ua': 'Mozilla/5.0 (Mozilla/5.0 (iPhone; U; CPU iPhone OS 2_0_1 like Mac OS X; fr-fr) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/5G77 Safari/525.20'
    },

    'Safari 3.1.1 on Mac OS X 10.5.7': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; de-de) AppleWebKit/525.18 (KHTML, like Gecko) Version/3.1.1 Safari/525.20'
    },

/*

    // More soon!
    // http://www.useragentstring.com/pages/Safari/

    '': {
      'ua': ''
    },

    '': {
      'ua': ''
    },

    '': {
      'ua': ''
    },

    '': {
      'ua': ''
    },
*/

    'Safari 3.1.2 on Windows Vista': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; pl-PL) AppleWebKit/525.19 (KHTML, like Gecko) Version/3.1.2 Safari/525.21'
    },

    'Safari 3.1.2 on Mac OS X 10.5.6': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_6; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.2 Safari/525.20.1'
    },

    'Safari 3.2 on Windows Vista': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; hu-HU) AppleWebKit/525.26.2 (KHTML, like Gecko) Version/3.2 Safari/525.26.13'
    },

    'Safari 3.2 on Mac OS X 10.5.5': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_5; en-us) AppleWebKit/525.26.2 (KHTML, like Gecko) Version/3.2 Safari/525.26.12'
    },

    'Safari 3.2.1 on Windows Vista': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; sv-SE) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/3.2.1 Safari/525.27.1'
    },

    'Safari 3.2.1 on Mac OS X 10.4.11': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_4_11; pl-pl) AppleWebKit/525.27.1 (KHTML, like Gecko) Version/3.2.1 Safari/525.27.1'
    },

    'Safari 3.2.1 on Mac OS X 10.5.6': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_6; it-it) AppleWebKit/528.8+ (KHTML, like Gecko) Version/3.2.1 Safari/525.27.1'
    },

    'Safari 3.2.2 on Windows 7': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; de-DE) AppleWebKit/525.28 (KHTML, like Gecko) Version/3.2.2 Safari/525.28.1'
    },

    'Safari 3.2.2 on Windows Server 2003 / XP x64': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/525.28 (KHTML, like Gecko) Version/3.2.2 Safari/525.28.1'
    },

    'Safari 3.2.2 on Windows XP': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU) AppleWebKit/525.28 (KHTML, like Gecko) Version/3.2.2 Safari/525.28.1'
    },

    'Safari 3.2.3 on Windows XP': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; cs-CZ) AppleWebKit/525.28.3 (KHTML, like Gecko) Version/3.2.3 Safari/525.29'
    },

    'Safari 3.2.3 on Mac OS X 10.5.7': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; de-de) AppleWebKit/525.28.3 (KHTML, like Gecko) Version/3.2.3 Safari/525.28.3'
    },

    'Safari 3.2.3 on Mac OS X 10.5.8': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_8; ja-jp) AppleWebKit/530.19.2 (KHTML, like Gecko) Version/3.2.3 Safari/525.28.3'
    },

    'Safari 3.2.2 on Windows 7': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; de-DE) AppleWebKit/525.28 (KHTML, like Gecko) Version/3.2.2 Safari/525.28.1'
    },

    'Safari 3.2.2 on Windows Server 2003 / XP x64': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/525.28 (KHTML, like Gecko) Version/3.2.2 Safari/525.28.1'
    },

    'Safari 3.2.2 on Windows XP': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU) AppleWebKit/525.28 (KHTML, like Gecko) Version/3.2.2 Safari/525.28.1'
    },

    'Safari 4.0\u03b1 on Windows XP': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en) AppleWebKit/526.9 (KHTML, like Gecko) Version/4.0dp1 Safari/526.8'
    },

    'Safari 4.0\u03b1 on Mac OS X 10.4.11': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_4_11; tr) AppleWebKit/528.4+ (KHTML, like Gecko) Version/4.0dp1 Safari/526.11.2'
    },

    'Safari 4.0\u03b1 on Mac OS X 10.5.4': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_4; en-us) AppleWebKit/528.4+ (KHTML, like Gecko) Version/4.0dp1 Safari/526.11.2'
    },

    'Safari 4.0\u03b1 on Mac OS X 10.5.6': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_6; en-gb) AppleWebKit/528.10+ (KHTML, like Gecko) Version/4.0dp1 Safari/526.11.2'
    },

    'Safari 4.0 on Windows Vista': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; ru-RU) AppleWebKit/528.16 (KHTML, like Gecko) Version/4.0 Safari/528.16'
    },

    'Safari 4.0 on Windows XP': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-TW) AppleWebKit/528.16 (KHTML, like Gecko) Version/4.0 Safari/528.16'
    },

    'Safari 4.0 on Mac OS X 10.4.11': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_4_11; en) AppleWebKit/530.1+ (KHTML, like Gecko) Version/4.0 Safari/528.16'
    },

    'Safari 4.0 on Mac OS X 10.5.4': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_4; nl-nl) AppleWebKit/528.4+ (KHTML, like Gecko) Version/4.0 Safari/528.1'
    },

    'Safari 4.0 on Mac OS X 10.5.6': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_6; tr-TR) AppleWebKit/528.16 (KHTML, like Gecko) Version/4.0 Safari/528.1'
    },

    'Safari 4.0 on Mac OS X 10.6': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6; en-us) AppleWebKit/530.6+ (KHTML, like Gecko) Version/4.0 Safari/530.6'
    },

    'Safari 4.0 on Android 2.2': {
      'ua': 'Mozilla/5.0 (Linux; U; Android 2.2; zh-cn;) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1'
    },

    'Safari 4.0 on iPhone iOS 3.0': {
      'ua': 'Mozilla/5.0 (iPod; U; CPU iPhone OS 3_0 like Mac OS X; ja-jp) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16'
    },

    'Safari 4.0 on iPhone iOS 4.1.1': {
      'ua': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1_1 like Mac OS X; en-en) AppleWebKit/548.18 (KHTML, like Gecko) Version/4.0 Mobile/8F12 Safari/548.16'
    },

    'Safari 4.0 on iPhone iOS 3.0': {
      'ua': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; ko-kr) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16'
    },

    'Safari 4.0 on iPhone iOS 3.1': {
      'ua': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_1 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7C97d Safari/528.16'
    },

    'Safari 4.0.1 on Mac OS X 10.5.7': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_7; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/4.0.1 Safari/530.18'
    },

    'Safari 4.0.2 on Windows 7': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/532+ (KHTML, like Gecko) Version/4.0.2 Safari/530.19.1'
    },

    'Safari 4.0.2 on Windows Vista': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; zh-TW) AppleWebKit/530.19.2 (KHTML, like Gecko) Version/4.0.2 Safari/530.19.1'
    },

    'Safari 4.0.2 on Windows Server 2003 / XP x64': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.2; de-DE) AppleWebKit/530.19.2 (KHTML, like Gecko) Version/4.0.2 Safari/530.19.1'
    },

    'Safari 4.0.2 on Windows XP': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; zh-CN) AppleWebKit/530.19.2 (KHTML, like Gecko) Version/4.0.2 Safari/530.19.1'
    },

    'Safari 4.0.2 on Mac OS X 10.5.7': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_7; en-us) AppleWebKit/530.19.2 (KHTML, like Gecko) Version/4.0.2 Safari/530.19'
    },

    'Safari 4.0.3 on Windows Vista': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-us) AppleWebKit/531.9 (KHTML, like Gecko) Version/4.0.3 Safari/531.9'
    },

    'Safari 4.0.3 on Mac OS X 10.5.8': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_8; en-us) AppleWebKit/532.0+ (KHTML, like Gecko) Version/4.0.3 Safari/531.9.2009'
    },

    'Safari 4.0.3 on Mac OS X 10.6.1': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_1; nl-nl) AppleWebKit/532.3+ (KHTML, like Gecko) Version/4.0.3 Safari/531.9'
    },

    'Safari 4.0.4 on iPad iOS 3.2': {
      'ua': 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10gin_lib.cc'
    },

    'Safari 4.0.4 on iPhone iOS 3.2': {
      'ua': 'Mozilla/5.0 (iPhone; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'
    },

    'Safari 4.0.4 on iPhone iOS 3.2': {
      'ua': 'Mozilla/5.0 (iPhone Simulator; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7D11 Safari/531.21.10'
    },

    'Safari 4.0.4 on Windows 7': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; ko-KR) AppleWebKit/531.21.8 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10'
    },

    'Safari 4.0.4 on Windows Vista': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10'
    },

    'Safari 4.0.4 on Windows Server 2003 / XP x64': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/531.21.8 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10'
    },

    'Safari 4.0.4 on Windows XP': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de-DE) AppleWebKit/532+ (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10'
    },

    'Safari 4.0.4 on Mac OS X 10.4.11': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_4_11; hu-hu) AppleWebKit/531.21.8 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10'
    },

    'Safari 4.0.4 on Mac OS X 10.6.2': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_2; ru-ru) AppleWebKit/533.2+ (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10'
    },

    'Safari 4.0.4 on Mac OS X 10.6.3': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us) AppleWebKit/531.21.11 (KHTML, like Gecko) Version/4.0.4 Safari/531.21.10'
    },

    'Safari 4.0.4 on iPad iOS 3.2': {
      'ua': 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10'
    },

    'Safari 4.0.5 on Windows Vista': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7'
    },

    'Safari 4.0.5 on Windows 7': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; es-ES) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7'
    },

    'Safari 4.0.5 on Windows XP': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; cs-CZ) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7'
    },

    'Safari 4.0.5 on Mac OS X 10.4.11': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_4_11; da-dk) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7'
    },

    'Safari 4.0.5 on Mac OS X 10.5.8': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_8; en-us) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7'
    },

    'Safari 4.0.5 on Mac OS X 10.6.2': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_2; ja-jp) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7'
    },

    'Safari 4.0.5 on Mac OS X 10.6.3': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; ja-jp) AppleWebKit/531.22.7 (KHTML, like Gecko) Version/4.0.5 Safari/531.22.7'
    },

    'Safari 4.0.5 on iPhone iOS 4.1': {
      'ua': 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_1 like Mac OS X; en-us) AppleWebKit/532.9 (KHTML, like Gecko) Version/4.0.5 Mobile/8B5097d Safari/6531.22.7'
    },

    'Safari 4+ on webOS 1.4.0': {
      'ua': 'Mozilla/5.0 (webOS/1.4.0; U; en-US) AppleWebKit/532.2 (KHTML, like Gecko) Version/1.0 Safari/532.2 Pre/1.0'
    },

    'Safari 4.1 on Mac OS X 10.4.11': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_4_11; nl-nl) AppleWebKit/533.16 (KHTML, like Gecko) Version/4.1 Safari/533.16'
    },

    'Safari 4.1 on Mac OS X 10.7': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_7; en-us) AppleWebKit/533.4 (KHTML, like Gecko) Version/4.1 Safari/533.4'
    },

    'Safari 5.0 on Linux x86.64': {
      'ua': 'Mozilla/5.0 (X11; U; Linux x86_64; en-ca) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/531.2+'
    },

    'Safari 5.0 on Windows 7': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; ja-JP) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16'
    },

    'Safari 5.0 on Windows Vista': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; ja-JP) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16'
    },

    'Safari 5.0 on Mac OS X 10.5.8': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_5_8; ja-jp) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16'
    },

    'Safari 5.0 on Mac OS X 10.4.11': {
      'ua': 'Mozilla/5.0 (Macintosh; U; PPC Mac OS X 10_4_11; fr) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16'
    },

    'Safari 5.0 on Mac OS X 10.6.3': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; zh-cn) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16'
    },

    'Safari 5.0.1 on Windows Server 2003 / XP x64': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8'
    },

    'Safari 5.0.2 on Windows Vista': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.0; tr-TR) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5'
    },

    'Safari 5.0.2 on Windows 7': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; zh-HK) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5'
    },

    'Safari 5.0.2 on Windows XP': {
      'ua': 'Mozilla/5.0 (Windows; U; Windows NT 5.1; ru-RU) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5'
    },

    'Safari 5.0.2 on Mac OS X 10.5.8': {
      'ua': 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; zh-cn) AppleWebKit/533.18.1 (KHTML, like Gecko) Version/5.0.2 Safari/533.18.5'
    },

    'Sleipnir 2.8.4 on Windows XP': {
      'ua': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; Sleipnir 2.8.4)'
    },

    'Sleipnir 2.9.4 (running as IE 7.0) on Windows Vista': {
      'ua': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/4.0; Sleipnir/2.9.4)',
      'mode': 7
    },

    'Sleipnir 2.9.6 on Windows 7': {
      'ua': 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; Sleipnir/2.9.6)',
      'mode': 8
    },

    'unknown platform': {
      'ua': 'Mozilla/5.0 (PLAYSTATION 3; 2.00)'
    }
  };

  for (var i in Tests) {
    equals(String(getPlatform(Tests[i])), i, i);
  }
});