import React, {Component} from 'react';
import {render} from 'react-dom';
import './sass/example.scss';

const Index = () => {
  return (
    <div className="example">
      <h3>React Swiper 例子</h3>
      <ol className="example-list">
        <li>
          <a href="./simple.html" target="_blank">简单例子</a>
        </li>
      </ol>
    </div>
  );
};

render(<Index/>, document.getElementById('layout'));
