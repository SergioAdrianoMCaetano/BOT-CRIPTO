//BIBLIOTECA PARA ACESSAR APIS
const axios = require("axios");

const SYMBOL = "BTCUSDT";
const BUY_PRICE = 69536;
const SELL_PRICE = 70553;

//URL DE TESTE
const API_URL = "https://testnet.binance.vision";//https://api.binance.com

//SE ESTÁ COMPRADO
let isOpened = false;

//OBTER A MÉDIA MÓVEL
function calcSMA(data){
    const closes = data.map(candle => parseFloat(candle[4]));
    const sum = closes.reduce((a,b) => a + b);
    return sum / data.length;
}

async function start(){
    //PEGAR OS DADOS NA API DE DADOS DAS VELAS BINANCE
    //21 candles no intervalor de 15 minutos + BTCUSDT
    const {data} = await axios.get(API_URL + "/api/v3/klines?limit=21&interval=15m&symbol=" + SYMBOL);
    
    //BUSCA AS ÚLTIMAS VELAS
    const candle = data[data.length - 1];
    //PEGAR O ARRAY NA POSIÇÃO 4 E CONVERTE PARA NÚMERO
    const price = parseFloat(candle[4]);

    //LIMPAR A TELA E PRINTAR APENAS O PREÇO BTC
    console.clear();
    console.log("Price: " + price);

    //CALCULAR AS MÉDIAS MÓVEIS     
    const sma21 = calcSMA(data);
    const sma13 = calcSMA(data.slice(8))
    console.log("SMA (13): " + sma13);
    console.log("SMA (21): " + sma21);
    console.log("Is Opened?" + isOpened);

    //LÓGICA DE PROGRAMAÇÃO
    if(sma13 > sma21 && isOpened === false){
        console.log("Comprar");
        isOpened = true;
    }
    else if(sma13 < sma21 && isOpened === true){
        console.log("Vender");  
        isOpened = false;
    }
    else
        console.log("Aguardar");
}

setInterval(start, 3000);

start();