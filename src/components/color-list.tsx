import {Collapse} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";

const ColorList = ({colorList}) => {
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
                label: <div className={'text-base mb-2 text-white-700'}>颜色</div>,
                children: <div className={'grid grid-cols-6 gap-2'}>
                    {colorList.map(
                        color =>
                            <div style={{background: color}}
                                 key={color}
                                 className={'w-6 h-6 rounded-full border border-gray-200 cursor-pointer'}
                            />
                    )}
                </div>,
            }]}
            style={{padding: '0px'}}
        />
    );
}


export default ColorList