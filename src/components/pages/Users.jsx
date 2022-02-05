import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

export const Users = () => {
  const users = [...Array(10).keys()].map((val) => {
    return {
      id: val,
      name: `まさお${val}`,
      image: "https://source.unsplash.com/OzAeZPNsLXk",
      email: "test@example.com",
      phone: "020-0000-1111",
      company: {
        name: "テスト会社"
      },
      website: "https://google.com"
    };
  });

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput></SearchInput>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
