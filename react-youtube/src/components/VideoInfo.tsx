import styled from "@emotion/styled";
import { useRef } from "react";
import constants from "../styles/constants";
import ActionButtonList from "./ActionButtonList";
import ChannelInfo from "./ChannelInfo";
import UpNext from "./UpNext";

const VideoInfo: React.FC = () => {
  const titleRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onMoreButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    buttonRef.current?.classList.toggle("clicked");
    titleRef.current?.classList.toggle("clamp");
  };

  return (
    <InfoAndUpNext>
      <VideoInfoSection>
        <Hashtags>
          <li>#SSAFYMATE</li>
          <li>#SSAFY</li>
          <li>#Developacito</li>
        </Hashtags>
        <TitleAndButton>
          <span className="title clamp" ref={titleRef}>
            SSAFY MATE : 싸피인들을 위한 팀빌딩 웹사이트 싸피인들을 위한 팀빌딩 웹사이트 싸피인들을 위한 팀빌딩 웹사이트 싸피인들을 위한 팀빌딩 웹사이트
          </span>
          <button className="moreButton" ref={buttonRef} onClick={onMoreButtonClick}>
            <i className="fas fa-caret-down"></i>
          </button>
        </TitleAndButton>
        <ViewCount>1M views 1month ago</ViewCount>
        <ActionButtonList />
        <ChannelInfo />
      </VideoInfoSection>
      <UpNext />
    </InfoAndUpNext>
  );
};

const InfoAndUpNext = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

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

const TitleAndButton = styled.div`
  display: flex;

  & .title {
    font-size: ${constants["font-medium"]};
    margin-right: ${constants.spacing};
  }

  & .title.clamp {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  & .moreButton {
    height: 100%;
    transition: transform 300ms ease-in-out;
  }

  & .moreButton.clicked {
    transform: rotate(180deg);
  }
`;

const ViewCount = styled.span`
  font-size: ${constants["font-small"]};
  color: ${constants["gray-dark-color"]};
`;

export default VideoInfo;
