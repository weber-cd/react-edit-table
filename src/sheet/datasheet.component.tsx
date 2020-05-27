import React, { CSSProperties } from 'react'
import SheetRenderer from './sheet-component'
import Header from './header.component'
import Column from './column.component'
import { IDataSourceItem, IColumnsItem, IScrollBodyOptions, TPath, TCellValue, TypeOnDelete } from './../types'
import "./react-datasheet.style.css";
import cloneDeep from 'lodash.clonedeep';

const rowHeight = 40;

interface IDataSheetProps {
  dataSource: IDataSourceItem[];
  columns: IColumnsItem[];
  onChange: (e: any) => void;
  onDelete?: TypeOnDelete;
  onCellChange?: () => void; // spread cell change to parent
  className: string;
  fromBodyEl: HTMLElement;
  maxBodyHeight: number;
  scrollBodyOptions: IScrollBodyOptions;
  couldDeleteRow: boolean;
}

interface IDataSheetState {
  dataSource: IDataSourceItem[]
}

export default class DataSheet extends React.Component<IDataSheetProps, IDataSheetState> {
  fromBodyEl:HTMLDivElement | null = null;
  static defaultProps = {
    couldDeleteRow: true
  }
  constructor (props: IDataSheetProps) {
    // console.log('DataSheet:', props)
    super(props)
    // this.state.dataSource = this.props.dataSource
    this.state = {
      dataSource: cloneDeep(this.props.dataSource) || []
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

  /* componentWillReceiveProps({ dataSource: newDataSource }: IDataSheetProps) {
  } */
  componentDidUpdate ({ scrollBodyOptions } : IDataSheetProps) {
    if(scrollBodyOptions && scrollBodyOptions.locateRow !== undefined){
      this.fromBodyEl && (this.fromBodyEl.scrollTop = rowHeight * scrollBodyOptions.locateRow);
    }
  }
  onDataSourceUpdate = (position: TPath, value: TCellValue) => {
    const [ rowIndex, key ] = position;
    // 根据路径，更新值
    this.setState(({dataSource: predataSource}) => {
      predataSource[rowIndex][key] = value
      this.props.onChange && this.props.onChange({newDataSource: predataSource, rowIndex, key})
      return {
        dataSource: predataSource
      }
    })
    
  }

  onDataRowDelete = (rowIndex: number) => {
    this.props.onDelete && this.props.onDelete({rowIndex})
  }

  componentWillReceiveProps({ dataSource }: IDataSheetProps){
    this.setState({
      dataSource: cloneDeep(dataSource) || []
    })
  }
  /* static getDerivedStateFromProps = ({dataSource}, state) => {
    return {dataSource: dataSource || []}
  } */
  render () {
    const {className, columns, scrollBodyOptions, couldDeleteRow} = this.props
    
    const styles:CSSProperties = {};
    if(scrollBodyOptions && scrollBodyOptions.maxHeight){
      styles['maxHeight'] = `${scrollBodyOptions.maxHeight}px`
      styles['overflowY'] = 'auto';
    }else{
      const rowLength:number = this.props.dataSource.length;
      styles['height'] = `${rowLength * rowHeight}px`
    }
    return (
      <div className='data-grid-container'>
        <SheetRenderer className={['data-grid', className].filter(a => a).join(' ')}>
          <Header columns = {columns} couldDeleteRow={couldDeleteRow} />
          <div className='body-container' style={styles} ref={node => this.fromBodyEl = node}>
          {
            this.props.dataSource.map((dataSourceItem, index) => (
              <Column
                key = {index}
                columns = {columns}
                dataSourceItem = {dataSourceItem}
                onDataSourceUpdate={this.onDataSourceUpdate}
                onDataRowDelete = {()=>{this.onDataRowDelete(index)}}
                rowIndex = {index}
                couldDeleteRow= {couldDeleteRow}
                />
            ))
          }
          </div>
        </SheetRenderer>
      </div>
    )
  }
}
