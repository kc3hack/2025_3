import { Tool } from "../api/dataType";

const initialTools: Tool[] = [
 {name:"tool1",
 img_path:"../../img/tools/tool1.png",
 minLevel:0}
 ,
{name:"tool2",
img_path:"../../img/tools/tool2.png",
minLevel:1}
,
{name:"tool3",
img_path:"../../img/tools/tool3.png",
minLevel:2}
];

export default initialTools;
// interface Tool {
//     name: string,       // 名前
//     img_path: string,   // 画像のパス
//     minLevel: number,   // 最低レベル
// }