import Parse from 'parse';

global.Parse = Parse;

export * from '@hiennguyen92/parse-react-base';

export const initializeParse = (serverURL: string, applicationId: string, javascriptKey: string) => {
  Parse.serverURL = serverURL;
  Parse.initialize(applicationId, javascriptKey);
  Parse.enableLocalDatastore();
};
