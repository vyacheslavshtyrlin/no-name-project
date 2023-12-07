export const setLocalStorageItem = (key: string, item: string) => {
  return localStorage.setItem(key, item);
};

export const setLocalStorageObject = (key: string, item: unknown) => {
  return localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorageItem = (key: string) => {
  return localStorage.getItem(key);
};

export const removeLocalStorageItem = (key: string) => {
  return localStorage.removeItem(key);
};

export const getLocalStorageObject = (key: string) => {
  const obj = localStorage.getItem(key);

  return obj ? JSON.parse(obj) : {};
};

export const removeLocalStorageItems = (keys: string[]) => {
  keys.forEach((key) => {
    localStorage.removeItem(key);
  });
};

export enum LocalStorageKeys {
  USER = "USER",
}
