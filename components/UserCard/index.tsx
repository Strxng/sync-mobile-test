import { IUser } from "@/interfaces/user";
import { View } from "react-native";

import * as S from "./styles";
import { Text } from "../Text";

interface IUserCardProps {
  user: IUser;
  onPress: () => void;
}

export const UserCard = ({ user, onPress }: IUserCardProps) => {
  return (
    <S.Container onPress={onPress}>
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
