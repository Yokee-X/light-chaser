import React, { ForwardedRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { ComponentBaseProps, ComponentInfoType } from "../../common-component/CommonTypes.ts";
import { IFilterConfigType } from "../../../designer/DesignerType.ts";
import { ConfigProvider, Select } from "antd";
import { BaseOptionType } from "antd/es/select/index";
import "./BaseSelectComponent.less";
export interface BaseSelectComponentBaseStyle {
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    fontSize?: number;
    background?: string;
    // arrowColor?: string;
    textColor?: string;
}
export interface BaseSelectComponentSuspendStyle {
    optionActiveBg?: string;
    optionSelectedColor?: string;
    optionSelectedBg?: string;
    colorBgElevated?: string;
    optionFontSize?: number;
}

export interface BaseSelectComponentStyle {
    base?: BaseSelectComponentBaseStyle;
    suspend?: BaseSelectComponentSuspendStyle;
}

export interface BaseSelectComponentProps extends ComponentBaseProps {
    style?: BaseSelectComponentStyle;
    labelField?: string; // 配置label字段
    valueField?: string; // 配置value字段
    globalVariable?: string; //配置全局变量名
    loading?: boolean; //加载状态
}

export interface BaseSelectComponentRef {
    updateConfig: (newConfig: BaseSelectComponentProps) => void;
    setEventHandler: (eventMap: Record<string, Function>) => void;
}

const BaseSelectComponent = React.forwardRef((props: BaseSelectComponentProps, ref: ForwardedRef<BaseSelectComponentRef>) => {
    const [config, setConfig] = useState<BaseSelectComponentProps>({ ...props });

    const eventHandlerMap = useRef<Record<string, Function>>({});

    useImperativeHandle(ref, () => ({
        updateConfig: newConfig => setConfig({ ...newConfig }),
        setEventHandler: eventMap => (eventHandlerMap.current = eventMap),
    }));

    const handleSelect = (value: any, option: BaseOptionType | Array<BaseOptionType>) => {
        if ("hasData" in eventHandlerMap.current) {
            eventHandlerMap.current["hasData"](value);
        }
    };
    const data = config?.data?.staticData;
    const { style } = config;
    return (
        <ConfigProvider
            theme={{
                components: {
                    Select: {
                        colorBgContainer: style?.base?.background,
                        colorText: style?.base?.textColor,
                        optionSelectedBg: style?.suspend?.optionSelectedBg,
                        optionActiveBg: style?.suspend?.optionActiveBg,
                        optionSelectedColor: style?.suspend?.optionSelectedColor,
                        colorBgElevated: style?.suspend?.colorBgElevated,
                        fontSize: style?.base?.fontSize,
                        optionFontSize: style?.suspend?.optionFontSize,
                    },
                },
            }}
        >
            <Select className={"base-select"} loading={config?.loading} style={{ height: "100%", width: "100%", ...style?.base }} options={data} 
            // defaultValue={data?.[0]?.[config?.valueField!]} 
            fieldNames={{ label: config?.labelField, value: config?.valueField }} onSelect={handleSelect}></Select>
        </ConfigProvider>
    );
});

export default BaseSelectComponent;
