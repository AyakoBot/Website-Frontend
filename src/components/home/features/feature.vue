<script setup lang="ts">
import Preview from "./preview.vue";
</script>

<template>
  <div class="mt-10 flex justify-center items-center flex-col p-10">
    <h1>Add Ayako to your Server and gain access to cool features like</h1>

    <div class="flex justify-center items-center gap-10 flex-wrap w-full">
      <Preview
        :i="1"
        title="Powerful Moderation"
        subtitle="Malware detector, Anti-Spam, Captcha Verification, Blacklist, Auto-Punishments, Strike-System, Logs, etc."
        img="https://cdn.ayakobot.com/website_assets/moderation.png"
        placeholderImg="https://cdn-icons-png.flaticon.com/512/928/928800.png"
        class="mt-10"
      />
      <Preview
        :i="2"
        title="Server Customization"
        subtitle="Levelling System, Role-Play, Server Currency, Welcome Messages, Giveaways with Requirements, etc."
        img="https://cdn.ayakobot.com/website_assets/roles.png"
        placeholderImg="https://cdn-icons-png.flaticon.com/512/2593/2593065.png"
        class="mt-10"
      />
      <Preview
        :i="3"
        title="Role Management"
        subtitle="Button Roles, Category Roles, Auto-Roles, Sticky Roles, Booster Roles, Self-Roles, etc."
        img="https://cdn.ayakobot.com/website_assets/rp.png"
        placeholderImg="https://cdn-icons-png.flaticon.com/512/6596/6596902.png"
        class="mt-10"
      />
    </div>
  </div>
</template>
