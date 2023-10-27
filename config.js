var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
         "送给我亲爱的妈妈：",      
        "今天是你的生日~？（虽然我忘了 嘻嘻）",
        "那就祝妈妈生日快乐！",
        "天天开心！身体健康 永远年轻奥~（弄了好久嘞）",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        //"校  园  霸  凌": "./imgs/1.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "来点bgm",
        bannar_coming: "衬托一下氛围~",
        balloons_flying: "好像少点东西",
        cake_fadein: "我爹不给蛋糕？我给！",
        light_candle: "蜡烛？",
        wish_message: "生日快乐！",
        story: "Dear 妈妈",
    }
};
