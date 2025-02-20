import { Landmark } from "../api/dataType";

const initialLandmarks: Landmark[] = [
  {height: 10.0, markpoint: 10, name: "ランドマーク1", prefecture: "京都府", description: "ランドマーク1の説明", img_path: "../../img/landmarks/landmark1.png"},
  {height: 20.0, markpoint: 20, name: "ランドマーク2", prefecture: "大阪府", description: "ランドマーク2の説明", img_path: "../../img/landmarks/landmark2.png"},
    {height: 30.0, markpoint: 30, name: "ランドマーク3", prefecture: "兵庫県", description: "ランドマーク3の説明", img_path: "../../img/landmarks/landmark3.png"},
];

export default initialLandmarks;
    


//     interface Landmark {// tipsで用いるランドマークの情報
//     length: number,      // 標高、全長、周長など
//     markpoint: number,   // マークポイント
//     name: string,        // 名前
//     prefecture: string,  // 都道府県
//     description: string, // 説明
//     img_path: string,       // 画像のパス
// }