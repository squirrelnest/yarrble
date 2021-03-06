User.create!(username: "abc", password_digest: "$2a$10$LxmGxDkyrNNn4QDAR/4oy.BJlkEz3tumwwEQ9/YYkrsdFtf4Siq2S", email: 'abc@test.com', admin: false)
User.create!(username: "amy", password_digest: "$2a$10$YcesMlSQFj2fK8BxTZNCuuSGbZNUXEPYPs5BuHlB3gsIzU6RwUw46", email: 'amy@test.com', admin: false)
User.create!(username: "test", password_digest: "$2a$10$qGdWy/CoWV5PqkEZB.WSLuHWw3TnLrvu1QKso4VqOkD/p5xVWYoD6", email: 'test@test.com', admin: true)
User.create!(username: "grump", password_digest: "$2a$10$2fh8I9hjfq89HbWJzkXmzuD5M2KJLiZuqUZImAzVvPCJqvy/DZcQK", email: 'grump@test.com', admin: false)
User.create!(username: "Mikka D. Pineda", password_digest: "10101663368907181", email: 'mikka@test.com', admin: false)
User.create!(username: "groot", password_digest: "$2a$10$G8vTcG.YU90N/zE8cmnm0um7q7HzZE3M1WQ1qSMyEdKbtKNkNw8VK", email: 'groot@test.com', admin: false)

Location.create!(nickname: "Linapacan West", lonlat: "POINT (119.741391 11.424789)", country: "Philippines")
Location.create!(nickname: "Willikies", lonlat: "POINT (-61.69097900390625 17.13554114256562)", country: "Antigua and Barbuda")
Location.create!(nickname: "South Bay", lonlat: "POINT (9.6798894 3.4914197)", country: "Cameroon")
Location.create!(nickname: "Caiapônia", lonlat: "POINT (-52.0 -16.0)", country: "Brazil")
Location.create!(nickname: "Colima", lonlat: "POINT (-110.97511557326668 18.73302914372239)", country: "Mexico")
Location.create!(nickname: "Middle of the Atlantic", lonlat: "POINT (-63.08340625000797 36.18235862678165)", country: "None")
Location.create!(nickname: "Fistula del Fuego", lonlat: "POINT (-64.57353149943354 -42.69747987460926)", country: "Argentina")
Location.create!(nickname: "Jaws Wuz Here", lonlat: "POINT (22.7983429318283 -34.71553102254125)", country: "South Africa")
Location.create!(nickname: "Hobbit Hole", lonlat: "POINT (-78.89754268127841 8.285443329056008)", country: "Panama")
Location.create!(nickname: "Hermit's Paradise", lonlat: "POINT (146.15142498386166 -18.167955047290633)", country: "Australia")
Location.create!(nickname: "Rabbit Island", lonlat: "POINT (133.66484506172452 33.46726182563076)", country: "Japan")
Location.create!(nickname: "Rainbowsky", lonlat: "POINT (145.51574155951357 43.71181764442056)", country: "Russia")
Location.create!(nickname: "Desert Armpit", lonlat: "POINT (-70.49445579577976 -25.402665918861103)", country: "Chile")
Location.create!(nickname: "Pirate Haven", lonlat: "POINT (53.90251754935932 24.27945360479626)", country: "United Arab Emirates")
Location.create!(nickname: "Crimea", lonlat: "POINT (29.443589489982998 45.88756288510595)", country: "Ukraine")
Location.create!(nickname: "Ongo river mouth", lonlat: "POINT (9.570584762937841 3.656483832744158)", country: "Cameroon")
Location.create!(nickname: "Seychelles Anse Royale", lonlat: "POINT (55.52593231201172 -4.751624041481169)", country: "Seychelles")
Location.create!(nickname: "Oslo, Norway", lonlat: "POINT (10.69742202758789 59.91321349626047)", country: "Norway")
Location.create!(nickname: "Belem, Brazil", lonlat: "POINT (-48.14208984375 -0.21972602392080884)", country: "Brazil")
Location.create!(nickname: "Ao Yon, East Side of Bay", lonlat: "POINT (98.39561462402344 7.7953573397915035)", country: "Thailand")
Location.create!(nickname: "Casa Latina", lonlat: "POINT (-122.292871 37.8714455)", country: "United States")
Location.create!(nickname: "Paris, France", lonlat: "POINT (2.3522219000000177 48.85661400000001)", country: "France")
Location.create!(nickname: "Wework Transbay", lonlat: "POINT (-122.39834270000001 37.7889108)", country: "United States")
Location.create!(nickname: "Boratopolis", lonlat: "POINT (76.123456 45.123456)", country: "Kazakhstan")
Location.create!(nickname: "Antarctica", lonlat: "POINT (130.123456 -82.862752)", country: "None")

Review.create!(content: "Crowded moorings and expensive hotels", stability: 5, date_visited: "2018-01-20 01:35:00", location_id: 10, user_id: 1, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "too boogie for me", stability: 5, date_visited: "2018-02-07 15:42:00", location_id: 12, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "River piranhas and angry natives", stability: 1, date_visited: "2018-01-20 02:02:00", location_id: 12, user_id: 1, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "out there somewhere", stability: 5, date_visited: "2018-02-07 22:51:33", location_id: 8, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "I approve this tea", stability: 0, date_visited: "2018-01-29 18:53:00", location_id: 11, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Long way up the river", stability: 5, date_visited: "2018-02-08 00:16:27", location_id: 5, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Sharky", stability: 0, date_visited: "2018-02-08 00:33:24", location_id: 19, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Cold ass metal seat", stability: 8, date_visited: "2018-01-20 18:06:00", location_id: 11, user_id: 3, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Hurricane hole", stability: 9, date_visited: "2018-01-20 18:29:00", location_id: 3, user_id: 3, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Hoity toity. Every mooring here seems to be privately owned.", stability: 2, date_visited: "2018-01-20 18:38:00", location_id: 4, user_id: 3, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Glassy water. Lively coral reef with tons of fish. Behind a pearl farm and protected from swells.", stability: 10, date_visited: "2018-01-20 18:40:00", location_id: 2, user_id: 3, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "i want to live here", stability: 10, date_visited: "2018-01-20 18:41:00", location_id: 2, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Naga the Giant Dragon summers here", stability: 0, date_visited: "2018-01-20 18:43:00", location_id: 12, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Sweet bananas", stability: 5, date_visited: "2018-02-08 00:58:14", location_id: 3, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Delicious enchiladas", stability: 2, date_visited: "2018-01-22 02:23:00", location_id: 18, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Smells to high hell", stability: 7, date_visited: "2017-12-04 12:59:00", location_id: 17, user_id: 4, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Goodness gracious great balls of fire", stability: 1, date_visited: "2017-08-15 13:06:00", location_id: 11, user_id: 4, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "holey high water", stability: 3, date_visited: "2017-03-07 13:10:00", location_id: 11, user_id: 4, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "oi vey", stability: 6, date_visited: "2018-01-30 13:46:00", location_id: 1, user_id: 4, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Beware, strong currents", stability: 1, date_visited: "2018-01-30 13:46:00", location_id: 3, user_id: 4, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Mildly irritating", stability: 9, date_visited: "2018-01-21 21:54:00", location_id: 1, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Penguin suits galore", stability: 9, date_visited: "2018-01-21 23:12:00", location_id: 24, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Floats my boatie", stability: 10, date_visited: "2018-01-30 13:53:00", location_id: 2, user_id: 4, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "My toes froze off", stability: 1, date_visited: "2018-01-21 23:25:00", location_id: 24, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "exciting", stability: 0, date_visited: "2018-01-21 23:32:00", location_id: 3, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "What's that smell?", stability: 5, date_visited: "2017-09-07 14:15:00", location_id: 4, user_id: 5, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "yummy to my tummy", stability: 9, date_visited: "2018-01-30 14:57:00", location_id: 18, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Rock a bye baby, rolling waves put me to sleep. Zzzzz.", stability: 5, date_visited: "2017-10-16 20:26:00", location_id: 23, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Way too exposed to swell", stability: 1, date_visited: "2018-01-31 12:28:00", location_id: 5, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Stuck in the doldrums", stability: 9, date_visited: "2018-01-31 15:16:00", location_id: 8, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Safe harbor", stability: 5, date_visited: "2018-01-31 15:19:00", location_id: 12, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Freezing my socks off", stability: 5, date_visited: "2018-02-01 08:48:00", location_id: 24, user_id: 2, safety: 9, aesthetics: 1, amenities: 0)
Review.create!(content: "Meh. Too exposed. Couldn't drink my coffee without spilling it.", stability: 1, date_visited: "2018-01-31 15:27:00", location_id: 21, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Great place to hang out while awaiting your turn through the Canal", stability: 9, date_visited: "2018-01-31 15:32:00", location_id: 22, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Noone around for miles. Perfect for loners.", stability: 10, date_visited: "2018-01-31 15:34:00", location_id: 19, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Nicest people I've ever met. And bunnies.", stability: 2, date_visited: "2018-01-31 15:39:00", location_id: 9, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Well protected. Beautiful rainbows. Would come back here again.", stability: 10, date_visited: "2018-01-31 15:44:00", location_id: 6, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "No fresh water. Dry winds from desert.", stability: 8, date_visited: "2018-01-31 16:03:00", location_id: 14, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Egad. There's no wifi or data reception here!", stability: 5, date_visited: "2018-01-31 22:05:00", location_id: 24, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "potatotoey", stability: 9, date_visited: "2018-02-01 13:10:00", location_id: 1, user_id: 3, safety: 8, aesthetics: 2, amenities: 3)
Review.create!(content: "bongo mania", stability: 5, date_visited: "2018-02-01 16:02:00", location_id: 19, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Great coconuts", stability: 1, date_visited: "2018-02-12 17:09:57", location_id: 12, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Warzone. Stay away.", stability: 1, date_visited: "2018-02-12 11:10:00", location_id: 4, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
Review.create!(content: "Water's really calm. Slept like a baby here.", stability: 9, date_visited: "2018-02-12 17:19:22", location_id: 5, user_id: 2, safety: 7, aesthetics: 6, amenities: 3)
