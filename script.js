"use strict";
var $ = document.querySelector.bind(document);
var fieldInput;
var fieldOutput;
var fieldSearch;
var fieldReplace;
/**
 * Replaces all instances of `search` in `input` with `replace`.
 * @param input The string to modify
 * @param replace The text to replace with
 * @param search The substring to find
 * @returns The modified string
 */
function replaceText(input, search, replace) {
    var re = new RegExp(search, 'g');
    return input.replace(re, replace);
}
/**
 * Handles and `preventDefault()`s the `submit` event.
 * @param event The submit event
 */
function handleSubmit(event) {
    event.preventDefault();
    var input = fieldInput.value;
    var search = fieldSearch.value;
    var replace = fieldReplace.value;
    fieldOutput.value = replaceText(input, search, replace);
}
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    (_a = $('#ui')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleSubmit);
    fieldInput = $('#input-text');
    fieldOutput = $('#output-text');
    fieldSearch = $('#search-string');
    fieldReplace = $('#replace-string');
    fieldInput.value =
        fieldOutput.value =
            fieldSearch.value =
                fieldReplace.value =
                    '';
});
