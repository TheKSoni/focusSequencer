# focusSequencer
ADA (Americans with Disabilities Act) 
plugin for focus sequencing.

In case your site is not compatible for ADA due to improper focus shifting on page. 
And it is getting harder as you have many dynamic elements on page then this plugin can fix the focus sequence issue for you.

Solution: you need to define the element selectors in the sequence which you want to shift focus. thats it. plugin will take care about focus after that. 

syntax:
$.fn.focusSequencer(["selector1", "selector2", "selector n"]); 
$.fn.focusSequencer(["selector1", "selector2", "selector n"], 'keydown', 'selector2');

e.g.: 
$.fn.focusSequencer(["#content > header > div.app-header--primary > div > div > ol > li:nth-child(1) > a", "#commit-header > article > div.commit-header.aui-group.aui-group-split > div.commit-actions.aui-item > a:nth-child(1)"]);
