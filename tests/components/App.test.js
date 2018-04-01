/* global expect */

import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Root from '../../app/config/Root';
import App from '../../app/containers/App';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App Component', () => {
    let wrapper;
    let appPathMap;

    beforeEach(() => {
        wrapper = shallow(<Root />);

        const routeComponent = wrapper.find(Provider)
            .dive()
            .find(Route);

        appPathMap = routeComponent.reduce((pathMap, route) => {
            const routeProps = route.props();
            return {
                ...pathMap,
                [routeProps.path]: routeProps.component,
            };
        }, {});
    });

    test('App component is intialised', () => {
        expect(appPathMap['/']).toBe(App);
    });
});
