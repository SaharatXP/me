<template>
  <div>
    <NavCompo></NavCompo>

    <div class="container">
      <div class="mb-5 text-center">
        <h3 class="display-5 fw-bolder mb-0" style="margin-top: 50px">
          <span class="text-success d-inline mt-5">Contact Me :)</span>
        </h3>
      </div>
      <div class="bg-light rounded-4 py-5 px-4 px-md-5">
        <i class="bi bi-phone text-success"> &nbsp; </i
        ><span class="text-success mt-5"> +66 98-159-4498 </span> <br />

        <i class="bi bi-envelope-at text-success"> &nbsp; </i
        ><span class="text-success d-inline mt-5"> xspbank@gmail.com </span>
        <br />

        <i class="bi bi-line text-success"> &nbsp; </i
        ><span class="text-success d-inline mt-5"> bank32272 </span><br />
      </div>
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
