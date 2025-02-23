import { Landmark } from "../api/dataType";

const initialLandmarks: Landmark[] = [
  {height: 15.0, markpoint: 1, name: "東大寺　大仏像", prefecture: "奈良県", description: "高さ14.98m。東大寺の金堂内部にある。造立には当時人口の約半分、のべ260万人もの人々が協力した。", img_path: "../../img/landmarks/landmark1.5.png"},
  {height: 20.0, markpoint: -1, name: "二条城天守台", prefecture: "京都府", description: "高さ18m。江戸時代初期に伏見城から移築された天守があったがその134年後に落雷によって焼失し、再建されることなく現在に至る。", img_path: "../../img/landmarks/landmark2.png"},
  {height: 30.0, markpoint: -1, name: "法隆寺　五重塔", prefecture: "奈良県", description: "高さ32.55m。国宝。木造五重塔として現存世界最古。最下層の心柱の四方には釈迦に関する四つの説話を表す塑像の小群像がある。", img_path: "../../img/landmarks/landmark3.png"},
  {height: 40.0, markpoint: 2, name: "余部鉄橋", prefecture: "兵庫県", description: "高さ41.5m。全長309.4mのJR山陰本線の鉄橋。保存されている3本の橋脚が、展望施設「空の駅」を支えており、ここから日本海を一望できる。", img_path: "../../img/landmarks/landmark4.png"},
  {height: 50.0, markpoint: -1, name: "三段壁", prefecture: "和歌山", description: "高さ約50m。千畳敷の南海岸にそそり立つ断崖。南北約2kmにわたって展開され、黒潮が岸壁に打ち寄せるダイナミックな光景が望める。", img_path: "../../img/landmarks/landmark5.png"},
  {height: 60.0, markpoint: -1, name: "ランドマーク6", prefecture: "滋賀県", description: "", img_path: "../../img/landmarks/landmark6.png"},
  {height: 70.0, markpoint: 3, name: "太陽の塔", prefecture: "大阪府", description: "高さ70m。芸術家の岡本太郎がデザインし、1970年に開催された日本万国博覧会で作られた。内部には高さ約41メートルの「生命の樹」がある。", img_path: "../../img/landmarks/landmark7.png"},
  {height: 80.0, markpoint: -1, name: "関西国際空港管制塔", prefecture: "大阪府", description: "高さ81.4m。空港島のほぼ中央に設置されている関西国際空港の管制塔。空港から半径９ｋｍ圏内にいる飛行機に離陸や着陸の指示を出してる。", img_path: "../../img/landmarks/landmark8.png"},
  {height: 90.0, markpoint: -1, name: "四日市港ポートビル展望展示室", prefecture: "三重県", description: "高さ90m。四日市港の開港100周年を記念して建てられた。最上階の展望展示室「うみてらす14」は、360度の展望が楽しめる。", img_path: "../../img/landmarks/landmark9.png"},
  {height: 100.0, markpoint: 4, name: "京都タワー展望室", prefecture: "京都府", description: "高さ100m。設置されている望遠鏡を覗くと、三十三間堂本堂や知恩院山門などの国宝や、東寺、清水寺などの京都の有名な観光スポットを見ることができる。", img_path: "../../img/landmarks/landmark10.png"},
]; export default initialLandmarks;
    


//     interface Landmark {// tipsで用いるランドマークの情報
//     length: number,      // 標高、全長、周長など
//     markpoint: number,   // マークポイント解除する施設の配列のIndex[1~](解除しない時は-1)
//     name: string,        // 名前
//     prefecture: string,  // 都道府県
//     description: string, // 説明
//     img_path: string,       // 画像のパス
// }