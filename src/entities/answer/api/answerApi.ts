import { REQTYPES, apiSlice, routingConfig as r } from "@/shared";

const answerApi = apiSlice
  .enhanceEndpoints({ addTagTypes: ["Answer"] })
  .injectEndpoints({
    endpoints: (build) => ({
      getAnswer: build.mutation<
        REQTYPES.ANSWER.GetQueueAnswer.Resp,
        REQTYPES.ANSWER.GetQueueAnswer.Req
      >({
        query: (data) => ({
          url: REQTYPES.ANSWER.GetQueueAnswer.URL,
          body: data,
        }),
        onQueryStarted: (_, { queryFulfilled }) => {
          queryFulfilled.then(({ data }) => {
            window.open(r.answer.createPath(String(data.id)));
          });
        },
      }),
      getAnswerById: build.query<string, REQTYPES.ANSWER.GetQueueAnswer.Resp>({
        query: (id) => REQTYPES.ANSWER.GetAnswerById + `/${id}`,
      }),
    }),
    overrideExisting: false,
  });

export const { useGetAnswerMutation, useGetAnswerByIdQuery } = answerApi;
