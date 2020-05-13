import React from 'react'
import SheetRenderer from './sheet-component'
import Header from './header.component'
import Column from './column.component'
import { IDataSourceItem, IColumnsItem } from '../types'
import "./react-datasheet.style.css";

interface IDataSheetProps {
  dataSource: IDataSourceItem[];
  columns: IColumnsItem[];
  onChange: (params:any) => void;
  className: string;
  overflow: string;
}

interface IDataSheetState {
  dataSource: IDataSourceItem[]
}

export default class DataSheet extends React.PureComponent<IDataSheetProps, IDataSheetState> {
  constructor (props) {
    // console.log('DataSheet:', props)
    super(props)
    console.log(this.props.dataSource)
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

  componentDidUpdate (prevProps, prevState) {
    
  }

  onDataSourceUpdate = (position, value) => {
    const [ rowIndex, key ] = position;
    // 根据路径，更新值
    this.state.dataSource[rowIndex][key] = value;
    this.setState({dataSource: [...this.state.dataSource]})
    // this.props.onChange(this.state.dataSource, position, value)
    this.props.onChange({newDataSource: this.state.dataSource, rowIndex, key})
  }

  onDataRowDelete = (rowIndex) => {
    this.state.dataSource.splice(rowIndex, 1)
    this.setState({
      dataSource: [...this.state.dataSource]
    })
    this.props.onChange([...this.state.dataSource])
    this.props.onChange({newDataSource: [...this.state.dataSource]})
  }
  static getDerivedStateFromProps = ({dataSource}) => {
    return {dataSource: dataSource || []}
  }
  render () {
    const {className, overflow, columns} = this.props
    const rowLength:number = this.state.dataSource.length;
    return (
      <div className='data-grid-container' style={{ height: `${rowLength * 40 + 50}px`}}>
        <SheetRenderer className={['data-grid', className, overflow].filter(a => a).join(' ')}>
        <Header columns = {columns} />
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
        </SheetRenderer>
      </div>
    )
  }
}
