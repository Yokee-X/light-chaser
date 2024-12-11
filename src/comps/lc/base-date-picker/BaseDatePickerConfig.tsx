import React from "react";
import { FieldChangeData, LCGUI } from "../../../json-schema/LCGUI";
import { Control } from "../../../json-schema/SchemaTypes";
import { BaseDatePickerController } from "./BaseDatePickerController";
import { ConfigType } from "../../../designer/right/ConfigContent";
import AntdCommonUtil from "../../antd-common/AntdCommonUtil";

/**
 * Config用于配置组件的样式
 */
export const BaseDatePickerConfig: React.FC<ConfigType<BaseDatePickerController>> = ({ controller }) => {
    const { base, suspend } = controller.getConfig()?.style ?? {};

    const onFieldChange = (fieldChangeData: FieldChangeData) => {
        const { dataFragment } = fieldChangeData;
        controller.update(dataFragment);
    };

    const schema: Control = {
        key: "style",
        children: [
            {
                key: "base",
                type: "accordion",
                label: "基础",
                children: [
                    {
                        type: "grid",
                        children: [
                            {
                                key: "textColor",
                                type: "color-picker",
                                label: "文本颜色",
                                value: base?.textColor,
                                config: {
                                    showText: true,
                                },
                            },
                            {
                                key: "background",
                                type: "color-picker",
                                label: "背景颜色",
                                value: base?.background,
                                config: {
                                    showText: true,
                                },
                            },
                            {
                                key: "fontSize",
                                type: "number-input",
                                label: "字体大小",
                                value: base?.fontSize,
                                config: {
                                    min: 12,
                                    step: 1,
                                },
                            },
                            {
                                key: "borderWidth",
                                type: "number-input",
                                label: "边框宽度",
                                value: base?.borderWidth,
                                config: {
                                    min: 0,
                                    max: 10,
                                    step: 1,
                                },
                            },
                            {
                                key: "borderColor",
                                type: "color-picker",
                                label: "边框颜色",
                                value: base?.borderColor,
                                config: {
                                    showText: true,
                                },
                            },
                            // {
                            //     key: 'borderStyle',
                            //     type: 'select',
                            //     label: '边框样式',
                            //     value: base?.borderStyle,
                            //     config: {
                            //         options: [
                            //             {label: '实线', value: 'solid'},
                            //             {label: '虚线', value: 'dashed'},
                            //             {label: '点线', value: 'dotted'},
                            //             {label: '双线', value: 'double'},
                            //             {label: '3D凹槽', value: 'groove'},
                            //             {label: '3D垄状', value: 'ridge'},
                            //             {label: '3D内嵌', value: 'inset'},
                            //             {label: '3D外嵌', value: 'outset'},
                            //             {label: '无边框', value: 'none'},
                            //         ]
                            //     }
                            // },
                            {
                                key: "borderRadius",
                                type: "number-input",
                                label: "边框圆角",
                                value: base?.borderRadius,
                                config: {
                                    min: 0,
                                },
                            },
                        ],
                    },
                ],
            },
            {
                key: "suspend",
                type: "accordion",
                label: "下拉选项",
                children: [
                    {
                        type: "grid",
                        children: [
                            {
                                key: "optionSelectedBg",
                                type: "color-picker",
                                label: "选中背景",
                                value: suspend?.optionSelectedBg,
                                config: {
                                    showText: true,
                                },
                            },
                            {
                                key: "optionSelectedColor",
                                type: "color-picker",
                                label: "选中文本",
                                value: suspend?.optionSelectedColor,
                                config: {
                                    showText: true,
                                },
                            },
                            {
                                key: "optionFontSize",
                                type: "number-input",
                                label: "字体大小",
                                value: suspend?.optionFontSize,
                                config: {
                                    min: 12,
                                    step: 1,
                                },
                            },
                            {
                                key: "optionActiveBg",
                                type: "color-picker",
                                label: "悬浮背景",
                                value: suspend?.optionActiveBg,
                                config: {
                                    showText: true,
                                },
                            },
                            {
                                key: "colorBgElevated",
                                type: "color-picker",
                                label: "面板背景",
                                value: suspend?.colorBgElevated,
                                config: {
                                    showText: true,
                                },
                            },
                        ],
                    },
                ],
            },
        ],
    };

    return (
        <div style={{ padding: 10 }}>
            <LCGUI schema={schema} onFieldChange={onFieldChange} />
        </div>
    );
};
export const BaseDatePickerFieldMapping: React.FC<ConfigType> = (props) => {
    const {controller} = props;
    const config = controller.config;
    const options = AntdCommonUtil.getDataFieldOptions(controller);
    const schema: Control = {
        // key: 'style',
        type: 'grid',
        children: [
            {
                key: 'labelField',
                type: 'select',
                label: 'X字段',
                value: config.labelField,
                config: {
                    options,
                }
            },
            {
                key: 'valueField',
                type: 'select',
                label: 'Y字段',
                value: config.valueField,
                config: {
                    options,
                }
            },
            {
                key: "globalVariable",
                type: "input",
                label: "全局变量",
                value: config?.globalVariable,
                config: {},
            },
        ]
    }

    const onFieldChange = (fieldChangeData: FieldChangeData) => {
        controller.update(fieldChangeData.dataFragment);
    }

    return <div style={{padding: 10}}><LCGUI schema={schema} onFieldChange={onFieldChange}/></div>
}