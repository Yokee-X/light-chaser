import React, { ForwardedRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { ComponentBaseProps, ComponentInfoType } from "../../common-component/CommonTypes.ts";
import { ConfigProvider, ConfigProviderProps, DatePicker } from "antd";
import "./BaseRangePickerComponent.less";
import useLocale from "antd/es/locale/useLocale";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/zh-cn";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
type Locale = ConfigProviderProps["locale"];

// dayjs.locale("en");
const { RangePicker } = DatePicker;
export interface BaseRangePickerComponentBaseStyle {
    textColor?: string;
    colorTextPlaceholder?: string;
    colorBgContainer?: string;
    activeBorderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string; //边框颜色
    fontSize?: number;
    activeBg?: string;
}
export interface BaseRangePickerComponentSuspendStyle {
    colorBgElevated?: string; //悬浮框背景色
    colorPrimary?: string; //单元格悬浮背景色
    cellActiveWithRangeBg?: string;
}

export interface BaseRangePickerComponentStyle {
    base?: BaseRangePickerComponentBaseStyle;
    suspend?: BaseRangePickerComponentSuspendStyle;
}

export interface BaseRangePickerComponentProps extends ComponentBaseProps {
    style?: BaseRangePickerComponentStyle;
    locale?: string;
    globalVariable?: {
        start:string,
        end:string,
    }; //配置全局变量名
}

export interface BaseRangePickerComponentRef {
    updateConfig: (newConfig: BaseRangePickerComponentProps) => void;
    setEventHandler: (eventMap: Record<string, Function>) => void;
}

const BaseRangePickerComponent = React.forwardRef((props: BaseRangePickerComponentProps, ref: ForwardedRef<BaseRangePickerComponentRef>) => {
    const [config, setConfig] = useState<BaseRangePickerComponentProps>({ ...props });

    const eventHandlerMap = useRef<Record<string, Function>>({});

    useImperativeHandle(ref, () => ({
        updateConfig: newConfig => setConfig({ ...newConfig }),
        setEventHandler: eventMap => (eventHandlerMap.current = eventMap),
    }));
    useEffect(() => {
        if (config.locale != "zh") {
            dayjs.locale("en");
        } else {
            dayjs.locale("zh-cn");
        }
    }, [config?.locale]);

    const { style } = config;
    const dateChange = (date: [Dayjs | null, Dayjs | null] | null, dateString: string[]) => {
        if ("hasData" in eventHandlerMap.current) {
            // config.globalVariable = {};
            eventHandlerMap.current.hasData({
                start: dateString[0],
                end: dateString[1]
            });
        }
    };
    return (
        <ConfigProvider
            locale={config.locale == "zh" ? zhCN : enUS}
            theme={{
                components: {
                    DatePicker: {
                        activeBg: style?.base?.activeBg,
                        activeBorderColor: style?.base?.activeBorderColor,
                        colorBorder: style?.base?.borderColor,
                        colorBgContainer: style?.base?.colorBgContainer,
                        borderRadius: style?.base?.borderRadius,
                        colorText: style?.base?.textColor,
                        colorTextHeading: style?.base?.textColor,
                        colorIcon: style?.base?.textColor,
                        fontSize: style?.base?.fontSize,
                        colorTextPlaceholder: style?.base?.colorTextPlaceholder,
                        colorBgElevated: style?.suspend?.colorBgElevated,
                        colorPrimary: style?.suspend?.colorPrimary,
                        cellActiveWithRangeBg: style?.suspend?.cellActiveWithRangeBg,
                    },
                },
            }}
        >
            <RangePicker className='base-range-picker' format={"YYYY-MM-DD"} defaultValue={[dayjs().subtract(1, "M"), dayjs()]} allowClear={false} onChange={dateChange} />
        </ConfigProvider>
    );
});

export default BaseRangePickerComponent;
