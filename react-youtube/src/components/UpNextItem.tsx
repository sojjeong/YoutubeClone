import styled from "@emotion/styled";
import constants from "../styles/constants";

type ItemProps = {
  path: string;
  title: string;
  name: string;
  views: string;
};

const UpNextItem: React.FC<ItemProps> = ({ path, title, name, views }) => {
  return (
    <Item>
      <ImageArea>
        <img src={path} alt="" />
      </ImageArea>
      <ItemInfo>
        <span className="title">{title}</span>
        <span className="name">{name}</span>
        <span className="views">{views}</span>
      </ItemInfo>
      <MoreButton>
        <i className="fas fa-ellipsis-v"></i>
      </MoreButton>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  margin-top: ${constants.spacing};
`;

const ImageArea = styled.div`
  flex-basis: 35%;
  margin-right: ${constants.spacing};

  & img {
    width: 100%;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-basis: 60%;
  flex-direction: column;

  & .title {
    font-size: ${constants["font-small"]};
  }

  & .name,
  .views {
    font-size: ${constants["font-micro"]};
    color: ${constants["gray-dark-color"]};
  }
`;

const MoreButton = styled.button`
  flex-basis: 5%;
  height: 100%;
`;

export default UpNextItem;
