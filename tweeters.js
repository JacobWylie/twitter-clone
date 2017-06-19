function createFollowers () {
	let randomFollowers = [];
	for (i = 0; i < 8; i++) {
		let item = followers[Math.floor(Math.random() * followers.length)];
		randomFollowers.push(item);
	}
	return randomFollowers;
}

let followers = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg',
				'img/img5.jpg', 'img/img6.jpg', 'img/img7.jpg', 'img/img8.jpg']

let users = [
	{
		profilePhoto: 'img/profile.jpg',
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

	},
]


