# react-frame
[![npm](https://img.shields.io/npm/v/react-frame.svg)](https://www.npmjs.com/package/react-frame)

React components within an iframe for isolated css styling

### Installation
``` sh
npm install react-frame --save

```

### Demo
[https://pqx.github.io/react-frame](https://pqx.github.io/react-frame)

### Usage
``` javascript
<Frame
  styleSheets={['frame1.css']}
  css={'body{background-color:#eee;}'}>

  <div className="title">
    Parturient Ipsum Cursus Purus Justo
  </div>
</Frame>
```

### License
MIT
