<script setup lang="ts">
import Cookies from "js-cookie";
import * as Router from "vue-router";
import { onMounted } from "vue";

onMounted(async () => {
  const finish = () => (window.location.href = "/");

  const getRes = (
    code: Router.LocationQueryValue | Router.LocationQueryValue[]
  ) =>
    fetch("https://api.ayakobot.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    }).then((res) => res.json());

  if (Cookies.get("token")) return finish();

  const route = Router.useRoute();
  if (!route.query.code) {
    window.location.href =
      "https://discord.com/api/oauth2/authorize?client_id=650691698409734151&redirect_uri=https%3A%2F%2Fayakobot.com%2Flogin&response_type=code&scope=identify%20guilds%20email";
    return;
  }

  const { code } = route.query;
  if (!code) window.location.href = "/login";

  const res = await getRes(code);
  Cookies.set("token", res.token);

  finish();
});
</script>
