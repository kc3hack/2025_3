import { Facility } from "../api/dataType";

const initialFacilities: Facility[] = [
  { // 最初からアンロックされている施設
    name: "天保山公園",
    description: "隠れた花見の名所としても注目されている。",
    img_path: "../../img/facilities/landmark_oosakajou.png",
    efficiency: 100,
    cost: 1000,
    magnification: 2,
    stock: 0,
  },
  {
    name: "施設2",
    description: "施設2の説明。",
    img_path: "../../img/facilities/building_suizokukan.png",
    efficiency: 1,
    cost: 2,
    magnification: 1.5,
    stock: 0,
  },

];

export default initialFacilities;

/*
interface Facility {    // 施設の情報
  name: string,         // 名前
  description: string,  // 説明
  img_path: string,     // 画像のパス
  efficiency: number,   // 収益効率
  cost: number,         // レベルアップコストの初期値
  magnification: number,// レベルアップコストの上昇倍率
  stock: number,        // 収益のストック
}
*/
