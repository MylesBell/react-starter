import { Store, Action } from "redux";
import { History } from "history";

export interface RootProps {
  store: Store<any, Action<any>>;
  history: History<any>;
}
