// Script to generate natural-sounding audio using ElevenLabs
// Run: node scripts/generateAudio.js

import { writeFileSync } from 'fs';
import { config } from 'dotenv';

config();

const ELEVENLABS_API_KEY = process.env.VITE_ELEVENLABS_API_KEY;

if (!ELEVENLABS_API_KEY) {
  console.error('❌ Please set VITE_ELEVENLABS_API_KEY in .env.local');
  process.exit(1);
}

const audioText = `Hey there! Let me walk you through how to turn your website visitors into actual paying customers. Now, I know technology can seem complicated, but trust me, this is easier than changing an oil filter. First thing you're gonna do is pick your chatbot tool. I recommend starting with Tidio - it's like the reliable pickup truck of chatbots. Simple, gets the job done, and won't break the bank. Step two, you'll connect it to your website. It's literally just copying and pasting a piece of code - if you can copy your buddy's phone number, you can do this. Then comes the fun part - teaching your bot what to say. Think of it like training a new employee, but this one never calls in sick! Write out how you'd greet a customer walking into your shop. Keep it friendly, keep it real. 'Hey! Need help with something?' works way better than some fancy corporate speak. Next, set up your lead capture. This is where the magic happens. When someone asks about pricing or services, your bot asks for their name, phone number, and what they need. Boom - you got yourself a qualified lead while you were out fishing or sleeping. Finally, connect it to your phone or email so you get notified right away. Nothing fancy, just good old-fashioned follow-up, but automated. Remember, the goal here isn't to replace you - it's to catch the customers you'd miss when you're busy doing actual work. Set it up once, and it works for you 24-7. That's it! Now get out there and start capturing those leads!`;

async function generateAudio() {
  console.log('🎙️ Generating steady broadcaster voice audio...');

  try {
    // Using "Daniel" - steady broadcaster voice for professional, authoritative tone
    const response = await fetch(
      'https://api.elevenlabs.io/v1/text-to-speech/onwK4e9ZLuTAKqWW03F9', // Daniel voice
      {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text: audioText,
          model_id: 'eleven_multilingual_v2', // More natural model
          voice_settings: {
            stability: 0.65, // Higher for steady, consistent broadcaster tone
            similarity_boost: 0.80, // Good balance for natural clarity
            style: 0.45, // Moderate expressiveness for professional delivery
            use_speaker_boost: true
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const audioBuffer = await response.arrayBuffer();
    writeFileSync('public/audio/visitor-conversion-guide.mp3', Buffer.from(audioBuffer));

    console.log('✅ Audio generated successfully!');
    console.log('📁 Saved to: public/audio/visitor-conversion-guide.mp3');
    console.log('🎉 You can now use this audio in your app without API calls!');

  } catch (error) {
    console.error('❌ Error generating audio:', error);
    process.exit(1);
  }
}

generateAudio();
