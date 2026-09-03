/**
 * The original CodePen loaded every library from a CDN <script> tag, so all the
 * source files below expect React / ReactDOM / Draft / Redux / ReactRedux / $
 * to exist as globals. We keep that contract intact — the libraries now come
 * from node_modules, and this module re-publishes them on `window` before any
 * application module is evaluated.
 *
 * Because of that, this file MUST be the first import of the entry module.
 */
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'draft-js/dist/Draft.css';
import '../css/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';
import * as Draft from 'draft-js';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import $ from 'jquery';
import _ from 'lodash';

Object.assign(window, {
  React,
  ReactDOM,
  Immutable,
  Draft,
  Redux,
  ReactRedux,
  $,
  jQuery: $,
  _,
});
