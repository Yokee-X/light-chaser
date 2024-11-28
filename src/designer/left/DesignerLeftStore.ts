import {action, makeObservable, observable} from "mobx";
import {ReactNode} from "react";

export interface ILeftMenu {
    icon: ReactNode,
    name: string,
    key: string,
}
//设计页面左侧菜单栏数据
class DesignerLeftStore {
    constructor() {
        makeObservable(this, {
            menu: observable,
            setMenu: action,
        });
    }

    menu: string = 'components';//当前menu

    setMenu = (menu: string) => this.menu = menu;

    designerLeftRef: HTMLElement | null = null;//左侧菜单栏dom

    setDesignerLeftRef = (ref: HTMLElement | null) => this.designerLeftRef = ref;

}

const designerLeftStore = new DesignerLeftStore();
export default designerLeftStore;