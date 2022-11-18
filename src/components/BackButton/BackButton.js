import { useNavigate } from "react-router-dom";
import { GoBackButton } from "./BackButton.styled";

export const BackButton = ({ location }) => {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(location?.state?.from ?? '/');
    };

    return (
        <GoBackButton type="button" onClick={goBack}>&laquo; Back</GoBackButton>
    );
};