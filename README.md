#BOT-CRIPTO

Este é um script de negociação de criptomoedas que usa a API da Binance para obter dados de preços e tomar decisões de compra e venda com base na média móvel simples (SMA). Aqui está uma explicação detalhada:

1. **axios**: É uma biblioteca popular do Node.js usada para fazer solicitações HTTP.
2. **SYMBOL, BUY_PRICE, SELL_PRICE**: São constantes que representam o símbolo da criptomoeda (neste caso, BTCUSDT que é Bitcoin to USDT), o preço de compra e o preço de venda.
3. **API_URL**: É a URL da API da Binance. Neste caso, está usando a versão de teste.
4. **isOpened**: É uma variável booleana que rastreia se uma posição de compra está aberta.
5. **calcSMA(data)**: É uma função que calcula a Média Móvel Simples (SMA) dos preços de fechamento das velas.
6. **start()**: É a função principal que é chamada a cada 3 segundos (definido pelo `setInterval`). Esta função faz o seguinte:
   - Busca os dados das últimas 21 velas de 15 minutos para o símbolo especificado.
   - Calcula o preço atual (último preço de fechamento).
   - Calcula as SMAs de 13 e 21 períodos.
   - Com base nas SMAs, decide se deve “Comprar”, “Vender” ou “Aguardar”. Se a SMA de 13 períodos for maior que a SMA de 21 períodos e nenhuma posição de compra estiver aberta, então decide “Comprar”. Se a SMA de 13 períodos for menor que a SMA de 21 períodos e uma posição de compra estiver aberta, então decide “Vender”. Caso contrário, decide “Aguardar”.

Por favor, note que este é um script de exemplo e não deve ser usado para negociação real sem a devida validação e testes. Além disso, a negociação de criptomoedas envolve riscos significativos. Você deve entender completamente esses riscos antes de se envolver em negociações ao vivo.

​              