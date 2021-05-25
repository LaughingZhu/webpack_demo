/*
 * @Description: 
 * @Author: LaughingZhu
 * @Date: 2021-05-25 17:46:33
 * @LastEditros: 
 * @LastEditTime: 2021-05-25 22:24:35
 */
import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import toml from './data/data.toml'
import yaml from './data/data.yaml'
import json5 from './data/data.json5'

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json5.title); // output `JSON5 Example`
console.log(json5.owner.name); // output `Tom Preston-Werner`

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