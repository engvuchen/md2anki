# @JS 浏览器中的 EventLoop-题库完成

## EventLoop 定义

### JS 执行时将不同的异步代码分配到不同的 Task 队列中；

> 异步任务未必是“微任务”，而是“下一次恰当时机才执行的任务”

### 若执行栈为空，EventLoop 机制会从 Task 队列中拿出需要执行的代码，放入执行栈中执行；本质上，JS 中的异步还是同步行为；

## 宏任务（macrotask）- 3 类 / 5 个

### **1.** **script\*\***（整体代码）\*\*

### **2. 事件触发的回调函数**，例如 DOM Events、I/O、requestAnimationFrame

### **3. 定时器**

3. setTimeout
4. setInterval
5. setImmediate

### 6. UI rendering - 看下文的执行顺序图例，优先级较低，在微任务后执行

> 只记前 5 个，无法论证 UI rending 是不是宏任务，反而不是宏任务的理由比较多

## 微任务（microtask）- 【4】

### 1. Promises (浏览器原生实现的 Promise)

### 2. process.nextTick - node.js

### 3. Object.observe

### 4. MutationObserver

## Event Loop 执行顺序 - 简略

## ❗EventLoop 结合 requestAnimaionFrame -

### （1）从宏任务队列中取第一个 task（例 setTimeout、setIntervel 的回调，也可以将同一轮循环中的**所有同步代码看作是一个宏任务**），执行它；

### （2）执行微任务队列里的所有微任务；

> 执行一个任务时，若生成了微任务，则执行完该任务后，会执行所有生成的微任务，然后再执行下一个任务

### 💡（3）浏览器判断是否更新渲染屏幕。若需要重新绘制，则执行步骤 4~13；若不需要重新绘制，则流程回到步骤 1，这样不断循环。

> 浏览器显示频率是 60hz，每 16.7 ms 是渲染的时机

### （4）触发 resize、scroll 事件、建立**媒体查询**。

### （5）建立 css 动画；

### （6）执行 requestAnimationFrame 回调；

### （7）执行 IntersectionObserver 回调；

### （8）更新渲染屏幕。

### 💡（9）浏览器判断当前帧是否还有空闲时间，如果有空闲时间，则执行步骤 10~12。

### （10）从 requestIdleCallback 回调函数队列中取第一个，执行它。

### （11）执行微任务队列里的所有微任务。

### （12）流程回到步骤 9，直到 requestIdleCallback 回调函数队列清空或当前帧没有空闲时间。

### （13）流程回到步骤 1，这样不断循环。
