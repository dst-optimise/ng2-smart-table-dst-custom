var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
var TbodyEditDeleteComponent = (function () {
    function TbodyEditDeleteComponent() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom1 = new EventEmitter();
        this.custom2 = new EventEmitter();
        this.custom3 = new EventEmitter();
        this.custom4 = new EventEmitter();
        this.custom5 = new EventEmitter();
        this.custom6 = new EventEmitter();
        this.custom7 = new EventEmitter();
        this.editRowSelect = new EventEmitter();
    }
    TbodyEditDeleteComponent.prototype.onEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.edit(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onDelete = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    };
    TbodyEditDeleteComponent.prototype.onCustom1 = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.custom1.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.custom1(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onCustom2 = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.custom2.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.custom2(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onCustom3 = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.custom3.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.custom3(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onCustom4 = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.custom4.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.custom4(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onCustom5 = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.custom5.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.custom5(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onCustom6 = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.custom6.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.custom6(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onCustom7 = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.custom7.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.custom7(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.ngOnChanges = function () {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.isActionCustom1 = this.grid.getSetting('actions.custom1');
        this.isActionCustom2 = this.grid.getSetting('actions.custom2');
        this.isActionCustom3 = this.grid.getSetting('actions.custom3');
        this.isActionCustom4 = this.grid.getSetting('actions.custom4');
        this.isActionCustom5 = this.grid.getSetting('actions.custom5');
        this.isActionCustom6 = this.grid.getSetting('actions.custom6');
        this.isActionCustom7 = this.grid.getSetting('actions.custom7');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
        this.custom1RowButtonContent = this.grid.getSetting('custom1.custom1ButtonContent');
        this.custom2RowButtonContent = this.grid.getSetting('custom2.custom2ButtonContent');
        this.custom3RowButtonContent = this.grid.getSetting('custom3.custom3ButtonContent');
        this.custom4RowButtonContent = this.grid.getSetting('custom4.custom4ButtonContent');
        this.custom5RowButtonContent = this.grid.getSetting('custom5.custom5ButtonContent');
        this.custom6RowButtonContent = this.grid.getSetting('custom6.custom6ButtonContent');
        this.custom7RowButtonContent = this.grid.getSetting('custom7.custom7ButtonContent');
    };
    return TbodyEditDeleteComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Grid)
], TbodyEditDeleteComponent.prototype, "grid", void 0);
__decorate([
    Input(),
    __metadata("design:type", Row)
], TbodyEditDeleteComponent.prototype, "row", void 0);
__decorate([
    Input(),
    __metadata("design:type", DataSource)
], TbodyEditDeleteComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], TbodyEditDeleteComponent.prototype, "deleteConfirm", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], TbodyEditDeleteComponent.prototype, "editConfirm", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "edit", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "delete", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "custom1", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "custom2", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "custom3", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "custom4", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "custom5", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "custom6", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "custom7", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TbodyEditDeleteComponent.prototype, "editRowSelect", void 0);
TbodyEditDeleteComponent = __decorate([
    Component({
        selector: 'ng2-st-tbody-edit-delete',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: "\n    <a href=\"#\" *ngIf=\"isActionEdit\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"editRowButtonContent\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionDelete\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"deleteRowButtonContent\" (click)=\"onDelete($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionCustom1\" class=\"ng2-smart-action ng2-smart-action-custom1-custom1\"\n        [innerHTML]=\"custom1RowButtonContent\" (click)=\"onCustom1($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionCustom2\" class=\"ng2-smart-action ng2-smart-action-custom2-custom2\"\n        [innerHTML]=\"custom2RowButtonContent\" (click)=\"onCustom2($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionCustom3\" class=\"ng2-smart-action ng2-smart-action-custom3-custom3\"\n        [innerHTML]=\"custom3RowButtonContent\" (click)=\"onCustom3($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionCustom4\" class=\"ng2-smart-action ng2-smart-action-custom4-custom4\"\n        [innerHTML]=\"custom4RowButtonContent\" (click)=\"onCustom4($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionCustom5\" class=\"ng2-smart-action ng2-smart-action-custom5-custom5\"\n        [innerHTML]=\"custom5RowButtonContent\" (click)=\"onCustom5($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionCustom6\" class=\"ng2-smart-action ng2-smart-action-custom6-custom6\"\n        [innerHTML]=\"custom6RowButtonContent\" (click)=\"onCustom6($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionCustom7\" class=\"ng2-smart-action ng2-smart-action-custom7-custom7\"\n        [innerHTML]=\"custom7RowButtonContent\" (click)=\"onCustom7($event)\"></a>\n  ",
    })
], TbodyEditDeleteComponent);
export { TbodyEditDeleteComponent };
//# sourceMappingURL=edit-delete.component.js.map