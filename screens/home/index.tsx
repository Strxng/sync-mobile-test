import { ITheme } from "@/common/theme";
import { UserCard } from "@/components/UserCard";
import { getAllUsersService } from "@/services/users/getAllUsersService";
import { useQuery } from "@tanstack/react-query";
import { ScrollView, Text } from "react-native";
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
      <Text style>List of Users</Text>

      <UserCard />
      <UserCard />
      <UserCard />
    </ScrollView>
  );
};
