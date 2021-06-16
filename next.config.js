import { PHASE_PRODUCTION_BUILD } from "next/constants";

module.exports = () => {
  return {
    env: {
      NEXT_PUBLIC_SEND_MESSAGE: "/api/contact",
      DATABASE:
        "mongodb+srv://admin-shivansh:ETCMQjh7cB2xWJgk@cluster0.lulk0.mongodb.net/blog-next?retryWrites=true&w=majority",
    },
  };
};
