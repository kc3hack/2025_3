interface UserData {
    id: number;// ユーザーID
    name: string;// ユーザー名
    sand: number;// 砂の量
    elevation: number;// 標高
    money: number;// お金
    facility: number[];// 施設の解放状況
    tool_level: number;// 道具のレベル
}
interface Landmark {// tipsで用いるランドマークの情報
    length: number,      // 標高、全長、周長など
    name: string,        // 名前
    prefecture: string,  // 都道府県
    description: string, // 説明
    img_path: string,       // 画像のパス
}
interface Facility {
    name: string,       // 名前
    img_path: string,   // 画像のパス
    efficiency: number, // 単位時間あたりの取得金額
    cost: number        // 値段
    magnification: number, // 倍率
    isLocekd: boolean,   // ロックされているかどうか
}


export type { UserData, Landmark, Facility };