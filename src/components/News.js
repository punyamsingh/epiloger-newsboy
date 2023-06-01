import React,{ Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Timothy Bella",
            "title": "Wild Georgia car crash: Florida woman vaults 120 feet off tow truck ramp, video shows - The Washington Post",
            "description": "Body-camera footage captured a wild May 24 crash near Valdosta, Ga., that saw a 21-year-old Florida woman vault 120 feet in the air. She suffered serious injuries.",
            "url": "https://www.washingtonpost.com/nation/2023/06/01/georgia-car-crash-video-tow-truck/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XWIA3XCQSKPPIA77F7D23VICKU.jpg&w=1440",
            "publishedAt": "2023-06-01T16:22:12Z",
            "content": "Comment on this story\r\nComment\r\nIt was a regular day for Georgia police and a tow truck when they responded to a highway accident the kind that happens every day across the country.\r\nBut its what hap… [+4731 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "BRICS ministers put on show of strength as Putin arrest warrant looms large - Reuters",
            "description": "BRICS foreign ministers on Thursday asserted their bloc's ambition to rival Western powers but their talks in South Africa were overshadowed by questions over whether Russia's president would be arrested if he attended a summit in August.",
            "url": "https://www.reuters.com/world/brics-ministers-meet-push-establish-group-counterweight-west-2023-06-01/",
            "urlToImage": "https://www.reuters.com/resizer/9g8bs6IAfvDy1gwSC94bXAMIfSw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SP7SH7UWXRKIHCU4S3JZZJOJVU.jpg",
            "publishedAt": "2023-06-01T16:16:00Z",
            "content": "CAPE TOWN, June 1 (Reuters) - BRICS foreign ministers on Thursday asserted their bloc's ambition to rival Western powers but their talks in South Africa were overshadowed by questions over whether Ru… [+3616 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Belgorod: Russia blames Ukraine for shelling inside border - BBC",
            "description": "The defence ministry claims it has also thwarted attempts by Kyiv to \"invade\" the Belgorod region.",
            "url": "https://www.bbc.com/news/world-europe-65779989",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/CAFD/production/_129956915_belgorodcar.jpg",
            "publishedAt": "2023-06-01T15:41:51Z",
            "content": "The Russian region of Belgorod has again come under attack from across the Ukrainian border, with at least eight people reportedly hurt in shelling. \r\nRussia's defence ministry has also claimed it th… [+3187 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Debt ceiling deal: US House overwhelmingly passes bill - BBC",
            "description": "The Senate must approve the deal and send it to the president's desk this weekend to avoid a default.",
            "url": "https://www.bbc.com/news/world-us-canada-65771669",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/E0FA/production/_129949575_kevinmc.jpg",
            "publishedAt": "2023-06-01T15:05:17Z",
            "content": "A deal allowing the US to borrow more money has moved closer to becoming law, days before the world's biggest economy is due to start defaulting on its debt.\r\nThe measure easily passed the House of R… [+4853 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Investor's Business Daily"
            },
            "author": "Investor's Business Daily",
            "title": "AI Stock Tumbles As C3.ai's Revenue Outlook Misses Estimates - Investor's Business Daily",
            "description": "AI stock tumbled after software maker C3.ai issued full-year fiscal 2024 revenue guidance that missed consensus estimates.",
            "url": "https://www.investors.com/news/technology/ai-stock-tumbles-as-c3ai-fiscal-2024-revenue-outlook-misses/",
            "urlToImage": "https://www.investors.com/wp-content/uploads/2023/04/Stock-c3.ai-01-adobe.jpg",
            "publishedAt": "2023-06-01T15:02:00Z",
            "content": "Shares in C3.ai (AI) plunged Thursday on a full-year fiscal 2024 revenue outlook that fell short of analyst estimates. AI stock had gained 257% in 2023 prior amid hype over artificial intelligence st… [+2813 chars]"
        },
        {
            "source": {
                "id": "espn",
                "name": "ESPN"
            },
            "author": null,
            "title": "Tom Brady says he's 'certain' he's not playing again - ESPN - ESPN",
            "description": "Tom Brady reiterated on Thursday that his retirement from the NFL is final.",
            "url": "https://www.espn.com/nfl/story/_/id/37773567/tom-brady-says-certain-not-playing-again",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0601%2Fr1181075_1296x729_16%2D9.jpg",
            "publishedAt": "2023-06-01T14:57:00Z",
            "content": "Tom Brady reiterated Thursday that he has no plans to play in the NFL again after retiring in February.\r\n\"I'm certain I'm not playing again, so I've tried to make that clear and I hate to continue to… [+1693 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Vincent Goodwill",
            "title": "NBA Finals: How do the Heat slow down Nikola Jokić? 'Guarding him as a team with all five guys' - Yahoo Sports",
            "description": "“Does it end in a win?” Adebayo replied when asked about having to absorb a big night from Jokić. “If it ends in a win, it doesn’t matter.”",
            "url": "https://sports.yahoo.com/nba-finals-heat-nuggets-nikola-jokic-guarding-145226749.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/i2swu2IPfs3yEgu011p2Rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MjQ-/https://s.yimg.com/os/creatr-uploaded-images/2023-04/47884370-e89f-11ed-afdf-1bab32458137",
            "publishedAt": "2023-06-01T14:52:26Z",
            "content": "DENVER Erik Spoelstra isnt exactly Dr. Seuss, but he almost sounds like a passage from Green Eggs and Ham when referencing the start of the NBA Finals.\r\nIf Denver wants to tip this thing off at the t… [+5598 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Seth Davis",
            "title": "College basketball rankings: Kansas and Purdue rise, Kentucky sinks after deadline day - The Athletic",
            "description": "Seth Davis updates his men's college hoops top 25 after Wednesday's deadline for NBA Draft decisions.",
            "url": "https://theathletic.com/4571190/2023/06/01/college-basketball-rankings-kansas-purdue-kentucky/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/06/01102900/0601_Top25PostEE.png",
            "publishedAt": "2023-06-01T14:52:02Z",
            "content": "Wednesday was Decision Day in college basketball. The NCAAs deadline for underclassmen to withdraw from the NBA Draft struck at 11:59 p.m. ET. That landmark moment capped a fast and furious couple of… [+14554 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Karen Gilchrist",
            "title": "British PM Rishi Sunak says Ukraine's rightful place is in NATO - CNBC",
            "description": "U.K. Prime Minister Rishi Sunak said Thursday that Ukraine's \"rightful place\" is within the NATO military alliance.",
            "url": "https://www.cnbc.com/2023/06/01/british-pm-rishi-sunak-says-ukraines-rightful-place-is-in-nato.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107249262-1685628914361-gettyimages-1258350708-230601_moldova_epc_bilat_188.jpeg?v=1685630479&w=1920&h=1080",
            "publishedAt": "2023-06-01T14:41:19Z",
            "content": "U.K. Prime Minister Rishi Sunak said Thursday that Ukraine's \"rightful place\" is within the NATO military alliance.\r\nSunak said he agreed with comments made earlier Thursday by NATO Secretary-General… [+2432 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Variety"
            },
            "author": "Zack Sharf",
            "title": "Bruce Willis’ Family Thought His Early Signs of Dementia Were ‘Hollywood Hearing Loss’, Daughter Says: ‘This Is the Beginning of Grief’ - Variety",
            "description": "Tallulah Willis, daughter of Bruce Willis and Demi Moore, has penned an emotional essay for Vogue in which she recounts her family coming to terms with Bruce’s dementia. The actor’s fam…",
            "url": "https://variety.com/2023/film/news/bruce-willis-family-demtentia-hollywood-hearing-loss-1235630221/",
            "urlToImage": "https://variety.com/wp-content/uploads/2023/06/GettyImages-1140471275.jpg?w=1000&h=563&crop=1",
            "publishedAt": "2023-06-01T14:28:00Z",
            "content": "Tallulah Willis, daughter of Bruce Willis and Demi Moore, has penned an emotional essay for Vogue in which she recounts her family coming to terms with Bruce’s dementia. The actor’s family announced … [+2677 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Olga Voitovych,Sarah Dean,Josh Pennington,Anna Chernova",
            "title": "Anger in Kyiv as 3 killed trying to get into closed bomb shelter - CNN",
            "description": "Three people, including a young girl, were killed in Kyiv on Thursday while desperately trying to take cover in a closed bomb shelter amid fresh Russian strikes, in an incident that  sparked anger in the Ukrainian capital.",
            "url": "https://www.cnn.com/2023/06/01/europe/kyiv-three-killed-closed-bomb-shelter-intl-ukr/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230601143653-01-kyiv-grandad-060123.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-06-01T14:23:00Z",
            "content": "Three people, including a young girl, were killed in Kyiv on Thursday while desperately trying to take cover in a closed bomb shelter amid fresh Russian strikes, in an incident that sparked anger in … [+6468 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Des Moines Register"
            },
            "author": "Scott McFetridge, Trisha Ahmed and Erin Hooley",
            "title": "Davenport building collapse survivor's leg amputated during rescue - Des Moines Register",
            "description": "It took hours before rescuers found Peach Berry trapped in the rubble and then determined one of her legs would need to be amputated to pull her free.",
            "url": "https://www.desmoinesregister.com/story/news/2023/06/01/davenport-iowa-building-collapse-survivors-leg-amputated-during-rescue-andrew-wold/70276833007/",
            "urlToImage": "https://www.desmoinesregister.com/gcdn/presto/2023/05/30/PDEM/27c3adff-ca11-46aa-96f5-ac0473029bd5-230530-Building_collapse-003.JPG?crop=3321,1869,x0,y169&width=3200&height=1801&format=pjpg&auto=webp",
            "publishedAt": "2023-06-01T14:19:32Z",
            "content": "DAVENPORT, Iowa One moment Lexus Berry and her wife were rushing toward the door of their fourth-floor apartment, and the next, Quanishia Peach Berry was gone.\r\nTheir apartment had disappeared into a… [+6087 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fb.com"
            },
            "author": null,
            "title": "Meta Quest 3 Coming This Fall + Lower Prices for Quest 2 - Meta Store",
            "description": "Meta Quest 3, our next-generation virtual and mixed reality headset, will ship this fall.",
            "url": "https://about.fb.com/news/2023/06/meta-quest-3-coming-this-fall/",
            "urlToImage": "https://about.fb.com/wp-content/uploads/2023/06/02_Hero-View_With-Copy-1.png?w=1200",
            "publishedAt": "2023-06-01T14:09:44Z",
            "content": "Mark Zuckerberg just announced Meta Quest 3, our next-generation virtual and mixed reality headset, which launches later this year. It features higher resolution, stronger performance, breakthrough M… [+5398 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Gabrielle Fonrouge",
            "title": "Dollar General stock drops as 'challenging' economic backdrop drives dismal earnings report - CNBC",
            "description": "Dollar General said a worse than expected macroeconomic backdrop is impacting its customers spending, leading the discounter to slash its full year outlook.",
            "url": "https://www.cnbc.com/2023/06/01/dollar-general-dg-q1-earnings-report-2023.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/103657985-GettyImages-179442559.jpg?v=1685628187&w=1920&h=1080",
            "publishedAt": "2023-06-01T14:03:07Z",
            "content": "Dollar General's core customers are reining in their spending amid a worse than expected macroeconomic backdrop, leading the discounter to slash its full year outlook after a dismal earnings report T… [+4121 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Geoff Chester",
            "title": "June's short nights bring big sights for sky-watchers - The Washington Post",
            "description": "The sky features the full Strawberry Moon on Saturday, while Venus, Mars, Saturn and eventually Jupiter are visible during the month.",
            "url": "https://www.washingtonpost.com/weather/2023/06/01/june-night-sky-strawberry-moon/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MP2ZL3HMLAI6ZH4QPHPR7MUCSY.jpg&w=1440",
            "publishedAt": "2023-06-01T13:30:00Z",
            "content": "Comment on this story\r\nComment\r\nLate spring gives way to summer in June, bringing mild nights to explore the starry sky. Unfortunately, these are the shortest nights of the year, but, if youre an avi… [+5043 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Nathaniel Meyersohn",
            "title": "Macy’s and Costco sound a warning about the economy - CNN",
            "description": "Macy’s, Costco and other big chains say shoppers are pulling back at their stores and changing what they buy. That could be a red flag for the US economy.",
            "url": "https://www.cnn.com/2023/06/01/investing/macys-earnings-costco/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230601085559-macys-shoppers-0531.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2023-06-01T13:26:00Z",
            "content": "Macys, Costco and other big chains say shoppers are pulling back at their stores and changing what they buy. That could be a red flag for the US economy.\r\nMacys\r\n(M) on Thursday cut its annual profit… [+2057 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Ranking NFL's 10 most complete teams: Reigning Super Bowl participants headline list, Cowboys inside top 5 - CBS Sports",
            "description": "These clubs are set up for success in 2023",
            "url": "https://www.cbssports.com/nfl/news/ranking-nfls-10-most-complete-teams-reigning-super-bowl-participants-headline-list-cowboys-inside-top-5/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/06/01/80a5a032-e927-4589-a61e-22fee1c45509/thumbnail/1200x675/1a5ea71dc21d852c141125275a2282ea/jalen-hurts.jpg",
            "publishedAt": "2023-06-01T13:22:00Z",
            "content": "The NFL offseason is a time of change. Teams spend months trying to improve their rosters so they can come into the next season in the best shape possible to make a run at a Super Bowl. Some of them,… [+11568 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Don't Sleep on This: Study Links Sleep Apnea to Smaller Brain Volume - SciTechDaily",
            "description": "A recent study has found an association between severe sleep apnea and reduced brain volume in regions critical to memory in individuals with early signs of Alzheimer's disease. The study emphasizes the need for further research into sleep-disordered breathin…",
            "url": "https://scitechdaily.com/?p=282567",
            "urlToImage": "https://scitechdaily.com/images/Alzheimers-Brain-Disease.jpg",
            "publishedAt": "2023-06-01T12:42:11Z",
            "content": "ByAmerican Academy of NeurologyJune 1, 2023\r\nA new study published in Neurology has found a correlation between severe sleep apnea and lower brain volumes in the medial temporal lobe area, including … [+4286 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New Food"
            },
            "author": null,
            "title": "DNA-damaging chemical found in common sweetener - New Food",
            "description": "According to latest research, a chemical formed when we digest sucralose, a widely used sweetener, is “genotoxic”.",
            "url": "https://www.newfoodmagazine.com/news/192938/dna-damaging-chemical-found-in-common-sweetener/",
            "urlToImage": "https://www.newfoodmagazine.com/wp-content/uploads/shutterstock_1681138096-scaled.jpg",
            "publishedAt": "2023-06-01T12:32:57Z",
            "content": "Posted: 1 June 2023 | Grace Galler | No comments yet\r\nAccording to latest research, a chemical formed when we digest sucralose, a widely used sweetener, is genotoxic.\r\nAfter analysing a popular sweet… [+3109 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WLBT"
            },
            "author": null,
            "title": "Two officers shot in Brandon after hostage situation ends in standoff - WLBT",
            "description": "The officer killed was with the Madison Police Department.",
            "url": "https://www.wlbt.com/2023/06/01/1-officer-dead-1-officer-injured-during-standoff-brandon-neighborhood/",
            "urlToImage": "https://gray-wlbt-prod.cdn.arcpublishing.com/resizer/17Wco-N_D0KU_EcNgQelcNRpjxQ=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/E5HHVDJM7NDJXAVKUYN3HME7CY.jpg",
            "publishedAt": "2023-06-01T11:22:00Z",
            "content": "BRANDON, Miss. (WLBT) - One police officer is dead and another received significant injuries after a hostage situation turned into a standoff Thursday morning. The suspect is also now dead.\r\nThe offi… [+946 chars]"
        }
    ];

    constructor() {
        super();
        console.log("Hello I am a constructor from News Component");
        this.state = {
            articles: this.articles,
            loading: false
        };
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=9f30ea7a126f44dca364187e204658f8";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles });
    }

render() {
    return (
        <div className="container my-3">
            <h2>NewsMonkey - Top Headlines</h2>

            <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={(element.title ? element.title.slice(0,60) : "") + "..."} description={(element.description ? element.description.slice(0,150) : "") + "..."} imageUrl={element.urlToImage ? element.urlToImage : "https://image.cnbcfm.com/api/v1/image/107037740-1648489222571-GettyImages-1311362808.jpg?v=1648489337"} newsUrl={element.url} />
                    </div>;
                })}

            </div>
        </div>
    );
}
}

export default News;