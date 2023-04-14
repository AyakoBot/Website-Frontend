export default {
  api: "https://api.ayakobot.com",
  cdn: "https://cdn.ayakobot.com",
  redirectUrl: {
    'ayakobot.com':
      "https://discord.com/api/oauth2/authorize?client_id=650691698409734151&redirect_uri=https%3A%2F%2Fayakobot.com%2Flogin&response_type=code&scope=identify%20guilds%20email",
    localhost:
      "https://discord.com/api/oauth2/authorize?client_id=650691698409734151&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin&response_type=code&scope=identify%20guilds%20email",
  },
};
