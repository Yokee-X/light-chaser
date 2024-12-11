import React, { ForwardedRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { ComponentBaseProps, ComponentInfoType } from "../../common-component/CommonTypes.ts";
import { ConfigProvider, DatePicker } from "antd";
import { BaseOptionType } from "antd/es/select/index";
import "./BaseDatePickerComponent.less";
export interface BaseDatePickerComponentBaseStyle {
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    fontSize?: number;
    background?: string;
    // arrowColor?: string;
    textColor?: string;
}
export interface BaseDatePickerComponentSuspendStyle {
    optionActiveBg?: string;
    optionSelectedColor?: string;
    optionSelectedBg?: string;
    colorBgElevated?: string;
    optionFontSize?: number;
}

export interface BaseDatePickerComponentStyle {
    base?: BaseDatePickerComponentBaseStyle;
    suspend?: BaseDatePickerComponentSuspendStyle;
}

export interface BaseDatePickerComponentProps extends ComponentBaseProps {
    style?: BaseDatePickerComponentStyle;
    labelField?: string; // 配置label字段
    valueField?: string; // 配置value字段
    globalVariable?: string; //配置全局变量名
    loading?: boolean; //加载状态
}

export interface BaseDatePickerComponentRef {
    updateConfig: (newConfig: BaseDatePickerComponentProps) => void;
    setEventHandler: (eventMap: Record<string, Function>) => void;
}

const BaseDatePickerComponent = React.forwardRef((props: BaseDatePickerComponentProps, ref: ForwardedRef<BaseDatePickerComponentRef>) => {
    const [config, setConfig] = useState<BaseDatePickerComponentProps>({ ...props });

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
           <DatePicker />
        </ConfigProvider>
    );
});

export default BaseDatePickerComponent;
