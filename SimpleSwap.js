var SimpleSwap = (() => {

  const htmlTemplate = () => {
    let html = `
      <span id="#target" class="active"
      _="on click set my innerHTML to 'Clicked!'"
    >Click me!</span>`;
    return html;
  }

  return {
    htmlTemplate
  };
})();