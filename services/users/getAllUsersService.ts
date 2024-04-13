import { httpGet } from "@/providers/http";

export const getAllUsersService = async () => {
  const users = await httpGet({
    endpoint: "v1/admin/users",
  });

  return users;
};
