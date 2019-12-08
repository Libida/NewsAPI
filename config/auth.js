module.exports = {
    "facebookAuth": {
        "clientID": "2411305602419916", // your App ID
        "clientSecret": "b493bdaee131dc9ab203fd1013d3dd7d",
        "callbackURL": "http://localhost:4000/auth/facebook/callback",
        "profileFields": ["id", "email", "name"] // For requesting permissions from Facebook API
    }
};