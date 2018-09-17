/**
 * 
 * @author ksoni
 * https://github.com/TheKSoni/focussequencer

 * Licensed under gpl v2 
 * https://github.com/TheKSoni/focussequencer/src/master/LICENSE
 */

(function($) {
	/**
	 * list: is array for jquery selector to sequence focus.
	 * 
	 * unbindEvent and unbindSelector: are useful if dynamically dom is generated and to change to focus sequence is required.
	 * unbindEvent: is unbind Event.
	 * unbindSelector: is selector to unbind.
	 */
		$.fn.focusSequencer = function(list, unbindEvent, unbindSelector) {
	
		var binding = function(list, i) {
			$(list[i]).on('keydown', function(e) {
				var code = (e.keyCode ? e.keyCode : e.which);
				var eIndex;
	
				$.grep(list, function(element, index) {
					if ($(element).is($(e.target))) {
						return eIndex = index;
					}
				});
	
				if (e.shiftKey && code == 9 && (eIndex) > 0) {
					// console.log((eIndex-1)+'I was shift+tabbed!');
					b = getLastAvailable(list, eIndex);
					if (b != null) {
						b.focus();
						e.preventDefault();
					}
				} else if (!e.shiftKey && code == 9 && (eIndex) < list.length - 1) {
					// console.log((eIndex+1)+'I was tabbed!' );
					a = getNextAvailable(list, eIndex);
					if (a != null) {
						a.focus();
						e.preventDefault();
					}
				}
				else {
					// console.log('try!');
				}
			});
	
			if ($(list[i]).is(':visible')) {
				$(list[i]).addClass('kCheck');
			}
		}
	
		for (var i = 0; i < list.length; i++) {
			binding(list, i);
		}
		// console.log('unbindEvent='+unbindEvent+ 'unbindSelector='+unbindSelector);
	
		if (unbindEvent && unbindSelector) {
			$(unbindSelector).on(unbindEvent, function() {
				// console.log('continue clicked');
				$(list).each(function(index) {
					// console.log($( this ));
					$(this).off('keydown');
				});
			});
		}
	
		var getNextAvailable = function(list, eIndex) {
			for (var i = eIndex + 1; i < list.length; i++) {
				// console.log("n $(list[i]).is(':visible')="+$(list[i]).is(':visible'));
				if ($(list[i]).is(':visible')) {
					if (!$(list[i]).hasClass('kCheck')) {
						$(list[i]).addClass('kCheck');
						binding(list, i);
					}
					return $(list[i]);
				}
			}
			return null;
		}
	
		var getLastAvailable = function(list, eIndex) {
			for (var i = eIndex - 1; i > -1; i--) {
				// console.log("last $(list[i]).is(':visible')="+$(list[i]).is(':visible'));
				if ($(list[i]).is(':visible')) {
					if (!$(list[i]).hasClass('kCheck')) {
						$(list[i]).addClass('kCheck');
						binding(list, i);
					}
					return $(list[i]);
				}
			}
			return null;
		}
	}
}(jQuery));
