import {ThemeItemType} from "../../../designer/DesignerType";
import {UpdateOptions} from "../../../framework/core/AbstractController";
import AbstractDesignerController from "../../../framework/core/AbstractDesignerController";
import ComponentUtil from "../../../utils/ComponentUtil";
import BaseIframeComponent, {BaseIframeComponentProps} from "./BaseIframeComponent";
import ObjectUtil from "../../../utils/ObjectUtil";

export class BaseIframeController extends AbstractDesignerController<BaseIframeComponent, BaseIframeComponentProps> {

    create(container: HTMLElement, config: any): void {
        this.config = config;
        this.container = container;
        ComponentUtil.createAndRender<BaseIframeComponent>(container, BaseIframeComponent, config).then((instance) => this.instance = instance);
    }

    destroy(): void {
        this.instance = null;
        this.config = null;
    }

    getConfig(): BaseIframeComponentProps | null {
        return this.config;
    }

    update(config: BaseIframeComponentProps, upOp?: UpdateOptions | undefined): void {
        this.config = ObjectUtil.merge(this.config, config);
        upOp = upOp || {reRender: true};
        if (upOp.reRender)
            this.instance?.setState(this.config);
    }

    updateTheme(newTheme: ThemeItemType): void {

    }
}