import { request } from "@/service/request";

export const getListData = () => {
  return request({
    url: "/api/post",
    method: "get",
    // data,
    config: {
      // timeout: 10000,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  });
};