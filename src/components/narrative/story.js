//slide 1
import _1_IntroText from "./slide1/intro_text";
// slide 2
import _2_MajorProblems from "./slide2/major_problems";
// slide 3
import _3_CaseStudyDisplay from "./slide3/case_study_display";
//slide 4
import _4_NycOverBuilt from "./slide4/nyc_is_overbuilt";
//slide 5
import _5_MetroHousingCosts from "./slide5/metro_housing_costs";
//slide 6
import _6_HousingMarkets from "./slide6/housing_markets";
//slide 7
import _7_Competition from "./slide7/competition";
//slide 8
import _8_WhatsNotDrivingCosts from "./slide8/whats_not_driving_costs";
//slide 9
import _9_SFHOverbuilding from "./slide9/sfh_bubble";
//slide 10
import _10_conclusion from "./slide10/conclusion";


// make slide designations relative so they are easier to change
import s from "./storyStarts";

const story = [
  {
    section: 'intro',
    start: 0,
    center: s._2_strt - 4,
    end: s._2_strt,
    theme: 'MainIdeasTeal',
    display: {
      component: _1_IntroText,
      transition: ['sticky', 'bounce'],
      start: 0,
      end: s._2_strt - 3
    },
    background: {
      image: require('./slide1/background.svg'),
      xCenter: '19%',
      yCenter: '43%',
      transition: ['sticky', 'bounce'],
      start: 0,
      end: s._2_strt - 1
    }
  },
  {
    section: 'overview of key issues',
    start: s._2_strt,
    center: s._3_strt - 1,
    end: s._3_strt, // make default if nothing set to slide
    theme: 'MainIdeasTeal',
    display: {
      component: _2_MajorProblems,
      transition: ['sticky', 'bounce'],
      start: s._2_strt,
      end: s._3_strt - 1
    },
    discuss: [
      {
        text: `
          Aspiring real estate developers are increasingly limited in their ability to acquire the level of capital to develop in urban contexts. Government incentives to encourage homeownership have framed the real estate lending market around those interested in building single-detached housing. The costs of real estate increase cyclically. The less developers involved, the less risky projects undertaken, which results in more consistent returns. Lower risks justify higher cap ratios, which result in higher valuations, retaining and passing more of the value to those who have historically held property in cities. 

          These financing hurtles present major barriers to entry in the urban real estate market, curtailing the economic players to wealthy family operations or large multinational corporations. 
        `,
        start: s._2_strt + 2,
        end: s._2_strt + 3
      },
      {
        text: `
          There is also a significant misalignment of incentives between local stakeholders and new stakeholders. Economists, like Ed Glaeser, suggest that housing market inefficiencies stem from regulatory stranglehold. While true, there are deeper causes that incentivize the creation of regulation and zoning that stymies development. Current owners have significant incentives to curtail new development, be they individual families, or a limited number of property developers. Existing owners of property are concerned with the housing values maintaining as they are. Housing value is a function of rents, so local rental rates have a direct impact on an owner’s home valuation. As a result local owners have incentives to actively block new development if it may mean lower local rents. Due to the way our political structure works, an owner has significant power over the development that happens in their neighborhood, but little say in what happens in other neighborhoods. When ownership is concentrated and localized in any form, nimbyism thrives. Similarly, when ownership is concentrated in an area among only a handful of developers, such developers have reasons to block new development in an area, unless it is responding to demand at current prices. The most extreme case of nimbyism is in San Francisco, where building heights are maintained at low densities throughout the city. 
        `,
        start: s._2_strt + 4,
        end: s._2_strt + 5
      }
    ]
  },
  {
    section: 'case study: houston',
    start: s._3_strt,
    center: s._4_strt - 1,
    end: s._4_strt, // make default if nothing set to slide
    theme: 'caseStudyGrey',
    title: [
      {
        text: 'houston has grown tremendously',
        start: s._3_strt,
        end: s._3_strt + 3
      },
      {
        text: 'but this growth has been outward',
        start: s._3_strt + 3,
        end: s._3_strt + 6
      }
    ],
    display: {
      component: _3_CaseStudyDisplay,
      transition: ['sticky', 'bounce'],
      start: s._3_strt,
      end: s._3_strt + 6
    },
    discuss: [
      {
        text: `
          Houston provides an interesting case study. The city has grown tremendously over the last century. 
          As a result it recently became the 4th largest city in the country. 
          `,
        start: s._3_strt,
        end: s._3_strt + 2
      },
      {
        text: `
          Houston now occupies an area that could fit the cities of DC, Chicago,
          Boston, Santa Barbra, Manhattan, and San Francisco within it.
        `,
        start: s._3_strt + 2,
        end: s._3_strt + 6
      }
    ],
    source: [
      {
        text: 'U.S. Census Bureau ',
        start: s._3_strt,
        end: s._3_strt + 3
      }
    ]
  },
  {
    section: 'case study: nyc',
    start: s._4_strt,
    center: s._5_strt - 1,
    end: s._5_strt,
    theme: 'dataStatsWhite',
    display: {
      component: _4_NycOverBuilt,
      transition: ['sticky', 'bounce'],
      start: s._4_strt,
      end: s._4_strt + 6
    },
    title: [
      {
        text: 'NYC is overpriced, not overbuilt',
        start: s._4_strt,
        end: s._4_strt + 5
      }
    ],
    discuss: [
      {
        text: `
          NYC is the most expensive city to develop in, but it has relatively cheaper housing than SF, DC, and Seattle. It has more supply, both horizontally and vertically because significant urban/multi-family development occurred before the advent of the car and the mortgage financing apparatus was created and because much of the city was hollowed out during the suburbanization that occurred in the later half of the 20th century. Thus there has been significant potential for infill development to absorb demand. 
        `,
        start: s._4_strt,
        end: s._4_strt + 3
      },
      {
        text: `
          70% of the current housing stock was built before 1950, after the advent of the car, and after Fannie Mae went public. While having an historically large stock of housing has helped NYC remain relatively affordable, when compared to peer cities, new development has only occurred in areas where condo/co-op ownership is already low. The massive potential for infill development has helped buoy New York as demand in the city surged. But relative to demand, little new residential development has taken place in nyc. The idea that NYC, the majority of whose housing stock is many decades old, is overbuilt because rental prices are falling is silly, NYC is overpriced, not overbuilt.  The population has started to decline because rents are too high, not because there is insufficient demand.
        `,
        start: s._4_strt + 3,
        end: s._4_strt + 5
      }
    ],
    source: [
      {
        text: 'department of buildings, nyc',
        start: s._4_strt,
        end: s._4_strt + 6
      }
    ]
  },
  {
    section: 'metro housing costs',
    start: s._5_strt,
    center: s._6_strt - 1,
    end: s._6_strt, // make default if nothing set to slide
    theme: 'dataStatsWhite',
    title: [
      {
        text: 'housing costs in houston have remained flat',
        start: s._5_strt,
        end: s._5_strt + 3
      },
      {
        text: 'while costs in dense cities have skyrockted',
        start: s._5_strt + 3,
        end: s._5_strt + 6
      }
    ],
    display: {
      component: _5_MetroHousingCosts,
      transition: ['sticky', 'bounce'],
      start: s._5_strt + 1,
      end: s._5_strt + 6
    },
    discuss: [
      {
        text: `
            Despite its tremendous growth, the costs for housing remain relatively flat in Houston. While housing costs in cities like San Francisco and New York have seen an upward cycle of boom and bust. 
        `,
        start: s._5_strt + 1,
        end: s._5_strt + 4
      },
      {
        text: `
            It’s true that limited regulation in Houston has enabled the city’s growth to occur without increases in housing prices, but it’s important to recognize that this growth has been horizontal, primarily in the form of single detached housing.  Most of the affordable housing success stories in the U.S. were in areas like Houston, where local entrepreneurs met housing demand by rehabbing and expanding sprawling single-detached housing using financing mostly available through conventional mortgages.  They did this because such development involves less capital and because available financing for development is primarily structured around single owner-occupancy and individual family incomes. 
        `,
        start: s._5_strt + 4,
        end: s._5_strt + 6
      }
    ],
    source: [
      {
        text: 'zillow; bureu of labor statistics; the economist',
        start: s._5_strt + 1,
        end: s._5_strt + 6
      }
    ]
  },
  {
    section: 'key market segments',
    start: s._6_strt,
    center: s._7_strt - 1,
    end: s._6_strt + 15, // make default if nothing set to slide
    theme: 'MainIdeasTeal',
    display: {
      component: _6_HousingMarkets,
      transition: ['sticky', 'bounce'],
      start: s._6_strt,
      end: s._6_strt + 15
    },
    discuss: [
      {
        text: `
          Houston and San Francisco’s growth illustrates the key division in the residential markets, that between single detached housing and multi-family housing. Single detached housing is driven by supply factors, while multi-family is driven by demand side factors. 

          Where supply is abundant, relative to demand, housing costs decrease. In real estate, the market is rarely driven by supply, which is why housing as a service/good only gets more expensive. Demand is so high in most cities, that developers are able to provide increasingly expensive housing without substantially improving its quality.  The house flipping and middle-class development in the U.S. is relegated to single-detached housing, primarily because urban development is too expensive for the average aspiring developer to participate. 
        `,
        start: s._6_strt,
        end: s._6_strt + 4
      },
      {
        text: `
          In single detached housing markets like Houston, where job growth and demand is as high as other major cities, the market is driven by supply related factors. A developer is motivated by new income growth from new properties, even if greater supply may mean lower rents overall. This is primarily because the number of developers is many, due to the barriers to entry being few and surmountable.  The major barrier in Houston for entering the market as a developer is not regulation, but rather capital. Further, properties are so spread out that the chances of a developer facing a lowered income, and indirectly lowered property values, from properties they are developing is small. 
        `,
        start: s._6_strt + 4,
        end: s._6_strt + 8
      },
      {
        text: `
          Multi-family developers have a near monopoly on development in urban areas. They have little interest in building new properties if it will mean a lowering of housing values.

          In 2015, US net wealth was $80 trillion. Household ownership of real estate was $25 trillion out of a total of $31 trillion of non-financial assets. Non-financial non-corporate businesses assets were $12 trillion, of which real estate was $11 trillion. For comparison, the market value of domestic corporations was $29 trillion.
        `,
        start: s._6_strt + 8,
        end: s._6_strt + 10
      },
      {
        text: `
          Real estate exists as a significant portion of the economy. For an 80 trillion dollar market that takes a third to a half of most consumer’s incomes, the multi-family real estate market comprises a shockingly small number of suppliers.

          Conventional multi-family real estate analysts are focused on an area’s ‘absorption rate’, the rate at which available homes are sold in a specific market during a given time period. The Conventional assumption is that a developer not enter a market unless there is sufficient absorption of recently built units or low vacancy, but such an analysis assumes that current prices remain the same. If supply were to substantially increase, prices would be brought down. If supply only increases when vacancy is low, then supply only increases with demand and multi-family housing costs are set to only rise
        `,
        start: s._6_strt + 10,
        end: s._6_strt + 12
      }
    ]
  },
  {
    section: 'competition drives price',
    start: s._7_strt,
    center: s._8_strt - 1,
    end: s._7_strt + 5, // make default if nothing set to slide
    theme: 'dataStatsWhite',
    display: {
      component: _7_Competition,
      xCenter: '',
      yCenter: '',
      transition: ['sticky', 'bounce'],
      start: s._7_strt,
      end: s._7_strt + 4
    },
    title: [
      {
        text: 'competitive markets should drive down prices',
        start: s._7_strt,
        end: s._7_strt + 2
      },
      {
        text: 'but housing costs have only increased',
        start: s._7_strt + 2,
        end: s._7_strt + 4
      }
    ],
    discuss: [
      {
        text: `
          In most industries, over time, innovation and increased players on the supply-side drives down the price of a good, as competitors have incentives to innovate and supply more at lower costs, in pursuit of more income.
        `,
        start: s._7_strt,
        end: s._7_strt + 2
      },
      {
        text: `
          Food, like housing, used to take up a fourth of our income, but food costs have decreased to 12% of our income. Clothing and most goods have seen a similar trend over time. But housing has edged upwards, with 50% of renters spending over 30% of their income on housing. 
        `,
        start: s._7_strt + 2,
        end: s._7_strt + 4
      }
    ],
    source: [
      {
        text: 'usda',
        start: s._7_strt,
        end: s._7_strt + 2
      },
      {
        text: 'bureau of economic analysis',
        start: s._7_strt + 2,
        end: s._7_strt + 3
      },
      {
        text: 'census, and acs',
        start: s._7_strt + 3,
        end: s._7_strt + 4
      }
    ]
  },
  {
    section: "what isn't driving higher costs",
    start: s._8_strt,
    center: s._9_strt - 1,
    end: s._8_strt + 15,
    theme: 'dataStatsWhite',
    display: {
      component: _8_WhatsNotDrivingCosts,
      xCenter: '',
      yCenter: '',
      transition: ['sticky', 'bounce'],
      start: s._8_strt,
      end: s._8_strt + 15
    },
    title: [
      {
        text: 'housing prices have increased consistently since the 50s',
        start: s._8_strt,
        end: s._8_strt + 2
      },
      {
        text: 'despite lowering transport costs',
        start: s._8_strt + 2,
        end: s._8_strt + 4
      },
      {
        text: 'despite slowing growth rate',
        start: s._8_strt + 4,
        end: s._8_strt + 6
      },
      {
        text: 'and despite lowering densities in urban centers',
        start: s._8_strt + 6,
        end: s._8_strt + 14
      }
    ],
    discuss: [
      {
        text: `
          The key explanation of why cities are increasingly expensive is that space is a limited resource and demand is highest in the most dense places. 
        `,
        start: s._8_strt,
        end: s._8_strt + 2
      },
      {
        text: `
          But housing prices started to exponentially rise in the same period that infrastructure improved, building materials became cheaper, our transport costs lowered, and our population growth rate slowed. 
        `,
        start: s._8_strt + 2,
        end: s._8_strt + 6
      },
      {
        text: `
          There hasn't just been a slowing of population growth, prices have increased while our cities have lost density.  Not just small towns, cities like Paris, London, and even New York, have all lost density, especially after the white flight of the 60s and 70s. NYC only recovered the population it had in 1970 at the turn of the century, but never its density.
        `,
        start: s._8_strt + 6,
        end: s._8_strt + 14
      }
    ],
    source: [
      {
        text: 'dallas federal reserve',
        start: s._8_strt,
        end: s._8_strt + 2
      },
      {
        text: 'handbook of regional and urban economics',
        start: s._8_strt + 3,
        end: s._8_strt + 5
      },
      {
        text: 'world bank',
        start: s._8_strt + 5,
        end: s._8_strt + 14
      }
    ]
  },
  {
    section: '2007 housing bubble',
    start: s._9_strt,
    center: s._9_strt +4,
    end: s._9_strt + 8,
    theme: 'dataStatsWhite',
    display: {
      component: _9_SFHOverbuilding,
      xCenter: '',
      yCenter: '',
      transition: ['sticky', 'bounce'],
      start: s._9_strt,
      end: s._9_strt + 6
    },
    title: [
      {
        text: 'housing prices have increased consistently since the 50s',
        start: s._9_strt + 2,
        end: s._9_strt + 7
      }
    ],
    discuss: [
      {
        text: `
          The idea that the price of housing only ever rises is partly what brought down the housing market in 2007. Like any other good, the more of it is provided, the cheaper its rents. To avoid decreasing localized rents, the single detached housing market trades on space, but the farther housing is located from existing infrastructure, the less inherently valuable it is. Cars enable property to exist at a distance from infrastructure, but even still, there are limits to how far people can be expected to commute. These limits were pushed in 2007 as single detached development was supercharged as a result of collateralized mortgage-backed securities CMBS. Those pushing these loans worked under the assumption that property values were a constantly growing asset and didn’t properly adjust for obvious market risks. The housing bubble’s pop was felt around the globe, but the multi-family housing market in all major city centers quickly bounced back. 
        `,
        start: s._9_strt + 1,
        end: s._9_strt + 4
      },
      {
        text: `
          Because consumers spend the lion-share of their income on housing, they save and invest less in their futures. This makes consumers more vulnerable to economic downturns and is increasing inequalities. After the recession, capital in cities only became more concentrated in a yet even smaller number of developers, due to the temporarily lowered prices.  Even if we don’t see another housing bubble in the near future, the current housing market is set to put pressures across the economy, creating more economic instability. 
        `,
        start: s._9_strt + 4,
        end: s._9_strt + 6
      }
    ],
    source: [
      {
        text: 'Commercial Mortgage Alert, CRE Finance council',
        start: s._9_strt + 2,
        end: s._9_strt + 7
      }
    ]
  },
  {
    section: 'conclusion',
    start: s._10_strt,
    center: s._10_strt + 4,
    end: s._10_strt + 8,
    theme: 'MainIdeasTeal',
    display: {
      component: _10_conclusion,
      transition: ['sticky', 'bounce'],
      start: s._10_strt,
      end: s._10_strt + 2
    },
    title: [
      {
        text: 'summary',
        start: s._10_strt,
        end: s._10_strt + 4
      },
      {
        text: 'the end',
        start: s._10_strt + 4,
        end: s._10_strt + 7
      }
    ],
    background: {
      image: require('../narrative/slide1/background.svg'),
      xCenter: '-25%',
      yCenter: '43%',
      transition: ['sticky', 'bounce'],
      start: s._10_strt,
      end: s._10_strt + 7
    },
    discuss: [
      {
        text: `
          More competition is needed, and more mechanisms are needed that allow people to invest and manage their investments. One potential market-based solution to solve these problems would be public markets for real estate securities. While the equity in REITs is publicly traded, the interests they represent are reflected in only a handful of very large companies. Thus these REITs contribute to the limited number of suppliers in real estate, alongside oligarchs, and contribute to industry monopolization. Theoretically these REITs could be smaller and more mobile, but creating REITs is a significantly difficult process and it requires that a developer already have significant capital at their disposal. We need public markets that would enable capital to flow to interested new developers hoping to enter the market. Equity needs to be broadly traded such that individuals can be as invested in new development as they are in existing development, across many competing firms.
        `,
        start: s._10_strt,
        end: s._10_strt + 2
      },
      {
        text: `
          Solving these problems will lead to cheaper, better and more multi-family housing, all while distributing the profits to a broader set of stakeholders. 

          The real estate market needs significant disruption and innovation. In a competitive market with little friction for entering the market, developers would have the incentive to create new housing, even if it meant lower prices. If business continues as usual, our housing market is destined to bubble up and bust over and over again. 
        `,
        start: s._10_strt + 2,
        end: s._10_strt + 4
      },
      {
        text: `
          This is a work in progress that reflects a subsection a larger slide deck. `,
        start: s._10_strt + 4,
        end: s._10_strt + 5
      },
      {
        text: `
          Thank you for scrolling through.  `,
        start: s._10_strt + 5,
        end: s._10_strt + 7
      }
    ]
  }
];

export default story;
