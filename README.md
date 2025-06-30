<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# numelDimension

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the size (i.e., number of elements) of a specified dimension for a provided [ndarray][@stdlib/ndarray/ctor].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
numelDimension = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-numel-dimension@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var numelDimension = require( 'path/to/vendor/umd/ndarray-numel-dimension/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-numel-dimension@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.numelDimension;
})();
</script>
```

#### numelDimension( x, dim )

Returns the size (i.e., number of elements) of a specified dimension for a provided [ndarray][@stdlib/ndarray/ctor].

```javascript
var zeros = require( '@stdlib/ndarray-zeros' );

var x = zeros( [ 4, 2, 3 ] );
// returns <ndarray>

var d = numelDimension( x, 0 );
// returns 4
```

The function accepts the following arguments:

-   **x**: input ndarray.
-   **dim**: dimension index. If provided an integer less than zero, the dimension index is resolved relative to the last dimension, with the last dimension corresponding to the value `-1`.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function is intended as a slight performance optimization over [`@stdlib/ndarray-shape`][@stdlib/ndarray/shape] when **only** a single dimension size is needed. For retrieving multiple dimension sizes, use [`@stdlib/ndarray/shape`][@stdlib/ndarray/shape] directly.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable new-cap -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-zeros@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-slice@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/slice-multi@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-numel-dimension@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Create an array:
var x = zeros( [ 10, 10, 10, 10 ] );
// returns <ndarray>

// Define some slices:
var slices = [
    // :,:,:,:
    E( null, null, null, null ),

    // 5:10,4,2:4,::-1
    E( S( 5, 10 ), 4, S( 2, 4 ), S( null, null, -1 ) ),

    // :,:,2,:
    E( null, null, 2, null ),

    // 1,2,3,:
    E( 1, 2, 3, null ),

    // 1,3,::2,4::2
    E( 1, 3, S( null, null, 2 ), S( 4, null, 2 ) )
];

// Resolve the size of the first dimension for each slice...
var s;
var i;
for ( i = 0; i < slices.length; i++ ) {
    s = slice( x, slices[ i ] );
    console.log( '(%s) => %d', s.shape.join( ',' ), numelDimension( s, 0 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>
-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/ndarray-numel`][@stdlib/ndarray/numel]</span><span class="delimiter">: </span><span class="description">return the number of elements in an ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-numel-dimension.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-numel-dimension

[test-image]: https://github.com/stdlib-js/ndarray-numel-dimension/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-numel-dimension/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-numel-dimension/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-numel-dimension?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-numel-dimension.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-numel-dimension/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-numel-dimension/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-numel-dimension/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-numel-dimension/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-numel-dimension/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-numel-dimension/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-numel-dimension/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-numel-dimension/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-numel-dimension/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

[@stdlib/ndarray/shape]: https://github.com/stdlib-js/ndarray-shape/tree/umd

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array/tree/umd

[@stdlib/ndarray/numel]: https://github.com/stdlib-js/ndarray-numel/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
