import {ThemeItemType} from "../../../designer/DesignerType";
import {UpdateOptions} from "../../../framework/core/AbstractController";
import AbstractDesignerController from "../../../framework/core/AbstractDesignerController";
import ComponentUtil from "../../../utils/ComponentUtil";
import BaseDatePickerComponent, {
    BaseDatePickerComponentProps,
    BaseDatePickerComponentRef
} from "./BaseDatePickerComponent";
import ObjectUtil from "../../../utils/ObjectUtil";
import BPExecutor from "../../../designer/blueprint/core/BPExecutor";

export class BaseDatePickerController extends AbstractDesignerController<BaseDatePickerComponentRef, BaseDatePickerComponentProps> {

    async create(container: HTMLElement, config: BaseDatePickerComponentProps): Promise<void> {
        this.config = config;
        this.container = container;
        this.instance = await ComponentUtil.createAndRender<BaseDatePickerComponentRef>(container, BaseDatePickerComponent, config);
    }

    destroy(): void {
        this.instance = null;
        this.config = null;
    }
    changeData(data:any){
        this.instance?.updateConfig(ObjectUtil.merge(this.config, {loading:this.loading,data:{staticData:data}}))
    }
    changeLoading(loading:boolean){
        this.instance?.updateConfig(ObjectUtil.merge(this.config, {loading}))
    }
    getConfig(): BaseDatePickerComponentProps | null {
        return this.config;
    }
    update(config: BaseDatePickerComponentProps, upOp?: UpdateOptions | undefined): void {
        this.config = ObjectUtil.merge(this.config, config);
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