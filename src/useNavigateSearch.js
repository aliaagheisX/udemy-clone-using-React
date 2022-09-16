import { useLocation, useNavigate } from 'react-router-dom';

const useNavigateSearch = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return ({ path = false, key, value }) =>
        navigate(`${path || location.pathname}?${key}=${value}`, { state: location.state });
};

export default useNavigateSearch;