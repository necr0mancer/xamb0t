var tmi = require("tmi.js");
var moment = require("moment");
var request = require("request");

var oauth = require("./oauth.js");
var chans = require("./getchannels.js");

var initialized    = false; // {boolean} - whether or not b0t has been started
var exited         = false; // {boolean} - whether or not b0t has been exited
var lastCommandUse = {};		// {object}  - unix timestamp of the last command usage

var options = {
	options: {
		//debug: true
		debug: false 
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "xamb0t",
		password: oauth.password
	},
	// channels: ['#burritodeepthroat', '#g3tus', '#carnageraiser1', '#sidesplitters', '#oxqsednqc']
	//channels: ['#burritodeepthroat']
	channels: chans.chanlist
};

var client = new tmi.client(options);

console.log("\n*** BOT STARTED ***\n");

//console.log(chans.chanlist + "\n\n");
//console.log(options.channels);

// return;
//
// function init() {
// 	if (initialized)
// 		return;
	client.connect();
// 	initialized = true;
// }

client.on("connected", function(address, port) {
	console.log("\n*** BOT CONNECTED ***\n");
	console.log("Address: " + address + "\nPort: " + port + "\n");
//	client.action("#burritodeepthroat", "Hello everyone, I am here.");
	for (var i = 0, len = options.channels.length; i < len; i ++) {
		//client.action(options.channels[i], "Hello everyone, I am here.");

		//client.action(options.channels[i], "After a quick reboot, I have returned.");
	}
//	client.action("#burritodeepthroat", "Hello everyone, I am here.");
});

// function coinFlip() {
// 	return (Math.floor(Math.random() * 2) == 0);
// }

// function coinFlip(max) {
// 	var num = Math.floor(Math.random() * Math.floor(max));
// 	var n = num.toString();
// 	return n;
// }

client.on("chat", function (channel, userstate, message, self) {
	if (self) return;
	if (message == "Orc butt!") {
		client.say(channel, "SMOrc O SMOrc R SMOrc C SMOrc B SMOrc U SMOrc T SMOrc T SMOrc");
	}
	// if (burrito) { deepthroat(); }
	if (message == message.match(/.*burrito.*/i)) {
	//if (message == "burrito") {
		client.say(channel, "Deepthroat that thing, yo!");
	}
	if (message == "ayy") {
		client.say(channel, "ayylmao FeelsGoodMan");
	}
	if (message == message.match(/!!.*/)) {
	// 	//client.say(channel, message.replace("!!","") + " or RIOT");
		message = message.toUpperCase();
		client.action(channel, "ヽ༼ຈل͜ຈ༽ﾉ " + message.replace("!!", "") + " or RIOT ヽ༼ຈل͜ຈ༽ﾉ");
	}
  if (message == "!stairs") {
    client.say(channel, "PRACTICE YOUR DAMN STAIRS");
  }
});

client.on("chat", function (channel, user, message, self) {
	if (self) return
	if (channel == "#burritodeepthroat") {
		if (message == "!ping") {
			client.say(channel, "Pongdong!");
		}
		if (message == "!test") {
			client.say(channel, "Done!");
		}
	}
});




// set command Prefix, duh :P - makes testing easier, no double responses or conflicts
var Prefix = "!";
// set object/array of commands
var commands = {
	ping: "Pong!",
	//ayy: "ayylmao FeelsGoodMan",
	rekt: "☐ Not REKT ☑ REKT ☑ REKTangle ☑ SHREKT ☑ REKT-it Ralph ☑ Total REKTall ☑ The Lord of the REKT ☑ The Usual SusREKTs ☑ North by NorthREKT ☑ REKT to the Future ☑ Once Upon a Time in the REKT ☑ The Good, the Bad, and the REKT ☑ LawREKT of Arabia ☑ Tyrannosaurus REKT ☑ eREKTile dysfunction",
	flip: coinFlip,
	//"!": riot,
	int: "INTERFUCKINGCEPTED! PogChamp",
	situation: "Looks like this kiwi is in a dire situation. Kappa",
	squids: "we'reくコ:彡 entering squid territory くコ:彡 くコ:彡 くコ:彡 くコ:彡 くコ:彡 くコ:彡 くコ:彡",
	tattoo: "#MyNextTattoo http://imgur.com/Dw3fgHJ ",
	now: "୧༼ಠ益ಠ༽୨ NOW WE RIOT ୧༼ಠ益ಠ༽୨",
	hard: "8:00 xamarinB: but I only hard the Kiwi",
	caw: "⋛⋋( ՞ਊ ՞)⋌⋚ CAW CAW ⋛⋋( ՞ਊ ՞)⋌⋚",
	spam: "(ง ͠° ͟ʖ ͡°)ง ᴛʜɪs ɪs ᴏᴜʀ ᴄʜᴀᴛ ᴍᴏᴅs (ง ͠° ͟ʖ ͡°)ง (ง •̀_•́)ง ʏᴇᴀʜ sᴘᴀᴍ ɪᴛ! (ง •̀_•́)ง",
	chewing: "\"nyamnyamnyumnyumnuyam\"",
	stripper: "http://imgur.com/6V8QbL6",
	tanked: "looks like someone got (•_•) / ( •_•)>⌐■-■ / (⌐■_■) TANKED",
	flex: "PowerUpL BJBlazkowicz PowerUpR",
	doom: "DOOOOOOOOOOOOMED! https://youtu.be/R1Nd6LU4ImQ",
	roasted: "Roasted™ check out the Master Roaster! https://twitch.tv/RunaFS",
	rage: "Go here for the true Rage Cam™ https://twitch.tv/NoVac404",
	//match(/!.*/): riot,
	//giphy: giphy,
	//disco: "https://discord.gg/TNHrWBZ",
  //discord: "https://discord.gg/TNHrWBZ",
	furry: "This chick really brings the furry! (or is it fury? Either way it's most likely NSFW) https://www.twitch.tv/superpine23",
  ocean: "OCEAN MAN :ocean: :heart_eyes: Take me by the hand :raised_hand: lead me to the land that you understand :raised_hands: :ocean: OCEAN MAN :ocean: :heart_eyes: The voyage :bike: to the corner of the :earth_americas: globe is a real trip :ok_hand: :ocean: OCEAN MAN :ocean: :heart_eyes: The crust of a tan man :man_with_turban: imbibed by the sand :+1: Soaking up the :sweat_drops: thirst of the land :100:",
  randomize: rando,
  gold: "Ask me about Golden Raisins!",
  spaghet: "My Spaghet: ☐ Not touched ☑ Touched ☑ Moved ☑ Affected ☑ Stirred ☑ Disturbed ☑ Rubbed ☑ Manipulated ☑ Rustled ☑ Fluttered ☑ Cuddled ☑ Embraced ☑ Fondled ☑ Caressed",
 // stairs: "PRACTICE YOUR DAMN STAIRS"
};
// listening for commands
client.on("chat", function (channel, user, message, self){
	// don't respond to ourself
	if (self) return;
	if (message.indexOf(Prefix) === 0)
		// onCommand(channel, user, message, self);
		onCommand(channel, message, user);
});

function onCommand(channel, message, user){
	// strip command prefix from the message
	message = message.substr(Prefix.length).toLowerCase();

	// get mod status?
	// not right now, do in future
	// var mod = users[from] && users[from].mod;
	var mod = user.mod;

	// split up the message into command and arguments array
	var parts = message.split(' ');
	var command = parts[0];
	var args = parts.slice(1);

	// check last command usage time, restrict to once every 10 seconds if not moderator
	var then = lastCommandUse[message]
	var now = moment().unix();
	var diff = now - then;
	// if (!mod && !isNaN(diff) && diff <= 10)
	// 	return;

	// client.say(channel, "I'm responding!");
	if (message == "cmds") {
		// client.say(channel, Object.keys(commands));
		// console.log(Object.keys(commands));
		// console.log(Object.values(commands));
		var comms = Object.keys(commands);
		if (comms.length) {
		client.say(channel, "Available commands: " + Prefix + comms.join(', ' + Prefix));
		}
	}
	if (commands[command]) {
		var handler = commands[command];

		// if it's a string, jsut say it
		if (typeof handler === 'string')
		client.say(channel, handler);

		// if it's a function, run it I guess(?)
		// (not really sure how to do this yet)
		else if (typeof handler === 'function') {
			// call the handler and convert to promise
			// var response = handler(args, mod);
			var response = handler(args);
			response = Promise.resolve(response);
			response.then(function(message){
				client.say(channel, message);
			});
		}

	}
	// else {
	// 	// if (mod || user.badges.broadcaster === '1'){
	// 	if (!mod) {
	// 		client.say(channel, "some arbitrary response ");
	// 	}
	// 	console.log(user);
	// 	console.log(user.mod);
	// 	console.log(user.badges.broadcaster);
	// }

	// update last command usage time
	lastCommandUse[message] = now;
}

// Handlers (?)

function coinFlip(max) {
	var num = Math.floor(Math.random() * Math.floor(2));
	var n = num.toString();
	if (n === "1") {
		return "heads";
	}
	else if (n === "0") {
		return "tails";
	}
	// n = "";
}

function rando(max) {
	var num = Math.floor(Math.random() * Math.floor(778));
	var n = num.toString();
	return n;
}

// var args = "666";
function riot(args) {
	var reason = {
		json: true,
		x: args.join(' ')
	}
	var thing ="ヽ༼ຈل͜ຈ༽ﾉ " + reason.x.toUpperCase() + " or RIOT ヽ༼ຈل͜ຈ༽ﾉ";
	// "ヽ༼ຈل͜ຈ༽ﾉ " + message.replace("!!", "") + " or RIOT ヽ༼ຈل͜ຈ༽ﾉ"
	return thing;
}



function giphy(args, /* mod */) {
	// if (!mod) return; // restrict this command to moderators only

	var opts = {
		json: true,
		qs: {
			q:       args.join(' '),
			api_key: 'dc6zaTOxFJmzC'
		}
	};

	return new Promise(function(resolve, reject) {
		request.get('http://api.giphy.com/v1/gifs/search', opts, function(err, res) {
			if (err)
				reject(err);
			else if (res.body.data && res.body.data.length)
				resolve(res.body.data[0].images.original.url);
			else
				resolve();
		});
	}).catch(console.error);
}










// console.log(Object.keys(commands));
// console.log(client.getOptions());
// console.log(Object.values(commands));






////////////////////////////////
// NEW FOLLOWER NOTIFIER EZPZ //
////////////////////////////////
//
// const Notifier = require('twitch-followers');
// const notifier = new Notifier('burritodeepthroat');
//
// notifier.on('follower', user => {
// 	console.log(user.display_name + " is following");
// 	setTimeout(function(){
// 		client.say("burritodeepthroat", user.display_name + " has followed!");
// 	}, 10000);
// });
//
// notifier.start();
//
/////////////////
/////////////////
