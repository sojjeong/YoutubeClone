import styled from "@emotion/styled";
import constants from "../styles/constants";

const ChannelInfo = () => {
  return (
    <Channel>
      <Metadata>
        <img src={require("../resources/me.png")} alt="me" />
        <Info>
          <span className="name">쏘뇽</span>
          <span className="subscribers">1M subscribers</span>
        </Info>
      </Metadata>
      <SubscribeButton>subscribe</SubscribeButton>
    </Channel>
  );
};

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${constants["gray-light-color"]};
  border-bottom: 1px solid ${constants["gray-light-color"]};
`;

const Metadata = styled.div`
  display: flex;
  align-items: center;
  padding: ${constants["spacing-small"]} 0;

  & img {
    width: ${constants["avatar-size"]};
    height: ${constants["avatar-size"]};
    border-radius: 50%;
    margin-right: ${constants.spacing};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  & .name {
    font-size: ${constants["font-medium"]};
  }

  & .subscribers {
    font-size: ${constants["font-small"]};
    color: ${constants["gray-dark-color"]};
  }
`;

const SubscribeButton = styled.button`
  text-transform: uppercase;
  color: ${constants["blue-color"]};
  font-size: ${constants["font-medium"]};
`;

export default ChannelInfo;
