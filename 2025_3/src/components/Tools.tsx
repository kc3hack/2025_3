import "../components/Tools.css";
import { useState } from "react";
import { useMoney, useUserData } from "../api/context/get_edit";
import { useTool_levelup } from "../api/context/game_functions";
import a from "../src/assets/a.png"

const Tools = () => {
    const money = useMoney();
    const tool_level = useUserData().userData?.tool_level;
    const buyTool = useTool_levelup();

    // cost の宣言を関数のスコープ内に移動
    let cost = null;

    if (tool_level) { // tool_level が null でない場合に cost を計算
        cost = Math.round(10 * tool_level);
    } else {
        return null; // tool_level が null の場合は何も表示しない
    }

    // cost が計算できなかった場合も考慮
    if (cost === null) {
      return null;
    }

    return (
        <div className="testDiv Case2">
            div2
            <div className="testDiv Case7">
                <img src={a} alt="スコップ" /> {/* alt 属性を追加 */}
            </div>
            <div className="tool_level">Lv.{tool_level}</div>
            スコップ
            <br />
            {"¥" + cost.toLocaleString()}
            <button
                className="button2"
                onClick={() => buyTool(/* 必要な引数を渡す */)} // 引数を渡す
                disabled={money === null || money < cost} // money が null の場合も考慮
            >
                Change Image
            </button>
        </div>
    );
};

export default Tools; // Toolsコンポーネントをexport