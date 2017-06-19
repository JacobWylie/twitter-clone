const profileImage = document.querySelector('.profileImage img');
const name = document.querySelector('.name');
const handle = document.querySelector('.handle');
const tweet = document.querySelector('.tweet p');
const retweets = document.querySelector('.retweetNum')
const likes = document.querySelector('.likeNum')
const followerImages = document.querySelector('.followers')
const time = document.querySelector('.time p')
const replies = document.querySelector('.replies')
const retweetSub = document.querySelector('.retweetSub')
const likeSub = document.querySelector('.likeSub')
const newTweet = document.querySelector('textarea[name="newTweet"]');
const submitTweet = document.querySelector('button[type="submit"]');
let newFollower;
let tweeterCounter = 1;

function populateTweetText () {
	tweet.textContent = newTweet.value;
}

function populateProfile() {
	profileImage.src = tweeters[tweeterCounter].profilePhoto;
	name.textContent = tweeters[tweeterCounter].name;
	handle.textContent = tweeters[tweeterCounter].handle;
	retweets.textContent = tweeters[tweeterCounter].retweets;
	likes.textContent = tweeters[tweeterCounter].likes;
	time.textContent = tweeters[tweeterCounter].time;
	replies.textContent = tweeters[tweeterCounter].replies;
	retweetSub.textContent = tweeters[tweeterCounter].retweetSub;
	likeSub.textContent = tweeters[tweeterCounter].likeSub;
}

function populateFollowers () {
	followerImages.textContent = '';
	for(i = 0; i < tweeters[tweeterCounter].followers.length; i++) {
		newFollower = document.createElement('img');
		newFollower.classList.add('followerImages')
		newFollower.src = tweeters[tweeterCounter].followers[i];
		followerImages.appendChild(newFollower);
	}
}

function generateTweet () {
	populateTweetText();
	populateProfile();
	populateFollowers();

	// cleares submitTweet textarea
	newTweet.value = '';
	// cycles through tweeters[]
	if (tweeterCounter === tweeters.length - 1) {
		tweeterCounter = 0;
	} else {
		tweeterCounter++;
	}
}

submitTweet.addEventListener('click', generateTweet); 






