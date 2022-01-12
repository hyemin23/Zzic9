import { render } from 'react-dom';
import React from 'react';
import App from '@layouts/App.tsx';

// id app인 div 태그에 App components 렌더링 시작
render(<App />, document.querySelector('#app'));
