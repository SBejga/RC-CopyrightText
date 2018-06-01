import * as React from 'react';

export interface CopyrightTextProps extends React.Props<CopyrightText> {
  color: string;
  legalUnit: string;
}

export class CopyrightText extends React.Component<CopyrightTextProps, any> {
  render() {
    return (
      <div style={ {color: this.props.color} }>
        &copy;2018 <span>{ this.props.legalUnit }</span>
      </div>
    );
  }
}