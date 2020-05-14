import React, { CSSProperties } from 'react'
import SheetRenderer from './sheet-component'
import Header from './header.component'
import Column from './column.component'
import { IDataSourceItem, IColumnsItem, IScrollBodyOptions, TPath, TCellValue } from './../types'
import "./react-datasheet.style.css";
const rowHeight = 40;

interface IDataSheetProps {
  dataSource: IDataSourceItem[];
  columns: IColumnsItem[];
  onChange: (e: any) => void;
  className: string;
  fromBodyEl: HTMLElement;
  maxBodyHeight: number;
  scrollBodyOptions: IScrollBodyOptions
}

interface IDataSheetState {
  dataSource: IDataSourceItem[]
}

export default class DataSheet extends React.Component<IDataSheetProps, IDataSheetState> {
  fromBodyEl:HTMLDivElement | null = null;
  constructor (props: IDataSheetProps) {
    // console.log('DataSheet:', props)
    super(props)
    // this.state.dataSource = this.props.dataSource
    this.state = {
      dataSource: this.props.dataSource
    }
  }

  componentDidMount () {
    // Add listener scoped to the DataSheet that catches otherwise unhandled
    // keyboard events when displaying components
    // this.dgDom && this.dgDom.addEventListener('keydown', this.handleComponentKey)
  }

  componentWillUnmount () {
    // this.dgDom && this.dgDom.removeEventListener('keydown', this.handleComponentKey)
  }

  componentWillReceiveProps({ dataSource }: IDataSheetProps) {
    this.setState({
      dataSource
    })
  }
  componentDidUpdate ({ scrollBodyOptions } : IDataSheetProps) {
    if(scrollBodyOptions && scrollBodyOptions.locateRow !== undefined){
      this.fromBodyEl && (this.fromBodyEl.scrollTop = rowHeight * scrollBodyOptions.locateRow);
    }
  }
  onDataSourceUpdate = (position: TPath, value: TCellValue) => {
    const [ rowIndex, key ] = position;
    // 根据路径，更新值
    this.state.dataSource[rowIndex][key] = value;
    this.setState({dataSource: [...this.state.dataSource]})
    // this.props.onChange(this.state.dataSource, position, value)
    this.props.onChange({newDataSource: this.state.dataSource, rowIndex, key})
  }

  onDataRowDelete = (rowIndex: number) => {
    this.state.dataSource.splice(rowIndex, 1)
    this.setState({
      dataSource: [...this.state.dataSource]
    })
    this.props.onChange([...this.state.dataSource])
    this.props.onChange({newDataSource: [...this.state.dataSource]})
  }

  /* static getDerivedStateFromProps = ({dataSource}, state) => {
    return {dataSource: dataSource || []}
  } */
  render () {
    const {className, columns, scrollBodyOptions} = this.props
    
    const styles:CSSProperties = {};
    if(scrollBodyOptions && scrollBodyOptions.maxHeight){
      styles['maxHeight'] = `${scrollBodyOptions.maxHeight}px`
      styles['overflowY'] = 'auto'
    }else{
      const rowLength:number = this.state.dataSource.length;
      styles['height'] = `${rowLength * rowHeight + 50}px`
    }
    return (
      <div className='data-grid-container'>
        <SheetRenderer className={['data-grid', className].filter(a => a).join(' ')}>
        <Header columns = {columns}/>
        <div  style={styles} ref={node => this.fromBodyEl = node}>
        {
          this.state.dataSource.map((dataSourceItem, index) => (
            <Column
              key = {index}
              columns = {columns}
              dataSourceItem = {dataSourceItem}
              onDataSourceUpdate={this.onDataSourceUpdate}
              onDataRowDelete = {()=>{this.onDataRowDelete(index)}}
              rowIndex = {index}
              />
          ))
        }
        </div>
        </SheetRenderer>
      </div>
    )
  }
}
