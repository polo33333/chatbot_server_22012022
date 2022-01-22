require('dotenv').config();
const fs = require('fs');
// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');
const sR = require('../functions/M_SendResponse.function');
const message = require('../functions/C_String.function');
// Creates a client
const client = new speech.SpeechClient();


exports.quickstart = async (req, res) => {


    try {
        //console.log(process.env)
        // The path to the remote LINEAR16 file
        // const filePath = './wit_resource/input1.wav';

        // const file = fs.readFileSync(filePath);
        // //console.log(file)
        // const audioBytes = file.toString('base64');

        // // The audio file's encoding, sample rate in hertz, and BCP-47 language code
        // const audio = {
        //     content: audioBytes,
        // };
        // const config = {
        //     audioChannelCount: 1,
        //     enableAutomaticPunctuation: false,
        //     enableSpeakerDiarization: true,
        //     encoding: "LINEAR16",
        //     sampleRateHertz: 44100,
        //     languageCode: "vi-VN",
        //     model: "default",
        // };
        // const request = {
        //     audio: audio,
        //     config: config,
        // };

        // // Detects speech in the audio file
        // const [response] = await client.recognize(request);
        // const transcription = response.results
        //     .map(result => result.alternatives[0].transcript)
        //     .join('\n');
        // console.log(`Transcription: ${transcription}`);

        return sR.sendResponse(res, 200, process.env, message.getSuccess);


    } catch (error) {

        console.log('Error[SpeechToText:quickstart]: ' + error);
        return sR.sendResponse(res, 400, null, error);
    }
};
