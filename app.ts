declare var angular : any;
declare var require : any;

import {Person} from "./my-class";
let me = new Person('Eran', 29);

require('angular');

angular.module('myApp', [])
.directive('myElm', ()=>{
	return {
		restrict: 'E',
		template: `<h1>${me.toString()}</h1>`
	}
});
