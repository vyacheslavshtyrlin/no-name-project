import { REQTYPES, apiSlice } from "@/shared";

export const motivationApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getMotivation: build.query<string, void>({
      query: () => ({
        url: REQTYPES.MOTIVATION.URL,
        responseHandler: (resp) => resp.text(),
      }),
    }),
  }),
});

export const { useGetMotivationQuery } = motivationApi;
