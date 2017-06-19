function createFollowers () {
	let randomFollowers = [];
	for (i = 0; i < 8; i++) {
		let item = followers[Math.floor(Math.random() * followers.length)];
		randomFollowers.push(item);
	}
	return randomFollowers;
}

let followers = ['img/followers/1.jpg', 'img/followers/2.jpg', 'img/followers/3.png', 'img/followers/4.jpg',
				'img/followers/5.jpg', 'img/followers/6.jpg', 'img/followers/7.jpg', 'img/followers/8.jpg',
				'img/followers/9.jpg', 'img/followers/10.jpg', 'img/followers/11.jpg', 'img/followers/12.png',
				'img/followers/13.jpg', 'img/followers/14.jpg', 'img/followers/15.jpg', 'img/followers/16.jpg',
				'img/followers/17.jpg', 'img/followers/18.jpg', 'img/followers/19.jpg', 'img/followers/20.jpg',
				'img/followers/21.jpg', 'img/followers/22.jpg', 'img/followers/23.jpg', 'img/followers/24.jpg',
				'img/followers/25.jpg', 'img/followers/26.jpg', 'img/followers/27.jpg', 'img/followers/28.jpg',
				'img/followers/29.jpg', 'img/followers/30.jpg', 'img/followers/31.jpg', 'img/followers/32.jpg',
				'img/followers/33.jpg', 'img/followers/34.jpg', 'img/followers/35.jpg', 'img/followers/36.jpg',
				'img/followers/37.jpg', 'img/followers/38.jpg', 'img/followers/39.jpg', 'img/followers/40.jpg',
				'img/followers/41.jpg', 'img/followers/42.jpg', 'img/followers/43.jpg', 'img/followers/44.jpg',
				'img/followers/45.jpg', 'img/followers/46.jpg', 'img/followers/47.jpg', 'img/followers/48.jpg',
				]

let tweeters = [
	{
		profilePhoto: 'img/profile1.jpg',
		name: "Dan Bongino",
		handle: "@dbgongino",
		retweets: "4,918",
		likes: "8,144",
		followers: createFollowers(), // randomFollowers[ 8 followers in array ]
		time: '6:13 AM - 14 JUN 2017',
		replies: '371',
		retweetSub: '4.9K',
		likeSub: '8.2k'
	},
	{
		profilePhoto: 'img/profile2.jpg',
		name: "Ariana Huntington",
		handle: "@ariana_hunt9",
		retweets: "1,345",
		likes: "678",
		followers: createFollowers(), // randomFollowers[ 8 followers in array ]
		time: '2:32 AM - 12 April 2017',
		replies: '89',
		retweetSub: '1.3K',
		likeSub: '678'
	},
	{
		profilePhoto: 'img/profile3.jpg',
		name: "Facundo E. Calderone",
		handle: "@facucalderone",
		retweets: "41",
		likes: "65",
		followers: createFollowers(), // randomFollowers[ 8 followers in array ]
		time: '9:24 AM - 11 MAY 2017',
		replies: '11',
		retweetSub: '41',
		likeSub: '65'
	},
	{
		profilePhoto: 'img/profile4.jpg',
		name: "Veronica Bastos",
		handle: "@VeronicaBastos1",
		retweets: "6,450",
		likes: "2,569",
		followers: createFollowers(), // randomFollowers[ 8 followers in array ]
		time: '4:51 PM - 19 JUN 2017',
		replies: '867',
		retweetSub: '6.4K',
		likeSub: '2.5K'
	},
	{
		profilePhoto: 'img/profile5.jpg',
		name: "Monica van der Walt",
		handle: "@Monique_PR",
		retweets: "13",
		likes: "20",
		followers: createFollowers(), // randomFollowers[ 8 followers in array ]
		time: '11:10 PM - 17 JUN 2017',
		replies: '1',
		retweetSub: '13',
		likeSub: '20'
	},
]


