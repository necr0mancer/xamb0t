var tmi = require("tmi.js");
var oauth = require("./oauth.js");

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "xamb0t",
		password: oauth.password
	},
	channels: ['#burritodeepthroat', '#g3tus', '#carnageraiser1', '#sidesplitters', '#oxqsednqc']
};

var client = new tmi.client(options);

console.log("\n\n\n*** BOT STARTED ***\n\n\n");

client.connect();

client.on("connected", function(address, port) {
	console.log("\n\n\n*** BOT CONNECTED ***");
	console.log("Address: " + address + " Port: " + port + "\n\n");
//	client.action("#burritodeepthroat", "Hello everyone, I am here.");
	for (var i = 0, len = options.channels.length; i < len; i ++) {
		//client.action(options.channels[i], "Hello everyone, I am here.");

		//client.action(options.channels[i], "After a quick reboot, I have returned.");
	}
//	client.action("#burritodeepthroat", "Hello everyone, I am here.");
});

//function coinFlip(number) {
	//
  ///hideout
  //return (Math.floor(Math.random() * 2) == 0);
  //return (Math.floor(Math.random() * 2));
//}
//

function coinFlip(max) {
      
      //return Math.floor(Math.random() * Math.floor(max));
      var num = Math.floor(Math.random() * Math.floor(max));
      var n = num.toString();
      return n;
      
}

//console.log(coinFlip(2));


client.on("chat", function (channel, userstate, message, self) {
	if (self) return;
	if (message == "!ping") {
		client.say(channel, "Pong!");
	}
	if (message == "ayy") {
		client.say(channel, "ayylmao FeelsGoodMan");
	}
	if (message == "potato") {
		client.say(channel, "potahto");
	}
	if (message == "!rekt") {
		client.say(channel, "☐ Not REKT ☑ REKT ☑ REKTangle ☑ SHREKT ☑ REKT-it Ralph ☑ Total REKTall ☑ The Lord of the REKT ☑ The Usual SusREKTs ☑ North by NorthREKT ☑ REKT to the Future ☑ Once Upon a Time in the REKT ☑ The Good, the Bad, and the REKT ☑ LawREKT of Arabia ☑ Tyrannosaurus REKT ☑ eREKTile dysfunction");
	}
	if (message == "Orc butt!") {
		client.say(channel, "SMOrc O SMOrc R SMOrc C SMOrc B SMOrc U SMOrc T SMOrc T SMOrc");
	}
	// if (burrito) { deepthroat(); }
	if (message == message.match(/.*burrito.*/i)) {
	//if (message == message.match(/([^!]|^)burrito.*/)) {
 //if (message == "burrito") {
		client.say(channel, "Deepthroat that thing, yo!");
	}
	if (message == message.match(/!!.*/)) {
		//client.say(channel, message.replace("!!","") + " or RIOT");
		message = message.toUpperCase();
		client.action(channel, "ヽ༼ຈل͜ຈ༽ﾉ " + message.replace("!!", "") + " or RIOT ヽ༼ຈل͜ຈ༽ﾉ");
	}
	if (message == "!flip") {
		var hot = coinFlip(2);
    if (hot == "0") {
      client.say(channel, "Heads!")
    }
    if (hot == "1") {
      client.say(channel, "Tails!")
    }
		//client.say(channel, "" + coinFlip(2));
	}
	if (message == "!doom") {
		client.say(channel, "DOOOOOOOOOOOOMED! https://youtu.be/R1Nd6LU4ImQ");
	}
  if (message == "!poll") {
    client.say(channel, "https://strawpoll.com/3s2dg48x");
  }
  if (message == "!int") {
    client.say(channel, "INTERFUCKINGCEPTED! PogChamp");
  }
  if (message == "!commands") {
    client.say(channel, "commandsArray = []");
    client.say(channel, "commandsArray is undefined");
  }
  if (message == "!situation") {
    client.say(channel, "Looks like this kiwi is in a dire situation. Kappa");
  }
  if (message == "!squids") {
    client.say(channel, "we'reくコ:彡 entering squid territory くコ:彡 くコ:彡 くコ:彡 くコ:彡 くコ:彡 くコ:彡 くコ:彡");
  }
  if (message == "!tattoo") {
    client.say(channel, "#MyNextTattoo http://imgur.com/Dw3fgHJ ");
  }
  if (message == "!now") {
    client.say(channel, "୧༼ಠ益ಠ༽୨ NOW WE RIOT ୧༼ಠ益ಠ༽୨");
  }
  if (message == "!hard") {
    client.say(channel, "8:00 xamarinB: but I only hard the Kiwi");
  }
  if (message == "!caw") {
    client.say(channel, "⋛⋋( ՞ਊ ՞)⋌⋚ CAW CAW ⋛⋋( ՞ਊ ՞)⋌⋚");
  }
  if (message == "!spam") {
    client.say(channel, "(ง ͠° ͟ʖ ͡°)ง ᴛʜɪs ɪs ᴏᴜʀ ᴄʜᴀᴛ ᴍᴏᴅs (ง ͠° ͟ʖ ͡°)ง (ง •̀_•́)ง ʏᴇᴀʜ sᴘᴀᴍ ɪᴛ! (ง •̀_•́)ง");
  }
  if (message == "!chewing") {
    client.say(channel, "\"nyamnyamnyumnyumnuyam\"");
  }
  if (message == "!stripper") {
    client.say(channel, "http://imgur.com/6V8QbL6");
  }
  if (message == "!tanked") {
    client.say(channel, "looks like someone got (•_•) / ( •_•)>⌐■-■ / (⌐■_■) TANKED");
  }
  if (message == "!flex") {
    client.say(channel, "PowerUpL BJBlazkowicz PowerUpR");
  }
  if (message == "!roasted") {
    client.say(channel, "Roasted™ check out the Master Roaster! https://twitch.tv/RunaFS");
  }
  if (message == "!rage") {
    client.say(channel, "Go here for the true Rage Cam™ https://twitch.tv/NoVac404");
  }
  if (message == "!disco") {
    client.say(channel, "https://discord.gg/TNHrWBZ");
  }
  if (message == "say bye xamb0t") {
    if (user == "burritodeepthroat") {
      client.say(channel, "Bye, all!");
    }
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
  if (message == "I am here!") {
    client.say(channel, "Me, too!");
  }
});
