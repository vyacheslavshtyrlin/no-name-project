import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

export const useUser = () => {
  return useSelector((state: RootState) => state.user);
};
