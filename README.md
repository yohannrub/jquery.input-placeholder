# jQuery Placeholder

jQuery Placeholder is a lightweight jQuery plugin that adds input *placeholder* attribute support for legacy browsers (e.g. IE <= 9).  
It uses the input *value* property to mimic the placeholder behavior.  
It handles input focus, input blur, form submit and form reset events.

[**Demo page**](http://yohannrub.github.com/jquery.placeholder/)


## Usage

Just import the javascript file into your html page.


## Styling

The placeholder text of an input can be styled using the CSS class 'placeholder' applied to the *input* element.

```css
input.placeholder {
  color: #ff0000;
}
```


## Extra

`$.support.placeholder` is assigned *true* if input *placeholder* attribute is supported by the browser, *false* otherwise.
