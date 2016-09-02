function SomeDirective() {
	return {
		template: [
			'<div>',
				'Replace this text!',
			'</div>'
		].join(''),
		compile: function(elem, attrs) {
			elem.html("This is new text!");
			return {
				post: function(scope, elem, attrs) {
					elem.on('click', function() {
						alert("You clicked me!");
					})
				}
			}
		}
		// link: function (scope, elem, attrs) {

		// }
	}
}

angular
	.module('app')
	.directive('someDirective', SomeDirective);