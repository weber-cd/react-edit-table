import {ReactNode, ReactElement} from 'react'

export interface IStandardObject {
  [property: string]: any;
}

export interface IDataSourceItem {
  [property: string]: TypeCellData;
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

export type TPath = [number, string]; // [rowIndex, key]

interface IEditorRenderProps {
  cellData: TypeCellData;
  currentTarget: EventTarget | null;
  onSubmit: ExtendFiledSubmit;
  path: TPath;
}

export type TypeEditorRender = (params: IEditorRenderProps) => ReactElement;

export type TypeValueRender = (cellData: TypeCellData) => ReactElement;

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

export type TCellValue = string | number;

export interface IScrollBodyOptions {
  maxHeight: number,
  locateRow: number
}
