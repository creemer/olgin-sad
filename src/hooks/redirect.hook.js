import { useHistory } from 'react-router';

export const useRedirect = () => {
    const history = useHistory();

    const redirectTo = (path) => history.push(path);

    return [redirectTo];
}
