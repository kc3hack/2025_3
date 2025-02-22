import { Tool } from "../api/dataType";

const initialTools: Tool[] = [
  {
    name: "手",
    img_path: "../../img/tools/body_te.png",
    minLevel: 0
  },
  {
    name: "スコップ",
    img_path: "../../img/tools/shvel_scoop.png",
    minLevel: 1,
  },
  {
    name: "シャベル",
    img_path: "../../img/tools/shovel_scoop_ken.png",
    minLevel: 2,
  },
  {
    name: "バケツ",
    img_path: "../../img/tools/bucket_iron_empty_down.png",
    minLevel: 3,
  },
  {
    name: "手押し車",
    img_path: "../../img/tools/ichirin_teoshiguruma.png",
    minLevel: 4,
  },
  {
    name: "ブルドーザー",
    img_path: "../../img/tools/car_bulldozer.png",
    minLevel: 5,
  },
];

export default initialTools;
// interface Tool {
//     name: string,       // 名前
//     img_path: string,   // 画像のパス
//     minLevel: number,   // 最低レベル
// }
