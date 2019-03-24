# v-previews

基于[PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)的 vue 指令，使得更加易用。

## Installation 安装
```
npm install photoswipe v-previews --save
```

## Usage 使用方法
``` js
import Vue from 'vue'
import VPreviews from 'v-previews'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'


Vue.use(VPreviews, {
  photoswipe: PhotoSwipe,
  ui: PhotoSwipeUI_Default
})
```

## Basic Example 基础实例
``` html
<template>
  <div v-previews>
    <img src="http://dummyimage.com/200x100" data-src="http://dummyimage.com/200x100"/>
  </div>
</template>
```

## Documentation 文档
### directive 指令
- 指令参数: `v-previews:data-src` 绑定图片地址的目标标签属性
- 修饰符: `v-previews.click` 触发的事件名，~可以绑定多个事件 然而并没有什么用~
- 绑定值: `v-previews="{}"` PhotoSwipe的设置，请参考[PhotoSwipe Options](https://photoswipe.com/documentation/options.html)

#### 说明：
事件是绑定在使用`v-previews`的对象上，事件触发后判定`event.target`上是否存在目标标签属性`data-src`，若不存在则无事发生，存在时获取`v-previews`的对象下所有设置了`data-src`属性的对象，以此生成图片列表传递给`PhotoSwipe`。


#### 示例
设置双击打开预览，并以`src`属性为准，不显示分享按钮。
``` html
<template>
  <div v-previews:src.dblclick="options">
    <img src="http://dummyimage.com/200x100"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        shareEl: false
      }
    }
  }
}
</script>
```

### Tag  Attributes 标签属性
``` js
/* PhotoSwipe 官方示例 */
var items = [
    {
        src: 'http://dummyimage.com/400x200',
        msrc: 'http://dummyimage.com/200x100',
        w: 400,
        h: 200
    },
    {
        html: '<div class="hello-slide"><h1>Hello world <a href="http://example.com">example.com</a></h1></div>'
    }
]
```
按之前的设置，我们只能定义src的值，其他属性则需要通过`data-msrc`, `data-w`, `data-h`, `data-html`来定义。

#### 示例
``` html
<template>
  <div v-previews>
    <img
      src="http://dummyimage.com/200x100"
      data-src="http://dummyimage.com/400x200"
      data-msrc="http://dummyimage.com/200x100"
      data-w="400"
      data-h="200"
    />
    <span
      data-src="true"
      data-html='<div class="hello-slide"><h1>Hello world <a href="http://example.com">example.com</a></h1></div>'
    >Hello World</span>
  </div>
</template>

<style>
.hello-slide {
  width: 100%;
  max-width: 400px;
  color: #FFF;
  margin: 120px auto 0;
  text-align: center;
}
</style>
```
设置`data-html`必须同时设置目标标签属性，如`data-src="true"`。

设置`data-html`后，其他属性将失效。

`PhotoSwipe`中`w`和`h`是必须的，`v-previews`中变得不是必须的了。优先级`data-w与data-h` > `绑定data-src的尺寸` > `0`，当`data-src`的图片加载完成后，尺寸将会更换为这张图片的实际尺寸。

### Group 分组
默认是以`v-previews`对象下所有子节点为一组，如果需要手动分组，可以在子节点添加`data-group`标签。

#### 示例
``` html
<template>
  <div v-previews:src>
    <img src="http://dummyimage.com/200x100"/>
    <img src="http://dummyimage.com/200x100"/>
    <img src="http://dummyimage.com/200x100" data-group="1"/>
    <img src="http://dummyimage.com/200x100" data-group="1"/>
    <img src="http://dummyimage.com/200x100" data-group="2"/>
    <img src="http://dummyimage.com/200x100" data-group="2"/>
  </div>
</template>
```

### Global Options 全局设置
``` js
import Vue from 'vue'
import VPreviews from 'v-previews'
import PhotoSwipe from 'photoswipe'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'


Vue.use(VPreviews, {
  photoswipe: PhotoSwipe,
  ui: PhotoSwipeUI_Default,

  /* Global Options */
  options: {
    shareEl: false
  }
})
```
`options`的默认值，在[PhotoSwipe Options](https://photoswipe.com/documentation/options.html)的基础上，修改了`history`和`getThumbBoundsFn`。

- `history` 和hash路由以及挂载方式有冲突。
- `getThumbBoundsFn` 点击图片，弹出PhotoSwipe组件时的过渡效果。

### Deep Option 深度设置
``` html
<template>
  <div v-previews>
    <div
      class="slide"
      style="background-image: url(http://dummyimage.com/200x100)"
      data-src="http://dummyimage.com/200x100"
    >
      <div class="slide-description">图片描述</div>
    </div>
  </div>
</template>

<style>
.slide {
  width: 200px;
  height: 100px;
  position: relative;
}
.slide-description {
  text-align: center;
  position:absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
```
当对象是上面这种不是单纯的`img`的时候，需要在`全局设置`里设置`deep`属性，默认为`0`。

``` js
Vue.use(VPreviews, {
  photoswipe: PhotoSwipe,
  ui: PhotoSwipeUI_Default,
  deep: 1
})
```

`deep`设为1时，点击`.slide-description`对象，没有查找到`data-src`属性，则查找其父节点`.slide`是否存在该属性。查找到目标有`data-src`属性或超过`deep`次数为止（最多查到绑定`v-previews`的对象为止）。


### Typescript
```
npm install @types/photoswipe --save-dev
```
``` ts
Vue.use<VPreviews.Options>(VPreviews, {
  /* 此处将有类型检查与代码提示 */
  photoswipe: PhotoSwipe,
  ui: PhotoSwipeUI_Default,
  options: {
    shareEl: false
  }
})
```
