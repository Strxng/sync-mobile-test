import { ITheme } from "@/common/theme";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components";
import { Text } from "@/components/Text";
import { useLocalSearchParams } from "expo-router";
import { IUser } from "@/interfaces/user";

import * as S from "./styles";

export const DetailsScreen = () => {
  const { spacing } = useTheme() as ITheme;
  const params = useLocalSearchParams();

  const user = JSON.parse(params.user as string) as IUser;

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: spacing.paddings.large }}
    >
      <S.Banner />
      <S.Avatar />

      <S.Content>
        <Text size={"extraLarge"} family={"bold"} color={"primary"}>
          {user.name}
        </Text>
        <Text size={"medium"} family={"bold"} color={"secondary"}>
          {user.schoolName}
        </Text>

        <S.InterestSection>
          {user.interest.map((interest: string) => (
            <S.InterestContainer key={interest}>
              <Text size={"medium"} family={"bold"} color={"secondary"}>
                {interest}
              </Text>
            </S.InterestContainer>
          ))}
        </S.InterestSection>
      </S.Content>
    </ScrollView>
  );
};
