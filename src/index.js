/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-05-25 17:46:33
 * @LastEditros: 
 * @LastEditTime: 2021-05-25 22:56:54
 */
import _ from 'lodash'
import printMe from './print'

function component () {
  const element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ' ');

  const btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console'
  btn.onclick = printMe;

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component())