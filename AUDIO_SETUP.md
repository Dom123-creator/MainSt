# Audio Narration Setup Guide

## Natural Human Voice with ElevenLabs

The "Turn Website Visitors into Leads" tool includes an audio narration feature with a natural-sounding human voice.

### Features:
- 🎙️ **Natural Male Voice** - Sounds like a friendly guy in his mid-30s
- ⏯️ **Full Controls** - Play, pause, stop, and seek through audio
- 📊 **Progress Tracking** - Visual progress bar with time display
- 🔄 **Smart Fallback** - Uses browser TTS if API key not configured

---

## Setup Instructions

### Option 1: Use ElevenLabs API (Recommended - Best Quality)

1. **Sign Up for ElevenLabs** (Free Tier Available)
   - Visit: https://elevenlabs.io
   - Create a free account
   - Free tier includes: **10,000 characters/month**

2. **Get Your API Key**
   - Go to your Profile Settings
   - Navigate to API Keys section
   - Click "Create API Key"
   - Copy the key

3. **Add to Your Environment**
   - Open `.env.local` file in the project root
   - Find the line: `VITE_ELEVENLABS_API_KEY=your_elevenlabs_api_key_here`
   - Replace with your actual key: `VITE_ELEVENLABS_API_KEY=sk_xxxxxxxxxxxxx`
   - Save the file

4. **Restart Dev Server**
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```

5. **Test the Voice**
   - Navigate to Growth page
   - Click "Turn Website Visitors into Leads" tool
   - Click the Play button on the audio guide
   - You should hear a natural human voice!

### Option 2: Use Browser TTS (No Setup Required)

If you don't add an ElevenLabs API key, the component automatically falls back to your browser's built-in Text-to-Speech engine.

**Pros:**
- ✅ No API key needed
- ✅ Works offline
- ✅ Free forever

**Cons:**
- ⚠️ More robotic sound
- ⚠️ Voice quality varies by browser/OS
- ⚠️ Limited voice customization

---

## Voice Characteristics

### ElevenLabs Voice (Adam)
- **Age**: Mid-30s
- **Tone**: Relaxed, friendly, conversational
- **Accent**: American English
- **Style**: Blue collar, approachable
- **Quality**: Studio-quality audio

### Browser TTS Fallback
- **Voice**: Best available male voice on your system
- **Pitch**: Slightly lower (0.85)
- **Rate**: Slightly slower (0.95)
- **Quality**: Varies by device

---

## Troubleshooting

### Audio Not Playing?
1. Check browser console for errors
2. Verify API key is correct (if using ElevenLabs)
3. Check internet connection (required for ElevenLabs)
4. Try refreshing the page

### Robotic Voice?
- This means you're using browser TTS (fallback mode)
- Add your ElevenLabs API key to get natural voice
- Check that `.env.local` has the correct key format

### "API Key Invalid" Error?
- Double-check you copied the entire key
- Make sure key starts with proper prefix
- Verify key is active in ElevenLabs dashboard

---

## Cost Information

### ElevenLabs Free Tier
- **10,000 characters/month** free
- Our audio script is ~1,500 characters
- That's **~6-7 plays per month** on free tier
- Upgrade available if you need more

### Browser TTS
- **100% Free**
- **Unlimited usage**
- No API key needed

---

## Technical Details

### File Location
- Component: `src/components/AudioNarration.tsx`
- Tool Data: `src/data/mockData.ts` (tool ID "1")
- Modal Integration: `src/components/ToolModal.tsx`

### API Used
- **Primary**: ElevenLabs Text-to-Speech API v1
- **Voice ID**: `pNInz6obpgDQGcFmaJgB` (Adam)
- **Model**: `eleven_monolingual_v1`
- **Fallback**: Web Speech API

### Environment Variable
```bash
VITE_ELEVENLABS_API_KEY=your_key_here
```

---

## Need Help?

- ElevenLabs Docs: https://elevenlabs.io/docs
- ElevenLabs Support: support@elevenlabs.io
- Web Speech API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API

---

**Tip**: The first time you play audio, the component generates and caches it. Subsequent plays will be instant!
