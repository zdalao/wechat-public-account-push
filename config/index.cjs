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
            "id": "ostKU6hgy-SFd8XBAIXBN7Z79Z8Y\t"
        }
    ],
    "USERS": [
        {
            "name": "宝子",
            "id": "ostKU6hgy-SFd8XBAIXBN7Z79Z8Y",
            "useTemplateId": "Qoo1srty9vFMokheSk_BOgcHagjwD8aplrrWGSmJ3OE",
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
    ],
    "SWITCH": {
        "weather": true,
        "holidaytts": true,
        "CIBA": false,
        "oneTalk": true,
        "earthyLoveWords": false,
        "momentCopyrighting": false,
        "poisonChickenSoup": false,
        "poetry": false,
        "horoscope": true,
        "birthdayMessage": true,
        "courseSchedule": false

    }
}



module.exports = USER_CONFIG

