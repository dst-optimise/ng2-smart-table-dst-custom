import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
export declare class TbodyEditDeleteComponent implements OnChanges {
    grid: Grid;
    row: Row;
    source: DataSource;
    deleteConfirm: EventEmitter<any>;
    editConfirm: EventEmitter<any>;
    edit: EventEmitter<any>;
    delete: EventEmitter<any>;
    custom1: EventEmitter<any>;
    custom2: EventEmitter<any>;
    custom3: EventEmitter<any>;
    custom4: EventEmitter<any>;
    custom5: EventEmitter<any>;
    custom6: EventEmitter<any>;
    custom7: EventEmitter<any>;
    editRowSelect: EventEmitter<any>;
    isActionEdit: boolean;
    isActionDelete: boolean;
    isActionCustom1: boolean;
    isActionCustom2: boolean;
    isActionCustom3: boolean;
    isActionCustom4: boolean;
    isActionCustom5: boolean;
    isActionCustom6: boolean;
    isActionCustom7: boolean;
    editRowButtonContent: string;
    deleteRowButtonContent: string;
    onEdit(event: any): void;
    onDelete(event: any): void;
    onCustom1(event: any): void;
    onCustom2(event: any): void;
    onCustom3(event: any): void;
    onCustom4(event: any): void;
    onCustom5(event: any): void;
    onCustom6(event: any): void;
    onCustom7(event: any): void;
    ngOnChanges(): void;
}
