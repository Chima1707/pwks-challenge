import { combineReducers } from "redux";
import repositories from "./repositories";
import branches from "./branches";
import ui from "./ui";

export default combineReducers({
  repositories,
  branches,
  ui
});
