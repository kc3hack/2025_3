import { Facility } from "../api/dataType";

const initialFacilities: Facility[] = [
  { // 最初からアンロックされている施設
    name: "天保山公園",
     description: "隠れた花見の名所としても注目されている。",
    img_path: "../../img/facilities/landmark_oosakajou.png",
    efficiency: 1,
    cost: 10,
    magnification: 1.1,
    stock: 0,
  },
  {
    name: "施設2",
     description: "施設2の説明。",
    img_path: "../../img/facilities/building_suizokukan.png",
    efficiency: 1.3,
    cost: 15,
    magnification: 1.2,
    stock: 0,
  },
  {
    name: "施設3",
     description: "施設3の説明。",
    img_path: "../../img/facilities/building_high2.png",
    efficiency: 3,
    cost: 20,
    magnification: 1.3,
    stock: 0,
  },
  {
    name: "施設4",
     description: "施設4の説明。",
    img_path: "../../img/facilities/kankou_kinkakuji.png",
    efficiency: 5,
    cost: 30,
    magnification: 1.4,
    stock: 0,
  },
  {
    name: "施設5",
     description: "施設5の説明。",
    img_path: "../../img/facilities/tatemono_jinja.png",
    efficiency: 7,
    cost: 50,
    magnification: 1.5,
    stock: 0,
  },
  {
    name: "施設6",
     description: "施設6の説明。",
    img_path: "../../img/facilities/tsutenkaku_osaka.png",
    efficiency: 11,
    cost: 100,
    magnification: 1.6,
    stock: 0,
  },
];

export default initialFacilities;
