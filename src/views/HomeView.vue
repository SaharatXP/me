<template>
  <div>
    <NavCompo></NavCompo>

    <div class="row gx-5 align-items-center mx-5">
      <div class="col-xl-8 mx-0 mt-0 align-items-center">
        <div class="row mx-0">
          <div class="col-xl-12">
            <img src="../assets/me.png" alt="" class="w-100" />
          </div>

          <div class="col-xl-4 mt-2">
            <a
              class="btn btn-outline-primary fw-bolder w-100"
              href="/resume"
              style="font-size: 30px"
              >Resume</a
            >
          </div>
          <div class="col-xl-4 sm-12 mt-2">
            <a
              class="btn btn-outline-success fw-bolder w-100"
              href="/rewards"
              style="font-size: 30px"
              >Rewards</a
            >
          </div>
          <div class="col-xl-4 sm-1 mt-2">
            <a
              class="btn btn-outline-dark fw-bolder w-100"
              style="font-size: 30px"
              href="/projects"
              >Projects</a
            >
          </div>
        </div>
      </div>
      <div class="col-xl-4 md-6">
        <div class="row">
          <div class="col-xl-12">
            <img src="../assets/me3.png" class="w-100" />
          </div>
        </div>
      </div>
    </div>
    <div class="row" style="margin-top: 50px">
      <div class="col-md-12">
        <div class="d-flex justify-content-center fs-2 gap-4">
          <a class="text-gradient" href="https://www.instagram.com/saharat.exe/"
            ><i class="bi bi-instagram"></i
          ></a>
          <a
            class="text-gradient"
            href="https://www.linkedin.com/in/saharat-phothongkom-a465a7293/"
            ><i class="bi bi-linkedin"></i
          ></a>
          <a class="text-gradient" href="https://github.com/SaharatXP"
            ><i class="bi bi-github"></i
          ></a>
        </div>
      </div>
    </div>

    <!-- About Section-->

    <!-- <footer class="bg-white py-4 mt-auto">
        <div class="container px-5">
          <div
            class="row align-items-center justify-content-between flex-column flex-sm-row"
          >
            <div class="col-auto">
              <div class="small m-0">Copyright &copy; Your Website 2023</div>
            </div>
            <div class="col-auto">
              <a class="small" href="#!">Privacy</a>
              <span class="mx-1">&middot;</span>
              <a class="small" href="#!">Terms</a>
              <span class="mx-1">&middot;</span>
              <a class="small" href="#!">Contact</a>
            </div>
          </div>
        </div>
      </footer> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import NavCompo from "@/components/Nav.vue";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    NavCompo,
  },
};
</script>
