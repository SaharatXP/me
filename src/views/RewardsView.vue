<template>
  <div>
    <NavCompo></NavCompo>

    <div class="container">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bolder mb-0" style="margin-top: 50px">
          <span class="text-success d-inline mt-5">Rewards</span>
        </h1>
      </div>
      <div class="row gx-5 justify-content-center">soon...</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NavCompo from "@/components/Nav.vue";
export default {
  data() {
    return {
      another_skills: [
        {
          name: "Microsoft Office 365",
        },
        {
          name: "Microsoft PowerBI",
        },
        {
          name: "KNIME",
        },
        {
          name: "Adobe Photoshop CC",
        },
        {
          name: "Adobe Premiere Pro",
        },
        {
          name: "Canva",
        },
      ],
    };
  },
  name: "HomeView",
  components: {
    HelloWorld,
    NavCompo,
  },
};
</script>
