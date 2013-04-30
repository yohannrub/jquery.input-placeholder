/*!
 * jQuery Input Placeholder v@1.1
 * https://github.com/yohannrub/jquery.input-placeholder
 * Licensed under the MIT license
 */

;(function($) {

    var PLACEHOLDER_CLASS = 'placeholder',
        PLACEHOLDER_ATTRIBUTE = 'placeholder',
        PLACEHOLDER_SELECTOR = '[placeholder]';

    $.support.placeholder = (PLACEHOLDER_ATTRIBUTE in document.createElement('input'));

    if (!$.support.placeholder) {
        $(function() {
            var $allInputs = $(PLACEHOLDER_SELECTOR);

            $allInputs.focus(function() {
                var $input = $(this);
                if ($input.val() == $input.attr(PLACEHOLDER_ATTRIBUTE)) {
                    $input.val('').removeClass(PLACEHOLDER_CLASS);
                }
            }).blur(function() {
                var $input = $(this),
                    inputVal = $input.val();
                if (inputVal == '' || inputVal == $input.attr(PLACEHOLDER_ATTRIBUTE)) {
                    $input.val($input.attr(PLACEHOLDER_ATTRIBUTE)).addClass(PLACEHOLDER_CLASS);
                }
            });

            $allInputs.parents('form').on('submit', function() {
                var $inputs = $(this).find(PLACEHOLDER_SELECTOR);
                $inputs.each(function() {
                    $(this).triggerHandler('focus');
                });
                setTimeout(function() {
                    $inputs.each(function() {
                        $(this).triggerHandler('blur');
                    });
                }, 50);
            }).on('reset', function() {
                var $inputs = $(this).find(PLACEHOLDER_SELECTOR);
                setTimeout(function() {
                    $inputs.each(function() {
                        var $input = $(this);
                        $input.val($input.attr(PLACEHOLDER_ATTRIBUTE)).addClass(PLACEHOLDER_CLASS);
                    });
                }, 0);
            });

            setTimeout(function() {
                $allInputs.each(function() {
                    $(this).triggerHandler('blur');
                });
            }, 0);
        });
    }

})(jQuery);
