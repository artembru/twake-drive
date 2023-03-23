/* eslint-disable react/prop-types */
import React, { Component } from 'react';

import Input from './input.jsx';
import Icon from 'app/components/icon/icon.jsx';
import './inputs.scss';

export default class InputIcon extends Component {
  constructor() {
    super();
  }
  render() {
    var parentClassName = '';

    if (this.props.big) {
      parentClassName += ' big ';
    }
    if (this.props.medium) {
      parentClassName += ' medium ';
    }
    if (this.props.small) {
      parentClassName += ' small ';
    }

    if (
      parentClassName.indexOf('medium') === parentClassName.indexOf('small') &&
      parentClassName.indexOf('big') === parentClassName.indexOf('small') &&
      parentClassName.indexOf('big') < 0
    ) {
      parentClassName += ' medium';
    }

    return (
      <div className={'input_icon ' + parentClassName}>
        <Icon type={this.props.icon} />
        <Input
          onEchap={this.props.onEchap}
          onEnter={this.props.onEnter}
          autoFocus={this.props.autoFocus}
          onKeyDown={this.props.onKeyDown}
          ref={this.refInput}
          {...this.props}
        />
      </div>
    );
  }
}
