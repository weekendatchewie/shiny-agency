import PropTypes from "prop-types";

import CardWrapper from "./cardStyle";


function Card({ label, title, picture, theme }) {
    return (
        <CardWrapper theme={theme}>
            <span>{title}</span>
            <img src={picture} alt="freelance" />
            <span className="span-name">{label}</span>
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