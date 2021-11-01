FROM fusuf/whatsasena:latest

RUN git clone https://github.com/masterirc/Rukii /root/Rukii
WORKDIR /root/Rukii/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
