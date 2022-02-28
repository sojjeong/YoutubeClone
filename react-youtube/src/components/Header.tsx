/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import constants from "../styles/constants";

const Header: React.FC = () => {
  return (
    <HeaderArea>
      <Logo>
        <i className="fab fa-youtube"></i>
        <span>Youtube</span>
      </Logo>
      <Icons>
        <i className="fas fa-search"></i>
        <i className="fas fa-ellipsis-v"></i>
      </Icons>
    </HeaderArea>
  );
};

const HeaderArea = styled.header`
  display: flex;
  justify-content: space-between;

  padding: ${constants.spacing};

  background-color: ${constants["black-color"]};
  color: ${constants["white-color"]};

  font-size: ${constants["font-large"]};
`;

const Logo = styled.div`
  & i {
    color: red;
  }
`;

const Icons = styled.div`
  & .fa-search {
    margin-right: ${constants.spacing};
  }
`;

export default Header;
