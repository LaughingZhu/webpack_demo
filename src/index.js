/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-05-25 17:46:33
 * @LastEditros: 
 * @LastEditTime: 2021-05-25 18:40:55
 */
import _ from 'lodash'
import './style.css'
import Icon from './icon.png'


function component () {
  const element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello')
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon)
  return element
}

document.body.appendChild(component())