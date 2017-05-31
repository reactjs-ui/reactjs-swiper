# React Swiper

This is a react component based on Swiper.

## Install

```
npm install reactjs-swiper --save
```

## Usage

```javascript
import React, {Component} from 'react';
import {render} from 'react-dom';
import ReactSwiper from 'reactjs-swiper';
import './sass/example.scss'; // 自定义 css

const ReactSwiperExample = () => {
  const items = [{
    image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci1.jpg',
    title: '图片1',
    link: 'http://jd.com'
  }, {
    image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci2.jpg',
    title: '图片2',
  }, {
    image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci3.jpg',
    title: '图片3',
    link: 'http://jd.com'
  }, {
    image: 'http://alloyteam.github.io/AlloyTouch/example/asset/ci4.jpg',
    title: '图片4',
  }];

  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };
  return (
    <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
                 className="swiper-example" />
  );
};

render(
  <ReactSwiperExample />, document.getElementById('layout')
);

```

## Options

| 选项        | 类型   |  功能  |
| --------   | ----- | ---- |
| className | PropTypes.string| 自定义 className|
| showPagination | PropTypes.bool| 是否显示分页按钮|
| options | PropTypes.object| Swiper 选项|
| items | PropTypes.array| 轮播图记录数|

## Example

```
npm install
npm start
```

http://localhost:9090


## Online Example

http://reactjs-ui.github.io/reactjs-swiper/

## Build Example
第一次需要先执行前两步操作，再执行第三步。以后修改例子后，只需要执行第三步即可

1. 创建 gh-pages 分支，**在执行 git subtree add 命令之前，需确保 gh-pages 分支下至少存在一个文件**
```
git checkout -b gh-pages
rm -rf *     //隐藏文件需要单独删除，结合命令 ls -a
vim .gitignore //输入一些内容
git add .
git commit -m "init branch gh-pages"
git push --set-upstream origin gh-pages
git checkout master
```

2. 把分支 gh-pages 添加到本地 subtree 中，执行该命令前，请确保 examples-dist 文件夹不存在

```
git subtree add --prefix=examples-dist origin gh-pages --squash
```

3. 生成在线 examples

```
npm run build:examples
git add -A examples-dist
git commit -m "Update online examples"
git subtree push --prefix=examples-dist origin gh-pages --squash
git push
```

## Build

```
npm run build
```

## Publish

```
npm run build:publish
```

## Issue

https://github.com/reactjs-ui/reactjs-swiper/issues

## Change Log

Please view [here](./CHANGELOG.md)
