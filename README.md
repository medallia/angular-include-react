![Angular Include React](https://cloud.githubusercontent.com/assets/402730/25906472/1c77fd16-357b-11e7-9524-5d42ea2a76f6.jpg)

=============

React Include allows you to embed React [container components](https://medium.com/@learnreact/container-components-c0e67432e005) inside an AngularJS application, synchronizing them through a Redux store. You can think of it as a lightweight alternative to [ng-react](https://www.npmjs.com/package/ngreact), that avoids all the integration quirks by connecting the components through redux (that's framework agnostic), instead of transforming AngularJS bindings to React props.

It is built on top of the most widely adopted redux-frameworks for both libraries, [ng-redux](https://www.npmjs.com/package/ng-redux) and [react-redux](https://www.npmjs.com/package/react-redux), and follows the best practices that are also widely adopted in the javascript community regarding Redux integration with each framework.


## Installation

Install via yarn: 

```bash
yarn add @m/angular-include-react
```

or via npm:

```bash
npm i --save @m/angular-include-react
```

## Usage

Add angularIncludeReact as a dependency to your angular application

```javascript
import angular from 'angular';
import angularIncludeReact from '@m/angular-include-react';

const ngModule = angular.module('app', [
	// Add angular include react angular module as a dependency
	angularIncludeReact
]);
```

Register some react container components via the _includeReact_ angular service, with an arbitrary name

```javascript
import { connect } from 'react-redux';

const ReactContainerComponent = connect(/* ... */);

ngModule.run(function(includeReact) {
	includeReact.registerComponent('my-react-component', ReactContainerComponent);
});
```

And finally, include the components into your angular template with the include-react directive

```html
<include-react component="my-react-component"></include-react>
```

## Developing

To start the development server, just run:

```bash
npm install
npm start
```

### Build Library 

```bash
npm run build
```

### Build Demo 

```bash
npm run build:demo
```

### Start development server

```bash
npm run serve
```

### Tests

```bash
npm test
```

### Lint

```bash
npm run lint
```

or

```bash
npm run lint:fix
```

## License & Copyright
This software is copyrighted 2017 by Medallia, Inc. and released under the
[MIT License][1].

[1]: ./LICENSE


