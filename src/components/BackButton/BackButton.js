import { useNavigate } from "react-router-dom"

export const BackButton = ({ location }) => {
    let navigate = useNavigate();

    const goBack = () => {
        navigate(location?.state?.from ?? '/');
    };

    return (
        <button type="button" onClick={goBack}>Back</button>
    );
};