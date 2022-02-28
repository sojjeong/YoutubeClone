import styled from "@emotion/styled";
import constants from "../styles/constants";

const VideoPlayer: React.FC = () => {
  return (
    <VideoSection>
      <video controls>
        <source src={require("../resources/intro.mp4")}></source>
      </video>
    </VideoSection>
  );
};

const VideoSection = styled.section`
  position: sticky;
  top: 0px;
  text-align: center;
  background-color: ${constants["black-color"]};

  & video {
    width: 100%;
    height: 100%;
    max-width: 1000px;
  }
`;

export default VideoPlayer;
