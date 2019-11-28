const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config.js");
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get("/api/endpoint1", (req, res) => {
    res.send(JSON.stringify(
        {
            "status": "ok",
            "totalResults": 87,
            "articles": [{
                "source": {"id": null, "name": "Vitalik.ca"},
                "author": null,
                "title": "Hard Problems in Cryptocurrency: Five Years Later",
                "description": "Special thanks to Justin Drake and Jinglan Wang for feedback",
                "url": "https://vitalik.ca/general/2019/11/22/progress.html",
                "urlToImage": null,
                "publishedAt": "2019-11-24T03:03:12Z",
                "content": "Special thanks to Justin Drake and Jinglan Wang for feedback\r\nIn 2014, I made a post and a presentation with a list of hard problems in math, computer science and economics that I thought were important for the cryptocurrency space (as I then called it) to be… [+31337 chars]"
            }, {
                "source": {"id": null, "name": "Avc.com"},
                "author": "Fred Wilson",
                "title": "History Doesn’t Repeat Itself, But It Does Rhyme",
                "description": "So goes the famous Mark Twain quote. I thought of this in reading a few blockchain sector reports this morning. David Kelnar‘s “blockchain primer” is a very good summary of what is promising about the crypto sector and what is challenging. In his summary at t…",
                "url": "https://avc.com/2019/11/history-doesnt-repeat-itself-but-it-does-rhyme/",
                "urlToImage": null,
                "publishedAt": "2019-11-24T14:26:29Z",
                "content": "So goes the famous Mark Twain quote. \r\nI thought of this in reading a few blockchain sector reports this morning.\r\nDavid Kelnar‘s “blockchain primer” is a very good summary of what is promising about the crypto sector and what is challenging.\r\nIn his summary … [+1457 chars]"
            }, {
                "source": {"id": "bloomberg", "name": "Bloomberg"},
                "author": null,
                "title": "Russia's Largest Bitcoin Mine Turns Water Into Cash",
                "description": null,
                "url": "https://www.bloomberg.com/news/features/2019-11-24/seo-inside-russia-s-largest-bitcoin-mine",
                "urlToImage": null,
                "publishedAt": "2019-11-24T04:00:28Z",
                "content": null
            }, {
                "source": {"id": null, "name": "Fool.com"},
                "author": "newsfeedback@fool.com (Adam Levy)",
                "title": "Here's Square's Plan to Grow Its 2 Ecosystems",
                "description": "Square's seller ecosystem and Cash App still have a lot of growth left.",
                "url": "https://www.fool.com/investing/2019/11/24/heres-squares-plan-to-grow-its-2-ecosystems.aspx",
                "urlToImage": "https://g.foolcdn.com/editorial/images/548932/square-terminal.png",
                "publishedAt": "2019-11-24T18:18:00Z",
                "content": "Square(NYSE:SQ) has built two successful ecosystems in digital payments. Its original seller business enables small and medium-sized businesses to accept card payments with a simple fee structure. Its Cash App ecosystem for consumers has quickly expanded beyo… [+4539 chars]"
            }, {
                "source": {"id": null, "name": "Forbes.com"},
                "author": "Crypto Confidential, Forbes Staff, Crypto Confidential, Forbes Staff https://www.forbes.com/sites/cryptoconfidential/",
                "title": "Will Bitcoin Replace PayPal On Pornhub? Plus, Fidelity Digital Assets Gets Regulatory Approval.",
                "description": "Bitcoin took a 10% hit on Friday morning after the People’s Bank of China warned that it will be cracking down on bitcoin and cryptocurrency trading.",
                "url": "https://www.forbes.com/sites/cryptoconfidential/2019/11/24/will-bitcoin-replace-paypal-on-pornhub-plus-fidelity-digital-assets-gets-regulatory-approval/",
                "urlToImage": "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dda94512c886a0007ecee3a%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D6530%26cropY1%3D772%26cropY2%3D4444",
                "publishedAt": "2019-11-24T15:00:00Z",
                "content": "Get Forbes' top crypto and blockchain stories&amp;nbsp;delivered to your inbox&amp;nbsp;every week for the latest news on bitcoin, other major cryptocurrencies and enterprise blockchain adoption.Getty\r\nCRYPTO MARKETS\r\nBitcoin&amp;nbsp;dipped&amp;nbsp;below $8… [+6648 chars]"
            }, {
                "source": {"id": null, "name": "Forbes.com"},
                "author": "Billy Bambrough, Contributor, Billy Bambrough, Contributor https://www.forbes.com/sites/billybambrough/",
                "title": "Is This When To Buy Bitcoin?",
                "description": "Wall Street veteran Peter Brandt, who made a name for himself by predicting bitcoin's devastating 2018 bear market, has called bitcoin's low for two months after bitcoin's closely-watched halving event...",
                "url": "https://www.forbes.com/sites/billybambrough/2019/11/24/is-this-when-to-buy-bitcoin/",
                "urlToImage": "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dda2767e0af7b0006b22975%2F960x0.jpg",
                "publishedAt": "2019-11-24T07:06:15Z",
                "content": "Bitcoin and cryptocurrency investors have had their hopes of a return to bitcoin's all-time-high in 2019 all but dashed after the latest sudden sell-off.The bitcoin price has been on a downward trend all month after breaching $10,000 per bitcoin at the end of… [+4897 chars]"
            }, {
                "source": {"id": null, "name": "Futura-sciences.com"},
                "author": "webmaster@futura-sciences.com (Futura-Sciences)",
                "title": "L'impact environnemental du Bitcoin ne serait finalement pas si élevé que ça",
                "description": "De nombreuses études ont récemment fait état de la quantité astronomique engloutie par le minage de Bitcoins. Le compteur du Cambridge Bitcoin Electricity Consumption Index indique par exemple une consommation annuelle de 76,9 TWh par an, soit davantage que l…",
                "url": "https://www.futura-sciences.com/tech/breves/informatique-impact-environnemental-bitcoin-ne-serait-finalement-pas-si-eleve-ca-1552/",
                "urlToImage": "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/a/7/9/a79b8ca0c7_50157141_minage-bitcoin-jpgon-adobe-stock.jpg",
                "publishedAt": "2019-11-24T13:23:41Z",
                "content": "De nombreuses études ont récemment fait état de la quantité astronomique engloutie par le minage de Bitcoins. Le compteur du Cambridge Bitcoin Electricity Consumption Index indique par exemple une consommation annuelle de 76,9 TWh par an, soit davantage que l… [+1345 chars]"
            }, {
                "source": {"id": null, "name": "Coindesk.com"},
                "author": "Adam B. Levine",
                "title": "Statechains, and Trading the Panopticon for Magical Internet Money",
                "description": "CoinDesk&#039;s Nolan Bauerle and Thiel Capital&#039;s Eric Weinstein talk Magical Internet Money; the Let’s Talk Bitcoin! host and Somsen Ruben discuss statechains.",
                "url": "https://www.coindesk.com/podcast-statechains-trading-panopticon-for-magical-internet-money",
                "urlToImage": "https://static.coindesk.com/wp-content/uploads/2019/11/LTB-widescreen-onstage-image-with-branding.jpg",
                "publishedAt": "2019-11-24T13:05:00Z",
                "content": null
            }, {
                "source": {"id": null, "name": "Yahoo.com"},
                "author": null,
                "title": "Bitcoin Dips Below 6,797.0 Level, Down 7%",
                "description": "Investing.com - Bitcoin fell bellow the $6,797.0 level on Monday. Bitcoin was trading at 6,797.0 by 20:38 (01:38 GMT) on the Investing.com Index, down 6.90% on the day. It was the largest one-day percentage loss since October 23.",
                "url": "https://finance.yahoo.com/news/bitcoin-dips-below-6-797-203900148.html",
                "urlToImage": "https://s.yimg.com/uu/api/res/1.2/Ws609gttrNUS3W9chn4Jqw--~B/aD0zMDA7dz00NTA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/investing_com_631/e16a5d5c05e3f799466374feb4c2f832",
                "publishedAt": "2019-11-24T20:39:00Z",
                "content": "Investing.com - Bitcoin fell bellow the $6,797.0 level on Monday. Bitcoin was trading at 6,797.0 by 20:38 (01:38 GMT) on the Investing.com Index, down 6.90% on the day. It was the largest one-day percentage loss since October 23.\r\nThe move downwards pushed Bi… [+1069 chars]"
            }, {
                "source": {"id": null, "name": "Yahoo.com"},
                "author": null,
                "title": "Why people are holding out for an altcoin rally in 2020",
                "description": "Bitcoin has dominated the cryptocurrency market for the majority of 2019, but as we approach the end of the year, many analysts are predicting the altcoin market could soon surge in value. The past 12 months have been largely positive for Bitcoin, with the pr…",
                "url": "https://finance.yahoo.com/news/why-people-holding-altcoin-rally-100019910.html",
                "urlToImage": "https://s.yimg.com/uu/api/res/1.2/hJGmj6oe.b8RsarZaaPpxA--~B/aD02ODI7dz0xMDI0O3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-GB/coin_rivet_596/78b05b854094668e918eca8143eb5e70",
                "publishedAt": "2019-11-24T10:00:19Z",
                "content": "Bitcoin has dominated the cryptocurrency market for the majority of 2019, but as we approach the end of the year, many analysts are predicting the altcoin market could soon surge in value.\r\nThe past 12 months have been largely positive for Bitcoin, with the p… [+4023 chars]"
            }, {
                "source": {"id": null, "name": "Yahoo.com"},
                "author": null,
                "title": "Bitcoin vs altcoins: The utility of price appreciation",
                "description": "Currently, one of the most heated discussions in the cryptocurrency space revolves around utility. While BTC proponents argue Bitcoin's value comes from its security (immutability), altcoin enthusiasts claim higher utility will foster adoption and therefore b…",
                "url": "https://finance.yahoo.com/news/bitcoin-vs-altcoins-utility-price-150050284.html",
                "urlToImage": "https://s.yimg.com/uu/api/res/1.2/iAzQIMVSHfyKn_g.gx5oNw--~B/aD01NzY7dz0xMDI0O3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-GB/coin_rivet_596/0451ed85a5bb037afde77b2243f3b45f",
                "publishedAt": "2019-11-24T15:00:50Z",
                "content": "Currently, one of the most heated discussions in the cryptocurrency space revolves around utility.\r\nWhile BTC proponents argue Bitcoins value comes from its security (immutability), altcoin enthusiasts claim higher utility will foster adoption and therefore b… [+6089 chars]"
            }, {
                "source": {"id": null, "name": "Yahoo.com"},
                "author": null,
                "title": "XRP Falls 11% In Rout",
                "description": "Investing.com - XRP was trading at $0.20719 by 20:39 (01:39 GMT) on the Investing.com Index on Monday, down 11.16% on the day. It was the largest one-day percentage loss since September 24.",
                "url": "https://finance.yahoo.com/news/xrp-falls-11-rout-204000376.html",
                "urlToImage": "https://s.yimg.com/uu/api/res/1.2/6j4SZAaiNzNxzd.1KQs4OQ--~B/aD0yOTU7dz00NTA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/investing_com_631/1c501e357b282137618bfbb00bc17d84",
                "publishedAt": "2019-11-24T20:40:00Z",
                "content": "Investing.com - XRP was trading at $0.20719 by 20:39 (01:39 GMT) on the Investing.com Index on Monday, down 11.16% on the day. It was the largest one-day percentage loss since September 24.\r\nThe move downwards pushed XRP's market cap down to $9.62859B, or 4.9… [+1035 chars]"
            }, {
                "source": {"id": null, "name": "Yahoo.com"},
                "author": null,
                "title": "Ethereum Dips Below 134.77 Level, Down 12%",
                "description": "Investing.com - Ethereum fell bellow the $134.77 level on Monday. Ethereum was trading at 134.77 by 23:11 (04:11 GMT) on the Investing.com Index, down 11.50% on the day. It was the largest one-day percentage loss since September 24.",
                "url": "https://finance.yahoo.com/news/ethereum-dips-below-134-77-231200026.html",
                "urlToImage": "https://s.yimg.com/uu/api/res/1.2/34D38qlO07Fu1nvlZTWazg--~B/aD0zMDA7dz00NTA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/investing_com_631/f693abc8ed0c9af3cb2ec0fe3aed765e",
                "publishedAt": "2019-11-24T23:12:00Z",
                "content": "Investing.com - Ethereum fell bellow the $134.77 level on Monday. Ethereum was trading at 134.77 by 23:11 (04:11 GMT) on the Investing.com Index, down 11.50% on the day. It was the largest one-day percentage loss since September 24.\r\nThe move downwards pushed… [+1072 chars]"
            }, {
                "source": {"id": null, "name": "Forbes.com"},
                "author": "Billy Bambrough, Contributor, Billy Bambrough, Contributor https://www.forbes.com/sites/billybambrough/",
                "title": "[Update] Bitcoin Has Crashed Again—But Is This When To Buy Bitcoin?",
                "description": "Wall Street veteran Peter Brandt, who made a name for himself by predicting bitcoin's devastating 2018 bear market, has called bitcoin's low for two months after bitcoin's closely-watched halving event...",
                "url": "https://www.forbes.com/sites/billybambrough/2019/11/24/bitcoin-crashed-is-this-when-to-buy-bitcoin/",
                "urlToImage": "https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5dda2767e0af7b0006b22975%2F960x0.jpg",
                "publishedAt": "2019-11-24T07:06:15Z",
                "content": "Bitcoin and cryptocurrency investors have had their hopes of a return to bitcoin's all-time-high in 2019 all but dashed after the latest sudden sell-off.The bitcoin price, which last night fell to a six month low of $6,515 per bitcoin on the Luxembourg-based … [+5249 chars]"
            }, {
                "source": {"id": null, "name": "Bitcoinmagazine.com"},
                "author": "Aaron van Wirdum",
                "title": "Bitcoin Core 0.19.0 Released: Here’s What’s New",
                "description": "The latest major release for Bitcoin, Bitcoin Core 0.19.0, includes a range of performance improvements, modernizations and bug fixes. The post Bitcoin Core 0.19.0 Released: Here’s What’s New appeared first on Bitcoin Magazine.",
                "url": "https://bitcoinmagazine.com/articles/bitcoin-core-0-19-0-released-heres-whats-new",
                "urlToImage": "https://admin.bitcoinmagazine.com/wp-content/uploads/sites/5/2019/06/core_release_17.width-800-600x315.jpg",
                "publishedAt": "2019-11-24T16:16:25Z",
                "content": "Today, November 24, 2019, marks the official release of Bitcoin Core 0.19.0, the 19th major release of Bitcoins original software client launched by Satoshi Nakamoto almost 11 years ago and still the dominant Bitcoin implementation on the network today. (Thou… [+8896 chars]"
            }, {
                "source": {"id": null, "name": "Impress.co.jp"},
                "author": null,
                "title": "ビットコインはインターネットの歴史になぞると何年頃なのか？ 〜ブロックチェーンはNetscapeが登場した1994年頃に似ている＝ビットコイン研究所",
                "description": "「ブロックチェーンは革命的な発明だ」と言われることが多い。また、インターネット誕生以来、最大の革命だと評されることも少なくない。もともとは仮想通貨Bitcoin（ビットコイン）の基盤技術として考えられた仕組みだが、その応用範囲は仮想通貨の取引に限らず、決済や海外送金等の金融分野への応用、AIやIoTと結び付いてさまざまな産業での活用が期待されている。",
                "url": "https://crypto.watch.impress.co.jp/docs/news/1218353.html",
                "urlToImage": "https://crypto.watch.impress.co.jp/img/ctw/list/1218/353/image01.jpg",
                "publishedAt": "2019-11-24T20:30:00Z",
                "content": "Internet telecommunications Union2018488141 \r\n 1980112 \r\n 19992000IT31 \r\n 20071012%41 \r\n 7.82019IITmedia6.22019CryptoPotato7.42019coinreaders.com42018YouGov67 \r\n 199619941995Amazon1994 \r\n NetscapeWindows 95NetscapeLightning Network"
            }, {
                "source": {"id": "wirtschafts-woche", "name": "Wirtschafts Woche"},
                "author": "Sebastian Kirsch",
                "title": "Infografik: So viel Strom frisst eine Bitcoin-Transaktion",
                "description": "Nicht nur die Produktion von Bitcoin verschlingt Unmengen Strom, sondern auch jeder einzelne Zahlungsvorgang auf der Blockchain. Bitcoin frisst dabei viel mehr Strom als eine schlichte Visa-Transaktion.",
                "url": "https://www.wiwo.de/technologie/digitale-welt/infografik-so-viel-strom-frisst-eine-bitcoin-transaktion/25241360.html",
                "urlToImage": "https://www.wiwo.de/images/48_seitenblick_bitcoin_visa_teaser/25241560/6-format11240.png",
                "publishedAt": "2019-11-24T07:49:21Z",
                "content": null
            }, {
                "source": {"id": null, "name": "Yahoo.com"},
                "author": "Bob Mason",
                "title": "The Crypto Daily – Movers and Shakers -24/11/19",
                "description": "It’s back into the red for the majors as the bears look to close out the week in full control… A Bitcoin move through to $7,300 would signal support.",
                "url": "https://finance.yahoo.com/news/crypto-daily-movers-shakers-24-031305100.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/AAUvgZ0X0D0Cw3Voznnf3Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMzA7aD04MjA-/https://s.yimg.com/uu/api/res/1.2/vckfclusnvRJ28EA6FZn2w--~B/aD00MTA7dz02MTU7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/fx_empire_176/9322d2606c45c51587bee3316b0ea99c",
                "publishedAt": "2019-11-24T03:13:05Z",
                "content": "Bitcoin rose by 0.46% on Saturday. Partially reversing 4.61% slide from Friday, Bitcoin ended the day at $7,352.6.\r\nRelatively bearish through the morning, Bitcoin fell from an early morning high $7,344.4 to a late morning intraday low $7,141.0.\r\nWhile steeri… [+2705 chars]"
            }, {
                "source": {"id": null, "name": "Yahoo.com"},
                "author": "Frank Chaparro",
                "title": "Hedge funds were short bitcoin going into this downturn, CFTC reports show",
                "description": "Some hedge funders out there appear to have made a strong bet shorting the bitcoin market over the past week, data from the Commodities Futures Trading Commission shows. The post Hedge funds were short bitcoin going into this downturn, CFTC reports show appea…",
                "url": "https://finance.yahoo.com/news/hedge-funds-were-short-bitcoin-183444563.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/wZd0O8bC8cCM2NUs41strg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyODA7aD03MjA-/https://s.yimg.com/uu/api/res/1.2/8VEk5Q05NQ0PvQ8x0S96OQ--~B/aD00NTA7dz04MDA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-US/the_block_83/166cb54d12813e9f6265ed24efac47aa",
                "publishedAt": "2019-11-24T18:34:44Z",
                "content": "Some hedge funders out there appear to have made a strong bet shorting the bitcoin market over the past week, data from the Commodities Futures Trading Commission shows. \r\nAs per a research report by The Block's Ryan Todd, hedge funds were overwhelmingly shor… [+908 chars]"
            }, {
                "source": {"id": null, "name": "Yahoo.com"},
                "author": "Bob Mason",
                "title": "Bitcoin Cash – ABC, Litecoin and Ripple Daily Analysis – 24/11/19",
                "description": "It’s another bearish start to the day. Following Saturday’s gains, a late morning move through to key levels would likely draw in more sidelined investors.",
                "url": "https://finance.yahoo.com/news/bitcoin-cash-abc-litecoin-ripple-024341455.html",
                "urlToImage": "https://s.yimg.com/ny/api/res/1.2/.74bkWy_02pcNhevDLcqow--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMzA7aD04MjA-/https://s.yimg.com/uu/api/res/1.2/1NtOJWCRah6t5HHyFHZWRw--~B/aD00MTA7dz02MTU7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/fx_empire_176/42d5813d9eda4e8ddacd887b9f0535a8",
                "publishedAt": "2019-11-24T02:43:41Z",
                "content": "Bitcoin Cash ABC Back in the Red\r\nBitcoin Cash ABC rallied by 4.10% on Saturday. Partially reversing a 7.72% tumble from Friday, Bitcoin Cash ABC ended the day at $215.06.\r\nA bearish start to the day saw Bitcoin Cash ABC fall to a late morning intraday low $2… [+4495 chars]"
            }]
        }
    ));
})

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log("News API app listening on port 3000!\n");
});