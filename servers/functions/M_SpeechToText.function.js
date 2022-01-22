require('dotenv').config();
const fs = require('fs');
// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
// Creates a client
const client = new speech.SpeechClient();
const http = require('https'); // or 'https' for https:// URLs
const fs2 = require('fs');
const Core = require('../functions/M_Core.function');




module.exports = {

    quickstart: async (senderId, channel, token, botId,url) => {

        //let filePath = await dowloadFile(url);
        let fileName = 'audio_' + Date.now().toString();
        let fileInPath = "audio/" + fileName + ".mp4";
        let fileOutPath = "audio/" + fileName + ".wav"



        dowloadFile(url, fileInPath, fileOutPath);

        convertMp4ToWAV(fileInPath, fileOutPath, null);


        return await speechToText(senderId, channel, token, botId,fileOutPath);

    },
}


speechToText = async (senderId, channel, token, botId,fileOutPath) => {


    setTimeout(async function () {
        console.log(3)
        let file = fs.readFileSync(fileOutPath);
        //console.log(file)
        let audioBytes = file.toString('base64');

        // The audio file's encoding, sample rate in hertz, and BCP-47 language code
        let audio = {
            content: audioBytes,
        };
        let config = {
            audioChannelCount: 1,
            enableAutomaticPunctuation: false,
            enableSpeakerDiarization: true,
            encoding: "LINEAR16",
            sampleRateHertz: 44100,
            languageCode: "vi-VN",
            model: "default",
        };
        const request = {
            audio: audio,
            config: config,
        };

        // Detects speech in the audio file
        const [response] = await client.recognize(request);
        const transcription = response.results
            .map(result => result.alternatives[0].transcript)
            .join('\n');
        console.log(`Transcription: ${transcription}`);

        return await Core.handleText(senderId, transcription, channel, token, botId);;
    }, 3000)


}


convertMp4ToWAV = async (pathIn, pathOut, type) => {


    //let track = 'audio/input.mp4';//your path to source file
    let ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
    let ffmpeg = require('fluent-ffmpeg');
    ffmpeg.setFfmpegPath(ffmpegPath);

    setTimeout(function () {
        console.log(2)
        ffmpeg(pathIn)
            .toFormat('wav')

            .on('error', (err) => {
                console.log('An error occurred: ' + err.message);
            })
            .on('progress', (progress) => {
            })
            .on('end', () => { })
            .save(pathOut)
    }, 1500)
}


dowloadFile = async (url, fileInPath, fileOutPath) => {


    setTimeout(async function () {
        console.log(1)
        let file = fs.createWriteStream(fileInPath);
        let request = await http.get(url, function (response) {
            response.pipe(file);
            // file.on('finish', async function () {

            // });

        });
    }, 500)

}
