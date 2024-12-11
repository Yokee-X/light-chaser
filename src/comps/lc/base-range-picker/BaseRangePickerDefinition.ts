import { BaseInfoType, EventInfo, MenuToConfigMappingType } from "../../../framework/core/AbstractDefinition.ts";
import { ClazzTemplate } from "../../common-component/CommonTypes.ts";
import { MenuInfo } from "../../../designer/right/MenuType.ts";
import BaseRangePickerImg from "./base-range-picker.png";
import { BaseRangePickerController } from "./BaseRangePickerController.ts";
import { BaseRangePickerComponentProps } from "./BaseRangePickerComponent.tsx";
import React from "react";
import AbstractDesignerDefinition from "../../../framework/core/AbstractDesignerDefinition.ts";
import { getDefaultMenuList } from "../../../designer/right/util.ts";

const BaseInfo = React.lazy(() => import("../../common-component/base-info/BaseInfo.tsx"));
const BaseRangePickerConfig = React.lazy(() => import("./BaseRangePickerConfig.tsx").then(module=>({default:module.BaseRangePickerConfig})))
const BaseRangePickerFieldMapping = React.lazy(() => import("./BaseRangePickerConfig.tsx").then(module=>({default:module.BaseRangePickerFieldMapping})))
const FilterConfig = React.lazy(() => import("../../common-component/filter-config/FilterConfig.tsx"));
export default class BaseRangePickerDefinition extends AbstractDesignerDefinition<BaseRangePickerController, BaseRangePickerComponentProps> {
    getBaseInfo(): BaseInfoType {
        return {
            compName: "基础日期范围选择框",
            compKey: "BaseRangePicker",
            categorize: "web",
            width: 220,
            height: 30,
        };
    }

    getChartImg(): string | null {
        return BaseRangePickerImg;
    }

    getController(): ClazzTemplate<BaseRangePickerController> | null {
        return BaseRangePickerController;
    }

    getInitConfig(): BaseRangePickerComponentProps {
        const data = [
            { label: "选项1", value: 1 },
            { label: "选项2", value: 2 },
            { label: "选项3", value: 3 },
        ];
        return {
            base: {
                id: "",
                name: "基础日期范围选择框",
                type: "BaseRangePicker",
            },
            locale: "zh",
            globalVariable:{
                start:"startDate",
                end:"endDate"
            }
              ,
            style: {
                base: {
                    textColor: "#FFFFFF",
                    colorTextPlaceholder:"#FFFFFF",
                    colorBgContainer: "#00a2ff12",
                    activeBg:"#00a2ff12",
                    fontSize: 14,
                    borderWidth: 2,
                    borderColor: "#43a0e2",
                    activeBorderColor:"#43a0e2",
                    borderRadius: 6,
                },
                suspend: {
                    colorBgElevated: "#30587e39",
                    cellActiveWithRangeBg:"#006AFF20",
                    colorPrimary:"#1677ff"
                },
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
        return getDefaultMenuList().filter((item: MenuInfo) => item.key !== "theme");
    }

    getMenuToConfigContentMap(): MenuToConfigMappingType {
        return {
            base:BaseInfo,
            style: BaseRangePickerConfig,
            mapping: BaseRangePickerFieldMapping,
            filter: FilterConfig
        };
    }

    getEventList(): EventInfo[] {
        return [
            ...super.getEventList(),
            {
                id: "hasData",
                name: "数据有值时",
            },
        ];
    }
}
