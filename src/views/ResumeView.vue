<template>
  <div>
    <NavCompo></NavCompo>

    <div class="container">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bolder mb-0" style="margin-top: 50px">
          <span class="text-success d-inline mt-5">Resume</span>
        </h1>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-11 col-xl-11 col-xxl-11">
          <!-- Experience Section-->
          <section>
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h2 class="text-success fw-bolder mb-0">
                Experience <br />
                ( 3 Years )
              </h2>
              <!-- Download resume button-->
              <!-- Note: Set the link href target to a PDF file within your project-->
              <!-- <button class="btn btn-success px-4 py-3" disabled>
                <div class="d-inline-block bi bi-download me-2"></div>
                Download Resume ( soon... )
              </button> -->

              <!-- Example single danger button -->
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-success dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Download
                </button>
                <ul class="dropdown-menu">
                  <li v-for="item in pdfx">
                    <button
                      @click="downloadPDF(item.path_name)"
                      class="dropdown-item"
                    >
                      {{ item.name_style }}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <!-- Experience Card 1-->
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-success fw-bolder mb-2">
                        <img
                          src="https://www.krungsri.com/getmedia/dff00b7d-b33d-436c-b23f-f6e92dc85f70/krungsri-auto-logo.webp.aspx"
                          class="w-100"
                        /><br />
                        2022 - Present
                      </div>
                      <div class="fw-bolder">
                        IT Auto PMO Quality Assurance and Support Department
                      </div>
                      <div class="text-muted">
                        Bank of ayudhya public company limited [ATCAL]
                      </div>
                      <div class="text-muted">WFH & Bangkok, Thailand</div>
                    </div>
                  </div>
                  <div class="col-lg-8 text-left">
                    <div class="text-left">
                      Design Test Case and create Automate , Pipeline for deploy
                      system. <br />
                      Research Test solution ( Agile Testing ) automte test,
                      manual test, test pyramid to share with all qa squad.
                      <br />
                      Support deployment and SIT/UAT with users. <br />
                      Troubleshoot teams that need help with automate testing or
                      other issues with dev tools. <br />
                      Build a starter kit for integration test , smoke test
                      system.

                      <br /><br />
                      - Flutter integration Automate Testing <br />
                      - Manual Testing <br />
                      - Appium Automate Test <br />
                      - Api Testing with Postman/Newman<br />
                      - AWS <br />
                      - Jira, Confluence <br />
                      - Web and Mobile Support UAT , Bugbash - DICD ,
                      Deployment<br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-success fw-bolder mb-2">2020 - 2022</div>
                      <div class="fw-bolder">Full Stack Developer</div>
                      <div class="text-muted">SuriyaIT</div>
                      <div class="text-muted">Khonkaen, Thailand</div>
                    </div>
                  </div>
                  <div class="col-lg-8 text-left">
                    <div class="text-left">
                      <h5>DMS ( Dealer Management System )</h5>
                      เป็นระบบที่ช่วยจัดการของศูนย์บริการและดีลเลอร์
                      สามารถแบ่งได้หลายส่วนในระบบ เช่น <br />
                      - ส่วนของฝ่ายลูกค้า (CRM) เพื่อจัดการการนัดหมาย (
                      Appointment System ) ผ่าน Line Official Account
                      และตรวจสอบการเช้าเช็คระยะการเข้ารับบริการ <br />
                      - ส่วนศูนย์บริการซ่อมสีและตัวถัง ( Service Body and Paint
                      ) : จัดการงานซ่่อม( Job ) ให้กัับช่างในศูนย์บริการ
                      พร้อมทั้งการส่งงานไปให้กับฝ่ายงานต่าง ๆ<br />
                      - ส่วนของระบบการขาย ( Sales and Stock ) :
                      จัดการส่วนงานของสต๊อก พร้อมทั้งการรับเข้า และจ่ายออก
                      รวมไปถึงการจองรถ และปิดงานขายให้กับลูกค้า <br />
                      <br /><br />
                      Tools : vs code, chrome, figma, trello , monday , postman
                      , git , docker, GCP
                      <br />
                      Programming Languages : Html, css, Javascript, Node.Js,
                      PHP , Dart <br />
                      Framework : Laravel framework , Vue.js , Nest.js , nuxt.js
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Experience Card 2-->
          </section>
          <!-- Education Section-->
          <section>
            <h2 class="text-primary fw-bolder mb-4">Education</h2>
            <!-- Education Card 1-->
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <div class="row align-items-center gx-5">
                  <div class="col text-center text-lg-start mb-4 mb-lg-0">
                    <div class="bg-light p-4 rounded-4">
                      <div class="text-primary fw-bolder mb-2">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/th/thumb/1/1f/Khon_Kaen_University_Logo.svg/1200px-Khon_Kaen_University_Logo.svg.png"
                          alt=""
                          class="w-50"
                        />
                        <br />
                        2017 - 2020
                      </div>
                      <div class="mb-2">
                        <div class="fw-bolder">Khonkaen University</div>
                        <div class="text-muted">Khonkaen, Thailand</div>
                      </div>
                      <div class="fst-italic">
                        <div class="text-muted">Master's</div>
                        <div class="text-muted">Information Technology</div>
                        <div class="text-muted">Faculty of Science</div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div>
                      [TH]<br />
                      ปริญญาตรี สาขา เทคโนโลยีสารสนเทศ ( Business )<br />
                      มหาวิทยาลัยขอนแก่น<br />
                      จบการศึกษา 2021<br />
                      รางวัลด้านการประกวด<br />
                      ชื่อผลงาน : Dormup - dormitory management <br />
                      - รางวัลทุนการศึกษา การแข่งขัน startup thailand league
                      2020<br />
                      - รางวัลทุนการศึกษา โครงการ Business Brotherhood 2020
                      <br />
                      - รางวัลทุนการศึกษา โครงการ 30 hr. Get&Go Program 2020<br />
                      - รางวัลชมเชย การแข่งขัน Sibb global Connect 2020
                      <br /><br />

                      ผลงานด้านอื่นๆ เกี่ยวกับมหาวิทยาลัย<br />
                      - รางวัลนักศึกษาดีเด่น สาขาวิชา วิทยาการคอมพิวเตอร์
                      ปีการศึกษา 2562<br />
                      - รางวัลเชิดชูเกียรติด้านนวัตกรรม คณะวิทยาศาสตร์
                      ปีการศึกษา 2563<br />
                      - รางวัลเชิดชูเกียรติ กาลพฤกษ์ด้านนวัตกรรม และสิ่งประดิษฐ์
                      ปีการศึกษา 2563<br />
                      - รางวัลสร้างชื่อเสียงให้กับคณะวิทยาศาสตร์ ปีการศึกษา
                      2563<br />
                      - รางวัลนำเสนอผลงานแบบโพสเตอร์ ระดับดีเยี่ยม
                      งานประชุมวิชาการ ครั้งที่ 27<br />
                      <br /><br />
                      [EN] <br />
                      University Experience 2021 - 2020<br />
                      - Awarded Scholarship in three compactions. <br />
                      o “Startup Thailand League”<br />
                      o “Business Brotherhood”<br />
                      o “30 hr. Get&Go program” <br />
                      - Consolation prize<br />
                      o Sibb Global Connect 2020 competition” <br />
                      - Cherd Choo Keart Kalla Prapreuk Award in Innovation and
                      Invention<br />
                      - Cherd Choo Keart Kalla Prapreuk Award in Innovation of
                      Science Faculty <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Divider-->
          <div class="pb-5"></div>
          <!-- Skills Section-->
          <section>
            <!-- Skillset Card-->
            <div class="card shadow border-0 rounded-4 mb-5">
              <div class="card-body p-5">
                <!-- about -->
                <div class="mb-5">
                  <div class="d-flex align-items-center mb-4">
                    <div
                      class="feature bg-success bg-gradient-success-to-secondary text-white rounded-1 me-3"
                    >
                      <i class="bi bi-file-earmark-person-fill"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline">About Me</span>
                    </h3>
                  </div>
                  <div class="row row-cols-1 row-cols-md-2 mb-4">
                    <div
                      class="col mb-4 mb-md-4 text-center"
                      v-for="item in about_options"
                    >
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        {{ item.topic }} : {{ item.detail }}
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Professional skills list-->
                <div class="mb-5">
                  <div class="d-flex align-items-center mb-4">
                    <div
                      class="feature bg-success bg-gradient-success-to-secondary text-white rounded-1 me-3"
                    >
                      <i class="bi bi-tools"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline">Skills & Tools</span>
                    </h3>
                  </div>
                  <div class="row row-cols-2 row-cols-md-4 mb-4">
                    <div
                      class="col mb-4 mb-md-4 text-center"
                      v-for="item in skills_option"
                    >
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        {{ item.name }}
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Languages list-->
                <div class="mb-0">
                  <div class="d-flex align-items-center mb-4">
                    <div
                      class="feature bg-success bg-gradient-success-to-secondary text-white rounded-1 me-3"
                    >
                      <i class="bi bi-code-slash"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline">Languages</span>
                    </h3>
                  </div>
                  <div class="row row-cols-2 row-cols-md-4 mb-4">
                    <div
                      class="col mb-4 mb-md-4"
                      v-for="item in languages_oprion"
                    >
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        {{ item.name }}
                      </div>
                    </div>
                  </div>
                </div>

                <!--  Framework-->
                <div class="mb-0">
                  <div class="d-flex align-items-center mb-4">
                    <div
                      class="feature bg-success bg-gradient-success-to-secondary text-white rounded-1 me-3"
                    >
                      <i class="bi bi-android2"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline">Framework</span>
                    </h3>
                  </div>
                  <div class="row row-cols-2 row-cols-md-4 mb-4">
                    <div
                      class="col mb-4 mb-md-4"
                      v-for="item in framework_oprion"
                    >
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        {{ item.name }}
                      </div>
                    </div>
                  </div>
                </div>

                <!--  Another skills-->
                <div class="mb-0">
                  <div class="d-flex align-items-center mb-4">
                    <div
                      class="feature bg-success bg-gradient-success-to-secondary text-white rounded-1 me-3"
                    >
                      <i class="bi bi-boombox-fill"></i>
                    </div>
                    <h3 class="fw-bolder mb-0">
                      <span class="text-gradient d-inline"
                        >Another skills
                      </span>
                    </h3>
                  </div>
                  <div class="row row-cols-2 row-cols-md-4 mb-4">
                    <div
                      class="col mb-4 mb-md-4"
                      v-for="item in another_skills"
                    >
                      <div
                        class="d-flex align-items-center bg-light rounded-4 p-3 h-100"
                      >
                        {{ item.name }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
  methods: {
    downloadPDF(path) {
      // Replace 'your_pdf_file.pdf' with the actual filename of your PDF file
      const fileName = path;
      const filePath = `/pdf/${fileName}`; // Update the path if needed

      // Create an anchor element
      const link = document.createElement("a");
      link.href = filePath; // Directly use the relative file path
      link.download = fileName;

      // Append the anchor element to the body
      document.body.appendChild(link);

      // Trigger a click event to initiate download
      link.click();

      // Clean up - remove the anchor element
      document.body.removeChild(link);
    },
  },
  data() {
    return {
      pdfx: [
        {
          name_style: "Developer Style",
          path_name: "Resume_Saharat_Dev_style.pdf",
        },
        {
          name_style: "CV Style",
          path_name: "CV_SAHARAT.pdf",
        },
        {
          name_style: "Normal Style",
          path_name: "Resume_Saharat_Normal_style.pdf",
        },
      ],
      // pdfUrl: "../assets/resume/Resume_Saharat_Dev_style.pdfxs",
      about_options: [
        {
          topic: "Name [EN]",
          detail: "Saharat Phothongkom",
        },
        {
          topic: "Name [TH]",
          detail: "สหรัถ โพธิ์ทองคำ",
        },
        {
          topic: "Nickname",
          detail: "Bank",
        },
        {
          topic: "Location",
          detail: "Bangkok, Thailand",
        },
        {
          topic: "Language",
          detail: "TH, EN",
        },
        {
          topic: "Age",
          detail: "24",
        },
        {
          topic: "status",
          detail: "Single",
        },
        {
          topic: "GPA",
          detail: "2.62",
        },
        {
          topic: "สภานะทางทหาร",
          detail: "ไม่ต้องเกณฑ์ทหาร (นักศึกษาวิชาทหาร)",
        },
        {
          topic: "คติ",
          detail:
            "สิ่งเดียวที่จะกำหนดชะตาชีวิตฉัน ไม่ใช่โชคชะตา แต่เป็นตัวฉันเอง",
        },
      ],
      skills_option: [
        {
          name: "Web Fullstack Developer",
        },
        {
          name: "Mobile Developer",
        },
        {
          name: "Responsive UI",
        },
        {
          name: "Software Automate Tester",
        },
        {
          name: "End-to-end Test",
        },
        {
          name: "CI/CD",
        },
        {
          name: "UX/Ui Design",
        },
        {
          name: "Github / GitLab",
        },
        {
          name: "Jira / Confluence",
        },
        {
          name: "Trello",
        },
        {
          name: "SQL",
        },
        {
          name: "Node.JS",
        },
        {
          name: "Project Management",
        },
        {
          name: "Presentations",
        },
        {
          name: "Business Analyst",
        },
        {
          name: "DATA Analysis",
        },
        {
          name: "Souecetree",
        },
        {
          name: "Git Command",
        },

        {
          name: "AWS",
        },
        {
          name: "Google cloud platform",
        },
        {
          name: "Visual Studio Code",
        },
        {
          name: "Android Studio",
        },
        {
          name: "npm",
        },
        {
          name: "yarn",
        },
        {
          name: "brew",
        },
        {
          name: "cmd/terminal command",
        },
        {
          name: "draw.io",
        },
        {
          name: "figma",
        },
      ],

      languages_oprion: [
        {
          name: "HTML",
        },
        {
          name: "CSS",
        },
        {
          name: "Javascript",
        },
        {
          name: "Dart",
        },
        {
          name: "Python",
        },
        {
          name: "PHP",
        },
        {
          name: "JAVA",
        },
        {
          name: "C# , C, C++ , .Net",
        },
      ],
      framework_oprion: [
        {
          name: "Appium",
        },
        {
          name: "Vue.js",
        },
        {
          name: "Flutter",
        },
        {
          name: "Flutter Integration Test",
        },
        {
          name: "Laravel Framework",
        },
        {
          name: "NUXT.js",
        },
        {
          name: "NEXT.js",
        },

        {
          name: "Bootstrap",
        },
        {
          name: "daisyUI / Tailwind CSS",
        },
        {
          name: "Selenium Library",
        },
        {
          name: "Express.js",
        },
        {
          name: "DomPDF",
        },

        {
          name: "Google Chart",
        },
      ],
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
        {
          name: "Adobe XD",
        },
        {
          name: "Sketchup",
        },
        {
          name: "Autocad",
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
