<template>
  <div>
    <NavCompo></NavCompo>

    <div class="container">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bolder mb-0" style="margin-top: 50px">
          <span class="text-success d-inline mt-5">Projects</span>
        </h1>
      </div>
      <div class="row gx-5 justify-content-center">
        <div class="col-lg-11 col-xl-11 col-xxl-11">
          <!-- Project Card 1-->
          <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div class="card-body p-0">
              <div class="row align-items-center">
                <div class="col-xl-6 p-5">
                  <h2 class="fw-bolder">DORMUP Dormitory Management</h2>
                  <p>
                    DormUp คือ
                    ระบบที่จะช่วยเจ้าของกิจการในการจัดการข้อมูลของหอพัก
                    ทั้งการทำบัญชี การตรวจสอบข้อมูลของหอพัก หรือแม้กระทั่ง
                    การจดมิเตอร์น้ำ / ไฟ
                    และการส่งอิเล็กทรอนิกส์บิลให้กับผู้พักทำให้เจ้าของกิจการมีเวลามากขึ้น
                    ความสะดวกสบายมากขึ้น
                    ทั้งยังสร้างความเชื่อมันให้กับผู้พักในเรื่องของความผิดพลาดของข้อมูลที่น้อยลง
                    รวมทั้งฟังก์ชันอื่นๆ ที่อำนวยความสะดวกให้กับเจ้าของกิจการ
                    ทำให้เกิดผลดีต่อผู้ประกอบการและ DormUp จะทำให้ผู้ประกอบการ
                    เป็นเสือนอนกินที่แท้จริง
                  </p>
                </div>
                <div class="col-xl-6 p-5">
                  <img
                    class="img-fluid"
                    src="../assets/projects/dormup/logo.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- Project Card 2-->
          <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div class="card-body p-0">
              <div class="row align-items-center">
                <div class="col-xl-6 p-5">
                  <h2 class="fw-bolder">SLM ระบบจัดการร้านขายรถมือ 2</h2>
                  <p>
                    SLM Sale คือ ระบบที่ช่วยจัดการข้อมูลการซื้อ
                    พร้อมทั้งแสดงข้อมูลรถที่ผู้ขายต้องการขาย
                    และจัดการข้อมูลหลังบ้าน เปิดบิล หรือ สร้างการขายรถ/รับรถ
                    <br />
                    website ระบบหน้าบ้าน :
                    <a href="https://slmsale.devshr.com/" target="_blank"
                      >slmsale.devshr.com [PC only]
                    </a>
                    <br />
                    ระบบหลังบ้าน :
                    <a href="/projects" target="_blank" style="color: red"
                      >เจ้าของกิจการไม่อนุญาตให้เข้าถึง</a
                    >
                  </p>
                </div>
                <div class="col-xl-6 p-5">
                  <img
                    class="img-fluid"
                    src="../assets/projects/slm/logo.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Project Card 3-->
          <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div class="card-body p-0">
              <div class="row align-items-center">
                <div class="col-xl-6 p-5">
                  <h2 class="fw-bolder">
                    ระบบ POS สำหรับร้านค้าส่ง/ปลีก ที่มีจำนวนสาขามากกว่า 2 สาขา
                  </h2>
                  <p>
                    POS สำหรับจัดการร้านค้า และปั๊มน้ำมัน ที่มีจำนวนสาขามากกว่า
                    1 สาขาขึ้นไป <br />
                    คุณสมบัติ : <br />
                    - จัดการข้อมูลสินค้า และระบบ stock สินค้า <br />
                    - จัดการและสรุปข้อมูลรายวัน/เดือน/ปี <br />
                    - จัดการระบบลูกหนี้ <br />
                    <br />
                    ระบบหลังบ้าน :
                    <a href="/projects" target="_blank" style="color: red"
                      >เจ้าของกิจการไม่อนุญาตให้เข้าถึง</a
                    >
                  </p>
                </div>
                <div class="col-xl-6 p-5">
                  <img
                    class="img-fluid"
                    src="../assets/projects/wangnamthipw/logo.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
            <div class="card-body p-0">
              <div class="row align-items-center">
                <div class="col-xl-12 p-5 text-center">
                  <h2 class="fw-bolder">และระบบอื่นๆ อีกมากมาย</h2>
                  <h2 class="fw-bolder">
                    ทั้งการทำ Farm Data และ Automate Test
                  </h2>
                  <br />
                  <p>
                    <a href="/contact" style="font-size: 25px"
                      >ต้องการทราบเพิ่มเติม</a
                    >
                  </p>
                </div>
              </div>
            </div>
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
