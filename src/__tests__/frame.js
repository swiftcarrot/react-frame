import React from 'react';
import renderer from 'react-test-renderer';
import Frame from '../frame';

test('render', () => {
  const component = renderer.create(
    <Frame>
      <div>testing</div>
    </Frame>
  );
  expect(component.toJSON()).toMatchInlineSnapshot(`
<iframe
  onLoad={[Function]}
/>
`);
});
