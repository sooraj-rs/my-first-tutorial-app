import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ath-design',
  templateUrl: './ath-design.component.html',
  styleUrls: ['./ath-design.component.css']
})
export class AthDesignComponent implements OnInit {

  lookupItemsNames: string[] = ["Salutation", "Rating", "Status", "Industry", "Job Title", "Department"];

  lookupGroups: ILookupGroup[] = [];
  lookupItems: ILookupItem[] = [];

  currentFocusedControl: string = "";

  ngOnInit(): void {
    this.lookupGroups = [];
    this.lookupItemsNames.forEach((x, i) => {
      let lookupGroups: ILookupGroup = {} as ILookupGroup;
      lookupGroups.id = i + 1;
      lookupGroups.name = x;
      lookupGroups.items = [];
      this.lookupGroups.push(lookupGroups);
    })
  }

  isSaveVisible(group: ILookupGroup, item: ILookupItem) {
    let currentControl = 'existingItemControl' + group.id + '-' + item.id;
    if (this.currentFocusedControl == currentControl) {
      return true;
    }
    return false;
  }

  checkFocus(group: ILookupGroup, item: ILookupItem) {
    if (group.id && item.id) {
      this.currentFocusedControl = 'existingItemControl' + group.id + '-' + item.id;
    }
  }

  addNewItem(group: ILookupGroup) {
    let newItemControl: any = document.getElementById('newItemControl' + group.id);
    if (newItemControl.value) {
      this.lookupGroups = this.lookupGroups.map(x => {
        if (x.id == group.id) {
          let lookupItem = {} as ILookupItem;
          lookupItem.id = x.items.length + 1;
          lookupItem.groupId = x.id;
          lookupItem.name = newItemControl.value;
          x.items.push(lookupItem);
        }
        return x;
      })
      newItemControl.value = "";
    }
  }

  saveItem(group: ILookupGroup, item: ILookupItem) {
    let existingItemControl: any = document.getElementById('existingItemControl' + group.id + '-' + item.id);

    if (existingItemControl.value) {
      this.lookupGroups = this.lookupGroups.map(x => {
        if (x.id == group.id) {
          x.items = x.items.map(i => {
            if (i.id == item.id) {
              i.name = existingItemControl.value;
            }
            return i;
          })
        }
        x.items = x.items.map((i, index) => {
          i.id = index + 1;
          return i;
        })
        return x;
      })
    }
  }

  deleteItem(group: ILookupGroup, item: ILookupItem) {
    this.lookupGroups = this.lookupGroups.map(x => {
      if (x.id == group.id) {
        x.items = x.items.filter(i => i.id != item.id);
      }
      x.items = x.items.map((i, index) => {
        i.id = index + 1;
        return i;
      })
      return x;
    })
  }

}

export interface ILookupGroup {
  id: number;
  name: string;
  items: ILookupItem[];
}

export interface ILookupItem {
  id: number;
  groupId: number;
  name: string;
}
