import {ReactNode} from 'react'

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

export type TypeEditorRender = (text, record, onsubmit) => ReactNode;

export type TypeValueRender = (value: string | number) => ReactNode;

export interface IOptionItem {
  value?: string | number,
  text?: 'string',
  isActive?: boolean,
  isChecked?: boolean
}

export type ExtendFiledSubmit = (value: any ) => void
