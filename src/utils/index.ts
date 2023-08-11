const skinColors = [
    '#FFD6E0',
    '#F9C9B6',
    '#F8D9CE',
    '#DEB3A3',
    '#C89583',
    '#9C6458',
    '#AC6651',
]
const commonColors = [
    ...skinColors,
    '#77311D',
    '#9287FF',
    '#6BD9E9',
    '#FC909F',
    '#F4D150',
    '#E0DDFF',
    '#D2EFF3',
    '#FFEDEF',
    '#FFEBA4',
    '#506AF4',
    '#F48150',
    '#48A99A',
    '#FFB900',
    '#C09FFF',
    '#FD6F5D',
    '#FFFFFF',
    '#000000'
]
const backgroundColor = [
    ...commonColors,
    'linear-gradient(45deg, #E3648C, #D97567)',
    'linear-gradient(62deg, #8EC5FC, #E0C3FC)',
    'linear-gradient(90deg, #ffecd2, #fcb69f)',
    'linear-gradient(120deg, #a1c4fd, #c2e9fb)',
    'linear-gradient(-135deg, #fccb90, #d57eeb)',
    'transparent',
]

export const avatarSettings:any = {
    // wrapper: {
    //     title: '背景形状',
    //     shapeList: ['circle', 'square', 'squircle', 'diamond', 'heart', 'rounded-square', 'star'],
    //     colorList: backgroundColor,
    // },
    face: {
        title: '脸型',
        shapeList: ['base'],
        colorList: skinColors,
    },
    hair: {
        title: '发型/头饰',
        shapeList: ['fonze', 'funny', 'clean', 'punk', 'danny', 'wave', 'turban', 'pixie', 'beanie'],
        colorList: commonColors,
    },
    ear: {
        title: '耳朵',
        shapeList: ['attached', 'detached'],
    },
    earrings: {
        title: '耳环',
        shapeList: ['hoop', 'stud', 'none'],
    },
    eyebrows: {
        title: '眉毛',
        shapeList: ['up', 'down', 'eyelashesup', 'eyelashesdown'],
    },
    eyes: {
        title: '眼睛',
        shapeList: ['ellipse', 'smiling', 'eyeshadow', 'round'],
    },
    nose: {
        title: '鼻子',
        shapeList: ['curve', 'round', 'pointed'],
    },
    glasses: {
        title: '眼镜',
        shapeList: ['round', 'square', 'none'],
    },
    mouth: {
        title: '嘴巴',
        shapeList: ['frown', 'laughing', 'nervous', 'pucker', 'sad', 'smile', 'smirk', 'surprised'],
    },
    beard: {
        title: '胡子',
        shapeList: ['scruff', 'none'],
    },
    clothes: {
        title: '衣服',
        shapeList: ['crew', 'collared', 'open'],
        colorList: commonColors,
    },
}