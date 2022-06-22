import PropTypes from "prop-types";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px;
  background-color: #F9F9FC;
  border-radius: 30px;
  width: 30%;
  transition: 200ms;
  margin: auto;
  align-items: center;
  justify-content: center;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string,
  picture: PropTypes.string
};

Card.defaultProps = {
  title: "Titre par défault"
};

export default Card;