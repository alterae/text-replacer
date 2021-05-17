const $ = document.querySelector.bind(document);

let fieldInput: HTMLTextAreaElement;
let fieldOutput: HTMLTextAreaElement;
let fieldSearch: HTMLInputElement;
let fieldReplace: HTMLInputElement;

/**
 * Replaces all instances of `search` in `input` with `replace`.
 * @param input The string to modify
 * @param replace The text to replace with
 * @param search The substring to find
 * @returns The modified string
 */
function replaceText(input: string, search: string, replace: string) {
  const re = new RegExp(search, 'g');
  return input.replace(re, replace);
}

/**
 * Handles and `preventDefault()`s the `submit` event.
 * @param event The submit event
 */
function handleSubmit(event: { preventDefault: () => void }) {
  event.preventDefault();

  const input = fieldInput.value;
  const search = fieldSearch.value;
  const replace = fieldReplace.value;

  fieldOutput.value = replaceText(input, search, replace);
}

document.addEventListener('DOMContentLoaded', () => {
  $('#ui')?.addEventListener('submit', handleSubmit);
  fieldInput = $('#input-text') as HTMLTextAreaElement;
  fieldOutput = $('#output-text') as HTMLTextAreaElement;
  fieldSearch = $('#search-string') as HTMLInputElement;
  fieldReplace = $('#replace-string') as HTMLInputElement;

  fieldInput.value =
    fieldOutput.value =
    fieldSearch.value =
    fieldReplace.value =
      '';
});
