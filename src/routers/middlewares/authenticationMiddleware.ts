import get from 'lodash/get';

const CHECK_AUTH_ROUTES = ['signin'];

const authenticationMiddleware = () => (toState: any, fromState: any, done: any) => {
    const nextState = get(toState, 'name', null);
    const shouldCheckAuthentication = CHECK_AUTH_ROUTES.includes(nextState);
    if (!shouldCheckAuthentication) {
        done();
        return;
    }

    done({ redirect: { name: 'signin' } });
};

export default authenticationMiddleware;
