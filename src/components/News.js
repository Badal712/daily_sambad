import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "ECB names counties to host women's teams from 2025",
      "description": "The England and Wales Cricket Board announces the eight counties that will host professional women's teams as part of a major restructure of the domestic game from 2025.",
      "url": "https://www.bbc.co.uk/sport/cricket/68841517",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/5F7F/production/_133174442_gettyimages-2148429704.jpg",
      "publishedAt": "2024-04-17T23:01:25Z",
      "content": "Lancashire will be one of eight counties to host a professional women's team from 2025\r\nThe England and Wales Cricket Board has announced the eight counties that will host professional women's teams … [+2172 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "'It doesn’t make sense' – MOTD pundits on Wolves 'goal'",
      "description": "Match of the Day pundits analyse the decision to disallow a late Wolves equaliser against West Ham, with Gary Lineker suggesting that VAR is taking over - and that football needs an appeal system.",
      "url": "https://www.bbc.co.uk/sport/av/football/68753233",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/3231/production/_133094821_p0hp9j5q.jpg",
      "publishedAt": "2024-04-06T23:29:14Z",
      "content": "Match of the Day pundits analyse the decision to disallow a late Wolves equaliser in their 2-1 Premier League home defeat by West Ham, with Gary Lineker suggesting that VAR is taking over - and that … [+171 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": null,
      "title": "Frazer wants clearer policy on transgender athletes",
      "description": "Culture secretary Lucy Frazer calls on sporting bodies to \"take an unambiguous position\" on transgender athletes.",
      "url": "https://www.bbc.co.uk/sport/68825414",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/40DE/production/_133160661_hi093156313.jpg",
      "publishedAt": "2024-04-16T11:31:03Z",
      "content": "Lucy Frazer is the secretary of state for culture, media and sport\r\nUK culture secretary Lucy Frazer has called on sporting bodies to \"take an unambiguous position\" and ban transgender athletes compe… [+2865 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Android Police"
      },
      "author": "Zach Gray-Traverso",
      "title": "Cricket Wireless: How to send an email to a Cricket phone number",
      "description": "Cricket phone numbers can also be used as email addresses, which can come in handy if you need to send something longer than a text message",
      "url": "https://www.androidpolice.com/send-email-cricket-phone-number/",
      "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/03/cricket-wireless.jpg",
      "publishedAt": "2024-04-11T13:15:56Z",
      "content": "Texting is a common way to communicate with others. It's easy, and you can do it from any phone, even on a budget device. However, what if you don't have your phone with you or don't have service? Th… [+2688 chars]"
    },
    {
      "source": {
        "id": "time",
        "name": "Time"
      },
      "author": "Mallory Moench",
      "title": "Trump VP Contender Kristi Noem Faces Backlash After Admitting to Killing Her Dog",
      "description": "South Dakota Governor Kristi Noem, a reported Donald Trump Vice President contender, admitted to killing her own dog in an upcoming memoir.",
      "url": "https://time.com/6971773/kristi-noem-memoir-dog-kill-children-net-worth/",
      "urlToImage": "https://api.time.com/wp-content/uploads/2024/04/kristinoem.jpg?quality=85&w=1024&h=628&crop=1",
      "publishedAt": "2024-04-27T15:03:25Z",
      "content": "South Dakota Governor Kristi Noem, a Republican and reported contender for Donald Trumps Vice President pick in the 2024 election, has received pushback after admitting to killing her dog in her new … [+5112 chars]"
    },
    {
      "source": {
        "id": "business-insider",
        "name": "Business Insider"
      },
      "author": "Brent D. Griffiths",
      "title": "Maybe Kristi Noem doesn't want to be Trump's vice president",
      "description": "Kristi Noem is widely thought to be in contention to be Donald Trump's running mate. But she keeps shooting herself in the foot.",
      "url": "https://www.businessinsider.com/kristi-noem-vice-president-trump-dog-killing-veepstakes-2024-5",
      "urlToImage": "https://i.insider.com/6632a7e10dfb1341e90181eb?width=1200&format=jpeg",
      "publishedAt": "2024-05-01T21:42:59Z",
      "content": "South Dakota Gov. Kristi Noem is hurting her chances to become President Donald Trump's running mate.Andrew Caballero-Reynolds/AFP/Getty Images\r\n\u003Cul\u003E\u003Cli\u003ESouth Dakota Gov. Kristi Noem keeps hurting he… [+5450 chars]"
    },
    {
      "source": {
        "id": "bbc-news",
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "The 10-year story of a football club's new stand",
      "description": "Northampton Town's East Stand is at the heart of a scandal which saw a loan of £10.25m go missing.",
      "url": "https://www.bbc.co.uk/news/uk-england-northamptonshire-68937589",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13BE1/production/_133256808_mediaitem133256807.jpg",
      "publishedAt": "2024-05-03T02:22:11Z",
      "content": "It is now 10 years since Northampton Town's home ground Sixfields hosted a professional match in front of a completed stadium.\r\nThe club's East Stand was at the heart of a scandal which saw £10.25m o… [+4404 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Theonion.com"
      },
      "author": "Chad Nackers",
      "title": "The Onion’s Annual Click Drive",
      "description": "Welcome To The Onion’s Click Drive. Thanks to the generous clicks of readers like yourself, we’re able to keep invaluable journalistic projects going:Read more...",
      "url": "https://www.theonion.com/the-onion-s-annual-click-drive-1851379658",
      "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/0d49e7985955307ac26849d36639e73d.png",
      "publishedAt": "2024-04-10T14:01:00Z",
      "content": "Our 93-year-old bad boy associate sports editor has long drawn outrage for his hot takes on the world of cricket and equestrianismbut his body will be all yours if you donate upwards of 80,000 clicks… [+10 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Indian Express"
      },
      "author": "Sports Desk",
      "title": "T20 World Cup: No Virat Kohli or Hardik Pandya, so which players did Sanjay Manjrekar pick in his India 15?",
      "description": "Sanjay Manjrekar's 15-member side for the T20 World Cup had three wicketkeepers: Rishabh Pant, KL Rahul and Sanju Samson.",
      "url": "https://indianexpress.com/article/sports/cricket/t20-world-cup-virat-kohli-hardik-pandya-sanjay-manjrekar-india-team-9291825/",
      "urlToImage": "https://images.indianexpress.com/2024/04/Kohli-59.jpg",
      "publishedAt": "2024-04-26T10:01:03Z",
      "content": "Former India cricketer Sanjay Manjrekar recently named his 15-member Indian team for the T20 World Cup, which had more than a few surprises. The Mumbai cricket stalwart who is now an analyst chose to… [+2149 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Vanity Fair"
      },
      "author": "Bess Levin",
      "title": "Kristi Noem Doubles Down on Decision to Kill Family Dog, Adds That She Killed 3 Horses “a Few Weeks Ago”",
      "description": "Cricket was a 14-month-old puppy.",
      "url": "https://www.vanityfair.com/news/kristi-noem-doubles-down-on-decision-to-kill-family-dog-adds-that-she-killed-3-horses-a-few-weeks-ago",
      "urlToImage": "https://media.vanityfair.com/photos/6630147a8ac63e7c6ac0ca4a/16:9/w_1280,c_limit/1482257901",
      "publishedAt": "2024-04-29T21:49:23Z",
      "content": "Days after it was revealed that her new book includes a graphic account of her killing a pet dog (and goat), South Dakota governor Kristi Noem has doubled down on having committed pooch-icide, claimi… [+1935 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Techviral.net"
      },
      "author": "TechViral Staff",
      "title": "Real Cricket 20 Download for PC (All Methods)",
      "description": "There are many cricket games made for Android and iPhone, but the one we play the most is Real Cricket 20. This game is a paradise for cricket lovers since it never fails to provide an authentic, complete, and surreal Cricket experience. Due to its amazing ga…",
      "url": "https://techviral.net/real-cricket-20-download-for-pc/",
      "urlToImage": "https://techviral.net/wp-content/uploads/2024/04/Real-Cricket-20-BlueStacks-3.jpg",
      "publishedAt": "2024-04-12T17:57:06Z",
      "content": "There are many cricket games made for Android and iPhone, but the one we play the most is Real Cricket 20.\r\nThis game is a paradise for cricket lovers since it never fails to provide an authentic, co… [+4326 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sky Sports"
      },
      "author": "Adam Bate",
      "title": "Man City out of CL after penalty shoot-out defeat to Real Madrid",
      "description": "Holders Manchester City are out of the Champions League following a penalty shoot-out defeat to Real Madrid in an epic encounter at the Etihad Stadium.",
      "url": "https://www.skysports.com/football/news/11095/13116432/man-city-1-1-real-madrid-agg-4-4-madrid-win-4-3-on-pens-champions-league-holders-out-after-epic-quarter-final",
      "urlToImage": "https://e0.365dm.com/24/04/1600x900/skysports-champions-league_6524900.jpg?20240417225455",
      "publishedAt": "2024-04-17T21:00:00Z",
      "content": "Holders Manchester City are out of the Champions League following a penalty shoot-out defeat to Real Madrid in an epic encounter at the Etihad Stadium.\r\nAfter a 1-1 draw on the night that left the te… [+1403 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sky Sports"
      },
      "author": "Dan Long",
      "title": "Bournemouth ease past Brighton to set new PL points record",
      "description": "Bournemouth produced a dominant display to beat Brighton 3-0 and set a club-record Premier League points total.",
      "url": "https://www.skysports.com/football/news/11661/13122806/bournemouth-3-0-brighton-andoni-iraola-s-cherries-set-club-record-premier-league-points-total-with-dominant-win",
      "urlToImage": "https://e0.365dm.com/24/04/1600x900/skysports-premier-league-bournemouth_6536461.jpg?20240428152127",
      "publishedAt": "2024-04-28T14:58:00Z",
      "content": "Bournemouth produced a dominant display to beat Brighton 3-0 and set a club-record Premier League points total.\r\nVictory at the Vitality Stadium saw Andoni Iraola's men reach 48 points - two clear of… [+1708 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Sky Sports"
      },
      "author": null,
      "title": "PSG exorcise ghost of 'la Remontada' to overcome Barcelona in CL epic",
      "description": "Luis Enrique returned to Barcelona to knock his former club out of the Champions League as Kylian Mbappe inspired Paris Saint-Germain to a pulsating 4-1 second-leg victory, winning 6-4 on aggregate.",
      "url": "https://www.skysports.com/football/news/11095/13116373/barcelona-1-4-paris-saint-germain-agg-4-6-kylian-mbappe-stars-as-ligue-1-side-win-champions-league-epic",
      "urlToImage": "https://e0.365dm.com/24/04/1600x900/skysports-mbappe-psg-barcelona_6523813.jpg?20240416215959",
      "publishedAt": "2024-04-16T21:00:00Z",
      "content": "Luis Enrique returned to Barcelona to knock his former club out of the Champions League as Kylian Mbappe inspired Paris Saint-Germain to a pulsating 4-1 second-leg victory, winning 6-4 on aggregate.\r… [+1688 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Daily Beast"
      },
      "author": "Michael Daly",
      "title": "Stop Making Excuses, Kristi Noem. That Dog Won’t Hunt.",
      "description": "Jonathan Ernst/Reuters\r\nSouth Dakota Gov. Kristi Noem wants it known: It wasn’t easy for her to kill her 14-month-old wirehaired pointer, Cricket, for aggressive behavior.“But often the easy way isn't the right way,” the Republican wrote on X on Sunday as she…",
      "url": "https://www.thedailybeast.com/kristi-noem-stop-making-excuses-about-killing-cricket",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1044,w_1856,x_0,y_335/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1714364786/2023-09-09T021927Z_1859001393_RC2Q43AQA878_RTRMADP_3_USA-TRUMP_fn46f2",
      "publishedAt": "2024-04-29T04:30:28Z",
      "content": "South Dakota Gov. Kristi Noem wants it known: It wasnt easy for her to kill her 14-month-old wirehaired pointer, Cricket, for aggressive behavior.\r\nBut often the easy way isn't the right way, the Rep… [+3323 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNA"
      },
      "author": null,
      "title": "Start-ups behind sustainable aviation fuel and cricket snacks win S$1m in funding each",
      "description": "Cricket One, a Vietnamese food technology start-up, and clean aviation fuels venture GAFT from the Netherlands were the top winners of The Liveability Challenge 2024.",
      "url": "https://www.channelnewsasia.com/singapore/cricket-insect-snacks-food-sustainable-aviation-fuel-start-ups-winners-liveability-challenge-4274816",
      "urlToImage": "https://onecms-res.cloudinary.com/image/upload/s--NNpRBNKi--/c_crop,h_724,w_1287,x_142,y_87/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/mediacorp/cna/image/2024/04/18/screenshot_2024-04-18_155917.png?itok=iM72XTrA",
      "publishedAt": "2024-04-18T08:46:44Z",
      "content": "MAKING ALTERNATIVE JET FUEL\r\nGAFT, which stands for Green Air Fuel Technology, aims to reduce greenhouse gas emissions a big issue in aviation by replacing conventional jet fuel with an alternative t… [+2210 chars]"
    },
    
  ]
  constructor(){
    super();
    console.log("Hello i am a Constructor of Badal Sahoo DailySambad project");
    this.state = {
      articles : this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h1>Daily Sambad Top Headlines</h1>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return  <div className="col-md-3" key={element.url}>
                    <NewsItem title={element.title.slice(0,25)} description={element.description.slice(0,50)} imgUrl={element.urlToImage}newsUrl={element.url}/>
                  </div>
        })}
          
        </div>
      </div>
    )
  }
}

export default News
