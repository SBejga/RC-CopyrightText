import * as React from 'react';
export interface CopyrightTextProps extends React.Props<CopyrightText> {
    color: string;
    legalUnit: string;
}
export declare class CopyrightText extends React.Component<CopyrightTextProps, any> {
    render(): JSX.Element;
}
