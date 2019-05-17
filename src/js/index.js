"use strict";
import '../scss/main.scss'
import { sayHello } from "./api/api"
import { myButton } from "./api/components"

function speak(){
  alert(sayHello())
}

myButton.addEventListener('click', speak);

