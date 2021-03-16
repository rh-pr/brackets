module.exports = function check(str, bracketsConfig) {
  let arr = [];
      bracketsConfig.forEach(el => {
        el.forEach(i => arr.push(i));
      });

  for (let i = 0; i < str.length; i++) {
    let indx = arr.indexOf(str[i]);
    if (i == 0) {
      if (indx % 2 !== 0 || (indx % 2 === 0 && str.length === 1)) {
        return false;
      } else {
        continue;
      }
    }
    if ((i === (str.length - 1)) && ((indx % 2) === 0)) {
      let len = str.length;
      if ( (str[i] === str[i-1]) && (len !== 0 || len !== 1) ) {
        return true;
      } else {
        return false;
      }
    } 
    if (indx % 2 !== 0) {
      if(str[i-1] === arr[indx-1]){
        str = str.split('').fill('',i-1,i+1).join('');
        i -= 2;
      } else {
        return false;
      }
    } else {
      if (str[i-1] == arr[indx+1]) {
        str = str.split('').fill('',i-1,i+1).join('');
        i -= 2;
      }
    }
  }

  return true;
}
