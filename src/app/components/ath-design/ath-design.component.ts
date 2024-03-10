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

  boxes = [
    { name: 'Box 1', order: 0 },
    { name: 'Box 2', order: 1 },
    { name: 'Box 3', order: 2 },
    { name: 'Box 4', order: 3 },
    { name: 'Box 5', order: 4 },
    { name: 'Box 6', order: 5 },
    { name: 'Box 7', order: 6 },
    { name: 'Box 8', order: 7 },
    { name: 'Box 9', order: 8 },
    { name: 'Box 10', order: 9 },
    { name: 'Box 11', order: 10 },
    { name: 'Box 12', order: 11 },
    // Add more boxes as needed
  ];

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

  //MANUAL SORT ORDER CODE
 
  moveUp(box: any) {
    const currentIndex = this.boxes.findIndex(b => b === box);
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      this.swap(currentIndex, newIndex);
    }
  }

  moveDown(box: any) {
    const currentIndex = this.boxes.findIndex(b => b === box);
    const newIndex = currentIndex + 1;
    if (newIndex < this.boxes.length) {
      this.swap(currentIndex, newIndex);
    }
  }

  swap(currentIndex: number, newIndex: number) {
    const tempOrder = this.boxes[currentIndex].order;
    this.boxes[currentIndex].order = this.boxes[newIndex].order;
    this.boxes[newIndex].order = tempOrder;
    this.boxes = this.boxes.sort((a,b)=>a.order-b.order);
    console.log(this.boxes)
  }

      //MANUAL SORT ORDER CODE

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
