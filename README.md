# CopyrightText

a React Component

## Install

install as npm module from github:

    npm i --save SBejga/rc-copyrighttext

## Use

```tsx
import * as React from 'react';

import { CopyrightText } from "@sbejga/rc-copyrighttext";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* within your react app */}
        <CopyrightText color="red" legalUnit="Your Company"/>
      </div>
    );
  }
}
```