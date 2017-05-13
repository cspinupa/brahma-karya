import _ from 'loadash';

function commponent () {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello','webpack'],'');

  return element;
}

document.body.appendChild(commponent());
