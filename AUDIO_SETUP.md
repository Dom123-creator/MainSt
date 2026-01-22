# Audio Narration Setup Guide

## Ultra-Natural Human Voice

The "Turn Website Visitors into Leads" tool includes an audio narration feature with an incredibly natural-sounding human voice.

### Features:
- 🎙️ **Premium Natural Voice** - Sounds exactly like a real person (mid-30s, conversational)
- ⏯️ **Full Audio Controls** - Play, pause, stop, and seek through audio
- 📊 **Progress Tracking** - Visual progress bar with time display
- 🎯 **3-Tier System** - Pre-generated file → API → Browser TTS
- ✨ **Always Works** - Smart fallback ensures audio always plays

---

## Setup Instructions (Choose One)

### Option 1: Pre-Generate Audio File (RECOMMENDED - Best Quality & Free)

Generate audio once, use forever. No API calls, instant loading, perfect quality every time!

1. **Get ElevenLabs API Key** (One-time setup)
   - Visit: https://elevenlabs.io
   - Create free account
   - Get API key from Profile Settings
   - Free tier: 10,000 chars/month (enough for this!)

2. **Add API Key to .env.local**
   ```bash
   VITE_ELEVENLABS_API_KEY=your_actual_key_here
   ```

3. **Generate the Audio File**
   ```bash
   npm run generate:audio
   ```

   This creates: `public/audio/visitor-conversion-guide.mp3`

4. **Done!** 🎉
   - Audio file is now permanent
   - No more API calls needed
   - Instant loading every time
   - Perfect quality always

**Why This is Best:**
- ✅ Generate once, use forever
- ✅ No API quota usage after generation
- ✅ Faster loading (no API delay)
- ✅ Works offline
- ✅ Studio-quality audio
- ✅ No recurring costs

---

### Option 2: Use ElevenLabs API Directly (On-Demand Generation)

If you prefer dynamic generation (generates audio on each page load):

1. Add API key to `.env.local` (see Option 1, step 1-2)
2. Don't run the generate script
3. Audio will be generated via API each time
4. Uses your API quota on each play

---

### Option 3: Use Browser TTS (No Setup Required)

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

### ElevenLabs Voice (Daniel)
- **Type**: Steady Broadcaster
- **Tone**: Professional, authoritative, steady and consistent
- **Accent**: American English
- **Style**: Clear, confident narrator with broadcaster quality
- **Model**: Multilingual V2 (most natural model)
- **Quality**: Studio-quality, professional broadcasting tone
- **Settings**: Higher stability (0.65), balanced clarity (0.80), moderate expressiveness (0.45)

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
- **Voice ID**: `onwK4e9ZLuTAKqWW03F9` (Daniel - Steady Broadcaster)
- **Model**: `eleven_multilingual_v2`
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
