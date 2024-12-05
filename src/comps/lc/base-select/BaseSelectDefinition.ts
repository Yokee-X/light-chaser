import { BaseInfoType, EventInfo, MenuToConfigMappingType } from "../../../framework/core/AbstractDefinition.ts";
import { ClazzTemplate } from "../../common-component/CommonTypes.ts";
import { MenuInfo } from "../../../designer/right/MenuType.ts";
import baseSelectImg from "./base-select.png";
import { BaseSelectController } from "./BaseSelectController.ts";
import { BaseSelectComponentProps } from "./BaseSelectComponent.tsx";
import { BaseSelectConfig } from "./BaseSelectConfig.tsx";
import React from "react";
import AbstractDesignerDefinition from "../../../framework/core/AbstractDesignerDefinition.ts";

const BaseInfo = React.lazy(() => import("../../common-component/base-info/BaseInfo.tsx"));
const ThemeConfig = React.lazy(() => import("../../common-component/theme-config/ThemeConfig.tsx"));
const AnimationConfig = React.lazy(() => import("../../common-component/animation-config/AnimationConfig.tsx"));
const FilterConfig = React.lazy(() => import("../../common-component/filter-config/FilterConfig.tsx"));

export default class BaseSelectDefinition extends AbstractDesignerDefinition<BaseSelectController, BaseSelectComponentProps> {
    getBaseInfo(): BaseInfoType {
        return {
            compName: "基础下拉框",
            compKey: "BaseSelect",
            categorize: "web",
            width: 170,
            height: 30,
        };
    }

    getChartImg(): string | null {
        return baseSelectImg;
    }

    getController(): ClazzTemplate<BaseSelectController> | null {
        return BaseSelectController;
    }

    getInitConfig(): BaseSelectComponentProps {
        const data = [
            { label: "选项1", value: 1 },
            { label: "选项2", value: 2 },
            { label: "选项3", value: 3 },
        ];
        return {
            base: {
                id: "",
                name: "基础下拉框",
                type: "BaseSelect",
            },
            style: {
                base: {
                    textColor:"#FFFFFF",
                    background: "#1d78b926",
                    fontSize:14,
                    borderWidth: 2,
                    borderColor: "#43a0e2",
                    // borderStyle: "solid",
                    borderRadius: 6,
                },
                suspend:{
                    optionSelectedBg:"#0da5dc23",
                    optionSelectedColor:"#FFFFFF",
                    optionActiveBg:"#43a0e2",
                    colorBgElevated:"#30587e39",
                    optionFontSize:14,
                }
            },
            data: {
                sourceType: "static",
                staticData: data,
            },
            filter: {
                enable: false,
                blur: 0,
                brightness: 1,
                contrast: 1,
                opacity: 1,
                saturate: 1,
                hueRotate: 0,
            },
        };
    }

    getMenuList(): Array<MenuInfo> {
        return super.getMenuList().filter((item: MenuInfo) => item.key !== "theme");
    }

    getMenuToConfigContentMap(): MenuToConfigMappingType {
        const menuMapping = super.getMenuToConfigContentMap();
        menuMapping["base"] = BaseInfo;
        menuMapping["style"] = BaseSelectConfig;
        menuMapping["theme"] = ThemeConfig;
        return menuMapping;
    }

    getEventList(): EventInfo[] {
        return [
            ...super.getEventList(),
            {
                id: "selectChange",
                name: "数据选中时",
            },
        ];
    }
}
