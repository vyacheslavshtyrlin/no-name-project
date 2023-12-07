import { useNavigate } from "react-router";
import { LocalStorageKeys, getLocalStorageObject } from "../localStorageUtils";
import { routingConfig as r } from "@/shared";
export const useAuth = () => {
  const nav = useNavigate();
  const {
    fio,
    password,
    permissions,
    token,
    user_id,
    username,
    subject_id,
    sip_login,
    sip_password,
  } = getLocalStorageObject(LocalStorageKeys.USER);

  const checkAuth = () => {
    if (token) nav(r.base.path);
  };

  return {
    checkAuth,
    fio,
    password,
    permissions,
    token,
    user_id,
    username,
    subject_id,
    sip_login,
    sip_password,
  };
};
