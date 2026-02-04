import PostalMime from 'postal-mime';

export default {
	async fetch(message, env, ctx) {
		const email = await PostalMime.parse(message.raw, {
			attachmentEncoding: 'base64'
		});

		console.log('Subject', email.subject);
		console.log('HTML', email.html);

		message.forward("detorresrc@gmail.com");
	},
};
