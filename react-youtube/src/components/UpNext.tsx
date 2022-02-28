import styled from "@emotion/styled";
import constants from "../styles/constants";
import UpNextItem from "./UpNextItem";
import nextImage from "../resources/ssafymate.png";

const UpNext: React.FC = () => {
  return (
    <UpNextArea>
      <span>Up next</span>
      <ul>
        <UpNextItem path={nextImage} title="싸피 메이트 : 싸피인들을 위한 팀 빌딩 사이트" name="쏘뇽" views="1K views"></UpNextItem>
      </ul>
    </UpNextArea>
  );
};

const UpNextArea = styled.section`
  padding: 0 ${constants.spacing};

  & span {
    font-size: ${constants["font-medium"]};
    color: ${constants["gray-dark-color"]};
    margin-bottom: ${constants["spacing-small"]};
  }
`;

export default UpNext;
