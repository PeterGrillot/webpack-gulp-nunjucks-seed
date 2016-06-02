// Jquery adds inline styles and these need to be overwritten. 
// HeadStyle writes styles to the head tag and destorys them as well
var headStyle = function() {
	this.addRules = function(rules) {
		var css = '',
			head = document.head || document.getElementsByTagName('head')[0],
			style = document.createElement('style');

		for (var property in rules) {
			if (rules.hasOwnProperty(property)) {
				var css = css + property + '{' + rules[property] + '}';
			}
		}
		style.type = 'text/css';
		style.setAttribute('class', 'customHeadStyle')
		if (style.styleSheet) {
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}
		head.appendChild(style);
	},
	this.removeRules = function() {
		if(document.getElementsByClassName('customHeadStyle')){
			var customHeadStyle = document.getElementsByClassName('customHeadStyle');
			for (var i = 0; i < customHeadStyle.length; i++) {
				customHeadStyle[i].outerHTML = '';
			}
		}
		
	}
}
module.exports = headStyle;