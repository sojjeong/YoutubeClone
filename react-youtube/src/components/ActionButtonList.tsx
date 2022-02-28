import styled from "@emotion/styled";
import constants from "../styles/constants";

const ActionButtonList = () => {
  return (
    <ButtonList>
      <li>
        <ActionButton>
          <i className="active fas fa-thumbs-up"></i>
          <span>1K</span>
        </ActionButton>
      </li>
      <li>
        <ActionButton>
          <i className="fas fa-thumbs-down"></i>
          <span>0</span>
        </ActionButton>
      </li>
      <li>
        <ActionButton>
          <i className="fas fa-share"></i>
          <span>Share</span>
        </ActionButton>
      </li>
      <li>
        <ActionButton>
          <i className="fas fa-plus"></i>
          <span>Add</span>
        </ActionButton>
      </li>
      <li>
        <ActionButton>
          <i className="fab fa-font-awesome-flag"></i>
          <span>Report</span>
        </ActionButton>
      </li>
    </ButtonList>
  );
};

const ButtonList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: ${constants.spacing} 0;
`;

const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  color: ${constants["gray-dark-color"]};

  & i {
    margin: 0 auto;
    margin-bottom: ${constants.spacing};
    font-size: ${constants["font-regular"]};
  }

  & span {
    font-size: ${constants["font-small"]};
  }
`;

export default ActionButtonList;
