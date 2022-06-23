// @OnlyCurrentDoc

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Abstract server-side methods
// This is called by the script and marshals the request to the correct namespace.
function exposeRun(namespace, method, argArray) {
  var func = (namespace ? this[namespace][method] : this[method]);
  if(argArray && argArray.length) {
    return func.apply(this, argArray)
  }
  else {
    return func();
  }
}

function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu('Hyperscript Samples')
    .addItem('Dynamic insert', 'showSimpleSidebar')
    .addItem('Complex Interaction', 'showSWAPISidebar')
    .addToUi()
}

function showSimpleSidebar() {
  const html = HtmlService.createTemplateFromFile('template/_base.html').evaluate()
      .setTitle('The sidebar');
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
      .showSidebar(html);
}

function showSWAPISidebar() {
  const html = HtmlService.createTemplateFromFile('template/_swapi-base.html').evaluate()
  SpreadsheetApp.getUi().showSidebar(html)
}