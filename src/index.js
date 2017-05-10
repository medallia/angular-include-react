import angular from 'angular';
import includeReactServiceFactory from './include-react-service';
import includeReactAngularComponent from './include-react-angular-component';

const ngModule = angular.module('include-react', []);

ngModule.factory('includeReact', includeReactServiceFactory);

ngModule.component('includeReact', includeReactAngularComponent);

export default ngModule.name;
