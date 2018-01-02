import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

it('renders without crashing', () => {
    const div = document.getElementById('div');
    ReactDOM.render(<App />, div);
});
// ReactDOM.render(<App />, document.getElementById('root'));