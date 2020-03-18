const postmark = require("postmark");

const transport = new postmark.ServerClient(process.env.POST_MARK_API_KEY);

const mailTemp = (text, listingName) => `
Hello there!

You have successfully booked a trip for ${listingName}!


Here is a link to your reciept 📡: ${text}

From the team at THE LUNAR TOUR. 🚀
`;

exports.transport = transport;
exports.mailTemp = mailTemp;
