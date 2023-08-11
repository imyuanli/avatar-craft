import React from "react";

interface ShapeListProps {
    shapeList: string[];
    type: string;
}

const ShapeList: React.FunctionComponent<ShapeListProps> = ({shapeList, type}) => {
    return (
        <div className={'grid grid-cols-4 gap-2 w-full'}>
            {shapeList.map(shape => (
                <div key={shape} className={'p-2 rounded-md flex-center'}>
                    {
                        shape == 'none' ?
                            <div className={'w-[40px] h-[48px]'}/>
                            :
                            <img src={`/${type}/${shape}.svg`} className={'w-[40px] h-[48px]'} alt=""/>
                    }
                </div>
            ))}
        </div>
    );
}


export default ShapeList