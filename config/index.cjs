/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */

const USER_CONFIG = {
    "APP_ID": "wx7f51a01ab1e13c77",
    "APP_SECRET": "5e4d5a5aa9d2fc619611febb7194b842",
    "IS_SHOW_COLOR": false,
    "CALLBACK_TEMPLATE_ID": "PKO-bNWbIyl4-nvottZ6LJjKr8mamNULIxCF42jmikE",
    "CALLBACK_USERS": [
        {
            "name": "自己",
            "id": "ostKU6hgy-SFd8XBAIXBN7Z79Z8Y"
        }
    ],
    "USERS": [
        {
            "name": "宝子",
            "id": "ostKU6hgy-SFd8XBAIXBN7Z79Z8Y",
            "useTemplateId": "ECWyqjQWykDuS1dnVykdTLIt-ZqJN9kSIlBxKtfNuH4",
            "province": "山东",
            "city": "乳山",
            "horoscopeDate": "10-27",
            "horoscopeDateType": "今日",
            //"openUrl": "www.baidu.com",
            "festivals": [
                {
                    "type": "*生日",
                    "name": "宝子",
                    "date": "10-27",
                    "year": "1994"
                },    
            ],
            "customizedDateList": [
              // 在一起的日子
                { keyword: 'love_day', date: '2014-01-14' },
            ]
        }
/*        {
            "name": "宝子",
            "id": "ostKU6rVWKJSqRpK01iIUB7fBrbg",
            "useTemplateId": "UtNNYsc62fv553irFxDLPGGoF7oKK9D6nsO8zXKfNoE",
            "province": "山东",
            "city": "乳山",
            "horoscopeDate": "10-27",
            "horoscopeDateType": "今日",
            //"openUrl": "www.baidu.com",
            "festivals": [
                {
                    "type": "*生日",
                    "name": "宝子",
                    "date": "10-27",
                    "year": "1994"
                },    
            ],
            "customizedDateList": [
              // 在一起的日子
                { keyword: 'love_day', date: '2014-01-14' },
            ]
        }*/
    ],
 TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '0c9de0b5f21f7c33f146c1ca5c7565d5',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: false,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    eveningGreeting: false,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 1,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 0,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'title',
  },
    "SWITCH": {
        "weather": false,
        "holidaytts": true,
        "CIBA": false,
        "oneTalk": true,
        "earthyLoveWords": true,
        "momentCopyrighting": false,
        "poisonChickenSoup": false,
        "poetry": false,
        "horoscope": false,
        "birthdayMessage": true,
        "courseSchedule": false
    }
}



module.exports = USER_CONFIG

