import {
  APITYPES,
  LocalStorageKeys,
  REQTYPES,
  apiSlice,
  setLocalStorageObject,
} from "@/shared";

export const loginApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<APITYPES.USER.T, REQTYPES.LOGIN.REQ>({
      query: (data) => ({
        method: "POST",
        url: REQTYPES.LOGIN.URL,
        body: data,
      }),
      onQueryStarted: (_, { queryFulfilled }) => {
        queryFulfilled.then(({ data }) => {
          setLocalStorageObject(LocalStorageKeys.USER, data);
          window.location.reload();
        });
      },
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation } = loginApi;
