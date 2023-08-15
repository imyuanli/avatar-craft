import {Collapse} from "antd";
import {CaretRightOutlined, CheckOutlined} from "@ant-design/icons";
import React from "react";
import {useAtom} from "jotai";
import {avatarOptionsAtom} from "@/store";

interface ColorListProps {
    type: string;
    colorList: string[];
}

const ColorList: React.FunctionComponent<ColorListProps> = ({type, colorList}) => {

    const [avatarOptions, setAvatarOptions] = useAtom(avatarOptionsAtom)
    const handleSelectColor = (color: string) => {
        setAvatarOptions(prev => {
            return {
                ...prev,
                [type]: {
                    ...prev[type],
                    color
                }
            }
        })
    }

    const renderChildren = () => (
        <div className={'grid grid-cols-6 gap-2 justify-items-center'}>
            {colorList.map(color => {
                const isActive = color === avatarOptions[type]?.color
                return (
                    <div
                        key={color}
                        style={{
                            background: color,
                            boxShadow: isActive ? `0 0 0 2px ${color}` : ''
                        }}
                        className={`w-4 h-4 p-1 flex-center rounded-full cursor-pointer transition duration-300`}
                        onClick={() => {
                            handleSelectColor(color)
                        }}
                    >
                        {isActive && <CheckOutlined/>}
                    </div>
                )
            })}
        </div>
    )

    return (
        <Collapse
            bordered={false}
            expandIcon={({isActive}) => {
                return (
                    <CaretRightOutlined
                        style={{color: 'rgba(255,255,255,.7)'}}
                        rotate={isActive ? 90 : 0}
                    />
                )
            }}
            items={[{
                key: '1',
                label: <div className={'text-base text-white-700'}>颜色</div>,
                children: renderChildren(),
            }]}
            style={{padding: '0px'}}
            ghost
            collapsible={'icon'}
        />
    );
}


export default ColorList