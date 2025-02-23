import { Tool } from "../api/dataType";

const initialTools: Tool[] = [
 {name:"tool1",
 img_path:"../../img/tools/tool1.png",
 minLevel:5}
 ,
{name:"tool2",
img_path:"../../img/tools/tool2.png",
minLevel:10}
,
{name:"tool3",
img_path:"../../img/tools/tool3.png",
minLevel:15}
,
{name:"tool1000",
img_path:"../../img/tools/tool1000.png",
minLevel:1000}
,
{name:"tool10000",
img_path:"../../img/tools/tool10000.png",
minLevel:10000}
];

export default initialTools;
// interface Tool {
//     name: string,       // 名前
//     img_path: string,   // 画像のパス
//     minLevel: number,   // 最低レベル
// }