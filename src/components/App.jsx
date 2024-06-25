import Page from "components/Page/Page.styled";
import Header from "components/Header/Header.styled";
import HeaderIcons from "./Icons/HeaderIcons.styled";
import { LocalStorageIcon } from "./Icons/LocalStorageIcon";
import Phonebook from "components/Phonebook/Phonebook";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

export const App = () => {
  return (
    <Page>
      <Header>
        <p>Contact Book</p>
        <HeaderIcons>
          <LocalStorageIcon fill="white" width="72px" height="72px" />
        </HeaderIcons>
      </Header>
      <ErrorBoundary>
        <Phonebook />
      </ErrorBoundary>
    </Page>
  );
};
