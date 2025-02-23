import { Facility } from "../api/dataType";

const initialFacilities: Facility[] = [
  { // 最初からアンロックされている施設
    name: "天保山公園",
    description: "天保山がある公園。隠れた花見スポット。",
    img_path: "../../img/facilities/poket_park.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "天保山大観覧車",
    description: "全60基のうち4基は床や座席部分が透明な「シースルーキャビン」となっている。",
    img_path: "../../img/facilities/19503.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "海遊館",
    description: "ジンベエザメが遊泳する「太平洋水槽」を含む14の大水槽を造るため、年間世界生産量の1.5倍（当時）にあたるアクリルガラスが使用された。",
    img_path: "../../img/facilities/_e_town0099_s512_town0099_0.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "東大寺大仏",
    description: "大仏建立に用いられた銅の量は、約500トンと考えられている。（諸説あり）",
    img_path: "../../img/facilities/kohacu.com_002196_20190314.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "あべのハルカス",
    description: "成人の日には、新成人が1階から最上階の60階まで階段で登るイベントがある。",
    img_path: "../../img/facilities/_e_town0115_s512_town0115_0.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "大阪城",
    description: "安土桃山時代に豊臣秀吉によって築かれたが、現在の大阪城は江戸時代に徳川秀忠により再建されたもの。",
    img_path: "../../img/facilities/_e_town0096_s512_town0096_7.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "姫路城",
    description: "太平洋戦争中には姫路も2度の空襲被害があったものの、大天守最上階に落ちた焼夷弾が不発弾となる幸運もあり奇跡的に焼失を免れた。",
    img_path: "../../img/facilities/kankou_himejijou.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "清水寺",
    description: "記録によれば、清水の舞台から実際に飛び降りた人が1694~1864年の間に未遂を含み235件、生存率は85.4パーセントであった。",
    img_path: "../../img/facilities/68fedd7a74ee95c5653209771fa27783.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "平等院鳳凰堂",
    description: "10円硬貨だけでなく、切手のデザインにも取り入れられていた。",
    img_path: "../../img/facilities/2940_3.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "京都タワー",
    description: "2024年3月、ニデックが命名権を取得し、同年4月から2029年3月末までの5年間、本タワーの名称は「ニデック京都タワー」となった。",
    img_path: "../../img/facilities/kyoto_tower256.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "太陽の塔",
    description: "万博終了後に取り壊される予定であったが、撤去反対の署名運動があり、永久保存が決定された。",
    img_path: "../../img/facilities/e1d834b97602d4a6609c07011a036746.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "通天閣",
    description: "地下1階にはかつて水族館があったが、オイルショックの影響で閉鎖した。",
    img_path: "../../img/facilities/_e_town0110_s512_town0110_1.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
    stock: 0,
  },
  {
    name: "法隆寺",
    description: "五重塔の構造は、東京スカイツリーに用いられた最新の制振構造と同じかもしれない。",
    img_path: "../../img/facilities/kohacu.com_002194_20190312.png",
    efficiency: 1,
    cost: 1,
    magnification: 1,
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
