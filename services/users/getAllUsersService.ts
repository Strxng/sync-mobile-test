import { IUser } from "@/interfaces/user";
import { httpGet } from "@/providers/http";

interface IResponseType {
  success: boolean;
  users: IUser[];
}

export const getAllUsersService = async () => {
  const { users } = await httpGet<IResponseType>({
    endpoint: "v1/admin/users",
  });

  return users;
};
