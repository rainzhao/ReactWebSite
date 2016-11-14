## react写的一个小网页

1. 其中主要用到了fullpage来进行全屏的滚动,没找到合适的react的fullpage就自己简单的封装了下，详见src/components/FullPage.react.js。
2. react的写法一开始还有些不太习惯，all in js，与过去结构和表现的分离有点不同(个人见解)。
3. redux一种状态管理模块，因为你如果需要很多交互，react只有单项的绑定，你需要调用回调函数进行回传，所以如果过多交互，还是要用到redux的，本项目没有用到，
交互的时候使用的调用回调。

