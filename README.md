This repo has two scripts for a bot.

The first script, blame.js, assumes that the bot has access to a brain and a list of users, and listens for the words "blame", "fault", and "sorry", and responds with "Blame " plus the name of a random person in the (slack) chat room.

The second script, blameNoBrain.js, has a hardcoded list of names that the bot can blame, as well as functions to add names or remove names.  There is no persistence with this script, so every time the bot restarts, the blame names will revert back to the original list of hardcoded names.
