<template>
  <div>
    <NavCompo></NavCompo>

    <div class="container">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bolder mb-0" style="margin-top: 50px">
          <span class="text-success d-inline mt-5">Rewards</span>
        </h1>
      </div>
      <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
        <a class="navbar-brand" href="#"></a>
        <ul class="nav nav-pills">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              >Startup Rewards</a
            >
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#scrollspyHeadingStartup1"
                  >Startup Thailand league</a
                >
              </li>
              <li>
                <a class="dropdown-item" href="#scrollspyHeadingSibb"
                  >SIBB Global connect</a
                >
              </li>

              <li>
                <a class="dropdown-item" href="#scrollspyHeadingGetAndGo"
                  >30 hr. Get&Go Program 2020</a
                >
              </li>

              <li>
                <a class="dropdown-item" href="#scrollspyHeadingBB"
                  >Business Brotherhood</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeadingUni"
              >University Rewards</a
            >
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabindex="0"
      >
        <h4 id="scrollspyHeadingStartup1">รายการ Startup Thailand league</h4>
        ref:
        <a href="https://www.khonkaenuniversity.in.th/33636/" target="_blank"
          >click</a
        ><br />
        video ref :
        <a
          href="https://youtu.be/sZhSNxY4mt8?si=Pjh2h2OPzGIQ5MdI"
          target="_blank"
          >click</a
        >
        <div class="row mt-5">
          <div class="col-xl-4">
            <img
              src="../assets/reward/startup/stl1.jpg"
              alt=""
              class="w-100 rounded"
            />
          </div>
          <div class="col-xl-8">
            <img
              src="../assets/reward/startup/stl2.jpg"
              alt=""
              class="w-100 rounded"
            />
          </div>
        </div>

        <hr />
        <h4 id="scrollspyHeadingSibb">รายการ SIBB Global connect</h4>
        ref :
        <a
          href="https://www.facebook.com/KKUSP/posts/3394276200616391/"
          target="_blank"
          >link 1 click</a
        >,
        <a
          href="https://www.facebook.com/KKUSP/posts/3322168217827190/?locale=th_TH"
          target="_blank"
          >link 2 click</a
        >
        <div class="row mt-5">
          <div class="col-xl-4">
            <img
              src="../assets/reward/startup/Sibb1.jpg"
              alt=""
              class="w-100 rounded"
            />
          </div>
          <div class="col-xl-8">
            <img
              src="../assets/reward/startup/Sibb2.jpg"
              alt=""
              class="w-100 rounded"
            />
          </div>
        </div>

        <hr />
        <h4 id="scrollspyHeadingGetAndGo">รายการ 30 hr. Get&Go Program 2020</h4>
        <div class="row mt-5">
          <div class="col-xl-8">
            <img
              src="../assets/reward/startup/30.jpg"
              alt=""
              class="w-100 rounded"
            />
          </div>
        </div>
        <hr />
        <h4 id="scrollspyHeadingBB">รายการ Business Brotherhood</h4>
        ref :
        <a
          href="https://www.facebook.com/KKUSP/photos/a.124964104214300/3187308404646506/?locale=th_TH"
          target="_blank"
          >click [ทีม KKU]</a
        >
        <div class="row mt-5">
          <div class="col-xl-8">
            <img
              src="../assets/reward/startup/bb.jpg"
              alt=""
              class="w-50 rounded"
            />
          </div>
        </div>
        <hr />

        <h4 id="scrollspyHeadingUni">รางวัลระดับมหาลัย</h4>
        ref :
        <a
          href="https://e.sc.kku.ac.th/sci-eoffice/thesis/file/2020Aug25113355.pdf"
          target="_blank"
        >
          click
        </a>
        ,
        <a href="https://dms.kku.ac.th/file/download/pub/49171" target="_blank"
          >click [2]</a
        >
        <br />

        - รางวัลนักศึกษาดีเด่น สาขาวิชา วิทยาการคอมพิวเตอร์ ปีการศึกษา 2562
        <br />
        - รางวัลเชิดชูเกียรติด้านนวัตกรรม คณะวิทยาศาสตร์ ปีการศึกษา 2563 <br />
        - รางวัลเชิดชูเกียรติ กาลพฤกษ์ด้านนวัตกรรม และสิ่งประดิษฐ์ ปีการศึกษา
        2563<br />
        - รางวัลสร้างชื่อเสียงให้กับคณะวิทยาศาสตร์ ปีการศึกษา 2563 <br />
        - รางวัลนำเสนอผลงานแบบโพสเตอร์ ระดับดีเยี่ยม งานประชุมวิชาการ ครั้งที่
        27<br />

        <div class="row mt-5">
          <div class="col-xl-8">
            <img
              src="../assets/reward/university/u1.jpg"
              alt=""
              class="w-100 rounded"
            />
          </div>
        </div>
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
