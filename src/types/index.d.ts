import {ReactNode} from 'react'

export interface IStandardObject {
  [property: string]: any;
}

export interface IDataSourceItem {
  [property: string]: string;
}

export interface IColumnsItem {
  editorRender?: TypeEditorRender;
  valueRender?: TypeValueRender
  // editorRender?: ReactNode;
  // valueRender?: ReactNode;
  [property: string]: string | ReactNode;
  key: string;
  dataIndex: string;
  title: string;
  editable: boolean;
  suffixInfo?: React.ComponentType;
}


interface IEditorRenderProps {
  cellData: TypeCellData
  currentTarget: (EventTarget & Element) | null;
  onSubmit: ExtendFiledSubmit;
}

export type TypeEditorRender = (params: IEditorRenderProps) => ReactNode;

export type TypeValueRender = (cellData: TypeCellData) => ReactNode;

export interface IOptionItem {
  value?: string | number,
  text?: 'string',
  isActive?: boolean,
  isChecked?: boolean
}

export type ExtendFiledSubmit = (value: any ) => void

interface ICellDataDefault extends IStandardObject{
  value: string
}

export type TypeCellData = string | number | ICellDataDefault;
