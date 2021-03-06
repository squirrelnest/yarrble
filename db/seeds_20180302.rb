Location.create!([
  {nickname: "Linapacan West", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe4227646c0 "POINT (119.741391 11.424789)">, country: "Philippines"},
  {nickname: "Willikies", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe42275de60 "POINT (-61.69097900390625 17.13554114256562)">, country: "Antigua and Barbuda"},
  {nickname: "South Bay", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe42275d6e0 "POINT (9.6798894 3.4914197)">, country: "Cameroon"},
  {nickname: "Colima", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe42275cc04 "POINT (-110.97511557326668 18.73302914372239)">, country: "Mexico"},
  {nickname: "Middle of the Atlantic", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe42275c394 "POINT (-63.08340625000797 36.18235862678165)">, country: "None"},
  {nickname: "Jaws Wuz Here", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe42277daa8 "POINT (22.7983429318283 -34.71553102254125)">, country: "South Africa"},
  {nickname: "Hobbit Hole", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe42277d10c "POINT (-78.89754268127841 8.285443329056008)">, country: "Panama"},
  {nickname: "Hermit's Paradise", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe42277c324 "POINT (146.15142498386166 -18.167955047290633)">, country: "Australia"},
  {nickname: "Rainbowsky", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe4227758a8 "POINT (145.51574155951357 43.71181764442056)">, country: "Russia"},
  {nickname: "Pirate Haven", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe422775128 "POINT (53.90251754935932 24.27945360479626)">, country: "United Arab Emirates"},
  {nickname: "Crimea", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe422774a0c "POINT (29.443589489982998 45.88756288510595)">, country: "Ukraine"},
  {nickname: "Ongo river mouth", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe422774084 "POINT (9.570584762937841 3.656483832744158)">, country: "Cameroon"},
  {nickname: "Seychelles Anse Royale", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe42278d174 "POINT (55.52593231201172 -4.751624041481169)">, country: "Seychelles"},
  {nickname: "Oslo, Norway", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe42278c9f4 "POINT (10.69742202758789 59.91321349626047)">, country: "Norway"},
  {nickname: "Ao Yon, East Side of Bay", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe42278c24c "POINT (98.39561462402344 7.7953573397915035)">, country: "Thailand"},
  {nickname: "Casa Latina", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe422785a00 "POINT (-122.292871 37.8714455)">, country: "United States"},
  {nickname: "Paris, France", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe4227852e4 "POINT (2.3522219000000177 48.85661400000001)">, country: "France"},
  {nickname: "Wework Transbay", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe422784bb4 "POINT (-122.39834270000001 37.7889108)">, country: "United States"},
  {nickname: "Monkeybox", lonlat: #<RGeo::Geographic::SphericalPointImpl:0x3fe422784448 "POINT (-122.29270889999998 37.87149180000001)">, country: "United States"}
])
Review.create!([
  {content: "potatotoey", stability: 9, date_visited: "2018-02-01 13:10:00", location_id: 1, user_id: 3, safety: 8.0, aesthetics: 2.0, amenities: "3"},
  {content: "Home sweet home", stability: 8, date_visited: "2018-02-28 23:39:37", location_id: 27, user_id: 1, safety: 7.6, aesthetics: 9.2, amenities: nil},
  {content: "Russian tanks everywhere", stability: 0, date_visited: "2016-03-14 07:00:00", location_id: 15, user_id: 1, safety: 0.0, aesthetics: 0.0, amenities: nil},
  {content: "Well-protected but lots of broken glass in the sand bottom", stability: 8, date_visited: "2016-12-30 08:00:00", location_id: 20, user_id: 1, safety: 9.0, aesthetics: 9.0, amenities: nil},
  {content: "Crowded moorings and expensive hotels", stability: 5, date_visited: "2018-01-20 01:35:00", location_id: 10, user_id: 1, safety: 3.0, aesthetics: 2.0, amenities: nil},
  {content: "Well protected. Beautiful rainbows. Would come back here again.", stability: 10, date_visited: "2018-01-31 15:44:00", location_id: 6, user_id: 1, safety: 10.0, aesthetics: 3.0, amenities: nil},
  {content: "oi vey", stability: 6, date_visited: "2018-01-30 13:46:00", location_id: 1, user_id: 1, safety: 4.0, aesthetics: 5.0, amenities: nil},
  {content: "Floats my boatie", stability: 10, date_visited: "2018-01-30 13:53:00", location_id: 2, user_id: 1, safety: 4.0, aesthetics: 3.0, amenities: nil},
  {content: "yummy to my tummy", stability: 9, date_visited: "2018-01-30 14:57:00", location_id: 18, user_id: 1, safety: 4.0, aesthetics: 8.0, amenities: nil},
  {content: "Nicest people I've ever met. And bunnies.", stability: 2, date_visited: "2018-01-31 15:39:00", location_id: 9, user_id: 1, safety: 10.0, aesthetics: 1.0, amenities: nil},
  {content: "Safe harbor", stability: 5, date_visited: "2018-01-31 15:19:00", location_id: 12, user_id: 1, safety: 4.0, aesthetics: 7.0, amenities: nil},
  {content: "Rock a bye baby, rolling waves put me to sleep. Zzzzz.", stability: 5, date_visited: "2017-10-16 20:26:00", location_id: 23, user_id: 1, safety: 4.0, aesthetics: 3.0, amenities: nil},
  {content: "Great place to hang out while awaiting your turn through the Canal", stability: 9, date_visited: "2018-01-31 15:32:00", location_id: 22, user_id: 1, safety: 3.0, aesthetics: 4.0, amenities: nil},
  {content: "Water's really calm. Slept like a baby here.", stability: 9, date_visited: "2018-02-12 17:19:22", location_id: 5, user_id: 1, safety: 1.0, aesthetics: 3.0, amenities: nil},
  {content: "Great coconuts", stability: 1, date_visited: "2018-02-12 17:09:57", location_id: 12, user_id: 1, safety: 3.0, aesthetics: 2.0, amenities: nil},
  {content: "No fresh water. Dry winds from desert.", stability: 8, date_visited: "2018-01-31 16:03:00", location_id: 14, user_id: 1, safety: 7.0, aesthetics: 3.0, amenities: nil},
  {content: "Meh. Too exposed. Couldn't drink my coffee without spilling it.", stability: 1, date_visited: "2018-01-31 15:27:00", location_id: 21, user_id: 1, safety: 5.0, aesthetics: 5.0, amenities: nil},
  {content: "Way too exposed to swell", stability: 1, date_visited: "2018-01-31 12:28:00", location_id: 5, user_id: 1, safety: 6.0, aesthetics: 5.0, amenities: nil},
  {content: "Mildly irritating", stability: 9, date_visited: "2018-01-21 21:54:00", location_id: 1, user_id: 1, safety: 10.0, aesthetics: 10.0, amenities: nil},
  {content: "Beware, strong currents", stability: 1, date_visited: "2018-01-30 13:46:00", location_id: 3, user_id: 1, safety: 5.0, aesthetics: 9.0, amenities: nil},
  {content: "Smells to high hell", stability: 7, date_visited: "2017-12-04 12:59:00", location_id: 17, user_id: 1, safety: 0.0, aesthetics: 9.0, amenities: nil},
  {content: "Delicious enchiladas", stability: 2, date_visited: "2018-01-22 02:23:00", location_id: 18, user_id: 1, safety: 9.0, aesthetics: 0.0, amenities: nil},
  {content: "Sweet bananas", stability: 5, date_visited: "2018-02-08 00:58:14", location_id: 3, user_id: 1, safety: 1.0, aesthetics: 6.0, amenities: nil},
  {content: "i want to live here", stability: 10, date_visited: "2018-01-20 18:41:00", location_id: 2, user_id: 1, safety: 8.0, aesthetics: 8.0, amenities: nil},
  {content: "Glassy water. Lively coral reef with tons of fish. Behind a pearl farm and protected from swells.", stability: 10, date_visited: "2018-01-20 18:40:00", location_id: 2, user_id: 1, safety: 7.0, aesthetics: 1.0, amenities: nil},
  {content: "Hurricane hole", stability: 9, date_visited: "2018-01-20 18:29:00", location_id: 3, user_id: 1, safety: 6.0, aesthetics: 5.0, amenities: nil},
  {content: "Long way up the river", stability: 5, date_visited: "2018-02-08 00:16:27", location_id: 5, user_id: 1, safety: 0.0, aesthetics: 1.0, amenities: nil}
])
User.create!([
  {username: "abc", password_digest: "$2a$10$LxmGxDkyrNNn4QDAR/4oy.BJlkEz3tumwwEQ9/YYkrsdFtf4Siq2S", admin: false},
  {username: "amy", password_digest: "$2a$10$YcesMlSQFj2fK8BxTZNCuuSGbZNUXEPYPs5BuHlB3gsIzU6RwUw46", admin: false},
  {username: "test", password_digest: "$2a$10$qGdWy/CoWV5PqkEZB.WSLuHWw3TnLrvu1QKso4VqOkD/p5xVWYoD6", admin: true},
  {username: "grump", password_digest: "$2a$10$2fh8I9hjfq89HbWJzkXmzuD5M2KJLiZuqUZImAzVvPCJqvy/DZcQK", admin: false},
  {username: "Mikka D. Pineda", password_digest: "10101663368907181", admin: false},
  {username: "groot", password_digest: "$2a$10$G8vTcG.YU90N/zE8cmnm0um7q7HzZE3M1WQ1qSMyEdKbtKNkNw8VK", admin: false}
])
