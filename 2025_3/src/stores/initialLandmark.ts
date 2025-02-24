import { Landmark } from "../api/dataType";

const initialLandmarks: Landmark[] = [
  { height: 15.0,     markpoint: 1,     name: "東大寺　大仏像",   prefecture: "奈良県", description: "東大寺の金堂内部にある。造立には当時人口の約半分、のべ260万人もの人々が協力した。", img_path: "../../img/landmarks/landmark1.5.png" },
  { height: 18.0,     markpoint: -1,    name: "二条城天守台",     prefecture: "京都府", description: "江戸時代初期に伏見城から移築された天守があったがその134年後に落雷によって焼失し、再建されることなく現在に至る。", img_path: "../../img/landmarks/landmark2.png" },
  { height: 32.55,    markpoint: -1,    name: "法隆寺　五重塔",   prefecture: "奈良県", description: "国宝。木造五重塔として現存世界最古。最下層の心柱の四方には釈迦に関する四つの説話を表す塑像の小群像がある。", img_path: "../../img/landmarks/landmark3.png" },
  { height: 41.5,     markpoint: 2,     name: "余部鉄橋", prefecture: "兵庫県", description: "全長309.4mのJR山陰本線の鉄橋。保存されている3本の橋脚が、展望施設「空の駅」を支えており、ここから日本海を一望できる。", img_path: "../../img/landmarks/landmark4.png" },
  { height: 50.0,     markpoint: -1,    name: "三段壁", prefecture: "和歌山", description: "千畳敷の南海岸にそそり立つ断崖。南北約2kmにわたって展開され、黒潮が岸壁に打ち寄せるダイナミックな光景が望める。", img_path: "../../img/landmarks/landmark5.png" },
  { height: 70.0,     markpoint: 3,     name: "太陽の塔", prefecture: "大阪府", description: "芸術家の岡本太郎がデザインし、1970年に開催された日本万国博覧会で作られた。内部には高さ約41メートルの「生命の樹」がある。", img_path: "../../img/landmarks/landmark7.png" },
  { height: 81.4,     markpoint: -1,    name: "関西国際空港管制塔", prefecture: "大阪府", description: "空港島のほぼ中央に設置されている関西国際空港の管制塔。空港から半径９ｋｍ圏内にいる飛行機に離陸や着陸の指示を出してる。", img_path: "../../img/landmarks/landmark8.png" },
  { height: 90.0,     markpoint: -1,    name: "四日市港ポートビル展望展示室", prefecture: "三重県", description: "四日市港の開港100周年を記念して建てられた。最上階の展望展示室「うみてらす14」は、360度の展望が楽しめる。", img_path: "../../img/landmarks/landmark9.png" },
  { height: 97.0,     markpoint: 4,     name: "金閣寺", prefecture: "京都府", description: "ほんとの名前は「鹿苑寺」。足利義満の北山山荘で、死後に寺とした北山文化の象徴。一度焼失していて、今は再建されたものが建っている。", img_path: "../../img/landmarks/landmark9.7.png"},
  { height: 108.0,    markpoint: -1,    name: "通天閣", prefecture: "大阪府", description: "現在の通天閣は2代目。屋外展望台に出ることができたり、滑り台を滑るツアーがある。", img_path:  "../../img/landmarks/landmark10.8.png" },
  { height: 131.0,    markpoint: 5,     name: "ニデック京都タワー", prefecture: "京都府", description: "設置されている望遠鏡を覗くと、三十三間堂本堂や知恩院山門などの国宝や、東寺、清水寺などの京都の有名な観光スポットを見ることができる。", img_path: "../../img/landmarks/landmark13.1.png" },
  { height: 173.0,    markpoint: 6,    name: "梅田スカイビル 空中庭園展望台", prefecture: "大阪府", description: "連結高層建築・梅田スカイビルの連結部にあり、40階の屋内展望台と360度展望台で構成される。晴れた日には淡路島までも一望できる。", img_path: "../../img/landmarks/landmark17.png" },
  { height: 242.0,    markpoint: 7,     name: "清水山", prefecture: "京都府", description: "あの清水寺が中腹にある。慣用句、「清水の舞台から飛び降りる」の清水はここのことであり、実際の高さは13m程である。", img_path: "../../img/landmarks/landmark24.2.png" },
  { height: 300.0,    markpoint: 8,    name: "あべのハルカス", prefecture: "大阪府", description: "日本一の高さを誇るビル。 ビル内には「ハルカス300」という展望台が、58～60階に渡って広がっている。また吹き抜けの空中庭園も設置されている。", img_path: "../../img/landmarks/landmark30.png" },
  { height: 474.0,    markpoint: 9,     name: "東山如意ヶ嶽", prefecture: "京都府", description: "5つの送り火の内最も大きい山。灯される送り火文字は「大」の字。最初に点火される字でもある。", img_path:  "../../img/landmarks/landmark47.4.png" },
  { height: 642.0,    markpoint: 10,    name: "生駒山", prefecture: "奈良県", description: "近鉄生駒駅に隣接する鳥居前から生駒山上まで約2kmをケーブル線で結んでいる近鉄生駒ケーブルがあり、景色を楽しみながら山頂に迎える。", img_path:  "../../img/landmarks/landmark64.2.png" },
  { height: 858.0,    markpoint: 11,    name: "和泉葛城山", prefecture: "和歌県", description: "大阪と和歌山の境目に横たわる山。古くから山頂の大阪側と和歌山側に背中合わせで八代竜王社が祀られている。", img_path:  "../../img/landmarks/landmark85.8.png" },
  { height: 931.0,    markpoint: 12,    name: "六甲山", prefecture: "兵庫県", description: "東西に約30㎞に渡って山が連なっている。展望台や牧場、植物園、アスレチックパーク等の自然のアクティビティが多くある。", img_path:  "../../img/landmarks/landmark93.1.png" },
  { height: 1125.0,   markpoint: 13,    name: "金剛山", prefecture: "大阪府", description: "大阪府の最高峰。独自の登山回数カウントシステムがあり、登山毎に山頂で回数スタンプを捺印してもらえ、登山回数100回以上の金剛錬成会員には毎年5月3日に表彰式が行われる。", img_path:  "../../img/landmarks/landmark112.5.png" },
]; export default initialLandmarks;



//     interface Landmark {// tipsで用いるランドマークの情報
//     length: number,      // 標高、全長、周長など
//     markpoint: number,   // マークポイント解除する施設の配列のIndex[1~](解除しない時は-1)
//     name: string,        // 名前
//     prefecture: string,  // 都道府県
//     description: string, // 説明
//     img_path: string,       // 画像のパス
// }