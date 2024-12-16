import {ThemeItemType} from "../../../designer/DesignerType";
import {UpdateOptions} from "../../../framework/core/AbstractController";
import AbstractDesignerController from "../../../framework/core/AbstractDesignerController";
import ComponentUtil from "../../../utils/ComponentUtil";
import BaseRangePickerComponent, {
    BaseRangePickerComponentProps,
    BaseRangePickerComponentRef
} from "./BaseRangePickerComponent";
import ObjectUtil from "../../../utils/ObjectUtil";
import BPExecutor from "../../../designer/blueprint/core/BPExecutor";

export class BaseRangePickerController extends AbstractDesignerController<BaseRangePickerComponentRef, BaseRangePickerComponentProps> {

    async create(container: HTMLElement, config: BaseRangePickerComponentProps): Promise<void> {
        this.config = config;
        this.container = container;
        this.instance = await ComponentUtil.createAndRender<BaseRangePickerComponentRef>(container, BaseRangePickerComponent, config);
    }

    destroy(): void {
        this.instance = null;
        this.config = null;
    }
    changeData(data:any){
        this.instance?.updateConfig(ObjectUtil.merge(this.config, {data:{staticData:data}}))
    }
    getConfig(): BaseRangePickerComponentProps | null {
        return this.config;
    }
    update(config: BaseRangePickerComponentProps, upOp?: UpdateOptions | undefined): void {
        this.config = ObjectUtil.merge(this.config, config);
        console.log('update config:', config)
        upOp = upOp || {reRender: true};
        if (upOp.reRender)
            this.instance?.updateConfig(this.config!);
    }

    updateTheme(newTheme: ThemeItemType): void {

    }


    registerEvent() {
        const nodeId = this.config?.base?.id!;
        this.instance?.setEventHandler({
            hasData: (value:any) => {
                BPExecutor.triggerComponentEvent(nodeId!, "hasData", {...this.config,value})
            },
        })
    }
}