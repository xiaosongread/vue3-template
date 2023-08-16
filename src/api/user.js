import { request } from "@/service/request";

export const getMenuListData = () => {
  return request({
    url: "/api/menu",
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