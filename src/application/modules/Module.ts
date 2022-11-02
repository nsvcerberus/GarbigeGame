import { application } from "../Application";

export default abstract class Module {
  /* private _textFields: Map<symbol, string> = new Map<symbol, string>(); */

  constructor(template: string, data: any = {}) {
    const regex = /(?<=\{)(.*?)(?=\})/g;
    const fieldsData = template.match(regex);
    console.log("fieldsData : ", fieldsData);
    console.log("data : ", data);

    fieldsData?.forEach(fieldData => {
      const text = fieldData.split('.').reduce(function(object, key) {
        return object && object[key];
      }, data);
      template = template.replace('{' + fieldData + '}', '<span>' + text + '</span>');
      console.log("result : " + text);
    });

    application.services.htmlInserter.add(template);
  }
}