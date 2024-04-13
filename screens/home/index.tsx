import { ITheme } from "@/common/theme";
import { Text } from "@/components/Text";
import { UserCard } from "@/components/UserCard";
import { getAllUsersService } from "@/services/users/getAllUsersService";
import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "react-native";
import { useTheme } from "styled-components";

export const HomeScreen = () => {
  const { spacing } = useTheme() as ITheme;

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: () => getAllUsersService(),
  });

  return (
    <ScrollView
      contentContainerStyle={{
        padding: spacing.paddings.large,
        gap: spacing.gaps.large,
      }}
    >
      <Text size={"extraLarge"} family={"bold"} color={"primary"}>
        List of Users
      </Text>

      {users.map((user) => (
        <UserCard key={user._id} user={user} />
      ))}
    </ScrollView>
  );
};
