import { IUser } from "@/interfaces/user";
import { Text } from "../Text";

import * as S from "./styles";

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
