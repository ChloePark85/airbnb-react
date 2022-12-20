import { atom } from "recoil";
import { value } from "../Components/modals/CheckinModal";

export const checkinState = atom({
  key: "checkinState",
  default: value,
});
