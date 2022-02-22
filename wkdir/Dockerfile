
FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Test2022s/SL-ALFHA /root/4.5
WORKDIR /root/1.0/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
