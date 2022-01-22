module.exports = {
  secret: 'jsonwebtoken',
  refreshTokenSecret: "some-s3cret-refre2h-token",
  tokenLife: 900, // 15 phút
  refreshTokenLife: 86400,// một ngày
  // tokenLife: 60, // 15 phút
  // refreshTokenLife: 120,// một ngày
  url: 'mongodb://localhost:27017/chatbot',
  access_token: 'A3UUASVNN7RW762U5MEYATEZ7YP5OYB3',
  auth: 'Bearer ',
  version: '?v=20200611',
  // url:'mongodb://polo33333:12345678.c@ds135537.mlab.com:35537/ifood',
  default_image: "/images/default_image.png",
  suggest_image: "/images/default_image.png",
  suggest_content: "Ý định của bạn là?",
  fa_verify_Code: '123456789',
  client_id: '139098647389670',
  client_secret:'c708833609a18e28a609457b04d6ad46',
  // client_id: '1271896706561496',
  // client_secret:'a43361631b5a88fa22c6525b7767fc82',
  server_url: "https://bot.chatcare.vn/api/ai",
  host_url: "https://bot.chatcare.vn",
};