import { IUser } from "@/interfaces/user";
import { View } from "react-native";

import * as S from "./styles";
import { Text } from "../Text";

interface IUserCardProps {
  user: IUser;
}

export const UserCard = ({ user }: IUserCardProps) => {
  return (
    <S.Container>
      <S.Row>
        <S.Avatar />

        <S.Column>
          <Text size={"large"} family={"bold"} color={"primary"}>
            {user.name ?? "-"}
          </Text>

          {Boolean(user.schoolName) && (
            <Text size={"small"} family={"bold"} color={"secondary"}>
              {user.schoolName}
            </Text>
          )}
        </S.Column>
      </S.Row>
    </S.Container>
  );
};
