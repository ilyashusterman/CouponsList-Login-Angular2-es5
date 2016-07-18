import {Token} from './token';

export function isLoggedin(clientType: string) {
  let theToken= <Token>JSON.parse(((localStorage.getItem('token'))));
  console.log('client '+(localStorage.getItem('token'))+' token type'+theToken);
  return !!localStorage.getItem('token')&&(theToken.clientType==clientType);
}

export function getTokenFromBrowser() :Token {
  let theToken= <Token>JSON.parse(((localStorage.getItem('token'))));
  return theToken;
}

