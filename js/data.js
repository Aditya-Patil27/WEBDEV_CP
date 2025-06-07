// Data management functions for the Sports Department website

// Function to fetch players data
async function fetchPlayers() {
    // In a real application, this would fetch from an API or JSON file
    // Here we're using a static array for demonstration
    return [
        {
            id: 1,
            name: "Sachin Tendulkar",
            sport: "Cricket",
            image: "assets/images/sachin.png",
            shortDescription: "Known as the 'God of Cricket', Sachin is widely regarded as one of the greatest batsmen in cricket history.",
            achievements: 100,
            yearsActive: "1989-2013",
            biography: "Sachin Ramesh Tendulkar is a former Indian international cricketer who served as captain of the Indian national team. He is widely regarded as one of the greatest batsmen in the history of cricket. He is the highest run scorer of all time in international cricket, and the only player to have scored one hundred international centuries.",
            careerHighlights: [
                "First player to score a double century in ODI cricket",
                "Only player to complete more than 30,000 runs in international cricket",
                "Most centuries in both Test cricket (51) and ODI cricket (49)",
                "Received the Rajiv Gandhi Khel Ratna, India's highest sporting honor, in 1997-98"
            ],
            awards: [
                "Bharat Ratna (2014)",
                "Rajiv Gandhi Khel Ratna (1997-98)",
                "Padma Vibhushan (2008)",
                "Padma Shri (1999)",
                "Wisden Cricketer of the Year (1997)"
            ],
            medals: [
                { name: "ICC World Cup 2011", type: "gold" },
                { name: "ICC Champions Trophy", type: "silver" }
            ]
        },
        {
            id: 2,
            name: "Major Dhyan Chand",
            sport: "Hockey",
            image: "assets/images/dhyan-chand.png",
            shortDescription: "Known as 'The Wizard', he is widely considered to be the greatest field hockey player of all time.",
            achievements: 3,
            yearsActive: "1926-1949",
            biography: "Major Dhyan Chand was an Indian field hockey player widely regarded as one of the greatest in the history of the sport. He was known for his extraordinary ball control and goal-scoring feats. His influence on Indian hockey was so profound that National Sports Day in India is celebrated on his birthday, 29 August.",
            careerHighlights: [
                "Three Olympic gold medals (1928, 1932, and 1936)",
                "Scored over 400 goals in his international career",
                "In the 1932 Olympics, he scored 12 goals in two matches",
                "Scored 101 goals in the tour to New Zealand in 1935"
            ],
            awards: [
                "Padma Bhushan (1956)",
                "The Dhyan Chand Award, India's highest award for lifetime achievement in sports, is named after him",
                "National Sports Day celebrated on his birthday"
            ],
            medals: [
                { name: "Olympic Gold 1928", type: "gold" },
                { name: "Olympic Gold 1932", type: "gold" },
                { name: "Olympic Gold 1936", type: "gold" }
            ]
        },
        {
            id: 3,
            name: "P.V. Sindhu",
            sport: "Badminton",
            image: "assets/images/sindhu.png",
            shortDescription: "First Indian to become the Badminton World Champion and the only Indian to win two consecutive Olympic medals.",
            achievements: 5,
            yearsActive: "2009-Present",
            biography: "Pusarla Venkata Sindhu is an Indian badminton player who has established herself as one of the top athletes in the world. She became the first Indian to win the BWF World Championships gold in 2019 and is also the first Indian woman to win two consecutive Olympic medals, with silver at the 2016 Rio Olympics and bronze at the 2020 Tokyo Olympics.",
            careerHighlights: [
                "Silver medal at the 2016 Rio Olympics",
                "Bronze medal at the 2020 Tokyo Olympics",
                "Gold medal at the 2019 BWF World Championships",
                "Silver medals at the 2017 and 2018 World Championships",
                "Gold at the 2018 Commonwealth Games"
            ],
            awards: [
                "Padma Bhushan (2020)",
                "Rajiv Gandhi Khel Ratna (2016)",
                "Padma Shri (2015)",
                "Arjuna Award (2013)"
            ],
            medals: [
                { name: "Olympic Silver 2016", type: "silver" },
                { name: "Olympic Bronze 2020", type: "bronze" },
                { name: "World Championship Gold 2019", type: "gold" }
            ]
        },
        {
            id: 4,
            name: "Viswanathan Anand",
            sport: "Chess",
            image: "assets/images/anand.png",
            shortDescription: "India's first chess grandmaster and five-time world chess champion.",
            achievements: 5,
            yearsActive: "1988-Present",
            biography: "Viswanathan Anand is an Indian chess grandmaster and a five-time world chess champion. He became India's first grandmaster in 1988 and dominated the chess world for decades. Known for his quick tactical gameplay, Anand was the undisputed World Chess Champion from 2007 to 2013 and continues to be one of the top players in the world.",
            careerHighlights: [
                "World Chess Champion in 2000, 2007, 2008, 2010, and 2012",
                "First recipient of the Rajiv Gandhi Khel Ratna Award in 1991-92",
                "First Asian to become World Chess Champion",
                "Held the World No. 1 ranking multiple times"
            ],
            awards: [
                "Padma Vibhushan (2007)",
                "Padma Bhushan (2000)",
                "Padma Shri (1987)",
                "Rajiv Gandhi Khel Ratna (1991-92)",
                "Chess Oscar (1997, 1998, 2003, 2004, 2007, 2008)"
            ],
            medals: [
                { name: "World Chess Championship 2000", type: "gold" },
                { name: "World Chess Championship 2007", type: "gold" },
                { name: "World Chess Championship 2008", type: "gold" }
            ]
        },
        {
            id: 5,
            name: "Milkha Singh",
            sport: "Athletics",
            image: "assets/images/milkha.png",
            shortDescription: "Known as 'The Flying Sikh', he was the first Indian athlete to win an individual athletics gold medal at the Commonwealth Games.",
            achievements: 4,
            yearsActive: "1958-1964",
            biography: "Milkha Singh was an Indian track and field sprinter who was the first Indian male athlete to reach the final of an Olympic athletics event. He represented India in the 1956, 1960, and 1964 Olympics. Singh's story of perseverance and triumph over adversity has inspired generations of Indian athletes.",
            careerHighlights: [
                "Gold medal in the 400m at the 1958 Asian Games",
                "Gold medal in the 400m at the 1962 Asian Games",
                "Gold medal in the 400m at the 1958 Commonwealth Games",
                "Fourth place in the 400m final at the 1960 Rome Olympics, missing a bronze medal by 0.1 seconds"
            ],
            awards: [
                "Padma Shri (1959)",
                "Represented India in three Olympic Games"
            ],
            medals: [
                { name: "Commonwealth Games 1958", type: "gold" },
                { name: "Asian Games 1958", type: "gold" },
                { name: "Asian Games 1962", type: "gold" }
            ]
        },
        {
            id: 6,
            name: "Mary Kom",
            sport: "Boxing",
            image: "assets/images/mary-kom.png",
            shortDescription: "The only boxer to win eight World Championship medals and the only female boxer to have won a medal in each of the seven world championships.",
            achievements: 8,
            yearsActive: "2000-Present",
            biography: "Mangte Chungneijang Mary Kom is an Indian Olympic boxer and politician. She is the only female boxer to have won a medal in each of the first seven World Championships, and the only boxer to win eight World Championship medals. She became the first Indian female boxer to win a gold medal at the 2018 Commonwealth Games and is the only boxer to win the World Amateur Boxing Championship six times.",
            careerHighlights: [
                "Six-time World Amateur Boxing Champion",
                "Olympic Bronze Medalist (2012 London)",
                "Commonwealth Games Gold Medal (2018)",
                "Asian Games Gold Medal (2014)"
            ],
            awards: [
                "Padma Vibhushan (2020)",
                "Padma Bhushan (2013)",
                "Padma Shri (2006)",
                "Rajiv Gandhi Khel Ratna (2009)",
                "Arjuna Award (2003)"
            ],
            medals: [
                { name: "Olympic Bronze 2012", type: "bronze" },
                { name: "World Championships Gold (6 times)", type: "gold" },
                { name: "Asian Games Gold 2014", type: "gold" }
            ]
        },
        // Current stars
        {
            id: 7,
            name: "Virat Kohli",
            sport: "Cricket",
            category: "current",
            image: "assets/images/virat.png",
            shortDescription: "One of the greatest batsmen, known for consistency and passion.",
            achievements: 80,
            yearsActive: "2008-Present",
            biography: "Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. He is widely regarded as one of the greatest batsmen of all time, and the most successful test captain of India. Kohli's aggressive batting style and leadership have transformed Indian cricket and inspired a new generation of cricketers.",
            careerHighlights: [
                "Fastest batsman to reach 10,000 ODI runs",
                "Most centuries in ODI run chases",
                "Led India to their first Test series win in Australia (2018-19)",
                "ICC Cricketer of the Year in 2017, 2018"
            ],
            awards: [
                "Padma Shri (2017)",
                "Rajiv Gandhi Khel Ratna (2018)",
                "ICC Men's Cricketer of the Decade (2011-2020)",
                "Arjuna Award (2013)"
            ],
            medals: [
                { name: "ICC Champions Trophy 2013", type: "gold" },
                { name: "ICC World Cup 2011", type: "gold" }
            ],
            stats: {
                matches: 500,
                runs: 25000,
                average: 53.5,
                centuries: 76
            }
        },
        {
            id: 8,
            name: "Harmanpreet Kaur",
            sport: "Cricket",
            category: "current",
            image: "assets/images/kaur.png",
            shortDescription: "Aggressive middle-order batter and current women's team captain.",
            achievements: 10,
            yearsActive: "2009-Present",
            biography: "Harmanpreet Kaur is an Indian cricketer who serves as the captain of the Indian Women's National Cricket Team. Known for her aggressive batting style and powerful hitting, she became the first Indian to sign a Big Bash League contract. Her innings of 171* against Australia in the 2017 Women's Cricket World Cup semi-final is considered one of the greatest in women's cricket history.",
            careerHighlights: [
                "171* against Australia in 2017 World Cup semi-final",
                "First Indian to play in overseas T20 leagues",
                "Led India to the T20 World Cup final in 2020",
                "First Indian to score a century in Women's T20Is"
            ],
            awards: [
                "Arjuna Award (2017)",
                "ICC Women's T20I Team of the Decade (2011-2020)"
            ],
            medals: [
                { name: "Asia Cup 2022", type: "gold" }
            ],
            stats: {
                matches: 270,
                runs: 6500,
                average: 35.2,
                strikeRate: 122.4
            }
        },
        {
            id: 9,
            name: "Sunil Chhetri",
            sport: "Football",
            category: "current",
            image: "assets/images/sunil.png",
            shortDescription: "Top scorer for India, revered for his leadership and fitness.",
            achievements: 15,
            yearsActive: "2002-Present",
            biography: "Sunil Chhetri is an Indian professional footballer who plays as a striker or winger and captains both the Indian Super League side Bengaluru FC and the Indian national football team. He is the third-highest international goalscorer among active players, behind only Cristiano Ronaldo and Lionel Messi. Chhetri has been instrumental in raising the profile of Indian football on the global stage.",
            careerHighlights: [
                "India's most capped player and all-time top goalscorer",
                "Led India to victory in the 2015, 2021 SAFF Championship",
                "Top scorer in the 2008 AFC Challenge Cup, helping India qualify for the 2011 AFC Asian Cup",
                "Scored in three Asian Cup tournaments"
            ],
            awards: [
                "Padma Shri (2019)",
                "Arjuna Award (2011)",
                "AIFF Player of the Year (7 times)",
                "Asian Icon by AFC (2018)"
            ],
            medals: [
                { name: "SAFF Championship 2021", type: "gold" },
                { name: "Intercontinental Cup 2018", type: "gold" }
            ],
            stats: {
                caps: 145,
                goals: 93,
                position: "Forward",
                club: "Bengaluru FC"
            }
        },
        {
            id: 10,
            name: "Gurpreet Singh Sandhu",
            sport: "Football",
            category: "current",
            image: "assets/images/sandhu.png",
            shortDescription: "India's top goalkeeper with European league experience.",
            achievements: 7,
            yearsActive: "2010-Present",
            biography: "Gurpreet Singh Sandhu is an Indian professional footballer who plays as a goalkeeper for Bengaluru FC in the Indian Super League and the Indian national team. He became the first Indian footballer to play in the UEFA Europa League while at Norwegian club Stabæk. Known for his excellent reflexes and commanding presence, he is widely regarded as one of Asia's best goalkeepers.",
            careerHighlights: [
                "First Indian to play in the UEFA Europa League",
                "First Indian to play in a European top division league",
                "Golden Glove winner in the Indian Super League",
                "Kept clean sheet against Qatar in 2022 FIFA World Cup qualifier"
            ],
            awards: [
                "AIFF Player of the Year (2019-20)",
                "Arjuna Award (2019)"
            ],
            medals: [
                { name: "SAFF Championship 2021", type: "gold" },
                { name: "Intercontinental Cup 2018", type: "gold" }
            ],
            stats: {
                caps: 65,
                cleanSheets: 25,
                position: "Goalkeeper",
                club: "Bengaluru FC"
            }
        },
        {
            id: 11,
            name: "Neeraj Chopra",
            sport: "Javelin Throw",
            category: "current",
            image: "assets/images/neeraj.png",
            shortDescription: "India's first Olympic gold medalist in athletics, known for his powerful throws.",
            achievements: 9,
            yearsActive: "2016-Present",
            biography: "Neeraj Chopra is an Indian track and field athlete who competes in the javelin throw. As of 2022, he is the Olympic gold medalist, World Championships silver medalist, and Diamond League champion. He is the first Asian athlete to win an Olympic gold medal in men's javelin throw and the first track and field athlete from India to win at the Olympics. His gold medal in Tokyo 2020 is India's first in athletics since independence.",
            careerHighlights: [
                "Gold medal at 2020 Tokyo Olympics (first athletics gold for India)",
                "Silver medal at 2022 World Athletics Championships",
                "Gold medal at 2018 Commonwealth Games and Asian Games",
                "Diamond League champion 2022"
            ],
            awards: [
                "Major Dhyan Chand Khel Ratna (2021)",
                "Padma Shri (2022)",
                "Arjuna Award (2018)",
                "Vishisht Seva Medal (2020)"
            ],
            medals: [
                { name: "Olympic Gold 2020", type: "gold" },
                { name: "World Championship Silver 2022", type: "silver" },
                { name: "Asian Games Gold 2018", type: "gold" }
            ],
            stats: {
                personalBest: 89.94,
                seasonBest: 88.17,
                worldRanking: 1,
                competitions: 35,
                wins: 30
            }
        },
        {
            id: 12,
            name: "Hima Das",
            sport: "400m Sprint",
            category: "current",
            image: "assets/images/hima.png",
            shortDescription: "Known as the 'Dhing Express', she's the first Indian athlete to win gold at an IAAF U20 championship.",
            achievements: 6,
            yearsActive: "2018-Present",
            biography: "Hima Das is an Indian sprinter from Assam who competes in the 400 metres event. She is the first Indian athlete to win a gold medal in a track event at the IAAF World U20 Championships. Nicknamed the 'Dhing Express' after her native town, she has inspired many young athletes from rural India to pursue athletics professionally.",
            careerHighlights: [
                "Gold medal at 2018 World U20 Championships in 400m",
                "Silver medal at 2018 Asian Games in 400m",
                "Gold medals at 2018 Asian Games as part of 4×400m mixed relay team",
                "Won five gold medals in various European competitions in July 2019"
            ],
            awards: [
                "Arjuna Award (2018)",
                "Appointed as Deputy Superintendent of Police by Assam government"
            ],
            medals: [
                { name: "World U20 Championship Gold 2018", type: "gold" },
                { name: "Asian Games Silver 2018", type: "silver" },
                { name: "Asian Games Relay Gold 2018", type: "gold" }
            ],
            stats: {
                personalBest: "50.79s",
                nationalRecord: true,
                age: 24,
                worldRanking: 42
            }
        },
        {
            id: 13,
            name: "Abhinav Bindra",
            sport: "Shooting",
            category: "current",
            image: "assets/images/bindra.png",
            shortDescription: "India's first individual Olympic gold medalist.",
            achievements: 11,
            yearsActive: "1998-2016",
            biography: "Abhinav Bindra is a retired Indian shooter and businessman. He is the first Indian to win an individual Olympic gold medal, claiming the top spot in the 10m Air Rifle event at the 2008 Beijing Games. Known for his meticulous preparation and mental toughness, Bindra has been an inspiration for many Indian athletes. After his retirement, he continues to contribute to sports through the Abhinav Bindra Foundation, which helps identify and nurture sporting talent.",
            careerHighlights: [
                "Gold medal at 2008 Beijing Olympics in 10m Air Rifle",
                "Gold medal at 2014 Commonwealth Games",
                "World Championship gold in 2006",
                "Asian Games gold in 2014"
            ],
            awards: [
                "Padma Bhushan (2009)",
                "Rajiv Gandhi Khel Ratna (2001)",
                "Arjuna Award (2000)",
                "Blue Cross, ISSF's highest shooting honor"
            ],
            medals: [
                { name: "Olympic Gold 2008", type: "gold" },
                { name: "World Championship Gold 2006", type: "gold" },
                { name: "Commonwealth Games Gold 2014", type: "gold" }
            ],
            stats: {
                finalScore: 700.5,
                personalBest: 704.6,
                worldRankingAtWin: 3
            }
        }
    ];
}

// Function to fetch events data
async function fetchEvents() {
    // In a real application, this would fetch from an API or JSON file
    return [
        {
            id: 1,
            title: "National Athletics Championship",
            date: "August 15-20, 2024",
            location: "Jawaharlal Nehru Stadium, New Delhi",
            description: "Annual national athletics championship featuring top athletes from across India competing in track and field events.",
            image: "assets/images/event1.png",
            category: "athletics",
            registrationOpen: true
        },
        {
            id: 2,
            title: "All India Football Tournament",
            date: "September 5-15, 2024",
            location: "Salt Lake Stadium, Kolkata",
            description: "Premier football tournament bringing together the best football clubs from across the country.",
            image: "assets/images/event2.png",
            category: "football",
            registrationOpen: true
        },
        {
            id: 3,
            title: "National Swimming Championship",
            date: "July 28-30, 2024",
            location: "SPM Swimming Pool Complex, Delhi",
            description: "National level swimming competition with participants from all states and union territories.",
            image: "assets/images/event3.png",
            category: "swimming",
            registrationOpen: false
        },
        {
            id: 4,
            title: "India Open Badminton",
            date: "October 10-15, 2024",
            location: "Indira Gandhi Stadium, New Delhi",
            description: "BWF World Tour Super 500 event featuring top international badminton players.",
            image: "assets/images/event4.png",
            category: "badminton",
            registrationOpen: true
        },
        {
            id: 5,
            title: "National Chess Championship",
            date: "November 5-12, 2024",
            location: "Taj Hotel, Mumbai",
            description: "The premier chess event in India bringing together the brightest chess talents to compete for the national title.",
            image: "assets/images/event5.png",
            category: "chess",
            registrationOpen: true
        },
        {
            id: 6,
            title: "Pro Kabaddi League Season 12",
            date: "December 20, 2024 - February 15, 2025",
            location: "Multiple venues across India",
            description: "India's premier kabaddi league featuring the best kabaddi players from India and around the world.",
            image: "assets/images/event6.png",
            category: "kabaddi",
            registrationOpen: false
        }
    ];
}

// Function to fetch news data
async function fetchNews() {
    // In a real application, this would fetch from an API
    // For demo purposes, we're using static data
    return [
        {
            id: 1,
            title: "National Sports Awards Announced",
            content: "The Ministry of Youth Affairs and Sports has announced the National Sports Awards for the year 2024. The awards will be presented by the President of India on August 29th, which marks National Sports Day. This year's recipients include several Olympic medalists and emerging talents across various sports disciplines. The Khel Ratna Award, India's highest sporting honor, will be given to exceptional athletes who have demonstrated outstanding performance over the past year. The ceremony will be held at the Rashtrapati Bhavan with strict COVID-19 protocols in place. Several sports legends and government officials are expected to attend this prestigious event.",
            date: "July 15, 2024",
            image: "assets/images/event1.png",
            category: "announcement"
        },
        {
            id: 2,
            title: "India Wins Gold at Asian Games",
            content: "Indian athletes secured 5 gold medals at the recent Asian Games, making it the country's best performance in the history of the event. The medal haul came from various sports including athletics, shooting, wrestling, and badminton. The Indian contingent showed remarkable improvement compared to previous editions, finishing in the top 5 of the medal tally. The success is attributed to increased government support, better training facilities, and the dedication of the athletes. The Prime Minister congratulated the team for bringing glory to the nation and announced special rewards for the medalists. Sports analysts believe this performance will boost India's prospects for the upcoming Olympic Games.",
            date: "June 28, 2024",
            image: "assets/images/event2.png",
            category: "achievement"
        },
        {
            id: 3,
            title: "New Training Center Inauguration",
            content: "A state-of-the-art sports training center has been inaugurated in Delhi, providing facilities for athletes across multiple disciplines. The center features Olympic-standard swimming pools, indoor courts for badminton and basketball, a modern gymnasium, and specialized training areas for combat sports. International coaches have been appointed to work with elite athletes. The facility also includes sports science laboratories, physiotherapy units, and nutrition centers to provide comprehensive support to athletes. This development is part of the government's initiative to enhance sports infrastructure across the country and nurture talent from grassroots levels. The center will serve as a national hub for training camps and talent identification programs.",
            date: "June 15, 2024",
            image: "assets/images/event3.png",
            category: "facility"
        },
        {
            id: 4,
            title: "National Cricket Team Announces Tour Schedule",
            content: "The national cricket team has announced an extensive tour schedule for the upcoming season, including test matches, ODIs, and T20 series against top international teams. The schedule includes home series against Australia and England, followed by away tours to South Africa and New Zealand. This will be a crucial period for the team as they prepare for the World Test Championship final. Several young players have been included in the squad, signaling a transition phase. The selection committee has emphasized the importance of workload management for key players. Cricket enthusiasts across the country are excited about the high-profile matches scheduled at various venues.",
            date: "June 10, 2024",
            image: "assets/images/event4.png",
            category: "announcement"
        },
        {
            id: 5,
            title: "Youth Olympics Qualification Tournament",
            content: "Indian junior athletes are gearing up for the Youth Olympics qualification tournament to be held next month. The contingent includes promising talents in gymnastics, swimming, athletics, and shooting. The sports ministry has provided special grants for training camps and international exposure. Coaches are optimistic about India's chances of securing the highest-ever number of Youth Olympic quotas. Several of these young athletes have already set national records in their respective age categories. The Youth Olympics serve as an important stepping stone for future Olympic champions, and India's focus on junior development programs is expected to yield long-term benefits for the country's sporting ecosystem.",
            date: "May 22, 2024",
            image: "assets/images/event5.png",
            category: "event"
        },
        {
            id: 6,
            title: "Sports Science Research Program Launched",
            content: "The Department of Sports has launched a comprehensive sports science research program in collaboration with leading universities. The initiative aims to enhance athletic performance through scientific methods and innovations. Areas of focus include biomechanics, sports nutrition, psychology, and injury prevention. International experts have been roped in to guide the research activities. The findings will be directly applied to training methodologies for elite athletes. This marks a significant shift towards evidence-based approaches in sports development. The program will also create opportunities for sports science graduates and researchers who wish to contribute to India's sporting success.",
            date: "May 15, 2024",
            image: "assets/images/event6.png",
            category: "program"
        },
        {
            id: 7,
            title: "National Para Games Concludes",
            content: "The 5th National Para Games concluded with record participation and several outstanding performances. Over 1,500 athletes competed across 18 sports disciplines, setting numerous national records. The event highlighted the immense talent and determination of para-athletes from across the country. The games were organized with world-class facilities and accommodations for all participants. Medal winners were promised government support for international competitions. The success of these games has raised expectations for India's performance in the upcoming Paralympics. The event also helped identify new talent from regions that have traditionally been underrepresented in para sports.",
            date: "April 30, 2024",
            image: "assets/images/sports.png",
            category: "event"
        },
        {
            id: 8,
            title: "Sports Budget Increased by 20%",
            content: "The government has announced a 20% increase in the sports budget for the upcoming fiscal year. The additional funds will be allocated for infrastructure development, athlete support, and grassroots programs. Special emphasis will be placed on promoting sports in rural areas and among underprivileged communities. The budget includes provisions for stipends to promising athletes and coaching grants. International exposure trips and competition participation will also receive greater financial support. This significant budget enhancement demonstrates the government's commitment to establishing India as a sporting powerhouse. Sports administrators have welcomed this move, citing the positive impact it will have on all aspects of sports development.",
            date: "April 10, 2024",
            image: "assets/images/about-sports.png",
            category: "announcement"
        },
        {
            id: 9,
            title: "National Basketball Team Qualifies for World Cup",
            content: "In a historic achievement, the Indian men's basketball team has qualified for the FIBA Basketball World Cup for the first time. The team secured their berth with crucial victories in the qualification tournament. This milestone comes after decades of development efforts in basketball. The qualification is expected to boost the popularity of basketball across the country and inspire young players. Corporate sponsorships for basketball programs have already seen an increase following this achievement. The team will now undergo intensive training camps with international coaches to prepare for the World Cup. Basketball federation officials have termed this as a watershed moment for the sport in India.",
            date: "March 25, 2024",
            image: "assets/images/neeraj.png",
            category: "achievement"
        },
        {
            id: 10,
            title: "Sports University Admissions Begin",
            content: "Admissions for the new academic year have begun at the National Sports University. The university offers specialized programs in sports coaching, management, science, and physical education. This year sees the introduction of new courses in sports technology and analytics. The curriculum has been designed in collaboration with international sports institutions. State-of-the-art facilities are available for practical training alongside academic learning. Scholarship opportunities are available for athletes with national and international achievements. The university aims to create a new generation of sports professionals who will contribute to India's sporting ecosystem in various capacities. Information sessions are being held across the country to guide prospective students about career opportunities in sports.",
            date: "March 15, 2024",
            image: "assets/images/bindra.png",
            category: "program"
        }
    ];
} 