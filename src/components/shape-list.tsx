import React from "react";
import {useAtom} from "jotai";
import {avatarOptionsAtom} from "@/store";
import {StopOutlined} from "@ant-design/icons";

interface ShapeListProps {
    type: string;
    shapeList: string[];
}

const ShapeList: React.FunctionComponent<ShapeListProps> = ({type, shapeList}) => {

    const [avatarOptions, setAvatarOptions] = useAtom(avatarOptionsAtom)
    const handleSelectShape = (shape: string) => {
        setAvatarOptions(prev => {
            return {
                ...prev,
                [type]: {
                    ...prev[type],
                    shape
                }
            }
        })
    }

    return (
        <div className={'grid grid-cols-4 gap-4 w-full justify-items-center'}>
            {shapeList.map(shape => {
                const isActive = avatarOptions[type]?.shape == shape ? 'bg-white/20' : ''
                return (
                    <div
                        key={shape}
                        className={'rounded-md flex-center cursor-pointer'}
                        onClick={() => handleSelectShape(shape)}
                    >
                        <div
                            className={`w-[48px] h-[48px] rounded-md p-1 flex-center ${isActive} transition duration-300`}>
                            {
                                type === 'wrapper' ?
                                    <div
                                        className={`w-[30px] h-[30px] bg-white/60 ${shape == 'rounded-3xl' ? 'rounded-md' : shape}`}/>
                                    :
                                    <>
                                        {
                                            shape == 'none' ?
                                                <StopOutlined style={{color: "white", fontSize: 20}}/>
                                                :
                                                <img
                                                    src={`/svg/${type}/${shape}.svg`}
                                                    className={'w-full h-full'}
                                                    alt=""
                                                />
                                        }
                                    </>
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    );
}


export default ShapeList