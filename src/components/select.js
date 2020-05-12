import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const skillLevel = [
    
  {
    key: '1',
    text: '1',
    value: '1',
  },
  {
    key: '2',
    text: '2',
    value: '2',
  },
  {
    key: '3',
    text: '3',
    value: '3',
  },
  {
    key: '4',
    text: '4',
    value: '4',
  },
  {
    key: '5',
    text: '5',
    value: '5',
  }
]

const DropdownComp = (props) => {
const handleSelectChangeDevOps=(e,{value})=>props.setDevOps({score:value})
const handleSelectChangeFE=(e,{value})=>props.setFe({score:value})
const handleSelectChangeBE=(e,{value})=>props.setBe({score:value})
return (
    <>
    DevOps Skill Level
    <Dropdown
    placeholder='1'
    selection
    options={skillLevel}
    onChange={handleSelectChangeDevOps}
  />
  Front End Skill Level
  <Dropdown
    placeholder='1'
    selection
    options={skillLevel}
    onChange={handleSelectChangeFE}
  />
  Back End Skill Level
  <Dropdown
    placeholder='1'
    selection
    options={skillLevel}
    onChange={handleSelectChangeBE}
  />
  </>
)
    
}



export default DropdownComp

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
