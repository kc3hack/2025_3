import Landscape from '../components/Landscape';
import Tools from '../components/Tools';

import Facilities from '../components/Facilities';

import Menu from '../components/Menu';

import {
  useMoney,
  useLmHeights,
} from "../api/context/get_edit";

function GamePage() {
  const LmHeights = useLmHeights() || [];
  const Money = useMoney() ?? 0;
  return (

    <Landscape statusValue={Money} tipsHeightList={LmHeights}/>

  );
}

export default GamePage;
