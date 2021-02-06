# JavaScript-Learning

## HTML 中的JavaScript

将JavaScript 插入HTML 的主要方法是使用<script>元素。这个元素是由网景公司创造出来，并最早在Netscape Navigator 2 中实现的。后来，这个元素被正式加入到HTML 规范。<script>元素下列8 个属性。

1. async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。

2. charset：可选。使用src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。

3. crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin="anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。

4. defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在IE7 及更早的版本中，对行内脚本也可以指定这个属性。

5. integrity：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，Content Delivery Network）不会提供恶意内容。

6. language：废弃。最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多数浏览器都会忽略这个属性，不应该再使用它。

7. src：可选。表示包含要执行的代码的外部文件。

8. type：可选。代替language，表示代码块中脚本语言的内容类型（也称MIME 类型）。按照惯例，这个值始终都是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript 文件的MIME 类型通常是"application/x-javascript"，不过给type 属性这个值有可能导致脚本被忽略。在非IE 的浏览器中有效的其他有"application/javascript"和"application/ecmascript"。如果这个值是module，则代码会被当成ES6 模块，而且只有这时候代码中才能出现import 和export 关键字。

JavaScript 是通过<script>元素插入到HTML 页面中的。这个元素可用于把JavaScript 代码嵌入到HTML 页面中，跟其他标记混合在一起，也可用于引入保存在外部文件中的JavaScript。本章的重点可以总结如下。

1. 要包含外部JavaScript 文件，必须将src 属性设置为要包含文件的URL。文件可以跟网页在同一台服务器上，也可以位于完全不同的域。

2. 所有<script>元素会依照它们在网页中出现的次序被解释。在不使用defer 和async 属性的情况下，包含在<script>元素中的代码必须严格按次序解释。

3. 对不推迟执行的脚本，浏览器必须解释完位于<script>元素中的代码，然后才能继续渲染页面的剩余部分。为此，通常应该把<script>元素放到页面末尾，介于主内容之后及</body>标签之前。

4. 可以使用defer 属性把脚本推迟到文档渲染完毕后再执行。推迟的脚本原则上按照它们被列出的次序执行。

5. 可以使用async 属性表示脚本不需要等待其他脚本，同时也不阻塞文档渲染，即异步加载。异步脚本不能保证按照它们在页面中出现的次序执行。

6. 通过使用`<noscript>`元素，可以指定在浏览器不支持脚本时显示的内容。如果浏览器支持并启用脚本，则`<noscript>`元素中的任何内容都不会被渲染。

### 语言基础

1. 区分大小写

2. 标志符：所谓标识符，就是变量、函数、属性或函数参数的名称。标识符可以由一或多个下列字符组成：

   1. 第一个字符必须是一个字母、下划线（_）或美元符号（$）；

   2. 剩下的其他字符可以是字母、下划线、美元符号或数字。

3. 注释

   1. 单行注释 //
   2. 多行注释 /* \n \n \n*/

4. 关键字与保留字

   1. break do in typeof

      case else instanceof var

      catch export new void

      class extends return while

      const finally super with

      continue for switch yield

      debugger function this

      default if throw

   2. 始终保留:

      enum

      严格模式下保留:

      implements package public

      interface protected static

      let private

      模块代码中保留:

      await

5. 变量

   1. var 声明的范围是函数作用域
   
   2. let 声明的范围是块作用域
   
      1.  暂时性死区
   
         let 与var 的另一个重要的区别，就是let 声明的变量不会在作用域中被提升。
   
      2. 全局声明
   
         与var 关键字不同，使用let 在全局作用域中声明的变量不会成为window 对象的属性（var 声明的变量则会）。
   
      3. 条件声明
   
         在使用var 声明变量时，由于声明会被提升，JavaScript 引擎会自动将多余的声明在作用域顶部合并为一个声明。因为let 的作用域是块，所以不可能检查前面是否已经使用let 声明过同名变量，同时也就不可能在没有声明的情况下声明它。
   
   3. const 的行为与let 基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且尝试修改const 声明的变量会导致运行时错误。
   
6. ECMAScript 有6 种简单数据类型（也称为原始类型）：Undefined、Null、Boolean、Number、String 和Symbol。Symbol（符号）是ECMAScript 6 新增的。还有一种复杂数据类型叫Object（对象）。Object 是一种无序名值对的集合。因为在ECMAScript 中不能定义自己的数据类型，所有值都可以用上述7 种数据类型之一来表示。只有7 种数据类型似乎不足以表示全部数据。但ECMAScript 的数据类型很灵活，一种数据类型可以当作多种数据类型来使用。

   1. Undefined 类型只有一个值，就是特殊值undefined。当使用var 或let 声明了变量但没有初始化时，就相当于给变量赋予了undefined 值
   2. Null 类型同样只有一个值，即特殊值null。逻辑上讲，null 值表示一个空对象指针，这也是给typeof 传一个null 会返回"object"的原因
   3. Boolean（布尔值）类型是ECMAScript 中使用最频繁的类型之一，有两个字面值：true 和false。这两个布尔值不同于数值，因此true 不等于1，false 不等于0。
   4. ECMAScript 中最有意思的数据类型或许就是Number 了。Number 类型使用IEEE 754 格式表示整数和浮点值（在某些语言中也叫双精度值）。不同的数值类型相应地也有不同的数值字面量格式。
      1. 要定义浮点值，数值中必须包含小数点，而且小数点后面必须至少有一个数字。虽然小数点前面不是必须有整数，但推荐加上。
      2. 由于内存的限制，ECMAScript 并不支持表示这个世界上的所有数值。ECMAScript 可以表示的最小数值保存在Number.MIN_VALUE 中，这个值在多数浏览器中是5e324；可以表示的最大数值保存在Number.MAX_VALUE 中，这个值在多数浏览器中是1.797 693 134 862 315 7e+308。如果某个计算得到的数值结果超出了JavaScript 可以表示的范围，那么这个数值会被自动转换为一个特殊的Infinity（无穷）值。任何无法表示的负数以-Infinity（负无穷大）表示，任何无法表示的正数以Infinity（正无穷大）表示。
      3. 有一个特殊的数值叫NaN，意思是“不是数值”（Not a Number），用于表示本来要返回数值的操作失败了（而不是抛出错误）。比如，用0 除任意数值在其他语言中通常都会导致错误，从而中止代码执行。但在ECMAScript 中，0、+0 或0 相除会返回NaN
      4. 有3 个函数可以将非数值转换为数值：Number()、parseInt()和parseFloat()。Number()是转型函数，可用于任何数据类型。后两个函数主要用于将字符串转换为数值。对于同样的参数，这3 个函数执行的操作也不同
   5. String（字符串）数据类型表示零或多个16 位Unicode 字符序列。字符串可以使用双引号（"）、单引号（'）或反引号（`）标示
      1. 字符串数据类型包含一些字符字面量，用于表示非打印字符或有其他用途的字符
      2. ECMAScript 中的字符串是不可变的（immutable），意思是一旦创建，它们的值就不能变了。要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量.
      3. 有两种方式把一个值转换为字符串。首先是使用几乎所有值都有的toString()方法。这个方法唯一的用途就是返回当前值的字符串等价物。
      4. ECMAScript 6 新增了使用模板字面量定义字符串的能力。与使用单引号或双引号不同，模板字面量保留换行字符，可以跨行定义字符串.
      5. 模板字面量最常用的一个特性是支持字符串插值，也就是可以在一个连续定义中插入一个或多个值。技术上讲，模板字面量不是字符串，而是一种特殊的JavaScript 句法表达式，只不过求值后得到的是字符串。模板字面量在定义时立即求值并转换为字符串实例，任何插入的变量也会从它们最接近的作用域中取值
      6. 模板字面量也支持定义标签函数（tag function），而通过标签函数可以自定义插值行为。标签函数会接收被插值记号分隔后的模板和对每个表达式求值的结果。
         标签函数本身是一个常规函数，通过前缀到模板字面量来应用自定义行为，如下例所示。标签函数接收到的参数依次是原始字符串数组和对每个表达式求值的结果。这个函数的返回值是对模板字面量求值得到的字符串。
      7. 使用模板字面量也可以直接获取原始的模板字面量内容（如换行符或Unicode 字符），而不是被转换后的字符表示。为此，可以使用默认的String.raw 标签函数
   6. Symbol（符号）是ECMAScript 6 新增的数据类型。符号是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。
      1. 符号需要使用Symbol()函数初始化。因为符号本身是原始类型，所以typeof 操作符对符号返回symbol。
      2. 如果运行时的不同部分需要共享和重用符号实例，那么可以用一个字符串作为键，在全局符号注册表中创建并重用符号。
      3. 凡是可以使用字符串或数值作为属性的地方，都可以使用符号。这就包括了对象字面量属性和Object.defineProperty()/Object.defineProperties()定义的属性。对象字面量只能在计算属性语法中使用符号作为属性。



### 操作符

#### 一元操作符

1. 递增/递减操作符

   递增和递减操作符直接照搬自C 语言，但有两个版本：前缀版和后缀版。顾名思义，前缀版就是位于要操作的变量前头，后缀版就是位于要操作的变量后头。前缀递增操作符会给数值加1，把两个加号（++）放到变量前头即可

2.  一元加和减

   一元加和减操作符对大多数开发者来说并不陌生，它们在ECMAScript 中跟在高中数学中的用途一样。一元加由一个加号（+）表示，放在变量前头，对数值没有任何影响：

#### 位操作符号

1.  按位非

   按位非操作符用波浪符（~）表示，它的作用是返回数值的一补数。按位非是ECMAScript 中为数不多的几个二进制数学操作符之一。

2. 按位与

   按位与操作符用和号（&）表示，有两个操作数。本质上，按位与就是将两个数的每一个位对齐，然后基于真值表中的规则，对每一位执行相应的与操作。

3. 按位或

   按位或操作符用管道符（|）表示，同样有两个操作数。

4. 按位异或

   按位异或用脱字符（^）表示，同样有两个操作数。

5. 左移

   左移操作符用两个小于号（<<）表示，会按照指定的位数将数值的所有位向左移动。比如，如果数值2（二进制10）向左移5 位，就会得到64（二进制1000000）

6. 有符号右移

   有符号右移由两个大于号（>>）表示，会将数值的所有32 位都向右移，同时保留符号（正或负）。有符号右移实际上是左移的逆运算。比如，如果将64 右移5 位，那就是2

7. 无符号右移

   无符号右移用3 个大于号表示（>>>），会将数值的所有32 位都向右移。对于正数，无符号右移与有符号右移结果相同。仍然以前面有符号右移的例子为例，64 向右移动5 位，会变成2

#### 布尔操作符

1. 逻辑非

   逻辑非操作符由一个叹号（!）表示，可应用给ECMAScript 中的任何值。这个操作符始终返回布尔值，无论应用到的是什么数据类型。逻辑非操作符首先将操作数转换为布尔值，然后再对其取反。换句话说，逻辑非操作符会遵循如下规则。

    如果操作数是对象，则返回false。

    如果操作数是空字符串，则返回true。

    如果操作数是非空字符串，则返回false。

    如果操作数是数值0，则返回true。

    如果操作数是非0 数值（包括Infinity），则返回false。

    如果操作数是null，则返回true。

    如果操作数是NaN，则返回true。

    如果操作数是undefined，则返回true。

2.  逻辑与

   逻辑与操作符由两个和号（&&）表示，应用到两个值

    如果第一个操作数是对象，则返回第二个操作数。

    如果第二个操作数是对象，则只有第一个操作数求值为true 才会返回该对象。

    如果两个操作数都是对象，则返回第二个操作数。

    如果有一个操作数是null，则返回null。

    如果有一个操作数是NaN，则返回NaN。

    如果有一个操作数是undefined，则返回undefined。

3. 逻辑或

   逻辑或操作符由两个管道符（||）

    如果第一个操作数是对象，则返回第一个操作数。

    如果第一个操作数求值为false，则返回第二个操作数。

    如果两个操作数都是对象，则返回第一个操作数。

    如果两个操作数都是null，则返回null。

    如果两个操作数都是NaN，则返回NaN。

    如果两个操作数都是undefined，则返回undefined。

#### 乘性操作符

1. 乘法操作符

   乘法操作符由一个星号（*）表示，可以用于计算两个数值的乘积。其语法类似于C 语言

    如果操作数都是数值，则执行常规的乘法运算，即两个正值相乘是正值，两个负值相乘也是正

   值，正负符号不同的值相乘得到负值。如果ECMAScript 不能表示乘积，则返回Infinity 或

   -Infinity。

    如果有任一操作数是NaN，则返回NaN。

    如果是Infinity 乘以0，则返回NaN。

    如果是Infinity 乘以非0 的有限数值，则根据第二个操作数的符号返回Infinity 或-Infinity。

    如果是Infinity 乘以Infinity，则返回Infinity。

    如果有不是数值的操作数，则先在后台用Number()将其转换为数值，然后再应用上述规则。

2. 除法操作符

   除法操作符由一个斜杠（/）表示，用于计算第一个操作数除以第二个操作数的商

    如果操作数都是数值，则执行常规的除法运算，即两个正值相除是正值，两个负值相除也是正

   值，符号不同的值相除得到负值。如果ECMAScript不能表示商，则返回Infinity 或-Infinity。

    如果有任一操作数是NaN，则返回NaN。

    如果是Infinity 除以Infinity，则返回NaN。

    如果是0 除以0，则返回NaN。

    如果是非0 的有限值除以0，则根据第一个操作数的符号返回Infinity 或-Infinity。

    如果是Infinity 除以任何数值，则根据第二个操作数的符号返回Infinity 或-Infinity。

    如果有不是数值的操作数，则先在后台用Number()函数将其转换为数值，然后再应用上述规则。

3. 取模操作符

   取模（余数）操作符由一个百分比符号（%）

    如果操作数是数值，则执行常规除法运算，返回余数。

    如果被除数是无限值，除数是有限值，则返回NaN。

    如果被除数是有限值，除数是0，则返回NaN。

    如果是Infinity 除以Infinity，则返回NaN。

    如果被除数是有限值，除数是无限值，则返回被除数。

    如果被除数是0，除数不是0，则返回0。

    如果有不是数值的操作数，则先在后台用Number()函数将其转换为数值，然后再应用上述规则。