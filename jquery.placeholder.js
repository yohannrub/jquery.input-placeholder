/*!
 * jQuery Placeholder v@1.0
 * https://github.com/yohannrub/jquery.placeholder
 * Licensed under the MIT license
 */

;(function($) {

    var PLACEHOLDER_CLASS = 'placeholder';

    $.support.placeholder = ('placeholder' in document.createElement('input'));

    if (!$.support.placeholder) {
        $(document).ready(function() {
            var $inputsAll = $('[placeholder]');

            $inputsAll.focus(function() {
                var $input = $(this);
                if ($input.val() == $input.attr('placeholder')) {
                    $input.val('');
                    $input.removeClass(PLACEHOLDER_CLASS);
                }
            }).blur(function() {
                var $input = $(this);
                if ($input.val() == '' || $input.val() == $input.attr('placeholder')) {
                    $input.addClass(PLACEHOLDER_CLASS);
                    $input.val($input.attr('placeholder'));
                }
            });

            $inputsAll.parents('form').on('submit', function() {
                var $inputs = $(this).find('[placeholder]');
                $inputs.each(function() {
                    $(this).triggerHandler('focus');
                });
                setTimeout(function() {
                    $inputs.each(function() {
                        $(this).triggerHandler('blur');
                    });
                }, 50);
            }).on('reset', function() {
                var $inputs = $(this).find('[placeholder]');
                setTimeout(function() {
                    $inputs.each(function() {
                        var $input = $(this);
                        $input.addClass(PLACEHOLDER_CLASS);
                        $input.val($input.attr('placeholder'));
                    });
                }, 0);
            });

            setTimeout(function() {
                $inputsAll.each(function() {
                    $(this).triggerHandler('blur');
                });
            }, 0);
        });
    }

})(jQuery);
