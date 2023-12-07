export const routingConfig = {
  base: {
    path: "/",
  },
  login: {
    path: "/login",
  },
  profile: {
    path: "/profile",
  },
  answer: {
    createPath: (id: string = ':answer_id') => `/answer/${id}`
  }
};
