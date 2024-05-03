const TelegaAPI = require('node-telegram-bot-api')

const token = '6800802674:AAH_z_4uADc6DYqr9NOtvxee7BLNV5kPv2s'

const bot = new TelegaAPI(token, {polling: true})

const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text:'текст1', callback_data:'1'}],
            [{text:'текст2', callback_data:'2'}],
            [{text:'текст3', callback_data:'3'}],
        ]
    })
}

// установка подсказки для команд

bot.on('message', async msg => {
    const text = msg.text
    const chatID = msg.chat.id
    if (text === '/start'){
        await bot.sendMessage(chatID, `Добро пожаловать ${msg.from.first_name}`, gameOptions)
    }

    await bot.sendSticker(chatID, 'https://sl.combot.org/lil_lance/webp/2xf09f8ca7.webp')

    await bot.sendMessage(chatID, `Ты написал мне ${text}`)
})

bot.on('callback_query', msg => {
    const data = msg.data
    const chatID = msg.message.chat.id
    bot.sendMessage(chatID, `Ты выбрал - ${data}`)

})