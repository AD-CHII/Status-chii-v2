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

// เปลี่ยนทุกอย่างได้นะครับ แต่ยกเว้นบรรทัดที่มีคำว่า // ห้ามลบห้ามเปลี่ยน > ชื่อ open และ offline ห้ามไปแก้ไขมันนะครับ
