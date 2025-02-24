import "../css_designs/Tools.css";
import {
  Divider,
} from "@mui/material";
import { useMoney, useUserData } from "../api/context/get_edit";
import { useTool_levelup } from "../api/game_functions";
import {useToolImgPaths, useToolNames} from "../api/context/get_edit"; // useToolNames をインポート
import initialTools from "../stores/initialTools"; // initialTools.js からツールデータをインポート

const Tools = () => {
    const money = useMoney();
    const userData = useUserData();
    const tool_level = userData.userData?.tool_level || 0;
    const buyTool = useTool_levelup();
    const toolNames = useToolNames(); // 道具の名前を取得

    const getTool = (level) => {
        // レベルが各ツールの minLevel *より大きい* 最初のツールを検索
        const currentTool = initialTools.find(tool => level <= tool.minLevel);
        return currentTool ? currentTool : initialTools[0]; // ツールオブジェクト全体を返す。見つからない場合は最初のツールを返す。
    };

    let cost = null;


    if (tool_level) { // tool_level が null でない場合に cost を計算
   cost = Math.round(Math.floor(30 * Math.pow(1.5, tool_level-1)));
  

    } else {
        return null;
    }

    if (cost === null) {
        return null;
    }

    const currentTool = getTool(tool_level); // 現在のツールを取得

    return (
        <div className="testDiv Case2">
            <h1>道具</h1>
            <Divider className="Tools-divider" />
            <div className="tool_level">
                {currentTool.name} {/* ツール名を表示 */}
                <br />Lv.{tool_level}
                <img src={currentTool.img_path} alt={currentTool.name} />{/* ツール画像を表示 */}
            </div>
            <button
                className="button2"
                onClick={buyTool}
                disabled={money === null || money < cost || tool_level >= 50 * (initialTools.length)} // 上限レベルに達した場合もdisabledにする
            >
                <div className="testDiv.Case1">
                    レベルアップ
                    <br />
                    {"¥" + cost.toLocaleString()}
                </div>
            </button>
        </div>
    );
};

export default Tools;