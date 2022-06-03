import { Dispatch, SetStateAction } from "react";

export type PopUpT = {
  popup: boolean;
  setPopup: Dispatch<SetStateAction<boolean>>;
};
