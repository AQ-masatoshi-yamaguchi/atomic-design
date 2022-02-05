import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "まさお",
  image: "https://source.unsplash.com/OzAeZPNsLXk",
  email: "test@example.com",
  phone: "020-0000-1111",
  company: {
    name: "テスト会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput></SearchInput>
      <UserCard user={user}></UserCard>
    </div>
  );
}
