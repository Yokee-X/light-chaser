import React from "react";
import { FieldChangeData, LCGUI } from "../../../json-schema/LCGUI";
import { Control } from "../../../json-schema/SchemaTypes";
import { BaseRangePickerController } from "./BaseRangePickerController";
import { ConfigType } from "../../../designer/right/ConfigContent";
import AntdCommonUtil from "../../antd-common/AntdCommonUtil";

/**
 * Config用于配置组件的样式
 */
export const BaseRangePickerConfig: React.FC<ConfigType<BaseRangePickerController>> = ({ controller }) => {
    const config = controller.getConfig() ?? {};
    const { base, suspend } = config?.style ?? {};
    const onFieldChange = (fieldChangeData: FieldChangeData) => {
        const { dataFragment } = fieldChangeData;
        controller.update(dataFragment);
    };

    const schema: Control[] = [
        {
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
                                    key: "colorTextPlaceholder",
                                    type: "color-picker",
                                    label: "占位文本颜色",
                                    value: base?.colorTextPlaceholder,
                                    config: {
                                        showText: true,
                                    },
                                },

                                {
                                    key: "colorBgContainer",
                                    type: "color-picker",
                                    label: "背景颜色",
                                    value: base?.colorBgContainer,
                                    config: {
                                        showText: true,
                                    },
                                },
                                {
                                    key: "activeBg",
                                    type: "color-picker",
                                    label: "激活背景颜色",
                                    value: base?.activeBg,
                                    config: {
                                        showText: true,
                                    },
                                },
                                {
                                    key: "activeBorderColor",
                                    type: "color-picker",
                                    label: "激活边框颜色",
                                    value: base?.activeBorderColor,
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
                    label: "悬浮面板",
                    children: [
                        {
                            type: "grid",
                            children: [
                                {
                                    key: "colorPrimary",
                                    type: "color-picker",
                                    label: "单元格选中背景",
                                    value: suspend?.colorPrimary,
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
                                {
                                    key: "cellActiveWithRangeBg",
                                    type: "color-picker",
                                    label: "单元格选取范围内背景",
                                    value: suspend?.cellActiveWithRangeBg,
                                    config: {
                                        showText: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            key: "locale",
            type: "radio",
            label: "语言",
            value: config?.locale,
            config: {
                options: [
                    {
                        label: "中文",
                        value: "zh",
                    },
                    {
                        label: "英文",
                        value: "en",
                    },
                ],
            },
        },
    ];

    return (
        <div style={{ padding: 10 }}>
            <LCGUI schema={schema} onFieldChange={onFieldChange} />
        </div>
    );
};

export const BaseRangePickerFieldMapping: React.FC<ConfigType> = props => {
    const { controller } = props;
    const config = controller.config?.globalVariable ?? {};
    const schema: Control = {
        key: "globalVariable",
        type: "grid",
        children: [
            {
                key: "start",
                type: "input",
                label: "开始时间",
                value: config.start,
                config: {},
            },
            {
                key: "end",
                type: "input",
                label: "结束时间",
                value: config.end,
                config: {},
            },
        ],
    };

    const onFieldChange = (fieldChangeData: FieldChangeData) => {
        controller.update(fieldChangeData.dataFragment);
    };

    return (
        <div style={{ padding: 10 }}>
            <LCGUI schema={schema} onFieldChange={onFieldChange} />
        </div>
    );
};
