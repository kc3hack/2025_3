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
    name: "ブルドーザー",
    img_path: "../../img/tools/car_bulldozer.png",
    minLevel: 3,
  }
];

export default initialTools;
// interface Tool {
//     name: string,       // 名前
//     img_path: string,   // 画像のパス
//     minLevel: number,   // 最低レベル
// }
