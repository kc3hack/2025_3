import "../css_designs/Tools.css";
import {
  Divider,
} from "@mui/material";
import { useMoney, useUserData } from "../api/context/get_edit";
import { useTool_levelup } from "../api/game_functions";
import {useToolImgPaths} from "../api/context/get_edit";

const Tools = () => {
    const money = useMoney();
    const tool_level = useUserData().userData?.tool_level;
    const buyTool = useTool_levelup();
    const  tool  = useToolImgPaths();
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
            <h1>道具</h1>
            <Divider className="Tools-divider" />
            <div className="tool_level">
                スコップ
                <br />Lv.{tool_level}
                <img src="../../img/tools/tool1.png" alt="スコップ" />
            </div>
            <button
                className="button2"
                onClick={buyTool} // 修正
                disabled={money === null || money < cost}
            >
            <div className="testDiv.Case1">
            レベルアップ
            <br />
            {"¥" + cost.toLocaleString()}</div>
                
            </button>
        </div>
    );
};

export default Tools; // Toolsコンポーネントをexport