var SWAPI = (() => {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Sheet1');

  const getPeople = () => {
    let request = UrlFetchApp.fetch('https://swapi.dev/api/people').getContentText();
    let json = JSON.parse(request);

    let template = HtmlService.createTemplateFromFile('template/swapi-list')
    template.people = json.results;

    let html = template.evaluate().getContent()
    
    return html
  }
  
  const saveName = (name) => {
    sheet.getRange(sheet.getLastRow() + 1, 1).setValue(name);
  }

  return {
    getPeople,
    saveName
  }

})();