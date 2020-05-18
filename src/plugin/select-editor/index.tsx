
import React, { MouseEvent } from 'react';
import './index.css'
import Portal from '../../common/portal'

import { IOptionItem, ExtendFiledSubmit, TypeCellData, ISelectEditorOptionItem } from './../../types'

interface ISelectEditorProps {
  options: ISelectEditorOptionItem[],
  currentTarget: HTMLElement,
  onSubmit: ExtendFiledSubmit,
  cellData: TypeCellData
}

class DropDown extends React.Component<ISelectEditorProps>{
  dropdownContent: HTMLDivElement | null = null;
  handleSelect = (e: MouseEvent<HTMLDivElement>, item: ISelectEditorOptionItem) => {
    // 阻止冒泡，点击单选部分修改
    // 如果提供了事件对象，则这是一个非IE浏览器 
    if ( e && e.stopPropagation ) 
    //因此它支持W3C的stopPropagation()方法 
    { e.stopPropagation(); }
    else 
    //否则，我们需要使用IE的方式来取消事件冒泡 
    if(window && window.event){
      window.event.cancelBubble = true;
    }
    
    if(typeof this.props.cellData === 'object'){
      this.props.onSubmit({
        ...this.props.cellData,
        value: item.value
      })
    }else{
      this.props.onSubmit(item.value)
    }
  }

  handleBlur = () => {
    // 这里判断对象数据源是什么格式的
    this.props.onSubmit(this.props.cellData)
  }

  componentDidMount(){
    setTimeout(()=>{
      this.dropdownContent && this.dropdownContent.focus();
    }, 0)
  }
  render(){
    const { options, currentTarget } = this.props;
    const {top, left} = currentTarget.getBoundingClientRect()
    const pos = {
      left: left,
      top: top + 40,
      minWidth: currentTarget.offsetWidth,
      zIndex: 99999999999
    }
  
    return <div
      className='dropdown-content'
      style={pos}
      tabIndex={1}
      onBlur={(e)=>{this.handleBlur()}}
      ref={node => this.dropdownContent = node}
      >
      {
        options.map((item, index) => {
          return <div onClick={(e)=>{this.handleSelect(e, item)}} className='cell-confirm dropdown-content-item' key={index}>{item.text}</div>
        })
      }
    </div>
  }

}

SelectEditor.keepEdit = true;

export function SelectEditor (props:ISelectEditorProps) {
  return <div className='single-select-container'>
    <div className='dropdown-container'>
      <span className='placeholder'>请选择</span>
      <Portal>
        <DropDown  {...props} />
      </Portal>
    </div>
  </div>
}

