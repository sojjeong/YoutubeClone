import styled from "@emotion/styled";
import constants from "../styles/constants";

const VideoInfo: React.FC = () => {
  return (
    <InfoAndUpNext>
      <VideoInfoSection>
        <Hashtags>
          <li>#SSAFYMATE</li>
          <li>#SSAFY</li>
          <li>#Developacito</li>
        </Hashtags>
      </VideoInfoSection>
    </InfoAndUpNext>
  );
};

const InfoAndUpNext = styled.div``;

const VideoInfoSection = styled.section`
  padding: ${constants.spacing};
`;

const Hashtags = styled.ul`
  display: flex;
  list-style: none;

  color: ${constants["blue-color"]};
  font-size: ${constants["font-small"]};

  & li {
    margin-right: ${constants["spacing-small"]};
  }
`;

export default VideoInfo;
