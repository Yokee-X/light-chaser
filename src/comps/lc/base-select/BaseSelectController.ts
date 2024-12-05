import {ThemeItemType} from "../../../designer/DesignerType";
import {UpdateOptions} from "../../../framework/core/AbstractController";
import AbstractDesignerController from "../../../framework/core/AbstractDesignerController";
import ComponentUtil from "../../../utils/ComponentUtil";
import BaseSelectComponent, {
    BaseSelectComponentProps,
    BaseSelectComponentRef
} from "./BaseSelectComponent";
import ObjectUtil from "../../../utils/ObjectUtil";
import BPExecutor from "../../../designer/blueprint/core/BPExecutor";

export class BaseSelectController extends AbstractDesignerController<BaseSelectComponentRef, BaseSelectComponentProps> {

    async create(container: HTMLElement, config: BaseSelectComponentProps): Promise<void> {
        this.config = config;
        this.container = container;
        this.instance = await ComponentUtil.createAndRender<BaseSelectComponentRef>(container, BaseSelectComponent, config);
    }

    destroy(): void {
        this.instance = null;
        this.config = null;
    }

    getConfig(): BaseSelectComponentProps | null {
        return this.config;
    }

    update(config: BaseSelectComponentProps, upOp?: UpdateOptions | undefined): void {
        this.config = ObjectUtil.merge(this.config, config);
        console.log('调用update',upOp)
        upOp = upOp || {reRender: true};
        if (upOp.reRender)
            this.instance?.updateConfig(this.config!);
    }

    updateTheme(newTheme: ThemeItemType): void {

    }


    registerEvent() {
        const nodeId = this.config?.base?.id!;
        console.log("registerEvent", nodeId);
        this.instance?.setEventHandler({
            selectChange: () => BPExecutor.triggerComponentEvent(nodeId!, "selectChange", this.config),
        })
    }
}