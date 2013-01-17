# jQuery Input Placeholder

jQuery Input Placeholder is a lightweight jQuery plugin that enables HTML5 input *placeholder* attribute support for legacy browsers (e.g. IE <= 9).  
It uses the input *value* property to mimic the placeholder behavior.  
It handles input focus, input blur, form submit and form reset events.

[**Demo page**](http://yohannrub.github.com/jquery.input-placeholder/)


## Usage

Just import the javascript file into your html page, and use *placeholder* attribute normally in input/textarea html elements.

```html
<input type="text" name="input" placeholder="Placeholder input" />
<textarea name="textarea" placeholder="Placeholder textarea"></textarea>
```


## Styling

The plugin toggles a 'placeholder' CSS class for browser that don't natively support placeholders:

```css
.placeholder {
  color: #aaaaaa;
}
```

As a reminder, styling of HTML5 placeholders for browser that natively support placeholders:

```css
::-webkit-input-placeholder {
  color: #aaaaaa;
}
:-moz-placeholder {
  color: #aaaaaa;
}
```


## Extra

`$.support.placeholder` is assigned *true* if input *placeholder* attribute is natively supported by the browser, *false* otherwise.
