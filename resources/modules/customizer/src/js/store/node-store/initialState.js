import {SwitchObj} from "../../components/sidebar/modules/nodes-obj/SwitchObj";
import {ChangeObj} from "../../components/sidebar/modules/nodes-obj/ChangeObj";
import {StartObj} from "../../components/sidebar/modules/nodes-obj/StartObj";
import {ReturnObj} from "../../components/sidebar/modules/nodes-obj/ReturnObj";
// import {ConditionObj} from "../../components/sidebar/modules/nodes-obj/robot/ConditionObj";
import {DocumentObj} from "../../components/sidebar/modules/nodes-obj/robot/DocumentObj";
import {CrudObj} from "../../components/sidebar/modules/nodes-obj/robot/CrudObj";
import {ApiObj} from "../../components/sidebar/modules/nodes-obj/robot/ApiObj";
import {MessageObj} from "../../components/sidebar/modules/nodes-obj/robot/MessageObj";
import {RobotObj} from "../../components/sidebar/modules/nodes-obj/robot/RobotObj";
import {DiscordObj} from "../../components/sidebar/modules/nodes-obj/robot/DiscordObj";
// import {BotObj} from "../../components/sidebar/modules/nodes-obj/robot/BotObj";

export const initialState = {
  nodes: [
    StartObj,
    SwitchObj,
    ChangeObj,
    ReturnObj,
    // ConditionObj,
    DocumentObj,
    CrudObj,
    ApiObj,
    MessageObj,
    RobotObj,
    // BotObj
    DiscordObj
  ]
}
