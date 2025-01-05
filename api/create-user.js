const axios = require("axios");

const API_URL = "http://192.168.1.101:8080/api/auth/local/register";
const API_TOKEN =
  "Bearer 93b80ecc1ee28c32bdaa23394c49dc06c14abad3d35ebb0602a50c2d2f187736ccae022a390804f6ab5dc9e443f89ac5996c0da588b4a715ed80c571c1f033efb0222bb58a3566e9fa9c3a24799a53042055dd3ee201f5cef45ad8811d8d26d35365d666ada543b8551350b78958ced4b839246ca90f98723d66d48e53ada223";

// objects
const payload = {
  username: "thatchanon",
  email: "s6602041520101@email.kmutnb.ac.th",
  password: "beam78895530TI",
};

axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("ส่ง API สําเร็จ", response.data);
  })
  .catch((err) => {
    console.log("ส่งไม่ผ่าน ", err);
  });

//Prompt node name file
