import React from 'react';
import Form from './Form';
import Columns from './Columns';


function App() {
  return (
    <div>
      <h1>My App</h1>
      <Form />
      <Columns>
        <div className="column">
          <h2>Column 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed neque auctor, posuere magna at, cursus tellus. Integer in sapien felis. Donec vel risus non lorem elementum commodo. Suspendisse potenti. Ut sodales quam at mauris lacinia, vel tempor lorem laoreet. Donec sed finibus mauris, eget vehicula lectus. Proin tristique magna vel quam accumsan dictum.</p>
        </div>
        <div className="column">
          <h2>Column 2</h2>
          <p>Nulla facilisi. Aliquam bibendum mi id mauris eleifend, ut commodo nulla mattis. Nam tristique, leo a blandit efficitur, dui metus aliquam velit, eu vestibulum nisi ex vel dui. Donec gravida, nisl eget euismod tincidunt, est mi dignissim lectus, nec faucibus nulla arcu ut justo.</p>
        </div>
        <div className="column">
          <h2>Column 3</h2>
          <p>Quisque vel enim eget sapien maximus dapibus ut in massa. Nullam sollicitudin quam non malesuada aliquet. Suspendisse eu ultricies nunc. Nunc id tellus arcu. Sed et nunc malesuada, malesuada turpis ac, rutrum velit. Donec a quam erat. Ut pellentesque arcu id sapien congue dictum.</p>
        </div>
      </Columns>
    </div>
  );
}

export default App;
