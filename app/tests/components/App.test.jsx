import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils';

import configureStore from 'configureStore';

import {App} from 'App';

describe('App', () => {
  it('should exist', () => {
    expect(App).toExist();
  });

});
