# react-frame

[![npm](https://img.shields.io/npm/v/react-frame.svg)](https://www.npmjs.com/package/react-frame)
[![npm](https://img.shields.io/npm/dm/react-frame.svg)](https://www.npmjs.com/package/react-frame)
[![Build Status](https://travis-ci.org/swiftcarrot/react-frame.svg?branch=master)](https://travis-ci.org/swiftcarrot/react-frame)
[![codecov](https://codecov.io/gh/swiftcarrot/react-frame/branch/master/graph/badge.svg)](https://codecov.io/gh/swiftcarrot/react-frame)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

React components within an iframe for isolated css styling

### Installation

```sh
npm install react-frame --save
yarn add react-frame
```

### Demo

[https://swiftcarrot.dev/react-frame](https://swiftcarrot.dev/react-frame)

### Usage

```javascript
<Frame styleSheets={['frame1.css']} css={'body{background-color:#eee;}'}>
  <div className="title">frame</div>
</Frame>
```

### License

MIT
